chrome.commands.onCommand.addListener((command) => {
	switch(command){
		case "baybayin":
			let w = 500;
			let h = 350;
			// var left = (screen.width/2)-(w/2);
			// var top = (screen.height/2)-(h/2); 

			console.log(command)
			chrome.windows.create({
				'url': 'index.html',
				'type': 'popup',
				'width': w,
				'height': h,
				'left': 100,
				'top': 100
			} , (window) => {})
		break
	}
})