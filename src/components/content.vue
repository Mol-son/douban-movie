<template>
    <div class="wrapper-content">
        <div class="content-center">
            <willMovie></willMovie>
            <img src="https://img3.doubanio.com/view/dale-online/dale_ad/public/d059597495f3a4e.jpg" class="adv">
            <hotMovie></hotMovie>
            <hotTv></hotTv>
            <hotCommend></hotCommend>
        </div>
        <div class="content-side">
            <side></side>
        </div>
    </div>
</template>

<script>
import hotMovie from "./hotMovie.vue"
import willMovie from "./willMovie.vue"
import hotTv from "./hotTv.vue"
import hotCommend from "./hotCommend.vue"
import side from "./side.vue"



export default {
    components:{hotMovie,willMovie,hotTv,hotCommend,side}
}
</script>

<style>
    .wrapper-content{
        width:1000px;
        margin:0 auto;
        /* background: rgb(211, 207, 207); */
        position: relative;
        padding:40px 0px;

    }
    
    .adv{
        width:680px;
        margin:40px 0px;
    }
    .content-side{
        width:270px;
        /* background:khaki; */
        position:absolute;
        top:40px;
        right:0;
    }
</style>


