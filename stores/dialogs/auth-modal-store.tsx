import { create } from 'zustand'

type AuthModalProps = {
  opened: boolean
  setActiveState: (state: boolean) => void
}

const useAuthModalStore = create<AuthModalProps>()(set => ({
  opened: false,
  setActiveState: state => set({ opened: state }),
}))

export default useAuthModalStore
