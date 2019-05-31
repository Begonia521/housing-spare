<template>
    <div id="login">
        <div class="login_bg">
            <div class="login_wrap">
                <div class="left_wrap">
                    <div class="welcome">
                        <h1>Hello 欢迎回来</h1>
                        <p>小居在此恭候多时</p>
                    </div>
                    <div class="user_phone">
                        <div class="eightsix">
                            <p>+86</p>  
                        </div>
                        <input placeholder="请输入手机号">
                    </div>
                    <div class="user_password">
                        <input placeholder="请输入密码">
                    </div>
                    <div class="autoLogin">
                        <h3>手机验证码登录</h3>
                        <p>忘记密码？</p>
                    </div>
                    <button>登录</button>
                    <div class="other_login">
                        <span>其他方式登录</span>
                    </div>
                    <div class="other_name">
                        <p class="name1">
                            <i class="el-icon-message"></i>
                        </p>
                        <p class="name2"></p>
                    </div>
                    <div class="no_user">
                        <h5>没有账号，立即注册</h5>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
                <div class="right_wrap">
                    <img src="../../assets/uhomes.png" alt="">
                    <div class="uhomes_ewm">
                      <img src="../../assets/left_ewm.png" alt="">
                      <p>App预订更快捷</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"login"
}
</script>
<style lang="scss" scoped>
    #login{
      .login_bg{
        width: 100%;
        height: 100%;
        background: url(http://pcpic.uhouzz.com/online/cdn/users/images/loginbg.cafee00e.jpg) no-repeat;
        background-size: cover;
        overflow: hidden;
        .login_wrap{
          width: 750px;
          height: 440px;
          background-color: #fff;
          border-radius: 9px;
          padding: 40px 38px 41px 40px;
          margin: 80px auto;
          .left_wrap{
            margin: 0;
            padding: 0;
            width: 50%;
            float: left;
            .welcome{
              p{
                font-size: 14px;
                color: gray;
                margin-top: 10px;
              }
            }
            .user_phone,.user_password{
              height: 40px;
              border: 1px solid #d3d3d3;
              border-radius: 3px;
              margin-top: 20px;
              .eightsix{
                width: 100px;
                border-right: 1px solid #d3d3d3;
                float: left;
                p{
                  font-size: 14px;
                  padding: 12px;
                }
              }
              input{
                width: 68.9%;
                height: 100%;
                border: 0;
                padding-left: 15px;
              }
            }
            .user_password{
              input{
                width: 96%;
              }
            }
            .autoLogin{
              margin: 20px 0;
              h3{
                font-size: 14px;
                color: #2bbaae;
                font-weight: bold;
                float: left;
              }
              p{
                float: right;
              }
            }
            button{
              width: 100%;
              height: 40px;
              text-align: center;
              line-height: 40px;
              background: #d3d3d3;
              color: #fff;
              border-radius: 3px;
              border: 0;
              font-size: 16px;
              font-weight: 700;
              margin-top: 20px;
            }
            .other_login{
              margin-top: 30px;
              border-top: 1px solid #e8e8e8;
              span{
                color: #999;
                font-size: 14px;
                position: relative;
                left: 37%;
                top: -10px;
                background: #fff;
                padding: 0 10px;
              }
            }
            .other_name{
              margin-top: 20px;
              display: flex;
              justify-content: center;
              .name1{
                width: 40px;
                height: 40px;
                border-radius: 30px;
                background-color: #fab227;
                margin-right: 30px;
                i{
                  font-size: 30px;
                  color: white;
                }
              }
              .name2{
                width: 40px;
                height: 40px;
                border-radius: 30px;
                background-color: #66cb64;
              }
            }
            .no_user{
              margin-top: 20px;
              h5{
                float: left;
                margin-left: 125px;
                margin-top: -1px;
              }
            }
          }
          .right_wrap{
            float: left;
            img{
              margin-left: 15px;
            }
            .uhomes_ewm{
              width: 110px;
              height: 110px;
              padding: 10px;
              background: #f7f7f7;
              margin: 37px auto;
              img{
                width: 100px;
                height: 100px;
                margin: 5px;
              }
              p{
                width: 125px;
                margin-left: -8px;
                font-size: 18px;
                font-weight: 700;
                padding-top: 20px;
              }
            }
          }
        }
      }
    }
    
</style>

