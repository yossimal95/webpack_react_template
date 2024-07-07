import React from "react";

const style = {
    direction: 'rtl',
    textAlign: 'center',
    userSelect: 'none',
    color: '#d04b4b'
};

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={style}>
                :-(
                <br />
                אירעה תקלה בטעינת הרכיב
            </h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
