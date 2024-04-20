import { VStack, Flex, Text, Box } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} gap={4} px={6}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"whiteAlpha.800"}>
                Suggested for you
            </Text>

            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "#48D1CC"}} color={"whiteAlpha.800"} cursor={"pointer"}>
                See All
            </Text>

        </Flex>
        <SuggestedUser name="Dan Abrahmov" followers={1392} avatar="https://bit.ly/dan-abramov"/>
        <SuggestedUser name="Ryan Florence" followers={2381} avatar="https://bit.ly/dan-abramov"/>
        <SuggestedUser name="Christian Amba" followers={1432} avatar="https://bit.ly/dan-abramov"/>

        <Box fontSize={12} color={"whiteAlpha.500"} mt={5} alignSelf={"start"}>

        © Built By Natasha Bosman
        </Box>
    </VStack>
  )
}

export default SuggestedUsers
