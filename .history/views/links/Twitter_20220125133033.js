import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { View, Copy, Text, Divider } from "../../components/Themed";
import { timeAgo } from "../../utils";

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
        `https://api.twitter.com/2/tweets/${after_}?expansions=attachments.media_keys,author_id&tweet.fields=attachments,created_at,public_metrics&user.fields=profile_image_url,url&media.fields=duration_ms,height,width,preview_image_url,type,url,alt_text`,
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
      {data.data.text && <Copy>{data.data.text}</Copy>}
      {data.includes && data.includes.media.length > 0 && (
        <Image
          style={{
            backgroundColor: "white",
            width: "100%",
            // height: 1024,
            aspectRatio: 3
          }}
          source={{
            uri:
              data.includes.media[0].type === "video"
                ? data.includes.media[0].preview_image_url
                : data.includes.media[0].url,
          }}
        />
      )}
      {data.data.created_at && (
        <View style={styles.content}>
          <Text style={{ marginTop: 12, marginBottom: 8 }}>
            {timeAgo.format(new Date(data.data.created_at), "round-minute")}
          </Text>
          <Divider />
        </View>
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
    borderRadius: 6,
    overflow: "hidden",
    borderWidth: 1,
    padding: 12,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8,
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
  content: {},
});

export default Twitter;
