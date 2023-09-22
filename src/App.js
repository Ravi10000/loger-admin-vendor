import { ConfigProvider, App as AppWrapper } from 'antd';
import AppThemeProvider from './theme/ThemeProvider';
import { useRoutes } from 'react-router-dom';
import router from './router';
import theme from './theme';

const App = () => {
  const content = useRoutes(router);
  return (
    <>
      <ConfigProvider theme={theme}>
        <AppThemeProvider>
          <AppWrapper>{content}</AppWrapper>
        </AppThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
