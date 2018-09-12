function speechGet(e) {
speak(process(e.results[0][0].transcript));
}

function start() {
recognize(speechGet,"en");
}
