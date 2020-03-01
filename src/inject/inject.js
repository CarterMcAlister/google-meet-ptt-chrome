chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		let micBtn;
		const mic = en => ({key, repeat, target}) => {
			if(!micBtn || !micBtn.isConnected) {
				micBtn = document.querySelector('[data-is-muted][role="button"]')
			}
			if(micBtn && key===' ' && !repeat && !('value' in target) && micBtn.dataset.isMuted === String(en)) {
				micBtn.click()
			}
		}
		document.body.addEventListener('keydown', mic(true))
		document.body.addEventListener('keyup', mic(false))

	}
	}, 10);
});