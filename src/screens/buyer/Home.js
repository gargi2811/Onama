import React from 'react';
import {Center, SectionList, Heading, Button, Box} from 'native-base';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Buyercard/Card';

function Home({navigation}) {
  return (
    <Box>
      <SearchBar />
      <Button onPress={() => navigation.navigate('CardDetails')}>Go</Button>
      <Card />
    </Box>
  );
}

export default Home;
