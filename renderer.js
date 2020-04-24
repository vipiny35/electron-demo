const TabGroup = require("electron-tabs");

let tabGroup = new TabGroup({
  newTab: {
    title: 'New',
    src: "https://www.webtiara.com",
    visible: true,
    active: true,
    webviewAttributes: {
      nodeintegration: true
    }
  }
});

let tab1 = tabGroup.addTab({
  title: "View 1",
  src: "./angular/index.html",
  visible: true,
  active: true,
  webviewAttributes: {
    nodeintegration: true
  }
});

let tab2 = tabGroup.addTab({
  title: "View 2",
  src: "https://www.webtiara.com",
  visible: true
});

let tab3 = tabGroup.addTab({
  title: "View 3",
  src: "https://www.webtiara.com/blog",
  visible: true
});