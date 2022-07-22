import React from 'react';
import { Radio, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,Stack } from "native-base";

const Login = () => {
  return <NativeBaseProvider>
    <Center w="100%" h="100%">
     <Box w="100%" h="100%" bgColor="indigo.200" alignItems="center">
        <Box safeArea p="1" py="60" w="100%" maxW="300">

        <Heading size="lg" fontWeight="700" color="coolGray.800" _dark={{
            color: "warmGray.800"
        }}>
          Welcome!!
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.900"
    }} color="coolGray.900" fontWeight="700" size="xs">
          Sign in to continue!
        </Heading>
        <Text fontWeight="400" fontFamily="" py="5" color="warmGray.500">Choose Your Role</Text>
        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
      <Stack direction={{
      base: "row",
      md: "row"
    }} alignItems={{
      base: "flex-start",
      md: "center"
    }} space={4} w="75%" maxW="300px" py="0">
        <Radio value="1" colorScheme="indigo" size="sm" my={1}>
          Admin
        </Radio>
        <Radio value="2" colorScheme="green" size="sm" my={1}>
        Seller
        </Radio>
        <Radio value="3" colorScheme="green" size="sm" my={1}>
          Buyer
        </Radio>
      </Stack>
    </Radio.Group>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input variant="rounded" placeholder="Username"  borderColor="gray.500" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input variant="rounded" type="password" placeholder="password" borderColor="gray.500" />
            <Link _text={{
                fontSize: "xs",
                fontWeight: "500",
            color: "indigo.500"
        }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="5" colorScheme="indigo" borderRadius="25">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Register
            </Link>
          </HStack>
        </VStack>
      </Box>
      </Box>
    </Center>
        </NativeBaseProvider>
};

    export default Login;
    