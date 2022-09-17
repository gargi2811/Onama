import React from 'react';
//import List from './list';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Buyerlist from './buyer';
import Sellerlist from './seller';
import CardDetails from '../../components/Sellercard/CardDetails';
const {Navigator, Screen} = createNativeStackNavigator();
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  VStack,
} from 'native-base';
import {ScrollViewBase, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';

function Admin() {
  return (
    // <Navigator
    //   initialRouteName="Home"
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Screen name="Sellerlist" component={Sellerlist} />
    //   <Screen name="Buyerlist" component={Buyerlist} />
    // </Navigator>
    <ScrollView>
      <TouchableOpacity>
        <VStack maxW={700} py="5" space="10">
          {/* <Text
            alignSelf="center"
            fontSize="28"
            marginTop="10"
            color="#003d7a"
            fontWeight="bold">
            List of Buyers :
          </Text> */}
          <Heading>List of Buyers :</Heading>
          <Box
            maxW="400"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <VStack p="4" space="30" bg="#e6f5f5">
              <Stack space="2">
                <Heading size="md" ml="-1">
                  Elite Oil Ltd, Kakinada.
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: '#008080',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  The Silicon Valley of India.
                </Text>
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Elite Oil Ltd, Kakinada.
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: '#008080',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  The Silicon Valley of India.
                </Text>
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Elite Oil Ltd, Kakinada.
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: '#008080',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  The Silicon Valley of India.
                </Text>
              </Stack>
            </VStack>
          </Box>
          <Heading>List of Sellers :</Heading>
          <Box
            maxW="400"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Stack p="4" space="30" bg="#e6f5f5">
              <Stack space="2">
                <Heading size="md" ml="-1">
                  Elite Oil Ltd, Kakinada.
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: '#008080',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  The Silicon Valley of India.
                </Text>
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Elite Oil Ltd, Kakinada.
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: '#008080',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  The Silicon Valley of India.
                </Text>
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Elite Oil Ltd, Kakinada.
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: '#008080',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  The Silicon Valley of India.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </VStack>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Admin;
