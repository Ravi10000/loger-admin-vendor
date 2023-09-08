import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const media = {
  apartmentIcon: '/assets/images/apartment-img-2.png'
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
                  <img src={media.apartmentIcon} alt="" />
                  <Typography.Title level={4}>
                    One apartment where guests can book the entire place
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
                      style={{ width: '100%' }}
                      onClick={() => {
                        navigate('/apartment/place');
                      }}
                    >
                      Continue
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      ghost
                      style={{ width: '100%' }}
                      onClick={() => {
                        navigate('/apartment/boarding');
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
