import { Spin } from 'antd';
function Spinner() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Spin />
    </div>
  );
}

export default Spinner;
