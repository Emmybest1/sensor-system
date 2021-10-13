import React, { Component } from 'react';

type State = {
  hasError: boolean;
};

type Props = {
  children: React.ReactNode;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry something went wrong</h1>;
    }

    return this.props.children;
  }
}
