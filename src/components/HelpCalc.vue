<template>
    <div class="helpcalc">
        <div class="helpcalc__content">
            <div class="helpcalc__content-title">Помогите всем должникам вашего, региона заработав от 40 000 руб. с каждой сделки</div>
            <div class="helpcalc__content__desc">
                <div class="helpcalc__content__desc__calculator">
                    <div class="helpcalc__content__desc__calculator-title">Калькулятор доходов</div>
                    <div class="helpcalc__content__desc__calculator_sliders">
                        <div class="helpcalc__content__desc__calculator_sliders_slider">
                            <div class="helpcalc__content__desc__calculator_sliders_slider-name">Население города</div>
                            <div class="helpcalc__content__desc__calculator_sliders_slider-line">
                               <Slider :multiply="100" :div="10000" :minval="0" :maxval="1000000" @count="countPopular" />
                            </div>
                        </div>
                        <div class="helpcalc__content__desc__calculator_sliders_slider">
                            <div class="helpcalc__content__desc__calculator_sliders_slider-name">Количество сделок в месяц</div>
                            <div class="helpcalc__content__desc__calculator_sliders_slider-line">
                                <Slider :multiply="1" :div="100" :minval="0" :maxval="100"  @count="countDeals" />
                            </div>
                        </div>
                        <div class="helpcalc__content__desc__calculator_sliders_slider">
                            <div class="helpcalc__content__desc__calculator_sliders_slider-name">Расходы на оплату труда</div>
                            <div class="helpcalc__content__desc__calculator_sliders_slider-line">
                                <Slider :multiply="1000" :div="1000" :minval="0" :maxval="1000000"  @count="countCosts" />
                            </div>
                        </div>
                    </div>
                    <div class="helpcalc__content__desc__calculator_income">
                        <div class="helpcalc__content__desc__calculator_income-text">Ваша ежемесечная прибыль:</div>
                        <div class="helpcalc__content__desc__calculator_income-amount">{{ amountIncome | money }} руб.</div>
                    </div>
                </div>
                <div class="helpcalc__content__desc-text">Мы ведем честный бизнес и избавляем людей от преследования коллекторов, потери имущества и других проблем, возникающих при кредитной кабале. Помогаем списать задолженность перед банками и МФО. Комиссия за услуги минимальна, что позволяет всем должникам воспользоваться нашей помощью. Процедура банкротства длится в среднем 12 месяцев, в течение которых вы получаете прибыль с ежемесячных платежей клиентов. <p>Для стартовых инвестиций вам потребуется 400 тысяч руб. В среднем вы будете заключать от 8 до 50 договоров в месяци получать от 40 000 руб. с одной сделки. Ваша минимальная прибыль составит от 300 000 руб., а годовой доход — 3 600 млн руб.</p></div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "./HelpCalc/Slider"

export default {
    name: "Calculator",
    components: {
        Slider
    },
    data() {
        return {
            popular: 0,
            deals: 0,
            costs: 0
        }
    },
    computed: {
        amountIncome() {
            return Math.floor((this.popular / 1000000) * (this.deals * 40000)) - this.costs
        }
    },
    methods: {
        countPopular(count) {
            this.popular = count;
        },
        countDeals(count) {
            this.deals = count;
        },
        countCosts(count) {
            this.costs = count;
        }
    }
}
</script>

<style lang="scss">


.helpcalc {
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    background: #f7f7f7;

    &__content {
        width: 1280px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        &-title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 48px;
            text-align: center;
            color: #0F1129;
            width: 1000px;
            height: 100px;
        }

        &__desc {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__calculator {
                background: #fff;
                width: 730px;
                height: 580px;
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
                border-radius: 19px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;

                &-title {
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 29px;
                    text-align: center;
                    color: #0F1129;
                    margin: 40px 0 40px;
                }

                &_sliders {
                    height: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    align-self: start;
                    margin-left: 40px;

                    &_slider{


                        &-name {
                            font-family: Montserrat;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 16px;
                            line-height: 20px;
                            color: #0F1129;
                            text-align: left;
                            margin-bottom: 20px;
                            margin-left: 20px;
                        }

                        
                    }
                }

                &_income {
                    margin: 40px 0 40px;
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    &-text {
                        font-family: Montserrat;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 20px;
                        color: #0F1129;
                    }

                    &-amount {
                        font-family: Montserrat;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 29px;
                        color: #FF5151;
                    }
                }
            }

            &-text {
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 12pt;
                line-height: 28px;
                color: #0F1128;
                width: 530px;
                height: 350px;
                text-align: left;
                padding-left: 50px;
            }
        }
    }
}

</style>