{/* 
    Splash screen that determines whether the current user is logged in or not 
    to navigate him/her based on the cached data
*/}
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { icons } from '../../icons/pngs';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

function Splash() {
    const token = useSelector((state: { postsReducer: { token: string } }) => state?.postsReducer.token)

    useEffect(() => {
        setTimeout(() => {
            if (token === '') {
                NavigationService.reset('Login')
            } else {
                NavigationService.reset('DrawerStack')
            }
        }, 800);
    }, [])


    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                source={icons.MainLogo}
                style={styles.logo} />
        </View>
    );
}

export { Splash };
