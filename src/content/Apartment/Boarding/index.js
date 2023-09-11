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

const media = {
  checkIcon: '/assets/images/label-img.png'
};

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

const StyledCard = styled(Card)`
  .ant-space-item {
    text-align: center;
  }
`;

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

const CardBottom = styled(Space)`
  display: flex;
  width: 100%;

  .ant-space-item:last-child {
    flex: 1;
  }
`;

const Boarding = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            How Many apartments are you listing ?
          </Typography.Title>
          <Row>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <StyledCard>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <CheckboxLabel>
                    <img src={media.checkIcon} alt="" />
                    <span>One Apartment</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
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
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Boarding;
