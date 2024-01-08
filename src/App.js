import { ConfigProvider, App as AppWrapper } from 'antd';
import AppThemeProvider from './theme/ThemeProvider';
import { useRoutes } from 'react-router-dom';
import router from './router';
import theme from './theme';
import { Toaster } from 'react-hot-toast';
import useFetchUser from 'src/hooks/user.queries';
import ErrorBoundary from './components/error-boundary';
// import { useUserStore } from './store/user';

const App = () => {
  const content = useRoutes(router);
  useFetchUser();
  // const user = useUserStore(state => state.user);
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
