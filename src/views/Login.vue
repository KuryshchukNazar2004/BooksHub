<template>
  <main>
    <div class="content_signIn">
      <div class="main_title">Вхід до аккаунта</div>
      <div class="signIn-form">
        <input type="text" placeholder="Email" v-model="email" class="input-form"/>
        <input type="password" placeholder="Password" v-model="password" class="input-form"/>
        <button @click="register" class="submit">Submit</button>
        <a href="/registration" class="link"><p >Немає аккаунту? Створіть його!</p></a>
      </div>
    </div>
  </main>
</template>
   
<script setup>
    import{ref} from "vue";

    import{getAuth, signInWithEmailAndPassword} from "firebase/auth";
    // import { useRouter } from 'vue-router'

    const email = ref("");
    const password = ref("");
    //const router = useRouter();

    const register = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully signed in!");
            console.log(auth.currentUser);
            document.location.href="/home";
        }) 
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
    };
    // const signInWithGoogle = () => {

    // };
</script>

<style lang="scss">
 body{
    background-image: url(../assets/img/Library1.png);   
  }
  .content_signIn{
    margin: auto 10px;
  .main_title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 128%;
    text-align: center;
    letter-spacing: 0.085em;
    color: #FFFFFF;
  } 
  .signIn-form{
    display: grid;
    margin-top: 20px;
    justify-content: center;
    .input-form{
      display: block;
      font-size: 32px;
      margin: 50px;
      background: #FFFFFF;
      max-width: 500px;
    }
    .submit{
      font-family: 'Roboto';
      padding-bottom: 20px;
      text-align: center;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 0.085em;
      color: #FFFFFF;
      background:#333;
      padding: 10px;
      
    }
    .link{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 128%;
      text-align: center;
      letter-spacing: 0.085em;
      color: #FFFFFF;
      margin-top: 20px;
    }
  } 
  }
  
</style>