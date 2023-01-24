import React, {Fragment} from 'react';

// Material UI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
        margin: '20px'
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
                        
                        <h6 style={loginH6}>
                            Login
                        </h6>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;