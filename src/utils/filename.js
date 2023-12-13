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
      current.classList.add("loaded");
    };
    reader.readAsDataURL(file);

    if (typeof callback === "function") {
      callback.call(this, true);
    }
  }
};

/**
 *
 * To lazyloadng an image here an Image object is used for.
 * When image is laoded into the Image object, t's ready to set as src for the real image in teh DOM
 * @param {string} src - source of the image to load
 * @param {referencedObj} imageRef - the image waiting to be lazyloaded
 */

export const imageLazyLoader = async (imageRef, src) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/*=============================================
=    Resize file on-the-fly during upload     =
=    ------------------------------------
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
=    
=    Usage: 

const onChange = async (event) => {
  try {
    const file = event.target.files[0];
    const image = await resizeFile(file);
    console.log(image);
  } catch (err) {
    console.log(err);
  }
};

=    OR

const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0,
    uri => {
      resolve(uri);
    }, 'base64' );
});

const onChange = async (event) => {
  const file = event.target.files[0];
  const image = await resizeFile(file);
  console.log(image);
} 
=============================================*/
export const resizeFile = (data = []) => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(...data);
  });
};
