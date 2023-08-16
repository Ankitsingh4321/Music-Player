console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('punjabi/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "12 Bande [Varinder Brar]", filePath: "punjabi/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Rambo [Akay]", filePath: "punjabi/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bitch I'm back [Siddhu Moosewala]", filePath: "punjabi/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Brown Rang [Honey Singh]", filePath: "punjabi/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Born to Shine [Diljit Dosanjh]", filePath: "punjabi/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Excuses [AP Dhillon, Gurinder Gill, and Intense]", filePath: "punjabi/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Half Window Down [ Dr Zeus, Ikka Singh]", filePath: "punjabi/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Hath Chumme [Ammy Virk, B Praak, Jaani]", filePath: "punjabi/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jatta Ve Jatta [Bunny Gill]", filePath: "punjabi/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Kinna Chir [Kaushik Rai]", filePath: "punjabi/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Life Style [Banka, Sidhu Moosewala]", filePath: "punjabi/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Moosedrilla [Sidhu Moosewala, Divine]", filePath: "punjabi/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Na Ja [Pav Dharia]", filePath: "punjabi/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "No Love [Shubh]", filePath: "punjabi/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Tait Goriye [Akay]", filePath: "punjabi/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Khair Mangdi [Bilal Saeed]", filePath: "punjabi/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "These Days [Sidhu Moosewala, Bhoemia]", filePath: "punjabi/17.mp3", coverPath: "covers/17.jpg"},
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
        audioElement.src = `punjabi/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=16){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `punjabi/${songIndex+1}.mp3`;
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
    audioElement.src = `punjabi/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})