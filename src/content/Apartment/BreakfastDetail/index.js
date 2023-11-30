import { Button, Card, Col, Radio, Row, Space, Typography, Tag } from 'antd';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';
import { useMutation } from '@tanstack/react-query';
import onError from 'src/utils/onError';
import { updateProperty } from 'src/api/property.req';
import { toast } from 'react-hot-toast';

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

const tagsData = [
  'American',
  'Breakfast to go',
  'Asian',
  'Vegan',
  'Continental',
  'Full English/Irish',
  'Gluten-free',
  'Vegetarian'
];

const BreakfastDetail = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const [typesOfBreakfast, setTypesOfBreakfast] = useState([]);
  const [breakfastServed, setBreakfastServed] = useState(null);
  const [breakfastIncluded, setBreakfastIncluded] = useState(null);

  const handleTagChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...typesOfBreakfast, tag]
      : typesOfBreakfast.filter(t => t !== tag);
    setTypesOfBreakfast(nextSelectedTags);
  };

  const { status, mutate, data } = useMutation({
    mutationFn: async () => {
      const data = {
        propertyId,
        ...(breakfastIncluded && { breakfastIncluded }),
        ...(breakfastServed && { breakfastServed }),
        ...(typesOfBreakfast && { typesOfBreakfast })
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
      navigate(`/apartment/${propertyId}/parking`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

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
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Do You Serve Guests Breakfast?
                    </Typography.Title>
                    <Radio.Group
                      onChange={e => setBreakfastServed(e.target.value)}
                      value={breakfastServed}
                    >
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Is Breakfast Included in the Price Guests Pay?
                    </Typography.Title>
                    <Radio.Group
                      onChange={e => setBreakfastIncluded(e.target.value)}
                      value={breakfastIncluded}
                    >
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        What type of breakfast do you offer?
                      </Typography.Title>
                      <Space size={[0, 8]} wrap>
                        {tagsData.map(tag => (
                          <CheckableTag
                            // bordered
                            key={tag}
                            checked={typesOfBreakfast.includes(tag)}
                            onChange={checked => handleTagChange(tag, checked)}
                          >
                            {tag}
                          </CheckableTag>
                        ))}
                      </Space>
                    </Space>
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
                      onClick={mutate}
                      // onClick={() => {
                      //   navigate('/apartment/parking');
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

export default BreakfastDetail;
