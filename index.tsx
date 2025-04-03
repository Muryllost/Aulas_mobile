import { View, Text, Pressable, Image } from "react-native";
import styled from "styled-components/native";
import { useEffect, useState } from "react";
import Titulo from "../components/Titulo/titulo";
import CampoTexto from "@/components/Input/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <Container>
      <Titulo texto="Entrar" flag={true} />
      <Titulo texto={"Bem-vindo ao app"} flag={false} />

      <Header>
        <Title>Login</Title>
        <Icon source={require("./icon_perfil.png")} />
      </Header>

      <Campos>
        <CampoTexto 
          erro={true}
          placeholder="Digite seu email..."
          onChangeText={(text) => setEmail(text)}
        />

        <SenhaContainer>
          <CampoTexto 
            erro={false}
            placeholder="Digite sua senha..."
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={!mostrarSenha}
          />
          <Pressable onPress={() => setMostrarSenha(!mostrarSenha)} style={{ position: 'absolute', right: 20, top: 18 }}>
            <Image 
              source={mostrarSenha ? require("./eye-open.png") : require("./eye-closed.png")} 
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
        </SenhaContainer>

        <EsqueciSenha>Esqueci a senha</EsqueciSenha>
      </Campos>

      <Acoes>
        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Cadastrar>Cadastre-se</Cadastrar>
      </Acoes>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #1b263b;
  padding: 26px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 110px;
  margin-left: 6px;
  gap: 20px;
`;

const Title = styled.Text`
  font-size: 60px;
  color: #edf2f4;
  font-weight: 600;
`;

const Icon = styled.Image`
  width: 60px;
  height: 60px;
`;

const Campos = styled.View`
  gap: 15px;
  align-items: center;
`;

const SenhaContainer = styled.View`
  position: relative;
  width: 100%;
  align-items: center;
`;

const EsqueciSenha = styled.Text`
  color: #88cfec;
  align-self: flex-end;
  margin-right: 16px;
  margin-bottom: 20px;
  font-size: 14px;
`;

const Acoes = styled.View`
  gap: 20px;
  margin-top: 10px;
`;

const Button = styled.Pressable`
  width: 294px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #88cfec;
  border-radius: 20px;
  padding: 10px;
  align-self: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 400;
`;

const Cadastrar = styled.Text`
  color: #88cfec;
  font-size: 14px;
  text-align: center;
`;
