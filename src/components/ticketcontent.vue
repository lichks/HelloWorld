<template>
  
  <div class="content">

    <div class="formflex">
         <!-- 航班 -->
        <div class="type from_marginbottom">
            <div class="form-title"><span>航班类型</span></div>
         </div>
         <!-- 单程往返切换 -->
       <div class="radio myheight">
         <div class="formflex">
        <el-radio-group v-model="radio1" fill="#42b312" text-color="#fff">
        <el-radio-button label="单程"></el-radio-button>
        <el-radio-button label="往返"></el-radio-button>
        </el-radio-group>
        </div>     
     </div>
     </div>
       <!-- 出发城市和到达城市 -->
    <div class="formflex">
      <!-- 出发城市和到达城市标题 -->
      <div>
      <div class="type from_marginbottom">
         <div class="form-title"><span>出发城市</span></div>
      </div>
      <div class="type from_marginbottom">
        <div class="form-title"><span>到达城市</span></div>
     </div>
      </div>
        <!-- 选择城市下拉菜单 -->
      <div class="chose">
    <div class="myheight from_marginbottom">
      <!-- 出发城市 -->
    <el-select v-model="stratvalue" placeholder="请选择" class="myinput">
      <el-option-group v-for="group in options" :key="group.label" :label="group.label">
      <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
     </el-option-group>
     </el-select>
    </div>
     <!-- 到达城市 -->
    <div class="myheight from_marginbottom">
      <el-select v-model="endvalue" placeholder="请选择" class="myinput">
      <el-option-group v-for="group in options" :key="group.label" :label="group.label">
      <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
     </el-option-group>
     </el-select>
      </div>

      </div>
      <!-- 出发城市和到达城市交换 -->
      <div class="change">
        <!-- iconclass名和font-family-->
        <div @click="changecity">
           <i class="el-iconexchange element-icons myicon"></i>
        </div>    
      </div>
      <!-- 出发日期和返回日期 -->
      <div>
           <div class="type from_marginbottom">
             <div class="form-title"><span>出发日期</span></div>
           </div>
           <div class="type from_marginbottom">
             <div class="form-title"><span>返回日期</span></div>
           </div>
      </div>
          <div class="chose">
          <div class="myheight from_marginbottom dateinput">
            <!-- 出发时间 -->
            <div class="block ">
         <el-date-picker v-model="startdatevalue" type="date" placeholder="请选择出发日期"
         format="yyyy-MM-dd" value-format="yyyy-MM-dd" :picker-options="pickerOptions" class=""></el-date-picker>
             </div>
          </div>
          <div class="myheight from_marginbottom">
            <!-- 返回时间 -->
           <div class="block">
          <el-date-picker v-model="enddatevalue" type="date" placeholder="请选择返回日期"
          format="yyyy-MM-dd" value-format="yyyy-MM-dd"  :picker-options="endpickerOptions"></el-date-picker>
             </div>
          </div>
         </div>
     </div>
    <!-- 乘客选择 -->
    <div class="formflex">
      <div class="type from_marginbottom">
      <div class="form-title"><span>乘客</span></div>
     </div>
     <div class="myheight from_marginbottom ">
       <!-- 乘客数量 -->
        <el-select v-model="passvalue" class="passnum" placeholder="" clearable> 
          <el-option v-for="item in numoptions"
        :key="item.label" :label="item.label"  :value="item.label"></el-option>
        </el-select>
      </div>
      <div class="textnotice"><span>成人（12周岁以上）</span></div>
      <div class="myheight from_marginbottom ">
        <!-- 儿童数量 -->
        <el-select v-model="childvalue"  class="passnum"  placeholder="" clearable> 
          <el-option v-for="item in numoptions"
        :key="item.label" :label="item.label"  :value="item.label"></el-option>
        </el-select>
      </div>
      <div class="textnotice"><span>儿童（2-12周岁）</span></div>
      </div>
    <!-- 高级搜索 -->
    <div>
      <el-collapse >
      <el-collapse-item class="highsreach"> 
        <template slot="title" >
        高级搜索<i class="header-icon el-icon-info"></i>
       </template>
      <!-- 折叠面板仓位 -->
       <div class="formflex">
        <div class="type from_marginbottom">
          <div class="typeitem"><span>舱位</span></div>
        </div>
        <div class="myheight from_marginbottom ">
          <!-- 舱位选择 -->
           <el-select v-model="typevalue"  class="typechose"  placeholder="" > 
          <el-option v-for="item in typeoptions"
        :key="item.label" :label="item.label"  :value="item.label"></el-option>
        </el-select>
        </div>
      </div> 
      </el-collapse-item>
      </el-collapse>
      </div>  
       <!-- 搜索按钮 -->
        <div class="from_marginbottom">
          <div class="once">
              <a href="javascript:;" class="sreach" >搜索</a>
          </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        // 舱位类型
        typevalue:"不限",
        // 乘客数量
        passvalue:"1",
        // 儿童数量
        childvalue:"0",
        // 乘客/儿童数量 数据
      numoptions:[
        {label:'1'}, {label: '2'},{label: '3'},
        {label: '4'},{label: '5'}],
        // 
         typeoptions:[
        {label:'不限'}, {label: '经济舱'},{label: '超级经济舱'},
        {label: '公务舱'},{label: '头等舱'}],
        //  城市数据
        options: [
          { label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, 
        { label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        // 出发城市默认值
        stratvalue:'杭州',
        // 目的地城市
        endvalue:"",
        // 默认按钮
        radio1:"单程",
        // 出发日期默认为今天
        startdatevalue:`${this.getdefaultdate()}`,
        enddatevalue:"",
        // 禁用日期
        pickerOptions:{
          disabledDate:(time)=>{
            // 如果结束日期非空-->禁用大于结束日期或者小于当前日期的
            if (this.enddatevalue) {
              return time.getTime() > new Date(this.enddatevalue).getTime() ||  time.getTime() < Date.now() -86400000
            } else {
              //结束时间为空就禁用小于当前日期的
               return time.getTime() < Date.now() -86400000
            }    
          }
        },
         endpickerOptions:{
         disabledDate: (time) => {
            // 如果出发日期为空，就禁用小于当前日期的
          if (!this.startdatevalue) {
            return    time.getTime() < Date.now() -86400000
           } else {
            // 不为空就禁用小于开始日期
              return time.getTime() < new Date(this.startdatevalue).getTime()
               }     
            }
        },
      }
    },
    methods:{
      // 设置当前日期格式为YYYY-MM-DD
     getdefaultdate(){
       var d = new Date(); 
       return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() 
       },
      // 交换出发和目的城市
       changecity(){
         var cg="";
         cg=this.stratvalue;
         this.stratvalue=this.endvalue;
         this.endvalue=cg;
       }
    },
   components:{
      
  },
  }
