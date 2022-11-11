
import { Box,Text, Flex } from "@chakra-ui/react"
function Footer(){


    return(
        <div className="footer">
            <h1>Footer page</h1>
        
                <div id="footer_top">
            <Text className="text"  >About Us</Text>
            <Text className="text"  >UC Impact</Text>
            <Text className="text"  >Terms & Conditions</Text>
            <Text className="text"  >Privacy Policy</Text>
            <Text className="text"  >Interest-Based-Advertising</Text>
            <Text className="text"  >Anti Descrimination plicy</Text>
            <Text className="text"  >Blog</Text>
            <Text className="text"  >Reviews</Text>
            <Text className="text"  >Near Me</Text>
          <Text className="text"  >Careers</Text>
          <Text className="text"  >Gift Cards</Text>
          <Text className="text" >Contact Us</Text>
          <Text className="text"  >Quick Link</Text>
        </div>
        
        <div id="footer_mid">
            <div>
                <Flex gap={"25px"}>
                    <div>
                <Text color={"white"} fontWeight="semibold"marginLeft={"20px"}>USA</Text>
                </div><br />
    
                <Text className="txt">Austin</Text>
                <Text className="txt">Dallas</Text>
                <Text className="txt">New York City</Text>
                </Flex>
            
            </div><br />
        
        <div id="grid_foot">
            <div><Text color={"white"} fontWeight="semibold">INDIA</Text></div>
            <Text className="tit">Agra</Text>
            <Text className="tit">Ahmedabad</Text>
            <Text className="tit">Alwar</Text>
            <Text className="tit">Amritsar</Text>
            <Text className="tit">Aurangabad</Text>
            <Text className="tit">Banglore</Text>
            <Text className="tit">Bhopal</Text>
            <Text className="tit">Bhubaneshwar</Text>
            <Text className="tit">Chandigarh</Text>
            <Text className="tit">Chennai</Text>
            <Text className="tit">Coimbatore</Text>
            <Text className="tit">Cuttak</Text>
            <Text className="tit">Deharadun</Text>
            <Text className="tit">Delhi NCR</Text>
            <Text className="tit">Guntur</Text>
            <Text className="tit">Guwhati</Text>
            <Text className="tit">Hyderabad</Text>
            <Text className="tit">Indore</Text>
               <Text className="tit">Jabalpur</Text>
               <Text className="tit">Jaipur</Text>
                  <Text className="tit">Jamshedpur</Text>
                  <Text className="tit">Jodhpur</Text>
                     <Text className="tit">Kakinada</Text>
                        <Text className="tit">Kanpur</Text>
                           <Text className="tit">Karnal</Text>
                              <Text className="tit">Kochi</Text>

                                 <Text className="tit">Kolkata</Text>
                                 <Text className="tit">Kota</Text>
                                 <Text className="tit">Lakhnow</Text>
                                 <Text className="tit">Ludhiana</Text>
                                 <Text className="tit">Madurai</Text>
                                 <Text className="tit">Meerut</Text>
                                 <Text className="tit">Mumbai</Text>
                                 <Text className="tit">Mysore</Text>
                                 <Text className="tit">Nagpur</Text>
                                 <Text className="tit">Nashik</Text>
                                 <Text className="tit">Panipat</Text>
                                 <Text className="tit">Patna</Text>
                                 <Text className="tit">Prayagraj</Text>
                                    <Text className="tit">Pune</Text>
                                       <Text className="tit">Raipur</Text>
                                          <Text className="tit">Ranchi</Text>
                                          <Text className="tit">Rohtak</Text>
                                          <Text className="tit">Sonipat</Text>
                                             <Text className="tit">Surat</Text>
                                                <Text className="tit">Thriuvananthapuram</Text>
                                                <Text className="tit">Udaipur</Text>
                                                <Text className="tit">Vadodara</Text>
                                                <Text className="tit">Varansi</Text>
                                                <Text className="tit">Vijayawada</Text>
                                                <Text className="tit">Visakhapatnam</Text>
                                                <Text className="tit">Warangal</Text>
                                            
            </div><br />

            <div>
                <Flex gap={"25px"}>
                    <div>
                <Text color={"white"} fontWeight="semibold" marginLeft={"20px"}>UAE</Text>
                </div><br />
    
                <Text className="txt">Abu Dhabi</Text>
                <Text className="txt">Dubai</Text>
                <Text className="txt">Sharjah</Text>
                </Flex>
            
            </div><br />
  
        </div>


        </div>
    )
}
export default Footer