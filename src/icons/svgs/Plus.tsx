import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Plus(props: any) {
    return (
        <Svg
            width={calcWidth(28)}
            height={calcWidth(28)}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M6 12h12M12 18V6"
                stroke={colors.white}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Plus
