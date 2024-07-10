import React, {PropsWithChildren} from "react";

export const Paper: React.FC = ({children, className, ...props}: PropsWithChildren) => (
  <div
    className={'bg-gray-300 rounded-lg border border-gray-400 shadow ' + (className ?? '')}
    {...props}
  >
    {children}
  </div>
)
