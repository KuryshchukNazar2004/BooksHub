<template>
  <div class="books">
    <h1 class="books__main_title">Книги Бестселери</h1>
    <h3 class="books__title_desc">Найпопулярніші художні та публіцистичні книги Нью-Йорка. 25 вересня 2022 р.</h3>  
    <div class="books__pos_catalog">
      <div class="books__mistic">
        <div class="books__container">
          <h1 class="books__main_title">Класика</h1>
          <div class="books__contain">
            <div class="books__list">
              <div 
              v-for="(book,songIndex) in list" v-bind:key="book.id"
              v-on:click="playSong(songIndex)"
                class="books__content"
              >
                <div>
                  <img
                    class="books__img_books"
                    v-bind:src="book.src"
                  />
                </div>  
                <div class="books__general_desc">
                  <span class="books__name">{{ book.name }}</span>
                  <br/>
                  <span class="books__name_desc">{{ book.artistName }} - {{ book.year }}</span>
                </div>
                </div> 
              </div>
            </div>
        </div>
      </div>
      
    </div>
  </div>
  
</template>

<script>
// import { url } from 'inspector';


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
                    src: `https://s3-alpha-sig.figma.com/img/e0e3/ca33/da553dd31e78dcafb3c3395ee2c81236?Expires=1665964800&Signature=K3X33BGRnpfarVse4jD3f0NLrPl1gX-F2ixs6ian8aQ47K-hQdwPGVn9jOW-rRhGkc-ihqKc1AwaNlDH6Ea2JdUoj-kc0NorO9DdEMwuieY7978dz63GJlDWeJJ8-EVCPJXZOfCfzJGVyiQM4cd9jv3tKSzabNHxTiazLgHPX8YzwygmV8knlSwafspF6Qk9e46dKkYV66A~6UyK0o1dhoqO0bByYqQKJt2b0uP7FrRBg1nmiRgr9jit2-I64GoTAwTgYf-HN5WOAvdRzpwxEvdWZK6j8OCOmptsDfh3m8psQVxo6CBMBu-ThI5w0TPVuVbh01JlnucCLo6wFw~7LQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`,
                    booksSrc: `https://booknet.ua/reader/vse-taki-stinna-b408574`
                },
                {
                    id: 2,
                    name: "I'm Glad My Mom Died",
                    artistName: "Jennette McCurdy",
                    year: 2022,
                    src:`https://s3-alpha-sig.figma.com/img/80ab/16b7/867f804e3e9fbb2bd46a7f084399f662?Expires=1665964800&Signature=EJqKdir1fh1jAcpbOvij~fLnzCA~4aIM-y5eZnGlvqbkQhLy8GOFPb3LZhnnPivlSWpiqBFRA9ejlgjm3B3NG~aYimn27kpqTQa6mb3Hgy~nYQQpDVljBsOoFHOCeVw98eXtYWWECf6vcL9qyLbsdKCFJx-IGt1PRfgj1W5JnByhLddX2-yQnJqaZoU~7yTwzHqQsQ2QoeypzQwDM0xDguCQEWEsP16yg0FpY3~BZweUMhlejlaKp2N7BgiB86vj07ntBeDFTpl6SeNfrEjYL2y0A2Js8l7g-uEeTg6u3cdKxn6-a07wdO1OaC9usyMZAO9YymzJ~4HYi46fgyuWmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`,
                    booksSrc: `https://ipaudio3.club/wp-content/uploads/STEPHEN/Fairy%20Tale%20(Stephen%20King)/01.mp3`
                },
                {
                    id: 3,
                    name: "Atomic Habits",
                    artistName: "James Clear",
                    year: 2018,
                    src:`https://s3-alpha-sig.figma.com/img/a5b7/614f/3833d1e62a2f6203036ed125fcb01eda?Expires=1665964800&Signature=EJML8aQIfpuIRir4Yu-S0dS5y9UB5pxntF44j76XP4NPWrjKcQompEWpHGpW4zkSAI~B4uNt-nDdQa9bwYNgaFEYguFCF5VO8~Hsn24C8jFcHrR4JS8Fz57inqBnVGXSqOQSnUKoaadY~ycnQswgh50DT3y3AGRy9Ig4Mo6rcIkqUkdf87uvSRozXEdHrXJH15DNWa1Dk~mt1NMgFdsRCprNSMV5wXbt5yxv8YiSxCGEFHc3Jc~Y8oZdnVIj0BIjO7p~ZEY8tHF3FqrG6ZinJRDyRBvShYcxSE2mJJeO2nq2eEox6-VkZNaI0nLzVasI99MqJoiHV-gdM3kufvGJkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`,
                    booksSrc: `https://filedn.com/lEu1SP9BiLn57JufynR40om/audiobooks/narnia%20book%205/Book%205%201.mp3`
                },
                {
                    id: 4,
                    name: "Where the Crawdads Sing",
                    artistName: "Delia Owens",
                    year: 2018,
                    src:`https://s3-alpha-sig.figma.com/img/2518/2ebb/d360d3eabe20abe9a8bfe9c957dfc498?Expires=1665964800&Signature=AtiAnEIhvxg48xwkHiv-6rP5wmRyM-jjLyQJfzK1Tw-20m6A42p6tAIL9GyY1Jyt9zv8Ndhtrg2N6s~aGCQ8db~nXINOek5MwSVCwE6yKYcsoamfomnQnuDRNIpX-9Zu9g0K1BK7S-qHI75ZdphKVUoSIAJ3FdCrcPSkJ3BosH0vtPBAmu1JBQStjx9N4EPYYekQZ7FVCkXluJAbqETcmTyQk3xX1o9dwsViBObXv7YVR12WHN~cprLyr9SqZBvrq4XZA7SVhwx-ld5g-L~Nzq0OhrPrtPh25vFRgudYqKr-PaybPIBMaSKN8z8ybprmSgmNqT78CCRAPJ9e8O6N8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`,
                    booksSrc: `https://ipaudio3.club/wp-content/uploads/STEPHEN/Fairy%20Tale%20(Stephen%20King)/01.mp3`
                },
                {
                    id: 5,
                    name: "Fire & Blood(HBO Tie-in Edition)",
                    artistName: "George R. R. Martin",
                    year: 2018,
                    src:`https://freeaudiobooksonline.net/wp-content/uploads/2022/08/The-Chronicles-of-Narnia-audiobook-5-The-Horse-and-His-Boy.jpg`,
                    booksSrc: `https://open.spotify.com/track/1k0UHV7u1Myfo4wBgjr4CS?si=ab040e64e8ca4d2c`
                },
            ]
        };
    },
    // methods:{
    //   showBooks:function(){
    //     url("booksSrc")
    //   },
    // },
    // name: "books"
}
</script>

<style lang="scss" require>
.books{
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
 &__list{
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
    font-family: 'Kyiv*Type Serif';
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