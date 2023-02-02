{/* 
    single post screen that either show and edit a selected post from a previous 
    screen or create a new one
*/}
import React, { useEffect } from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAddSinglePostMutation, useEditSinglePostMutation, useGetSinglsPostAPIQuery } from '../../apis/postsAPIs';
import styles from './styles';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';

interface propsType {
    id: number,
}

interface paramsType {
    params: propsType;
}

interface routeType {
    route: paramsType;
}
function Post(props: routeType) {
    const { data } = useGetSinglsPostAPIQuery({ id: props?.route?.params?.id ? props.route.params.id : null })
    const [postPost, postResult] = useAddSinglePostMutation()
    const [editPost, editResult] = useEditSinglePostMutation()
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: {
            title: '',
            body: ''
        }
    });
    const onSubmit = (fields: {
        title: string
        body: string
    }) => {
        if (props?.route?.params?.id) {
            editPost({
                body: JSON.stringify({
                    id: props.route.params.id,
                    title: fields.title,
                    body: fields.body,
                    userId: 1,
                }),
                id: props.route.params.id
            })
        } else {
            postPost(JSON.stringify({
                title: fields.title,
                body: fields.body,
                userId: 1,
            }))
        }
    }

    const fireAlert = (text: string) => {
        Alert.alert('Success', `Post ${text} successfully`, [
            {
                text: 'Ok',
                onPress: () => NavigationService.goBack(),
            }
        ])
    }

    useEffect(() => {
        if (postResult.isSuccess) {
            fireAlert('added')
        }
        if (editResult.isSuccess) {
            fireAlert('edited')
        }
    }, [postResult, editResult])


    useEffect(() => {
        if (data) {
            setValue('title', data.title);
            setValue('body', data.body);
        }
    }, [data])


    return (
        <View>
            <View style={styles.header} >
                <TouchableOpacity style={styles.back} onPress={() => NavigationService.goBack()}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.title} >{props?.route?.params?.id ? 'View' : 'Create'}</Text>
            </View>
            <ScrollView bounces={false}  >

                <Text style={styles.inputHeaderText} >Title</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 4
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            value={value}
                            multiline
                        />
                    )}
                    name="title"
                />
                {errors.title && <Text style={styles.errorText} >Title is required and should be more than 4 characters</Text>}

                <Text style={styles.inputHeaderText}>Body</Text>
                <Controller
                    control={control}
                    rules={{
                        minLength: 30,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            value={value}
                            multiline
                        />
                    )}
                    name="body"
                />
                {errors.body && <Text style={styles.errorText} >Body is required and should be more than 30 characters.</Text>}

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit(onSubmit)} >
                    <Text
                        style={styles.submitText}
                    >{props?.route?.params?.id ? 'Edit' : 'Create'}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export { Post };
