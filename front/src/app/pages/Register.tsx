import React from 'react';
import styles from './register.module.css';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

interface Props { }

const Register: React.FC<Props> = ({ }) => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.leftColumn}>

      </div>
      <div className={styles.rightColumn}>
        <Container
          maxWidth="sm"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Box
            boxShadow={3}
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius={3}
          >
            <Typography variant="h4" align="center" sx={{ mb: 3 }}>
              Register
            </Typography>
            <form>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Phone"
                type="tel"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                  style={{ width: '30%' }}
                >
                  Register
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Register;