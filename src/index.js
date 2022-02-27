import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { OpenGraphParser } from "react-native-opengraph-kit";

import LinkRender from "./views/LinkRender";
import Twitter from "./views/Twitter";

const LinkPreview = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setCurrentURL(props.link);
  }, []);

  function isValidUrl(text) {
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return "";
    });
  }

  function setCurrentURL(value) {
    const text = isValidUrl(value);
    if (text !== value) {
      OpenGraphParser.extractMeta(value)
        .then((data) => {
          setData(data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setUrl(null);
      setData(null);
    }
  }

  const renderLink = () => {
    if (data.site_name === "Twitter") {
      return (
        <Twitter
          {...props}
          data={data}
          containerColor={props.containerColor}
        />
      );
    } else {
      return (
        <LinkRender
          {...props}
          data={data}
        />
      );
    }
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      {data && renderLink()}
    </TouchableOpacity>
  );
};

export default LinkPreview;
