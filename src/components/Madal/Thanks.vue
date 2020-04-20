<template>
    <div class="thanks">
        <div class="thanks__madal">
            <div class="thanks__madal-text">Спасибо, ваша заявка отправлена!</div>
            <div class="thanks__madal_button">
                <div class="thanks__madal_button-how">Долго ждать?</div>
                <div class="thanks__madal_button-now">Наберите нас прямо сейчас</div>
            </div>
            <button class="thanks__madal-close" @click="closeMadal">X</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Thanks",
    methods: {
        closeMadal() {
            this.$emit("showmadal", false)
        }
    }
}
</script>

<style lang="scss">

.thanks {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;


    &__madal {
        width: 750px;
        height: 530px;
        background: #FBC866;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
        border-radius: 19px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;

        &-close {
            position: absolute;
            top: 0;
            right: 0;
            margin: 20px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 40px;
            text-align: center;
            color: #FFFFFF;
            border: none;
            background: none;
        }

        &-text {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 40px;
            text-align: center;
            color: #FFFFFF;
            width: 490px;
            margin-top: 100px;
        }

        &_button {
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 40px;
            text-align: center;
            color: #FFFFFF;
            width: 330px;
        }
    }
}

</style>