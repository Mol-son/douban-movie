<template>
    <div class="hotCommend" @mouseover="clear" @mouseout="play">
        <div v-for="(item, index) in hotcommendImg" v-show="index === nowIndex">
            <div class="hotCommend-title">
            热门推荐
                <div style="display:inline-block" class='hotCommend-btn'>
                    <span class='btn-num'>{{index+1}}/5</span>
                    <span class='btn' @click="left"><</span>
                    <span class='btn' @click="right">></span>
                </div>
            </div>
            <div class="hotCommend-content">
                <img :src="item.src">
            </div>
        </div>
        
    </div>
    
</template>


<script>
export default {
    data () {
        return {
            nowIndex : 0,
            hotcommendImg : [
                {src:require("../assets/hotCommend6.png")},
                {src:require("../assets/hotCommend1.png")},
                {src:require("../assets/hotCommend2.png")},
                {src:require("../assets/hotCommend3.png")},
                {src:require("../assets/hotCommend4.png")},
            ]
        }
    },
    methods : {
        autoPlay () {
            this.nowIndex++;
            if(this.nowIndex == 5){
                this.nowIndex = 0,
                console.log("等于4了")
            }
        },
        play () {
            this.run = setInterval(this.autoPlay,3000)
        },
        clear () {
            clearInterval(this.run)
        },
        right(){
            this.nowIndex++;
            if(this.nowIndex == 5){
                this.nowIndex = 0
            }
        },
        left(){
            this.nowIndex--;
            if(this.nowIndex == -1){
                this.nowIndex =  4;
            }
        }
    },
    created () {
        this.play()
    },
    
}
</script>


<style>
    .hotCommend{
        margin-top:80px;
        width:680px;
    }
    .hotCommend-title{
        position: relative;
    }
    .btn-num{
        font-size:13px;
        margin-right:15px;
    }
    .hotCommend-btn{
        position:absolute;
        right:0;
    }
    .hotCommend-content img{
        margin-top:20px;
        width:680px;
    }
    
</style>
