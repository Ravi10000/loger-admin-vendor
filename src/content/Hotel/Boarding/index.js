import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Row,
  Space,
  Typography
} from 'antd';
import React from 'react';
import { styled } from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const CheckboxLabel = styled(Checkbox)`
  .ant-checkbox {
    .ant-checkbox-inner {
      width: 25px;
      height: 25px;
      border-radius: 50%;

      &::after {
        inset-inline-start: 25%;
        width: 7px;
        height: 12px;
      }
    }
  }
`;
const StyledCard = styled(Card)`
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.antd.colorPrimary};
  }
`;

const Boarding = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Lorem ipsum dolor sit amet consectetur. Etiam volutpat a cursus
            donec gravida !
          </Typography.Title>
          <Row>
            <Col lg={24} xl={20} xxl={16}>
              <Card>
                <Space
                  direction="vertical"
                  style={{ width: '100%' }}
                  size="large"
                >
                  <Row gutter={[32, 32]}>
                    <Col xs={8}>
                      <StyledCard>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Hotel
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </StyledCard>
                    </Col>
                    <Col xs={8}>
                      <StyledCard>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Guest house
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </StyledCard>
                    </Col>
                    <Col xs={8}>
                      <StyledCard>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Bed and breakfast
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </StyledCard>
                    </Col>
                    <Col xs={8}>
                      <StyledCard>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Homestay
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </StyledCard>
                    </Col>
                    <Col xs={8}>
                      <StyledCard>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Hostel
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </StyledCard>
                    </Col>
                    <Col xs={8}>
                      <StyledCard>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Condo Hotel
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </StyledCard>
                    </Col>
                    <Col xs={8}>
                      <StyledCard>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Capsule Hotel
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </StyledCard>
                    </Col>
                    <Col xs={8}>
                      <Card>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Country House
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </Card>
                    </Col>
                    <Col xs={8}>
                      <Card>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Typography.Title
                            level={4}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            Farm Stay
                            <CheckboxLabel />
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Accommodations for travellers often with
                            restaurants, meetings rooms and other guest
                            services.
                          </Typography.Paragraph>
                        </Space>
                      </Card>
                    </Col>
                  </Row>
                  <Typography.Link>
                    I don’t see my property type on the list
                  </Typography.Link>
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
                        navigate('/hotel');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/listing');
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

export default Boarding;
