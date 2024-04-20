import { Container, Flex, Skeleton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileTabs from '../../Components/Profile/ProfileTabs'
import ProfilePosts from '../../Components/Profile/ProfilePosts'
import ProfileHeader from '../../Components/Profile/ProfileHeader'
import ProfilePost from '../../Components/Profile/ProfilePost'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SkeletonCircle } from '@chakra-ui/react'


const ProfilePage = () => {
  const {username} = useParams()
  const {isLoading, userProfile} = useGetUserProfileByUsername(username)
  const userNotFound = !isLoading && !userProfile
  if(userNotFound) return <UserNotFound/>
  return (
    <Container maxW={"container.lg"} py={5}>
        <Flex py={10} px={4} pl={{base: 4, md: 10}} w={"full"} mx={"auto"} flexDirection={"column"}>
           {!isLoading && userProfile &&  <ProfileHeader/>}
           {isLoading && <ProfileHeaderSkeletion/>}
        </Flex>

        <Flex px={{base:2, md:4}} maxW={"full"} mx={"auto"} borderTop={"1px solid"} borderColor={"whiteAlpha.300"} direction={"column"}>
            <ProfileTabs/>
            <ProfilePosts/>

        </Flex>

    </Container>
  )
}

export default ProfilePage

const ProfileHeaderSkeletion = () => {
  return(
    <Flex
      gap={{base: 4, sm:10}}
      py={10}
      direction={{base: " column", sm: "row"}}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size='24'/>
      <VStack alignItems={{base: "center", sm: "flex-start"}} gap={2} mx={"auto"} flex={1}>
        <Skeleton height="12px" width="150px"/>
        <Skeleton  height="12px" width="100px"/>
      </VStack>
    </Flex>
  )
}

const UserNotFound = () => {
  return(
    <Flex flexDir={"column"}>
      <Text fontSize={"2xl"} >
          User Not Found
      </Text>
     <Link as={RouterLink} to={'/'} color={"whiteAlpha.600"} w={"max-content"} mx={"auto"}>
     Go Home
     </Link>
    </Flex>
  )
}
