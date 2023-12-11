import { Progress, Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';

function PropertyProgress({ propertyId, ...props }) {
//   console.log({ propertyId });
  const { data: progress, isFetching } = useQuery({
    queryKey: ['properties-progress', propertyId],
    enabled: propertyId?.length === 24,
    queryFn: async () => {
      const res = await api.get(`/properties/progress/${propertyId}`);
    //   console.log({ res });
      return res?.data?.progress || 0;
    }
  });
//   console.log({ progress });
  return isFetching ? (
    <Space style={{ display: 'flex', justifyContent: 'center' }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 20 }} spin />} />
    </Space>
  ) : (
    <Progress percent={progress} {...props} />
  );
}

export default PropertyProgress;
