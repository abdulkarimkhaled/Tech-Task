{/* 
    Login screen allows user to login
*/}
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../config/appStyles';
import { icons } from '../../icons/pngs';
import NavigationService from '../../navigation/NavigationService';
import Types from '../../redux/types';
import styles from './styles';

function Login() {
    const dispatch = useDispatch()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            password: ''
        },
    });

    // on submit check if login data is correct then reset navigation to drawer
    const onSubmit = (fields: {
        username: string
        password: string
    }) => {
        if (fields.username == 'admin@admin.com' && fields.password == '123456') {
            dispatch({
                type: Types.SAVE_LOGIN,
            })
            NavigationService.reset('DrawerStack')
        } else {
            Alert.alert('Error', 'Wrong Credentials', [
                {
                    text: 'Ok',
                }
            ])
        }
    }

    return (
        <View style={styles.container} >
            <Image
                resizeMode='contain'
                source={icons.MainLogo}
                style={styles.logo} />

            <Text style={styles.loginText} >Login to Upshift</Text>
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
                        placeholder={'Username'}
                        placeholderTextColor={colors.grey}
                    />
                )}
                name="username"
            />
            {errors.username && <Text style={styles.errorText} >Username is required.</Text>}

            <Controller
                control={control}
                rules={{
                    minLength: 6,
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={true}
                        placeholder={'Password'}
                        placeholderTextColor={colors.grey}
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.errorText} >Password is required and should be 6 charachters or more.</Text>}

            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit(onSubmit)} >
                <Text
                    style={styles.submitText}
                >{'Login'}</Text>
            </TouchableOpacity>
        </View>
    );
}

export { Login };
