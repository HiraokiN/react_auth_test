import React from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"

function Login() {

  const handleSubmit = async function (username: string, password: string) {
    //reqres registered sample user
    const loginPayload = {
      username: username,
      password: password
    }
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    axios.post("http://localhost:8000/token", loginPayload, { data: loginPayload, headers: headers })
      .then(response => {
        //get token from response
        const token = response.data.access_token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = '/'

      })
      .catch(err => console.log(err));
  };

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        const email = form.children.namedItem("userName") as HTMLInputElement;
        const password = form.children.namedItem("password") as HTMLInputElement;
        const strEmail: string = email == null ? "" : email.value as string
        const strPassword: string = password == null ? "" : password.value as string
        handleSubmit(strEmail, strPassword);
      }}
    >
      <label htmlFor="username">Username</label><br />
      <input type="text" id="userName" name="userName" /><br />
      <label htmlFor="password">Password</label><br />
      <input type="password" id="password" name="password" /><br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default Login
