import {
  Button,
  Card,
  Checkbox,
  Col,
  Row,
  Select,
  Space,
  Typography,
  Form
} from 'antd';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import api from 'src/api';
import { findProperty, updateProperty } from 'src/api/properties.req';
import onError from 'src/utils/onError';
import { toast } from 'react-hot-toast';
import Spinner from 'src/components/spinner';
import {
  useIsHotel,
  useProperty,
  usePropertyId
} from 'src/hooks/property-info';

const Language = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();
  const {
    data: languages,
    isFetching: isFetchingLanguages,
    error: languagesError
  } = useQuery({
    queryKey: ['contentItems', { type: 'language' }],
    initialData: [],
    queryFn: async () => {
      const res = await api.get('/content-items?type=language&?status=active');
      return res?.data?.contentItems;
    }
  });
  const popularLanguages = useMemo(() => languages.splice(0, 5), [languages]);
  const otherLanguages = useMemo(
    () =>
      languages.map(language => ({
        value: language.text,
        label: language.text
      })),
    [languages]
  );

  const { property, isFetching } = useProperty(['languagesSpoken']);
  const isHotel = useIsHotel();
  // const { data: property, isFetching } = useQuery({
  //   queryKey: ['property', propertyId, ['languagesSpoken']],
  //   enabled: propertyId?.length === 24 && !!languages?.length,
  //   initialData: {},
  //   queryFn: async () => {
  //     const res = await findProperty(propertyId, 'languagesSpoken');
  //     const property = res?.data?.property;
  //     return property;
  //   }
  // });

  const { mutate, status } = useMutation({
    mutationFn: async data => {
      data = {
        propertyId,
        languagesSpoken: [...data.selectedLanguages, ...data.otherLanguages]
      };
      if (!data?.languagesSpoken?.length) {
        toast.error('please select at least one language');
        return;
      }
      // const res =
      await updateProperty(data);
      isHotel
        ? navigate(`/hotel/${propertyId}/rules`)
        : navigate(`/apartment/${propertyId}/rules`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            What language do you or your staff speak ?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {isFetching ? (
                  <Spinner />
                ) : (
                  <Form
                    onFinish={mutate}
                    initialValues={{
                      selectedLanguages: property?.languagesSpoken?.length
                        ? property?.languagesSpoken
                        : [],
                      otherLanguages:
                        property?.languagesSpoken?.length &&
                        otherLanguages?.length
                          ? otherLanguages
                              .map(l => l.value)
                              .filter(l =>
                                property?.languagesSpoken?.includes(l)
                              )
                          : []
                    }}
                  >
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Select Language
                        </Typography.Title>
                        <Form.Item name="selectedLanguages">
                          <Checkbox.Group>
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              {popularLanguages?.map(language => (
                                <Checkbox
                                  key={language._id}
                                  value={language.text}
                                >
                                  {language.text}
                                </Checkbox>
                              ))}
                            </Space>
                          </Checkbox.Group>
                        </Form.Item>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Add Additional Languages
                        </Typography.Title>
                        <Form.Item name="otherLanguages">
                          <Select
                            mode="multiple"
                            allowClear
                            size="large"
                            style={{ width: '100%' }}
                            placeholder="Select languages"
                            options={otherLanguages}
                          />
                        </Form.Item>
                      </Space>
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
                          //   navigate('/apartment/rules');
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

export default Language;
