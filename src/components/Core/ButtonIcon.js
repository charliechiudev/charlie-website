import React from "react";
import { Box, Button } from "../Core";

const ButtonIcon = ({
  variant = "black",
  //variant = "success",
  color = "#fff",
  children,
  ...rest
}) => {
  return (
    <Button variant={variant} color={color} {...rest}>
      {children}
      <Box
        css={`
          font-size: 1rem;
          padding-left: 1rem;
          display: flex;
        `}
      >
        <i className="icon icon-chat-round-2" />
      </Box>
    </Button>
  );
};

export default ButtonIcon;
