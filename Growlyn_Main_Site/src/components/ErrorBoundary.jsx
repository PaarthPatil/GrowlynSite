import React from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service like Sentry here
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // High-end fallback UI
            return (
                <div className="min-h-screen bg-dark text-white flex flex-col items-center justify-center p-6 text-center font-sans">
                    <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-accent" />
                        </div>
                        <h1 className="text-2xl font-heading font-bold mb-4">Temporarily Unavailable</h1>
                        <p className="text-white/60 mb-8 leading-relaxed text-sm">
                            We've encountered an unexpected issue while loading this component. Our team has been notified.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-white text-dark px-6 py-3 rounded-full font-bold text-sm w-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
                        >
                            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
