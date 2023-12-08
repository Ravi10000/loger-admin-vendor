import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useMutation } from '@tanstack/react-query';
import { updateProperty } from 'src/api/property.req';
import onError from 'src/utils/onError';
import { useIsHotel, usePropertyId } from 'src/hooks/property-info';
const media = {
  mapImg: '/assets/images/map-img.png'
};

const Location = () => {
  const propertyId = usePropertyId();
  const navigate = useNavigate();
  const isHotel = useIsHotel();

  const { status, mutate } = useMutation({
    mutationFn: async () => {
      const data = {
        propertyId,
        geoLocation: {
          lat: 1232,
          lng: 123
        }
      };
      await updateProperty(data);
      if (isHotel) {
        console.log('navigating to : ', `/hotel/${propertyId}/rating`);
        navigate(`/hotel/${propertyId}/rating`);
        return;
      }
      navigate(`/apartment/${propertyId}/property-detail`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            What's the name of your place?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Typography.Title level={4} style={{ marginBottom: 0 }}>
                      Location
                    </Typography.Title>
                    <Typography.Text>
                      <EnvironmentOutlined style={{ marginRight: '0.5rem' }} />
                      Mahipal Khandari, near Ramaya Inn, Haridwar, Pin
                      Code:249410, Haridwar, India
                    </Typography.Text>
                  </Space>
                  <img src={media.mapImg} alt="" />
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
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={mutate}
                      disabled={status === 'pending'}
                      // onClick={() => {
                      //   navigate('/apartment/property-detail');
                      // }}
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

export default Location;
