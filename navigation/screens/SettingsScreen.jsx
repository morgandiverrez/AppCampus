import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { usePathToUri } from '../utils/hooks';
import GroupSelection from '../components/GroupSelection';

export default function SettingsScreen() {
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [allGroups, setAllGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const uri = usePathToUri('api/groups');
                const response = await fetch(uri);
                const data = await response.json();
                setAllGroups(data['hydra:member']);
            } catch (error) {
                console.log(error);
            }
        };
        fetchGroups();
    }, []);


    return (
        <View style={styles.container}>

            
                <View style={styles.header}>
                    <Text style={styles.headerText}>Abonnement Actu Campus</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Choisit le ou les campus que tu veux suivre :</Text>
                    <GroupSelection
                        groups={allGroups}
                    />
                </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    contentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
