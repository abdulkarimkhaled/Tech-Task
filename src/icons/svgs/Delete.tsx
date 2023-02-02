import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Delete(props: any) {
    return (
        <Svg
            width={calcWidth(24)}
            height={calcWidth(24)}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M6 5h12M9 5v0a3.951 3.951 0 016 0v0M9 20h6a2 2 0 002-2V9a1 1 0 00-1-1H8a1 1 0 00-1 1v9a2 2 0 002 2z"
                stroke={colors.delete}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Delete
