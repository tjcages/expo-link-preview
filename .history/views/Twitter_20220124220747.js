import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";

const Twitter = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!loading && data === null) {
      setLoading(true);
      getData(props.twitterURL);
    }
  });

  const getData = async (twitterURL) => {
    console.log(twitterURL);
    try {
      const response = await fetch(
        "https://api.twitter.com/2/tweets/1485491595139231744?expansions=attachments.media_keys&tweet.fields=attachments&user.fields=profile_image_url,url&media.fields=duration_ms,height,preview_image_url,type,url,alt_text",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAGDzYQEAAAAAZ0ZFMwJPqe8Jb01e2o1zBsWhs50%3DGhL4hZkBjXmqh2BLCJbP2UKb0HKwUr1doMfGDdlfJfcQUYkvrP",
          },
        }
      );
      const json = await response.json();

      console.log("done");
      console.log(json);
      setData(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>{data && <Text>{data.text}</Text>}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Twitter;
