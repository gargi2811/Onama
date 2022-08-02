import React from 'react';
import {
  NativeBaseProvider,
  Button,
  View,
  ScrollView,
  VStack,
} from 'native-base';
import SearchBar from '../../components/SearchBar';
import Card1 from '../../components/card/card1';
// import images from '../../components/images';
// import card2 from '../../components/cards/card2';
// import card3 from '../../components/cards/card3';
// import card4 from '../../components/cards/card4';
export default function Home({navigation}) {
  return (
    <NativeBaseProvider>
      {/* <Button onPress={() => navigation.navigate('GoResult')}>Go</Button> */}
      <SearchBar />
      <ScrollView>
        <VStack space="4" marginTop="4">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </VStack>
        {/* <cardDetails /> */}
      </ScrollView>
    </NativeBaseProvider>
  );
}

// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-ionicons';
