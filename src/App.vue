<template>
  <div id="app">
    <HeaderInfo @showform="showMadalFormHandler" />
    <Header @showform="showMadalFormHandler"/>
    <Incomes />
    <Process />
    <Cool />
    <Audio />
    <Honestly />
    <Video />
    <Presentation @showmadal="showMadalThanksHandler" />
    <HelpCalc />
    <Cities />
    <Packets />
    
    <Form v-if="showMadalForm" @showform="showMadalFormHandler" @showmadal="showMadalThanksHandler" />
    <Thanks v-if="showMadalThanks" @showmadal="showMadalThanksHandler" />
  </div>
</template>

<script>
import Header from "./components/Header"
import HeaderInfo from "./components/HeaderInfo"
import Incomes from "./components/Incomes"
import Process from "./components/Process"
import Cool from "./components/Cool"
import HelpCalc from "./components/HelpCalc"
import Presentation from "./components/Presentation"
import Thanks from "./components/Madal/Thanks"
import Form from "./components/Madal/Form"
import Cities from "./components/Cities"
import Video from "./components/Video"
import Honestly from "./components/Honestly"
import Audio from "./components/Audio"
import Packets from "./components/Packets"

export default {
  name: 'App',
  components: {
    Header, HeaderInfo, Incomes, 
    Process, Cool, HelpCalc, 
    Presentation, Thanks, Form,
    Cities, Video, Honestly,
    Audio, Packets
  },
  data() {
    return {
      showMadalThanks: false,
      showMadalForm: false
    }
  },
  methods: {
    showMadalThanksHandler(bool) {
      this.showMadalThanks = bool
    },
    showMadalFormHandler(bool) {
      this.showMadalForm = bool
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex; 
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}


// @media (min-width: 1920px) {
//   #app {
//     width: 100%;
//   }
// }

// @media (min-width: 1200px) {
//   #app {
//     width: 1920px;
//   }
// }

// @media (min-width: 992px) and (max-width: 1199px) {
//   #app {
//     width: 1080px;
//   }
// }

// @media (min-width: 768px) and (max-width: 991px) {
//   #app {
//     width: 720px;
//   }
// }

// @media (max-width: 767px) {
//   #app {
//     width: 480px;
//   }
// }

</style>
