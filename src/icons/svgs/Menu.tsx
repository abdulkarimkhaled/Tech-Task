import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Menu(props: any) {
    return (
        <Svg
            width={calcWidth(24)}
            height={calcWidth(24)}
            viewBox="0 0 24 24"
            {...props}
        >
            <G stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <Path fillRule="nonzero" d="M0 0H24V24H0z" />
                <Path
                    stroke={colors.white}
                    strokeWidth={2}
                    strokeLinecap="round"
                    d="M5 7L19 7"
                />
                <Path
                    stroke={colors.white}
                    strokeWidth={2}
                    strokeLinecap="round"
                    d="M5 17L19 17"
                />
                <Path
                    stroke={colors.white}
                    strokeWidth={2}
                    strokeLinecap="round"
                    d="M5 12L19 12"
                />
            </G>
        </Svg>
    )
}

export default Menu
