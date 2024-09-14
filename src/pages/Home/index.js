import React from "react"
import './style.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <Container className='home-container' >
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
                </Box>
            </form>
        </Container>
    )
}
export default Home