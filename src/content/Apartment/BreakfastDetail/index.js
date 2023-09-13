import { Button, Card, Col, Radio, Row, Space, Typography, Tag } from 'antd';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';

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

const CardBottom = styled(Space)`
  display: flex;
  width: 100%;

  .ant-space-item:last-child {
    flex: 1;
  }
`;

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
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

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
                    // onChange={handleAllowChild}
                    // value={allowChild}
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={2}>No</Radio>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Is Breakfast Included in the Price Guests Pay?
                    </Typography.Title>
                    <Radio.Group
                    // onChange={handleAllowChild}
                    // value={allowChild}
                    >
                      <Radio value={1}>Yes</Radio>
                      <Radio value={2}>No</Radio>
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
                            bordered
                            key={tag}
                            checked={selectedTags.includes(tag)}
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
                        navigate('/apartment/property-detail');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/apartment/property-detail');
                      }}
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
