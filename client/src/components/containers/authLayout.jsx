import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className={styles.overlay}>
      <div className={styles.formContainer}>{children}</div>
    </section>
  );
};

const styles = {
  overlay: "min-h-screen w-full flex items-center justify-center",
  formContainer:
    "w-[90vw] max-w-[500px] rounded-md p-6 bg-white shadow-md mx-auto",
};

export default AuthLayout;
