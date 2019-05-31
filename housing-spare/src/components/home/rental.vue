<template>
    <div class="retal">
        <div class="retal_ready">
            <h2 class="title">当季热门租房榜</h2>
            <p class="sub_title">精选当前最热门的留学公寓，民宿</p>
            <div class="tab_container">
                <h3 v-for="(item,index) in TabArray" :key="item.url" :class="index==0?'a1':'a2'" @click="tabFn(index)" class="gogo">
                    {{ item.gb }}
                </h3>
            </div>
            <div class="tab_content">
                <ul>
                    <li class="house_list" v-for="(item,index) in tabx" :key="index" @click="gogg">
                        <img width="280" height="157" :src="item.imgsrc" alt="伦敦|Somerset Court" style="display: block;">
                        <h4 class="c-title">
                            <span class="city flow">
                                {{item.city}}
                            </span>
                            <span class="line flow"></span>
                            <span class="house-title">
                                {{item.scout}}
                            </span>
                        </h4>
                        <div class="desc">
                            <p class="price">£
                            <span>305</span>
                            起/周
                            </p>
                            <div class="distance">
                                <p class="caption">{{item.ucl}}</p>
                                <p class="cca">
                                    <span>
                                        <i class="icon_kc"></i>
                                        <em>{{item.carmain}}</em>
                                    </span>
                                    <span>
                                        <i class="icon_zxc"></i>
                                        <em>{{item.bikmai}}</em>
                                    </span>
                                    <span>
                                        <i class="icon_bx"></i>
                                        <em>{{item.walkmain}}</em>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {getFlyHead} from '../../api'
import {getFly} from '../../api'
export default {
    name:'retal',
    data(){
        return{
            TabArray:[],
            tabx:[],
            ind:0
        }
    },
    mounted(){
        getFlyHead().then((
            res => {
                this.TabArray = res.data;
            }
        ))
      

    },
    updated(){
          getFly({id:this.TabArray[this.ind].url}).then((res=>{
                // console.log(res.data)
                this.tabx=res.data;
            }))
    },
    methods:{
        gogg() {
      this.$router.push({
        name: "boxs"
      })
    },
        tabFn(i){
            let gi = document.getElementsByClassName("gogo");
            console.log(gi.style)
            for(let j=0;j<gi.length;j++){
                // gi[j].style.background='red'
                gi[j].style.color='black';
                gi[j].style.borderBottom='0px solid #fff'
            }
            gi[i].style.color='red';
            gi[i].style.borderBottom='2px solid yellow'

            // console.log(this.TabArray[i].url)
            getFly({id:this.TabArray[i].url}).then((res=>{
                // console.log(res.data)
                this.tabx=res.data;
                this.ind=i;
            }))

        }
    }
}
</script>

<style lang='scss'>
.retal{
    width: 100%;
    height: auto;
    .retal_ready{
        width: 1180px;
        height: 830px;
        margin: 0 auto;
        padding-top: 50px;
        .title{
            text-align: center;
            font-size: 36px;
            font-weight: 400;
            padding-bottom: 30px;
        }
        .sub_title{
            color: #666;
            padding-top: 15px;
            padding-bottom: 30px;
            text-align: center;         
        }
        .tab_container{
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            display: flex;
            justify-content: center;
            padding-bottom: 10px;
            h3{
                margin-right: 15px;
                padding: 7px 5px;
                cursor: pointer;
                font-size: 16px;
            }
            .a1{
                color: #ff5a5f;
                border-bottom: 2px solid #ff5a5f;
            }
        }
        .tab_content{
                line-height: 100%;
                font-weight: 400;
                -webkit-font-smoothing: antialiased;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 1180px;
                height: 660px;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    .house_list{
                        position: relative;
                        width: 278px;
                        height: 310px;
                        margin-right: 20px;
                        margin-top: 20px;
                        border: 1px solid #e8e8e8;
                        .c-title{
                            padding: 11px 15px 0;
                            font-size: 16px;
                            max-height: 60px;
                            overflow: hidden;
                            span{
                                line-height: 1.5;
                            }
                            .city{
                                padding-right: 8px;
                                font-weight: 700;
                            }
                            .house-title{
                                padding-left: 8px;
                                font-weight: 400;
                            }
                            .flow{
                                float: left;
                            }
                            .line{
                                display: block;
                                margin-top: 4px;
                                width: 1px;
                                height: 16px;
                                background: #d3d3d3;
                            }
                        }
                        .desc{
                            width: 100%;
                            position: absolute;
                            left: 0;
                            bottom: 15px;
                            padding: 0 15px;
                            .price{
                                color: #ff5a5f;
                                font-size: 14px;
                                font-weight: 400;
                                span{
                                    font-weight: 700;
                                    font-size: 18px;
                                    padding: 0 5px;
                                }
                            }
                            .distance{
                                    color: #666;
                                    font-size: 12px;
                                    line-height: 100%;
                                    font-weight: 400;
                                    .caption{
                                        padding: 15px 0 10px;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        overflow: hidden;
                                    }
                                    .cca{
                                            display: flex!important;
                                            align-items: center;
                                            line-height: 100%;
                                            font-weight: 400;
                                            span{
                                                    margin-right: 10px;
                                            }
                                            .icon_kc{
                                                width: 14px;
                                                height: 14px;
                                                display: inline-block;
                                                background: url(../../assets/icon_t64di211r8r/kc.png)
                                            }
                                            .icon_zxc{
                                                width: 14px;
                                                height: 14px;
                                                display: inline-block;
                                                background: url(../../assets/icon_t64di211r8r/zxc.png)
                                            }
                                            .icon_bx{
                                                width: 14px;
                                                height: 14px;
                                                display: inline-block;
                                                background: url(../../assets/icon_t64di211r8r/bx.png)
                                            }
                                    }
                                }
                        }
                    }
                    .house_list:nth-of-type(4){
                        margin-right: 0;
                    }
                    .house_list:nth-of-type(8){
                        margin-right: 0;
                    }
                }
                
        }
    }
}
</style>
