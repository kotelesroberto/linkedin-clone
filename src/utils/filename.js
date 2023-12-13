/**
 *
 * File related funcitons
 * 2023, Robert Koteles
 *
 */

import Resizer from "react-image-file-resizer";

/*=============================================
=            Filename magic             =
=============================================*/
export const getFileExtension = (filename) => {
  let exploded = filename.split(".");
  return exploded[exploded.length - 1];
};

export const getFileName = (filename) => {
  let exploded = filename.split(".");
  exploded.pop();
  return exploded.join(".");
};

export const safeFileName = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// remove illegal characters from a string
export const getSafeString = (content) => {
  return content.replace(/[|&;$%@" <>()+,]/g, "");
};

/**
 *
 * File upload manager
 * This function manages the file uplpoad, when user uploads a new file. It will generate a BLOB file and load it as SRC into the refrenced image object
 * @param {Event} e - Event
 * @param {RefObject} referencedObj - React referenced image object
 * @param {Function} callback - Function that runs after all done
 *
 */
export const renderUploadedImageLocaly = (
  e,
  referencedObj,
  callback = () => {}
) => {
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

/*=============================================
=    Resize file on-the-fly during upload     =
=    ------------------------------------
=    Usage: 
=      const onChange = async (event) => {
=        try {
=          const file = event.target.files[0];
=          const image = await resizeFile(file);
=          console.log(image);
=        } catch (err) {
=          console.log(err);
=        }
=      };

=    Resizer.imageFileResizer(
=      file, // Is the file of the image which will resized.
=      maxWidth, // Is the maxWidth of the resized new image.
=      maxHeight, // Is the maxHeight of the resized new image.
=      compressFormat, // Is the compressFormat of the resized new image.
=      quality, // Is the quality of the resized new image.
=      rotation, // Is the degree of clockwise rotation to apply to uploaded image.
=      responseUriFunc, // Is the callBack function of the resized new image URI.
=      outputType, // Is the output type of the resized new image.
=      minWidth, // Is the minWidth of the resized new image.
=      minHeight // Is the minHeight of the resized new image.
=    
=    resizeFile([
=      e.target.files[0],
=      300,
=      300,
=      "JPEG",
=      100,
=      0,
=      (uri) => {
=      console.log(uri);
=      },
=      "base64",
=      200,
=      200,
=    ])
);
=============================================*/
export const resizeFile = (data = []) => {
  console.log("data", data);
  return new Promise((resolve) => {
    Resizer.imageFileResizer(...data);
  });
};
