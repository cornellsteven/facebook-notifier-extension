function getMessage(msgEvent) {
    var loc = location.href;
    if ( ! loc.match(/^http:\/\/www.facebook.com\/$/)) {
        return;
    }
    if (msgEvent.name == "settingValueIs") {
        if (msgEvent.message == 'mostrecent') {
            location.href = 'http://www.facebook.com/?sk=lf';
        }
    }
}
safari.self.tab.dispatchMessage("getSettingValue", "shownews"); // ask for value
safari.self.addEventListener("message", getMessage, false); // wait for reply