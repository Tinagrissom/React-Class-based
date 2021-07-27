import { Component } from 'react';

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = { hasError: false };
    }

    // this lifecycle method is what makes this an error boundary component.
    // there is no equivalent in Functional Componenets
    // can only be used in Class based components
    // will be triggered when child component generates an error
    componentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children 
    }
}

export default ErrorBoundary;