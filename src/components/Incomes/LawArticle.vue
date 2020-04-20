<template>
    <div class="law">
        <div class="law-title">
            <h3>Мы - Робин Гуд этого города. Освобождаем клиента от долгов законными методами</h3>
        </div>
        <div class="law__article">
            <div class="law__article-doc">{{ docs[currPage - 1] }}</div>
            <div class="law__article_panel">
                <button ref="lawPrev" class="law__article_panel-btn_left" @click="clickHandler">&larr;</button>
                <div class="law__article_panel-info_page"><span class="curr col_r">{{ currPage }}</span>/{{ docs.length }}</div>
                <button ref="lawNext" class="law__article_panel-btn_right" @click="clickHandler">&rarr;</button>
            </div>
        </div>
        <div class="law-img"></div>
    </div>
</template>

<script>
export default {
    name: "LawArticle",
    data() {
        return {
            docs: [],
            currPage: 1
        }
    },
    methods: {
        initDocs() {
            for (let i = 1; i <= 10; i++) {
                this.docs.push(i)
            }
        },
        clickHandler(e) {
            if (e.target === this.$refs.lawPrev) {
                this.currPage--
                if (this.currPage < 1) {
                    this.currPage = this.docs.length
                }
            } else if (e.target === this.$refs.lawNext) {
                this.currPage++
                if (this.currPage > this.docs.length) {
                    this.currPage = 1
                }
            }
        }
    },
    mounted() {
        this.initDocs()
    }
}
</script>

<style lang="scss" scoped>

.law {
    width: 100%;
    height: 1380px;
    // background: rgb(238, 238, 238);
    position: relative;

    &-title {
        width: 1050px;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 26pt;
        margin: 160px auto;
    }

    &__article {
        width: 720px;
        height: 880px;
        background: rgb(252, 252, 252);
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 19px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-doc {
            width: 465px;
            height: 700px;
            background: rgb(245, 228, 228);
            text-justify: newspaper;
            font-family: Montserrat;
            font-size: 100pt;
            opacity: 0.6;
        }

        &_panel {
            width: 515px;
            height: 40px;
            // background: rgb(230, 253, 252);
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            &-info_page {
                font-family: Montserrat;
                font-weight: bold;
                font-size: 20px;

                .curr {
                    font-size: 34px;
                }
            }

            button {
                z-index: 2;
                width: 50px;
                height: 30px;
                background: none;
                color: #FBC866;
                border: none;
                font-size: 30pt;
                line-height: 0;
            }
        }
    }

    &-img {
        width: 950px;
        height: 1070px;
        background-image: url("../../assets/img/happyman-law.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position-y: bottom;
        position: absolute;
        bottom: 0;
        right: -200px;
    }
}

</style>