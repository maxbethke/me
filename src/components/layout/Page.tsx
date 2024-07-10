import React, {PropsWithChildren} from "react";

export const Page: React.FC = ({children, className, ...props}: PropsWithChildren) => (
  <div
    className={`
      flex flex-col justify-center items-center
      px-2
      ${className ?? ''}
    `}
    {...props}
  >
    {children}
  </div>
)
