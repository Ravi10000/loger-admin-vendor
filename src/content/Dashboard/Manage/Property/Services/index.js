import { SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  List,
  Radio,
  Row,
  Select,
  Space,
  Typography
} from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';

const media = {
  binIcon: '/assets/svg/bin.svg',
  cableIcon: '/assets/svg/cable.svg',
  locationAddIcon: '/assets/svg/location-add.svg'
};

const PoolAndWellness = [
  'Water Slide',
  'Sun Loungers or Beach Chairs',
  'Sun Umbrellas',
  'Beauty Services',
  'Spa Facilities',
  'Steam Room',
  'Spa Lounge/Relaxation Area',
  'Foot Bath',
  'Spa/Wellness Packages'
];

const PriceforMeals = ['Breakfast', 'Lunch', 'Dinner', 'Brunch'];

const SafetyFeature = [
  'Staff Follow all Safety Protocols a Directed by Local Authorities',
  'Shared Stationery Such as Printed Menus, Magaziner, Pens, and Paper Removed',
  'Hand Sanitizer in Guest Accommodation and Key Areas',
  'Process in Place to Check Health of Guests',
  'First Aid Kit Available',
  'Access to Health Care Professionals',
  'Thermometers for Guests Provided by Property',
  'Face Masks for Guests Available'
];

const TopFacilities = [
  'Swimming Pool',
  'Bar',
  'Sauna',
  'Garden',
  'Terrace',
  'Non-Smoking Rooms',
  'Family Rooms',
  'Hot Tub/Jacuzzi'
];

const PhysicalDistancing = [
  'Contactless Check-In & Check-Out',
  'Cashless Payment Available',
  'Physical Distancing Rules Followed',
  'Mobile App for Room Service',
  'Screens of Physical Barriers Placed Between Staff and Guests in Appropriate Areas'
];

const CleanlinessAndDisinfecting = [
  'Use of Cleaning Chemicals That Are Effective Against Coronavirus',
  'Linens, Towels and Laundry Washed in Accordance with Local Authority Guidelines',
  'Guest Accommodation is Disinfected Between Stays',
  'Guest Accommodation Sealed After Cleaning',
  'Property is Cleaned by Professional Cleaning Companies'
];

const FoodAndDrink = [
  'Kid Meals',
  'Kid-Friendly Buffet',
  'Wine/Champagne',
  'Fruits',
  'Coffee House on Site',
  'Restaurant',
  'Snack Bar',
  'Grocery Deliveries'
];

const SelfCheckIn = [
  'Guest Passports and IDs Collected Online, Pre-Stay',
  'Check-In Kioks in the Lobby',
  'Lockbox Key Collection at the Property',
  'Lockbox Key Collection at a Separate Location Near the Property',
  'Mobile Phone to Unlock Room Door Using Bluetooth',
  'Mobile Phone to Unlock Room Door Using Internet Connection'
];

const Active = [
  'Tennis Equipment',
  'Badminton Equipment',
  'Beach',
  'Temporary Art Galleries',
  'Pub Crawls',
  'Stand-Up Comedy',
  'Movie Nights',
  'Walking Tours',
  'Bike Tours',
  'Themed Dinner Nights',
  'Happy Hour',
  'Tour of Class About Local Culture',
  'Live Music/Performance',
  'Live Sport Events (Broadcast)',
  'Archery',
  'Bingo'
];

const Transport = [
  'Public Transport Tickets',
  'Shuttle Service',
  'Bicycle Parking',
  'Bicycle Rental',
  'Car Hire',
  'Airport Shuttle',
  'Parking'
];

const ReceptionServices = [
  '24-Hour From Dest',
  'Private Check-In/Check-Out',
  'Express Check-In/Check-Out',
  'Concierge Service',
  'Tour Desk',
  'Currency Exchange',
  'ATM/Cash Machine on Site',
  'Luggage Storage',
  'Lockers'
];

const CommonAreas = [
  'Outdoor Furniture',
  'Picnic Area',
  'Indoor Fireplace',
  'Outdoor Fireplace',
  'Sun Terrace',
  'Shared Kitchen',
  'Shared Lounge/TV Area',
  'Games Room',
  'Chapel/Shrine'
];

