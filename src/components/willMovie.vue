<template>
    <div>
         <div class="willMovie" 
            v-for="(item, index) in willmovieImg"
           v-show="index === nowIndex"
           @mouseover="clear"
           @mouseout="play">
           <div class="willMovie-title">
               正在热映
               <span class='allMoving'>全部正在热映»</span>
               <span class="allWill">即将上映»</span>
               <div style="display:inline-block" class='willMovie-btn' 
               >
                   <span>{{index+1}}/4</span>
                   <span class='btn btn-left' @click="left"><</span>
                   <span class='btn btn-right' @click="right">></span>
               </div>
           </div>
           <div class="willMovie-content">
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
            willmovieImg : [
                {src:require('../assets/willMovie1.png')},
                {src:require('../assets/willMovie2.png')},
                {src:require('../assets/willMovie3.png')},
                {src:require('../assets/willMovie4.png')},
            ],
        }
    },
    methods:{
        autoPlay () {
            this.nowIndex++;
            if(this.nowIndex == 4){
                this.nowIndex = 0,
                console.log("等于4了")
            }
        },
        play () {
            this.run = setInterval(this.autoPlay,5000)
        },
        clear () {
            clearInterval(this.run)
        },
        right(){
            this.nowIndex++;
            if(this.nowIndex == 4){
                this.nowIndex = 0
            }
        },
        left(){
            this.nowIndex--;
            if(this.nowIndex == -1){
                this.nowIndex =  3;
            }
        }
    },
    created () {
        this.play()
    },
}
</script>

<style>
    .willMovie{
        width:700px;
        cursor: pointer;
    }
    .willMovie-title{
        position: relative;
        width:680px;
    }
    .willMovie-title span{
        margin-left:10px;
        font-size:13px;
    }
    .allMoving{
        color: #666699;
    }
    .allWill{
        color:#37a;
    }
    .willMovie-btn{
        position:absolute;
        right:0;
        vertical-align: top;
    }
    .willMovie-btn .btn{
        display: inline-block;
        width:20px;
        height:20px;
        border-radius: 50%;
        background:#37a;
        color:white;
        text-align: center;
        cursor: pointer;
    }
    .btn-left{
        margin-right:-8px;
    }
    .willMovie-content img{
        width:680px;
        height:250px;
        margin-top:10px;
    }
</style>
