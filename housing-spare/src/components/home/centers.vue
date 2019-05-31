<template>
    <div class="ook">
        <h2 class="centers_top">
          Travel TV
        </h2>
        <div class="Accordion">
        <div class="Accordion_t">
          <ul>
            <li>
              <div>
                <h4>园林酒店</h4>
              </div>
              <div></div>
            </li>
            <li>
              <div>
                <h4>情侣酒店</h4>
              </div>
              <div></div>
            </li>
            <li>
              <div>
                <h4>设计师酒店</h4>
              </div>
              <div></div>
            </li>
            <li>
              <div>
                <h4>青年旅社</h4>
              </div>
              <div></div>
            </li>
            <li>
              <div>
                <h4>特色客栈</h4>
              </div>
              <div></div>
            </li>
            <li>
              <div>
                <h4>海岛酒店</h4>
              </div>
              <div></div>
            </li>
            <li>
              <div>
                <h4>海外温泉</h4>
              </div>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'centers'
}
</script>

<style lang='scss'>
.ook{
  .centers_top{
        text-align: center;
    font-size: 36px;
    padding-bottom: 30px;
        padding-top: 80px;
        line-height: 100%;
    font-weight: 400;
  }
    .Accordion {
    width: 100%;
    height: 260px;
    margin-bottom: 20px;
    .Accordion_t {
      width: 1200px;
      height: 260px;
      margin: 0 auto;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        li {
          transition: all 1s;
          position: relative;
          width: 171px;
          height: 260px;
          div {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            h4 {
              width: 30px;
              padding-top: 30px;
              margin: 0 auto;
              display: block;
              font: 30px/30px Microsoft Yahei;
              color: #fff;
            }
          }
          div:nth-of-type(1) {
            z-index: 6;
            background: rgba(0, 0, 0, 0.3);
          }
          div:nth-of-type(2) {
            z-index: 5;
          }
        }
        li:hover {
          div {
            background: rgba(0, 0, 0, 0);
          }
          width: 510px;
          h4 {
            display: none;
          }
        }
        li:nth-of-type(1) {
          div:nth-of-type(2) {
            background: url(../../assets/t1.jpg) no-repeat center;
          }
        }
        li:nth-of-type(2) {
          div:nth-of-type(2) {
            background: url(../../assets/t2.jpg) no-repeat center;
          }
        }
        li:nth-of-type(3) {
          div:nth-of-type(2) {
            background: url(../../assets/t3.jpg) no-repeat center;
          }
        }
        li:nth-of-type(4) {
          div:nth-of-type(2) {
            background: url(../../assets/t4.jpg) no-repeat center;
          }
        }
        li:nth-of-type(5) {
          div:nth-of-type(2) {
            background: url(../../assets/t5.jpg) no-repeat center;
          }
        }
        li:nth-of-type(6) {
          div:nth-of-type(2) {
            background: url(../../assets/t6.jpg) no-repeat center;
          }
        }
        li:nth-of-type(7) {
          div:nth-of-type(2) {
            background: url(../../assets/t7.jpg) no-repeat center;
          }
        }
      }
    }
  }
}
</style>
