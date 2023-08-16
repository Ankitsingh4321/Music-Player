console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('bolly/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Ab To Aadat Si Hai Mujhko [Atif Aslam]", filePath: "bolly/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Aye Khuda [Kshitij Tarey, Mithoon, and Saim Bhat]", filePath: "bolly/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Abhi jinda Hu To [Kumar Sanu, Roop Kumar Rathod]", filePath: "bolly/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Bekhayali [Sachet Tandon]", filePath: "bolly/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Dangal [Daler Mehndi]", filePath: "bolly/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dilbra [Sachet Tandon & Parampara Thakur ]", filePath: "bolly/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Kassh [Gulam Jugani]", filePath: "bolly/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Kunfaya [A.R. Rahman, Javed Ali, Mohit Chauhan]", filePath: "bolly/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Malhari [Vishal Dadlani]", filePath: "bolly/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Mann Mera [Gajendra Verma]", filePath: "bolly/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `bolly/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `bolly/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `bolly/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})