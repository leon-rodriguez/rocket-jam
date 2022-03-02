import { Box, Heading, Image, Text } from "@chakra-ui/react";

function Post (props) {
    return(
        <Box w="300px" border= "1px solid gray" flexGrow="0" flexShrink="0" p="10px ">
            <Image />
            <Heading>{props.data.title}</Heading>
            <Text>{props.data.main}</Text>
        </Box>
    );
}

export default Post;