const EntertainmentAndFamilyServices = [
  'Board Games/Puzzles',
  'Indoor Play Area',
  "Kid's Outdoor Play Equipment",
  'Baby Safety Gates',
  'Strollers',
  'Evening Entertainment',
  'Nightclub/DJ',
  'Casino',
  'Karaoke',
  'Entertainment Staff',
  "Kid's Club",
  "Children's Playground",
  'Babysitting/Child Services'
];

const CleaningServices = [
  'Dry Cleaning',
  'Ironing Service',
  'Laundry',
  'Daily Housekeeping',
  'Trouser Press'
];

const BusinessFacility = [
  'Meeting/Banquet Facilities',
  'Business Centre',
  'Fax/Photocopying'
];

const Shops = ['Minimarket on Site', 'Business Centre', 'Fax/Photocopying'];

const Miscellaneous = [
  'Pet Basket',
  'Pet Bowls',
  'Key Access',
  'Key Card Access',
  'Adult Only',
  'Allergy-Free Room'
];

const ReduceAndManageWaste = [
  'Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim id diam nunc arcu tellus ornare. Sed malesuada volutpat platea ut rhoncus egestas dictum quam leo. Arcu montes bibendum purus tortor.',
  'Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim id diam nunc arcu tellus ornare. Sed diam pellentesque malesuada volutpat platea ut rhoncus egestas dictum quam leo. Arcu montes bibendum purus tortor.'
];

const ReduceAndManageWastePlastic = ['Plastic Straws', 'Plastic Cups'];

