<template>
    <div ref="slider" class="slider">
        <div ref="line" class="slider_line">
            <div ref="lineBottom" class="slider_line-b"></div>
        </div>
        <div ref="circle" class="slider_circle" v-on:mousedown="slideStart"></div>
    </div>
</template>

<script>
export default {
    name: "Slider",
    props: ["propVolume"],
    data() {
        return {
            clickY: 0,
            count: 0,
            lineLength: 0,
            div: 100, // count parts
        }
    },
    mounted() {
        this.count = this.propVolume * 100
        this.initSnapes()
    },
    computed: {
        circleOffsetBottom() {
            return this.$refs.slider.clientHeight - this.$refs.circle.offsetHeight - this.$refs.circle.offsetTop
        }
    },
    methods: {
        initSnapes() {
            const circle = this.$refs.circle
            this.lineLength = this.$refs.line.clientHeight - circle.clientHeight - (circle.offsetWidth - circle.clientHeight) // 4px - border of circle     
            const wSl = this.$refs.slider.clientWidth
            this.$refs.line.style.left = wSl / 2 - this.$refs.line.offsetWidth / 2 + "px"
            circle.style.left = wSl / 2 - circle.offsetWidth / 2 + "px"
            circle.style.bottom = this.lineLength / 100 * this.count + "px"
            this.$refs.lineBottom.style.height = this.circleOffsetBottom + "px"
        },
        slideStart(e) {
            e.preventDefault()
            const target = this.$refs.circle

            this.clickY = e.clientY - this.$refs.slider.offsetTop - target.offsetTop;

            this.$refs.slider.addEventListener("mousemove", this.slidable)
            this.$refs.slider.addEventListener("mouseup", this.slideEnd)
            this.$refs.slider.addEventListener("mouseleave", this.leave)
        },
        slidable(e) {
            const target = this.$refs.circle

            if (
                target.offsetTop >= this.$refs.line.offsetTop &&
                target.offsetTop <= this.lineLength
            ) {
                target.style.top = e.clientY - this.$refs.slider.offsetTop - this.clickY + "px";
                this.$refs.lineBottom.style.height = this.$refs.line.clientHeight - target.offsetTop + "px"

                if (target.offsetTop < this.$refs.line.offsetTop) {
                    target.style.top = this.$refs.line.offsetTop + "px"
                    this.$refs.lineBottom.style.height = this.lineLength + "px"
                } else if (target.offsetTop > this.lineLength) {
                    target.style.top = this.lineLength + "px"
                    this.$refs.lineBottom.style.height = 0
                }
                
            } else if (target.offsetTop < this.$refs.line.offsetTop) {
                target.style.top = this.$refs.line.offsetTop + "px";
            } else if (target.offsetTop > this.lineLength) {
                target.style.top = this.lineLength + "px";
            }

            this.count = Math.floor((this.lineLength - target.offsetTop) * this.div / (this.lineLength)) || 0 // '-20' this offset compensance and '-2' of border
            // console.log(this.count)
            this.$emit("count", this.count)
        },
        slideEnd() {
            const target = this.$refs.circle
            
            if (target.offsetTop < this.$refs.line.offsetTop) {
                target.style.top = this.$refs.line.offsetTop;
            } else if (target.offsetTop > this.lineLength) {
                target.style.top = this.lineLength + "px";
            }

            this.count = Math.floor((this.lineLength - target.offsetTop) * this.div / (this.lineLength)) || 0
            this.$emit("count", this.count)

            this.$refs.slider.removeEventListener("mousemove", this.slidable)
            this.$refs.slider.removeEventListener("mouseup", this.slideEnd)
            this.$refs.slider.removeEventListener("mouseleave", this.leave)
        },
        leave() {
            const target = this.$refs.circle

            if (target.offsetTop < this.$refs.line.offsetTop) {
                target.style.top = this.$refs.line.offsetTop + "px";
            } else if (target.offsetTop > this.lineLength) {
                target.style.top = this.lineLength + "px";
            }

            this.count = Math.floor((this.lineLength - target.offsetTop) * this.div / (this.lineLength)) || 0
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
    width: 50px;
    height: 100px;
    // background: rgb(255, 234, 234);
    position: relative;

    &_line {
        height: 100%;
        border-left: 2px solid #808080;;
        position: absolute;
        bottom: 0;
        left: 10px;
    }

    &_line-b {
        height: 0;
        border-left: 2px solid #FBC866;
        position: absolute;
        bottom: 0;
        left: -2px;
    }

    &_circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #FBC866;
    }
}

</style>