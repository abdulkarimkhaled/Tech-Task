{/* 
    Profile screen in the making
*/}
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Menu from '../../icons/svgs/Menu';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity style={styles.back} onPress={() => NavigationService.openDrawer()}>
                    <Menu />
                </TouchableOpacity>
                <Text style={styles.title} >{'Profile'}</Text>
            </View>

        </View>
    );
}

export { Profile };
