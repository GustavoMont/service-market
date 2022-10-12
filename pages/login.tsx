import React from "react";
import Body from "../components/common/Body";
import WhiteCard from "../components/common/WhiteCard";
import {
  Button,
  Heading,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import PasswordInput from "../components/Form/PasswordInput";

function Login() {
  return (
    <Body className="bg-gradient-to-br from-dark_primary to-primary flex items-center justify-center">
      <main className="w-full">
        <WhiteCard>
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
              <form className="flex flex-col gap-4">
                <InputGroup>
                  <Input
                    variant={"filled"}
                    placeholder="Insira seu e-mail"
                    type={"email"}
                  />
                </InputGroup>
                <PasswordInput variant={"filled"} />
                <Link>
                  <Text className="text-secondary underline">
                    Esqueci minha senha
                  </Text>
                </Link>
                <Button
                  color={"white"}
                  loadingText="Submitting"
                  variant="solid"
                  bg={"primary"}
                  className="bg-primary"
                >
                  Fazer login
                </Button>
              </form>
            </div>
          </Stack>
        </WhiteCard>
      </main>
    </Body>
  );
}

export default Login;
