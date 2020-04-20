<template>
    <div class="header-info">
        <div class="header-info__name"><p class="col_r">Юристы</p> федеральная служба юридической помощи</div>
        <div class="header-info__phone">
            <span class="header-info__phone-number">+7 (800) 000 00 00</span>
            <button @click="showForm" id="orderCall" class="btn_red-bd">Заказать звонок</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderInfo",
    methods: {
        showForm() {
            this.$emit("showform", true)
        }
    }
}
</script>

<style lang="scss">

.header-info {
    margin-top: 57px;
    margin-bottom: 44px;
    width: 1606px;
    height: 150px;
    // background: rgb(194, 181, 157);
    display: flex;
    justify-content: space-between;

    &__name {
        width: 180px;
        // background: rgb(175, 179, 180);
        font-size: 13pt;
        align-self: center;

        p {
            margin: 0;
            font-size: 20pt;
            font-weight: bold;
        }
    }

    &__phone {
        width: 238px;
        // background: rgb(129, 153, 135);
        display: flex;
        flex-direction: column;

        &-number {
            color: #0F1129;
            margin-bottom: 27px;
            font-size: 19pt;
            font-weight: bold;
            justify-self: start;
        }

        #orderCall {
            border-radius: 3px;
            width: 238px;
            height: 56px;
            font-size: 14pt;
            font-weight: bold;
        }
    }
}

</style>