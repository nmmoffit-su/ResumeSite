<template>
  <div id="app">
    <div class="navigation-row">
      <div class="brand">
        <router-link class="links" to="/">
          <strong>Web Development</strong>
        </router-link>
      </div>
      <nav>
        <router-link class="links" :to="{ name: 'work' }">Work</router-link>
        <router-link class="links" :to="{ name: 'edu' }">Education</router-link>
        <router-link class="links" :to="{ name: 'port' }">Portfolio</router-link>
        <router-link class="links" :to="{ name: 'contact' }">Contact</router-link>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  font-family: 'Questrial', sans-serif;
  margin: 0;
}

.navigation-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 24px;
}

.links {
  text-decoration: none;
  padding-right: 10px;
  color: #ccc;
  transition: 0.5s;
}

.links:hover {
  color: #fff;
  transition: color 0.5s;
}

.nav-links {
  display: none;
}

.router-link-active {
  color: #fff;
}

.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 90vh;
  width: 100%;
  left: 50%;
  font-size: 9vw;
  color: #ccc;
  opacity: 1;
}

body {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../public/bkgd.jpg');
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: table;
}

.header {
  border-right: 0.1em solid #fff;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 24px;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 5px;
  -webkit-animation: typing 4s steps(100, end) 1s 1 normal both,
    blink-caret 0.5s step-end infinite alternate;
}

.hero a {
  text-decoration: none;
  color: #ccc;
  font-size: 3vw;
  padding: 10px 20px;
}

.employer {
  color: #ccc;
  padding-top: 5px;
  text-align: center;
}

.apps {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.apps a {
  border: 25px solid transparent;
}

.apps img {
  height: 200px;
}

.sidearm {
  background-color: #283b4c;
  border-radius: 25px;
  padding: 10px;
  transition: 0.5s;
}

.sidearm:hover {
  background-color: #000;
  transition: 0.5s;
}

.sidearmsports {
  background-color: #283b4c;
  color: #fff;
}

.text {
  border-radius: 25px;
  height: 175px;
  width: 750px;
  margin: 15px;
}

.job-title {
  padding-top: 20px;
  font-weight: 900;
}

.cuse .job-title,
.sidearmsports .job-title {
  padding-left: 25px;
}

.job-description li {
  line-height: 30px;
}

.syracuse {
  background-color: #fff;
  border-radius: 25px;
  padding: 10px;
  transition: 0.5s;
}

.cuse {
  background-color: #fff;
}

.app-bkgd {
  margin: 0 25px 0 25px;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 45vh;
}

.syracuse:hover {
  background-color: #000e54;
  transition: 0.5s;
}

.syracuse img {
  height: 200px;
}

.reddragons {
  background-color: #222;
  color: #fff;
  text-align: center;
}

.reddragons ul {
  list-style: none;
}

.cortland {
  background-color: #222;
  border-radius: 25px;
  padding: 10px;
  transition: 0.5s;
}

.cortland:hover {
  background-color: #fff;
  transition: 0.5s;
}

.cortland img {
  height: 200px;
}

.cortland-text {
  border-radius: 25px;
  background-color: #222;
  color: #fff;
  height: 175px;
  width: 100%;
  margin: 15px;
}

.reddragons .job-title {
  padding: 20px 20px 0 20px;
}

.cortland-link {
  text-align: center;
  padding-top: 15px;
  font-weight: 100;
}

.cortland-link a {
  color: #fff;
}

.edu-app {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 450px;
}

.contact {
  border-radius: 5px;
  border: solid 1px #ddd;
  transition: 1s;
}

.contact:hover {
  background-color: #ddd;
  color: #444;
  transition: color 1s;
  transition: background-color 0.5s linear;
}

.github i {
  padding: 10px;
  border-radius: 25px;
}

.apps i:hover {
  transition: color 0.5s;
  transition: background-color 0.5s linear;
  cursor: pointer;
}

.github i {
  background-color: #fff;
  color: #6e5494;
  font-size: 205px;
  transition: 0.5s;
}

.github i:hover {
  background-color: #6e5494;
  color: #fff;
  transition: 0.5s;
}

.linkedin {
}

.linkedin i {
  background-color: #0077b5;
  font-size: 200px;
  padding: 15px 15px 0 15px;
  border-radius: 25px;
  color: #fff;
  transition: 0.5s;
}

.linkedin i:hover {
  background-color: #fff;
  color: #0077b5;
}

.phone i {
  background-color: #5bc236;
  font-size: 180px;
  padding: 15px;
  border-radius: 25px;
  color: #fff;
  transition: 0.5s;
}

.phone i:hover {
  background-color: #fff;
  color: #5bc236;
}

.phone-text {
  background-color: #fff;
  color: #000;
  height: auto;
  text-align: center;
}

.phone-text .job-title {
  padding: 20px 0 20px 0 !important;
}

.mail i {
  background-color: #5fc9f8;
  font-size: 180px;
  padding: 15px;
  border-radius: 25px;
  color: #fff;
  transition: 0.5s;
}

.mail i:hover {
  background-color: #fff;
  color: #5fc9f8;
}

.titles {
  color: #fff;
  font-size: 6vw;
}

a img {
  display: inline;
}

li a:hover {
  color: #fff;
}

i {
  color: #ccc;
}

.sidearmtext {
  color: #fff;
}

.cusetext {
  color: #fff;
}

.card img {
  padding: 20px;
  width: 100%;
  height: auto;
}

.contact-apps .text {
  height: auto;
}

.smimgmargin {
  margin-top: 100px;
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}

@media only screen and (min-width: 1440px) {
}

@media only screen and (max-width: 1440px) {
  .hero a {
    font-size: 5vw;
  }

  .port-apps .github i {
    justify-content: center;
  }
}

@media only screen and (max-width: 1024px) {
  .employer-container {
    display: none;
  }

  .app-container {
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    height: auto;
    margin-bottom: 15px;
  }

  .apps {
    height: 80vh;
  }

  .edu-apps .app-container {
    height: auto;
    margin-bottom: 15px;
  }

  .apps a {
    border: none;
  }

  .employers-apps .app-bkgd {
    height: auto;
  }

  .apps img {
    width: 145px;
    height: 145px;
  }

  .text-container {
    width: 95%;
    margin-right: 15px;
  }

  .contact-apps .text-container {
    display: flex;
    justify-content: center;
  }

  .contact-apps .text {
    width: 700px;
  }

  .text {
    display: block !important;
    margin: 0 0 10px 0;
    height: 169px;
    width: 100%;
    transition: none;
  }

  .apps i {
    width: 155px;
    height: 155px;
    font-size: 155px;
  }

  .contact-apps .job-title {
    padding: 0;
  }

  .apps .linkedin i {
    font-size: 175px;
    padding-bottom: 15px;
  }

  .smimgmargin {
    margin-top: 0px;
  }
}

@media only screen and (max-width: 767px) {
  .apps {
    flex-direction: column;
  }

  .app-bkgd {
    margin: 0 10px 0 10px;
  }

  .app-container {
    flex-direction: row;
    height: auto;
  }

  .app-bkgd:last-of-type {
    padding-right: 0;
  }

  .text {
    width: 99%;
  }

  .text-container {
    flex-direction: row;
    width: 90%;
    margin: 0;
  }
  .port-header {
    padding-top: 24px;
  }

  .apps {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .contact-apps .text {
    width: 400px;
  }
}

@-webkit-keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 72%;
  }
}
@-webkit-keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
</style>