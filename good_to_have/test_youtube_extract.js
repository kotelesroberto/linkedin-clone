var text = 'Find me at http://www.example.com and also at http://stackoverflow.com and https://www.youtube.com/watch?v=xP3cxbDUtrc&t=926s&ab_channel=CleverProgrammer';


const getFirstYoutubeLink = (text) => {
    const urlRegex =
      /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi;
    const matches = text.match(urlRegex);
    return matches;
  };

getFirstYoutubeLink(text);