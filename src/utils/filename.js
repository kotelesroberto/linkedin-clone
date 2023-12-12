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

const handleImageUpload = (e, referencedObj, callback = () => {}) => {
  const [file] = e.target.files;

  if (file) {
    const { current } = referencedObj;
    const reader = new FileReader();

    current.file = file;

    reader.onload = (e) => {
      current.src = e.target.result;
    };
    reader.readAsDataURL(file);

    if (typeof callback === "function") {
      callback.call(this, true);
    }
  }
};

export { getFileExtension, getFileName, safeFileName, handleImageUpload };
