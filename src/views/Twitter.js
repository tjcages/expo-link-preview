import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Container,
  Title,
  Copy,
  Text,
  useThemeColor,
} from "../components/Themed";
import { timeAgo } from "../utils";

import ImageStack from "./ImageStack";

const Twitter = (props) => {
  // standard, themed colors to be used
  const container = useThemeColor({}, "container");
  const primary = useThemeColor({}, "primary");
  const secondary = useThemeColor({}, "secondary");
  const divider = useThemeColor({}, "divider");

  const {
    textColor = secondary,
    titleColor = primary,
    containerColor = container,
    borderColor = divider,
    twitterLogoColor,
    link,
    onPress,
    showLikes = true,
    showReplies = true,
    showRetweets = true,
    ...otherProps
  } = props;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!loading && data === null) {
      setLoading(true);
      getData(props.data.url);
    }
  });

  const getData = async (twitterURL) => {
    var after_ = twitterURL.split("status/")[1];
    after_ = after_.substring(0, after_.indexOf("?"));
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
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    data && (
      <Container
        style={[
          styles.container,
          { backgroundColor: containerColor, borderColor: borderColor },
        ]}
        {...otherProps}
      >
        {data.includes && data.includes.users.length > 0 && (
          <View style={styles.logoContainer}>
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
                <Title
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: titleColor,
                  }}
                >
                  {data.includes.users[0].name}
                </Title>
                <Text style={{ fontSize: 14, color: textColor }}>
                  @{data.includes.users[0].username}
                </Text>
              </View>
            </View>
            <Image
              source={require("../assets/twitter_logo_blue.png")}
              style={{ width: 24, height: 24, tintColor: twitterLogoColor }}
            />
          </View>
        )}
        {data.data.text && (
          <Copy style={{ color: textColor }}>{data.data.text}</Copy>
        )}
        {data.includes !== undefined &&
          data.includes.media !== undefined &&
          data.includes.media.length > 0 && (
            <ImageStack media={data.includes.media} />
          )}
        {data.data.public_metrics && (
          <View style={styles.actions}>
            {showReplies && (
              <View style={styles.actionItem}>
                <Image
                  source={require("../assets/twitter_reply.png")}
                  style={[styles.actionIcon, { tintColor: textColor }]}
                />
                {data.data.public_metrics.reply_count !== 0 && (
                  <Text style={{ color: textColor }}>
                    {data.data.public_metrics.reply_count}
                  </Text>
                )}
              </View>
            )}
            {showRetweets && (
              <View style={styles.actionItem}>
                <Image
                  source={require("../assets/twitter_retweet.png")}
                  style={[styles.actionIcon, { tintColor: textColor }]}
                />
                {data.data.public_metrics.retweet_count !== 0 && (
                  <Text style={{ color: textColor }}>
                    {data.data.public_metrics.retweet_count}
                  </Text>
                )}
              </View>
            )}
            {showLikes && (
              <View style={styles.actionItem}>
                <Image
                  source={require("../assets/twitter_like.png")}
                  style={[styles.actionIcon, { tintColor: textColor }]}
                />
                {data.data.public_metrics.like_count !== 0 && (
                  <Text style={{ color: textColor }}>
                    {data.data.public_metrics.like_count}
                  </Text>
                )}
              </View>
            )}
            {data.data.created_at && (
              <Text style={{ marginVertical: 6, color: textColor }}>
                {timeAgo.format(new Date(data.data.created_at), "round-minute")}
              </Text>
            )}
          </View>
        )}
      </Container>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    padding: 12,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8,
  },
  profile: {
    width: 42,
    height: 42,
    borderRadius: 100,
    overflow: "hidden",
  },
  userInfo: {
    flexDirection: "column",
    marginLeft: 6,
  },
  image: {
    width: "100%",
    marginTop: 12,
    borderRadius: 8,
    maxHeight: 400,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default Twitter;
