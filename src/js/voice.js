
let synth = window.speechSynthesis;
let voices = [];
let speak = new SpeechSynthesisUtterance();

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {
        voices = synth.getVoices();
    };
}

let taskVoice = (val) => {
    speak.text = val;
    speak.voice = voices[3];
    synth.speak(speak);
}

$('#btn-voice').click(() => {
    synth.speak(speak);
});

export default taskVoice;


