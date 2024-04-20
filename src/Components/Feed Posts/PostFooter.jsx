import { Box, Flex, Text, InputGroup, InputRightElement, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../Assets/constants';

const PostFooter = ({username, isProfilePage}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if(liked){
            setLiked(false)
            setLikes(likes-1)
        }
        else{
            setLiked(true)
            setLikes(likes +1)
        }
    }
  return (
    <>
    <Box mb={10} marginTop={"auto"}>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike}
            cursor={'pointer'}
            fontSize={18} >
            {!liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo/>
        </Box>
        </Flex>
        
            <Text fontWeight={600} fontSize={"sm"}>
                {likes} likes
            </Text>
            {!isProfilePage && (
            <>
            <Text fontSize={"sm"} fontWeight={700}>
                {username}{" "}
                
                <Text as='span' fontWeight={400}>
                    feeling good
                </Text>
            </Text>

            <Text fontSize={"sm"} color={"white"}>
                View all 1,000 comments
            </Text>
            </>
            )}

            <Flex alignItems={"center"} justifyContent={"space-between"} gap={2} w={"full"}>
                <InputGroup>
                    <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14}/>
                    <InputRightElement>
                    <Button
                        fontSize={14}
                        color={"#E0FFFF"}
                        fontWeight={600}
                        cursor={"pointer"}
                        _hover={{color: "#48D1CC"}}
                        bg={"transparent"}
                    >Post</Button>
                    </InputRightElement>
                </InputGroup>

            </Flex>
        
        </Box>
   
    </>
  )
}

export default PostFooter
