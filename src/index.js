function component() {
  console.log("faith=============lanch-webpack");
  let element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = "hello webpack-1";

  return element;
}

document.body.appendChild(component());
