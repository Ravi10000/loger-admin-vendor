import { ConfigProvider, App as AppWrapper } from 'antd';
import AppThemeProvider from './theme/ThemeProvider';
import { useRoutes } from 'react-router-dom';
import router from './router';
import theme from './theme';
import { Toaster } from 'react-hot-toast';
import useFetchUser from 'src/hooks/fetch-user';
// import { useUserStore } from './store/user';

const App = () => {
  const content = useRoutes(router);
  useFetchUser();
  // const user = useUserStore(state => state.user);
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: 'Montserrat'
          }
        }}
      />
      <ConfigProvider theme={theme}>
        <AppThemeProvider>
          <AppWrapper>{content}</AppWrapper>
        </AppThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