const Services = () => {
  const theme = useTheme();

  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={24} xl={20}>
              <Space direction="vertical" size={48} style={{ width: '100%' }}>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Title level={2} style={{ marginBottom: 0 }}>
                    Facilities & Services
                  </Typography.Title>
                  <Typography.Text>
                    Listing Your Facilities can Really help influence Guests to
                    Book! Update the ones available at your Property or on-site
                    Below.
                  </Typography.Text>
                  <Input
                    placeholder="Search Reservation"
                    size="large"
                    prefix={
                      <SearchOutlined
                        style={{ color: theme.antd.colorTextPlaceholder }}
                      />
                    }
                  />
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Pool & Wellness
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={PoolAndWellness}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Price for Meals
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={PriceforMeals}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Safety Feature
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={SafetyFeature}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Top Facilities
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={TopFacilities}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Physical Distancing
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={PhysicalDistancing}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Cleanliness & Disinfecting
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={CleanlinessAndDisinfecting}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Food & Drink
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={FoodAndDrink}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Self Check-In
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={SelfCheckIn}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Active
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={Active}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Transport
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={Transport}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Reception Services
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={ReceptionServices}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Common Areas
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={CommonAreas}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Entertainment and Family Services
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={EntertainmentAndFamilyServices}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Cleaning Services
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={CleaningServices}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Business Facilities
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={BusinessFacility}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Shops
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={Shops}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Miscellaneous
                  </Typography.Title>
                  <Card>
                    <List
                      size="large"
                      bordered
                      dataSource={Miscellaneous}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="1">Yes</Radio>
                              <Radio value="2">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Sustainability Practices
                  </Typography.Title>
                  <Typography.Paragraph>
                    Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim
                    id diam nunc arcu tellus ornare. Sed diam pellentesque
                    sagittis nam.
                  </Typography.Paragraph>
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: '100%' }}
                  >
                    <Collapse
                      items={[
                        {
                          key: '1',
                          label: (
                            <Space size="middle" style={{ width: '100%' }}>
                              <img src={media.binIcon} alt="" />
                              <Space direction="vertical" size={0}>
                                <Typography.Title
                                  level={5}
                                  style={{ marginBottom: 0 }}
                                >
                                  Reduce and Manage Waste
                                </Typography.Title>
                                <Typography.Text>
                                  Lorem ipsum dolor sit amet consectetur. Amet
                                  vestibulum enim
                                </Typography.Text>
                              </Space>
                            </Space>
                          ),
                          children: (
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Title level={5}>
                                Have You Implemented any of These Practices to
                                Reduce and Manage West?
                              </Typography.Title>
                              <List
                                size="large"
                                bordered
                                dataSource={ReduceAndManageWaste}
                                renderItem={item => (
                                  <List.Item
                                    actions={[
                                      <Radio.Group
                                        optionType="button"
                                        buttonStyle="solid"
                                      >
                                        <Radio value="1">Yes</Radio>
                                        <Radio value="2">No</Radio>
                                      </Radio.Group>
                                    ]}
                                  >
                                    {item}
                                  </List.Item>
                                )}
                              />
                            </Space>
                          )
                        }
                      ]}
                      expandIconPosition="end"
                      defaultActiveKey={['1']}
                    />
                    <Collapse
                      items={[
                        {
                          key: '1',
                          label: (
                            <Space size="middle" style={{ width: '100%' }}>
                              <img src={media.binIcon} alt="" />
                              <Space direction="vertical" size={0}>
                                <Typography.Title
                                  level={5}
                                  style={{ marginBottom: 0 }}
                                >
                                  Reduce and Manage Waste - Singl-Use Plastics
                                </Typography.Title>
                                <Typography.Text>
                                  Lorem ipsum dolor sit amet consectetur. Amet
                                  vestibulum enim
                                </Typography.Text>
                              </Space>
                            </Space>
                          ),
                          children: (
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Title level={5}>
                                Do You Use any of These Single-Use Plastics at
                                Your Property ?
                              </Typography.Title>
                              <List
                                size="large"
                                bordered
                                dataSource={ReduceAndManageWastePlastic}
                                renderItem={item => (
                                  <List.Item
                                    actions={[
                                      <Radio.Group
                                        optionType="button"
                                        buttonStyle="solid"
                                      >
                                        <Radio value="1">Yes</Radio>
                                        <Radio value="2">No</Radio>
                                      </Radio.Group>
                                    ]}
                                  >
                                    {item}
                                  </List.Item>
                                )}
                              />
                            </Space>
                          )
                        }
                      ]}
                      expandIconPosition="end"
                      defaultActiveKey={['1']}
                    />
                    <Collapse
                      items={[
                        {
                          key: '1',
                          label: (
                            <Space size="middle" style={{ width: '100%' }}>
                              <img src={media.locationAddIcon} alt="" />
                              <Space direction="vertical" size={0}>
                                <Typography.Title
                                  level={5}
                                  style={{ marginBottom: 0 }}
                                >
                                  Promote Safety, Equity and Culture in Your
                                  Local Community
                                </Typography.Title>
                                <Typography.Text>
                                  Lorem ipsum dolor sit amet consectetur. Amet
                                  vestibulum enim
                                </Typography.Text>
                              </Space>
                            </Space>
                          ),
                          children: (
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Title level={5}>
                                Have You Implemented any of These Practices to
                                Reduce and Manage West ?
                              </Typography.Title>
                              <List
                                size="large"
                                bordered
                                dataSource={ReduceAndManageWastePlastic}
                                renderItem={item => (
                                  <List.Item
                                    actions={[
                                      <Radio.Group
                                        optionType="button"
                                        buttonStyle="solid"
                                      >
                                        <Radio value="1">Yes</Radio>
                                        <Radio value="2">No</Radio>
                                      </Radio.Group>
                                    ]}
                                  >
                                    {item}
                                  </List.Item>
                                )}
                              />
                            </Space>
                          )
                        }
                      ]}
                      expandIconPosition="end"
                      defaultActiveKey={['1']}
                    />
                  </Space>
                </Space>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Temprory Closure of Facilities
                  </Typography.Title>
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: '100%' }}
                  >
                    <Form layout="vertical">
                      <Row gutter={[16, 16]} align="bottom">
                        <Col xs={24} sm={12} md={8} xl={6}>
                          <Form.Item
                            style={{ marginBottom: 0 }}
                            label="Facility/Service"
                          >
                            <Select
                              defaultValue="a1"
                              placeholder="select"
                              style={{
                                width: '100%'
                              }}
                              options={[
                                {
                                  value: '1',
                                  label: 'a11'
                                }
                              ]}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} xl={6}>
                          <Form.Item style={{ marginBottom: 0 }} label="From">
                            <DatePicker style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} xl={6}>
                          <Form.Item style={{ marginBottom: 0 }} label="Until">
                            <DatePicker style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} xl={6}>
                          <Form.Item style={{ marginBottom: 0 }}>
                            <Button type="primary" block>
                              Add
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                    <Card>
                      <List
                        size="large"
                        bordered
                        dataSource={[]}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />
                    </Card>
                  </Space>
                </Space>
                <Button size="large" type="primary" block>
                  Save
                </Button>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Services;
