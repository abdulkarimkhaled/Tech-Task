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
    },
    input: {
        backgroundColor: colors.inputGrey,
        marginTop: calcHeight(12),
        marginHorizontal: calcWidth(16),
        borderRadius: calcWidth(10),
        paddingVertical: calcHeight(12),
        paddingHorizontal: calcWidth(12),

    },
    title: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(18),
        fontWeight: '600',
        marginLeft: calcWidth(8),
        color: colors.white
    },
    inputHeaderText: {
        marginHorizontal: calcWidth(16),
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        marginTop: calcHeight(12)
    },
    back: {
        padding: calcWidth(12),
    },
    submitButton: {
        width: calcWidth(343),
        alignSelf: 'center',
        marginTop: calcHeight(30),
        paddingVertical: calcHeight(16),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.mainColor,
        borderRadius: calcWidth(16)
    },
    submitText: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(18),
        fontWeight: '600',
        marginLeft: calcWidth(8),
        color: colors.white
    },
    errorText: {
        color: colors.delete,
        marginHorizontal: calcWidth(16),
        marginTop: calcHeight(4),
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12)
    }
});

export default styles;
