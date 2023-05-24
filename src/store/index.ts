import { create } from "zustand";

export const useHawkingStore = create((set) => ({
      onSubmit: undefined,

      setSubmit: (handler: any) => {
            set((state: any) => ({
                  onSubmit: handler,
            }));
      },
}));
