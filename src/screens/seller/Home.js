import React from 'react';
import {
  VStack,
  Input,
  NativeBaseProvider,
  Box,
  Divider,
  View,
  Center,
  SectionList,
  Heading,
  Button,
} from 'native-base';
import SearchBar from '../../components/SearchBar';

const ColorPalletes = () => {
  const data = [
    {
      title: 'Cyan',
      data: ['cyan.100', 'cyan.200', 'cyan.300', 'cyan.400', 'cyan.500'],
    },
    {
      title: 'Yellow',
      data: [
        'yellow.100',
        'yellow.200',
        'yellow.300',
        'yellow.400',
        'yellow.500',
      ],
    },
    {
      title: 'Violet',
      data: [
        'violet.100',
        'violet.200',
        'violet.300',
        'violet.400',
        'violet.500',
      ],
    },
  ];
  return (
    <Center w="100%">
      <SectionList
        maxW="380"
        w="100%"
        // maxH="600"
        mb="1"
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Center py="4" bg={item}>
            {item.split('.')[1]}
          </Center>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Center>
            <Heading fontSize="xl" mt="8" pb="4">
              {title}
            </Heading>
          </Center>
        )}
      />
    </Center>
  );
};

export default function Home({navigation}) {
  return (
    <NativeBaseProvider>
      <SearchBar />
      <Button onPress={() => navigation.navigate('GoResult')}>Go</Button>
      <ColorPalletes />
    </NativeBaseProvider>
  );
}

// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-ionicons';
