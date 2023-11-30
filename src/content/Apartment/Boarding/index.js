import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {
  CardBottom,
  Container,
  MainWrapper,
  CheckboxLabel
} from 'src/components/Global';

const media = {
  checkIcon: '/assets/images/label-img.png'
};

const Boarding = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  console.log({ selected });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            How Many apartments are you listing ?
          </Typography.Title>
          <Row>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <CheckboxLabel
                    style={{
                      outline: selected === 'one' ? '1px solid #0868f8' : 'none'
                    }}
                    checked={selected === 'one'}
                    onChange={e => {
                      if (e.target.checked) {
                        setSelected('one');
                      } else {
                        setSelected(null);
                      }
                    }}
                  >
                    <img src={media.checkIcon} alt="" />
                    <span>One Apartment</span>
                  </CheckboxLabel>
                  <CheckboxLabel
                    style={{
                      outline:
                        selected === 'many' ? '1px solid #0868f8' : 'none'
                    }}
                    checked={selected === 'many'}
                    onChange={e => {
                      if (e.target.checked) {
                        setSelected('many');
                      } else {
                        setSelected(null);
                      }
                    }}
                  >
                    <img src={media.checkIcon} alt="" />
                    <span>Multiple Apartment</span>
                  </CheckboxLabel>
                </Space>
                <Divider style={{ marginTop: '2rem', marginBottom: '2rem' }} />
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
                      navigate('/apartment');
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    size="large"
                    type="primary"
                    block
                    onClick={() => {
                      navigate('/apartment/listing');
                    }}
                  >
                    Continue
                  </Button>
                </CardBottom>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Boarding;
