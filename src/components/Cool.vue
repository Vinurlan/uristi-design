<template>
    <div class="cool">
        <div class="cool__text">
            <div class="cool__text-title">Всё круто, но причём тут я?</div>
            <div class="cool__text-desc">Для масштабирования бизнеса мы расширяем нашу франчайзинговую сеть и ищем новых партнеров, которые хотят открыть собственное делов перспективной и прибыльной нише. Рынок банкротств заполнен всего на 15%. Вам не потребуется специального образования — всю юридическую работу выполняет головной офис.<p> Вы запустите бизнес всего за <span class="col_r">2-3 недели</span>. Схема нашего сотрудничества очень проста:</p></div>
        </div>
        <div class="cool__image">
            <div class="cool__image_bg bg_y">
                <div class="cool__image_bg-text col_y">При чем тут я?</div>
                <div class="cool__image_bg-img"></div>
            </div>
        </div>
        <div class="cool__tabs">
            <div class="cool__tabs__tab cool_tab1">
                <div class="cool__tabs__tab-num">1</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab2">
                <div class="cool__tabs__tab-num">2</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab3">
                <div class="cool__tabs__tab-num">3</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab4">
                <div class="cool__tabs__tab-num">4</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab5">
                <div class="cool__tabs__tab-num">5</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab6">
                <div class="cool__tabs__tab-num">6</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab7">
                <div class="cool__tabs__tab-num">7</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab8">
                <div class="cool__tabs__tab-num">8</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab9">
                <div class="cool__tabs__tab-num">9</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
            <div class="cool__tabs__tab cool_tab10">
                <div class="cool__tabs__tab-num">10</div>
                <div class="cool__tabs__tab-title bg_y">Заключение договора</div>
                <div class="cool__tabs__tab-desc">Наш менеджер согласовывает с вами детали сотрудничества, после чего подписываем договор.</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

 
.cool {
    width: 1280px;
    height: 1600px;
    display: flex;
    justify-content: space-between;
    margin-top: 130px;
    position: relative;

    &__text {
        width: 590px;
        text-align: left;

        &-title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 48px;
            color: #0F1129;
            margin-bottom: 60px;
        }

        &-desc {
            font-family: Roboto;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            color: #0F1128;
        }
    }

    &__image {
        width: 700px;
        margin-top: 260px;
        
        &_bg {
            width: 665px;
            height: 365px;
            position: relative;

            &-text {
                font-family: Oswald;
                font-size: 37pt;
                line-height: 69.9%;
                letter-spacing: 0.09em;
                transform: rotate(90deg);
                text-transform: uppercase;
                position: absolute;
                right: 0;
                top: 0;
                margin: 167px -205px 0 0;
            }

            &-img {
                width: 500px;
                height: 475px;
                background: rgba(221, 245, 218, 0.397);
                position: absolute;
                bottom: 0;
                right: 20px;
            }
        }
    }

    .cool_tab1 {
        grid-area: a;
    }
    .cool_tab2 {
        grid-area: b;
    }
    .cool_tab3 {
        grid-area: c;
    }
    .cool_tab4 {
        grid-area: d;
    }
    .cool_tab5 {
        grid-area: e;
    }
    .cool_tab6 {
        grid-area: f;
    }
    .cool_tab7 {
        grid-area: g;
    }
    .cool_tab8 {
        grid-area: h;
    }
    .cool_tab9 {
        grid-area: i;
    }
    .cool_tab10 {
        grid-area: j;
    }

    &__tabs {
        position: absolute;
        top: 470px;
        left: -180px;
        // background: rgb(255, 236, 236);
        width: 1650px;
        height: 1100px;
        z-index: -1;
        display: grid;
        grid-template-areas: 
            "a . ."
            "b c d"
            "e f g"
            "h i j"
        ;


        &__tab {
            width: 515px;
            height: 260px;
            // background: rgb(247, 255, 246);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &-num {
                position: absolute;
                left: 80px;
                top: -10px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 900;
                font-size: 200px;
                line-height: 244px;
                text-align: center;
                color: #FBC866;
                opacity: 0.15;
            }

            &-title {
                width: 220px;
                height: 35px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 35px;
                text-align: center;
                color: #0F1129;
                margin-bottom: 10px;
            }

            &-desc {
                width: 300px;
                height: 40px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 20px;
                text-align: center;
                color: #0F1129;
                opacity: 0.8;
            }

            
        }
    }
}

</style>