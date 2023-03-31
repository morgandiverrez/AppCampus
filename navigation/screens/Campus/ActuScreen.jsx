import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { usePathToUri } from '../../utils/hooks';
import { useState, useEffect } from 'react';
import Feed from '../../components/feed';

export default function ActuScreen({ navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // récupérer les données de l'API
        const api = usePathToUri("api/groups");
        fetch(api)
            .then(response => response.json())
            .then(data => setPosts(data['hydra:member']))
            .catch(error => console.log(error));
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
            
            <SafeAreaView>
                <ScrollView>
                    <Feed navigation={navigation} groups={posts} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};
