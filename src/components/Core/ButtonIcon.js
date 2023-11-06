import React from "react";
import { Box, Button } from "../Core";

const ButtonIcon = ({
  variant = "black",
  color = "#fff",
  children,
  ...rest
}) => {
  return (
    <Button variant={variant} color={color} {...rest}>
      {children}
      <Box
        css={`
          font-size: 1.4rem;
          font-weight: bold;
          padding-left: 1rem;
          display: flex;
        `}
      >
        <svg className="change-with-theme" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 23 23" fill="none">
            <path d="M11.5 3.83337L10.1487 5.18462L15.4962 10.5417H3.83331V12.4584H15.4962L10.1487 17.8155L11.5 19.1667L19.1666 11.5L11.5 3.83337Z" fill="#000"/>    
        </svg>
      </Box>
    </Button>
  );
};

export default ButtonIcon;
