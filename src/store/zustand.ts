import { create } from 'zustand';

type TimerStore = {
  time: Date
  setTime: (time: Date) => void
}

type GameEndStore = {
  gameEnd: boolean
  setGameEnd: (gameEnd: boolean) => void
}

export const useTimerStore = create<TimerStore>((set) => ({
  time: new Date(),
  setTime: (time) => set({ time })
}))

export const useGameEndStore = create<GameEndStore>((set) => ({
  gameEnd: false,
  setGameEnd: (gameEnd) => set({ gameEnd })
}))