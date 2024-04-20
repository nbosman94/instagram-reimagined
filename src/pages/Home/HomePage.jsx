
import React from 'react'

import { Flex, Container, Box } from '@chakra-ui/react'
import FeedPost from '../../Components/Feed Posts/FeedPost'
import SuggestedUsers from '../../Components/Users/SuggestedUsers'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>

      <Box flex={2} py={10} >
        <FeedPost/>
      </Box>

      <Box flex={3} mr={20} display={{base:"none", md: "block"}} maxW={"300px"} >
        <SuggestedUsers/>
      </Box>

      </Flex>
    </Container>
  )
}

export default HomePage
