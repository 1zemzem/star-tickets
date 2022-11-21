import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Container, Paper } from "@mui/material";

const AdminPage = () => {
  return (
    <Paper sx={{ py: 12 }}>
      <Container maxWidth="xl">
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="datetime-local"
            label="Время сеанса"
            type="datetime-local"
            defaultValue="2022-10-10T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
      </Container>
    </Paper>
  );
};

export default AdminPage;
