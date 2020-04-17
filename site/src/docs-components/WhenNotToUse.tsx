import classnames from "classnames"
import * as React from "react"
import WhenOrWhenNotToUse from "./WhenOrWhenNotToUse"

const styles = require("./WhenToUseAndWhenNotToUse.scss")

export default ({ children }) => (
  <div className={classnames(styles.card, styles.whenNotToUse)}>
    <WhenOrWhenNotToUse variant="whenNotToUse" />
    {children}
  </div>
)
