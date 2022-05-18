import { Paper } from "@mui/material";
import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Paper sx={{ py: 8 }}>
      <LoginForm />
    </Paper>
  );
};

export default LoginPage;
