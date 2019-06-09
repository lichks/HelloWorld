<template>
<div class="father">
  <!-- 轮播图 -->
  <el-carousel  height="520px" :interval="1500" indicator-position="outside">
    <el-carousel-item v-for="(img,i) of imglist" :key="i">
      <img :src="img.url" class="myimg">
    </el-carousel-item>
   </el-carousel>
    <!-- 订票功能 -->
  <el-tabs v-model="activeName" type="border-card" class="ticketnav">
    <el-tab-pane name="internal">
      <span slot="label" class="navtitle">国内</span>
          <ticketcontent></ticketcontent>
    </el-tab-pane>
    <el-tab-pane name="intel">
    <span slot="label" class="navtitle">国际.港澳台</span>
        <ticketcontent></ticketcontent>
    </el-tab-pane>
  </el-tabs>
  <!-- 1200px居中的父元素包裹 -->
<div class="textarea">
<h2 class="majortitle">超值特价</h2>
<!-- 白色区域 -->
<div class="extravalue">
  <!-- 标题 -->
  <el-row>
  <el-col :span="24" >
    <div class="cheap_head">
      <h3>北京出发</h3>
    </div>
    </el-col>
</el-row>
<!-- 特惠城市 -->
<el-row class="cheap_parent" >
  <el-col :span="6" v-for="(cp,i)  of  cheap" :key="i" class="mycol">
      <div class="air_cheaplist">
        <ul class="">
          <li v-for="(c,i)  of  cp.city" :key="i">
          <a  href="javascript:;">
           <span class="aircheap_city">北京-{{c.city}}</span>
           <span><sub style="color: #f60;">￥</sub><span class="aircheap_price">{{c.price}}</span><sub>起</sub></span>
          </a>
          </li>
        </ul>  
      </div>
    </el-col>
</el-row>
<!-- 标题 -->
<el-row>
  <el-col :span="24" >
    <div class="cheap_head">
      <h3>航司专区</h3>
    </div>
    </el-col>
    <!--航司城市  -->
</el-row>
<el-row class="cheap_parent" >
  <el-col :span="6" v-for="(cp,i)  of  cheap" :key="i" class="mycol">
      <div class="air_cheaplist">
        <ul >
          <li class="aircompany">{{cp.company}}</li>
          <li v-for="(c,i)  of  cp.city" :key="i">
          <a  href="javascript:;">
          <span class="aircheap_city">北京-{{c.city}}</span>
           <span><sub style="color:#f60;">￥</sub><span class="aircheap_price">{{c.price}}</span><sub>起</sub></span>
          </a>
          </li>
        </ul>  
      </div>
    </el-col>
</el-row>
</div>
<!-- 常见问题 -->
  <h3 class="questiontitle">常见问题</h3>
  <el-row>
  <el-col :span="6" class="qscol">
    <div>
      <h3>乘客类型限制</h3>
      <p>途牛旅游网暂时只支持购买成人和儿童客票，成人票≥12周岁，2周岁≤儿童票＜12周岁，暂不支持2周岁（不含）以下婴儿乘机人购票...<a href="javascript:;">更多>></a></p>
    </div></el-col>
  <el-col :span="6" class="qscol">
    <div>
    <h3>机票价格</h3>
    <p>机票价格为实时计价，可能会发生价格或舱位变更，请以支付前显示的价格为准，并尽快完成支付。支付之前请仔细查看退改签规则和实际价格...<a href="javascript:;">更多>></a></p>
    </div></el-col>
  <el-col :span="6" class="qscol">
    <div>
      <h3>支付方式</h3>
      <p>支持部分银行借记卡、信用卡等支付，购买机票暂时只支持一次性付款，暂不支持分期付款... <a href="javascript:;">更多>></a></p>
    </div></el-col>
  <el-col :span="6" class="qscol">
    <div>
    <h3>证件有效期</h3>
    <p>在填写资料时，请您确认您所选择的航班起飞日期在您的证件有效期内，否则会影响您的正常出行...<a href="javascript:;">更多>></a></p>
    </div></el-col>
