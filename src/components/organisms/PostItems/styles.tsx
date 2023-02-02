import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    postConatiner: {
        borderRadius: calcWidth(10),
        paddingHorizontal: calcWidth(12),
        paddingVertical: calcHeight(16),
        borderWidth: 1,
        borderColor: colors.mainColor,
        marginBottom: calcHeight(8)
    },
    postTitle: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(18),
    },
    postBody: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        marginTop: calcHeight(4)
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})