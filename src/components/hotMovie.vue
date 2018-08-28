<template>
    <div class="hotMovie" 
    @mouseover="clear"
    @mouseout="play">
            <div class="hotMovie-title">
                    <span class="newHotmovie">最新热门电影</span>
                    <span class="hotDoor">热门</span>
                    <span>最新</span>
                    <span>豆瓣高分</span>
                    <span>冷门佳片</span>
                    <span>华语</span>
                    <span>欧美</span>
                    <span>韩国</span>
                    <span>日本</span>
                <span class="title-more">更多»</span>
            </div>
            <div class="hotMovie-content" 
            v-for="(item, index) in hotmovieImg"
            v-show="index === nowIndex"
            >
                <img :src='item.src'>
            </div>
            <div class="smallDot">
                <div class="contentDot">
                    <span class='btn' @click="left"><</span>
                    <span :class='["dot",index === nowIndex ? "active" : ""]'
                    v-for="(item, index) in hotmovieImg"
                    @click="jump(index)">
                    </span>
                    <span class='btn' @click="right">></span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data () {
        return {
            nowIndex : 0,
            hotmovieImg : [
                {src:require('../assets/hotMovie1.png')},
                {src:require('../assets/hotMovie2.png')},
                {src:require('../assets/hotMovie3.png')},
                {src:require('../assets/hotMovie4.png')},
                {src:require('../assets/hotMovie5.png')}
            ]
        }
    },
    methods:{
        autoPlay () {
            this.nowIndex++;
            if(this.nowIndex == 5){
                this.nowIndex = 0,
                console.log("等于5了")
            }
        },
        play () {
            this.run = setInterval(this.autoPlay,5000)
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
        },
        jump(index) {
            this.nowIndex = index;
        },
        clear () {
            clearInterval(this.run)
        }
    },
    created () {
        this.play()
    }
}
</script>

<style>
    .hotMovie-title{
        width:680px;
        position: relative;
        cursor: pointer;
    }
   
    .hotMovie-title span{
        font-size:13px;
        color:#9B9B9B;
        margin-right:15px;
    }
    .hotMovie-title .newHotmovie{
        font-size:16px;
        color:#111;
    }
    .hotMovie-title .hotDoor{
        color:#111;
    }
    .hotMovie-title .title-more{
        position:absolute;
        right:0;
        color:#37a;
        font-size:13px;
        margin-right:0px;
    }
    .hotMovie-content img{
        width:680px;
        margin:15px 0px;
    }
    
    .dot{
        display: inline-block;
        width:6px;
        height:6px;
        border-radius: 50%;
        background:gray;
        margin-left:5px;
        cursor: pointer;
    }
    .active{
        background:#37a !important
    }
    .btn{
        display: inline-block;
        width:20px;
        height:20px;
        border-radius:50%;
        background: #37a;
        cursor: pointer;
        text-align: center;
        color:white;
        font-size:14px;
    }
    .smallDot{
        position:relative;
        width:680px;
        background:orange;
    }
    .contentDot{
        position:absolute; 
        left:50%;
        margin-left:-100px;
        width:200px;
    }
</style>

