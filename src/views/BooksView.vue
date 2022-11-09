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
            <a :href="book.booksSrc">
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
              </a>
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
                    name: "Fire & Blood(HBO Tie-in Edition)",
                    artistName: "George R. R. Martin",
                    year: 2018,
                    src:`https://m.media-amazon.com/images/I/41Eq1ijtvoL._AC_SY780_.jpg`,
                    booksSrc: `https://bayanbox.ir/view/7180403888021907863/Fire-and-Blood-Fantasya.pdf`
                },
                {
                    id: 2,
                    name: "I'm Glad My Mom Died",
                    artistName: "Jennette McCurdy",
                    year: 2022,
                    src:`https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQB034RmhgILkq3GKysPUOagC_1ERIna8edjzgoyaOFYcZFLimC`,
                    booksSrc: `https://www.pdffilestore.com/wp-content/uploads/2022/08/Im-Glad-My-Mom-Died-By-Jennette-Mccurdy.pdf`
                },
                {
                    id: 3,
                    name: "Atomic Habits",
                    artistName: "James Clear",
                    year: 2018,
                    src:`https://static.yakaboo.ua/media/catalog/product/9/7/9781847941831.jpg`,
                    booksSrc: `https://ia803401.us.archive.org/3/items/atomic-habits_202104/Atomic%20Habits.pdf`
                },
                {
                    id: 4,
                    name: "Where the Crawdads Sing",
                    artistName: "Delia Owens",
                    year: 2018,
                    src:`https://cdn.waterstones.com/bookjackets/large/9781/4721/9781472154668.jpg`,
                    booksSrc: `https://ia803106.us.archive.org/27/items/wherethecrawdadssing/Where-the-Crawdads-Sing.pdf`
                },
                {
                    id: 5,
                    name: " IT",
                    artistName: "Staphen King",
                    year: 1986,
                    src: `https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982127794/it-9781982127794_hr.jpg`,
                    booksSrc: `http://englishonlineclub.com/pdf/Stephen%20King%20-%20It%20%5BEnglishOnlineClub.com%5D.pdf`
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
  html{
    
    text-decoration: none;
  }
  a{
    text-decoration: none;
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
 &__content,a{
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
.books__name_desc
{
  color: black;
  text-decoration: none;
}
}
</style>