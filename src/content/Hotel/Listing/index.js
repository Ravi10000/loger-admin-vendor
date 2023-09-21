import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, MainWrapper } from 'src/components/Global';

const media = {
  hotelIcon: '/assets/images/hotel-img-1.png'
};

const StyledCard = styled(Card)`
  .ant-space-item {
    text-align: center;
    width: 100%;
  }
`;

const Listing = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <StyledCard>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Paragraph>You're listing</Typography.Paragraph>
                  <img src={media.hotelIcon} alt="" />
                  <Typography.Title level={4}>
                  One Hotel Where Guests Can 
                  <br></br>
                  Book a Room
                  </Typography.Title>
                  <Typography.Paragraph>
                    Does this sound like your property?
                  </Typography.Paragraph>
                  <Space
                    size="middle"
                    direction="vertical"
                    style={{ width: '100%' }}
                  >
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/property');
                      }}
                    >
                      Continue
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      ghost
                      block
                      onClick={() => {
                        navigate('/hotel/oneboarding');
                      }}
                    >
                      No, need to make change
                    </Button>
                  </Space>
                </Space>
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Listing;
