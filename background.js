if (typeof browser === "undefined") {
    var background = chrome;
} else {
    var background = browser;
}
background.contextMenus.create({
  id: "gulpease",
  title: 'Gulpease',
  enabled: true,
  contexts: ["editable"]
});

background.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'gulpeaseUpdateMessage') {
	background.contextMenus.update('gulpease', {
	  'title': 'Gulpease: ' + request.index,
	  "contexts": ["all"]
	});
    if(background.contextMenus.refresh !== 'undefined') {
        background.contextMenus.refresh();
    }
  }
});
