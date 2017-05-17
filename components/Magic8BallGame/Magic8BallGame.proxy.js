export default class Magic8BallProxy{

    static async onQuestionAsked (question) {
        console.log('question:', question);
        try {
            let questionResponse = await fetch('https://the-answer-machine.herokuapp.com/?question=' + question);
            return await questionResponse.json();
        } catch (err) {
            console.log("error on getting the answer", err); // oh noes, we got an error
        }
    }
};