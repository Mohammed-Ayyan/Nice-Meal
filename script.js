let play1=document.getElementById('video');
play1.addEventListener("click",()=>{
//   let video=  document.getElementById('video');
    if(play1.play()===true){
        play1.pause()
    }
    else{
        play1.play()

    }
    
})
function resize(){
if (window.outerWidth < 500) {
    document.getElementById('Sixth-Section').innerHTML=`<div class="six same">
            <h1>Company Profile
            </h1>
            <p> Neque laoreet suspendisse interdum consectetur
                libero id faucibus nisl tincidunt. Dictum fusce ut
                placerat orci nulla pellentesque dignissim enim sit.</p>
        </div>
        <div class="video">
            <video src="video-devices-in.m4v" id="video"></video>
            <!-- <div class="play" id="play1">ayan</div> -->
        </div>`;
    console.log('done0');
    
}
console.log('done');

}
window.addEventListener("resize",()=>{
    resize()
})