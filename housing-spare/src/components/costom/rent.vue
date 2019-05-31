<template>
    <div id="rent">
      <headers></headers>
         <div class="block">
    <el-carousel height="200px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
        <div class="jiaorent">
            <p class="rent_p">海外交房租 全网更低手续费</p>
            <form>
                <div class="search_input">
                    <!-- <img src="../assets/search.png"> -->
                    <input type="text" placeholder="请输入公寓名/房东名">
                </div>
            </form>
            <div class="hot_command">
                <p>热门推荐</p>
                <div class="hot_div">
                    <p>University Gateway - Los Angeles</p>
                    <p>University Court - Davis</p>
                    <p>Kelvin Court - Glasgow</p>
                </div>
            </div>
        </div>
        <div class="pay_way">
            <div class="pay_way_div">
                <div class="pay_wechat">
                    <!-- <img src="../assets/pay_wechat.png"> -->
                    <p>微信支付</p>
                </div>
                <div class="pay_zfb">
                    <!-- <img src="../assets/pay_zfb.png" alt=""> -->
                    <p>支付宝支付</p>
                </div>
                <div class="pay_yl">
                    <!-- <img src="../assets/pay_yl.png" alt=""> -->
                    <p>银联支付</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headers from '@/components/home/headers'
export default {
    name: 'rent',
    components:{
      headers
    }
}
</script>

<style lang="scss">
    #rent{
      width: 100%;
      height: 100%;
      .lunbo{
        width: 100%;
        height: 200px;
        background-color: lightpink;
      }
      .jiaorent{
        width: 900px;
        margin: 0 auto;
        padding-top: 60px;
        padding-bottom: 70px;
        .rent_p{
          font-size: 36px;
          text-align: center;
          margin-bottom: 60px;
        }
        form{
          height: 60px;
          .search_input{
            width: 900px;
            height: 100%;
            border: 1px solid #e8e8e8;
            img{
              margin-left: 18px;
              margin-top: 18px;
              float: left;
            }
            input{
              width: 93%;
              height: 100%;
              border:none;
              padding-left: 15px;
              font-size: 16px;
            }
          }
        }
        .hot_command{
          width: 900px;
          margin: 23px auto 0;
          display: flex;
          font-size: 14px;
          color: #666;
          .hot_div{
            display: flex;
            p{
              margin-left: 20px;
            }
            p:hover{
              color: #FF5A5F;
            }
          }
        }
      }
      .pay_way{
        width: 100%;
        height: 150px;
        background-color: #F7F7F7;
        overflow: hidden;
        .pay_way_div{
          width: 900px;
          height: 50px;
          margin: 50px auto;
          display: flex;
          justify-content: space-around;
          .pay_wechat,.pay_zfb,.pay_yl{
            width: 150px;
            height: 50px;
            img,p{
              float: left;
            }
            p{
              line-height: 50px;
              font-size: 18px;
              margin-left: 10px;
            }
          }
          .pay_wechat{
              img{
                  color: green;
              }
          }
        }
      }
    }
</style>

