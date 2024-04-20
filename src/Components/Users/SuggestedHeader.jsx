import { Avatar, Flex , Text, Button} from '@chakra-ui/react'
import React from 'react'
import {Link, Link as RouterLink} from "react-router-dom"
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'

const SuggestedHeader = () => {

    const {handleLogout, isLoggingOut} = useLogout();
    const authUser = useAuthStore((state) => state.user)
    if(!authUser) return null;
  return (
   <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
       <Flex alignItems={"center"} gap={2}>
           <Link to={`${authUser.username}`}>
           <Avatar name={authUser.username} size={"lg"} src={authUser.profilePicURL}/>
           </Link>
           <Link to={`${authUser.username}`}>
           <Text fontSize={12} fontWeight={"bold"}>
               {authUser.username}
           </Text>
           </Link>
   </Flex>
   <Button
    size={"xs"}
    background={"transparent"}
    _hover={{background:"transparent"}}
    fontSize={14}
    fontWeight={"medium"}
    color={"#48D1CC"}
    cursor={"pointer"}
    onClick={handleLogout}
    isLoading={isLoggingOut}
   >
       Logout
   </Button>
   </Flex>
  )
}

export default SuggestedHeader
