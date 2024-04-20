import { Container, Image, VStack, Center, Button, Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react'
import Authorisation from '../authform/Authorisation'



const AuthPage = () => {
            return (
            <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
           <Container maxW={"container.md"} padding={0}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={10}>
					{/* Left hand-side */}
					<Box display={{ base: "none", md: "block" }}>
                    <Image src='/auth.png' h={650} alt='Phone img' />
					</Box>

					{/* Right hand-side */}
					<VStack spacing={4} align={"stretch"}>
                        <Authorisation/>
						<Box textAlign={"center"}>Get the app.</Box>
						<Flex gap={5} justifyContent={"center"}>
							<Image src='/playstore.png' h={"10"} alt='Playstore logo' />
							<Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
						</Flex>
					</VStack>
				</Flex>
			</Container>
            </Flex>
               
            );
    
    };

export default AuthPage
