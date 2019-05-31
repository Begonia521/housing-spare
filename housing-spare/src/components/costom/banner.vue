<template>
    <div class="custom_banner">
        <headers></headers>
        <div class="banner">
            <div class="center_title">
                <h1>
                    定制服务
                </h1>
                <el-button>默认按钮</el-button>
            </div>
        </div>
        <div class="custom_intro">
            <div class="introduce">
                <h4>
                    寻找海外房源，Uhomes为你代言
                </h4>
                <p>
                    也许你会遇到，寻寻觅觅却没有心仪好房；也许你会遇到，好友相约却找不到合适的合租房；也许你会遇到，黑心中介不仅骗钱更耽误正常的学习和生活，以上所有，都不应该成为留学路上的绊脚石。Uhomes全面启动定制服务，将收集您对海外新家的一切需求甚至想象，帮您挑选最理想的好房源。
                </p>
            </div>
            <img src="../../assets/xx.jpg" alt="" class="img_b">

            <div class="flow_wrap">
                <h3>定制服务流程</h3>
                <div style="height: 500px;">
                    <el-steps direction="vertical" :active="5">
                        <el-step title="填写申请表并交纳服务费" description="我们会竭诚为您提供最安全、最安心的服务，保障您的入住体验。"></el-step>
                        <el-step title="小居为您筛选优质房源" description="收到您的需求后，小居将在24小时内跟您联系并确认详细的需求，并随后为您推荐符合要求的房源以供选择。"></el-step>
                        <el-step title="安排小居帮您实地看房" description="小居将通过视频的方式帮助您在线看房或发送视频资料；如果您正好在当地，小居可直接陪同看房。(具体支持国家与顾问沟通为准)"></el-step>
                        <el-step title="选中房源" description="在线支付预订金签署入住协议。"></el-step>
                        <el-step title="安心等待入住啦" description="我们会竭诚为您提供最安全、最安心的服务，保障您的入住体验。"></el-step>
                    </el-steps>
                </div>
            </div>

            <div class="good_wrap">
                <h4 class="gd_h">为什么要选择Uhomes定制服务</h4>
                <ul class="botm_gd">
                    <li class="bgd">
                        <div class="hous"></div>
                        <h4>贴心</h4>
                        <p>
                            金牌小居7*24小时随时待命为您寻找最合适的房源。
                        </p>
                    </li>
                    <li class="bgd">
                        <div class="anq"></div>
                        <h4>安全</h4>
                        <p>
                            所有房源经过严格审核，保障房源的真实性和安全性。
                        </p>
                    </li>
                    <li class="bgd">
                        <div class="zuans"></div>
                        <h4>专业</h4>
                        <p>
                            小居将提供全套专业服务，帮您跨越语言障碍轻松搞定合同签署，避免租房陷阱。
                        </p>
                    </li>
                </ul>
                <el-button>默认按钮</el-button>
            </div>
        <end></end>

        </div>
        
    </div>
</template>

<script>
import headers from '@/components/home/headers'
import end from '@/components/home/end'
export default {
    name:"custom_banner",
    components:{
        headers,
        end
    }
}
</script>

<style lang="scss">
body{
    background: #f5f7fa;
}
.custom_banner{
    position: relative;
    .custom_intro{
            width: 100%;
            // height: 1530px;
            margin-top: -100px;
            position: absolute;
            .good_wrap{
                width: 980px;
                height: 340px;
                background: #fff;
                margin: 0 auto 50px auto;
                padding: 50px 100px 0;
                .gd_h{
                    text-align: center;
                    font-size: 30px;
                    color: #313131;
                    font-weight: 400;
                }
                .botm_gd{
                    margin-top: 50px;
                    display: flex;
                    justify-content:space-between;
                    .bgd{
                        width: 280px;
                        height: 110px;
                        .hous{
                            width: 48px;
                            height: 48px;
                            background: url(../../assets/red/house1.png)no-repeat;
                            float: left;
                        }
                        .anq{
                            width: 48px;
                            height: 48px;
                            background: url(../../assets/red/anquan.png)no-repeat;
                            float: left;
                        }
                        .zuans{
                            width: 48px;
                            height: 48px;
                            background: url(../../assets/red/zuanshi.png)no-repeat;
                            float: left;
                        }
                        h4{
                            float: left;
                            display: block;
                            width: 210px;
                            margin-left: 22px;
                            height: 50px;
                            line-height: 50px;
                            font-size: 18px;
                            font-weight: 400;
                        }
                        p{
                            margin-top: 20px;
                            font-size: 14px;
                            color: #666;
                            line-height: 20px;
                            float: left;
                        }
                    }
                }
                .el-button{
                    width: 380px;
                    height: 50px;
                    background-color: rgb(255, 90, 95);
                    color: #fff;
                    border:0;
                    margin: 30px 0px 50px 300px;
                    font-weight: 700;
                    font-size: 16px;
                }
            }
            .flow_wrap{
                width: 980px;
                height: 600px;
                background: #fff;
                margin: 20px auto 0 auto;
                padding: 50px 100px 0;
                h3{
                    text-align: center;
                    font-size: 30px;
                    color: #313131;
                    line-height: 100%;
                    font-weight: 400;
                    padding-bottom: 50px;
                }
                .el-step__icon{
                    width: 40px;
                    height: 40px;
                    background: #ff5a5f;
                    border-color:#ff5a5f;
                    color: #fff;
                }
                .el-step__head{
                    width: 50px;
                    .el-step__line{
                       left: 18px;
                    }
                }
                .el-step__title{
                    margin-top:10px;
                    font-size: 18px;
                    color: #313131;
                }
                .el-step__description{
                    margin-top: 5px;
                    color: #666;
                    font-size: 14px;
                    line-height: 20px;
                }
            }
            .img_b{
                display: block;
                margin: 0 auto;
            }
            .introduce{
                width: 980px;
                height: 250px;
                padding: 0 100px;
                background: #fff;
                margin: 0 auto;
                    display: flex;
                    justify-content: center;
                        flex-direction: column;
                h4{
                    text-align: center;
                    font-size: 30px;
                    line-height: 100%;
                    font-weight: 400;
                }
                p{
                    line-height: 20px;
                    margin-top: 20px;
                    font-weight: 400;
                    font-size: 14px;
                    letter-spacing: 2px;
                }
            }
        }
    .banner{
        width: 100%;
        height: 450px;
        background: url(//pcpic.uhouzz.com/online/cdn/custom/images/banner.e05709c4.jpg) no-repeat center;
        position: relative;
        .center_title{
            width: 200px;
            height:118px;
            position: absolute;left: 860px;top:100px;
            h1{
                text-align: center;
                color: #fff;
                font-weight: 500;
                font-size: 48px;
                letter-spacing: 2px;
                display: block;
                line-height: 100%;
            }
            .el-button{
                background: none;
                margin-top: 30px;
                border: 1px solid #fff;
                color: #fff;
                font-size: 14px;
                font-weight: 700;
                width: 200px;
                height: 40px;
            }
        }
    }
}
</style>
