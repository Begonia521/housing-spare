<template>
    <div class="home">
        <headers></headers>
        <loop></loop>
        <rental></rental>
        <centers></centers>
        <end></end>
    </div>
</template>

<script>
import headers from '@/components/home/headers'
import loop from '@/components/home/loop'
import rental from '@/components/home/rental'
import centers from '@/components/home/centers'
import end from '@/components/home/end'


export default {
    name:'home',
    data(){
        return{

        }
    },
    components:{
        headers,
        loop,
        rental,
        centers,
        end
    }
}
</script>

<style lang='scss'>
body{
    width: 100%;
    height: 100%;
}
.home{
    width: 100%;
    height: 100%;
}
</style>
