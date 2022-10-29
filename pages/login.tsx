import React, { useState, ChangeEvent } from "react";
import Body from "../components/common/Body";
import WhiteCard from "../components/common/WhiteCard";
import {
  Heading,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import PasswordInput from "../components/Form/PasswordInput";
import api from "config/axios";
import { setCookie } from "nookies";
import Token from "models/Token";
import { useRouter } from "next/router";
import useUser from "data/hooks/useUser";
import Button from "@/components/common/Button";

interface LoginFields {
  email: string;
  password: string;
}

function Login() {
  const { login } = useUser();
  const [loginFields, setLoginFields] = useState<LoginFields>({
    email: "",
    password: "",
  });
  const router = useRouter();
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    setLoginFields((fields) => ({
      ...fields,
      [target.name]: target.value,
    }));
  }
  function clearFields() {
    setLoginFields({ email: "", password: "" });
  }
  async function onSubmit(e: any) {
    e.preventDefault();
    try {
      const { data } = await api.post<Token>("/clients/login", loginFields);
      clearFields();
      login(data);
    } catch (error) {}
  }

  return (
    <Body className="bg-gradient-to-tl from-dark_primary to-primary flex items-center justify-center">
      <main className="w-full">
        <WhiteCard className="max-w-lg mx-auto md:p-12">
          <Stack spacing={8}>
            <div className="text-center">
              <Heading as="h3" size="xl" color="primary">
                Faça seu Login
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
                    variant={"filled"}
                    placeholder="Insira seu e-mail"
                    type={"email"}
                    name={"email"}
                    value={loginFields.email}
                    onChange={onChange}
                  />
                </InputGroup>
                <PasswordInput
                  variant={"filled"}
                  placeholder="Insira sua senha"
                  onChange={onChange}
                  name="password"
                  value={loginFields.password}
                />
                <Link>
                  <Text className="text-secondary underline">
                    Esqueci minha senha
                  </Text>
                </Link>
                <Button
                  colorType="common"
                  color={"white"}
                  loadingText="Submitting"
                  variant="solid"
                  bg={"primary"}
                  type="submit"
                >
                  Fazer login
                </Button>
              </form>
              <Button
                colorType="common"
                color={"primary"}
                variant={"ghost"}
                display="block"
                marginX="auto"
                marginY={"2"}
                onClick={() => {
                  router.push("signup");
                }}
              >
                Criar Conta
              </Button>
            </div>
          </Stack>
        </WhiteCard>
      </main>
    </Body>
  );
}

export default Login;
