<template>
    <div>
            <div class="global-nav">
                        <ul>
                            <li>豆瓣</li>
                            <li>读书</li>
                            <li>电影</li>
                            <li>音乐</li>
                            <li>同城</li>
                            <li>小组</li>
                            <li>阅读</li>
                            <li>FM</li>
                            <li>时间</li>
                            <li>豆品</li>
                            <li>更多</li>
                            <div class="nav-right">
                                <li>下载豆瓣客户端</li>
                                <li>登录</li>
                                <li>注册</li>
                            </div>
                        </ul>
            </div>
            <div class="movie-nav">
                <div class="nav-top">
                    <div class="db-log">
                    豆瓣电影
                    </div>
                    <div class="search-input">
                        <input type="text" class="input-text" v-model='message'>
                        <input type="submit" value="搜索" class="input-submit">
                        <div class='input-result'>
                          <ul v-show='message == "后来"'>
                              <li v-for="(item, index) in listData" >
                                <a :href="item.alt" style=" text-decoration: none;">
                                  <img :src="item.images">
                                  <span class='item-title'>{{item.title}}</span>
                                  <span class='item-year'>{{item.year}}</span>
                                  <div class='item-original'>{{item.original_title}}</div>
                                </a>
                                
                              </li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div class="nav-bottom">
                        <ul>
                            <li>影讯&购票</li>
                            <li>选电影</li>
                            <li>电视剧</li>
                            <li>排行榜</li>
                            <li>分类</li>
                            <li>影评</li>
                            <li>2017年度榜单</li>
                            <li>2017观影报告</li>
                        </ul>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapMutations,mapActions} from "vuex"


export default {
    data () {
        return {
            message:''
        }
    },
    computed:{
      // ...mapState('list')
      listData(){
        return this.$store.state.list
      }
    },
   
    created () {
        this.$store.dispatch('getList')
    }
}
</script>

<style>
  .global-nav{
    width:100%;
    height:28px;
    background:#545652;
    color:#d5d5d5;
  }
  .global-nav > ul{
    margin-left:10px;
    font-size:12px;
    line-height:28px;
  }
  .global-nav ul li{
    float: left;
    margin-right:20px;
    cursor: pointer;
  }
  .nav-right{
    position:absolute;
    right:0;
  }
  .movie-nav{
    width:100%;
    background:#e3ebec;
  }
  .nav-top{
    position: relative;
    width:1040px;
    margin:0 auto;
    /* background:rgb(176, 250, 176); */
    padding:15px 0px;
  }
  .db-log{
    position:absolute;
    left:0;
    display:inline-block;
    color: #27a;
    font-size:27px;
    font-weight:bold;
  }
  .search-input{
    display:inline-block;
    margin-left:150px;
    text-align:top;
    padding:4px 0px;
    position: relative;
  }
  .input-text{
    height:27px;
    width:460px;
    border-top-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 5px;
    border:none;
    padding:0px 10px;
  }
  .input-submit{
    width:47px;
    height:27px;
    border: none;
    margin-left:-5px;
    border-top-left-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 0px;
    vertical-align: top;
  }
  .input-result{
    position:absolute;
    width:480px;
    background:white;
    z-index:99;
  }
  .input-result ul {
    border: 1px solid #c0c9ca;
    padding:0px 8px 10px 8px;
  }
  .input-result ul li{
    cursor: pointer;
    /* background:salmon; */
    margin-top:10px;
    height:70px;
  }
  
  .input-result ul li img{
    width:50px;
    height:70px;
    float: left;
  }
  .item-title{
    margin-left:10px;
    color: #37a;
    font-size:14px;
  }
  .item-year{
    color:#545652;
    margin-left:5px;
    font-size:14px;
  }
  .item-original{
    margin-left:60px;
    color:#545652;
    font-size:13px;
  }
  .nav-bottom{
    width:1040px;
    height:40px;
    margin:0 auto;
    padding:10px 0px;
    /* background:rgb(34, 170, 152); */
  }
  .nav-bottom ul{
    line-height:40px;
  }
  .nav-bottom ul li{
    float:left;
    margin-right:15px;
    color:#27a
  }
  
</style>
