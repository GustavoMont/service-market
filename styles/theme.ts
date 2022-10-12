import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

const tailwindTheme = resolveConfig(tailwindConfig);

const theme: Partial<ChakraTheme> = {
  colors: {
    ...tailwindTheme.theme?.colors,
  },
  fonts: {
    heading: "Montserrat",
    text: "Roboto",
  },
};

export default extendTheme(theme);
