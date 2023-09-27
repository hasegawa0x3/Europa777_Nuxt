import Cookies from 'js-cookie';

const linkTo = (str) => {
  if (Cookies.get("click_id")) {
    str = str + "?click_id=" + Cookies.get("click_id");
  }
  if (Cookies.get("promo")) {
    if (Cookies.get("click_id"))
      str = str + "&promo=" + Cookies.get("promo");
    else
      str = str + "?promo=" + Cookies.get("promo");
  }
  return str;
};
const tabToLink = (str) => {
  return str.split(" ").join("-").toLowerCase();
};
const linkToTab = (str) => {
  return str.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

export { linkTo as a, linkToTab as l, tabToLink as t };
//# sourceMappingURL=link-f9710514.mjs.map
