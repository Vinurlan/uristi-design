<template>
    <div class="header">
        <HeaderPresent @showform="showForm" />
        <HeaderDescript />
    </div>
</template>

<script>
import HeaderPresent from "./Header/HeaderPresent"
import HeaderDescript from "./Header/HeaderDescript"

export default {
    name: "Header",
    components: {
        HeaderPresent, HeaderDescript
    },
    methods: {
        showForm(bool) {
            this.$emit('showform', bool)
        }
    }
}
</script>

<style lang="scss">


.header {
    width: 1280px;
    // background: #eee;
}

@media (max-width: 767px) {
    .header {
        width: 460px;
    }
}

</style>