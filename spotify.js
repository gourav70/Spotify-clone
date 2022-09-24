

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif'); 
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [

{SongName: "Marriyo- mortals", filePath: "songs/1.mp3",coverPath: "covers/1.jpg" },
{SongName: "Tujhe bhula dia", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
{SongName: "Baby- Justin Bieber", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
{SongName: "Love yourself", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
{SongName: "Never say Never", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
{SongName: "Sorry", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
{SongName: "Ghost", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
{SongName: "Peaches", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
{SongName: "Stay", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },

]

songItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songname")[0].innerText = songs[i].SongName;

});


masterPlay.addEventListener('click' , ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        
    }
})


audioElement.addEventListener("timeupdate", ()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>
{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(element=>{
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(element=>{
element.addEventListener("click",(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-pause-circle");
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
})
})


document.getElementById("next").addEventListener("click", ()=>{
if(songIndex >= 8)
{
    songIndex = 0;
}
else
{
    songIndex +=1;
}

audioElement.src = `${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].SongName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove("fa-circle-play");
masterPlay.classList.add("fa-pause-circle");


})
document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex <= 0)
    {
        songIndex = 0;
    }
    else
    {
        songIndex -=1;
    }
    
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
})