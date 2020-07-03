<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <!--wrapper-->
                <div class="notify__wrapper">
                    <!--title-->
                    <div class="notify-title">
                        <p>Notify App</p>
                        <!--svg-->
                    </div>

                    <div class="notify-content">
                        <!--preloader-->
                        <preloader v-if="loading" :width="90" :height="90"/>
                        <!--notify-->
                        <notify
                                v-if="!loading"
                                :messages="messages"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    import notify from '@/components/Notify.vue'
    // UI
    import preloader from '@/components/UI/Preloader.vue'

    export default {
        components: {notify, preloader},
        data() {
            return {
                loading: false,
                messages: []
            }
        },
        mounted() {
            this.getNotify()
        },
        methods:{
            getNotify(){
                this.loading = true
                axios
                    .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
                    .then(response => {
                        let res = response.data.notify
                        this.messages = res
                        // console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally( () => {this.loading = false} )
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        /*justify-content: center;*/
        align-items: center;
        height: 90vh;
    }

    .notify__wrapper {
        width: 400px;
        background-color: #fff;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 12px 22px rgba(0, 0, 0, .1);
    }

    .notify-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 300px;
    }

    .notify-title {
        p {
            font-size: 24px;
        }
    }

</style>