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
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  CloseOutlined,
  FileImageOutlined,
  LikeOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import styled from 'styled-components';

const UploadIconWrapper = styled(Typography.Paragraph)`
  color: ${props => props.theme.antd.colorPrimary};
  font-size: 3rem;
`;

const Gallery = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const { message } = App.useApp();

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
    multiple: true
  };

  useEffect(() => {
    return () => fileList.forEach(file => URL.revokeObjectURL(file.url));
  }, [fileList]);

  console.log(fileList);

  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical">
            <Typography.Title level={2}>
              What Does Your Place Look Like ?
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
                        navigate('/apartment/host-profile');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        // navigate('/apartment/rules');
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
