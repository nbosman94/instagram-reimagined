import { Avatar, AvatarGroup, Flex, VStack, Text, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import useFollowUser from '../../hooks/useFollowUser';
import useAuthStore from '../../store/authStore';
import useUserProfileStore from '../../store/userProfileStore'
import EditProfile from './EditProfile';

const ProfileHeader = () => {

    const {userProfile} = useUserProfileStore();
    const authUser = useAuthStore(state => state.user);
    const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
    const vistingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
    const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(userProfile?.uid)
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
   <Flex gap={{base:4, sm: 10}} py={10} direction={{base: "column", sm:"row"}}>
       <AvatarGroup
            size={{base: "xl", sm:"2xl"}}
            justifySelf={"center"}
            alignSelf={"flex-start"}
            mx={"auto"}       
       >
           <Avatar name='As a programmer' src={userProfile.profilePicURL} alt='As a programer profile picture'/>
           </AvatarGroup>
            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1} >
                <Flex gap={4} direction={{base: "center", sm: "flex-start"}} alignItems={"center"} w={"full"}>
                    <Text fontsize={{base: "sm", md: "lg"}}>{userProfile.username}</Text>
                    {/* User is authenticated and visiting own profile */}
                    {visitingOwnProfileAndAuth && (
                       <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                       <Button bg={"white"} color={"#008080"} _hover={{bg:"whiteAlpha.700"}} size={{base:"xs", md:"sm" }} onClick={onOpen}>Edit</Button>
                   </Flex> 
                    )}
                    {/* User is authenticated but not visiting their own profile */}
                    {vistingAnotherProfileAndAuth && (
                       <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                       <Button 
                       bg={"#429E9D"} 
                       color={"#whiteAlpha.500"} 
                       _hover={{bg:"whiteAlpha.700"}} 
                       size={{base:"xs", md:"sm" }} 
                       onClick={handleFollowUser}
                       isLoading={isUpdating}
                       
                       >
                           {isFollowing ? "Unfollow" : "Follow"}</Button>
                   </Flex> 
                    )}
                   
                </Flex>

                <Flex alignItems={"center"} gap={{base: 2, sm:4}}>
                    <Text fontSize={{base:"xs", md:"sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}> {userProfile.posts.length} </Text> Posts
                    </Text>

                    <Text fontSize={{base:"xs", md:"sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}> {userProfile.followers.length} </Text> Followers
                    </Text>

                    <Text fontSize={{base:"xs", md:"sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}> {userProfile.following.length} </Text> Following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={"sm"} fontWeight={"bold"}> {userProfile.fullName}</Text>
                </Flex>
                <Text fontSize={"sm"}> {userProfile.bio} </Text>
            </VStack>
            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
   </Flex>
  )
}

export default ProfileHeader
