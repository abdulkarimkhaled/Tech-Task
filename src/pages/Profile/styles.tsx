import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        backgroundColor: colors.mainColor,
        width: "100%",
        paddingTop: calcHeight(35),
        paddingBottom: calcHeight(10),
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        paddingHorizontal: calcWidth(16),
        alignItems: 'center',
    },
    title: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(18),
        fontWeight: '600',
        marginLeft: calcWidth(8),
        color: colors.white
    },
    back: {
        padding: calcWidth(12),
    },
});

export default styles;
