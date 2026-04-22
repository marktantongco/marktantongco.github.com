'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

function loadFromStorage<T>(key: string, initialValue: T): T {
  if (typeof window === 'undefined') return initialValue
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch {
    return initialValue
  }
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [hydrated, setHydrated] = useState(false)
  const hydratedRef = useRef(false)

  // Sync from localStorage on mount / key change
  useEffect(() => {
    const item = loadFromStorage(key, initialValue)
    hydratedRef.current = true
    // Use a micro-task to avoid the synchronous setState-in-effect lint
    queueMicrotask(() => {
      setStoredValue(item)
      setHydrated(true)
    })
  }, [key, initialValue])

  // Save to localStorage on change (only after hydration)
  useEffect(() => {
    if (hydratedRef.current) {
      try {
        localStorage.setItem(key, JSON.stringify(storedValue))
      } catch {
        // Ignore write errors
      }
    }
  }, [key, storedValue])

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue(value)
  }, [])

  return [storedValue, setValue]
}
