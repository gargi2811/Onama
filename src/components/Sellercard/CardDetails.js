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
import {StyleSheet} from 'react-native';

function CardDetails() {
  // const bgLight = 'gray.50';
  // const colorContrastLight = useContrastText(bgLight);
  return (
    <ScrollView>
      <Box style={styles.container}>
        <VStack space="2">
          <Box bg="#008080" rounded="20">
            <Text px={4} py={30} alignContent="center">
              <Heading size="lg" color="white" alignContent="center">
                Biogas Plant, Katraj PMC
              </Heading>
            </Text>
          </Box>
          <Box rounded="20" marginTop="2" style={styles.body}>
            <Text px={4} fontWeight="600" fontSize="20">
              <Spacer />
              Address:
            </Text>
            <Text px={4} py="4" fontSize="16">
              FV44+4MQ, Katraj-Satara Rd, Katraj, Pune, Maharashtra 411043.
              FV44+4MQ,Katraj-Satara Rd, Katraj, Pune, Maharashtra 411043.
              FV44+4MQ,Katraj-Satara Rd, Katraj, Pune, Maharashtra 411043.
            </Text>
            <Spacer />
            <Text px={4} py="2" fontWeight="600" fontSize="20">
              Phone
              <Text fontSize="16"> : 8937782882</Text>
            </Text>
          </Box>
        </VStack>
        <Box rounded="20" marginTop="2" style={styles.body}>
          <Image
            alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
            style={{
              width: 500,
              height: 500,
              resizeMode: 'contain',
            }}
            source={{
              uri: 'https://thumbs.dreamstime.com/b/biogas-plant-27363201.jpg',
            }}
          />
        </Box>
        <Button
          style={{
            height: 40,
            alignSelf: 'center',
            marginTop: 6,
            marginBottom: 20,
            width: 200,
          }}
          bg="#33cccc">
          OFFER WASTE
        </Button>
      </Box>
    </ScrollView>
  );
}
export default CardDetails;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e6f5f5',
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  container: {
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
});
