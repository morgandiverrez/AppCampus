import * as React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../utils/hooks'

export default function SettingsScreen({ navigation }) {
     //const { theme } = useTheme()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Bus')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}