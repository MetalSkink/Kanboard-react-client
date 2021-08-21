import { Button, Container, Input, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "../../hooks/useForm";

export const Users = () => {
  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const [formValues, handleInputChange] = useForm({
      name: '',
      user: '',
      email: ''
  });

  const {name, user, email } = formValues;

  return (
    <Container maxWidth="sm">
      <Typography variant="h3"> Panel de Usuarios</Typography>
      <br />
      <Paper>
        <form noValidate autoComplete="off" onSubmit={handleCreateUser}>
          <Input 
                fullWidth
                name="user"
                value={user} 
                onChange={handleInputChange} />
          <Input 
                fullWidth
                name="name"
                value={name}
                onChange={handleInputChange} />
          <Input 
                fullWidth
                onChange={handleInputChange} 
                name="email"
                value={email}/>
        <Button color="primary" variant="contained" type="submit">
            Crear Usuario
        </Button>
        </form>
      </Paper>
    </Container>
  );
};
