import React from "react";

const Section = ({ compatible, model, children }) => {
  const eq = (elem) => elem.trim() == model;
  if (!compatible.split(",").some(eq)) {
    children = "";
  }
  return <>{children}</>;
};

const fallback = (file1, file2) => {
  let file1_exist = false;
  const files = require.context("/img/", true, /\.webp$/);
  files.keys().forEach((key) => {
    if (file1 == `/img${key.slice(1)}`) {
      file1_exist = true;
    }
  });
  return file1_exist ? file1 : file2;
};

const Image = ({ src, alt, width, height, ...rest }) => {
  let _src = src;
  let _alt = alt != undefined ? alt : rest["model"];
  let match = /.*#(.*)#.*/.exec(src);
  if (match) {
    let capture = match[1];
    let file1 = src.replace(`#${capture}#`, rest[capture]);
    let file2 = src.replace(`#${capture}#`, rest["common"]);
    _src = fallback(file1, file2);
  }
  return <img src={_src} alt={_alt} width={width} height={height} />;
};

export { Section, Image };
