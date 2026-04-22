/**
 * Typed Error Handling — No Silent Failures
 * 
 * Every error in the application should be one of these typed errors.
 * Generic catch blocks must log the error, never silently swallow it.
 */

/** Base application error class */
export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    public readonly userMessage: string = 'Something went wrong. Please try again.',
    public readonly cause?: Error
  ) {
    super(message)
    this.name = 'AppError'
  }
}

/** Errors related to access code validation */
export class AccessCodeError extends AppError {
  constructor(message: string, cause?: Error) {
    super(message, 'ACCESS_CODE_ERROR', 'low', message, cause)
    this.name = 'AccessCodeError'
  }
}

/** Errors related to localStorage operations */
export class StorageError extends AppError {
  constructor(message: string, operation: string, cause?: Error) {
    super(
      `Storage error during ${operation}: ${message}`,
      'STORAGE_ERROR',
      'medium',
      'Your progress could not be saved. Your browser may have storage disabled.',
      cause
    )
    this.name = 'StorageError'
  }
}

/** Errors related to download operations */
export class DownloadError extends AppError {
  constructor(filename: string, cause?: Error) {
    super(
      `Download failed for ${filename}`,
      'DOWNLOAD_ERROR',
      'medium',
      `Could not download ${filename}. Please try again or contact support.`,
      cause
    )
    this.name = 'DownloadError'
  }
}

/** Errors related to clipboard operations */
export class ClipboardError extends AppError {
  constructor(cause?: Error) {
    super(
      'Clipboard operation failed',
      'CLIPBOARD_ERROR',
      'low',
      'Could not copy to clipboard. Please select and copy manually.',
      cause
    )
    this.name = 'ClipboardError'
  }
}

/**
 * Log an error with context. Never silently swallow errors.
 * In production, this could send to an error tracking service.
 */
export function logError(error: unknown, context?: string): void {
  const timestamp = new Date().toISOString()
  const prefix = context ? `[${context}]` : '[App]'
  
  if (error instanceof AppError) {
    console.error(`${prefix} ${error.code} (${error.severity}): ${error.message}`, {
      code: error.code,
      severity: error.severity,
      userMessage: error.userMessage,
      cause: error.cause?.message,
      timestamp,
    })
  } else if (error instanceof Error) {
    console.error(`${prefix} Unhandled error: ${error.message}`, {
      name: error.name,
      stack: error.stack?.split('\n').slice(0, 3).join('\n'),
      timestamp,
    })
  } else {
    console.error(`${prefix} Unknown error:`, error, { timestamp })
  }
}

/**
 * Safely execute an operation with typed error handling.
 * Returns [result, null] on success or [null, AppError] on failure.
 */
export async function safeAsync<T>(
  operation: () => Promise<T>,
  errorFactory: (error: unknown) => AppError
): Promise<[T, null] | [null, AppError]> {
  try {
    const result = await operation()
    return [result, null]
  } catch (error) {
    const appError = errorFactory(error)
    logError(appError)
    return [null, appError]
  }
}

/**
 * Safely execute a synchronous operation with typed error handling.
 * Returns [result, null] on success or [null, AppError] on failure.
 */
export function safeSync<T>(
  operation: () => T,
  errorFactory: (error: unknown) => AppError
): [T, null] | [null, AppError] {
  try {
    const result = operation()
    return [result, null]
  } catch (error) {
    const appError = errorFactory(error)
    logError(appError)
    return [null, appError]
  }
}
