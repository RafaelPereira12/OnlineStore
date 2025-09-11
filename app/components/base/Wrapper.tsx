import type { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div>
      {children}
    </div>
  );
}