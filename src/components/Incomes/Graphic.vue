<template>
    <div ref="graphic" class="graphic">
        <div class="graphic-legend"><span>ДОХОД</span></div>
        <div class="graphic-title"><span>Доход, который будет до тех пор, пока есть кредитные займы</span></div>
        <div class="graphic__content">
            <div class="graphic__content-text"><p>На начало 2019 года долг просроченных кредитов составляет 758 млрд руб., а каждый двадцатый житель РФ — потенциальный банкрот. Объем общей кредитной задолженности россиян растет из года в год. Более 7 млн заемщиков не вносили платежи по займам более 90 дней.</p><p>Люди погрязли в долгах в условиях кризиса и неосознанно попали в кредитную кабалу, когда не смогли их выплачивать.</p></div>
            <div class="graphic__content__graphs">
                <div class="graphic__content__graphs-title"><span>ДОЛЯ ПРОСРОЧЕННОЙ ЗАДОЛЖЕННОСТИ, %</span></div>
                <div ref="year" class="graphic__content__graphs-year"><span>ГОД</span></div>
                <div ref="columns" class="graphic__content__graphs__columns">
                    <div class="graphic__content__graphs__columns_column">
                        <div class="graphic__content__graphs__columns_column-procent procent">0%</div>
                        <div class="graphic__content__graphs__columns_column-rect_1 rect bg_y"></div>
                        <div class="graphic__content__graphs__columns_column-year">2017</div>
                    </div>
                    <div class="graphic__content__graphs__columns_column">
                        <div class="graphic__content__graphs__columns_column-procent procent">0%</div>
                        <div class="graphic__content__graphs__columns_column-rect_2 rect bg_y"></div>
                        <div class="graphic__content__graphs__columns_column-year">2016</div>
                    </div>
                    <div class="graphic__content__graphs__columns_column">
                        <div class="graphic__content__graphs__columns_column-procent procent">0%</div>
                        <div class="graphic__content__graphs__columns_column-rect_3 rect bg_y"></div>
                        <div class="graphic__content__graphs__columns_column-year">2018</div>
                    </div>
                    <div class="graphic__content__graphs__columns_column">
                        <div class="graphic__content__graphs__columns_column-procent procent">0%</div>
                        <div class="graphic__content__graphs__columns_column-rect_4 rect bg_y"></div>
                        <div class="graphic__content__graphs__columns_column-year">2019</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Graphic",
    data() {
        return {
            procentsDom: [],
            procentsValEnd: [16, 18, 21, 23],
            procentsValCurrTrue: [0, 0, 0, 0],
            procentsValCurrView: [0, 0, 0, 0],
            inter: Function,
            intervalView: Function
        }
    },
    methods: {
        upRect() {
            const rects = this.$refs.columns.getElementsByClassName("rect")
            for (let i = 0; i < rects.length; i++) {
                rects[i].classList.add(`up_${i+1}`)
            }
        },
        smoothChangeValue() {
            for (let i = 0; i < this.procentsDom.length; i++) {
                let def = this.procentsValCurrTrue[i] - this.procentsValEnd[i];
                this.procentsValCurrTrue[i] -= def * 0.05;
                this.procentsValCurrView[i] = Math.ceil(this.procentsValCurrTrue[i]);

                this.procentsDom[i].innerHTML = this.procentsValCurrView[i] + "%";

                if (this.procentsValCurrView[i] == this.procentsValEnd[i]) {
                    
                    for (let j = 0, c = 0; j < this.procentsDom.length; j++) {
                        c += this.procentsValCurrView[j] === this.procentsValEnd[j]
                        if (c === this.procentsDom.length) {
                            clearInterval(this.inter)
                            this.procentsDom = []
                        }
                    }
                }
            }
            
        },
        upProcents() {
            this.procentsDom = document.getElementsByClassName("procent")

            this.inter = setInterval(() => this.smoothChangeValue(), 20)
        },
        initAnimation() {
            setTimeout(() => {
                this.upRect()
                this.upProcents()
            }, 100);
        },

        checkPos() {
            if (window.pageYOffset + document.body.clientHeight >= this.$refs.graphic.offsetTop + this.$refs.year.offsetTop) {
                this.initAnimation()
                window.removeEventListener("scroll", this.checkPos)             
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.checkPos)
    },
}
</script>

<style lang="scss" scoped>

.graphic {
    width: 100%;
    height: 900px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    &-legend {
        position: absolute;
        top: 300px;
        left: -380px;
        font-family: Oswald;
        font-weight: bold;
        font-size: 300px;
        line-height: 69.9%;
        z-index: -1;
        color: #F7F7F7;
    }

    &-title {
        font-family: Montserrat;
        font-size: 26pt;
        font-weight: bold;
        max-width: 850px;
        margin: 80px 0;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-text {
            text-align: left;
            width: 470px;
            height: 250px;
            // background: rgb(212, 200, 200);
            font-size: 12pt;
            line-height: 28px;
            font-family: Roboto;
            font-weight: 500;

            p {
                margin: 15px 0;
            }
        }

        &__graphs {
            width: 670px;
            height: 500px;
            // background: rgb(190, 221, 216);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;

            &-title {
                margin-left: -20px;
                margin-right: -50px;
                // background: rgb(228, 223, 247);
                color: rgba(0, 0, 0, 0.6);
                width: 320px;
                height: 50px;
                transform: rotate(270deg);
                font-family: Montserrat;
                font-weight: bold;
                font-size: 13pt;
                line-height: 24px;
            }

            &-year {
                position: absolute;
                bottom: -40px;
                left: 60%;
                // background: rgb(228, 223, 247);
                font-family: Montserrat;
                font-weight: bold;
                font-size: 15pt;
                color: rgba(0, 0, 0, 0.6);

            }

            &__columns {
                width: 100%;
                height: 100%;
                // background: rgb(249, 250, 223);
                display: flex;
                justify-content: space-between;


                &_column {
                    margin: 0;
                    width: 80px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    &-year {
                        font-family: Montserrat;
                        font-weight: 400;
                        font-size: 15pt;
                    }

                    .rect {
                        transition: all .8s;
                    }
                    &-rect {

                        &_1 {
                            margin: 20px 0 40px 0;
                            height: 0; //200px;
                            border-radius: 10px;
                        }
                        &_2 {
                            margin: 20px 0 40px 0;
                            height: 0; //265px;
                            border-radius: 10px;
                        }
                        &_3 {
                            margin: 20px 0 40px 0;
                            height: 0; //316px;
                            border-radius: 10px;
                        }
                        &_4 {
                            margin: 20px 0 40px 0;
                            height: 0; //384px;
                            border-radius: 10px;
                        }
                        
                    }                   
                    .up_1{
                        height: 200px;
                    }
                    .up_2{
                        height: 265px;
                    }
                    .up_3{
                        height: 316px;
                    }
                    .up_4{
                        height: 384px;
                    }
                        
                    &-procent {
                        font-family: Montserrat;
                        font-size: 15pt;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}

</style>