import React from 'react';
import {ScrollView, Box, VStack} from 'native-base';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Sellercard/Card';

function Home() {
  return (
    <Box w="100%" h="100%" bg="white" padding="4">
      <SearchBar />
      <ScrollView>
        <VStack space="5">
          <Card />
          <Card />
          <Card />
          <Card />
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Home;
