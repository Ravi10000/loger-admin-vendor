import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Space,
  Typography,
  Upload,
  App,
  Spin
} from 'antd';
import { forwardRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  CloseOutlined,
  DeleteOutlined,
  LikeOutlined
} from '@ant-design/icons';
import { Container, MainWrapper } from 'src/components/Global';
import styled from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  findHotelRoom,
  findProperty,
  updateHotelRooms,
  updateProperty
} from 'src/api/properties.req';
import onError from 'src/utils/onError';
import api from 'src/api';
import { useIsHotel, usePropertyId } from 'src/hooks/property-info.queries';

const UploadIconWrapper = styled(Typography.Paragraph)`
  color: ${props => props.theme.antd.colorPrimary};
  font-size: 3rem;
`;

const Grid = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.$columns}, 1fr)`,
  gridGap: 10,
  padding: props.theme.antd.paddingXS
}));

const RemoveButton = styled(Button)`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
`;

export const SortablePhoto = ({
  id,
  faded,
  index,
  removeFromFileList,
  deletePhotoFromDB,
  ...props
}) => {
  const sortable = useSortable({ id });
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition
  } = sortable;

  const commonStyle = {
    transition: 'unset' // Prevent element from shaking after drag
  };

  const style = transform
    ? {
        ...commonStyle,
        transform: CSS.Transform.toString(transform),
        transition: isDragging ? 'unset' : transition // Improve performance/visual effect when dragging
      }
    : commonStyle;

  const inlineStyles = {
    opacity: faded ? '0' : '1',
    transformOrigin: '0 0',
    height: props?.isMainPhoto ? 410 : 200,
    gridRowStart: props?.isMainPhoto ? 'span 2' : null,
    gridColumnStart: props?.isMainPhoto ? 'span 2' : null,
    position: 'relative'
  };

  return (
    <div style={inlineStyles}>
      <Photo
        className="_photo"
        ref={setNodeRef}
        style={{ ...style, position: 'relative' }}
        index={index}
        {...props}
        {...attributes}
        {...listeners}
      />
      {props?.isMainPhoto && <p className="_main-photo-text">Main Photo</p>}
      <RemoveButton
        shape="circle"
        onClick={async () => {
          removeFromFileList(id, index);
          if (props?.photoUrl) await deletePhotoFromDB();
        }}
      >
        <DeleteOutlined />
      </RemoveButton>
    </div>
  );
};

export const Photo = forwardRef(
  (
    { url, photoUrl, style, className, isMainPhoto, setMainPhotoIdx, ...props },
    ref
  ) => {
    // console.log(process.env.REACT_APP_SERVER_URL + '/images/' + photoUrl);
    const inlineStyles = {
      backgroundImage: `url("${
        photoUrl
          ? process.env.REACT_APP_SERVER_URL + '/images/' + photoUrl
          : url
      }")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'grey',
      height: '100%',
      // aspectRatio: !isMainPhoto ? '1 / 1' : 'auto',
      ...style
    };

    return (
      <div
        ref={ref}
        style={inlineStyles}
        {...props}
        className={className}
        onClick={() => {
          setMainPhotoIdx(props.index);
        }}
      >
        {!isMainPhoto && (
          <div className="_change-main-photo">
            <button>Set As Main Photo</button>
          </div>
        )}
      </div>
    );
  }
);

