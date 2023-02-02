import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Edit(props: any) {
    return (
        <Svg
            width={calcWidth(25)}
            height={calcWidth(25)}
            viewBox="0 0 25 25"
            fill="none"
            {...props}
        >
            <Path
                d="M15 7l3 3M6 19l1-4L17 5l3 3-10 10-4 1z"
                stroke={colors.mainColor}
                strokeWidth={1.2}
            />
        </Svg>
    )
}

export default Edit
