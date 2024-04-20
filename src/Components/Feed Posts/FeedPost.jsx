import { Container, Skeleton, SkeletonCircle, VStack, Flex,Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Post from './Post'


const FeedPost = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2} my={2}>
        {isLoading && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap="2">
                    <SkeletonCircle size={10}/>
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height="20px" w={"200px"}/>
                        <Skeleton height="20px" w={"200px"}/>

                    </VStack>

                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"}>contents wrapped</Box>
                </Skeleton>

            </VStack>
        ))}
        {!isLoading && (
            <>
                    <Post 
                img='/img1.png'
                username='asaprogrammer'
                avatar='/img1.png'

                />
                <Post
                img='/img2.png'
                username='josh'
                avatar='/img2.png'
                
                />
                <Post
                img='/img3.png'
                username='JaneDoe'
                avatar='/img3.png'
                />
                <Post
                img='/img4.png'
                username='johndoe'
                avatar='/img4.png'
                />
            </>
        )}
    </Container>
  )
}

export default FeedPost
