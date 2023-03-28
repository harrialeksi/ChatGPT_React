import { Center } from "@chakra-ui/react";
import React from "react";

import { Logo } from "components";

export const Header: React.FC = () => {
  return (
    <Center bg="header.100">
      <Logo />
    </Center>
  );
};
