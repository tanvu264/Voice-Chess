import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function SpeechRec() {
    const startListening = () => SpeechRecognition.startListening({continuous:true, language: 'en-US'})
    const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition()
    if (!browserSupportsSpeechRecognition) {
        console.log("not supported")
        return null
    }
    return (
        <div>
            <p>
                {transcript}
            </p>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button> 
        </div>
    );
}