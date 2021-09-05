import React from "react";

export default class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            hasError: false
        };
    }
  
    static getDerivedStateFromError(error: any) {
        return {
            hasError: true
        };
    }
    
    componentDidCatch(error: any, errorInfo: any) {
        console.error('ErrorBoundary caught this:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong...</div>;           
        }

        return this.props.children;
    }
  } 