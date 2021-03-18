import React from 'react';

class ErrorBoundary extends React.PureComponent {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}

	componentDidCatch(err) {
		console.error(err);
	}

	render() {
		return this.state.hasError ? (
			<div>Something went wrong</div>
		) : (
			this.props.children
		);
	}
}

export default ErrorBoundary;
