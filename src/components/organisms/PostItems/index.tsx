//post item for home list
import React, { useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useDeleteSinglePostMutation } from '../../../apis/postsAPIs';
import Delete from '../../../icons/svgs/Delete';
import Edit from '../../../icons/svgs/Edit';
import NavigationService from '../../../navigation/NavigationService';
import { styles } from './styles';

export interface Posts {
  id?: number;
  userId?: number;
  body?: string;
  title?: string
}

const PostItems = ({ data }: { data: Posts }) => {
  const [deletePost, deleteResult] = useDeleteSinglePostMutation()

  useEffect(() => {
    if (deleteResult.isSuccess) {
      Alert.alert('Success', `Post deleted successfully`, [
        {
          text: 'Ok',
        }
      ])
    }
  }, [deleteResult])

  return (
    <TouchableOpacity
      onPress={() => {
        NavigationService.navigate('Post', {
          id: data.id
        })
      }}
      style={styles.postConatiner} >
      <View style={styles.titleContainer} >
        <Text style={styles.postTitle} >{data.title}</Text>
        <View>
          <Edit />
          <TouchableOpacity onPress={() => deletePost(data.id)}>
            <Delete />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.postBody} >{data.body}</Text>
    </TouchableOpacity>
  )
};

export { PostItems };