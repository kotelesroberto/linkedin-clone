/*=============================================
=            Filename magic             =
=============================================*/

const getFileExtension = (filename) => {
  let exploded = filename.split(".");
  return exploded[exploded.length - 1];
};

const getFileName = (filename) => {
  let exploded = filename.split(".");
  exploded.pop();
  return exploded.join(".");
};

const safeFileName = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { getFileExtension, getFileName, safeFileName };
