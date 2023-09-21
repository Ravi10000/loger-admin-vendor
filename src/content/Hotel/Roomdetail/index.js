import {
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  Row,
  Space,
  Typography
} from 'antd';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';

import { styled } from 'styled-components';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { Select } from 'antd';

const media = {
  checkIcon: '/assets/images/hotel-bed.png'
};
const ControlButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Roomdetail = () => {
  const navigate = useNavigate();

  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [numberOfGues, setNumberOfGues] = useState(0);
  const [numberOfGue, setNumberOfGue] = useState(0);
  const [numberOfGu, setNumberOfGu] = useState(0);

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i
    });
  }
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Room Details
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Space
                direction="vertical"
                style={{ width: '100%' }}
                size="large"
              >
                <Card>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    <Typography.Title
                      level={5}
                      style={{ marginBottom: '0rem' }}
                    >
                      What Type of Unit is This ?
                    </Typography.Title>
                    <Select
                      mode="multiple"
                      allowClear
                      size="large"
                      maxTagCount={6}
                      style={{ width: '100%' }}
                      placeholder=""
                      onChange={handleChange}
                      options={options}
                    />
                    <Typography.Title
                      level={5}
                      style={{ marginBottom: '0rem' }}
                    >
                      How many rooms of this type do you have?
                    </Typography.Title>
                    <Input size="large" style={{ width: '20%' }} />
                  </Space>
                </Card>
                <Card>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    <Typography.Title
                      level={5}
                      style={{ marginBottom: '0rem' }}
                    >
                      Which Beds are Available in This Room?
                    </Typography.Title>
                    <Space
                      direction="horizontal"
                      size="large"
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Space
                        direction="horizontal"
                        size="large"
                        style={{ width: '100%', alignItems: 'flex-start' }}
                      >
                        <img src={media.checkIcon} alt="" />
                        <Space
                          style={{ width: '100%' }}
                          direction="vertical"
                          size={4}
                        >
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Single Bed
                          </Typography.Title>
                          <Typography.Paragraph>
                            70-120cm wide
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Space.Compact>
                        <ControlButton
                          icon={
                            <MinusOutlined style={{ fontSize: '0.8rem' }} />
                          }
                          onClick={() => setNumberOfGuest(prev => --prev)}
                        />
                        <InputNumber
                          onChange={setNumberOfGuest}
                          min={0}
                          value={numberOfGuest}
                          controls={false}
                          style={{ width: '3rem', textAlign: 'center' }}
                        />
                        <ControlButton
                          icon={<PlusOutlined style={{ fontSize: '0.8rem' }} />}
                          onClick={() => setNumberOfGuest(prev => ++prev)}
                        />
                      </Space.Compact>
                    </Space>
                    <Space
                      direction="horizontal"
                      size="large"
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Space
                        direction="horizontal"
                        size="large"
                        style={{ width: '100%', alignItems: 'flex-start' }}
                      >
                        <img src={media.checkIcon} alt="" />
                        <Space
                          style={{ width: '100%' }}
                          direction="vertical"
                          size={4}
                        >
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Double Bed
                          </Typography.Title>
                          <Typography.Paragraph>
                            121-160cm wide
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Space.Compact>
                        <ControlButton
                          icon={
                            <MinusOutlined style={{ fontSize: '0.8rem' }} />
                          }
                          onClick={() => setNumberOfGues(prev => --prev)}
                        />
                        <InputNumber
                          onChange={setNumberOfGues}
                          min={0}
                          value={numberOfGues}
                          controls={false}
                          style={{ width: '3rem', textAlign: 'center' }}
                        />
                        <ControlButton
                          icon={<PlusOutlined style={{ fontSize: '0.8rem' }} />}
                          onClick={() => setNumberOfGues(prev => ++prev)}
                        />
                      </Space.Compact>
                    </Space>
                    <Space
                      direction="horizontal"
                      size="large"
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Space
                        direction="horizontal"
                        size="large"
                        style={{ width: '100%', alignItems: 'flex-start' }}
                      >
                        <img src={media.checkIcon} alt="" />
                        <Space
                          style={{ width: '100%' }}
                          direction="vertical"
                          size={4}
                        >
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Large Bed King Size
                          </Typography.Title>
                          <Typography.Paragraph>
                            151-180cm wide
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Space.Compact>
                        <ControlButton
                          icon={
                            <MinusOutlined style={{ fontSize: '0.8rem' }} />
                          }
                          onClick={() => setNumberOfGue(prev => --prev)}
                        />
                        <InputNumber
                          onChange={setNumberOfGue}
                          min={0}
                          value={numberOfGue}
                          controls={false}
                          style={{ width: '3rem', textAlign: 'center' }}
                        />
                        <ControlButton
                          icon={<PlusOutlined style={{ fontSize: '0.8rem' }} />}
                          onClick={() => setNumberOfGue(prev => ++prev)}
                        />
                      </Space.Compact>
                    </Space>
                    <Space
                      direction="horizontal"
                      size="large"
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Space
                        direction="horizontal"
                        size="large"
                        style={{ width: '100%', alignItems: 'flex-start' }}
                      >
                        <img src={media.checkIcon} alt="" />
                        <Space
                          style={{ width: '100%' }}
                          direction="vertical"
                          size={4}
                        >
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Extra-Large Double Bed (Super-King Size)
                          </Typography.Title>
                          <Typography.Paragraph>
                            181-210cm wide
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Space.Compact>
                        <ControlButton
                          icon={
                            <MinusOutlined style={{ fontSize: '0.8rem' }} />
                          }
                          onClick={() => setNumberOfGu(prev => --prev)}
                        />
                        <InputNumber
                          onChange={setNumberOfGu}
                          min={0}
                          value={numberOfGu}
                          controls={false}
                          style={{ width: '3rem', textAlign: 'center' }}
                        />
                        <ControlButton
                          icon={<PlusOutlined style={{ fontSize: '0.8rem' }} />}
                          onClick={() => setNumberOfGu(prev => ++prev)}
                        />
                      </Space.Compact>
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
                          navigate('/hotel/rules');
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        size="large"
                        type="primary"
                        block
                        onClick={() => {
                          navigate('/hotel/bathroomdetail');
                        }}
                      >
                        Continue
                      </Button>
                    </CardBottom>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Roomdetail;
