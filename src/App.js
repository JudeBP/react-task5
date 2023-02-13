import React from 'react'
import Counter from './components/Counter';
import logo from './logo.svg';
import { Box, Grid, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClassTable from './components/ClassTable';
import './App.css'
import FunctionTable from './components/FunctionTable';
import { useDispatch } from 'react-redux';
import { onReset } from './action';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App = () => {

  const dispatch = useDispatch();

  const resetState = () => {
    dispatch(onReset());
  };
  return (
    <>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> Redux Assessment </h2>
            <p style={{ fontSize: '16px' }}>Updating/Removing from Class Based or Function Based will affect both tables since they are from the same stores</p>
            <Button onClick={resetState} variant="contained">Reset States</Button>

            <Box sx={{ width: '90vw' }}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <ClassTable />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <FunctionTable />
                </Grid>
              </Grid>
            </Box>
          </header>
        </ThemeProvider>
      </div>
      {/* <Counter /> */}
    </>
  )
}

export default App