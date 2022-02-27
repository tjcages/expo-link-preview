import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Container, Title, Copy, Text, Divider } from "../../components/Themed";
import { timeAgo } from "../../utils";
import { useThemeColor } from "../../components/Themed";

import TwitterLogo_Blue from "../../assets/icons/twitter_logo_blue.svg";
// import ReplyIcon from "../../assets/icons/twitter_reply.svg";
// import RetweetIcon from "../../assets/icons/twitter_retweet.svg";
import LikeIcon from "../../assets/icons/twitter_like.svg";

const Twitter = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const container = useThemeColor({}, "container");
  const secondary = useThemeColor({}, "secondary");

  useEffect(() => {
    if (!loading && data === null) {
      setLoading(true);
      getData(props.twitterURL);
    }
  });

  function isValidUrl(text) {
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return "";
    });
  }

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
    <Container style={styles.container}>
      {data.includes && data.includes.users.length > 0 && (
        <Container style={styles.logoContainer}>
          <Container style={styles.contentHeader}>
            <Image
              style={styles.profile}
              source={{
                uri: data.includes.users[0].profile_image_url.replace(
                  /_normal\./,
                  "_bigger."
                ),
              }}
            />
            <Container style={styles.userInfo}>
              <Title style={{ fontWeight: "bold", fontSize: 18 }}>
                {data.includes.users[0].name}
              </Title>
              <Text style={{ fontSize: 14 }}>
                @{data.includes.users[0].username}
              </Text>
            </Container>
          </Container>
          <TwitterLogo_Blue style={{ width: 24, height: 24 }} />
        </Container>
      )}
      {data.data.text && <Copy style={{ flex: 1 }}>{data.data.text}</Copy>}
      {data.includes !== undefined &&
        data.includes.media !== undefined &&
        data.includes.media.length > 0 && (
          <Image
            style={[
              styles.image,
              {
                backgroundColor: container,
                aspectRatio:
                  data.includes.media[0].width / data.includes.media[0].height,
              },
            ]}
            source={{
              uri:
                data.includes.media[0].type === "video"
                  ? data.includes.media[0].preview_image_url
                  : data.includes.media[0].url,
            }}
          />
        )}
      {data.data.public_metrics && (
        <Container style={styles.actions}>
          {/* <Container style={styles.actionItem}>
            <ReplyIcon style={styles.actionIcon} color={secondary} />
            {data.data.public_metrics.reply_count !== 0 && (
              <Text>{data.data.public_metrics.reply_count}</Text>
            )}
          </Container> */}
          {/* <Container style={styles.actionItem}>
            <RetweetIcon style={styles.actionIcon} color={secondary} />
            {data.data.public_metrics.retweet_count !== 0 && (
              <Text>{data.data.public_metrics.retweet_count}</Text>
            )}
          </Container> */}
          <Container style={styles.actionItem}>
            <LikeIcon style={styles.actionIcon} color={secondary} />
            {data.data.public_metrics.like_count !== 0 && (
              <Text>{data.data.public_metrics.like_count}</Text>
            )}
          </Container>
          {data.data.created_at && (
            <Text style={{ marginVertical: 6 }}>
              {timeAgo.format(new Date(data.data.created_at), "round-minute")}
            </Text>
          )}
        </Container>
      )}
    </Container>
  ) : (
    <Container />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    padding: 12,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginVertical: 12,
    borderRadius: 8,
    maxHeight: 400,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
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
