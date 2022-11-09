const waifuButton = document.getElementById('waifu-button');
const waifuPic = document.querySelector('#waifu-pic');


const getWaifus = async () => {

    const url = 'https://api.waifu.pics/sfw/waifu';
    const response = await fetch(url);
    const data = await response.json();

    waifuPic.setAttribute("src", data.url);

}

waifuButton.addEventListener('click', getWaifus);

