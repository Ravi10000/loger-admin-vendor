import { SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Input,
  List,
  Radio,
  Row,
  Space,
  Typography
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'src/api';
import { Container, MainWrapper } from 'src/components/Global';
import { usePropertyById } from 'src/hooks/property-info.queries';
import { useTheme } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Spinner from 'src/components/spinner';
import { useMutation } from '@tanstack/react-query';
import { updateProperty } from 'src/api/properties.req';
import { toast } from 'react-hot-toast';

const Services = () => {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState('');

  const { isFetching } = usePropertyById(
    propertyId,
    ['facilities', 'propertyType'],
    property => {
      if (property?.facilities?.length)
        setSelectedFacilities(property?.facilities);
    }
  );

  const { data: facilityList, isFetching: isFetchingFacility } = useQuery({
    queryKey: ['facilities', { status: 'active' }],
    initialData: [],
    queryFn: async () => {
      const res = await api.get('/facilities?status=active');
      setFilteredList(res?.data?.facilities);
      return res?.data?.facilities;
    }
  });

  const theme = useTheme();
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const data = {
        facilities: selectedFacilities,
        propertyId
      };
      const res = await updateProperty(data);
      console.log({ res });
      toast.success('Property Updated Successfully');
    },
    onError: error => {
      console.log({ error });
      toast.error('Something went wrong');
    }
  });

  useEffect(() => {
    if (searchText) {
      const filtered = facilityList.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredList(filtered);
    } else {
      setFilteredList(facilityList);
    }
  }, [searchText, setFilteredList, facilityList]);

  return (
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
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
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
                  Facilities
                </Typography.Title>
                <Card>
                  {isFetching || isFetchingFacility ? (
                    <Spinner />
                  ) : (
                    <List
                      size="large"
                      bordered
                      dataSource={filteredList}
                      renderItem={facility => (
                        <List.Item
                          actions={[
                            <Radio.Group
                              optionType="button"
                              buttonStyle="solid"
                              defaultValue={
                                !selectedFacilities.includes(facility._id)
                                  ? 'no'
                                  : facility._id
                              }
                              onChange={e => {
                                console.log(e.target.value);
                                if (e.target.value === 'no') {
                                  setSelectedFacilities(ps =>
                                    ps.filter(item => item !== facility._id)
                                  );
                                } else {
                                  setSelectedFacilities(ps => [
                                    ...ps,
                                    facility._id
                                  ]);
                                }
                              }}
                            >
                              <Radio value={facility._id}>Yes</Radio>
                              <Radio value="no">No</Radio>
                            </Radio.Group>
                          ]}
                        >
                          {facility?.name}
                        </List.Item>
                      )}
                    />
                  )}
                </Card>
              </Space>
              <Button
                size="large"
                type="primary"
                block
                loading={isPending}
                disabled={isPending}
                onClick={mutate}
              >
                Save
              </Button>
            </Space>
          </Col>
        </Row>
      </Container>
    </MainWrapper>
  );
};

export default Services;
