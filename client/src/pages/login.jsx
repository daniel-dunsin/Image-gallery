/**
 * User Login, requires email & password
 */
import React, { useState } from "react";
import AuthLayout from "../components/containers/authLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout>
      <form action="">
        <h1 className={styles.title}>Log in to your account</h1>
        <div className={styles.inputContainer}>
          <div>
            <label htmlFor="email" className={styles.inputLabel}>
              Enter Email
            </label>

            <input
              type="email"
              className="input-field"
              required
              placeholder="e.g example@gmail.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className={styles.inputLabel}>
              Enter Password
            </label>

            <input
              type="password"
              className="input-field"
              required
              placeholder="******"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="input-field bg-mainBlue font-bold text-white"
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

const styles = {
  title: "text-[1.2rem] text-mainBlue font-bold mb-4",
  inputContainer: "flex flex-col gap-4 w-full",
  inputLabel: "block mb-2 text-[0.9rem] text-gray-900 font-bold",
};

export default Login;
