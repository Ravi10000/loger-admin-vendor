import { Button, Card, Checkbox, Col, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useQuery, useMutation } from '@tanstack/react-query';
import api from 'src/api';
import { updateProperty } from 'src/api/properties.req';
import { toast } from 'react-hot-toast';
import {
  useIsHotel,
  useProperty,
  usePropertyId
} from 'src/hooks/property-info.queries';
import Spinner from 'src/components/spinner';
const Guest = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();
  const isHotel = useIsHotel();
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const { property, isFetching } = useProperty(
    ['facilities', 'propertyType'],
    property => {
      if (property?.facilities?.length)
        setSelectedFacilities(property?.facilities);
    }
  );

  const { data: facilityList, isFetching: isFetchingFacility } = useQuery({
    queryKey: ['facilities', { status: 'active' }],
    initialData: [],
    queryFn: async () => {
      const res = await api.get('/facilities?status=active');
      return res?.data?.facilities;
    }
  });

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      if (!selectedFacilities?.length) {
        toast.error('Please select facilities');
        return;
      }
      const data = {
        facilities: selectedFacilities,
        propertyId,
        route: `/${property.propertyType}/${propertyId}/guest`
      };
      await updateProperty(data);
      isHotel
        ? navigate(`/hotel/${propertyId}/breakfast-detail`)
        : navigate(`/apartment/${propertyId}/charge`);
    },
    onError: err => {
      console.log({ err });
    }
  });

  // useEffect(() => {
  //   if (property?.facilities?.length)
  //     setSelectedFacilities(
  //       property?.facilities?.map(facility => facility._id)
  //     );
  // }, [property]);
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            What can guests use at your Place ?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {isFetching || isFetchingFacility ? (
                  <Spinner />
                ) : (
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    <div
                      style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px'
                      }}
                    >
                      {facilityList?.map(facility => (
                        <Checkbox
                          key={facility._id}
                          value={facility._id}
                          onChange={() => {
                            if (selectedFacilities.includes(facility._id)) {
                              setSelectedFacilities(ps =>
                                ps.filter(item => item !== facility._id)
                              );
                            } else {
                              setSelectedFacilities(ps => [
                                ...ps,
                                facility._id
                              ]);
                            }
                          }}
                          checked={selectedFacilities.includes(facility._id)}
                        >
                          {facility.name}
                        </Checkbox>
                      ))}
                    </div>

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
                          navigate(-1);
                        }}
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
                        //   navigate('/apartment/charge');
                        // }}
                      >
                        Continue
                      </Button>
                    </CardBottom>
                  </Space>
                )}
              </Card>
            </Col>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    <Space
                      size="middle"
                      direction="horizontal"
                      style={{ alignItems: 'flex-start', width: '100%' }}
                    >
                      <Typography.Text style={{ fontSize: '2rem' }}>
                        <BulbOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          Can't see your amenities?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. Lorem
                          ipsum dolor sit amet consectetur. Non in quis ante
                          porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie.
                        </Typography.Paragraph>
                      </Space>
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      />
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Guest;
