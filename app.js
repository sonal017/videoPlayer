document.getElementById('videoinput').addEventListener('change',function(event){
    const file = event.target.files[0];
    console.log(file);
    const videoplayer = document.getElementById('videoplayer');
    if(file){
        const fileURL = URL.createObjectURL(file);
        videoplayer.src = fileURL;
    }
});

document.getElementById('videoplayer').addEventListener('dblclick',function(event){
    event.stopPropagation();
    event.preventDefault();
    const videoplayer=event.target;
    const videowidth= videoplayer.clientWidth;
    const clickx= event.clientX - videoplayer.getBoundingClientRect().left;
    if(clickx > videowidth/2){
        videoplayer.currentTime += 10;
    }else if(clickx < videowidth/2){
        videoplayer.currentTime -= 5;
    }
});
function got(){
    
    const urlfile = document.getElementById('videourl').value;
    window.location=(urlfile);
};

function playpause(){
    var myvideo = document.getElementById('videoplayer');
    if(myvideo.paused){
        myvideo.play();
    }else{
        myvideo.pause();
    }
}
