<template>
  <main class="home-page">
    <div class="player">
      <p> {{current.Artist}} - {{current.S_name}} </p>
      <div class="controll-panel">
        <img class="album-cover" src="" alt="">
        <button><img class="prew" src="../assets/img/player_btn/forward_btn.svg" style="transform: scale(-1, 1);"></button>
        <button><img src="../assets/img/player_btn/scip_sec_btn.svg" style="transform: scale(-1, 1);" ></button>
        <button class="play" v-if = "!isPlaying" @click="play"><img   src="../assets/img/player_btn/start_btn.svg" ></button>
        <button class="pause" v-else @click="pause"><img  src="../assets/img/player_btn/pause_btn.svg"></button>
        <button><img src="../assets/img/player_btn/scip_sec_btn.svg"></button>
        <button><img class="next" src="../assets/img/player_btn/forward_btn.svg"  ></button>
      </div>


    </div>
    <h1>Home</h1>
    <i class="fas fa-play"></i>
    <p>This is home page</p>
  </main>
</template>

<script>

export default{
  name: 'HomeView',
  data() {
    
    return{
      current:{},
      index:0,
      isPlaying: false,
      audinfo:[
        {
          Artist: "Face", 
          S_name: "Supreme X Vetements", 
          audio_src: require('..\assets\temp\FACE - Supreme x Vetements.mp3'), 
        }
      ],
      player: new Audio()
    }
  },
  methods:{
    play(song){
      if(typeof song.src != "undefined"){
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
    },
    pause (){
      this.player.pause();
      this.isPlaying = false;
    }
  },
  created () {
    this.current = this.audinfo[this.index];
    this.player.src = this.current.src;
  }
}
</script>

<style lang="scss" >
  body{
    background-image: linear-gradient(to bottom,#563E24, rgba(0, 0, 0, 0.986));
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .player{
    background-image: url("../assets/img/player_background.svg");
    max-width: 1170px;
    max-height: 170px;
    object-fit: cover;
    margin: auto;
    font-size: 20px;
    color: white;
    box-shadow:  10px 10px 4px 7px rgba(0, 0, 0, 0.25), inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
  }
  button{
    background: none;
    border: none;
    margin: 30px;
    margin-top: 0px;
    margin-bottom: 10px ;
  }

  .album-cover{
    max-width: 100px;
    max-height: 100px;
  }
</style>

