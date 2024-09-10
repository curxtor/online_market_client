<template>
  <header>
    <div class='logo' @click='$router.push("/")'>
      <img alt="Vue logo" src="./assets/logo.png" style="width:100%;">
    </div>
    <div class='catalog'>
      <svg id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m436.959 146.002h-276.949c-8.284 0-15-6.716-15-15s6.716-15 15-15h276.949c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="black"/></g><g><path d="m436.959 271h-276.949c-8.284 0-15-6.716-15-15s6.716-15 15-15h276.949c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="black"/></g><g><path d="m436.959 395.992h-276.949c-8.284 0-15-6.716-15-15s6.716-15 15-15h276.949c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="black"/></g><g><path d="m105.723 131.002c0 8.474-6.858 15.346-15.342 15.346-8.463 0-15.34-6.872-15.34-15.346 0-8.473 6.877-15.34 15.34-15.34 8.483 0 15.342 6.867 15.342 15.34z" fill="black"/></g><g><path d="m105.723 256c0 8.474-6.858 15.34-15.342 15.34-8.463 0-15.34-6.866-15.34-15.34 0-8.473 6.877-15.346 15.34-15.346 8.483 0 15.342 6.873 15.342 15.346z" fill="black"/></g><g><path d="m105.723 380.992c0 8.475-6.858 15.346-15.342 15.346-8.463 0-15.34-6.871-15.34-15.346 0-8.473 6.877-15.34 15.34-15.34 8.483 0 15.342 6.868 15.342 15.34z" fill="black"/></g></g></svg>
    </div>
    <div class='search'>
      <input type='search' name='search'/>
    </div>
    <div class='cart'>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width='32'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
  </header>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 70%;
  margin: 0 auto;

}
p {
  margin: 0;
}

header {
  display: grid;
  grid-template-columns: 1fr 0.5fr 4fr 1fr;
  align-items: center;
  margin-top: 20px;
}
.logo {
  width: 100px;
  cursor: pointer;
}
.cart {
  justify-self: center;
  background-color: rgb(255, 255, 255);
    border-radius: 15px;
    width: 20%;
    height: 30%;
    display: flex;
    justify-content: center;
}
.catalog {
  width:3vw;
  height: 6vh;
  border: 2px solid black;
  border-radius: 15px;
  margin: 0 auto;
}
.search {
  width:80%;
  height:60%;
  justify-self: center;
  display: grid;
  align-items: center;
  border: 2px solid #d3d3d3;
  border-radius: 15px;

}
.search input{
  outline: none;
  border-width: 0px;
  font-size: 1.5vw;
  margin: 5px;
}
</style>
