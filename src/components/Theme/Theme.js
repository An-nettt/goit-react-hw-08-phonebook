import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      light: '#939ed5',
      main: '#583c87',
    },
    secondary: {
      light: '#fff7b0',
      main: '#ffee58',
      contrastText: '#583c87',
    },
  },
});
