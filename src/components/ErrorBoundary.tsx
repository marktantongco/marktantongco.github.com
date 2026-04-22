'use client'

import { Component, type ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { logError } from '@/lib/errors'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Error Boundary — Catches runtime errors in child components.
 * Prevents the entire page from crashing when a component fails.
 * Logs errors via the typed error system — no silent failures.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logError(error, `ErrorBoundary@${errorInfo.componentStack?.split('\n')[1]?.trim() || 'unknown'}`)
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null })
  }

  handleGoHome = (): void => {
    window.location.href = '/'
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Something went wrong</h2>
            <p className="text-[#8892a4] text-sm mb-6">
              This section encountered an error. You can try again or return to the home page.
            </p>
            {this.state.error && (
              <details className="text-left mb-6 bg-[#0d1b2a] rounded-lg p-4 border border-gold/10">
                <summary className="text-xs text-[#8892a4] cursor-pointer hover:text-white transition-colors">
                  Error details
                </summary>
                <p className="text-xs text-red-400 mt-2 font-mono break-all">
                  {this.state.error.message}
                </p>
              </details>
            )}
            <div className="flex gap-3 justify-center">
              <Button
                onClick={this.handleRetry}
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={this.handleGoHome}
                className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
