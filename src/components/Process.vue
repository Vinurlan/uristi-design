<template>
    <div class="process">
        <div class="process-title">Процесс</div>
        <div class="process__content">
            <div class="process__content_text">
                <div class="process__content_text-title bg_y">Процесс</div>
                <div class="process__content_text-desc">В соответствии с поправками к закону №127-ФЗ человек, попавший в тяжелую финансовую ситуацию, может признать себя банкротом и легально списать долги. Мы помогаем людям пройти необходимую процедуру и решить проблемы с коллекторами. Мы делаем все для своих клиентов — предоставляем возможность оплаты услуг в рассрочку, гарантируем минимальный чек и даем 100% гарантию результата. Процесс состоит из нескольких этапов:</div>
            </div>
            <div class="process__content_menu">
                <div class="process__content__menu__tab">

                </div>
            </div>
        </div>
        <div class="process__image">
            <div class="process__image-bg bg_y"></div>
            <div class="process__image-img"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

.process {
    width: 100%;
    height: 800px;
    background: #F7F7F7;
    position: relative;
    display: flex;
    justify-content: center;

    &__content {
        width: 1280px;
        // background: rgb(245, 245, 245);
        display: flex;
        justify-content: space-between;
        margin-top: 100px;

        &_text {
            width: 540px;
            height: 280px;
            // background: rgb(243, 248, 237);
            text-align: left;

            &-title {
                width: 170px;
                height: 50px;
                font-family: Montserrat;
                font-weight: bold;
                font-size: 18pt;
                line-height: 47px;
                text-align: center;
            }

            &-desc {
                font-family: Roboto;
                font-size: 12pt;
                line-height: 28px;
                margin-top: 29px;
            }
        }

        &__menu {
            width: 630px;
            height: 460px;
            // background: rgb(247, 236, 236);
            position: relative;

            &__tab {
                width: 620px;
                height: 460px;
                background: #fff;
                box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
                border-radius: 19px;
            }
        }
    }

    &-title {
        font-family: Oswald;
        font-size: 180px;
        line-height: 69.9%;
        text-align: center;
        letter-spacing: 0.1em;
        color: #F7F7F7;
        position: absolute;
        top: -143px;
        left: 135px;
        text-transform: uppercase;
    }

    &__image {
        position: absolute;
        left: 0;
        bottom: 0;


        &-bg {
            width: 334px;
            height: 363px;
        }

        &-img {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 355px;
            height: 525px;
            background-image: url("../assets/img/woman.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom;
        }
    }
}

</style>