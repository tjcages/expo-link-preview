import React, { useState } from "react";
import { StyleSheet } from "react-native"
import { View, Text } from "../components/Themed"

const Twitter = (props) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getData(props.twitterURL);
  });

  const getData = async (twitterURL) => {
    console.log(twitterURL)
    setRefreshing(true);
    try {
      const response = await fetch(
        "https://api.twitter.com/2/tweets/1485491595139231744?expansions=author_id",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAGDzYQEAAAAAZ0ZFMwJPqe8Jb01e2o1zBsWhs50%3DGhL4hZkBjXmqh2BLCJbP2UKb0HKwUr1doMfGDdlfJfcQUYkvrP",
          },
        }
      );
      const json = await response.json();
      const user_id = json.data.author_id;

      const userResponse = await fetch(
        `https://api.twitter.com/2/users/${user_id}?user.fields=profile_image_url`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAGDzYQEAAAAAZ0ZFMwJPqe8Jb01e2o1zBsWhs50%3DGhL4hZkBjXmqh2BLCJbP2UKb0HKwUr1doMfGDdlfJfcQUYkvrP",
          },
        }
      );
      const userJson = await userResponse.json();

      console.log("done");
      console.log(json);
      console.log(userJson);
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
})

export default Twitter