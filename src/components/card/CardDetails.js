import React from 'react';
import {
  Text,
  Heading,
  // useContrastText,
  VStack,
  Box,
  Button,
  Spacer,
  Center,
  ScrollView,
  Image,
} from 'native-base';

function CardDetails() {
  // const bgLight = 'gray.50';
  // const colorContrastLight = useContrastText(bgLight);
  return (
    <ScrollView>
      <Box padding="4">
        <VStack space="2">
          <Box bg="#33cccc" rounded="20">
            <Text px={4} py={30}>
              <Heading size="lg">Biogas Plant, Katraj PMC</Heading>
            </Text>
          </Box>
          <Box bg="#e6f5f5" rounded="20">
            <Text px={4} fontWeight="600" fontSize="20">
              <Spacer />
              Address:
            </Text>
            <Text px={4} py="4" fontSize="16">
              FV44+4MQ, Katraj-Satara Rd, Katraj, Pune, Maharashtra 411043.
              FV44+4MQ,Katraj-Satara Rd, Katraj, Pune, Maharashtra 411043.
              FV44+4MQ,Katraj-Satara Rd, Katraj, Pune, Maharashtra 411043.
            </Text>
            <Text px={4} py="2" fontWeight="600" fontSize="20">
              Phone
              <Text fontSize="16"> : 8937782882</Text>
            </Text>
          </Box>
        </VStack>
        <Box bg="#e6f5f5" rounded="20" marginTop="4">
          <Image
            style={{
              width: 200,
              height: 300,
              resizeMode: 'contain',
            }}
            source={{
              uri: 'https://thumbs.dreamstime.com/b/biogas-plant-27363201.jpg',
            }}
          />
        </Box>
        <Center>
          <Button
            style={{
              height: 60,
              marginTop: 600,
              marginBottom: 20,
              width: 200,
            }}
            bg="#33cccc">
            OFFER WASTE
          </Button>
        </Center>
      </Box>
    </ScrollView>
  );
}
export default CardDetails;
