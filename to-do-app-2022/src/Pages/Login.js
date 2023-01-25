import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {

    // Font Stylings
    const eVents = {
        fontFamily: 'Montserrat, sans-serif',
        color: 'white',
        fontSize: '25px',
        fontWeight: '700'
      }

      const loginH6 = {
        fontFamily: 'Montserrat, sans-serif',
        color: 'black',
        fontSize: '20px',
        fontWeight: '500',
        float: 'left',
        marginTop: '30px',
        marginLeft: '54px'
      }

      const textFieldWidth = {
        width: '350px',
        // margin: '30px',
        backgroundColor: '#EAE9EC',
        marginTop: '-10px'
      }

      const par = {
        fontFamily: 'Montserrat, sans-serif',
        float: 'left',
        marginLeft: '54px',
        color: '#737274',
        marginTop: '20px'
      }

      const par2= {
        fontFamily: 'Montserrat, sans-serif',
        float: 'left',
        marginLeft: '54px',
        color: '#737274',
        marginTop: '40px'
      }

      const btn = {
        fontFamily: 'Montserrat, sans-serif',
        marginTop: '40px',
        backgroundColor: '#02F9BC',
        color: 'black'
      }

      const linkStyle = {
        color: '#02F9BC'
      }
      

    return (
        <div style={{ position: 'absolute', textAlign: 'center', minHeight: '100%', bottom: '0px', top: '0px', right: '0px', left: '0px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ position: 'relative', top: '375px' }}>
                    <p style={eVents}>
                        E-Vents
                    </p>
                </Grid>
                <Grid item xs={12} style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{
                            width: 450,
                            height: 500,
                            backgroundColor: 'white',
                            margin: 'auto',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        }}
                    >
                    <Grid container spaceing={3}>
                        <Grid item xs={12}>
                            <h6 style={loginH6}>
                                Login
                            </h6>
                        </Grid>
                        <Grid item xs={12}>
                            <p style={par}>
                                Email
                            </p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField style={textFieldWidth} variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <p style={par2}>
                                Password
                            </p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField style={textFieldWidth} variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button style={btn} size="large">Login</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Don't have an account? <Link to='/signup' style={linkStyle}>Create one</Link></p>
                        </Grid>
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;