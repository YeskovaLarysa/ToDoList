import React, { Component } from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error) {
    console.log("ошибка", error);

    return this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) return <div>Что то пошло не так..</div>;
    return <div className="error">{this.props.children}</div>;
  }
}
