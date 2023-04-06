import "./App.css";
import {
  Button,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { orange, purple } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: orange[100],
      },
      secondary: {
        main: purple[100],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Paper>
          <Typography variant="h3">Theming Example</Typography>
          <Typography variant="h3">Hello React</Typography>
          <h3>magic?</h3>
          <Button variant="contained" color="secondary">
            button!
          </Button>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
