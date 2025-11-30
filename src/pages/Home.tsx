// Implementado según React docs (consultado con context7)
import { Link } from 'react-router-dom'
import { useCounterStore } from '@/store/counterStore'

export function Home() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            POS System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
            Sistema de Punto de Venta con React + TypeScript
          </p>

          {/* Zustand Counter Demo */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Zustand State Management
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={decrement}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
              >
                -
              </button>
              <span className="text-4xl font-bold text-gray-900 dark:text-white min-w-[100px] text-center">
                {count}
              </span>
              <button
                onClick={increment}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                +
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={reset}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                Reset
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              Estado persistido en localStorage con Zustand
            </p>
          </div>

          {/* Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Navegación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/todos"
                className="block p-6 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
              >
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Todos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Demo de TanStack Query con CRUD operations
                </p>
              </Link>
              <Link
                to="/about"
                className="block p-6 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
              >
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-300 mb-2">
                  About
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Información del stack tecnológico
                </p>
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Stack Tecnológico
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold text-blue-900 dark:text-blue-300">React 18+</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="font-semibold text-purple-900 dark:text-purple-300">TypeScript</p>
              </div>
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                <p className="font-semibold text-cyan-900 dark:text-cyan-300">Tailwind CSS</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="font-semibold text-orange-900 dark:text-orange-300">Vite</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="font-semibold text-green-900 dark:text-green-300">Zustand</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="font-semibold text-red-900 dark:text-red-300">TanStack Query</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="font-semibold text-yellow-900 dark:text-yellow-300">Axios</p>
              </div>
              <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <p className="font-semibold text-pink-900 dark:text-pink-300">React Router</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
