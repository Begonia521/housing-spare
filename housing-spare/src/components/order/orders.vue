<template>
    <div class="orders">
        <headers></headers>
        <div class="orderss">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select='xone' :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="0">选项1</el-menu-item>
      <el-menu-item index="1">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="2">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2-1">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3-1" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>

        <div class="bigbox">
        <div class="order_right" v-show='ggfly[0].f1'>
            
        </div>
        <div class="order_right" v-show='ggfly[1].f1'>
            
        </div>
        <div class="order_right" v-show='ggfly[2].f1'>
            
        </div>
        </div>
        


        </div>
        <end></end>
    </div>
</template>

<script>
import headers from '@/components/home/headers'
import end from '@/components/home/end'

  export default {
      name:'orders',
      components:{
          headers,
          end
      },
    data() {
      return {
        isCollapse: false,
        ggfly:[
            {f1:true},{f1:false},{f1:false}
        ]
      };
    },
    
    methods: {
      xone(gg){
        //  console.log(gg) 
         for(let i = 0;i<this.ggfly.length;i++){
             this.ggfly[i].f1 = false
         }
         this.ggfly[gg].f1=true
         
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    // mounted(){
    //     var a1 =document.getElementsByClassName('order_right');
    //     console.log(a1)
    // }
  }
</script>

<style lang='scss'>
    .orders{
        .orderss{
            width: 1180px;
            height: 600px;
            margin: 80px auto 150px auto;
            position: relative;
            .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
            }
            .order_right{
                width: 979px;
                height: 540px;
                position: absolute;right: 0;top: 60px;
            }
            .order_right:nth-of-type(1){
                background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557672086687&di=2d20ea5c969b09d8f0700abf8e9a9b87&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F140625%2F330872-14062522191657.jpg);
            }
            .order_right:nth-of-type(2){
                background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557672764077&di=1997675d0e9cca9cdb83a3abd00df184&imgtype=0&src=http%3A%2F%2Fimg.fuyuandian.com%2Fd%2F2018%2F04%2F5ae29f0e3baaf.jpg);
            }
            .order_right:nth-of-type(3){
                background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557672824663&di=d3b9320ae7d7c0a3eb7f36a8546f1630&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fh%3D800%2Fsign%3D85404925513d269731d3055d65fab24f%2Ffaf2b2119313b07eef2c24e70cd7912396dd8c4f.jpg);
            }
        }
        
    }
</style>
