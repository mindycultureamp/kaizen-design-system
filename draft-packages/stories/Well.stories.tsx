import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { TextField } from "@kaizen/draft-form"
import { Well } from "@kaizen/draft-well"
import * as React from "react"

const ExampleContent = () => (
  <div style={{ padding: "1em 2em", maxWidth: "400px" }}>
    <Heading tag="h3" variant="heading-3">
      Heading
    </Heading>
    <Box my={1}>
      <Paragraph tag="p" variant="body">
        This is just a sentence to fill the content area so that you have
        something to look at.
      </Paragraph>
    </Box>
    <TextField
      id="blerg"
      labelText="Example text field"
      inputValue=""
      onChange={() => undefined}
    />
  </div>
)

export default {
  title: "Well (React)",
  component: Well,
  parameters: {
    info: {
      text: `
      import { Well } from "@kaizen/draft-well"
      `,
    },
  },
}

export const DefaultWithSolidBorderKaizenSiteDemo = () => (
  <Well>
    <ExampleContent />
  </Well>
)

DefaultWithSolidBorderKaizenSiteDemo.story = {
  name: "Default with solid border (Kaizen Site Demo)",
}

export const DefaultWithDashedBorder = () => (
  <Well borderStyle="dashed">
    <ExampleContent />
  </Well>
)

DefaultWithDashedBorder.story = {
  name: "Default with dashed border",
}

export const DefaultWithoutBorder = () => (
  <Well borderStyle="none">
    <ExampleContent />
  </Well>
)

DefaultWithoutBorder.story = {
  name: "Default without border",
}

export const DefaultWithNoMargin = () => (
  <Well noMargin>
    <ExampleContent />
  </Well>
)

DefaultWithNoMargin.story = {
  name: "Default with no margin",
}

export const Positive = () => (
  <Well variant="positive">
    <ExampleContent />
  </Well>
)

export const Negative = () => (
  <Well variant="negative">
    <ExampleContent />
  </Well>
)

export const Informative = () => (
  <Well variant="informative">
    <ExampleContent />
  </Well>
)

export const Cautionary = () => (
  <Well variant="cautionary">
    <ExampleContent />
  </Well>
)

export const InformativeWithDashedBorder = () => (
  <Well variant="informative" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

InformativeWithDashedBorder.story = {
  name: "Informative with dashed border",
}
