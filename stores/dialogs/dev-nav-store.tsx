import { create } from 'zustand'

type DevNavProps = {
  opened: boolean
  setActiveState: (state: boolean) => void
}

const useDevNavStore = create<DevNavProps>()(set => ({
  opened: false,
  setActiveState: state => set({ opened: state }),
}))

export default useDevNavStore
