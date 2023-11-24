import { Button, Container, Typography, Box } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";

function App() {
  return (
    <Container maxWidth="md">
      <h1>hola mi gente</h1>
      <Box sx={{ border: 2, boxShadow: 2, p: 5, color: "white",bgcolor:"#111"}}>
        <p>sadasdasdasd</p>

        <Typography align="center" variant="h5">
          Esto es un texto cambiado
        </Typography>

        <Typography variant="h1" component="span" mr="50px">
          Esto es un texto cambiado
        </Typography>

        <Button variant="contained" endIcon={<AndroidIcon />}>Boton </Button>
      </Box>
    </Container>
  );
}

export default App;
