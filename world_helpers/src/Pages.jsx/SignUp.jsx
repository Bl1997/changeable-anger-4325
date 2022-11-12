
import {FormControl,FormLabel,FormHelperText,Input,Text} from "@chakra-ui/react"
import Navbar from "../Components/Navbar";
import Footer from "./PageComponents/Footer";

function SignUp(){

    return(
        <div id="page_color">
        <Navbar/><br />
        
        <div id="signup">
    
            
            <div  className="formcontrol">
            <Text fontWeight={"semibold"}>Fill Your Details</Text>
            <FormControl gridRowGap={"10"}>
            <FormLabel>Enter user name</FormLabel>
  <Input type='text'  width={"271px"}/>
  <FormLabel>Email address</FormLabel>
  <Input type='email' width={"271px"}/>
  <FormLabel>Enter Password</FormLabel>
  <Input type="password"  width={"271px"} />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <Input type={"submit"} value="Register" fontWeight={"semibold"} width={"100px"} color="teal" borderColor={"teal"} cursor="pointer" marginTop={"15px"}/>

</FormControl>
</div>
</div>
<Footer/>
</div>

    )
}
export default SignUp;