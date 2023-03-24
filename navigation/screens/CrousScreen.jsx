import * as React from 'react';
import { View, Text } from 'react-native';
import { useTheme, useFetch } from '../utils/hooks';
import fetch from "node-fetch";

export default function CrousScreen({ navigation }) {
    //const { theme } = useTheme()


 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          onPress={() => navigation.navigate('Bus')}
          style={{ fontSize: 26, fontWeight: 'bold' }}>Planning Screen</Text>
      </View>
        
    )
}
  
