"use client";

import { createContext, useContext, useState } from "react";

type AuthUIState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  view: "login" | "signup";
  setView: (v: "login" | "signup") => void;
};

const AuthUIContext = createContext<AuthUIState | undefined>(undefined);

export function AuthUIProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"login" | "signup">("login");
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <AuthUIContext.Provider value={{ isOpen, open, close, view, setView }}>
      {children}
    </AuthUIContext.Provider>
  );
}

export function useAuthUI() {
  const ctx = useContext(AuthUIContext);
  if (!ctx) throw new Error("useAuthUI must be used within AuthUIProvider");
  return ctx;
}


