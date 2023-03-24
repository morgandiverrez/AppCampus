import * as React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../utils/hooks';
export default async function BusScreen({ navigation }) {
    // const { theme } = useTheme()


    const config = {
        url: 'https://www.data.gouv.fr/fr/datasets/r/41b8fd69-3c1a-4d6b-9160-8d9356a5c985',
        output: './navigation/datas/bus/file.json',
        header: ['Authorization: bearer 12345'],
    };

  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Bus" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Bus Screen</Text>
        </View>
    );
}
