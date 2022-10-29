import Body from "@/components/common/Body";
import Button from "@/components/common/Button";
import WhiteCard from "@/components/common/WhiteCard";
import Input from "@/components/Form/Input";
import PasswordInput from "@/components/Form/PasswordInput";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import api from "config/axios";
import useUser from "data/hooks/useUser";
import Token from "models/Token";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";

interface FormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface FormValidation {
  name: boolean;
  email: boolean;
  password: boolean;
}

function Signup() {
  const { login } = useUser();
  const [formFields, setFormFields] = useState<FormFields>({
    confirmPassword: "",
    email: "",
    name: "",
    password: "",
  });
  const [fieldsValidation, setFieldsValidation] = useState<FormValidation>({
    email: false,
    name: false,
    password: false,
  });

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    setFormFields((fields) => ({
      ...fields,
      [target.name]: target.value,
    }));
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    type keys = keyof typeof formFields;
    let canRequest = true;
    Object.keys(formFields).forEach((key) => {
      if (Object.keys(fieldsValidation).includes(key)) {
        setFieldsValidation((fields) => ({
          ...fields,
          [key]: formFields[key as keys] === "",
        }));
        canRequest = canRequest && !(formFields[key as keys] === "");
      }
    });
    if (canRequest) {
      try {
        const { data } = await api.post<Token>("/clients", formFields);
        login(data);
      } catch (error) {}
    }
  }

  return (
    <Body className="bg-gradient-to-tl from-dark_primary to-primary flex items-center justify-center">
      <main className="w-full">
        <WhiteCard className="max-w-lg md:max-w-lg mx-auto md:p-6">
          <Stack spacing={8}>
            <div className="text-center">
              <Heading as="h3" size="xl" color="primary">
                Faça seu Cadastro
              </Heading>
              <Text
                fontWeight={500}
                fontSize="md"
                className="mt-2"
                color="light_black"
              >
                Aproveite todas as oportunidades
              </Text>
            </div>
            <div id="login-container">
              <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <InputGroup>
                  <Input
                    hasError={fieldsValidation.name}
                    label="Nome:"
                    variant={"filled"}
                    placeholder="Seu nome"
                    type={"name"}
                    name={"name"}
                    value={formFields.name}
                    onChange={onChange}
                    validationMessage="Campo obrigatório"
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    hasError={fieldsValidation.email}
                    label="E-mail:"
                    variant={"filled"}
                    placeholder="Insira seu e-mail"
                    type={"email"}
                    name={"email"}
                    value={formFields.email}
                    onChange={onChange}
                    validationMessage="Campo obrigatório"
                  />
                </InputGroup>
                <FormControl isInvalid={fieldsValidation.password}>
                  <FormLabel>Senha</FormLabel>
                  <PasswordInput
                    variant={"filled"}
                    onChange={onChange}
                    name="password"
                    value={formFields.password}
                  />
                  <FormLabel>Confirme sua senha</FormLabel>
                  <PasswordInput
                    variant={"filled"}
                    onChange={onChange}
                    name="confirmPassword"
                    value={formFields.confirmPassword}
                  />
                  {fieldsValidation.password && (
                    <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                  )}
                </FormControl>

                <Button
                  colorType="common"
                  color={"white"}
                  loadingText="Submitting"
                  variant="solid"
                  bg={"primary"}
                  type="submit"
                >
                  Cadastrar
                </Button>
              </form>
            </div>
          </Stack>
        </WhiteCard>
      </main>
    </Body>
  );
}

export default Signup;
