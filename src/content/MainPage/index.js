import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { styled } from 'styled-components';

const media = {
  flatLogo: '/assets/images/flat-logo.png',
  apartmentLogo: '/assets/images/apartment-logo.png',
  hotelLogo: '/assets/images/hotel-logo.png',
  villaLogo: '/assets/images/villa-logo.png'
};

const StyledCard = styled(Card)`
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.antd.colorPrimary};
  }

  .ant-space-item {
    text-align: center;
  }
`;

const MainPage = () => {
  return (
    <>
      <MainWrapper>
        <Row style={{}}>
          <Col span={24}>
            <Container>
              <Typography.Title level={2}>
                Lorem ipsum dolor sit amet consectetur. Etiam volutpat a cursus
                donec gravida !
              </Typography.Title>
              <Typography.Paragraph style={{ marginBottom: '2.5rem' }}>
                Lorem ipsum dolor sit amet consectetur. Etiam volutp
              </Typography.Paragraph>
              <Row gutter={[32, 32]} justify={{ md: 'start', sm: 'center' }}>
                <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={5}>
                  <StyledCard>
                    <Space
                      direction="vertical"
                      style={{
                        width: '100%'
                      }}
                    >
                      <img src={media.flatLogo} alt="" />
                      <Typography.Paragraph>
                        Furnished and self-categing Accomadation, where guests
                        rent the entire place
                      </Typography.Paragraph>
                      <Button type="primary" ghost>
                        List your property
                      </Button>
                    </Space>
                  </StyledCard>
                </Col>
                <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={5}>
                  <StyledCard>
                    <Space
                      direction="vertical"
                      style={{
                        width: '100%'
                      }}
                    >
                      <img src={media.apartmentLogo} alt="" />
                      <Typography.Paragraph>
                        Furnished and self-categing Accomadation, where guests
                        rent the entire place
                      </Typography.Paragraph>
                      <Button type="primary" ghost>
                        List your property
                      </Button>
                    </Space>
                  </StyledCard>
                </Col>
                <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={5}>
                  <StyledCard>
                    <Space
                      direction="vertical"
                      style={{
                        width: '100%'
                      }}
                    >
                      <img src={media.hotelLogo} alt="" />
                      <Typography.Paragraph>
                        Furnished and self-categing Accomadation, where guests
                        rent the entire place
                      </Typography.Paragraph>
                      <Button type="primary" ghost>
                        List your property
                      </Button>
                    </Space>
                  </StyledCard>
                </Col>
                <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={5}>
                  <StyledCard>
                    <Space
                      direction="vertical"
                      style={{
                        width: '100%'
                      }}
                    >
                      <img src={media.villaLogo} alt="" />
                      <Typography.Paragraph>
                        Furnished and self-categing Accomadation, where guests
                        rent the entire place
                      </Typography.Paragraph>
                      <Button type="primary" ghost>
                        List your property
                      </Button>
                    </Space>
                  </StyledCard>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </MainWrapper>
    </>
  );
};

export default MainPage;
