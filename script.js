let love_heart = document.getElementById('heart');
         let audio = document.getElementById('audio');

         const love = ()=>{
            love_heart.src = "./images/full-heart.png";
            audio.src = "./audio/lovedose.mp3";
    
         }
         const hate = ()=>{
            love_heart.src = "./images/empty-heart.png";
            audio.src = "./audio/hatedose.mp3";
            document.body.style.backgroundImage = "";
         }