import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '@/services/api-client.ts'
import { AxiosRequestConfig } from 'axios'

interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: []) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(
    () => {
      const controller = new AbortController()
      setIsLoading(true)
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data)
          setIsLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
          setIsLoading(false)
        })
      //.finally(() => setIsLoading(false))

      return () => controller.abort()
    },
    deps ? [...deps] : []
  )

  return { data, error, isLoading }
}

export default useData
