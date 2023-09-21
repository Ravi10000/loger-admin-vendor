import {
    Button,
    Card,
    Checkbox,
    Col,
    Row,
    Select,
    Space,
    Typography
  } from 'antd';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  
  import { ArrowLeftOutlined } from '@ant-design/icons';
  import { CardBottom, Container, MainWrapper } from 'src/components/Global';
  
  const Language = () => {
    const navigate = useNavigate();
  
    const options = [];
    for (let i = 10; i < 36; i++) {
      options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i
      });
    }
    const handleChange = value => {
      console.log(`selected ${value}`);
    };
  
    return (
      <>
        <MainWrapper>
          <Container>
            <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
              What language do you or your staff speak ?
            </Typography.Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        Select Language
                      </Typography.Title>
                      <Checkbox.Group>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Checkbox value="english">English</Checkbox>
                          <Checkbox value="french">French</Checkbox>
                          <Checkbox value="arabic">Arabic</Checkbox>
                          <Checkbox value="spanish">Spanish</Checkbox>
                          <Checkbox value="italian">Italian</Checkbox>
                        </Space>
                      </Checkbox.Group>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        Add additional languages
                      </Typography.Title>
                      <Select
                        mode="multiple"
                        allowClear
                        size="large"
                        maxTagCount={6}
                        style={{ width: '100%' }}
                        placeholder="Select languages"
                        onChange={handleChange}
                        options={options}
                      />
                    </Space>
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
                          navigate('/hotel/parking');
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        size="large"
                        type="primary"
                        block
                        onClick={() => {
                          navigate('/hotel/rules');
                        }}
                      >
                        Continue
                      </Button>
                    </CardBottom>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Container>
        </MainWrapper>
      </>
    );
  };
  
  export default Language;
  