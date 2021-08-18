import { Button, Container, Input, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "../../hooks/useForm";

export const Users = () => {
  const initialForm = {
    name: "",
    user: "",
    email: "",
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3"> Panel de Usuarios</Typography>
      <br />
      <Paper>
        <form noValidate autoComplete="off" onSubmit={handleCreateUser}>
          <Input 
                defaultValue="User" 
                fullWidth 
                onChange={handleInputChange} />
          <Input 
                defaultValue="Name" 
                fullWidth 
                onChange={handleInputChange} />
          <Input 
                defaultValue="Email"
                fullWidth
                onChange={handleInputChange} />
        <Button color="primary" variant="outlined">
            Crear Usuario
        </Button>
        </form>
      </Paper>
    </Container>
  );
};
