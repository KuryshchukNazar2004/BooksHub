<template>
    <Sidebar/>
  <div class="audio">
    <h1 class="audio__main_title">Аудіо - Книги Бестселери</h1>
    <h3 class="audio__title_desc">Шукаєте наступне чудове прослуховування? <br> Почніть із топ-100 бестселерів. </h3>  
    <div class="audio__books">
      <div class="audio__container">
        <div class="audio_contain">
          <div v-if="!isPlayerVisible" class="audio__list">
            <div 
              v-for="(song, songIndex) in list" v-bind:key="song.id"
              v-on:click="playSong(songIndex)"
              class="audio__content"
            >
              <div>
                <img
                  class="audio__img_books"
                  v-bind:src="song.src"
                />
              </div>  
              <div class="audio__general_desc">
                <span class="audio__name">{{ song.name }}</span>
                <br/>
                <span class="audio__name_desc">{{ song.artistName }} - {{ song.year }}</span>
              </div>
              </div> 
            </div>
          </div>
         <div v-if="isPlayerVisible">
            <AudioPlayer
              v-bind:song="list[currentSongIndex]"
              @goback="isPlayerVisible = !isPlayerVisible"
              @next = "playNext"
              @previous="playPrevious"
            />
          </div>
      </div>
    </div>
     
  </div>
  
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue';

</script>

<script>
import AudioPlayer from "./Audio/AudioPlayer.vue";

export default{
    data() {
        return {
            isPlayerVisible: false,
            currentSongIndex:0,
            list: [
                {
                    id: 1,
                    name: " Fairy Tale",
                    artistName: "Staphen King",
                    year: 2022,
                    src: `https://freeaudiobooksonline.net/wp-content/uploads/2022/08/The-Chronicles-of-Narnia-audiobook-5-The-Horse-and-His-Boy.jpg`,
                    songSrc: `https://freeaudiobooksonline.net/audio-book/narnia-5/1.mp3`
                },
                {
                    id: 2,
                    name: "MIND BULLET",
                    artistName: "Jeremy Robynson",
                    year: 2022,
                    src:'https://goldenaudiobook.b-cdn.net/wp-content/uploads/2022/10/59144943._SY475.jpg',
                    songSrc: `https://ipaudio.club/wp-content/uploads/GOLN/NOS4A2/01.mp3?_=1`
                },
                {
                    id: 3,
                    name: "SANDMAN",
                    artistName: "James Clear",
                    year: 2018,
                    src:`https://goldenaudiobook.b-cdn.net/wp-content/uploads/2022/10/41ejcmrWZL._SX310_BO1204203200.jpg`,
                    songSrc: `https://ipaudio.club/wp-content/uploads/GOLN/Sandman%20Act%20II%20(Neil%20Gaiman)/01.mp3?_=1`
                },
                {
                    id: 4,
                    name: "Making History",
                    artistName: "Stephen Fry",
                    year: 2018,
                    src:`https://goldenaudiobook.b-cdn.net/wp-content/uploads/2022/10/41014989._SY475.jpg`,
                    songSrc: `https://ipaudio.club/wp-content/uploads/GOLN/Making%20History%20(Stephen%20Fry)/01.mp3?_=1`
                },
                {
                    id: 5,
                    name: "The Housemaid",
                    artistName: "Freida McFadden",
                    year: 2018,
                    src:`https://goldenaudiobook.b-cdn.net/wp-content/uploads/2022/10/60556912._SY475.jpg`,
                    songSrc: `https://ipaudio.club/wp-content/uploads/GOLN/Housemaid%20(Freida%20McFadden)/01.mp3?_=1`
                },
            ]
        };
    },
    methods:{
      playSong(index){
        this.currentSongIndex = index;
        this.isPlayerVisible = true;
      },
      playNext(){
        if(this.currentSongIndex < this.list.length - 1){
          this.currentSongIndex += 1;
        } else{
          this.currentSongIndex = 0;
        }
      },
      playPrevious(){
        if(this.currentSongIndex != 0){
          this.currentSongIndex -= 1;
        } else{
          this.currentSongIndex = this.list.length - 1;
        }
      },
    },
    name: "audio",
    components: { AudioPlayer }
}
</script>

<style lang="scss" require>
.audio{
    margin:0 auto;
  &__main_title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #BD3737;
  }
  &__title_desc{
    font-family: 'Kyiv*Type Serif';
    font-style: normal;
    font-weight: 350;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #FFFFFF;

  }
 &__books{
    background: rgba(107, 107, 107, 0.6);
  }
  &__title{
    color:#BD3737;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  }
  &__contain{
    margin-left: 5%;
  }
  &__name{
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 350;
    text-align: left;
    margin-left: 10px;
    max-width: 150px;
    color: #ffffff;
  }

 &__img_books{
  margin-top: 20px;
  width: 150px;
  height: 200px;
 }
 &__content{
  text-align: center;
  width:200px;
  cursor: pointer;
 }
&__general_desc{
  margin-left: 20px;
}
&__list {
  display: flex;         
  flex-direction: row;    
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
}
}
</style>