import React from 'react';
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
} from 'native-base';
import {TouchableOpacity} from 'react-native';
function Card() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CardDetails')}>
      <Box alignItems="center" maxW={700}>
        <Box
          maxW="380"
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
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/biogas-plant-27363201.jpg',
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="#008080"
              _dark={{
                bg: '#e6f5f5',
              }}
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5">
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3} bg="#e6f5f5">
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
                FV44+4MQ, Katraj-Satara Rd, Katraj, Pune, Maharashtra 411043.
              </Text>
            </Stack>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center"></HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

export default Card;
