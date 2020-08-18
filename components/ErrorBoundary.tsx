import {Component, ReactNode} from 'react';

export class ErrorBoundary extends Component<{
  fallback: ReactNode;
  children: ReactNode;
}> {
  state = {hasError: false, error: null};
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
