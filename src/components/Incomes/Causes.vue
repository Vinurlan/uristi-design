<template>
    <div class="causes">
        <div class="causes-title"><span>И вот в чём причина</span></div>
        <div class="causes__tabs">
            <div class="causes__tabs_tab bg_dark_r">
                <h3>Кредит</h3>
                <p>без поручителей</p>
                <div class="causes__tabs_tab-img"></div> 
            </div>
            <div class="causes__tabs_tab bg_dark_gn">
                <h3>Кредит</h3>
                <p>без залогов</p>
                <div class="causes__tabs_tab-img"></div>
            </div>
            <div class="causes__tabs_tab bg_dark_be">
                <h3>Ипотека</h3>
                <p>по сниженной ставке</p>
                <div class="causes__tabs_tab-img"></div>
            </div>
        </div>
        <div class="causes-text"><span>Все, кто столкнулся с проблемной банкротства, обращается в юридические компании, которые помогают списать долги законным способом и избавить человека от кредитного рабства. <br> Это значит, что каждый из 7 млн. граждан может стать вашим клиентам. Бизнес на франшизе по банкростству уже обеспечен высокой рентабельностью и горячими заявками.</span></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.causes {
    width: 100%;
    height: 580px;
    // background: rgb(231, 218, 218);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #0F1129;
    font-family: Montserrat;
    font-weight: bold;

    &-title {
        font-size: 19pt;
        line-height: 29px;
    }

    &__tabs {
        width: 100%;
        height: 260px;
        // background: rgb(223, 231, 221);
        display: flex;
        justify-content: space-between;
        align-items: center;

        &_tab {
            width: 400px;
            height: 262px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
            border-radius: 19px;
            text-align: left;
            position: relative;
            color: white;

            h3 {
                font-size: 23pt;
                margin-top: 60px;
                margin-left: 60px;
                margin-bottom: 0;
            }
            
            p { 
                width: 200px;
                font-size: 19pt;
                line-height: 29px;
                margin-left: 60px;
            }

            &-img {
                position: absolute;
                right: -25px;
                bottom: 0;
                width: 200px;
                height: 265px;
                background-image: url("../../assets/img/woman.png");
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }

    &-text {
        width: 815px;
        font-size: 12pt;
        font-family: Roboto;
        font-weight: 400;
        line-height: 28px;
    }
}

</style>