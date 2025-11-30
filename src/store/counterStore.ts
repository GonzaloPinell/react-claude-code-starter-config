// Implementado según Zustand v5 docs (consultado con context7)
// https://zustand.docs.pmnd.rs/getting-started/introduction
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  incrementByAmount: (amount: number) => void
  reset: () => void
}

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      set => ({
        count: 0,
        increment: () => set(state => ({ count: state.count + 1 })),
        decrement: () => set(state => ({ count: state.count - 1 })),
        incrementByAmount: amount => set(state => ({ count: state.count + amount })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: 'counter-storage',
      }
    )
  )
)
