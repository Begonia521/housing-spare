<template>
    <div class="headers">

        <div class="nav-top">
            <div class="top-center">

                <div class="logo-text">
                    <span>欢迎来到异乡好居~</span>
                    <a href="#" class="a2" @click="loin">登录</a>
                    <a href="#" class="a1">注册</a>
                </div>

                <div class="logo-right a1">
                    999-999-9999
                </div>
                <div class="logo-right a2" @click="order">
                    我的订单
                </div>

            </div>
        </div>

        <div class="nav-bottom">
            <div class="bottom-center">
                <div class="logdiv">

                </div>
                <ul>
                    <li @click="ggg">全球租房</li>
                    <li @click="dingzhi">定制服务</li>
                    <li @click="fff">海外交房租</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'headers',
    methods:{
        dingzhi() {
      this.$router.push({
        name: "banner"
      })
    },
    ggg() {
      this.$router.push({
        name: "home"
      })
    },
    fff() {
      this.$router.push({
        name: "rent"
      })
    },
    loin() {
      this.$router.push({
        name: "login"
      })
    },
    order() {
      this.$router.push({
        name: "orders"
      })
    }
    }
}
</script>

<style lang='scss'>
.headers{
    width: 100%;
    height: 100px;
    .nav-top{
        width: 100%;
        height: 40px;
        background:#313131;
        .top-center{
            max-width: 1180px;
            height: 100%;
            margin: auto;
            position: relative;
            .logo-text{
                position: absolute;top:26%;
                background: auqa;
                height: 16px;
                font-family: "Hiragino Sans GB",
                "Helvetica",Arial,"Microsoft YaHei UI",
                "Microsoft YaHei","Microsoft JhengHei",sans-serif;
                font-size: 14px;
                .a1{
                    border-left: #fff solid 1px;
                }
                span{
                 color:#fff;
                 margin-right: 20px;
                }
                a{
                 color:#fff;
                 padding: 0 10px 0 10px;
                }
            }
            .logo-right{
                width: 120px;
                height: 100%;
                float: right;
                text-align: center;
                line-height:40px;
                font-family: "Hiragino Sans GB",
                "Helvetica",Arial,"Microsoft YaHei UI",
                "Microsoft YaHei","Microsoft JhengHei",sans-serif;
                font-size: 14px;
            }
            .a1{
                color: #fca646;
            }
            .a2{
                color: #fff;
            }
        }
    }

    .nav-bottom{
        width: 100%;
        height:60px;
        background:#fff;
        .bottom-center{
            max-width: 1180px;
            height: 100%;
            margin: auto;
            .logdiv{
                width: 140px;
                height: 100%;
                background-image: url(../../assets/logo.png);
                float: left;
                margin-right: 50px;
            }
            ul,li{
                float: left;
                line-height: 60px;
                font-family: "Hiragino Sans GB","Helvetica",
                Arial,"Microsoft YaHei UI","Microsoft YaHei",
                "Microsoft JhengHei",sans-serif;
                font-size: 16px;
                color:#313131;
                margin-right: 30px;
            }
        }
    }
}
</style>
