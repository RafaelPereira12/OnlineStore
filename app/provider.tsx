import { GlobalProvider } from "./context/globalContext";

export function Provider({ children }: { children: React.ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}