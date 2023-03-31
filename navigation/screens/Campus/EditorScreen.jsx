import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { usePathToUri } from '../../utils/hooks';

export default function EditorScreen({ route }) {
    const { editorId } = route.params;
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        const editorUri = usePathToUri(`api/editors/${editorId}`);
        fetch(editorUri)
            .then(response => response.json())
            .then(data => setEditor(data))
            .catch(error => console.log(error));
    }, [editorId]);

    if (!editor) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: usePathToUri(editor.logo) }} style={styles.profilePicture} />
                <View>
                    <Text style={styles.editorName}>{editor.name}</Text>
                    <Text style={styles.description}>{editor.description}</Text>
                    <Text style={styles.contact}>{editor.mail}</Text>
                    <Text style={styles.contact}>{editor.adress}</Text>
                    <Text style={styles.contact}>{editor.facebook}</Text>
                    <Text style={styles.contact}>{editor.instagram}</Text>
                </View>
            </View>
            <View style={styles.posts}>
                <FlatList
                    data={editor.posts}
                    renderItem={({ item }) => (
                        <Image source={{ uri: usePathToUri(item.image) }} style={styles.postImage} />
                    )}
                    keyExtractor={item => item.id}
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    editorName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    },
    contact: {
        fontSize: 14,
    },
    posts: {
        flex: 1,
        padding: 16,
    },
    postImage: {
        width: '100%',
        aspectRatio: 1,
        marginBottom: 16,
    },
});
