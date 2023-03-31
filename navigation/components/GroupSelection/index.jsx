import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CheckBox} from 'react-native-btr';

export default function GroupSelection({ groups }) {
    const [selectedGroups, setSelectedGroups] = useState([]);

    const toggleGroup = (groupId) => {
        const index = selectedGroups.indexOf(groupId);
        if (index === -1) {
            setSelectedGroups([...selectedGroups, groupId]);
        } else {
            setSelectedGroups(selectedGroups.filter(id => id !== groupId));
        }
    };

    const saveSelection = async () => {
        try {
            await AsyncStorage.setItem('selectedGroups', JSON.stringify(selectedGroups));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            {groups.map((group) => (
                <View key={group.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <CheckBox value={selectedGroups.includes(group.id)} onValueChange={() => toggleGroup(group.id)} style={{ width: 30, height: 30 }} />
                    <Text style={{ marginLeft: 8 }}>{group.name}</Text> 
                    <Text style={{ marginLeft: 8 }}>{group.description}</Text>
                </View>
            ))}
            <Button title="Enregistrer" onPress={saveSelection} />
        </View>
    );
}
