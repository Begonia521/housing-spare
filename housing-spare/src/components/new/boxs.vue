<template>
    <div id="index">
        <div class="tbody">
            <div class="onecourt">
                <div class="top-hang">
                    <span>首页 > 英国 > 伦敦</span>
                    <span class="grays">> Somerset Court</span>
                </div>
                <div>
                    <h2> Somerset Court</h2>
                </div>
                <div class="court-bot">
                    <span>地址：Aldenham Street, Euston, London, NW1 1AS, London, NW1 1AS</span>
                    <span class="ckmap">查看地图</span>
                </div>
                <div class="lunbo1">
                    <div>
                        <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="item in 4" :key="item">
                                
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <p class="gaikuang"><span>房间类型</span><span>公寓楼设施</span><span>地图</span><span>房源描述</span></p>
                <div class="image1">
                    <div class="dajia">
                        <p>独家特惠·返现高达 <span></span></p>
                        <span>2人预订返£80, 4人以上返£100, 6人以上返£120;(租期大于39周)</span>
                    </div>
                    <div class="canjia">我要参加</div>
                </div>
                <h3>房间类型</h3>
                <p class="fang"><span>单人卧室</span><span>单人套房</span><span>xbxb</span></p>
                <div class="kongone">
                    <img src="https://img.uhouzz.com/testing/static/app/2018/11/singlebedroom_pc_intro.png" alt="">
                    <div class="woshi">
                        <h3>单人卧室</h3>
                        <p>适合单身贵族；多人团订也可以</p>
                        <span>即是单间，一个人住一个房间。可称为single room或者en-suite，需与他人共享客厅和厨房。</span>
                    </div>
                </div>
                <div class="kongtwo">
                    <div class="sheshi">
                        <p>Classic En-suite Room</p>
                        <span>独立卫浴·12m²·双人床·122x190(cm)</span>
                    </div>
                    <div class="jiage"></div>
                    <div class="jiage"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'boxs'
}
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-image: url(https://image.uhomes.com/house/c9/730e2358761e0f3d31bdf344d91803309f98e1.jpg?x-oss-process=image/resize,m_pad,w_690,h_387,color_f7f7f7);
    background-repeat: no-repeat;
    background-position-x: -56px;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-image: url(https://image.uhomes.com/house/bf/ec635e263f3a7946bf2cc873a38723c28f94ec.jpg?x-oss-process=image/resize,m_pad,w_690,h_387,color_f7f7f7);
  }

    .tbody{
        width: 100%;
        
    }
    .onecourt{
        width: 88%;
        margin: 0 auto;
    }
    .top-hang{
        font-size: 14px;
        margin: 10px 0;
    }
    .grays{
        color: #999;
    }
    .court-bot{
        font-size: 14px;
        font-family: iconfont;
    }
    .ckmap{
        color: #ff5a5f;
        font-weight: bold;
        margin-left: 20px;
    }
    .lunbo1{
        margin: 20px 0;
        width: 640px;
        height: 390px;
        background: #F7F7F7;
    }
    .lunbo1>div{
        width: 580px;
        height: 100%;
        margin: 0 auto;
    }
    .gaikuang>span{
        font-size: 18px;
        margin-right:20px; 
    }
    .gaikuang{
        border-bottom: rgb(185, 184, 184) 1px solid;
        width: 780px;
        padding-bottom: 30px;
    }
    .image1{
        background-image:url(https://pcpic.uhouzz.com/static18/client/img/exclusive.0ed7618.png);
        width:780px;
        height: 100px;
        background-size: 100%;
        position: relative;
    }
    .dajia{
        display: inline-block;
        color: #fff;
        width: 365px;
        margin: 0 140px;
    }
    .dajia>p{
        font-size: 20px;
        font-weight: 700;
    }
    .canjia{
        display: inline-block;
        width: 130px;
        height: 40px;
        background: #ff5a5f;
        border-radius: 3px;
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        line-height: 40px;
    }
    .fang{
        color: #ff5a5f;
    }
    .fang>span{
        display: inline-block;
        height: 30px;
        margin-right: 20px;
        padding: 10px 0;
        font-weight: 700;
        font-size: 14px;
    }
    .kongone{
        width: 780px;
        height: 132px;
        border: 1px solid #e8e8e8;
        padding: 5px 0 5px 0;
        border-radius: 2px;
    }
    .kongone>img{
        height: 130px;
        display: inline-block;
        margin-left: 10px;
    }
    .woshi{
        display: inline-block;
        margin: 0 20px;
        line-height: 170%;
    }
    .woshi>p{
        color: #5c5c5c;
        font-weight: 700;
        font-size: 14px;
    }
    .woshi>span{
        font-size: 14px;
    }
    .kongtwo{
        height: 230px;
        width: 780px;
        border: 1px solid #e8e8e8;
        border-radius: 2px;
        margin-top: 20px;
        overflow: hidden;
    }
    .sheshi{
        width: 100%;
        height: 82px;
        border-bottom: 1px solid #e8e8e8;
        padding: 20px;
    }
    .sheshi>p{
        border-bottom: 1px solid #313131;
        font-weight: 700;
        font-size: 14px;
        width: 153px;
    }
    .jiage{
        width: 100%;
        height: 73px;
        border-bottom: 1px solid #e8e8e8;
    }
    .jiage:hover{
        background: #F7F7F7;
    }
</style>
