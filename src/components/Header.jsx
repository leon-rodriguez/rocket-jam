import { Box } from "@chakra-ui/react";

function Header (){
    return (
        <header>
            <Box 
            p= "20px"
            bg= "gray.300" 
            textAlign= "center"
            fontSize= "28px"
            >Rocket Jam
            </Box>
        </header>
    );
}

export default Header;