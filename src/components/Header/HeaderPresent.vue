<template>
    <div class="header__present">
        <div class="header__present-text">
            <span class="header__present-text-title">Как тебе такое, <p class="col_y">Илон Маск?!</p></span>
            <span class="header__present-text-content">Юридическая франшиза с окупаемостью от <span class="bg_y col_w">10 месяцев</span><br> и стартовым капиталом от 400 000 руб.</span>
            <button @click="showForm" class="btn_red-bg">Стать партнёром</button>
        </div>
        <img src="" alt="" class="header__present-img">
    </div>
</template>

<script>
export default {
    name: "HeaderPresent",
    methods: {
        showForm() {
            this.$emit("showform", true)
        }
    }
}
</script>

<style lang="scss" scoped>

.header__present {
    position: relative;
    grid-area: a;
    width: 100%;
    height: 589px;
    // background: #888;
    display: flex;
    justify-content: start;
    text-align: left;

    &-text {
        z-index: 1;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;

        &-title {
            font-family: Montserrat;
            font-weight: bold;
            font-size: 50pt;

            p {
                margin: 0;
            }
        }

        &-content {
            font-size: 18pt;
            font-weight: 600;

            span {
                margin: 0;
                padding: 5px;
            }
        }

        button {
            font-size: 20pt;
            font-weight: 600;
            width: 326px;
            height: 76px;
        }
    }

    &-img {
        position: absolute;
        top: 0;
        left: 520px;
        width: 841px;
        height: 100%;
        background: url("../../assets/img/happyman.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
    
}


@media (max-width: 767px) {
    .header__present {
        position: relative;
        grid-area: a;
        width: 100%;
        height: 300px;
        // background: #888;
        display: flex;
        justify-content: start;
        text-align: left;

        &-text {
            z-index: 1;
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: start;

            &-title {
                font-family: Montserrat;
                font-weight: bold;
                font-size: 34px;

                p {
                    margin: 0;
                }
            }

            &-content {
                font-size: 16px;
                font-weight: 600;
                line-height: 140%;

                span {
                    margin: 0;
                    padding: 5px;
                }
            }

            button {
                font-size: 12px;
                font-weight: 600;
                width: 164px;
                height: 38px;
                align-self: center;
            }
        }

        &-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 238px;
            height: 167px;
            background: url("../../assets/img/happyman.png");
            background-repeat: no-repeat;
            background-size: cover;
        }
        
    }
}

</style>