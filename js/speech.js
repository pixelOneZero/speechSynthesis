(() => {

  window.initialize = () => {
    const msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[0]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    msg.text = 'This is the speech synthesis API. The length of voices is ' + voices.length + ".  The rate of speech is " + msg.rate;
    msg.lang = 'en-US';

    msg.onend = function(e) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    msg.onerror = function(e) {
    	console.error("An error occurred.");
    }

    speechSynthesis.speak(msg);
  };

})();