export default class Magic8BallProxy{

    static async onQuestionAsked (question) {
        const questionResponse = await fetch('https://the-answer-machine.herokuapp.com/?question=' + question);
        return await questionResponse.json();
    }
};