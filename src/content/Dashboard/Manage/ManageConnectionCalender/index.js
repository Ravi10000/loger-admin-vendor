import {
  Button,
  
  Space,
  Typography,
  Input,
 
  Steps,
  
} from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const ManageConnectionCalender = () => {
  const [current, setCurrent] = useState(0);
  const onChange = value => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <>
      <MainWrapper>
        <Container>
            <Space direction='vertical' >
          <Space direction="vertical" style={{marginBottom:'2.5rem'}}>
            <Typography.Title level={2}>
              Add Calendar For Appartement
            </Typography.Title>
          </Space>
          <Space direction='vertical'>
          <Steps
            current={current}
            onChange={onChange}
            direction="vertical"
            items={[
              {
                title:
                  'Which Cancellation Policy Would You Like to Use for this Rate Plan?',
                description: (
                  <>
                    <Space
                      direction="vertical"
                      style={{ marginBottom: '2.5rem' }}
                    >
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. Mauris luctus
                        laoreet molestie purus cras quisque tellus. Ipsum
                        hendrerit gravida et venenatis gravida enim. Arcu lorem
                        nec ante faucibus. Consequat netus lectus id parturient
                        posuere turpis molestie mattis tristique. condimentum
                        diam varius quam volutpat fames ut. Egestas egestas
                        praesent fames nulla feugiat.
                      </Typography.Text>
                    </Space>
                    <Space
                      direction="vertical"
                      style={{ marginBottom: '2.5rem' }}
                    >
                      <Space direction="vertical">
                        Copy and Paste Your Calendar Link Below
                        <Input
                          size="large"
                          style={{ width: 500 }}
                          suffix={<CopyOutlined />}
                        />
                      </Space>
                      <Space
                        direction="vertical"
                        style={{ marginBottom: '2rem' }}
                      >
                        Copy and Paste Your Calendar Link Below
                        <Input
                          size="large"
                          style={{ width: 500 }}
                          suffix={<CopyOutlined />}
                        />
                      </Space>
                      <Space
                        direction="vertical"
                        style={{ marginBottom: '1rem' }}
                      >
                        <Space direction="horizontal">
                          <Button type="primary" size="large">
                            Next Step
                          </Button>
                          <Button type="primary" size="large" ghost>
                            Cancel
                          </Button>
                        </Space>
                      </Space>
                      <Typography.Link underline>
                        Skip this Step
                      </Typography.Link>
                    </Space>
                  </>
                )
              },
              {
                title: 'Export Calendar',
                description: ''
              }
            ]}
          />
          </Space>
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManageConnectionCalender;
