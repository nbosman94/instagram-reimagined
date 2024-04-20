import { GridItem, Flex, Text, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box, Avatar, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import Comments from '../Comments/Comments'
import PostFooter from '../Feed Posts/PostFooter';

const ProfilePost = ({img}) => {

    const {isOpen, onOpen, onClose} = useDisclosure();


  return (
      <>
    <GridItem 
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1/1}
        onClick={onOpen}
    >
        {/* Overlay on image */}
        <Flex
            opacity={0}
            _hover={{opacity:1}}
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={"blackAlpha.700"}
            transition={"all 0.3s ease"}
            zIndex={1}
            justifyContent={"center"}

        >

            <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                <Flex >
                    <AiFillHeart size={20}/>
                    <Text fontWeight={"bold"} ml={2}>
                            8
                    </Text>
                </Flex>

                <Flex>
                    <FaComment size={20}/>
                    <Text fontWeight={"bold"} ml={2}>
                        7
                    </Text>
                </Flex>
            </Flex>



        </Flex>

        {/* Actual Image */}
        <Image src={img} alt='profile pic' w={"100%"} h={"100%"} objectFit={"cover"} />

    </GridItem>
    <Modal isOpen={isOpen} onClose={onClose}
            isCentered={true} size={{base: "3xl", md:"5xl"}}
    >
        <ModalOverlay/>
            <ModalContent>
          
                <ModalCloseButton/>
                <ModalBody bg={"#429E9D"} pb={5}>

                    <Flex gap={4} w={{base: "90%", sm: "70%", md: "full"}} mx={"auto"}>
    
                        <Box borderRaidus={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} flex={1.5}>
                            <Image src={img} alt='profile post' />
                        </Box>
                        <Flex flex={1} flexDir={"column"} px={10} display={{base: "none", md:"flex"}}>

                            <Flex alignItems={"center"} justifyContent={"space-between"}>

                            <Flex alignItems={"center"} gap={4}>
                                <Avatar src='/profilepic.png' size={"sm"} name='As A Programmer'/>
                                <Text fontWeight={"bold"} fontSize={12}>asaprogrammer</Text>
                            </Flex>

                            <Box
                                _hover={{bg: "whiteAlpha.300", color: "red.600"}}
                                borderRadius={4}
                                p={1}
                            >
                                <MdDelete size={20} cursor={"pointer"} />
                            </Box>

                            </Flex>

                            <Divider my={4} bg={"white.600"}/>

                            <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                                <Comments createdAt="1 day ago"
                                username="asaprogrammer"
                                profilepic="/profilepic.png"
                                text="dummy images from unsplash"/>

                                <Comments createdAt="1 day ago"
                                username="abrahmov"
                                profilepic="https://bit.ly/dan-abrmov"
                                text="Nice pic"/>

                                <Comments createdAt="2 days ago"
                                username="kentdodds"
                                profilepic="https://bit.ly/kent-c-dodds"
                                text="cool post"/>



                                {/*  */}


                                {/*  */}


                            </VStack>
                            <Divider my={4} bg={"white.600"}/>

                            <PostFooter isProfilePage={true}/>
                        </Flex>
                        
                    </Flex>

                </ModalBody>
            </ModalContent>
   
    </Modal>

    </>
  )
}

export default ProfilePost
