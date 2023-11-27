import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Space,
  Typography,
  Upload,
  App
} from 'antd';
import React, { forwardRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  CloseOutlined,
  DeleteOutlined,
  FileImageOutlined,
  LikeOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import styled from 'styled-components';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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

export const SortablePhoto = ({ id, faded, index, onDelete, ...props }) => {
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
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? 'span 2' : null,
    gridColumnStart: index === 0 ? 'span 2' : null,
    position: 'relative'
  };

  return (
    <div style={inlineStyles}>
      <Photo
        ref={setNodeRef}
        style={style}
        {...props}
        {...attributes}
        {...listeners}
      />
      <RemoveButton shape="circle" onClick={() => onDelete(id)}>
        <DeleteOutlined />
      </RemoveButton>
    </div>
  );
};

export const Photo = forwardRef(({ url, style, ...props }, ref) => {
  const inlineStyles = {
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    height: '100%',
    ...style
  };

  return <div ref={ref} style={inlineStyles} {...props} />;
});

const Gallery = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const { message } = App.useApp();

  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const uploadProps = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (_, files) => {
      const existingFiles = fileList.filter(
        file => !!files.find($ => $.name === file.name)
      );
      if (existingFiles.length) {
        message.error('File already exists');
        return false;
      }
      setFileList([
        ...fileList,
        ...files.map(file =>
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

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFileList(items => {
        const oldIndex = items.findIndex(item => item.uid === active.id);
        const newIndex = items.findIndex(item => item.uid === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  function handleDeletePhoto(id) {
    setFileList([...fileList.filter(item => item.uid !== id)]);
  }

  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical">
            <Typography.Title level={2}>
              What Does Your hotel Look Like ?
            </Typography.Title>
            <Typography.Paragraph style={{ marginBottom: '1.5rem' }}>
              <b>Upload at Least 12 Photos of your Property.</b> The More Your
              Upload. the More Likely You Are to Get Bookings. Your Add More
              Later.
            </Typography.Paragraph>
          </Space>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Upload.Dragger {...uploadProps} style={{ marginBottom: 8 }}>
                    <UploadIconWrapper style={{ marginBottom: 0 }}>
                      <FileImageOutlined />
                    </UploadIconWrapper>
                    <Typography.Text>Add Upto in 12 images</Typography.Text>
                    <Typography.Paragraph
                      style={{ marginTop: '2rem', marginBottom: 0 }}
                    >
                      Drag and Drop Your Photos Here
                    </Typography.Paragraph>
                  </Upload.Dragger>
                  {fileList.length > 0 && (
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
                  )}
                  <CardBottom direction="horizontal">
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
                        navigate('/hotel/cancellation-policy');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/availability');
                      }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
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
                          What if I Don’t Have Professional Photos?
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

export default Gallery;
