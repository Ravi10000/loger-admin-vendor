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
  
  const media = {
    checkIcon: '/assets/images/hotel-img-1.png'
  };
  
  const CheckboxLabel = styled(Checkbox)`
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.antd.colorBorderSecondary};
    height: 60px;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: all 0.3s ease;
    border-radius: ${props => props.theme.antd.borderRadius}px;
    position: relative;
  
    &:hover {
      border-color: ${props => props.theme.antd.colorPrimary};
    }
  
    .ant-checkbox {
      position: absolute;
      right: 1rem;
  
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
  
    img {
      width: 30px;
      display: inline-block;
      margin-right: 2rem;
    }
  `;
  
  const Boarding = () => {
    const navigate = useNavigate();
  
    return (
      <>
        <MainWrapper>
          <Container>
            <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            How Many Hotel are You Listing ?
            </Typography.Title>
            <Row>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: '100%' }}
                  >
                    <CheckboxLabel>
                      <img src={media.checkIcon} alt="" />
                      <span> One  hotel with one or multiple  rooms that guests can book
                        <br></br>
                        </span>
                       
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <img src={media.checkIcon} alt="" />
                      <span>Multiple hotels with one or multiple
rooms that guests can book</span>
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
                </Card>
              </Col>
            </Row>
          </Container>
        </MainWrapper>
      </>
    );
  };
  
  export default Boarding;
  