import scssCode from "!raw-loader!./AnimationUsageInputExample.scss"
import * as React from "react"
import Code from "../Code"

class AnimationUsageInputExample extends React.PureComponent {
  render() {
    return <Code language="scss">{scssCode}</Code>
  }
}

export default AnimationUsageInputExample
