# expo-link-preview
Render URL links for Web & Twitter previews

![render twitter preview](https://uploads-ssl.webflow.com/5f47fcf4fc81fecce371f46f/621c0ad206cdd4fe29a185c7_ezgif.com-gif-maker-4.gif)

Built with `react-native` using `expo`.

## Installation
```
# yarn
yarn add expo-link-preview

# npm
npm install expo-link-preview --save
```

Then import with
```js
import LinkPreview from "expo-link-preview";
```
Note: You may also need to install dependencies `react-native-opengraph-kit` and `javascript-time-ago`.


## Usage
Example:
```js
import { View, StyleSheet } from "react-native";
import LinkPreview from "expo-link-preview";

export default function App() {
  return (
    <View style={styles.container}>
      <LinkPreview
        link="http://github.com"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

## Web
Web previews will automatically use OpenGraph information to populate the preview. If an image is present, LinkPreview will default to that, otherwise show a non-interactive web view of the page.

![render web preview](https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/621b0bfe86678f673850cb7a_Screen%20Shot%202022-02-26%20at%208.54.37%20PM.png)

## Twitter
Twitter previews will automatically be used if the OpenGraph response returns `site_name=Twitter`. The Twitter preview automatically adjusts to handle basic tweets and up to four images.

![render twitter preview](https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/621b0bff3e9793fc17565d26_Screen%20Shot%202022-02-26%20at%208.54.59%20PM.png)

## Props
| Prop | Required? | Type | Description |
| --- | --- | --- | ---------- |
| link | true | string | The link to render the preview. Links are automatically validated, but should be passed as a string value that begins with `"https://"`. |
| onPress | false | function | The onPress function is called whenever a user taps the preview. |
| containerColor | false | string | The background color of the preview container. Defaults to iOS themed component. |
| borderColor | false | string | The border color of the preview container. Defaults to iOS themed component. |
| titleColor | false | string | The text color of the `Header` – typically the website title or the Twitter user name. Defaults to iOS themed component. |
| textColor | false | string | The text color of the `Text` – typically the website description or the Twitter user handle and tweet. Defaults to iOS themed component. |

## Twitter-specific props
| Prop | Required? | Type | Description |
| --- | --- | --- | ---------- |
| twitterLogoColor | false | string | The tint color of the Twitter logo. Defaults to Twitter Blue. |
| showLikes | false | bool | Enable/disable the `Likes` counter. Defaults to `true`. |
| showRetweets | false | bool | Enable/disable the `Retweets` counter. Defaults to `true`. |
| showReplies | false | bool | Enable/disable the `Replies` counter. Defaults to `true`. |

## Color example
Example:
```js
import { View, StyleSheet } from "react-native";
import LinkPreview from "expo-link-preview";

export default function App() {
  return (
    <View style={styles.container}>
      <LinkPreview
        link="http://github.com"
        containerColor={"pink"}
        titleColor={"blue"}
        textColor={"yellow"}
        borderColor={"red"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```
![web color render](https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/621bfecb3feece9e668ee9fe_Screen%20Shot%202022-02-27%20at%203.25.42%20PM.png)

Built by [Tyler J.](https://tylerj.me) ✌️ 
