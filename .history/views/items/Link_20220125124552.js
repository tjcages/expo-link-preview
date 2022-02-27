import React from "react";
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

import LinkPreview from "./links/LinkPreview";
import Twitter from "./links/Twitter";

const Link = (props) => {
  const renderLink = () => {
    if (props.linkData.site_name === "Twitter") {
      return <Twitter twitterURL={props.linkData.url} />;
    } else {
      return <LinkPreview {...props} />;
    }
  };

  const handleWebLink = () => {
    WebBrowser.openBrowserAsync(props.linkData.url);
  };

  return (
    <TouchableOpacity
      style={{ marginLeft: 12 }}
      onPress={() => handleWebLink()}
    >
      {renderLink()}
    </TouchableOpacity>
  );
};

export default Link;
