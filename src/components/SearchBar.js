import React from 'react';
import { VStack, Input, Box, Divider, View, Center } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

function SearchBar() {
  return (
    <View>
      <Center>
        <VStack
          my="3"
          space={1}
          w="100%"
          maxW="350px"
          divider={
            <Box>
              <Divider />
            </Box>
          }>
          <VStack w="100%" space={1}>
            <Input
              placeholder="Search"
              width="100%"
              borderRadius="4"
              borderColor="blue"
              py="2"
              px="4"
              fontSize="14"
              InputLeftElement={<Icon name="search" size={30} color="blue" />}
              InputRightElement={<Icon name="mic" size={25} color="blue" />}
            />
          </VStack>
        </VStack>
      </Center>
    </View>
  );
}

export default SearchBar;
