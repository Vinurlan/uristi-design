<template>
    <div class="header__descript">
        <div class="tab tab1"><span>Чистая прибыль - от 40 к руб. с одной сделки</span><div class="header__descript-img"><img src="@/assets/img/svg/growth.svg" alt="1"></div></div>
        <div class="tab tab2"><span>Паушальный взнос с оплатой в рассрочку</span><div class="header__descript-img"><img src="@/assets/img/svg/growth.svg" alt="2"></div></div>
        <div class="tab tab3"><span>Без юридического образования</span><div class="header__descript-img"><img src="@/assets/img/svg/growth.svg" alt="3"></div></div>
        <div class="tab tab4"><span>100% гарантия клиентов с 1-го дня работы</span><div class="header__descript-img"><img src="@/assets/img/svg/growth.svg" alt="4"></div></div>
        <div class="tab tab5"><span>С полной маркетинговой поддержкой</span><div class="header__descript-img"><img src="@/assets/img/svg/growth.svg" alt="5"></div></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.header__descript {
    width: 100%;
    height: 440px;
    // background: rgb(102, 102, 114);
    display: grid;
    gap: 40px;
    grid-template-areas:
        "a a a b b b"
        "c c d d e e";
    
    .tab {
        background: #fff;
        border-radius: 19px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 200px;

        span {
            font-family: Roboto;
            font-weight: bold;
            font-size: 14pt;
            text-align: left;
            margin-left: 40px;
            text-transform: uppercase;
            width: 120%;
        }

        div {
            right: 0;
            margin: 0;
            width: 100%;
            height: 100px;
            // background: rgba(209, 133, 133, 0.158);
            display: flex;
            justify-content: flex-end;

            img {
                width: 100px;
                height: 100px;
                // background: rgba(211, 86, 86, 0.158);
            }
        }
    }
    .tab:nth-child(n) {
        width: 620px;
    }
    .tab:nth-child(n+3) {
        width: 400px;
    }
    
    .tab1{
        grid-area: a;
    }
    .tab2{
        grid-area: b;
    }
    .tab3{
        grid-area: c;
    }
    .tab4{
        grid-area: d;
    }
    .tab5{
        grid-area: e;
    }
    
}

</style>