import React, { useState } from 'react'
import {Link, navigate} from 'gatsby'
import {useSpring,animated,config} from 'react-spring'

import {FaAlignJustify} from 'react-icons/fa'

import {
    Box,Text,Flex,Button,Heading,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from "@chakra-ui/react"

  

  function MeinDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      <Flex position="relative"  maxW="1200"  width="100%" mt="20" margin="auto"  justifyContent="space-between" >
     
      <Box  height="100" margin="auto" zIndex="30" right="0%" top="0" position="absolute" width="100">
            <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
                <FaAlignJustify  fontSize="2rem"/>
            </Button>
      </Box>
      </Flex>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton />
            <DrawerHeader>Hasen oder Bein</DrawerHeader>
  
            <DrawerBody onClick={onClose}>
              <ul style={{listStyle:"none", fontSize:"1.3rem"}}>
              <li> <Link to="/illuinfo">Illustration</Link></li>
              <li><Link to="/finetrader">Finetrader</Link></li>
              <li><Link to="/mood">Mood</Link></li>
              <li><Link to="/branding">Branding</Link></li>
              <li><Link to="/periodika">Periodika</Link></li>
              <li><Link to="/styleguide">Style Guide</Link></li>
              <li><Link to="/video">Video &amp; Animation</Link></li>
              </ul>  
             
             
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }

 const Links = () => {
    
     return(
         <>

         <Flex top="0"   width="100%"  justifyContent="space-between">
         <Box flex="10" role="button" onClick={()=>navigate("/")}>
          <div style={{fontWeight:900,letterSpacing:'-.025rem',fontSize:"2rem",marginBottom:0,marginTop:60}}>hasen oder bein</div>
        <div style={{fontWeight:300,marginBottom:50,fontSize:"1.3rem"}}>gestaltet kommunikation</div>
          </Box>
        
         </Flex>
         </>
     )
 }

const Layout =({children})=> {
    const [flag,setFlag]=useState(false)
    
      
    
    
    // useEffect(()=>{
    //     if(typeof window && window.localStorage.getItem("flag")){
    //         setFlag(!flag)
    //     }
    // },[])
    function machflag(){
        setFlag(!flag)
         window && window.localStorage.setItem("flag",true)
       }

    const Daten =() => {
       return(
           <Flex justifyContent="center" alignItems="flex-start" width="100%" p="2" fontSize="2xl" position="absolute" zIndex="50" bottom="0" background="green" color="white">
           <Box>
           <Heading size="md">Datenschutzbestimmungen</Heading>
          
           <Link to="/datenschutz"><Text color="white">Lesen Sie unsere Datenschutzbestimmungen</Text> </Link>
           <Button py="2" my="2" color="black" onClick={()=>machflag()}>Ich bin einverstanden ...</Button>
           </Box>
           </Flex>
       )
      }

    const xstyles = useSpring({
        loop: false,
        to: 
         
          { paddingTop:0, opacity: 1, fontSize: '2rem',color: 'rgb(14,26,19)',config:config.gentle },
      
        from: { paddingTop: -350,opacity: .3, fontSize: '1rem',color: 'gray' },
      })

    return(
        <animated.div style={xstyles}>
          {
              !flag && <Daten /> 
          }
          <MeinDrawer />
          <Box  mt="30" margin="auto" maxWidth="980" p={["2","4","6"]}  overflow="y-scroll" >
           <header>
               <nav>
                   <Box>
                       <Links />
                   </Box>
                </nav>
           </header>
           
           <main>
           
             {children}
            
               
           </main>
          
           {/* <footer style={
               {
                   position:'absolute',
                   bottom:0,
               }
           }>
              <ul className="footer">
                  <li>eins</li>
                  <li>zwei</li>
              </ul>
           </footer> */}
          </Box>
            
          </animated.div>
    )
}
export default Layout