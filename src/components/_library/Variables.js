/**
 *
 * Colour definitions
 * Palette to use: https://colors.muz.li/palette/e74645/fb7756/facd60/fdfa66/1ac0c6
 * 2023, Robert Koteles
 *
 */

export const colorDefinitions = {
  white: "#fff", // new color palette
  black: "#000", // new color palette
  blackLighter: "#233142", // new color palette
  primaryColor: "#1ac0c6", // new color palette
  greyExtraLight: "#f4f4f4", // new color palette
  greyLight: "#919191", // new color palette
  greyLighter: "#d6d6d6", // new color palette
  grey: "#e2e2e2", // new color palette
  greyBolder: "#919191", // new color palette
  greenLight: "#4be1e7", // new color palette
  greenLighter: "#f6fdfe", // new color palette
  green: "#15e17c", // new color palette
  greenBolder: "#128387", // new color palette
  greenBold: "#0c585a", // new color palette
  red: "#e74645", // new color palette
  orange: "#fb7756", // new color palette
  orangeBolder: "#f94b1f", // new color palette
};

export const colors = {
  colorFont: colorDefinitions.black,
  colorFontHover: colorDefinitions.blackLighter, // new color palette
  colorFontSoft: "rgba(0, 0, 0, 0.66)", // new color palette
  errorFont: colorDefinitions.red, // new color palette

  // links
  link: colorDefinitions.greenBolder, // new color palette
  linkHover: colorDefinitions.greenBold, // new color palette
  menuLink: colorDefinitions.greenBolder, // new color palette
  menuLinkHover: colorDefinitions.greenBold, // new color palette

  // badge
  badgeFont: colorDefinitions.white, // new color palette
  badgeBackground: colorDefinitions.orangeBolder, // new color palette

  // headers
  header1: "#fb7756", // new color palette

  // borders
  border: colorDefinitions.grey, // new color palette

  // shadows
  boxShadow: `${colorDefinitions.grey} 0px 0px 0px 1px`, // new color palette
  boxShadow2: `${colorDefinitions.grey} 0px 0px 0px 1px, ${colorDefinitions.greyLighter} 0px 4px 4px 0px`, // new color palette
  boxShadow3: `${colorDefinitions.grey} 0px 0px 0px 1px inset`, // new color palette
  boxShadow4: "0 0 0 1px #d8d8d8, 0 6px 9px #cccccc",

  // Buttons
  buttonPrimaryBorder: colorDefinitions.primaryColor, // new color palette
  buttonPrimaryBackground: "transparent", // new color palette
  buttonPrimaryBackgroundHover: colorDefinitions.primaryColor, // new color palette
  buttonPrimaryHover: colorDefinitions.white, // new color palette
  buttonSecondaryBackground: colorDefinitions.primaryColor, // new color palette
  buttonSecondaryBackgroundHover: colorDefinitions.greenBolder, // new color palette
  buttonSecondaryBorder: colorDefinitions.primaryColor, // new color palette
  buttonSecondaryBorderHover: colorDefinitions.greenBolder, // new color palette
  buttonSecondaryFont: colorDefinitions.white, // new color palette
  buttonTertiaryBackground: colorDefinitions.white, // new color palette
  buttonTertiaryBorder: colorDefinitions.primaryColor, // new color palette
  buttonTertiaryFont: colorDefinitions.primaryColor, // new color palette
  buttonFourthBackground: colorDefinitions.white, // new color palette
  buttonFourthFont: colorDefinitions.black, // new color palette
  buttonWithImageBorder: colorDefinitions.greyLighter, // new color palette
  buttonWithImageBackgroundHover: colorDefinitions.grey, // new color palette
  buttonJoinFont: colorDefinitions.greyLight, // new color palette
  buttonJoinFontHover: colorDefinitions.greyLighter, // new color palette
  buttonJoinBackgroundHover: colorDefinitions.greyExtraLight, // new color palette
  buttonSignInBackground: "transparent",
  buttonSignInBackgroundHover: colorDefinitions.greenBolder, // new color palette
  buttonSignInFont: colorDefinitions.primaryColor, // new color palette
  buttonSignInFontHover: colorDefinitions.white, // new color palette
  buttonSignInBorder: colorDefinitions.primaryColor, // new color palette
  buttonSharePostBackground: colorDefinitions.white, // new color palette
  buttonSharePostBackgroundHover: colorDefinitions.greyExtraLight, // new color palette
  buttonSharePostFont: colorDefinitions.black, // new color palette
  buttonSharePostBorder: colorDefinitions.grey, // new color palette
  buttonSharePostBoxShadowHover: colorDefinitions.greenLight, // new color palette
  buttonFollowFont: colorDefinitions.black, // new color palette
  buttonFollowBorder: colorDefinitions.black, // new color palette
  buttonFollowBoxShadowHover: colorDefinitions.greenLight, // new color palette
  buttonFollowBackgroundHover: colorDefinitions.greyExtraLight, // new color palette
  buttonNewPostBoxShadow: `${colorDefinitions.grey} 0px 0px 0px 1px, ${colorDefinitions.greyLighter} 0px 4px 4px 0px`, // new color palette
  buttonNewPostBoxShadowHover: `${colorDefinitions.grey} 0px 0px 0px 1px, ${colorDefinitions.greyLighter} 0px 4px 4px 0px`, // new color palette
  socialCountButtonBackground: "transparent",
  socialCountButtonBackgroundHover: colorDefinitions.greyExtraLight, // new color palette
  iconButtonBackground: "transparent",
  iconButtonBackgroundHover: colorDefinitions.greyExtraLight, // new color palette

  commentBoxBackground: colorDefinitions.greyExtraLight, // new color palette

  modalBackground: "rgba(0, 0, 0, 0.5)",

  listItemBackground: "transparent",
  listItemBackgroundHover: colorDefinitions.greyLighter, // new color palette

  userCardDescription: colorDefinitions.greyBolder, // new color palette

  // Footer
  footerInlineMenuRowBackground: "transparent",
  footerMenuRowBackground: colorDefinitions.greyExtraLight, // new color palette

  // Form input
  inputFont: colorDefinitions.black, // new color palette
  inputBackground: colorDefinitions.white, // new color palette
  inputBackgroundHover: colorDefinitions.greyExtraLight, // new color palette
  headerInputFont: colorDefinitions.black, // new color palette
  headerInputBackground: colorDefinitions.greyExtraLight, // new color palette
};

export const borderRadius = "8px";
