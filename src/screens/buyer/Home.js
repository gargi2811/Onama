import React from 'react';
import { NativeBaseProvider, Center, SectionList, Heading, Button } from 'native-base';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Buyercard/Card'

export default function Home({navigation}) {
    return (
        <NativeBaseProvider>
            <SearchBar />
            <Button onPress={() => navigation.navigate('CardDetails')}>Go</Button>
            <Card/>
        </NativeBaseProvider>
    );
}


