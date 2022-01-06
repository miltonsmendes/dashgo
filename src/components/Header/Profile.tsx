import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {
    return(
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Milton Mendes</Text>
            <Text color="gray.300" fontSize="small">
                miltonsergiom@gmail.com
            </Text>
        </Box>

        <Avatar size="md" name="Milton Mendes" src="https://github.com/miltonsmendes.png" />
    </Flex>
    );
}