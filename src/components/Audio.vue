<template>
    <div class="audio">
        <div class="audio__content">
            <div class="audio__content-title">Распределение обязанностей 10% на 90%, причем 90 с нас</div>
            <div class="audio__content-desc">
                <p>Мы берем полную ответственность за клиентов на себя и гарантируем им 100% результат. Вы лишь открываете филиал в своем регионе, получаете эксклюзивные права, консультируете по готовому сценарию и заключаете договор. По сути, вы просто продаете услугу и получаетеот 40 000 руб. с каждой сделки.</p>
                <p>Вот как это происходит:</p>
            </div>
            <div class="audio__content__samples">
                <div class="audio__content__samples_sample">
                    <div class="audio__content__samples_sample-player">
                        <audio src="" controls></audio>
                    </div>
                    <div class="audio__content__samples_sample-text">Текстовое поле для аудиозаписи</div>
                </div>
                <div class="audio__content__samples_sample">
                    <Player />
                    <div class="audio__content__samples_sample-text">Ove Melaa - Dark Blue</div>
                </div>
                <div class="audio__content__samples_sample">
                    <div class="audio__content__samples_sample-player">
                        <audio src="" controls></audio>
                    </div>
                    <div class="audio__content__samples_sample-text">Текстовое поле для аудиозаписи</div>
                </div>
                <div class="audio__content__samples_sample">
                    <div class="audio__content__samples_sample-player">
                        <audio src="" controls></audio>
                    </div>
                    <div class="audio__content__samples_sample-text">Текстовое поле для аудиозаписи</div>
                </div>
                <div class="audio__content__samples_sample">
                    <div class="audio__content__samples_sample-player">
                        <audio src="" controls></audio>
                    </div>
                    <div class="audio__content__samples_sample-text">Текстовое поле для аудиозаписи</div>
                </div>
                <div class="audio__content__samples_sample">
                    <div class="audio__content__samples_sample-player">
                        <audio src="" controls></audio>
                    </div>
                    <div class="audio__content__samples_sample-text">Текстовое поле для аудиозаписи</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Player from "./Audio/Player"

export default {
    name: "Audio",
    components: {
        Player
    }

}
</script>

<style lang="scss" scoped>


.audio {
    width: 100%;
    height: 950px;
    background: #F7F7F7;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
        width: 1280px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        &-title {
            width: 830px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 48px;
            text-align: center;
            color: #0F1129;
        }

        &-desc {
            width: 800px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            text-align: center;
            color: #0F1128;
        }

        &__samples {
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            column-gap: 40px;
            row-gap: 80px;

            &_sample {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

                &-player {
                    width: 400px;
                    height: 100px;
                    background: #FFFFFF;
                    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
                    border-radius: 19px;

                    audio {
                        width: 100%;
                    }
                }

                &-text {
                    margin-top: 30px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 28px;
                    text-align: center;
                    color: #0F1128;
                }
            }
        }
    }
}

</style>