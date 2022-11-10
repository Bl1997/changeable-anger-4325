
import {Input, Text,Stack,InputGroup,InputLeftAddon, InputRightAddon,Button,HStack} from "@chakra-ui/react"
function Homebottom(){

return(
    <div>
    
<div style={{display:"flex" ,marginLeft:"25px"}}>

    <div>
        <div><Text fontSize={"4xl"} fontWeight="semibold" width={"480px"}>Book professionals from your phone</Text><Text color={"gray.600"} fontWeight="semibold">Enter your mobile number ti get the App download link.</Text></div>
<br /><br /><div>
         <Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children='+91' />
    <Input type='tel' placeholder='phone number' />
    <InputRightAddon children="Send" color={"white"} backgroundColor="black" />
  </InputGroup>
  </Stack>
         </div>
         <br /><br />
         <div><HStack gap={"15px"} marginLeft="45px">
  <Button backgroundColor={"blackAlpha.800"} color={"darkgray"} >
   Google Play
  </Button>
  <Button backgroundColor={"blackAlpha.800"} color={"white"}>
    App store
  </Button>
</HStack></div>
  


    </div>

    <div style={{display:"flex" , marginLeft:"50px", gap:"50px"}}>
        <div style={{marginLeft:"100px"}}><img src="https://www.bing.com/images/blob?bcid=S9VCK7sH0t8EiA" alt="" /></div>
<div><img src="https://www.bing.com/images/blob?bcid=S30YDuQtmd8EwQ" alt="" /></div>
    </div>
</div>


    </div>
)

}
export default Homebottom;