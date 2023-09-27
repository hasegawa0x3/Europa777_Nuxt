const seperate = (str) => {
  const strlist = str.split(" ");
  let result = [];
  strlist.map((item) => {
    const urlPattern = /[a-zA-Z]+/;
    result = [...result, { string: urlPattern.test(item), content: item }];
  });
  return result;
};
const changeTitle = (str) => {
  return str.replace(/([A-Z])/g, " $1").trim().replace(/^\w/, (c) => c.toUpperCase());
};

export { changeTitle as c, seperate as s };
//# sourceMappingURL=string-b2c0b29d.mjs.map
