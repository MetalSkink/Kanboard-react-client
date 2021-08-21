import { createTheme, ThemeProvider } from '@material-ui/core'
import { orange, yellow } from '@material-ui/core/colors';
import React from 'react'
// import Switch from '@material-ui/core/Switch';
import { AppRouter } from './routers/AppRouter'

const App = () => {
  const darkMode = false;

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      tertiary: yellow
    }
  });

  // console.log(theme);

  return (
      <ThemeProvider theme={theme}>
        <AppRouter/>
        {/* <Switch checked={darkMode} onChange={() => setdarkMode(!darkMode)}/> */}
      </ThemeProvider>
  )
}

export default App
