const button = document.getElementById('button');
const bubble = document.querySelector('#speech');

const renderJoke = (theJokeHere) => {
    bubble.textContent = theJokeHere;
}

const tellJoke = (joke) => {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: joke,
        hl: 'en-us',
        v: 'Mary',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


const getJokes = async () => {

    try {
        const url = 'https://v2.jokeapi.dev/joke/Programming';
        const response = await fetch(url);
        const data = await response.json();

        let joke = '';

        if (data.joke) {
            joke = data.joke;
        }
        else {
            joke = `${data.setup} ... ${data.delivery}`;
        }

        renderJoke(joke)
        tellJoke(joke)

    } catch (error) {
        console.log(error)
    }
}

button.addEventListener('click', getJokes);