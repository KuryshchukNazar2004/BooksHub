<template>
  <main class="home-page">
    <header>
      <div class="player">
      <div class="controll-panel">
        <img class="album-cover" src="" alt="">
        <button><img id="forward" @click="prew" src="../assets/img/player_btn/forward_btn.svg" style="transform: scale(-1, 1);"></button>
        <button><img id="forward15" @click="leftSkip" src="../assets/img/player_btn/scip_sec_btn.svg" style="transform: scale(-1, 1);" ></button>
        <button class="play" v-if = "!isPlaying" @click="play"><img   src="../assets/img/player_btn/start_btn.svg" ></button>
        <button class="pause" v-else @click="pause"><img  src="../assets/img/player_btn/pause_btn.svg"></button>
        <button><img id="skip15" @click="rightSkip" src="../assets/img/player_btn/scip_sec_btn.svg"></button>
        <button><img id="next" @click="next" src="../assets/img/player_btn/forward_btn.svg"  ></button>
       <div>
        <input id="progressBar" type="range"  v-model="audio.currentTime" >
       </div>
      </div>
    </div>
    </header>
    <main id="cur-aud">
        <div class="carousel">
          <h2>Зараз грає на</h2>
          <h2>BooksHub</h2>  
          <div class="books">
              <img :src="currentAudio.c_src" alt="">      
              <p> {{currentAudio.Artist}} - <br> {{currentAudio.Sname}} </p>
          </div>
        </div>
    </main>
  </main>
</template>

<script>
export default{
  name: 'HomeView',
  data() {
    return{
      audio: new Audio(),
      currentAudio:{},
      progressBar:{},
      currenttTime:0,
      index:0,
      isPlaying: false,
      isPause: true,
      currentDuration: 0,
      currentTime: 0,
      audinfo:[
        {
          Artist: "Stacy Schif", 
          Sname: "The Witches", 
          src: '/src/assets/books/audio/The_Witches/The_Witches.mp3',
          c_src: '/src/assets/books/cover/The_Witches/The_Witches.png',
        },
        {
          Artist: "F. Scott. Fitzgerald", 
          Sname: "THE BEAUTIFUL AND DAMNED", 
          src: '/src/assets/books/audio/The_Beautiful_and_Damned/beautiful.mp3',
          c_src: '/src/assets/books/cover/The_Beautiful_and_Damned/beautiful.png',  
        },
      ],
    }
  },
  mounted()
  {
    this.progressBar = document.querySelector('#progressBar')
    this.progressBar.value = 0
    this.currentAudio = this.audinfo[this.index]
    this.audio.src = this.currentAudio.src
    this.initProgress()
  },
  created(){
    console.log(this.$router.currentRoute.path);
  },
 methods:{
    initProgress()
    {
      this.audio.addEventListener('loadedmetadata', () => {
        this.currentDuration = this.audio.duration
        this.progressBar.max = this.currentDuration
      })
      this.audio.addEventListener('timeupdate', () => {
        this.updateProgress(this.audio.currentTime)
      })
    },
    updateProgress(time)
    {
      this.progressBar.value = time
    },
    play(song){
      if(typeof song.src != 'undefined' ){
        this.currentAudio = song
        this.audio.src = this.currentAudio.src
      }
      this.audio.play();
      this.currentAudio.durt = this.audio.duration
      console.log(this.currentAudio.durt)
      this.isPlaying = true;
    },
    pause (){
      this.audio.pause();
      this.isPlaying = false;
    },
    next(){
      this.index++
      if(this.index > this.audinfo.length-1)
      {
        this.index = 0
      }
      this.currentAudio = this.audinfo[this.index]
      this.play(this.currentAudio)
    },
    rightSkip(){
      this.audio.currentTime += 15
    },
    leftSkip(){
      this.audio.currentTime -= 15
      if(this.audio.currentTime < 0 ){
        this.audio.currentTime = 0
      }
    },
    prew(){
      this.index--
      this.audio.pause();
      if(this.index < 0)
      {
        this.index = this.audinfo.length-1
      }
      this.currentAudio = this.audinfo[this.index]
      this.play(this.currentAudio)
    }
  },
}
</script>

<style lang="scss" require>
  body{
    background: linear-gradient(180deg, #3A2B1A 0%, rgba(143, 103, 60, 0.94) 100%);
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .player{
    background-image: url("../assets/img/player_background.svg");
    background-repeat: no-repeat;
    max-width: 1170px;
    max-height: 200px;
    object-fit: cover;
    margin: auto;
    font-size: 20px;
    color: white;
    box-shadow:  10px 10px 4px 7px rgba(0, 0, 0, 0.25), inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    margin-bottom: 200px;
  }
  input[type='range'] {
  overflow: hidden;
  width: 300px;
  -webkit-appearance: none;
  background-color: #9a905d;

}

input[type='range']::-webkit-slider-runnable-track {
  height: 10px;
  -webkit-appearance: none;
  color: #13bba4;
  margin-top: -1px;
}

input[type='range']::-webkit-slider-thumb {
  width: 10px;
  -webkit-appearance: none;
  height: 10px;
  cursor: ew-resize;
  background: #434343;
  box-shadow: -80px 0 0 80px #a15c02;
}

input[type="range"]::-moz-range-progress {
  background-color: #965103;
}

input[type="range"]::-moz-range-track {
  background-color: #9a905d;
}

input[type="range"]::-ms-fill-lower {
  background-color: #43e5f7;
}

input[type="range"]::-ms-fill-upper {
  background-color: #9a905d;
}
  .controll-panel button{
    background: none;
    border: none;
    margin: 30px;
    margin-top: 20px;
    margin-bottom: 10px ;
  }

  .album-cover{
    max-width: 100px;
    max-height: 100px;
  }
  #cur-aud{
    text-align: center;
    font-size: 24px;
  }
  .carousel{
    background: rgba(121, 121, 121, 0.2);
    max-width: 1170px;
    border-radius: 105px;
    margin: auto;

  }
  .books img{
    max-width: 174px;
    max-height: 269.07px;
    margin: 20px;
  }


</style>

