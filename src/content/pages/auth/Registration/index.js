import { Button, Col, Form, Input, Row, Select, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { countryCodes } from 'src/utils/country-codes';
import { useMutation } from '@tanstack/react-query';
import api from 'src/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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

const Registration = () => {
  const navigate = useNavigate();

  const register = useMutation({
    mutationFn: async data => {
      data.countryCode = data.countryCode ?? '+91';
      if (data.password !== data.confirmPassword) {
        toast.error("Password and Confirm Password doesn't match");
        return;
      }
      console.log({ data });
      const resposne = await api.post('/vendor/auth', data);
      console.log({ resposne });
      toast.success('Verification Email Sent To Your Email Address');
      navigate('/auth/verify');
    },
    onError: err => {
      console.log({ err });
      toast.error(err?.response?.data?.message ?? 'Something went wrong');
    }
  });
  return (
    <>
      <ContentWrapper>
        <LeftContent>
          <Container>
            <img src={media.logo} alt="" />
            {/* <FormWrapper> */}
            <Typography.Title level={2}>{'Registeration'}</Typography.Title>
            <Form
              layout="vertical"
              style={{ marginTop: '2rem' }}
              id="registration-form"
              onFinish={register.mutate}
            >
              <Row gutter={[16]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="First Name"
                    name="fName"
                    rules={[
                      {
                        required: true,
                        message: 'First Name required'
                      }
                    ]}
                  >
                    <Input size="large" placeholder="first name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item label="Last Name" name="lName">
                    <Input size="large" placeholder="last name" />
                  </Form.Item>
                </Col>
              </Row>
              <label>
                <span style={{ color: '#ff4d4f' }}>*</span> Mobile Number
              </label>
              <Space.Compact style={{ width: '100%' }}>
                <Form.Item name="countryCode">
                  <Select
                    style={{ width: 'auto' }}
                    size="large"
                    defaultValue="+91"
                    options={countryCodes}
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  style={{ width: '100%' }}
                  rules={[
                    {
                      required: true,
                      message: 'Mobile Number required'
                    }
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Space.Compact>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Email required'
                  }
                ]}
              >
                <Input
                  size="large"
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Item>
              <Row gutter={[16]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Password required'
                      }
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="atleast 8 characters"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Confirm Password required'
                      }
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="confirm password"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  form="registration-form"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph style={{ textAlign: 'center' }}>
              Already have an account? <Link to="/auth/login">Log in</Link>
            </Typography.Paragraph>
            {/* </FormWrapper> */}
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
