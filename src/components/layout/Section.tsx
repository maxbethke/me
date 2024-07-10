import React, {PropsWithChildren} from "react";

export const Section: React.FC = ({children, className, ...props}: PropsWithChildren) => (
  <div
    className={'flex flex-col gap-2 p-2 ' + (className ?? '')}
    {...props}
  >
    {children}
  </div>
)
