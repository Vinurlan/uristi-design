<template>
    <div class="form">
        <div class="form__madal">
            <div class="form__madal-title">Укажите ваши контактные данные и мы с вами свяжемся в течении 15 минут</div>
            <form @submit="submitHandler">
                <legend class="legend-name" for="name" v-if="!nameHidden">Ваше имя</legend>
                <input ref="name" name="name" type="text" @focus="nameHidden = true" @blur="hidden">
                <legend class="legend-phone" for="phone" v-if="!phoneHidden">Ваш телефон</legend>
                <input ref="phone" name="phone" type="phone" @focus="phoneHidden = true" @blur="hidden">
                <legend class="legend-email" for="email" v-if="!emailHidden">Ваш Email</legend>
                <input ref="email" name="email" type="email" @focus="emailHidden = true" @blur="hidden">
                <button type="submit">Оставить заявку</button>
            </form>
            <button class="form__madal-close" @click="closeMadal">X</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            nameHidden: false,
            phoneHidden: false,
            emailHidden: false,
        }
    },
    methods: {
        hidden() {
            if (!this.$refs.name.value) {
                this.nameHidden = false
            }

            if (!this.$refs.phone.value) {
                this.phoneHidden = false
            }

            if (!this.$refs.email.value) {
                this.emailHidden = false
            }
        },
        submitHandler(e) {
            e.preventDefault()

            this.$emit("showmadal", true)
            this.$emit("showform", false)
        },
        closeMadal() {
            this.$emit("showform", false)
        }
    }
}
</script>

<style lang="scss">

.form {
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
        width: 1050px;
        height: 750px;
        background: #FBC866;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
        border-radius: 19px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;

        &-title {
            width: 850px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 40px;
            text-align: center;
            color: #FFFFFF;
        }

        form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 440px;
            position: relative;

            legend {
                position: absolute;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 20px;
                color: #FFFFFF;
                opacity: 0.8;
                padding-left: 40px;
                border: none;
                z-index: 1;
                transition: hidden 0.2s;
            }
            .legend-name {
                top: 27px;
            }
            .legend-phone {
                top: 150px;
            }
            .legend-email {
                top: 270px;
            }

            input {
                width: 400px;
                height: 75px;
                background: #F4BB50;
                border-radius: 8px;
                border: none;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 20px;
                color: #FFFFFF;
                opacity: 0.8;
                padding-left: 40px;
            }

            button {
                width: 440px;
                height: 75px;
                background: #FF5151;
                border-radius: 8px;
                font-family: Open Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 69.9%;
                text-align: center;
                color: #FFFFFF;
                border: none;

            }
        }

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
    }
}

</style>