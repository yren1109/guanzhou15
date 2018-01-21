<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import appHeader from '../store/commom/Header.vue'
    import appFooter from '../store/commom/Footer.vue'
export default{
    components: {
                appHeader,
                appFooter
            }
}

</script>
