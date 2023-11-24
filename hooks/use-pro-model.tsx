import { create } from "zustand";

interface useProModelProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useProModel = create<useProModelProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

