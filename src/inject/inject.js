chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		//console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
        var numChanged = 0;
        $('time').each(function () {
            var timeStr = $(this).attr('title');
            $(this).after(timeStr);
            $(this).remove();
            numChanged++;
        });
        console.log("Modified " + numChanged + " Github timestamps");
	}
	}, 10);
});