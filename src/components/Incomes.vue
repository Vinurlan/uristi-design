<template>
    <div class="incomes">
        <Graphic />
        <Causes />
        <LawArticle />
    </div>
</template>

<script>
import Graphic from "./Incomes/Graphic"
import Causes from "./Incomes/Causes"
import LawArticle from "./Incomes/LawArticle"

export default {
    name: "Incomes",
    components: {
        Graphic, Causes, LawArticle
    }
}
</script>

<style lang="scss">

.incomes {
    width: 1280px;
    // background: #eee;
}

</style>