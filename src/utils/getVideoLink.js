// get youtube video extracted from content
export const getFirstYoutubeLink = (text, callback) => {
  const urlRegex =
    /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi;
  const matches = text.match(urlRegex);

  const result = matches ? matches[0] : "";

  if (typeof callback === "function") {
    callback.call(this, result);
  }

  return matches;
};

const urlRegex = /(https?:\/\/[^\s]+)/g;

// get extracted url addresses from content
export const getFirstMediaLink = (text) => {
  const matches = text.match(urlRegex);
  return matches;
};

// make url srings anchored in the content
export const doUrlify = (text) => {
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '">' + url + "</a>";
  });
};
