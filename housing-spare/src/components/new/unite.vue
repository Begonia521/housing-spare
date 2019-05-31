<template>
    <div id="unite">
        <div class="unite_img">
            <img src="https://pic.uhouzz.com/eventImages/8a/53e0fa14cb2fc4a875e758edcb2624a600a8d5.jpg" alt="">
        </div>
        <div class="nav">
            <p>行前会介绍</p>
            <p>活动流程</p>
            <p>往期活动现场</p>
        </div>
        <div class="nav_content">
            <h1>行前会介绍</h1>
            <div class="p_content">
                <div class="content1">
                    <p>作为即将来到英国</p>
                    <p>踏上一段全新人生旅途的新生</p>
                    <p>你是不是对未来的学习及生活</p>
                    <p>充满期待、希望、或是担忧呢？</p>
                </div>
                <div class="content2">
                    <p>2019 Unite&Uhomes英国行前会上</p>
                    <p>你们所有的迷茫和困惑</p>
                    <p>将由英国高校的海归学长学姐们</p>
                    <p>亲自为你现场答疑解惑</p>
                    <p>除了留学经验交流及现场互动外</p>
                    <p>还有英国各地区衣食住行</p>
                    <p>和看房租房血泪经验史等</p>
                    <p>各式各样新奇有趣的</p>
                    <p>留学生活体验分享~</p>
                </div>
                <div class="content3">
                    <p>【行前会福利&抽奖】</p>
                    <p>现场还有抽奖福利，有机会获得笔记本电脑、行李箱、玩偶等大奖哦！</p>
                </div>
                <div class="content4">
                    <p>【时间地点】</p>
                    <p>时间：6月2号 下午两点（北京时间）</p>
                    <p>地址：北京丽亭华苑酒店三层金辉厅（地铁10号线知春路站F出口）</p>
                </div>
            </div>
        </div>
        <div class="nav_content">
            <h1>活动流程</h1>
            <div class="p_content">
                <div class="content5">
                    <p>14:00-14:03 主持人开场活动介绍。</p>
                    <p>14:03-14:10 Unite Students嘉宾讲话。</p>
                    <p>14:10-14:17 异乡好居嘉宾讲话。</p>
                    <p>14:20-14:30 留英学长学姐经验分享（一）。</p>
                    <p>14:30-14:45 现场互动小游戏。</p>
                    <p>14:45-14:55 留英学长学姐经验分享（二）。</p>
                    <p>14:55-15:05 茶歇、自由交流。</p>
                    <p>15:05-15:25 留英学长学姐经验分享（三）。</p>
                    <p>15:25-15:43 互动小游戏、抽奖。</p>
                    <p>15:43-16:13 学姐学长现场互动答疑。</p>
                    <p>16:13-16:18 终极大奖抽奖（笔记本电脑大奖）。</p>
                    <p>16:20 活动结束。</p>
                </div>
            </div>
        </div>
        <div class="nav_content">
            <h1>往期活动现场</h1>
            <div class="p_content">
                <p class="content6">
                    <img src="https://pic.uhouzz.com/thumbImages/77/f4118faefb7b82ab1f01a2edcfd662865e3fb5.jpg">
                    <img src="https://pic.uhouzz.com/thumbImages/10/0e3bc459d0d372261673f9102d295742799135.jpg">
                </p>
            </div>
        </div>
        <button>返回首页</button>
        <!-- <div class="activity_form">
            <div class="activity_form_div">
                <p>英国行前会报名</p>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name:"unite"
}
</script>

<style lang="scss" scoped>
    #unite{
      width: 100%;
      height: 100%;
      .unite_img{
        width: 100%;
        height: 300px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .nav{
        width: 100%;
        height: 60px;
        margin: 3px 0;
        background: #fff;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.5);
        p{
          float: left;
          line-height: 60px;
          font-weight: bold;
          padding: 0 13px;
        }
      }
      .nav_content{
        width: 100%;
        padding-top: 50px;

        h1{
          text-align: center;
          font-size: 44px;
        }
        .p_content{
          width: 1150px;
          border-bottom: 1px lightgray solid;
          margin: 0 auto;
          .content1{
            height: 115px;
          }
          .content2{
            height: 235px;
          }
          .content3{
            height: 70px;
          }
          .content4{
            height: 150px;
          }
          .content1,.content2,.content3,.content4,.content5{
            p{
              padding-top: 3px;
              color: #666;
              margin-left: 40px;
            }
          }
        }
        .content5{
          height: 350px;
        }
        .content6{
          height: 1340px;
          img{
            padding: 15px 0;
            margin-left: 40px;
          }
        }
      }
      button{
        border: 0;
        display: block;  
        margin: 50px auto;
        width: 380px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        background: #78ccce;
        font-size: 16px;
        border-radius: 4px;
      }
      .activity_form{
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        overflow: hidden;
        .activity_form_div{
          width: 1150px;
          height: 300px;
          background-color: #fff;
          margin: 50px auto;
        }
      }
    }
</style>
