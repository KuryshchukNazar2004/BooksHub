<template>
  <main class="login">
    <srction class="forms">
      <h1 id="Login-txt">Створіть обліковий запис і почніть читати</h1>
      <form action="">
        <div id="inpt">
          <input type="text" placeholder="Email" class="input" v-model="email" />
          <input type="password" placeholder="Password" class="input"  v-model="password"  />
          <div id="back-btn">
            <button @click = "register" id="login-btn">Зареєструватися</button>
          </div>
          <a href="/Login" id="link"><p >У вас вже є обліковий запис?</p></a>
        </div>
      </form>
    </srction>
  </main>
</template>
   
<script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  const email = ref("");
  const password = ref("");
  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
    })
    .catch((error) => {
      console.log(error.code)
    }
  )}
</script>

<style>
 body{
    background-image: url(../assets/img/Library1.png);
    
  }
  #Login-txt
  {
    position: absolute;
    width: 510px;
    height: 45px;
    left: 780px;
    top: 225px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 128%;
    text-align: center;
    letter-spacing: 0.085em;
    color: #FFFFFF;
  }

  .input
  {
    position: relative;
    width: 562px;
    height: 49px;
    margin: 50px;
    background: #FFFFFF;
  }

  #inpt 
  {
    text-align: left;
    position: absolute;
    left: 700px;
    top: 300px;
    justify-content: space-around;
    text-align: center;
    vertical-align: bottom;
    width: 500px;
    height: 500px;
  }

  #login-btn
  {
    position: absolute;
    max-width: 215px;
    max-height: 33px;
    margin-left: 13px;
    font-family: 'Roboto';
    padding-bottom: 20px;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.085em;
    color: #FFFFFF;
  }

  #back-btn
  {
    text-align: left;
    background: linear-gradient(237.2deg, #9C2727 27.48%, rgba(156, 39, 39, 0) 138.81%);
    width: 200px;
    margin-left: 50px;
    height: 30px;
  }
  #link
  {
    position: absolute;
    width: 182px;
    height: 12px;
    left: 45px;  
    top: 350px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 128%;
    text-align: center;
    letter-spacing: 0.085em;
    color: #FFFFFF;

  }

</style>