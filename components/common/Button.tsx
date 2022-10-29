import {
  ButtonProps as ChakraProps,
  Button as ChackraButton,
} from "@chakra-ui/react";
import React from "react";

type buttonColorType = "dark" | "light" | "common" | "none";

interface ButtonProps extends ChakraProps {
  colorType: buttonColorType;
}

function handleHoverColor(buttonColorType: buttonColorType, color?: string) {
  if (!color) {
    return "primary";
  }
  switch (buttonColorType) {
    case "dark":
      return color.replace("dark", "light");
    case "common":
      return `dark_${color}`;
    case "light":
      return color.replace("light", "dark");
    default:
      return "primary";
  }
}

function Button({ colorType, ...props }: ButtonProps) {
  const { variant, color, bg } = props;

  function BaseButton(props: any) {
    return (
      <ChackraButton {...props} _active={{ transform: "scale(.9)" }}>
        {props.children}
      </ChackraButton>
    );
  }

  if (variant === "ghost") {
    return (
      <BaseButton
        {...props}
        _hover={{ color: handleHoverColor(colorType, color?.toString()) }}
      >
        {props.children}
      </BaseButton>
    );
  } else if (variant === "solid") {
    return (
      <BaseButton
        {...props}
        _hover={{
          backgroundColor: handleHoverColor(colorType, bg?.toString()),
        }}
      >
        {props.children}
      </BaseButton>
    );
  }
  return <ChackraButton {...props}>{props.children}</ChackraButton>;
}

export default Button;
