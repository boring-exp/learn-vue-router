<template>
    <div class="default" ref="default">
        <div ref="top">默认导航栏，tab1</div>
        <div style="height: 1000px; backgroud-color: red;">
        </div>
        <div v-show="needTopBtn" class="back"><el-button type="primary" @click="returnTop">回顶部</el-button></div>
    </div>
</template>
<script>
export default {
    name: 'DefaultTab',
    data: function() {
        return {
            needTopBtn: false,
        }
    },
    mounted() {
        this.$refs.default.addEventListener('scroll', this.setButton)
    },
    methods: {
        returnTop() {
            this.$refs.top.scrollIntoView(true, {
                behavior: 'smooth'
            });
        },
        setButton() {
            // 可优化
            // if (this.$refs.default.scrollTo > 0) {
            //     this.needTopBtn = true;
            // } else {
            //     this.needTopBtn = false;
            // } 
            // 和上面的逻辑等价
            this.needTopBtn = this.$refs.default.scrollTop > 0;
        }
    }
}
</script>
<style lang="scss" scoped>
.back {
    position: fixed;
    right: 40px;
    bottom: 40px;
}

.default {
    height: 100%;
    overflow-y: auto;
}
</style>