<template>
  <main class="login">
    <srction class="forms">
      <h1 id="Login-txt">Вхід до акаунту</h1>
      <form action="">
        <div id="inpt">
          <input type="text" placeholder="Email"  name="Login" id="input">
          <br>
          <input type="text" placeholder="Пароль" name="Password" id="input">
          <div id="back-btn">
            <button id="login-btn">Login</button>
          </div>
          <a href="" id="link"><p >Немає аккаунту? Створіть його!</p></a>
        </div>
      </form>
    </srction>
  </main>
</template>

<script>
export default {

}
</script>

<style  require>
  body{
    background-image: url(../assets/img/Library1.png);
    
  }
  #Login-txt
  {
    position: absolute;
    width: 510px;
    height: 45px;
    left: 780px;
    top: 275px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 128%;
    text-align: center;
    letter-spacing: 0.085em;
    color: #FFFFFF;
  }

  #input
  {
    position: relative;
    width: 562px;
    height: 49px;
    font-size: 32px;
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
    margin-left: 20px;
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
    width: 100px;
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
    /* or 13px */
    text-align: center;
    letter-spacing: 0.085em;
    color: #FFFFFF;

  }


</style>