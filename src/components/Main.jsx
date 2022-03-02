import { Box, Container, Flex } from "@chakra-ui/react";
import Post from "./Post";
import { posts } from "../api/post";

function Main () {
    return(
        <Container maxW="container.lg">
            <Flex w= "full" justifyContent="space-between" flexWrap="wrap" rowGap="20px" p="20px">
                { posts.data.map(item =>{
                    return (
                        <Post 
                            key={item.ID}
                            data={item}
                            />);
                })}
            </Flex>
        </Container>
    );
}

export default Main