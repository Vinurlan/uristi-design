<template>
    <div ref="slider" class="slider">
        <div ref="line" class="slider_line">
            <div ref="lineLeft" class="slider_line-l"></div>
        </div>
        <div ref="circle" class="slider_circle" v-on:mousedown="slideStart"></div>
    </div>
</template>

<script>
export default {
    name: "Slider",
    props: ["currcount"],
    data() {
        return {
            clickX: 0,
            count: 0,
            lineLength: 0,
            div: 100, // count parts
        }
    },
    watch: {
        currcount: function() {
            this.count = this.currcount
            this.$refs.circle.style.left = this.count * this.lineLength / 100 + "px";
            this.$refs.lineLeft.style.width = this.$refs.circle.offsetLeft + "px"
        }
    },
    mounted() {
        this.initSnapes()
    },
    methods: {
        initSnapes() {
            const circle = this.$refs.circle
            this.lineLength = this.$refs.line.clientWidth - circle.clientWidth - (circle.offsetWidth - circle.clientWidth) // 4px - border of circle     
            const hSl = this.$refs.slider.clientHeight
            this.$refs.line.style.top = hSl / 2 - this.$refs.line.offsetHeight / 2 + "px"
            circle.style.top = hSl / 2 - circle.offsetHeight / 2 + "px"
        },
        slideStart(e) {
            e.preventDefault()
            const target = this.$refs.circle

            this.clickX = e.clientX - this.$refs.slider.offsetLeft - target.offsetLeft;
            this.$emit("emitpause", true)

            this.$refs.slider.addEventListener("mousemove", this.slidable)
            this.$refs.slider.addEventListener("mouseup", this.slideEnd)
            this.$refs.slider.addEventListener("mouseleave", this.leave)
        },
        slidable(e) {
            const target = this.$refs.circle

            if (
                target.offsetLeft >= this.$refs.line.offsetLeft &&
                target.offsetLeft <= this.lineLength
            ) {
                target.style.left = e.clientX - this.$refs.slider.offsetLeft - this.clickX + "px";
                this.$refs.lineLeft.style.width = target.offsetLeft + "px"

                if (target.offsetLeft < this.$refs.line.offsetLeft) {
                    target.style.left = this.$refs.line.offsetLeft + "px"
                    this.$refs.lineLeft.style.width = 0
                } else if (target.offsetLeft > this.lineLength) {
                    target.style.left = this.lineLength + "px"
                    this.$refs.lineLeft.style.width = this.lineLength + "px"
                }
                
            } else if (target.offsetLeft < this.$refs.line.offsetLeft) {
                target.style.left = this.$refs.line.offsetLeft + "px";
            } else if (target.offsetLeft > this.lineLength) {
                target.style.left = this.lineLength + "px";
            }

            this.count = Math.floor((target.offsetLeft) * this.div / (this.lineLength)) || 0 // '-20' this offset compensance and '-2' of border

            this.$emit("count", this.count)
        },
        slideEnd() {
            const target = this.$refs.circle
            
            if (target.offsetLeft < this.$refs.line.offsetLeft) {
                target.style.left = this.$refs.line.offsetLeft;
            } else if (target.offsetLeft > this.lineLength) {
                target.style.left = this.lineLength + "px";
            }

            this.count = Math.floor((target.offsetLeft) * this.div / (this.lineLength)) || 0
            this.$emit("count", this.count)
            this.$emit("emitpause", false)

            this.$refs.slider.removeEventListener("mousemove", this.slidable)
            this.$refs.slider.removeEventListener("mouseup", this.slideEnd)
            this.$refs.slider.removeEventListener("mouseleave", this.leave)
        },
        leave() {
            const target = this.$refs.circle

            if (target.offsetLeft < this.$refs.line.offsetLeft) {
                target.style.left = this.$refs.line.offsetLeft + "px";
            } else if (target.offsetLeft > this.lineLength) {
                target.style.left = this.lineLength + "px";
            }

            this.count = Math.floor((target.offsetLeft) * this.div / (this.lineLength)) || 0
            this.$emit("count", this.count)

            this.$refs.slider.removeEventListener("mousemove", this.slidable)
            this.$refs.slider.removeEventListener("mouseup", this.slideEnd)
            this.$refs.slider.removeEventListener("mouseleave", this.leave)
        }
    }
}
</script>

<style lang="scss" scoped>

.slider {
    width: 275px;
    height: 100px;
    // background: rgb(255, 234, 234);
    position: relative;

    &_line {
        width: 100%;
        border-bottom: 2px solid #808080;;
        position: absolute;
        top: 10px;
        left: 0;
    }

    &_line-l {
        width: 0;
        border-bottom: 2px solid #FBC866;
        position: absolute;
        top: 0;
        left: 0;
    }

    &_circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        background: #FBC866;
    }
}

</style>