import { Button, Card, Checkbox, Col, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Guest = () => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState([]);

  const handleChange = item => {
    if (item.includes('none') && !!item.indexOf('none')) {
      setCheckList(['none']);
    } else if (item[0] === 'none' && checkList.length) {
      setCheckList(item.filter(item => item !== 'none'));
    } else {
      setCheckList(item);
    }
  };

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
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Checkbox.Group
                    onChange={handleChange}
                    value={checkList}
                    style={{ width: '100%' }}
                  >
                    <Row>
                      <Col xs={12}>
                        <Space
                          direction="vertical"
                          style={{ width: '100%' }}
                          size="large"
                        >
                          <Checkbox value="property">Clothes rack</Checkbox>
                          <Checkbox value="host">Flat-screen TV</Checkbox>
                          <Checkbox value="neighborhood">Free WiFi</Checkbox>
                          <Checkbox value="none">Air Conditioner</Checkbox>
                          <Checkbox value="property">Linens</Checkbox>
                          <Checkbox value="host">Desk</Checkbox>
                          <Checkbox value="neighborhood">
                            Swimming Pool
                          </Checkbox>
                          <Checkbox value="none">24/7 Support</Checkbox>
                          <Checkbox value="none">Free Parking</Checkbox>
                          <Checkbox value="none">
                            Breakfast/Lunch/Dinner
                          </Checkbox>
                          <Checkbox value="none">Room Service</Checkbox>
                          <Checkbox value="none">Smoking Zone</Checkbox>
                          <Checkbox value="none">Outdoor Pool</Checkbox>
                        </Space>
                      </Col>
                      <Col xs={12}>
                        <Space
                          direction="vertical"
                          style={{ width: '100%' }}
                          size="large"
                        >
                          <Checkbox value="property">
                            Fitness Facilities
                          </Checkbox>
                          <Checkbox value="host">Flat-screen TV</Checkbox>
                          <Checkbox value="neighborhood">
                            Business Center
                          </Checkbox>
                          <Checkbox value="none">Arcade /game Room</Checkbox>
                          <Checkbox value="property">Casino</Checkbox>
                          <Checkbox value="host">Self Parking</Checkbox>
                          <Checkbox value="neighborhood">Elevator</Checkbox>
                          <Checkbox value="none">Wood Stove</Checkbox>
                          <Checkbox value="none">Golf Clubs</Checkbox>
                          <Checkbox value="none">Child Tub</Checkbox>
                          <Checkbox value="none">Fireplace</Checkbox>
                          <Checkbox value="none">Fishing Equipment</Checkbox>
                          <Checkbox value="none">Hot Tub</Checkbox>
                        </Space>
                      </Col>
                    </Row>
                  </Checkbox.Group>
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
                        navigate('/apartment/gallery');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/apartment/charge');
                      }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
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
