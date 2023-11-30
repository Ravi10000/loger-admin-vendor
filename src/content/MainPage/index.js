import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import Header from 'src/components/Header';
const { Content, Footer } = Layout;
// const media = {
//   flatLogo: '/assets/images/flat-logo.png',
//   apartmentLogo: '/assets/images/apartment-logo.png',
//   hotelLogo: '/assets/images/hotel-logo.png',
//   villaLogo: '/assets/images/villa-logo.png'
// };

const properties = [
  {
    image: '/assets/images/flat-logo.png',
    title: 'Flats',
    description:
      'Furnished and self-categing Accomadation, where guests rent the entire place',
    navigateTo: '/apartment/new/place'
  },
  {
    image: '/assets/images/apartment-logo.png',
    title: 'Apartment',
    description:
      'Furnished and self-categing Accomadation, where guests rent the entire place',
    navigateTo: '/apartment/new/place'
  },
  {
    image: '/assets/images/hotel-logo.png',
    title: 'Hotels',
    description:
      'Furnished and self-categing Accomadation, where guests rent the entire place',
    navigateTo: '/hotel/boarding'
  },
  {
    image: '/assets/images/villa-logo.png',
    title: 'Villa',
    description:
      'Furnished and self-categing Accomadation, where guests rent the entire place',
    navigateTo: '/apartment/new/place'
  }
];

const StyledCard = styled(Card)`
  /* transition: all 0.2s ease; */

  &:hover {
    border-color: ${props => props.theme.antd.colorPrimary};
  }

  .ant-space-item {
    text-align: center;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header />
      <Layout>
        <Content>
          <MainWrapper>
            <Row style={{}}>
              <Col span={24}>
                <Container>
                  <Typography.Title level={2}>
                    Lorem ipsum dolor sit amet consectetur. Etiam volutpat a
                    cursus donec gravida !
                  </Typography.Title>
                  <Typography.Paragraph style={{ marginBottom: '2.5rem' }}>
                    Lorem ipsum dolor sit amet consectetur. Etiam volutp
                  </Typography.Paragraph>
                  <Row
                    gutter={[32, 32]}
                    justify={{ md: 'start', sm: 'center' }}
                  >
                    {properties?.map(property => (
                      <PropertyCard
                        key={property?.title}
                        {...property}
                        onClick={() => {
                          navigate(property?.navigateTo);
                        }}
                      />
                    ))}
                    {/* <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={5}>
                  <StyledCard>
                    <Space
                      direction="vertical"
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <img src={media.apartmentLogo} alt="" />
                      <h2>Apartment</h2>
                      <Typography.Paragraph>
                        Furnished and self-categing Accomadation, where guests
                        rent the entire place
                      </Typography.Paragraph>
                      <Button
                        type="primary"
                        ghost
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '1rem',
                          padding: '20px 30px',
                          borderRadius: '5px',
                          fontWeight: 600
                        }}
                      >
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
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <img src={media.hotelLogo} alt="" />
                      <h2>Hotels</h2>
                      <Typography.Paragraph>
                        Furnished and self-categing Accomadation, where guests
                        rent the entire place
                      </Typography.Paragraph>
                      <Button
                        type="primary"
                        ghost
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '1rem',
                          padding: '20px 30px',
                          borderRadius: '5px',
                          fontWeight: 600
                        }}
                      >
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
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <img src={media.villaLogo} alt="" />
                      <h2>Villa</h2>
                      <Typography.Paragraph>
                        Furnished and self-categing Accomadation, where guests
                        rent the entire place
                      </Typography.Paragraph>
                      <Button
                        type="primary"
                        ghost
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '1rem',
                          padding: '20px 30px',
                          borderRadius: '5px',
                          fontWeight: 600
                        }}
                      >
                        List your property
                      </Button>
                    </Space>
                  </StyledCard>
                </Col> */}
                  </Row>
                </Container>
              </Col>
            </Row>
          </MainWrapper>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

function PropertyCard({ image, title, description, buttonText, onClick }) {
  return (
    <Col
      xs={24}
      sm={16}
      md={12}
      lg={8}
      xl={6}
      xxl={5}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <StyledCard>
        <Space
          direction="vertical"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {image && <img src={image} alt="" />}
          {title && <h2>{title}</h2>}
          {description && (
            <Typography.Paragraph>{description}</Typography.Paragraph>
          )}
          <Button
            type="primary"
            ghost
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1rem',
              padding: '20px 30px',
              borderRadius: '5px',
              fontWeight: 600
            }}
          >
            {buttonText ?? 'List your property'}
          </Button>
        </Space>
      </StyledCard>
    </Col>
  );
}

export default MainPage;
