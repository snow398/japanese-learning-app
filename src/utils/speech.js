export const speak = (text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Speech Synthesis not supported in this browser.');
    }
};

export const useSpeechSynthesis = () => {
    return { speak };
};