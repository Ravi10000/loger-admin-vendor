import { Checkbox, Space } from 'antd';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding-top: 3.5rem;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const CardBottom = styled(Space)`
  display: flex;
  width: 100%;

  .ant-space-item:last-child {
    flex: 1;
  }
`;

export const CheckboxLabel = styled(Checkbox)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.antd.colorBorderSecondary};
  height: 70px;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: all 0.3s ease;
  border-radius: ${props => props.theme.antd.borderRadius}px;
  gap: 1rem;

  &:hover {
    border-color: ${props => props.theme.antd.colorPrimary};
  }

  .ant-checkbox {
    order: 2;
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
    & + span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      img {
        width: 30px;
        display: inline-block;
      }
    }
  }
`;
