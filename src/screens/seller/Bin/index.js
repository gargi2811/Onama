import React from "react";
import { Box, Heading, Modal, VStack, HStack, Stack, Button, Center, NativeBaseProvider, Text, ScrollView, Input, FormControl } from "native-base";
//import Accept from "./Accept";
//import Decline from "./Decline";
import { useState } from "react";
//import Decline from "./Decline";

function Bin() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%">
        <Box w="100%" h="100%" padding="4" bg="white">
          <ScrollView>
            <VStack space="10">


              <VStack space="5">
                <Heading size="lg" fontWeight="bold">
                  Current Status ~
                </Heading>
                <Box safeArea p="2" w="90%" maxW="500" py="6" alignSelf="center" bg="#e6f5f5" borderRadius="10">
                  <VStack space="10">
                    <HStack space="5">
                      <Text fontWeight="900" padding="2">Available Waste</Text>
                      <Text padding="2" alignSelf="center" px="7">
                        50 kg
                      </Text>
                    </HStack>
                    <HStack space="5">
                      <Text fontWeight="900" padding="2">Offered Waste</Text>
                      <Text padding="2" alignSelf="center" px="7">
                        10 kg
                      </Text>
                    </HStack>
                    <HStack space="5">
                      <Text fontWeight="900" padding="2">Sold out Waste</Text>
                      <Text padding="2" alignSelf="center" px="7">
                        100 kg
                      </Text>
                    </HStack>
                  </VStack>
                </Box>


                <Heading size="lg" fontWeight="bold">
                  Buy Orders ~
                </Heading>
                <Box safeArea p="2" w="90%" maxW="500" py="6" alignSelf="center" bg="#e6f5f5" borderRadius="10">
                  <VStack space="10">
                    <HStack space="5">
                      <Text fontWeight="700" padding="2">
                        Buyer 1
                      </Text>
                      <Button size="sm" bg="#008080" borderRadius="10" onPress={() => setShowModal(true)}>ACCEPT</Button>
                      <Button size="sm" bg="#008080" borderRadius="10" onPress={() => setShowModal2(true)}>DECLINE</Button>
                    </HStack>
                  </VStack>
                  <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="500">
                      <Modal.CloseButton />
                      <Modal.Header>Accept Request</Modal.Header>
                      <Modal.Body>
                        <FormControl>
                          <FormControl.Label>Amount</FormControl.Label>
                          <Input />
                        </FormControl>
                        <FormControl mt="5">
                          <FormControl.Label>Cost</FormControl.Label>
                          <Input />
                        </FormControl>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button.Group space={2}>
                          <Button variant="ghost" colorScheme="bluegray" onPress={() => {
                            setShowModal(false);
                          }}>
                            <Text color="black">Cancel</Text>
                          </Button>
                          <Button onPress={() => {
                            setShowModal(false);
                          }} bg="#008080" borderRadius="10">
                            Submit
                          </Button>
                        </Button.Group>
                      </Modal.Footer>
                    </Modal.Content>
                  </Modal>


                  <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
                    <Modal.Content maxWidth="500">
                      <Modal.CloseButton />
                      <Modal.Header>Decline Request</Modal.Header>
                      <Modal.Body>
                        <FormControl>
                          <FormControl.Label>Kindly submit your reason for declining the Request</FormControl.Label>
                          <Input />
                        </FormControl>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button.Group space={2}>
                          <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setShowModal2(false);
                          }}>
                            <Text color="black">Cancel</Text>
                          </Button>
                          <Button onPress={() => {
                            setShowModal2(false);
                          }} bg="#008080" borderRadius="10">
                            Submit Reason
                          </Button>
                        </Button.Group>
                      </Modal.Footer>
                    </Modal.Content>
                  </Modal>
                </Box>
              </VStack>


            </VStack>
          </ScrollView>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Bin
