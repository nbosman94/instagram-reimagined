import { Flex, Box } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import SideBar from "../../Components/Side Bar/SideBar";
import { auth } from "../../firebase/firebase";
import Navbar from "../../Components/Navbar/Navbar";
import { Spinner } from '@chakra-ui/react'

const PageLayout = ({children}) => {

    const {pathname} = useLocation()
    const [user, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== '/auth' && user;
    const canRenderNavbar = !user && !loading && pathname !== '/auth'
    const checkingUserIsAuthenticated = !user && loading;
    
    if(checkingUserIsAuthenticated) return <PageLayourSpinner/>

    return(
        <Flex flexDir={canRenderNavbar ? "column" : "row"}>
            {/* Side Bar */}
            {canRenderSidebar ? (<Box w={{base: "70px", md: "240px"}}>
                <SideBar/>
            </Box>) : null}


            {/* Nav Bar */}
            {canRenderNavbar ? <Navbar/> : null}

            {/* Content on Right */}
            <Box flex={1} w={{base:"calc(100% -70px)", md: "calc(100% -240px)"}} >
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout

const PageLayourSpinner = () => {
 <Flex>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
 </Flex>
}