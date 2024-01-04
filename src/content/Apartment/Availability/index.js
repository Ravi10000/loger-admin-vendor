import {
  ArrowLeftOutlined,
  CloseOutlined,
  BulbOutlined
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Radio,
  Row,
  Space,
  Typography,
  DatePicker,
  InputNumber,
  Spin
} from 'antd';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import dayjs from 'dayjs';
import {
  findApartment,
  findProperty,
  updateApartment,
  updateProperty
} from 'src/api/properties.req';
import { useQuery, useMutation } from '@tanstack/react-query';
import { AiOutlinePercentage } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
const Availability = () => {
  const navigate = useNavigate();
  const [checkInStartDate, setCheckInStartDate] = useState(dayjs());
  const [isDateRequired, setIsDateRequired] = useState(null);
  const [isAbove30Accepted, setIsAbove30Accepted] = useState(null);
  const [monthlyPlanDiscount, setMonthlyPlanDiscount] = useState(0);
  const { propertyId } = useParams();

  const { isFetching: isFetchingApartment } = useQuery({
    queryKey: ['apartment', propertyId, ['monthlyPlanDiscount']],
    enabled: propertyId?.length === 24,
    initialData: {},
    queryFn: async ({ queryKey }) => {
      const res = await findApartment(
        propertyId,
        queryKey?.[2]?.join?.(' ') ?? ''
      );
      const apartment = res?.data?.apartment;
      if (apartment?.monthlyPlanDiscount) {
        setIsAbove30Accepted(true);
        setMonthlyPlanDiscount(apartment?.monthlyPlanDiscount);
      }
      return apartment;
    }
  });
  const { isFetching: isFetchingProperty } = useQuery({
    queryKey: ['property', propertyId, ['checkInStartDate']],
    enabled: propertyId?.length === 24,
    initialData: {},
    queryFn: async ({ queryKey }) => {
      const res = await findProperty(
        propertyId,
        queryKey?.[2]?.join?.(' ') ?? ''
      );
      const property = res?.data?.property;
      if (property?.checkInStartDate) {
        setIsDateRequired(true);
        setCheckInStartDate(dayjs(property?.checkInStartDate));
      }
      return property;
    }
  });

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      if (typeof isDateRequired !== 'boolean') {
        toast.error('Please select a check in start date');
        return;
      }
      if (
        monthlyPlanDiscount &&
        (typeof monthlyPlanDiscount !== 'number' || monthlyPlanDiscount > 100)
      ) {
        toast.error('Weekly plan discount should be a discount less than 100');
        return;
      }
      const data = {
        propertyId,
        monthlyPlanDiscount,
        route: `/apartment/${propertyId}/availability`
      };

      const res = await updateApartment(data);
      const propertyRes = await updateProperty({
        propertyId,
        checkInStartDate: checkInStartDate.format('YYYY-MM-DD')
      });
      console.log({ res, propertyRes });
      navigate(`/apartment/${propertyId}/review-and-complete`);
    },
    onError: console.log
  });

  const onChange = e => {
    setIsDateRequired(e.target.value);
    if (!e.target.value) {
      setCheckInStartDate(dayjs());
    }
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Availability
          </Typography.Title>
          <Space style={{ width: '100%' }} size="large" direction="vertical">
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  {isFetchingProperty ? (
                    <Spin />
                  ) : (
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        What's the first date when guests can check in?
                      </Typography.Title>
                      <Radio.Group onChange={onChange} value={isDateRequired}>
                        <Space direction="vertical">
                          <Radio value={false}>As soon possible</Radio>
                          <Radio value={true}>On specific date</Radio>
                        </Space>
                      </Radio.Group>
                      {isDateRequired && (
                        <DatePicker
                          style={{
                            padding: '10px 15px',
                            borderRadius: '10px',
                            marginTop: '10px',
                            cursor: 'pointer'
                          }}
                          allowClear={false}
                          onChange={setCheckInStartDate}
                          value={checkInStartDate}
                        />
                      )}
                    </Space>
                  )}
                </Card>
              </Col>
            </Row>
            {/* <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <Typography.Paragraph style={{ marginBlock: 0 }}>
                      Lorem ipsum dolor sit amet consectetur. Eget non ac
                      nascetur facilisi arcu integer ut. Eget lectus amet ipsum
                      pellentesque leo ac. Vulputate eget in tortor orci quam
                      ultricies viverra. Integer nulla netus elementum quam
                      suscipit eu imperdiet porttitor. Tellus nam sed tortor
                      erat non tempor et. Senectus sed sit ornare et imperdiet.
                      Enim semper odio massa lobortis. Mattis amet tempor cursus
                      ipsum nec.
                    </Typography.Paragraph>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        Want to sync your availability with TripAdvisor?
                      </Typography.Title>
                      <Typography.Text type="success">
                        Lorem ipsum dolor sit amet consectetur. Eget non ac
                        nascetur facilisi arcu integer ut. Eget lectus amet
                        ipsum pellentesc .
                      </Typography.Text>
                    </Space>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Radio.Group onChange={onChange} value={isDateRequired}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Radio value={1}>
                            Lorem ipsum dolor sit amet consectetur.
                          </Radio>
                          <Radio value={2}>
                            Lorem ipsum dolor sit amet consectetur.
                          </Radio>
                          <Radio value={3}>
                            Lorem ipsum dolor sit amet consectetur.
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
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
                        Not ready to sync your availability right now?
                      </Typography.Title>
                      <Typography.Paragraph>
                        Lorem ipsum dolor sit amet consectetur. Non in quis ante
                        porttitor praesent volutpat neque. Metus in neque montes
                        id mattis molestie aliquet. Lorem eget vivamus id et
                        lacus nulla risus adipiscing molestie. mattis molestie
                        aliquet. Lorem eget vivamus id et lacus nulla risus
                        adipiscing molestie.
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
            </Row> */}
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  {isFetchingApartment ? (
                    <Spin />
                  ) : (
                    <Space
                      style={{ width: '100%' }}
                      direction="vertical"
                      size="large"
                    >
                      <Space style={{ width: '100%' }} direction="vertical">
                        <Typography.Title level={5}>
                          Do you want to allow 30+ night stays?
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur. Eget non ac
                          nascetur facilisi arcu integer ut. Eget lectus amet
                          ipsum pellentesc.
                        </Typography.Text>
                      </Space>
                      <Space style={{ width: '100%' }} direction="vertical">
                        <Typography.Title level={5}>
                          Will you accept reservations for stays over 30 nights?
                        </Typography.Title>
                        <Radio.Group
                          value={isAbove30Accepted}
                          onChange={e => setIsAbove30Accepted(e.target.value)}
                        >
                          <Radio value={true}>Yes</Radio>
                          <Radio value={false}>No</Radio>
                        </Radio.Group>
                      </Space>
                      {isAbove30Accepted && (
                        <Space style={{ width: '100%' }} direction="vertical">
                          <Typography.Title level={5}>
                            What's the discount &#40;in %&#41; for booking 30+
                            days?
                          </Typography.Title>
                          <div
                            style={{
                              width: 'fit-content',
                              position: 'relative',
                              marginTop: '10px'
                            }}
                          >
                            <AiOutlinePercentage
                              style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                zIndex: '10',
                                background: '#fff'
                              }}
                            />
                            <InputNumber
                              max={Infinity}
                              value={monthlyPlanDiscount}
                              style={{ padding: '5px', fontSize: '20px' }}
                              onChange={value => {
                                console.log({ value });
                                if (typeof value !== 'number')
                                  setMonthlyPlanDiscount(0);
                                else setMonthlyPlanDiscount(parseFloat(value));
                              }}
                              controls={false}
                            />
                          </div>
                          {/* <Select
                        size="large"
                        style={{ width: '100%' }}
                        options={[
                          {
                            label: '90',
                            value: 90
                          },
                          {
                            label: '75',
                            value: 75
                          },
                          {
                            label: '60',
                            value: 60
                          },
                          {
                            label: '45',
                            value: 45
                          }
                        ]}
                      /> */}
                        </Space>
                      )}
                    </Space>
                  )}
                </Card>
              </Col>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
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
                        What if I want to change my selection later on?
                      </Typography.Title>
                      <Typography.Paragraph>
                        Lorem ipsum dolor sit amet consectetur. Non in quis ante
                        porttitor praesent volutpat neque. Metus in neque montes
                        id mattis molestie aliquet. Lorem eget vivamus id et
                        lacus nulla risus adipiscing molestie. mattis molestie
                        aliquet. Lorem eget vivamus id et lacus nulla risus
                        adipiscing molestie.
                      </Typography.Paragraph>
                      <Typography.Link>
                        Read more about 30+ night stays
                      </Typography.Link>
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
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
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
                    disabled={
                      status === 'pending' ||
                      isFetchingApartment ||
                      isFetchingProperty
                    }
                    onClick={mutate}
                    // onClick={() => {
                    //   navigate(`/apartment/${propertyId}/review-and-complete`);
                    // }}
                  >
                    Continue
                  </Button>
                </CardBottom>
              </Col>
            </Row>
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Availability;
