// Implementado según Axios best practices y TanStack Query docs (consultado con context7)
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  config => {
    // Aquí podrías agregar tokens de autenticación
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Manejo de errores global
    if (error.response?.status === 401) {
      // Redirigir a login o refresh token
    }
    return Promise.reject(error)
  }
)
