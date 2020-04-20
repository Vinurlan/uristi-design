<template>
    <div class="player">
        <audio ref="track" src="../../assets/audio/ove_melaa-dark_blue.ogg" type="audio/ogg"></audio>
        <div class="player__view">
            <button ref="btnPause" class="player__view_btn-play" @click="pauseBtnSwtch" > {{ pause ? "&#9658;" : "II" }} </button>
            <hSlider @emitpause="pauseChangeProc" @count="currProcess" :currcount="currTimeProc" />
            <button class="player__view_btn-volume" @click="volumeBtnHandler" >V</button>
            <div v-if="showVolume" class="player__view_volume">
                <vSlider :propVolume="volumeLevel" @count="volumeChange" />
            </div>
        </div>
    </div>
</template>

<script>
import hSlider from "./hSlider"
import vSlider from "./vSlider"


export default {
    name: "Player",
    components: {
        hSlider, vSlider
    },
    data() {
        return {
            currTimeProc: 0,
            pause: true,
            showVolume: false,
            volumeLevel: 0.5,
            interval: Function
        }
    },
    mounted() {
        this.$refs.track.volume = this.volumeLevel
    },
    methods: {
        volumeChange(count) {
            this.volumeLevel = count / 100
            this.$refs.track.volume = this.volumeLevel
        },

        currProcess(count) {
            this.currTimeProc = count
            this.$refs.track.currentTime = this.currTimeProc * this.$refs.track.duration / 100
        },

        pauseBtnSwtch() {
            this.pause = !this.pause
            this.pauseHandler()
        },
        pauseChangeProc(bool) {
            this.pause = bool
            this.pauseHandler()
        },
        pauseHandler() {
            if (!this.pause) {
                this.$refs.btnPause.classList.add("active")

                this.$refs.track.play()
                this.interval = setInterval(() => this.timeRate(), 1000)
            } else {
                this.$refs.btnPause.classList.remove("active")

                this.$refs.track.pause()
                clearInterval(this.interval)
            }
        },
        volumeBtnHandler(e) {
            this.showVolume = !this.showVolume

            if (this.showVolume) {
                e.target.classList.add("active")
            } else {e.target.classList.remove("active")}
        },
        timeRate() {
            this.currTimeProc = 100 * this.$refs.track.currentTime / this.$refs.track.duration
            
            if (this.$refs.track.currentTime >= this.$refs.track.duration) {
                this.pauseBtnSwtch()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/styles.scss";

.player {
    width: 400px;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
    border-radius: 19px;

    audio {
        width: 100%;
    }

    &__view {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        button {
            width: 30px;
            height: 30px;
            background: none;
            border: none;
            font-size: 18pt;
            color: #808080;
        }
        button:focus {
            outline: none;
        }
        .active {
            color: $yellow;
        }

        &_volume {
            width: 45px;
            height: 130px;
            background: #FFFFFF;
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.06);
            border-radius: 19px;
            position: absolute;
            top: -135px;
            right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

</style>