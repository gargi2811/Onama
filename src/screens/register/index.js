import React, {useState} from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Radio,
  Input,
  Button,
  Center,
  Text,
  Stack,
} from 'native-base';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function RegisterScreen() {
  const [value, setValue] = useState('one');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState();

  const onRegisterButtonPress = async () => {};

  const onSignInButtonPress = () => {};

  const navigation = useNavigation();

  return (
    <Center w="100%" h="100%">
      <Box w="100%" h="100%" bg="white">
        <ScrollView>
          <Box safeArea p="2" w="90%" maxW="500" py="6" alignSelf="center">
            <Heading size="lg" color="muted.900" fontWeight="300">
              Welcome
            </Heading>
            <VStack space={4} mt="5">
              <Heading size="sm" color="muted.900" fontWeight="300">
                choose your user type:
              </Heading>

              <Radio.Group
                style={{flexDirection: 'row'}}
                status="control"
                value={value}
                onChange={nextValue => {
                  setValue(nextValue);
                }}>
                <Stack
                  direction={{
                    base: 'row',
                    md: 'row',
                  }}
                  alignItems={{
                    base: 'flex-start',
                    md: 'center',
                  }}
                  space={4}
                  w="75%"
                  maxW="300px">
                  <Radio value="one">Admin</Radio>
                  <Radio value="two">Seller</Radio>
                  <Radio value="three">Buyer</Radio>
                </Stack>
              </Radio.Group>

              <FormControl>
                <FormControl.Label>Your Name</FormControl.Label>
                <Input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChangeText={setName}
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>Enter your Phone Number</FormControl.Label>
                <Input
                  type="text"
                  placeholder="e.g. 8624966920"
                  value={phone}
                  onChangeText={setPhone}
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>Enter your Address</FormControl.Label>
                <Input
                  type="text"
                  placeholder="e.g. Shivaji Nagar, Nanded."
                  value={address}
                  onChangeText={setAddress}
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="password"
                  value={password}
                  onChangeText={setPassword}
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  type="password"
                  value={confirmpassword}
                  onChangeText={setConfirmPassword}
                />
              </FormControl>

              <Button
                mt="10"
                bg="#008080"
                onPress={() => navigation.navigate('Seller')}>
                Register
              </Button>

              <Text>Already have an Account?</Text>

              <Button onPress={() => navigation.navigate('Admin')}>
                Sign In
              </Button>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </Center>
  );
}

export default RegisterScreen;
