import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
