import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { usePathToUri } from '../../utils/hooks';



const Post = ({ post, navigation }) => {

    const uriLogo = usePathToUri(post.editor.logo);
    const uriImage = usePathToUri(post.image);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{ uri: uriLogo }} />
                <Text onPress={() => navigation.navigate('Editor', { editorId: post.editor.id })}  style={styles.username}>{post.editor.name}</Text> 
            </View>
            <Image style={styles.image} source={{ uri: uriImage }} />
            <View style={styles.footer}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.description}>{post.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: 400,
    },
    footer: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 16,
    },
});

export default Post;
