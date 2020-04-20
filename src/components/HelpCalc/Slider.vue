<template>
    <div ref="slider" class="slider">
        <div ref="line" class="slider_line">
            <div ref="lineLeft" class="slider_line-l"></div>
        </div>
        <div ref="circle" class="slider_circle" v-on:mousedown="slideStart"></div>
        <div class="slider_counter">
            <input 
                ref="input" 
                type="number" 
                @focus="focusValue" 
                :max="maxval" 
                :min="minval"
                :value="countMultipy"
                :step="multiply"
            >
        </div>
        <!-- <div class="slider_counter_pos"> {{ posX }} </div> -->
    </div>
</template>

<script>
export default {
    name: "Slider",
    props: {
        multiply: {
            type: Number,
            default: 100
        },
        div: {
            type: Number,
            default: 10
        },
        minval: {
            type: Number,
            default: 0
        },
        maxval: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            clickX: 0,
            count: 0,
            posX: 0,
            lineWidth: 0,
        }
    },
    mounted() {
        this.lineWidth = this.$refs.line.clientWidth - 22 // 2px - border of circle
    },
    computed: {
        countMultipy() {
            return this.count * this.multiply
        },
        byInput() {
            return this.$refs.input.value
        }
    },
    methods: {
        focusValue(e) {
            e.target.addEventListener("change", this.changeValue)
            e.target.addEventListener("blur", this.blurValue)

        },
        changeValue() {
            if (this.$refs.input.value >= this.div * this.multiply) {
                this.$refs.input.value = this.div * this.multiply
            } else if (this.$refs.input.value <= this.minval) {
                this.$refs.input.value = this.minval
            }

            const val = ((this.lineWidth) * this.$refs.input.value) / this.maxval
            this.count = Math.floor(val / ((this.lineWidth) / this.div))
            this.$refs.circle.style.left = val + 20 + "px" // '20' - offsetLeft

            this.$emit("count", this.count * this.multiply)
        },
        blurValue(e) {
            this.changeValue()

            e.target.removeEventListener("change", this.changeValue)
            e.target.removeEventListener("blur", this.blurValue)
        },

        slideStart(e) {
            e.preventDefault()
            const target = this.$refs.circle

            this.clickX = e.clientX - this.$refs.slider.offsetLeft - target.offsetLeft;

            this.$refs.slider.addEventListener("mousemove", this.slidable)
            this.$refs.slider.addEventListener("mouseup", this.slideEnd)
            this.$refs.slider.addEventListener("mouseleave", this.leave)


        },
        slidable(e) {
            const target = this.$refs.circle

            if (
                target.offsetLeft >= this.$refs.line.offsetLeft &&
                target.offsetLeft <= this.$refs.line.clientWidth - 2
            ) {
                target.style.left = e.clientX - this.$refs.slider.offsetLeft - this.clickX + "px";
                this.$refs.lineLeft.style.width = target.offsetLeft - 20 + "px"

                if (target.offsetLeft < this.$refs.line.offsetLeft) {
                    target.style.left = this.$refs.line.offsetLeft + "px"
                    this.$refs.lineLeft.style.width = 0
                } else if (target.offsetLeft > this.$refs.line.clientWidth - 2) {
                    target.style.left = this.$refs.line.clientWidth - 2 + "px"
                    this.$refs.lineLeft.style.width = this.$refs.line.clientWidth - 2 + "px"
                }
                
            } else if (target.offsetLeft < this.$refs.line.offsetLeft) {
                target.style.left = this.$refs.line.offsetLeft + "px";
            } else if (target.offsetLeft > this.$refs.line.clientWidth - 2) {
                target.style.left = this.$refs.line.clientWidth - 2 + "px";
            }


            this.count = Math.floor((target.offsetLeft - 20) * this.div / (this.lineWidth)) || 0 // '-20' this offset compensance and '-2' of border
            // this.posX = target.offsetLeft - 20 || 0


            this.$emit("count", this.count * this.multiply)
        },
        slideEnd() {
            const target = this.$refs.circle
            
            if (target.offsetLeft < this.$refs.line.offsetLeft) {
                target.style.left = this.$refs.line.offsetLeft;
            } else if (target.offsetLeft > this.$refs.line.clientWidth) {
                target.style.left = this.$refs.line.clientWidth - 2 + "px";
            }

            this.count = Math.floor((target.offsetLeft - 20) * this.div / (this.lineWidth)) || 0
            // this.posX = target.offsetLeft - 20 || 0
            this.$emit("count", this.count * this.multiply)

            this.$refs.slider.removeEventListener("mousemove", this.slidable)
            this.$refs.slider.removeEventListener("mouseup", this.slideEnd)
            this.$refs.slider.removeEventListener("mouseleave", this.leave)
        },
        leave() {
            const target = this.$refs.circle

            if (target.offsetLeft < this.$refs.line.offsetLeft) {
                target.style.left = this.$refs.line.offsetLeft + "px";
            } else if (target.offsetLeft > this.$refs.line.clientWidth) {
                target.style.left = this.$refs.line.clientWidth - 2 + "px";
            }

            this.count = Math.floor((target.offsetLeft - 20) * this.div / (this.lineWidth)) || 0
            // this.posX = target.offsetLeft - 20 || 0
            this.$emit("count", this.count * this.multiply)

            this.$refs.slider.removeEventListener("mousemove", this.slidable)
            this.$refs.slider.removeEventListener("mouseup", this.slideEnd)
            this.$refs.slider.removeEventListener("mouseleave", this.leave)
        }
    }
}
</script>

<style lang="scss" scoped>

.slider {
    width: 500px;
    height: 30px;
    // background: rgb(255, 234, 234);
    position: relative;

    &_line {
        width: 460px;
        border-bottom: 2px solid #808080;;
        position: absolute;
        top: 14px;
        left: 20px;
    }

    &_line-l {
        width: 0;
        border-bottom: 2px solid #FBC866;
        position: absolute;
        top: 0;
        left: 0;
    }

    &_circle {
        width: 20px;
        height: 20px;
        border: 2px solid #FBC866;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 20px;
        background: #fff;
    }

    &_counter {
        position: absolute;
        top: 5px;
        right: -150px;
        
        input {
            width: 100px;
            border: none;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            color: #0F1129;
            text-align: right;
        }
        input:focus {
            border: 1px solid #000;
        }
    }
    &_counter_pos {
        position: absolute;
        top: 5px;
        right: -200px;
        border: 1px solid #000;
        width: 80px;
        height: 20px;
        line-height: 20px;
    }
}

</style>