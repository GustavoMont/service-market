import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps,
} from "@chakra-ui/react";

interface Props extends InputProps {
  hasError?: boolean;
  validationMessage?: string;
  label: string;
}

function Input({ hasError, label, validationMessage, ...props }: Props) {
  return (
    <FormControl isInvalid={hasError}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput {...props} />
      {hasError && <FormErrorMessage>{validationMessage}</FormErrorMessage>}
    </FormControl>
  );
}

export default Input;
