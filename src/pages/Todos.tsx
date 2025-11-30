// Implementado según TanStack Query v5 y React docs (consultado con context7)
import { useState } from 'react'
import { useTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from '@/hooks/useTodos'
import { Link } from 'react-router-dom'
import type { Todo } from '@/types'

export function Todos() {
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const { data: todos, isPending, isError, error } = useTodos()
  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo()

  const handleCreateTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodoTitle.trim()) return

    createTodo.mutate(
      {
        title: newTodoTitle,
        completed: false,
        userId: 1,
      },
      {
        onSuccess: () => {
          setNewTodoTitle('')
        },
      }
    )
  }

  const handleToggleTodo = (todo: Todo) => {
    updateTodo.mutate({
      ...todo,
      completed: !todo.completed,
    })
  }

  const handleDeleteTodo = (id: number) => {
    deleteTodo.mutate(id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
            >
              ← Volver al inicio
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Todos con TanStack Query
          </h1>

          {/* Create Todo Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <form onSubmit={handleCreateTodo} className="flex gap-4">
              <input
                type="text"
                value={newTodoTitle}
                onChange={e => setNewTodoTitle(e.target.value)}
                placeholder="Nueva tarea..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                disabled={createTodo.isPending}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-lg font-medium transition-colors"
              >
                {createTodo.isPending ? 'Creando...' : 'Agregar'}
              </button>
            </form>
          </div>

          {/* Todos List */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            {isPending && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando todos...</p>
              </div>
            )}

            {isError && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-300">Error: {error.message}</p>
              </div>
            )}

            {todos && todos.length === 0 && (
              <p className="text-center text-gray-600 dark:text-gray-400 py-8">
                No hay tareas. ¡Crea una nueva!
              </p>
            )}

            {todos && todos.length > 0 && (
              <ul className="space-y-3">
                {todos.map(todo => (
                  <li
                    key={todo.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleTodo(todo)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span
                      className={`flex-1 ${
                        todo.completed
                          ? 'line-through text-gray-500 dark:text-gray-500'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {todo.title}
                    </span>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      disabled={deleteTodo.isPending}
                      className="px-4 py-1 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Info */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              Características de TanStack Query:
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
              <li>✅ Caching automático de datos</li>
              <li>✅ Optimistic updates para mejor UX</li>
              <li>✅ Invalidación y refetch de queries</li>
              <li>✅ Estados de loading y error</li>
              <li>✅ Integración con Axios</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
