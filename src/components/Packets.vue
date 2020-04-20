<template>
    <div class="packets">
        <div class="packets-title"><h4>Банкроство - основной пакет + 3 дополнительных</h4></div>
        <div class="packets-desc">Работаем по трем прибыльным направлениям и помимо основной предлагаем комплексную франшизу из 2 или 3 наших услуг. Ознакомьтесь и сделайте свой выбор:</div>
        <div class="packets__plane">
            <div class="packets__plane__head">
                <div class="packets__plane__head-img"></div>
                <div class="packets__plane__head__tab">
                    <div class="packets__plane__head__tab_content">
                        <div class="packets__plane__head__tab_content-title">Банкротство физических лиц</div>
                        <div class="packets__plane__head__tab_content-text">
                            <p>Франшиза по оформлению процедуры банкротства. Помогаем избавиться от долговых обязательств с суммой более 500 000 руб. тем, кто не в состоянии их выплачивать в полном объеме. Практика банкротств физ.лиц стремительно набирает обороты и освобождает людей от мощного давления со стороны кредиторов и коллекторов.</p>
                            <p class="font_bold">Паушальный взнос — <span class="col_r">250 000</span> рублей.</p>
                        </div>
                    </div>
                    <button class="btn_red-bg">Узнать подробности</button>
                </div>
            </div>
            <div class="packets__plane__tabs">
                <div class="packets__plane__tabs__tab">
                    <div class="packets__plane__tabs__tab_content">
                        <div class="packets__plane__tabs__tab_content-title">Банкротство + Автоюрист</div>
                        <div class="packets__plane__tabs__tab_content-text">
                            <p>Пакет «Банкротство» + услуги в области автомобильного права: оспаривание штрафов, споры между участниками ДТП, страховые споры и пересмотр виновности, возврат водительского удостоверения. </p>
                            <p class="font_bold">Паушальный взнос — <span class="col_r">400 000</span> рублей.</p>
                        </div>
                    </div>
                    <button class="btn_red-bd">Узнать подробности</button>
                </div>
                <div class="packets__plane__tabs__tab">
                    <div class="packets__plane__tabs__tab_content">
                        <div class="packets__plane__tabs__tab_content-title">Банкротство + Сертификация продукции.</div>
                        <div class="packets__plane__tabs__tab_content-text">
                            <p>Пакет «Банкротство» + широкий спектр услуг в сфере подтверждения качества продукции с последующей выдачей сертификатов соответствия. </p>
                            <p class="font_bold">Паушальный взнос — <span class="col_r">400 000</span> рублей.</p>
                        </div>
                    </div>
                    <button class="btn_red-bd">Узнать подробности</button>
                </div>
                <div class="packets__plane__tabs__tab">
                    <div class="packets__plane__tabs__tab_content">
                        <div class="packets__plane__tabs__tab_content-title">Франшиза 3 в 1 — Банкротство + Автоюрист + Сертификация.</div>
                        <div class="packets__plane__tabs__tab_content-text">
                            <p>Комплексная франшиза по всем трем направлениям.</p>
                            <p class="font_bold">Паушальный взнос — <span class="col_r">550 000</span> рублей.</p>
                        </div>
                    </div>
                    <button class="btn_red-bd">Узнать подробности</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.packets {
    width: 1280px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

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
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #0F1128;
        width: 780px;
    }

    &__plane {
        width: 1280px;
        height: 750px;
        background: #FFFFFF;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
        border-radius: 19px;

        &__head {
            height: 250px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 120px;
            padding: 0 100px;
            
            &-img {
                width: 361px;
                height: 250px;
                background: rgb(241, 241, 241);
            }

            &__tab {
                width: 530px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                margin-left: 70px;


                &_content {
                    text-align: left;

                    &-title {
                        font-family: Montserrat;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 24px;
                        color: #0F1129;
                    }

                    &-text {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 20px;
                        color: #0F1129;
                        opacity: 0.8;
                    }
                }

                button {
                    width: 210px;
                    height: 50px;
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 69.9%;
                    text-align: center;
                }
            }
        }

        &__tabs {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 100px;

            &__tab {
                width: 260px;
                height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                &_content {
                    text-align: left;

                    &-title {
                        font-family: Montserrat;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 20px;
                        color: #0F1129;
                    }

                    &-text {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 20px;
                        color: #0F1129;
                        opacity: 0.8;
                    }
                }

                button {
                    width: 210px;
                    height: 50px;
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 69.9%;
                    text-align: center;
                    color: #3F4154;
                }  
            }
        }
    }
}

</style>