import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      light: '#939ed5',
      main: '#583c87',

      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#fff7b0',
      main: '#ffee58',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#583c87',
    },

    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    // custom: {
    //   light: '#ffa726',
    //   main: '#f57c00',
    //   dark: '#ef6c00',
    //   contrastText: 'rgba(0, 0, 0, 0.87)',
    // },
  },
  //   text: {
  //     secondary: {
  //       light: '#fff7b0',
  //       main: '#ffee58',
  //     },
  //     primary: {
  //       light: '#939ed5',
  //       main: '#583c87',
  //     },
  //   },
});
