// import { _Wrapper } from "./_Wrapper";

// export const Wrapper = (props: any) => {
//   return <_Wrapper>{props.children}</_Wrapper>;
// };
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