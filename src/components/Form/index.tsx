import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, View } from "react-native";
import { InputControl } from "../InputControl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Informe um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(3, "A senha deve ter pelo menos 3 caracteres"),
  confirm_password: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .oneOf([yup.ref("password")], "Senhas não conferem")
});

export default function FormRegister() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function handleForm(data: FormData) {
    console.log(data);
  }
  return (
    <View>
      <InputControl
        label="Nome*"
        name="name"
        control={control}
        error={errors.name}
      />
      <InputControl
        label="Email*"
        name="email"
        control={control}
        error={errors.email}
      />
      <InputControl
        label="Senha*"
        name="password"
        control={control}
        error={errors.password}
      />
      <InputControl
        label="Confirmação de senha*"
        name="confirm_password"
        control={control}
        error={errors.confirm_password}
      />
      <Button title="entrar" onPress={handleSubmit(handleForm)} />
      <StatusBar style="auto" />
    </View>
  );
}
