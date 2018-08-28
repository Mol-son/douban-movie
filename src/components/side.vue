<template>
    <div class="side-content">
        <div class="movie-question">
            <span>豆瓣电影评分八问</span>
            </div>
        <div class="movie-active">
            <div>电影活动</div>
            <ul>
                <li>瓣嘴4丨李冰冰不服被称“磨皮狂魔”</li>
                <li>今晚我有空丨这才是改编东野圭吾的正确姿势</li>
                <li>对答666 | 豆瓣高分电影趣味考题</li>
            </ul>
        </div>
        <div class="movie-list">
            一周口碑榜
            <span>更多榜单»</span>
            <ul>
                <li>1 小偷家族</li>
                <li>2 祈祷落幕时</li>
                <li>3 升级</li>
                <li>4 美国动物</li>
                <li>5 幸福路上</li>
                <li>6 牧人与屠夫</li>
                <li>7 尖端医疗的真相</li>
                <li>8 裘力斯凯撒</li>
                <li>9 精灵旅社3：疯狂假期</li>
                <li>10 根西岛文学与土豆皮馅饼俱乐部</li>
            </ul>
        </div>
        <div class="side-img">
            <img class="side-adv" src="https://oimagec5.ydstatic.com/image?id=-3262668032993122914&product=adpublish&w=300&h=250&sc=0&rm=0">
            <div class="img-adv">广告</div>
        </div>
        <div class="movie-hot">
            热门豆列
            <ul>
                <li>
                    <span class="title">2010豆瓣评选·100部绝佳恐怖电影</span>
                    <span class="commend">2467推荐</span>
                </li>
                <li>
                    <span class="title">上瘾黑色幽默</span>
                    <span class="commend">4089推荐</span>
                </li>
            </ul>
        </div>
        <div class="movie-link">
            合作联系
            <ul>
                <li>电影合作邮箱：movie@douban.com</li>
                <li>电视剧合作邮箱：tv@douban.com</li>
            </ul>
        </div>
        <div class="movie-look">
            关注我们
            <img src="../assets/look.png">
        </div>
        <div class="movie-last">
            <img src="https://img3.doubanio.com/view/dale-online/dale_ad/public/e06bf059913b99c.jpg">
            <div class="last-content">
                <span>书画成长营|三十天扇面临摹，将宋画雅趣带进生活</span>
                <div class="last-time">豆瓣时间</div>
            </div>
            

        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style>
    .side-content{
        width:100%;
        position:relative;
        cursor: pointer;
    }
    .movie-question{
        width:100%;
        background:#f2f7f6;
        padding:10px 0px;
        margin-bottom:20px;
    }
    .movie-question span {
        margin-left:10px;
        color:#37a;
        font-size:13px
    }
    .movie-active{
        background:#f2f7f6;
        padding:20px 0px;
    }
    .movie-active div{
        margin-left:10px;
        margin-bottom:10px;
        color:#072;
    }
    .movie-active ul{
        margin-left:10px;
        font-size:13px;
        color:#37a;
    }
    .movie-active ul li{
        padding:5px 0px;
    }
    .movie-list{
        margin-top:20px;
    }
    .movie-list span{
        color:#666699;
        font-size:13px;
        margin-left:10px;
    }
    .movie-list ul li {
        font-size:12px;
        margin:10px 0px;
        color:#37a;
    }
    .side-img{
        position:relative;
        width:270px;
        height:225px;
        margin:40px 0px;
    }
    .side-adv{
        width:100%;
    }
    .img-adv{
        position:absolute;
        width:32px;
        height:20px;
        background:rgba(0,0,0,0.3);
        color:white;
        font-size:12px;
        line-height:20px;
        text-align:center;
        right:0;
        bottom:0;
    }
    .movie-hot ul li{
        margin-top:20px;
        font-size:13px;
        position:relative;
    }
    .movie-hot .title{
        color:#37a;
    }
    .movie-hot .commend{
        position: absolute;
        color:#999;
        right:0;
    }
    .movie-link{
        margin:40px 0px;
    }
    .movie-link ul li{
        font-size:13px;
        margin-top:15px;
    }
    .movie-look img{
        width:100%;
        margin-top:20px;
    }
    .movie-last{
        background:#f2f7f6;
        margin-top:40px;
        font-size:12px;
        width:100%;
        height:100px;
    }
    .movie-last img{
        width:96px;
        height:80px;
        float: left;
        padding:10px;
    }
    .last-content{
        padding:10px;
    }
    .last-content span{
        color:#37a;
    }
    .last-time{
        margin-top:10px;
        color:#999;
    }
</style>
