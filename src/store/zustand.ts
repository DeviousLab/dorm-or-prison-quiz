import { create } from 'zustand';

type TimerStore = {
  time: Date
  setTime: (time: Date) => void
}

export const useTimerStore = create<TimerStore>((set) => ({
  time: new Date(),
  setTime: (time) => set({ time })
}))