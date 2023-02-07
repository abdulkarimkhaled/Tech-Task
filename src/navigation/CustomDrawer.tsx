import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import NavigationService from './NavigationService';
import Types from '../redux/types';
import { useDispatch } from 'react-redux';


const CustomDrawerContent = ({ ...props }: React.ComponentProps<typeof DrawerItemList>) => {
    const dispatch = useDispatch()
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => {
                    dispatch({
                        type: Types.DELETE_LOGIN,
                    })
                    NavigationService.reset('Login')
                }}
            />
        </DrawerContentScrollView>
    );
}

export { CustomDrawerContent }