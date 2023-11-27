import { Button, Card, Col, Form, Input, Row, Select, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COUNTRY_LIST as countryList } from 'src/constants/country';
import { EnvironmentOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';

const Property = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Where is the property you're listing ?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Form layout="vertical">
                  <Form.Item label="Country">
                    <Select
                      size="large"
                      options={countryList.map(({ name }) => ({
                        value: name,
                        label: name
                      }))}
                    />
                  </Form.Item>
                  <Form.Item label="Address">
                    <Input size="large" suffix={<EnvironmentOutlined />} />
                  </Form.Item>
                  <Row gutter={32}>
                    <Col xs={24} md={12}>
                      <Form.Item label="City">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label="Pincode">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
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
                        navigate('/apartment/place');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/apartment/location');
                      }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Property;