const PreviewGallery = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();
  const isHotel = useIsHotel();
  const { roomName } = useParams();
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [mainPhotoIdx, setMainPhotoIdx] = useState(0);
  const { message } = App.useApp();
  const { isFetching } = useQuery({
    queryKey: [
      roomName ? 'hotel-room' : 'property',
      propertyId,
      'propertyType'
    ],
    enabled: !!propertyId,
    refetchOnWindowFocus: false,
    initialData: {},
    queryFn: async () => {
      const res = roomName
        ? await findHotelRoom(propertyId, roomName, 'photos')
        : await findProperty(propertyId, 'photos propertyType');
      const content = roomName ? res?.data?.room : res?.data?.property;
      setFileList(content?.photos || content?.photos || []);
      const mainPhotoIdx = content?.photos?.findIndex(photo => photo.isMain);
      if (mainPhotoIdx !== -1) {
        setMainPhotoIdx(mainPhotoIdx);
      }
      return content;
    }
  });

  const { status, mutate } = useMutation({
    mutationFn: async () => {
      if (!fileList?.length) {
        toast.error('Please upload photos of your property');
        return;
      }
      const formData = new FormData();
      formData.append('propertyId', propertyId);
      formData.append('mainPhotoIdx', mainPhotoIdx);
      formData.append(
        'route',
        `/${isHotel ? 'hotel' : 'apartment'}/${propertyId}${
          roomName ? `/${roomName}` : ''
        }/preview-gallery`
      );
      if (roomName) formData.append('roomName', roomName);
      fileList.forEach(file => {
        if (file.url) formData.append('photos', file);
      });
      if (formData.get('photos')) {
        if (roomName) {
          console.log({ fileList });
          console.log({ mainPhoto: fileList[mainPhotoIdx] });
          await updateHotelRooms(formData);
        } else await updateProperty(formData);
      } else {
        let mainPhoto = fileList[mainPhotoIdx];
        if (roomName) {
          await api.put(`/hotel-rooms/photos`, {
            propertyId,
            roomName,
            photoId: mainPhoto._id,
            isMain: true
          });
        } else {
          await api.put(`/properties/photos`, {
            propertyId,
            photoId: mainPhoto._id,
            isMain: true
          });
        }
      }

      if (roomName) {
        navigate(`/hotel/${propertyId}/view`);
        return;
      }
      if (isHotel) {
        navigate(`/hotel/${propertyId}/view`);
        return;
      }
      navigate(`/apartment/${propertyId}/guest`);
    },
    onError
  });

  const { mutateAsync: deletePhotoFromDB } = useMutation({
    mutationFn: async (photoId, idx) => {
      const res = roomName
        ? await api.delete(
            `/hotel-rooms/photos/${propertyId}/${roomName}/${photoId}`
          )
        : await api.delete(`/properties/photos/${propertyId}/${photoId}`);
      console.log({ res });
    },
    onError: err => {
      console.log(err);
    }
  });

  //   const [activeId, setActiveId] = useState(null);
  //   const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const uploadProps = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (currentFile, files) => {
      const existingFiles = fileList.filter(
        file => files.findIndex($ => $.name === file.name) > -1
      );
      if (existingFiles.length) {
        message.error('File already exists');
        return false;
      }
      const images = files.filter(file => file.type.includes('image'));
      if (!currentFile.type.includes('image'))
        toast.error(`${currentFile.name} is not an image`);

      setFileList([
        ...fileList,
        ...images.map(file =>
          Object.assign(file, {
            url: URL.createObjectURL(file)
          })
        )
      ]);
      return false;
    },
    listType: 'picture-card',
    onPreview: file => {
      setPreviewImage(file.url);
      setPreviewOpen(true);
      setPreviewTitle(file.name);
    },
    fileList,
    multiple: true,
    showUploadList: false
  };

  useEffect(() => {
    return () => fileList.forEach(file => URL.revokeObjectURL(file.url));
  }, [fileList]);

  //   function handleDragStart(event) {
  //     setActiveId(event.active.id);
  //   }

  //   function handleDragEnd(event) {
  //     const { active, over } = event;

  //     if (active.id !== over.id) {
  //       setFileList(items => {
  //         const oldIndex = items.findIndex(item => item.uid === active.id);
  //         const newIndex = items.findIndex(item => item.uid === over.id);

  //         return arrayMove(items, oldIndex, newIndex);
  //       });
  //     }

  //     setActiveId(null);
  //   }

  //   function handleDragCancel() {
  //     setActiveId(null);
  //   }

  function handleDeletePhoto(id, idx) {
    if (idx === mainPhotoIdx) setMainPhotoIdx(0);
    setFileList([
      ...fileList.filter(item => {
        if (item.photoUrl) return item._id !== id;
        return item.uid !== id;
      })
    ]);
  }

  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical">
            <Typography.Title level={2}>
              {roomName
                ? 'What Does Your Room Look Like ?'
                : 'What Does Your Place Look Like ?'}
            </Typography.Title>
            <Typography.Paragraph style={{ marginBottom: '1.5rem' }}>
              <b>Upload at Least 12 Photos of your Property.</b> The More Your
              Upload. the More Likely You Are to Get Bookings. Your Add More
              Later.
            </Typography.Paragraph>
          </Space>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card style={{ minHeight: '200px', position: 'relative' }}>
                {isFetching ? (
                  <Spin
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ) : (
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    <Upload.Dragger
                      {...uploadProps}
                      style={{
                        marginBottom: 8,
                        background: 'transparent'
                      }}
                    >
                      {fileList?.length ? (
                        <div className="_upload-input">
                          <div>
                            <UploadIconWrapper style={{ marginBottom: 0 }}>
                              <img
                                src="/assets/images/image-upload-lg.png"
                                alt=""
                                width="60px"
                              />
                            </UploadIconWrapper>
                            <Typography.Text>Add images</Typography.Text>
                          </div>
                          <Typography.Paragraph
                            style={{
                              marginTop: '2rem',
                              marginBottom: 0,
                              maxWidth: '200px',
                              color: '#8d9297',
                              fontWeight: '600'
                            }}
                          >
                            Drag and Drop Your Photos Here
                          </Typography.Paragraph>
                          <div
                            style={{
                              //   width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '20px'
                            }}
                          >
                            <button
                              style={{
                                border: '1px dashed #0868f8',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                width: '200px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                              }}
                            >
                              <img
                                src="/assets/images/image-upload.png"
                                alt="upload"
                                width={20}
                              />
                              <span
                                style={{
                                  color: '#0868f8',
                                  fontWeight: 600,
                                  fontFamily: 'Montserrat',
                                  fontSize: '1rem'
                                }}
                              >
                                Upload
                              </span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <UploadIconWrapper>
                            <img
                              src="/assets/images/image-upload.png"
                              alt="upload"
                              width={50}
                            />
                          </UploadIconWrapper>
                          <Typography.Text>Add images</Typography.Text>
                          <Typography.Paragraph style={{ marginTop: '2rem' }}>
                            Drag and Drop Your Photos Here
                          </Typography.Paragraph>
                          <div
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '20px'
                            }}
                          >
                            <button
                              style={{
                                border: '1px dashed #0868f8',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                width: '200px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                              }}
                            >
                              <img
                                src="/assets/images/image-upload.png"
                                alt="upload"
                                width={20}
                              />
                              <span
                                style={{
                                  color: '#0868f8',
                                  fontWeight: 600,
                                  fontFamily: 'Montserrat',
                                  fontSize: '1rem'
                                }}
                              >
                                Upload
                              </span>
                            </button>
                          </div>
                        </>
                      )}
                    </Upload.Dragger>

                    {/* {fileList.length > 0 && (
                      <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragCancel={handleDragCancel}
                      >
                        <SortableContext
                          items={fileList}
                          strategy={rectSortingStrategy}
                        >
                          <Grid $columns={3}>
                            {fileList.map((item, index) => (
                              <SortablePhoto
                                id={item.uid}
                                key={item.uid}
                                url={item.url}
                                index={index}
                                onDelete={handleDeletePhoto}
                              />
                            ))}
                          </Grid>
                        </SortableContext>
                        <DragOverlay adjustScale={true}>
                          {activeId ? (
                            <Photo
                              url={
                                fileList.find(item => item.uid === activeId).url
                              }
                              index={fileList.findIndex(
                                item => item.uid === activeId
                              )}
                            />
                          ) : null}
                        </DragOverlay>
                      </DndContext>
                    )} */}
                    {/* <CardBottom direction="horizontal">
                      <Button
                        size="large"
                        type="primary"
                        ghost
                        icon={<ArrowLeftOutlined />}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                        onClick={() => {
                          // navigate('/apartment/host-profile');
                          navigate(-1);
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        size="large"
                        type="primary"
                        block
                        onClick={() => {
                          navigate(`/apartment/${propertyId}/guest`);
                        }}
                      >
                        Continue
                      </Button>
                    </CardBottom> */}
                  </Space>
                )}
              </Card>
            </Col>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    <Space
                      size="middle"
                      direction="horizontal"
                      style={{ alignItems: 'flex-start', width: '100%' }}
                    >
                      <Typography.Text style={{ fontSize: '2rem' }}>
                        <LikeOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          What if I Don't Have Professional Photos?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing
                        </Typography.Paragraph>
                      </Space>
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      />
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <div
                style={{
                  marginTop: '20px',
                  color: '#0868f8',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px'
                  // width: '50%'
                }}
              >
                <img
                  src="/assets/images/image-upload-2.png"
                  alt="upload"
                  width={30}
                />
                <span>Import Photos From Your Loger.ma Listing</span>
              </div>
            </Col>
          </Row>
          {!!fileList?.length && (
            <Grid
              $columns={4}
              style={{ marginTop: '50px', maxWidth: '1200px' }}
            >
              <SortablePhoto
                id={fileList[mainPhotoIdx]?._id ?? fileList[mainPhotoIdx]?.uid}
                key={fileList[mainPhotoIdx]?._id ?? fileList[mainPhotoIdx]?.uid}
                url={fileList?.[mainPhotoIdx]?.url}
                photoUrl={fileList?.[mainPhotoIdx]?.photoUrl}
                index={mainPhotoIdx}
                removeFromFileList={handleDeletePhoto}
                setMainPhotoIdx={setMainPhotoIdx}
                isMainPhoto={true}
                deletePhotoFromDB={() => {
                  deletePhotoFromDB(fileList?.[mainPhotoIdx]?._id);
                }}
              />
              {fileList.map((item, index) => {
                if (index === mainPhotoIdx) return null;
                return (
                  <SortablePhoto
                    id={item._id ?? item.uid}
                    key={item._id ?? item.uid}
                    url={item.url}
                    photoUrl={item.photoUrl}
                    index={index}
                    removeFromFileList={handleDeletePhoto}
                    deletePhotoFromDB={() => deletePhotoFromDB(item?._id)}
                    setMainPhotoIdx={setMainPhotoIdx}
                    isMainPhoto={mainPhotoIdx === index}
                  />
                );
              })}
            </Grid>
          )}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              maxWidth: '600px',
              marginTop: '30px'
            }}
          >
            <Button
              size="large"
              type="primary"
              ghost
              icon={<ArrowLeftOutlined />}
              style={{
                display: 'inline-flex',
                alignItems: 'center'
              }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
            <Button
              size="large"
              type="primary"
              block
              onClick={mutate}
              disabled={status === 'pending' || isFetching}
              // onClick={() => {
              //   navigate(`/apartment/${propertyId}/guest`);
              // }}
            >
              Continue
            </Button>
          </div>
        </Container>
      </MainWrapper>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img
          alt={previewTitle}
          style={{
            width: '100%'
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default PreviewGallery;
