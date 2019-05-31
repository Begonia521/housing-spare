<template>
<div class="loop">
   <div class="block">
    <el-carousel height="600px">
      <el-carousel-item v-for="item in 4" :key="item">

      </el-carousel-item>
      <div class="search">
         <div class="search_one">
            <div class="search_top">
               <ul>
                  <li>品牌公寓</li>
                  <li>精品民宿</li>
               </ul>
            </div>
            <el-input
               placeholder="你想去哪里？输入城市或学校"
               prefix-icon="el-icon-search"
               v-model="input2">
            </el-input>
            <el-button  @click="gogg">搜索</el-button>
         </div>
      </div>
    </el-carousel>
    
   </div>
   
</div>
  
</template>
<script>
export default {
   name:'loop',
   data(){
      return{
         input2:'',
      }
   },
   methods:{
      gogg() {
      this.$router.push({
        name: "unite"
      })
    }
   }
}
</script>

<style lang='scss'>
  .el-carousel{
     position: relative;
     .search{
        width: 100%;
        height: 95px;
        background: rgba(0,0,0,.3);
        position: absolute;bottom: 0;
        z-index: 5;
        .search_one{
           width: 900px;
           height: 100%;
           margin: 0 auto;
           .search_top{
              width: 100%;
              height: 40px;
              ul>li{
                 width: 64px; 
                 height: 40px;
                 float: left;
                 text-align: center;
                 line-height: 40px;
                 font-size: 16px;
                 color: #fff;
                 font-weight: 900;
                 margin-left: 30px;
              }
           }
           .el-input{
              width: 780px;
           }
           .el-input__inner{
              border-radius: 4px 0 0 4px;
              border: 0;
           }
           .el-button{
              float: right;
              width: 120px;
              height: 40px;
              clear: both;
              border-radius: 0 4px 4px 0;
              border: 0;
              background: #ff5a5f;
              font-size: 18px;
              font-weight: 900;
              color: #fff;
           }
        }
     }
  }
     
  .el-carousel__item:nth-of-type(1) {
     background:url(../../assets/loop1.jpg);
  }

  .el-carousel__indicator{
     display: none;
  }
  
  .el-carousel__item:nth-of-type(2) {
     background:url(../../assets/loop2.jpg);
  }
  .el-carousel__item:nth-of-type(3) {
     background:url(../../assets/loop3.jpg);
  }
  .el-carousel__item:nth-of-type(4) {
     background:url(../../assets/loop4.jpg);
  }
</style>