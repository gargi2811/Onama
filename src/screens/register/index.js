import React from 'react'
import { View, Text } from 'react-native';
import { Stack, Box, Heading, VStack, FormControl, Radio, Input, Button, Center, NativeBaseProvider } from "native-base";

function Register() {
  const [value, setValue] = React.useState("one");
  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%">
        <Box w="100%" h="100%" bg="blueGray.100">

          <Box safeArea p="2" w="90%" maxW="500" py="6" alignSelf="center">
            <Heading size="lg" color="muted.900" fontWeight="300">
              Welcome
            </Heading>
            <VStack space={3} mt="5">
              <Heading size="sm" color="muted.900" fontWeight="300">
                choose your user type:
              </Heading>

              <Radio.Group name="myRadioGroup" accessibilityLabel="user type" value={value} onChange={nextValue => {
                setValue(nextValue);
              }}>
                <Stack direction={{
                  base: "row",
                  md: "row"
                }} alignItems={{
                  base: "flex-start",
                  md: "center"
                }} space={2} w="50%" maxW="300px">
                  <Radio value="one" my={1}>
                    Admin
                  </Radio>
                  <Radio value="two" my={2}>
                    Seller
                  </Radio>
                  <Radio value="three" my={3}>
                    Buyer
                  </Radio></Stack>
              </Radio.Group>

              <FormControl>
                <FormControl.Label>Your Name</FormControl.Label>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Enter your Phone Number</FormControl.Label>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Enter your Address</FormControl.Label>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <Button mt="5" colorScheme="pink">
                Register
              </Button>
            </VStack>
          </Box>
        </Box></Center></NativeBaseProvider>
  );
}

export default Register