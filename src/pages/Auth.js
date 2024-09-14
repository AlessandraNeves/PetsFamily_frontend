
import * as React from 'react';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { useContext } from "react"
import { LoginContext } from "../App"

export default function Auth() {

    const navigate = useNavigate()
    const { hasLogin, setLogin } = useContext(LoginContext)    // eslint-disable-next-line

    const doLogin = () => {
        setLogin(true)
        navigate('/Pets')
    }

    return (
         <div>
            <form>
                <Box 
                    display="flex" 
                    flexDirection={"column"} 
                    maxWidth={400} 
                    alignItems={"center"} 
                    justifyContent={"center"}
                    margin={"auto"}
                    marginTop={4}
                    padding={2}
                    borderRadius={2}
                    boxShadow={"2px 2px 4px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "4px 4px 8px #ccc"},
                        }
                    }
                >
                    <Typography variant="h4" padding={1} >Login</Typography>
                        <TextField margin="normal" variant="outlined" placeholder="Email"/>
                        <TextField margin="normal" id="outlined-basic" variant="outlined" placeholder="Password"/>
                    <Button 
                        sx={{ marginTop: 3, borderRadius: 2 }}
                        variant="contained" 
                        color="secondary" 
                        onClick={doLogin}
                    >
                        Entrar
                    </Button>
                    <Typography variant="h6" padding={3}>Esqueceu a senha?</Typography>
                </Box>
            </form>
            
        </div> 
    )
}
