(() => {

  window.speech = {
    initialize: () => {
      const message = document.querySelector('#message');
      const speech = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();

      speech.voice = voices[0]; // Note: some voices don't support altering params
      speech.voiceURI = 'native';
      speech.volume = 1; // 0 to 1
      speech.rate = 1; // 0.1 to 10
      speech.pitch = .9; //0 to 2
      speech.text = message?.value?.length > 0 ? message.value : `This is the speech synthesis API. The length of voices is ${voices.length}.  The rate of speech is ${speech.rate}`;
      speech.lang = 'en-US';

      speech.onend = function(e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
      };

      speech.onerror = function(e) {
      	console.error("An error occurred.");
      }

      speechSynthesis.speak(speech);
    },

    pause: () => {
      console.log('pause invoked');
      speechSynthesis.pause();
    },

    resume: () => {
      console.log('resume invoked');
      speechSynthesis.resume();
    }
  }

})();