import {
  Button,
  Card,
  Col,
  Radio,
  Row,
  Space,
  Typography,
  Tag,
  Form
} from 'antd';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';
import { useMutation, useQuery } from '@tanstack/react-query';
import onError from 'src/utils/onError';
import { updateProperty } from 'src/api/properties.req';
import { toast } from 'react-hot-toast';
import api from 'src/api';
import {
  useIsHotel,
  useProperty,
  usePropertyId
} from 'src/hooks/property-info';
import Spinner from 'src/components/spinner';

const CheckableTag = styled(Tag.CheckableTag)`
  font-size: 1rem;
  line-height: 35px;
  border: 1px solid ${props => props.theme.antd.colorBorder};

  &:not(.ant-tag-checkable-checked):hover {
    border-color: ${props => props.theme.antd.colorPrimary};
    background-color: #fff;
  }
  &.ant-tag-checkable-checked {
    border-color: ${props => props.theme.antd.colorInfoTextHover};
  }
`;
const BreakfastDetail = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();
  const isHotel = useIsHotel();
  const [typesOfBreakfast, setTypesOfBreakfast] = useState([]);
  const [breakfastServed, setBreakfastServed] = useState(null);
  const [breakfastIncluded, setBreakfastIncluded] = useState(null);

  const isBreakfastIncludedOptionRequired = breakfastServed === true;

  const handleTagChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...typesOfBreakfast, tag]
      : typesOfBreakfast.filter(t => t !== tag);
    setTypesOfBreakfast(nextSelectedTags);
  };

  const { property, isFetching } = useProperty(
    [
      'typesOfBreakfast',
      'breakfastPrice',
      'breakfastIncluded',
      'breakfastServed'
    ],
    property => {
      setBreakfastIncluded(property?.breakfastServed);
      setBreakfastServed(property?.breakfastIncluded);
      setTypesOfBreakfast(property?.typesOfBreakfast);
    }
  );

  // const { data: property, isFetching } = useQuery({
  //   queryKey: [
  //     'property',
  //     propertyId,
  //     [
  //       'typesOfBreakfast',
  //       'breakfastPrice',
  //       'breakfastIncluded',
  //       'breakfastServed'
  //     ]
  //   ],
  //   enabled: propertyId?.length === 24,
  //   initialData: {},
  //   queryFn: async () => {
  //     const res = await findProperty(
  //       propertyId,
  //       'typesOfBreakfast breakfastPrice breakfastIncluded breakfastServed'
  //     );
  //     const property = res?.data?.property;
  //     setBreakfastIncluded(property?.breakfastServed);
  //     setBreakfastServed(property?.breakfastIncluded);
  //     setTypesOfBreakfast(property?.typesOfBreakfast);
  //     return property;
  //   }
  // });
  const { status, mutate } = useMutation({
    mutationFn: async () => {
      const data = {
        propertyId,
        ...(typeof breakfastIncluded === 'boolean' && { breakfastIncluded }),
        ...(typeof breakfastServed === 'boolean' && { breakfastServed }),
        ...(typesOfBreakfast?.length && { typesOfBreakfast })
      };
      if (breakfastServed === null) {
        toast.error('please select if breakfast is served or not');
        return;
      }
      if (breakfastServed && breakfastIncluded === null) {
        toast.error('please select if breakfast is included or not');
        return;
      }
      if (breakfastServed && !typesOfBreakfast?.length) {
        toast.error('Please select types of breakfast provided');
        return;
      }
      const res = await updateProperty(data);
      console.log({ res });
      isHotel
        ? navigate(`/hotel/${propertyId}/parking`)
        : navigate(`/apartment/${propertyId}/parking`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  const {
    data: cuisineList,
    isFetching: isFetchingCuisine,
    error: cuisineError
  } = useQuery({
    queryKey: ['contentItems', { type: 'cuisine' }],
    initialData: [],
    queryFn: async () => {
      const res = await api.get('/content-items?type=cuisine&?status=active');
      return res?.data?.contentItems;
    }
  });

  console.log({ cuisineList, isFetchingCuisine, cuisineError });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Breakfast Details
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {isFetching ? (
                  <Spinner />
                ) : (
                  <Form
                    onFinish={mutate}
                    initialValues={
                      typeof property?.breakfastServed !== 'undefined'
                        ? property
                        : {}
                    }
                  >
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Do You Serve Guests Breakfast?
                        </Typography.Title>
                        <Form.Item
                          name="breakfastServed"
                          rules={[
                            {
                              required: true,
                              message:
                                'Please select if breakfast is provided or not'
                            }
                          ]}
                        >
                          <Radio.Group
                            onChange={e => {
                              setBreakfastServed(e.target.value);
                            }}
                            value={breakfastServed}
                          >
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Space>
                      {breakfastServed && (
                        <>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title level={5}>
                              Is Breakfast Included in the Price Guests Pay?
                            </Typography.Title>
                            <Form.Item
                              name="breakfastIncluded"
                              rules={[
                                {
                                  required: isBreakfastIncludedOptionRequired,
                                  message:
                                    'Please select if breakfast is included or not'
                                }
                              ]}
                            >
                              <Radio.Group
                                onChange={e =>
                                  setBreakfastIncluded(e.target.value)
                                }
                                value={breakfastIncluded}
                              >
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                              </Radio.Group>
                            </Form.Item>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Title level={5}>
                                What type of breakfast do you offer?
                              </Typography.Title>
                              <Space size={[0, 8]} wrap>
                                {cuisineList.map(cuisine => (
                                  <CheckableTag
                                    key={cuisine._id}
                                    checked={typesOfBreakfast.includes(
                                      cuisine.text
                                    )}
                                    onChange={checked =>
                                      handleTagChange(cuisine.text, checked)
                                    }
                                  >
                                    {cuisine.text}
                                  </CheckableTag>
                                ))}
                              </Space>
                            </Space>
                          </Space>
                        </>
                      )}
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
                          // onClick={mutate}
                          // onClick={() => {
                          //   navigate('/apartment/parking');
                          // }}
                        >
                          Continue
                        </Button>
                      </CardBottom>
                    </Space>
                  </Form>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default BreakfastDetail;
