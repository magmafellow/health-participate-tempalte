import { create } from 'zustand'

type TUserJsonSession = {
  opened: boolean
  setActiveState: (state: boolean) => void
}

const useUserJsonSessionStore = create<TUserJsonSession>()(set => ({
  opened: false,
  setActiveState: state => set({ opened: state }),
}))

export default useUserJsonSessionStore
