{/* 
    Home screens to show posts lists, delete them and navigate to 
    single posts, also the drawer can be accessed from here
*/}
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useGetPostsAPIQuery } from '../../apis/postsAPIs';
import { Header } from '../../components/models/Header';
import { PostItems } from '../../components/organisms/PostItems';
import { colors } from '../../config/appStyles';
import styles from './styles';

function Home() {
    const { data, isLoading } = useGetPostsAPIQuery(null)

    return (
        <View style={styles.container}>
            <Header title={'Posts'} />
            {isLoading ?
                <ActivityIndicator style={styles.loader} color={colors.mainColor} size={'large'} />
                : <FlatList
                    data={data}
                    renderItem={({ item }) => <PostItems data={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    initialNumToRender={8}
                />}
        </View>
    );
}

export { Home };
