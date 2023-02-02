//header component incase of multiple calls 
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Menu from '../../../icons/svgs/Menu';
import Plus from '../../../icons/svgs/Plus';
import NavigationService from '../../../navigation/NavigationService';
import { styles } from './styles';

type HeaderProps = {
  title?: String,
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.smallerContainer} >
        <TouchableOpacity onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }} >
          <Menu />

        </TouchableOpacity>
        {title ? <Text style={styles.titleText} >{title}</Text> : null}
      </View>
      <TouchableOpacity onPress={() => NavigationService.navigate('Post')} >
        <Plus />
      </TouchableOpacity>
    </View>
  )
}

export { Header };
