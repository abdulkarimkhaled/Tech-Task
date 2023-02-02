import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Back(props: any) {
    return (
        <Svg
            fill={colors.white}
            height={calcWidth(16)}
            width={calcWidth(16)}
            viewBox="0 0 477.175 477.175"
            xmlSpace="preserve"
            {...props}
        >
            <Path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z" />
        </Svg>
    )
}

export default Back
