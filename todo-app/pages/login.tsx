import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import React from "react";

type Inputs = {
  username: string,
  password: string,
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit = (data: Inputs) => {
    if (data.username && data.password) {
      router.push("/app"); // Updated this line
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username:
        <input type="text" {...register("username")} required />
      </label>
      <label>
        Password:
        <input type="password" {...register("password")} required />
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
};

export default Login;
