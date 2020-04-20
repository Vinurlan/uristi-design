<template>
    <div class="video">
        <div class="video-title">Посмотрите, что о нас говорят наши клиенты</div>
        <div class="video__player">
            <button ref="vidLeft" class="video__player-btn_left col_y" @click="switchVideo">&larr;</button>
            <div class="video__player-view">
                <iframe 
                    width="100%" 
                    height="100%" 
                    :src="dest[currDest]" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>
            <button ref="vidRight" class="video__player-btn_right col_y" @click="switchVideo">&rarr;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Video",
    data() {
        return {
            currDest: 0,
            dest: [
                "",
                "https://www.youtube.com/embed/Ym5-7wr0KVI",
                "https://www.youtube.com/embed/EAp6M8Ln4Ug",
                "https://www.youtube.com/embed/N70w91TK9AQ"
            ]
        }
    },
    methods: {
        switchVideo(e) {
            let dir = 0;
            if (e.target === this.$refs.vidLeft) {
                dir = -1
            } else if (e.target === this.$refs.vidRight) {dir = 1}
            
            this.currDest += dir
            if (this.currDest < 0) {
                this.currDest = this.dest.length - 1
            } else if (this.currDest === this.dest.length) {
                this.currDest = 0
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.video {
    width: 1500px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 5;

    &-title {
        width: 600px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
        text-align: center;
        color: #0F1129;
    }

    &__player {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        button {
            background: none;
            border: none;
            margin: 0 20px 0;
            font-size: 40pt;
        }

        &-view {
            width: 1280px;
            height: 720px;
            background: rgb(247, 247, 247);
        }
    }
}

</style>