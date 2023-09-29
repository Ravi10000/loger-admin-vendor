import { Button, Card, Col, Empty, Radio, Row, Space, Typography } from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const media = {
  noQuestion: '/assets/svg/no-question.svg'
};

const GuestQA = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={24} xl={20}>
              <Space direction="vertical" size={32} style={{ width: '100%' }}>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Title level={2} style={{ marginBottom: 0 }}>
                    Questions For Your Property
                  </Typography.Title>
                  <Typography.Text>
                    Lorem ipsum dolor sit amet consectetur. Neque convallis
                    adipiscing malesuada eu massa. Dictum porttitor vulputate
                    aliquet amet lectus viverra ut. Id sed aenean nunc urna. Dui
                    risus bibendum in fames. Interdum amet ni scelerisque augue
                    urna porta viverra ac enim. Odio in fames tincidunt iaculis
                    massa a. Urna adipiscing nulla tempor proin gravida vitae
                    ridiculus dis in. Varius quis varius pharetra metus et donec
                    sodales bibendum. Ornare congue ac neque blandit sit massa
                    tempor nam.
                  </Typography.Text>
                </Space>
                <Radio.Group defaultValue="a" size="large" buttonStyle="solid">
                  <Radio.Button value="a">New Questions</Radio.Button>
                  <Radio.Button value="b">Answered</Radio.Button>
                  <Radio.Button value="c">Archived</Radio.Button>
                </Radio.Group>
                <Row gutter={[32, 32]}>
                  <Col xs={24} xl={16}>
                    <Card>
                      <Empty
                        image={media.noQuestion}
                        imageStyle={{ height: 'auto' }}
                        description={
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: 0 }}
                            >
                              You don't have any Unanswered Questions
                            </Typography.Title>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur. Malesuada
                              viverra lectus orci natoque mauris. Aenean
                              suscipit nisi massa sit pretium lorem curabitur.
                              Varius ac amet tincidunt ante. Tortor lacus sit
                              nam vitae tincidunt cras. Elementum eu ipsum velit
                              penatibus enim augue lorem nunc. Montes id semper
                              senectus diam praesent mi. Odio arcu morbi risus
                              turpisqw
                            </Typography.Paragraph>
                          </Space>
                        }
                      >
                        <Button type="primary">Learn More</Button>
                      </Empty>
                    </Card>
                  </Col>
                  <Col xs={24} xl={8}>
                    <Space
                      style={{ width: '100%' }}
                      direction="vertical"
                      size="middle"
                    >
                      <Card>
                        <Space
                          style={{ width: '100%' }}
                          size="middle"
                          direction="vertical"
                        >
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Tip: Try to write answers that help other potential
                            guests
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Lorem ipsum dolor sit amet consectetur. pellentesque
                            imperdiet euismod Lorem ipsum dolor sit amet
                          </Typography.Paragraph>
                          <Typography.Link>Show next tip</Typography.Link>
                        </Space>
                      </Card>
                      <Card>
                        <Space
                          style={{ width: '100%' }}
                          size="middle"
                          direction="vertical"
                        >
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            About Property Questions and Answers
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Lorem ipsum dolor sit amet consectetur. pellentesque
                            imperdiet euismod Lorem ipsum dolor sit amet
                          </Typography.Paragraph>
                        </Space>
                      </Card>
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

export default GuestQA;
