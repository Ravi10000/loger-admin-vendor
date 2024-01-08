import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    this.setState({ hasError: true, error, errorInfo });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            fontFamily: 'Montserrat'
          }}
        >
          <h2 style={{ fontSize: '24px' }}>Something went wrong 🤦‍♂️🤦‍♂️.</h2>
          <p
            style={{
              background: 'red',
              padding: '10px 20px',
              border: '1px solid red',
              borderRadius: '5px',
              color: '#fff',
              fontWeight: 'bold'
            }}
          >
            {this.state.error && this.state.error.toString()}
          </p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
