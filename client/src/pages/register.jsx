/**
 * Register - requires firstname, lastname, email, password and dp
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/containers/authLayout";
import { useAuth } from "../api/hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [dp, setDp] = useState(null);

  const createAccount = async (e) => {
    e.preventDefault();
    const user = await register(email, password, firstname, lastname, dp);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  };

  return (
    <AuthLayout>
      <form action="" onSubmit={createAccount}>
        <h1 className={styles.title}>Create your account</h1>

        <div className={styles.inputContainer}>
          <div>
            <label htmlFor="firstname" className={styles.inputLabel}>
              Enter Firstname
            </label>

            <input
              type="text"
              className="input-field"
              required
              placeholder="e.g John"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="firstname" className={styles.inputLabel}>
              Enter Lastname
            </label>

            <input
              type="text"
              className="input-field"
              required
              placeholder="e.g John"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

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

          <div>
            <label htmlFor="file" className={styles.inputLabel}>
              Add Profile Picture
            </label>

            <input
              type="file"
              className=""
              accept="image/*"
              id="file"
              onChange={(e) => {
                setDp(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <button
          className="input-field bg-mainBlue font-bold mt-4 text-white"
          type="submit"
        >
          Create Account
        </button>

        <p className="max-w-fit ml-auto mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-mainBlue font-bold">
            Log in
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

const styles = {
  title: "text-[1.2rem] text-mainBlue font-bold mb-4",
  inputContainer: "grid md:grid-cols-2 gap-4",
  inputLabel: "block mb-2 text-[0.9rem] text-gray-900 font-bold",
};

export default Register;
