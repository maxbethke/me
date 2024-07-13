import React, {PropsWithChildren} from "react";

export const BodyText: React.FC = ({children, className, ...props}: PropsWithChildren) => (
  <p
    className={'text-gray-500 ' + (className ?? '')}
    {...props}
  >
    {children}
  </p>
)
