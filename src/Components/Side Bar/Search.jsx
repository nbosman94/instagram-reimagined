import { Tooltip, Box, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Button, Input } from '@chakra-ui/react'
import { useRef } from 'react';
import { SearchLogo } from '../../Assets/constants'
import useSearchUser from '../../hooks/useSearchUser';

const Search = () => {

    const {isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef(null);
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();


    const handleSearchUser = (e) => {
        e.preventDefault();
		getUserProfile(searchRef.current.value);

    };

    console.log(user);
    return (
      <>
        <Tooltip
            hasArrow label={"Search"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{base:'block', md:'none'}}
            >
            <Flex
            alignItems={"center"} 
            gap={4} 
            _hover={{bg:"whiteAlpha.400"}} 
            borderRadius={6} 
            p={2} 
            w={{base:"10", md:"full"}}
            justifyContent={{base:"center", md: "flex-start"}}
            onClick={onOpen}
            
            >
                <SearchLogo/>
                <Box display={{base:"none", md:"block"}}>
                    Search
                </Box>
            </Flex>
        </Tooltip>

        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
            <ModalOverlay/>
                <ModalContent bg={"teal"} border={"1px solid white"} maxW={"400px"}>
                    <ModalHeader>Search User</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={5}>
                    <form onSubmit={handleSearchUser}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input placeholder={""} ref={searchRef}/>
                        </FormControl>

                        <Flex w={"full"} justifyContent={"flex-end"}>
                            <Button type='submit' ml={'auto'} size={"sm"} my={4} isLoading={isLoading}>
                                Search
                            </Button>
                        </Flex>
                    </form>
                </ModalBody>
                </ModalContent>


        </Modal>

    </>
  )
}

export default Search
