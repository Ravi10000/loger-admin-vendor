import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'antd';
import React from 'react';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
    }
    body {
        background-color: #ffffff;
        color: #505050;
        font-weight: 400;
        flex: 1;
    }
    img {
        max-width: 100%;
        vertical-align: middle;
        height: auto;
    }
    #root {
        width: 100%;
        height: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    .ant-app {
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;

const AppThemeProvider = ({ children }) => {
  const { token } = theme.useToken();
  return (
    <ThemeProvider theme={{ antd: token }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
