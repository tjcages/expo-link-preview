import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { View, Copy, Text } from "../../components/Themed";

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

  return data && data.data ? (
    <View style={styles.container}>
      {data.includes && data.includes.users.length > 0 && (
        <View style={styles.contentHeader}>
          <Image
            style={styles.profile}
            source={{
              uri: data.includes.users[0].profile_image_url.replace(
                /_normal\./,
                "_bigger."
              ),
            }}
          />
          <View style={styles.userInfo}>
            <Text style={{ fontWeight: "bold" }}>
              {data.includes.users[0].name}
            </Text>
            <Text style={{ fontSize: 14 }}>
              @{data.includes.users[0].username}
            </Text>
          </View>
        </View>
      )}
      {
        data.data.text &&
        <Text>{data.data.text}</Text>
      }
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
  ) : (
    <View />
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profile: {
    width: 36,
    height: 36,
    borderRadius: 48,
    overflow: "hidden",
  },
  userInfo: {
    flexDirection: "column",
    marginLeft: 6,
  },
});

export default Twitter;
