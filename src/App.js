import { createTheme, ThemeProvider } from '@material-ui/core'
import { orange } from '@material-ui/core/colors';
import React from 'react'
import { AppRouter } from './routers/AppRouter'

const App = () => {

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  return (
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
  )
}

export default App