</script>

<style scoped>
.myicon{
  background-color: lawngreen;
  border-radius:30px; 
}
/* 舱位类型 */
 .typeitem{
 height: 40px;
 line-height: 40px;
 font-size: 15px;
 margin-right: 10px;
 }
 .typechose{
   width:150px; 
 }
.highsreach{
  width:200px;
  text-align: right; 
  margin-left: 50px;
}
/* 乘客选择 */
.passnum{
  width:80px;
  margin-right: 10px
}
.from_marginbottom .myinput{
  width: 100%;
   }
  .type{
    display: flex;  
  }
  .radio{
    display: flex; 
    width: 150px;
    height: 40px;
  }
  .myheight{
    height: 40px;
  }
  .from_marginbottom{
    margin-bottom:10px;
  }
  .airbtn{
    width: 75px;
  }
  .form-title{
    width:  78px;
    height: 40px;
    text-align: right;
    line-height: 40px;
    font-size: 14px;
    padding-right: 13px;
  }
  
  .formflex{
    display: flex;
    justify-content: flex-start
  }
  .change{
    height: 90px;
    width: 30px;
    line-height: 90px;
  }
  .chose{
    margin-right:5px ;
  }
  .textnotice{
height: 40px;
line-height: 40px;
font-size: 12px;
overflow: hidden;
color:mediumseagreen;
margin-right: 10px;
  }
  .once{
    margin-left:91px;
    display: flex;
    justify-content: flex-start;
  }
  .content{
    min-width:600px ;
    width:600px;
  }
  .sreach{
    width: 160px;
    height: 35px;
    display: inline-block;
    line-height: 35px;
    background-color: darkorange;
    text-align: center;
    text-decoration: none;
    color: aliceblue;
    border-radius:5px; 
  }
  .content >.formflex:nth-child(1){
    margin-top: 13px;
  }
</style>