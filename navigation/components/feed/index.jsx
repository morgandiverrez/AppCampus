// components/Feed.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from '../post';


const Feed = ({ groups, navigation }) => {
    if (!Array.isArray(groups)) {
        console.log(groups);
        return(
        <Text>c'est un indefinit.</Text>);
    }
    return (
        <View style={styles.feed}>
            
            {
                groups ? ( groups.map(group =>
                    
                    group.posts.map(post => (
                        <Post post={post} navigation={navigation} key={post.id} />
                    ))
                    
                )) : (
                    <Text>Aucun information sur ce campus.</Text>
                )
            }
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    feed: {
        flex: 1,
    },
});

export default Feed;
