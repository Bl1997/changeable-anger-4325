import { Link } from "react-router-dom";
import {Box, Flex,Grid, Spacer} from "@chakra-ui/react"
 function Navbar(){

return(
    <div style={{position:"fixed",width:"100%"}}>
    
        
    
            <Grid bgColor="black" height={"65px"} >
            
           <Flex  gap="20px">   <Box width="265px"><img src="https://scontent.fbho2-1.fna.fbcdn.net/v/t39.30808-6/315102637_2410899645723983_2056148293613858392_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=-JKDwqvB2-IAX9uhAp5&_nc_ht=scontent.fbho2-1.fna&oh=00_AfBM3mJ4xz9M6ZwiRDgFxzDERUCVoi6tqxGz5dpZCYeuKQ&oe=6370E3EF" alt="" /></Box>
      <Spacer/>
      <Box color="white" padding="15px" fontSize="18" fontWeight={"semibold"}> <Link to="/">Home </Link></Box>
      
       <Box color={"white"} padding="15px" fontSize={"18"} fontWeight="semibold" > <Link to="/register">Register As A Professional</Link></Box>
       
        <Box marginRight="50px" color={"white"} padding="15px" fontSize={"18"} fontWeight="semibold"><Link to="/signUp">SignUp</Link></Box>
    
        </Flex>
 
    </Grid>

 
    </div>
)

 }
 export default Navbar;