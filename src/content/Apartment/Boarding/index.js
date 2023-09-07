import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

const media = {
  checkIcon: '/assets/images/checkbox-icon.png'
};

const MainWrapper = styled.div`
  padding-top: 3.5rem;
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const StyledCard = styled(Card)`
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.antd.colorPrimary};
  }

  .ant-space-item {
    text-align: center;
  }
`;

const CheckboxLabel = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;

  &.ant-btn.ant-btn-lg {
    height: 60px;
  }

  img {
    width: 30px;
  }
`;

const Boarding = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            How Many apartments are you listing ?
          </Typography.Title>
          <Row>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <StyledCard>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <CheckboxLabel type="primary" size="large">
                    <Space size="middle">
                      <img src={media.checkIcon} alt="" />
                      <span>One Apartment</span>
                    </Space>
                  </CheckboxLabel>
                  <CheckboxLabel type="primary" size="large">
                    <Space size="middle">
                      <img src={media.checkIcon} alt="" />
                      <span>Multiple Apartment</span>
                    </Space>
                  </CheckboxLabel>
                </Space>
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Boarding;
