import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    list: {
        paddingBottom: calcHeight(90),
        marginHorizontal: calcWidth(16),
        marginTop: calcHeight(24)
    },
    loader: {
        marginTop: calcHeight(200)
    }
});

export default styles;
