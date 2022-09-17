import React from 'react';
import {
  Box,
  VStack,
  Button,
  Text,
  Center,
  NativeBaseProvider,
  Spacer,
  Heading,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

function Usecase() {
  const navigation = useNavigation();
  return (
    <Box padding="10">
      <Center>
        <VStack space="4">
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.900',
            }}
            color="coolGray.900"
            fontWeight="700"
            size="xs">
            Please choose your use case once again Make sure you have selected
            correct Use Case!!
          </Heading>
          <Button
            mt="10"
            bg="#008080"
            onPress={() => navigation.navigate('Admin')}>
            Admin
          </Button>
          <Button
            mt="10"
            bg="#008080"
            onPress={() => navigation.navigate('Seller')}>
            Seller
          </Button>
          <Button
            mt="10"
            bg="#008080"
            onPress={() => navigation.navigate('Buyer')}>
            Buyer
          </Button>
          <Text>Make sure you have selected correct Use Case!!</Text>
        </VStack>
      </Center>
    </Box>
  );
}

export default Usecase;
