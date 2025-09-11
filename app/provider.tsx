import { GlobalProvider } from "./context/globalContext";
import "./app.css"; 
import "@fontsource/bebas-neue/400.css"; 
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/700.css"; 

export function Provider({ children }: { children: React.ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}