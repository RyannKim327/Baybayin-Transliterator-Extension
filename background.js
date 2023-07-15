chrome.browserAction.onClicked.addListener(() => {
	var w = 500;
	var h = 300;
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2); 

	chrome.windows.create({'url': 'index.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , (window) => {
	})
})