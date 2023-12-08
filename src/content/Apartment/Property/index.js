import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Spin
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { COUNTRY_LIST as countryList } from 'src/constants/country';
import { EnvironmentOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';
import { useMutation, useQuery } from '@tanstack/react-query';
import onError from 'src/utils/onError';
import { findProperty, updateProperty } from 'src/api/property.req';
import api from 'src/api';
import { usePropertyId, useIsHotel } from 'src/hooks/property-info';

const Property = () => {
  const propertyId = usePropertyId();
  const isHotel = useIsHotel();
  const navigate = useNavigate();
  const { data: property, isFetching } = useQuery({
    queryKey: [
      'property',
      propertyId,
      ['country', 'address', 'city', 'pincode']
    ],
    enabled: propertyId?.length === 24,
    initialData: null,
    queryFn: async () => {
      const res = await findProperty(
        propertyId,
        'country address city pincode'
      );
      console.log({ res });
      return res?.data?.property;
    }
  });
  const { status, mutate } = useMutation({
    mutationFn: async data => {
      console.log({ data });
      let newPropertyId = null;
      if (!property) {
        data.propertyType = 'hotel';
        const res = await api.post('/properties', data);
        newPropertyId = res?.data?.property?._id;
      } else {
        data.propertyId = propertyId;
        await updateProperty(data);
      }
      if (isHotel) {
        const propertyExists = propertyId?.length === 24;
        if (!propertyExists)
          navigate(`/hotel/${newPropertyId ?? propertyId}/property`, {
            replace: true
          });
        navigate(`/hotel/${newPropertyId ?? propertyId}/location`);
        return;
      }
      navigate(`/apartment/${propertyId}/location`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

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
                {!isFetching ? (
                  <Form
                    layout="vertical"
                    onFinish={mutate}
                    initialValues={
                      property?.city
                        ? property
                        : {
                            country: 'India'
                          }
                    }
                  >
                    <Form.Item
                      label="Country"
                      name="country"
                      rules={[{ required: 'Country required' }]}
                    >
                      <Select
                        size="large"
                        options={countryList.map(({ name }) => ({
                          value: name,
                          label: name
                        }))}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Address"
                      name="address"
                      rules={[{ required: 'Address required' }]}
                    >
                      <Input size="large" suffix={<EnvironmentOutlined />} />
                    </Form.Item>
                    <Row gutter={32}>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="City"
                          name="city"
                          rules={[{ required: 'City required' }]}
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Pincode"
                          name="pincode"
                          rules={[
                            { required: 'Pincode required' },
                            { max: 6, message: 'Pincode must be 6 digits' },
                            { min: 6, message: 'Pincode must be 6 digits' }
                          ]}
                        >
                          <Input
                            size="large"
                            onInput={e =>
                              (e.target.value = e.target.value.replace(
                                /[^0-9]/g,
                                ''
                              ))
                            }
                            maxLength={6}
                          />
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
                          navigate(-1);
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        size="large"
                        type="primary"
                        block
                        htmlType="submit"
                        disabled={status === 'pending'}
                        // onClick={() => {
                        //   navigate('/apartment/location');
                        // }}
                      >
                        Continue
                      </Button>
                    </CardBottom>
                  </Form>
                ) : (
                  <Spin />
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Property;
