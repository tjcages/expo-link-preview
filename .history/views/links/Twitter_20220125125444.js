import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../../components/Themed";

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
    var after_ = twitterURL.split("status/")[1];
    after_ = after_.substring(0, after_.indexOf("?"));
    console.log(after_);
    try {
      const response = await fetch(
        `https://api.twitter.com/2/tweets/${after_}?expansions=attachments.media_keys,author_id&tweet.fields=attachments&user.fields=profile_image_url,url&media.fields=duration_ms,height,width,preview_image_url,type,url,alt_text`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAGDzYQEAAAAAZ0ZFMwJPqe8Jb01e2o1zBsWhs50%3DGhL4hZkBjXmqh2BLCJbP2UKb0HKwUr1doMfGDdlfJfcQUYkvrP",
          },
        }
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Image style={styles.profile} />
        <View style={styles.userInfo}>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      
      {data && data.includes && (
        <Image
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
          }}
          source={{ uri: data.includes.media[0].url }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    minHeight: 224,
    borderRadius: 6,
    overflow: "hidden",
    borderWidth: 1,
    padding: 12,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  profile: {
    width: 36,
    height: 36,
    backgroundColor: "red",
    borderRadius: 48,
    overflow: "hidden",
  },
  userInfo: {
    flexDirection: "column",
  }
});

export default Twitter;
