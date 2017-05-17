/**
 * Created by nataliebarnatan on 17/05/2017.
 */

module.exports = {
    onQuestionAsked: function (question) {
        return fetch('https://the-answer-machine.herokuapp.com/?question=' + question)
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    }
};