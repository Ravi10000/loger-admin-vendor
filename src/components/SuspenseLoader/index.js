import { styled } from 'styled-components';
import { Spin } from 'antd';

const Box = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SuspenseLoader() {
  return (
    <Box>
      <Spin size="large" />
    </Box>
  );
}

export default SuspenseLoader;
