import {
  Button,
  Col,
  DatePicker,
  Radio,
  Row,
  Space,
  Alert,
  Table,
  Typography,
  Card
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
dayjs.extend(customParseFormat);

const ManageAllReservation = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={20}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Typography.Title level={2}>
                  Documents And Invoices
                </Typography.Title>

                <Alert
                  message={
                    <>
                      <Typography.Title level={5} style={{ color: 'blue' }}>
                        Maintenance to Our Finance System
                      </Typography.Title>
                    </>
                  }
                  description={
                    <>
                      <Space direction="vertical" size="large">
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur. Amet
                          vestibulum enim id diam nunc arcu tellus ornare. Sed
                          diam pellentesque sagittis nam. Tristique malesuada
                          volutpat platea ut rhoncus egestas dictum quam leo.
                          Arcu montes bibendum purus tortor.
                        </Typography.Text>
                        <Button type="primary" size="large">
                          Read More
                        </Button>
                      </Space>
                    </>
                  }
                  type="info"
                  showIcon
                />
                <Row>
                   <Col>
               <Space direction='horizontal' size='large'style={{display:'flex',justifyContent:'space-between'}}>
                  <Space direction="vertical" size='large'>
                    <Typography.Title level={2}>
                      Reservation Statements
                    </Typography.Title>
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. Amet vestibulum
                      enim id diam nunc arcu tellus ornare.
                    </Typography.Text>
                    <Space direction="horizontal">
                      <Typography.Text>Period</Typography.Text>
                      <DatePicker picker="month" placeholder="2023-07" />
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. 24, July, 2023
                        Amet vestibulum enim id diam nunc
                      </Typography.Text>
                      <Typography.Link>
                        Click Here to View the Reservations.
                      </Typography.Link>
                    </Space>
                    
                  </Space>
                 
                  <Card></Card>
                
                  </Space>
                  </Col>
                  </Row>
                 
                </Space>
            
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManageAllReservation;
