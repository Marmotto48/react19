import { useState } from "react";
import "./App.css";
import { loginUser } from "./api/user";
import { useActionState } from "react";
import Button from "./components/button";

function App() {
  // states
  const [data, formAction, pending] = useActionState(login, {
    user: null,
    error: null,
  });
  async function login(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await loginUser(username, password);
      return { user: response.data };
    } catch (error) {
      return { user: null, error: error.error };
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form action={formAction}>
        <label htmlFor="user">First name </label>
        <input type="text" id="user" name="username" placeholder="user" />
        <br />
        <br />
        <label htmlFor="password-id">First name </label>
        <input type="password" name="password" placeholder="password" />
        <br />
        <br />

        <Button />
        {data?.user && <p style={{ color: "green" }}>User logged in</p>}
        {data?.error && <p style={{ color: "red" }}>{data?.error} </p>}
      </form>
    </div>
  );
}

export default App;
