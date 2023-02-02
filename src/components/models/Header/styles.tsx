import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor,
        width: "100%",
        paddingTop: calcHeight(35),
        paddingBottom: calcHeight(22),
        shadowColor: "#000",
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
        justifyContent: 'space-between'
    },
    titleText: {
        fontFamily: fonts.Regular,
        marginLeft: calcWidth(12),
        fontSize: calcWidth(24),
        color: colors.white,
        fontWeight: '400'
    },
    smallerContainer: {
        flexDirection: 'row',
        alignItems: 'center'

    }
})