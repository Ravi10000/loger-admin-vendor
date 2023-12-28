import { Spin, Space, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
import { Link } from 'react-router-dom';

function ActionProperty({ propertyId, ...props }) {
  //   console.log({ propertyId });
  const { data: progress, isFetching } = useQuery({
    queryKey: ['properties-progress', propertyId],
    enabled: propertyId?.length === 24,
    queryFn: async () => {
      const res = await api.get(`/properties/progress/${propertyId}`);
      return res?.data?.progress || {};
    }
  });

  return isFetching ? (
    <Space style={{ display: 'flex', justifyContent: 'center' }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 20 }} spin />} />
    </Space>
  ) : (
    <>
      {progress?.routes?.length === 15 ? (
        <Typography.Text>Completed</Typography.Text>
      ) : (
        <Link to={progress?.routes?.pop()}>Continue Registration</Link>
      )}
    </>
  );
}

export default ActionProperty;
