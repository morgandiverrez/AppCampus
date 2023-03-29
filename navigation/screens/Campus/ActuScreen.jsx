import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { usePathToUri } from '../../utils/hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import Feed from '../../components/feed';

export default function BusScreen({ navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // récupérer les données de l'API
        const api = usePathToUri("api/groups");
        fetch(api)
            .then(response => response.json())
            .then(data => setPosts(data['hydra:member']))
            .catch(error => console.log(error));
    }, []);

    // fonction appelée lorsque l'utilisateur appuie sur le bouton
    const handlePress = () => {
        navigation.navigate('CROUS'); // à remplacer par le nom de la page vers laquelle vous souhaitez naviguer
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Text ><Ionicons name='settings' color='#f0ad42' size={35} /></Text>
            </TouchableOpacity>
            <SafeAreaView>
                <ScrollView>
                    <Feed groups={posts} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        borderRadius: 5,
    },
   
});
