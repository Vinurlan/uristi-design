<template>
    <div class="cities">
        <div class="cities-title">Займите свободный город</div>
        <div class="cities-desc">Посмотрите на наличие свободных мест в соответствии с вашим регионом и получите на него эксклюзивные права. Вы еще можете успеть и начать взаимовыгодное сотрудничество — в городах, где только ведутся переговоры, также есть вакантные места. Опередите ваших коллег!</div>
        <div hidden class="cities-map" ref="map"></div>
        <button @click="loadMap">OPEN</button>
    </div>
</template>

<script>
import ymaps from "ymaps"

export default {
    name: "Cities",
    data() {
        return {
            map: null
        }
    },
    methods: {
        loadMap(e) {
            this.$refs.map.hidden = false
            this.mapInit()
            e.target.hidden = true
        },
        async mapInit() {
            const api = process.env.API_MAP
            ymaps.load(`https://api-maps.yandex.ru/2.1/?apikey=${api}&lang=ru_RU`)
                .then(maps => {
                    this.map = new maps.Map(this.$refs.map, {
                        center: [55.736409, 37.604766],
                        zoom: 7,                       
                    })
                    
                    // console.log(this.maps.getCenter())

                    const myPlacemark = new maps.Placemark([55.661574, 37.573856], {
                        hintContent: 'Свободно',
                        balloonContent: 'Это красивая метка'
                    }, {
                        // Опции.
                        // Необходимо указать данный тип макета.
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: 'https://img.icons8.com/color/48/000000/thumb-up--v1.png',
                        // Размеры метки.
                        iconImageSize: [42, 42],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        iconImageOffset: [0, 0]
                    })

                    const myPlacemark2 = new maps.Placemark([55.906124, 37.736481], {
                        hintContent: 'Обсуждается',
                        balloonContent: 'Это красивая метка'
                    }, {
                        // Опции.
                        // Необходимо указать данный тип макета.
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: 'https://img.icons8.com/color/48/000000/handshake.png',
                        // Размеры метки.
                        iconImageSize: [42, 42],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        iconImageOffset: [0, 0]
                    })

                    const myPlacemark3 = new maps.Placemark([55.692622, 37.255829], {
                        hintContent: 'Занято',
                        balloonContent: 'Это красивая метка'
                    }, {
                        // Опции.
                        // Необходимо указать данный тип макета.
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: 'https://img.icons8.com/color/48/000000/do-not-touch.png',
                        // Размеры метки.
                        iconImageSize: [42, 42],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        iconImageOffset: [0, 0]
                    })

                    this.map.geoObjects
                        .add(myPlacemark)
                        .add(myPlacemark2)
                        .add(myPlacemark3)
                })
                .catch(error => console.log('Failed to load Yandex Maps', error))
        },
        async setPlacemarks() {
            
        }
    },
    mounted() {
        //this.mapInit()   
    }
}
</script>

<style lang="scss" scoped>


.cities {
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    position: relative;

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

    &-map {
        width: 95%;
        height: 800px;
        background: rgb(248, 248, 248);
    }

    button {
        width: 95%;
        height: 800px;
        background: rgb(238, 238, 238);
        color: rgba(5, 5, 5, 0.08);
        border: none;
        font-family: Oswald;
        font-size: 60pt;
        transition: all 0.2s;
        
    }
    button:hover {
        background: rgb(250, 250, 250);
    }
}

</style>