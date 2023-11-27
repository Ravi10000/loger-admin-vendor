import { Button, Col, Form, Input, Row, Select, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const media = {
  logo: '/assets/images/logo.png',
  sideImg: '/assets/images/register-side-img.png'
};

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const RightContent = styled.div`
  width: 100%;
  display: none;

  @media (min-width: ${prop => prop.theme.antd.screenLG}px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${prop => prop.theme.antd.screenLG}px) {
    width: 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: ${prop => prop.theme.antd.screenMDMin}px) {
    max-width: ${prop => prop.theme.antd.screenSM}px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

const options = [
  {
    value: '+91',
    label: '+91'
  },
  {
    value: '+1',
    label: '+1'
  }
];

const Registration = () => {
  return (
    <>
      <ContentWrapper>
        <LeftContent>
          <Container>
            <img src={media.logo} alt="" />
            <FormWrapper>
              <Typography.Title level={2}>{'Registeration'}</Typography.Title>
              <Form layout="vertical" style={{ marginTop: '2rem' }}>
                <Row gutter={[16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Username" name="username">
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Contact Number" name="mobile">
                      <Space.Compact style={{ width: '100%' }}>
                        <Select
                          style={{ width: 'auto' }}
                          size="large"
                          defaultValue="+91"
                          options={options}
                        />
                        <Input size="large" />
                      </Space.Compact>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Email" name="email">
                  <Input
                    size="large"
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Item>
                <Row gutter={[16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Password" name="password">
                      <Input.Password
                        size="large"
                        placeholder="atleast 8 characters"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Confirm Password" name="confirmPassword">
                      <Input.Password size="large" iconRender={() => null} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block>
                    {'Register'}
                  </Button>
                </Form.Item>
              </Form>
              <Typography.Paragraph style={{ textAlign: 'center' }}>
                Already have an account? <Link to="/auth/login">Log in</Link>
              </Typography.Paragraph>
            </FormWrapper>
          </Container>
        </LeftContent>
        <RightContent>
          <Container>
            <img src={media.sideImg} alt="" />
          </Container>
        </RightContent>
      </ContentWrapper>
    </>
  );
};

export default Registration;
