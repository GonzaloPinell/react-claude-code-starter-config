// Implementado según TanStack Query v5 docs (consultado con context7)
// https://tanstack.com/query/latest/docs/framework/react/overview
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/api/client'
import type { Todo } from '@/types'

// Fetch todos
export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const { data } = await apiClient.get<Todo[]>('/todos?_limit=10')
      return data
    },
  })
}

// Fetch single todo
export const useTodo = (id: number) => {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: async () => {
      const { data } = await apiClient.get<Todo>(`/todos/${id}`)
      return data
    },
    enabled: !!id,
  })
}

// Create todo mutation
export const useCreateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newTodo: Omit<Todo, 'id'>) => {
      const { data } = await apiClient.post<Todo>('/todos', newTodo)
      return data
    },
    onSuccess: () => {
      // Invalidar y refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

// Update todo mutation
export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (todo: Todo) => {
      const { data } = await apiClient.put<Todo>(`/todos/${todo.id}`, todo)
      return data
    },
    onMutate: async (newTodo: Todo) => {
      // Cancelar queries en curso
      await queryClient.cancelQueries({ queryKey: ['todos'] })

      // Snapshot del valor anterior
      const previousTodos = queryClient.getQueryData(['todos'])

      // Optimistic update
      queryClient.setQueryData<Todo[]>(['todos'], old =>
        old?.map(todo => (todo.id === newTodo.id ? newTodo : todo))
      )

      return { previousTodos }
    },
    onError: (_err, _newTodo, context) => {
      // Rollback en caso de error
      queryClient.setQueryData(['todos'], context?.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

// Delete todo mutation
export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await apiClient.delete(`/todos/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
