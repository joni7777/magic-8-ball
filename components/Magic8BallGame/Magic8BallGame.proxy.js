export default class Magic8BallProxy{

    static onQuestionAsked (question) {
        return fetch('https://the-answer-machine.herokuapp.com/?question=' + question)
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    }
};