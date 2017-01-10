// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#021C1E"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress={"none"} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              SUIT UP DRIVY
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              pay each actors
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={2} textColor="white">
              Rental properties
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Car owner properties
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              WOW EFFECT
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <List ordered textColor="white">
              <ListItem>Fork the project https://github.com/92bondstreet/suit-up-drivy via github</ListItem>
              <ListItem>Clone the project git clone https://github.com/YOUR_USERNAME/suit-up-drivy</ListItem>
              <ListItem>Clone the project git clone https://github.com/YOUR_USERNAME/suit-up-drivy</ListItem>
              <ListItem>Modify CSS and HTML dom for a WOW effect</ListItem>
              <ListItem>Don't forget to commit and push before 4/7 PM</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Focus only on Web Design
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
