<template>
    <div class="honestly">
        <div class="honestly-title"><h4>Мы не кидалово, и ещё 7 причин быть с нами</h4></div>
        <div class="honestly-desc">
            <p>Франшиза компании «Юристы» — одна из лучших в сфере банкротства физ.лиц по надежности, стабильности и прибыльности.</p>
            <p>И вот почему:</p>
        </div>
        <div class="honestly__tabs">
            <div class="honestly__tabs_tab tab1">
                <div class="honestly__tabs_tab-number">01</div>
                <div class="honestly__tabs_tab-title">Бесплатный анализ рынка в вашем регионе</div>
                <div class="honestly__tabs_tab-desc">Определяем спрос и доходность бизнесапо вашему городу.</div>
            </div>
            <div class="honestly__tabs_tab tab2">
                <div class="honestly__tabs_tab-number">02</div>
                <div class="honestly__tabs_tab-title">Вся ответственность-на нас</div>
                <div class="honestly__tabs_tab-desc">По договору с клиентом МЫ несем ответственность перед клиентом за исход процедуры.</div>
            </div>
            <div class="honestly__tabs_tab tab3">
                <div class="honestly__tabs_tab-number">03</div>
                <div class="honestly__tabs_tab-title">Эксклюзивные права на город</div>
                <div class="honestly__tabs_tab-desc">Передаем всех клиентов вашего региона только вам.</div>
            </div>
            <div class="honestly__tabs_tab tab4">
                <div class="honestly__tabs_tab-number">04</div>
                <div class="honestly__tabs_tab-title">Средний чек — 120 000 рублей</div>
                <div class="honestly__tabs_tab-desc">Сумма, которую платят наши клиенты за списание долгов.</div>
            </div>
            <div class="honestly__tabs_tab tab5">
                <div class="honestly__tabs_tab-number">05</div>
                <div class="honestly__tabs_tab-title">Быстрая окупаемость</div>
                <div class="honestly__tabs_tab-desc">Вы полностью окупите все вложения за 8-10 месяцев, после чего ваша чистая прибыль составит до 300 000 в месяц.</div>
            </div>
            <div class="honestly__tabs_tab tab6">
                <div class="honestly__tabs_tab-number">06</div>
                <div class="honestly__tabs_tab-title">Бизнес в любой точке России</div>
                <div class="honestly__tabs_tab-desc">Вы можете работать в любом городе РФ, с населением всего от 300 тысяч человек.</div>
            </div>
            <div class="honestly__tabs_tab tab7">
                <div class="honestly__tabs_tab-number">07</div>
                <div class="honestly__tabs_tab-title">Поддержка 24/7</div>
                <div class="honestly__tabs_tab-desc">Мы всегда на связи для помощи по любым вопросам.</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.honestly {
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 60px;

    &-title {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
        text-align: center;
        color: #0F1129;
    }

    &-desc {
        width: 630px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #0F1128;
    }

    &__tabs {
        display: grid;
        grid-template-areas: 
            "a b c"
            "d e f"
            ". j ."
        ;
        column-gap: 40px;
        row-gap: 60px;


        &_tab {
            width: 400px;
            height: 460px;
            background: #FFFFFF;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
            border-radius: 19px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            position: relative;
            overflow: hidden;

            &-number {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 900;
                font-size: 200px;
                line-height: 244px;
                text-align: center;
                color: #FBC866;
                opacity: 0.4;
                margin-left: -40px;
                align-self: flex-start;
            }

            &-title {
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                text-align: center;
                color: #0F1129;
                width: 300px;
            }

            &-desc {
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                text-align: center;
                color: #0F1129;
                opacity: 0.8;
                width: 300px;
                height: 80px;
            }
        }
        .tab1 {grid-area: a;}
        .tab2 {grid-area: b;}
        .tab3 {grid-area: c;}
        .tab4 {grid-area: d;}
        .tab5 {grid-area: e;}
        .tab6 {grid-area: f;}
        .tab7 {grid-area: j;}

    }
}

</style>