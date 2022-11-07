<template>
<audio 
    v-bind:src="song.songSrc" 
    preload="auto" 
    autoplay 
    ref="audioPlayer" 
/>
<div class="audio_content">
    <div>
        <button v-on:click="goback" class="back">Back</button>
    </div>
    <div class="main_content"> 
        <div>
            <img 
            class="rounded"
            v-bind:src="song.src" 
            />
            <div class="text-content">
                <p>{{ song.name }}</p>
                <p>{{ song.artistName }}</p>
                <p>{{ song.year }}</p>
            </div>
        </div>
        <div class="playing-text">
            <div class="player-poss">
                <button v-on:click="previous">Previous</button>
            </div>
            <div class="player-poss">
                <button class="playing-button" v-on:click="togglePlay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
            </div>
            <div class="player-poss">
                <button v-on:click="next">Next</button>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
export default {
    data(){
        return{
            isPlaying: true
        }
    },
    name:'AudioPlayer',
    props:{
       song:{
                id: Number,
                name: String,
                artistName: String,
                year: Number,
                songSrc: String
       } 
    },
    emits:['goback', 'next', 'previous'],
    methods:{
        goback(){
            this.$emit('goback');
        },
        togglePlay(){
            if(this.isPlaying){
                this.$refs.audioPlayer.pause();
            }else{
                this.$refs.audioPlayer.play();
            }

            this.isPlaying = !this.isPlaying;
        },
        next(){
            this.$emit('next');
        },
        previous(){
            this.$emit('previous');
        },

    }
}
</script>

<style lang="scss">
.audio_content{
    margin-left: 10%;
    margin-right: 10%;
}
.back{
    margin-top: 20px;
    font-size: 20px;
}
.main_content{
    text-align: center;
}
.rounded{
    margin-top: 8px;
    margin-bottom: 4px;
    width: 200px;
}
.playing-button{
    background: yellow;
    height: 6rem;
    width: 6rem;
    font-weight: bold;
    border-radius: 100%;
    font-size: 20px;
}
.playing-text{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 10px;
}
.player-poss{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
