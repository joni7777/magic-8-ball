export default class Magic8BallProxy{

    static async onQuestionAsked (question) {
        try {
            let questionResponse = await fetch('https://the-answer-machine.herokuapp.com/?question=' + question);
            return await questionResponse.json();
        } catch (err) {
            console.log("error on getting the answer", err); // oh noes, we got an error
        }
    }

    static async getTopicGif (topic) {
        if(topic) {
            try {
                let giphyResponse = await fetch('http://api.giphy.com/v1/gifs/search?q=' + topic +  "&api_key=dc6zaTOxFJmzC");
                let responseJson = await giphyResponse.json();
                return responseJson.data[0].images.downsized_medium.url;
            } catch (err) {
                console.log("error on getting the answer", err); // oh noes, we got an error
            }
        }
    }
};