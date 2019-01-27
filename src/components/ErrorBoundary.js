import React from 'react';
import Alert from 'antd/lib/alert';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error: error || 'Something went wrong :(',
      hasError: true
    });
  }

  render() {
    const { hasError, error } = this.state;
    return (
      <div>
        {hasError && <Alert message={error} banner closable />}
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
