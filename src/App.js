import { ConfigProvider, App as AppWrapper } from 'antd';
import AppThemeProvider from './theme/ThemeProvider';
import { useRoutes } from 'react-router-dom';
import router from './router';

const App = () => {
  const content = useRoutes(router);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // fontFamily:
            //   '"Nordnet Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
            fontFamily:
              '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
            borderRadius: 4,
            fontSize: 15
          },
          components: {
            Typography: {
              titleMarginBottom: '0.4rem'
            },
            Layout: {
              colorBgHeader: 'rgba(8, 104, 248, 0.1)'
            }
          }
        }}
      >
        <AppThemeProvider>
          <AppWrapper>{content}</AppWrapper>
        </AppThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