</el-row>
</div>
</div>
</template>
<script>
import ticketcontent from "./ticketcontent"
  export default {
    data(){ 
       return{
          activeName:"internal",
          // 图片路径
         imglist:[{url:require('../assets/img/sun.jpg')},{url:require('../assets/img/02.jpg')},{url:require('../assets/img/girl.jpg')},{url:require('../assets/img/sky.jpg')}],
        //超值特价城市数据 
         cheap:[{city:[{city:"海南",price:450},{city:"上海",price:560},{city:"杭州",price:450},{city:"武汉",price:780}],company:"中国南方航空"},{ city:[{city:"海南",price:390},{city:"厦门",price:450},{city:"杭州",price:450},{city:"武汉",price:450}],company:"中国东方航空"},{city:[{city:"海南",price:550},{city:"上海",price:456},{city:"哈尔滨",price:450},{city:"武汉",price:670}],company:"海南航空"},{ city:[{city:"海南",price:450},{city:"上海",price:450},{city:"杭州",price:450},{city:"重庆",price:890}],company:"中国国际航空"}]
         ,          
       } 
    }, 
    // 子组件
  components:{
    ticketcontent
  },
   methods: {
    
    }
  }
</script>
 <style>

 </style>
 
<style scoped>
/* 问题标题 */
.qscol h3{
    margin: 0px;
    text-align: left;
    font-size: 17px;
} 
/* 问题段落 */
.qscol p{
    margin: 0px;
     text-align: left;
      font-family: arial,宋体,sans-serif; 
      font-size: 12px;
      line-height: 25px;
}
/*问题下更多 a标签 */
.qscol a{
   display: inline-block;
   text-decoration: none;
   color: #333
}
/* 问题下更多hover */
.qscol a:hover{
  color: red;
  transform: scale(1.11);
}
/* 4*6布局 */
.qscol{
  padding: 25px 37px ;
}
/* 常见问题 */
.questiontitle{
   text-align: left;
    height: 24px;
    line-height: 24px;
    border-bottom: 3px solid #42b312;
   padding-left:7px;
   margin-bottom: 0px;
}
/* 航空公司 */
.aircompany{
  text-align: left;
  font-size: 14px;
}
.aircheap_price{
  color: #f60;
  font-size:20px;
}
.aircheap_city{
    font-size: 13px;
    color: #333;
}
.mycol{
   border-right:1px solid #e8e8e8;
}
.air_cheaplist{
padding: 1px 15px 1px 22px;
}
.air_cheaplist sub{
font-size: 12px;
    vertical-align: middle;
    color: #666;

}
/* 特惠城市标签 */
.air_cheaplist a{
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  font-family: arial,宋体,sans-serif; 
}
.air_cheaplist a:hover{
  background: #f7f6f7;
  transform: scale(1.05);
}
.air_cheaplist li{
height: 30px;
  line-height: 30px;
  padding:5px; 
}
.air_cheaplist ul{
  list-style: none;
  width: 100%;
  padding: 0;
   margin: 0px;
}
.cheap_parent{
  padding-bottom: 18px;
  padding-top: 15px;
  border-top: 1px solid #e8e8e8;
}
.cheap_head>h3{
    display: inline;
    margin-right: 48px;
    font-size: 16px;
    color: #390;
    margin: 0px;
    font-weight: 100;
}
.cheap_head{
   text-align: left;
  height: 22px;
  padding: 12px 27px 8px;
  line-height: 22px;
}
/* 白色区域 */
.extravalue{
  border: 1px solid #e8e8e8;
  background-color: white;
  margin-bottom: 100px;
    border-radius:15px;
}
.textarea .majortitle{
    text-align: left;
    height: 24px;
    margin-bottom: 18px;
    line-height: 24px;
    font-size: 18px;
    margin-top: 0px
}

 .textarea{
  width: 1200px;
  margin:auto;
  padding-top: 30px;

}
/* 轮播图片 */
.myimg{
  width: 100%;
  height: 100%;
}
.father{
  position: relative;
  background-color: #f7f7f7
}
 
 .navtitle{
   font-size: 1.1rem;
 }
  .ticketnav{
    position: absolute;
    top:20px;
    left: 65px;
    z-index: 10;
   opacity: 0.9;
   border-radius: 12px;
  overflow: hidden;
  font-weight: 600
  
  }
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    line-height: 550px;
    margin: 0;
   
  } */
  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
  .ticketnav:hover{
    animation: shake 0.82s  both;
  }
  @keyframes shake {
10% ,70%{
transform: translate3d(-1px, 0, 0);
}
40% {
transform: translate3d(1px, 0, 0);
}
100% {
transform: translate3d(0px, 0, 0);
}
}
  
</style>

