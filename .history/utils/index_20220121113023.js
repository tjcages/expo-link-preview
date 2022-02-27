import TimeAgo from "javascript-time-ago";

//English
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

export const timeAgo = new TimeAgo("en-US");

export const isToday = (someDate) => {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}