<template>
    <div class="presentation">
        <div class="presentation__content">
            <div class="presentation__content_img">
                <div class="presentation__content_img-image"></div>
            </div>
            <div class="presentation__content_form">
                <div class="presentation__content_form-title">Оставить свой Email и получить презентацию франшизы</div>
                <form @submit="submitHandler">
                    <label class="legend-name" for="presName" v-if="!nameHidden">Ваше имя</label>
                    <input id="presName" ref="name" name="name" type="text" @focus="nameHidden = true" @blur="hidden">
                    <label class="legend-email" for="presEmail" v-if="!emailHidden">Ваш Email</label>
                    <input id="presEmail" ref="email" name="email" type="email" @focus="emailHidden = true" @blur="hidden">
                    <button class="btn_red-bg" type="submit">Оставить заявку</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Presentation",
    data() {
        return {
            nameHidden: false,
            emailHidden: false,
        }
    },
    methods: {
        hidden() {
            if (!this.$refs.name.value) {
                this.nameHidden = false
            }

            if (!this.$refs.email.value) {
                this.emailHidden = false
            }
        },
        submitHandler(e) {
            e.preventDefault()

            this.$emit("showmadal", true)
        }
    }
}
</script>

<style lang="scss">


.presentation {
    width: 100%;
    height: 650px;
    background: #FBC866;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;

    &__content {
        width: 1280px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        &_img {
            width: 600px;
            height: 650px;
            position: relative;

            &-image {
                width: 600px;
                height: 1000px;
                position: absolute;
                bottom: 0;
                right: 0;
                background-image: url("../assets/img/woman.png");
                background-repeat: no-repeat;
                background-size: contain;
                background-position: bottom;
            }
        }

        &_form {
            width: 750px;
            height: 490px;
            // background: rgb(240, 240, 240);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            &-title {
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                line-height: 48px;
                color: #FFFFFF;
                text-align: left;         
            }

            form {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 330px;
                position: relative;

                label {
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
                .legend-email {
                    top: 157px;
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
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 69.9%;
                    text-align: center;

                }
            }
        }
    }
}

</style>