import { create } from 'zustand'

type TBurgerMenu = {
  opened: boolean
  setActiveState: (state: boolean) => void
}

const useBurgerMenuStore = create<TBurgerMenu>()(set => ({
  opened: false,
  setActiveState: state => set({ opened: state }),
}))

export default useBurgerMenuStore
