<template>
    <div class="sign">
        <div class="sign-header">
            <router-link to="/sign" tag="span" class="icon">←</router-link>
            <span>帮助</span>
        </div>
        <div class="sign-content">
            <div class="des">
                <h2>手机号密码登录</h2>
                <!-- <p>登录即表明同意<a href="">抖音协议</a>和<a href="">隐私政策</a></p> -->
            </div>
            <div class="sign-box">
                <div class="sele">
                    <select v-model="telErea" class="sele-controll">
                        <option value="">+86</option>
                    </select>
                </div>
                <div class="inp">
                    <input type="text" @keyup="loginAction" v-model="phone" class="inp-controll" placeholder="请输入手机号码">
                </div>
            </div>
            <div class="sign-box">
                <!-- <div class="sele">
                    <select v-model="telErea" class="sele-controll">
                        <option value="">+86</option>
                    </select>
                </div> -->
                <div class="inp">
                    <input @keyup="loginAction" type="password" v-model="password" class="inp-controll" placeholder="请输入密码">
                </div>
            </div>
            <div class="not-sign">
                   <p>登录即表明同意<a href="">抖音协议</a>和<a href="">隐私政策</a></p>
            </div>
            <div class="code-btn">
                    <button :disabled="disabled" :class="[btnBg?'active':'']" @click="loginAction" >登录</button>
            </div>
            <div class="other">
                    <span>忘记了?<a href="">密码登录</a></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            telErea:'',
            phone:'',
            password:'',
            disabled:true,
            btnBg:false
        }
    },
methods:{
    loginAction(){
       var regtel=/^1[345789]{1}\d{9}$/;
       if(this.phone==""){
           console.log('手机不能为空')
           this.disabled=true;
           this.btnBg=false;
       }else if(!regtel.test(this.phone)){
           console.log('请输入正确的手机号')
           this.disabled=true;
           this.btnBg=false;
       }else if(this.password ==""){
           console.log('密码不能为空')
            this.disabled=true;
           this.btnBg=false;
       }else{
           this.disabled=false;
           this.btnBg=true;
       }
    },
    login(){
             this.$router.push('/me')
        }
}
}
</script>
<style scoped>
 .sign{
     padding: 30px ;
 }
 .sign-header{
     display: flex;
     justify-content: space-between;
 }
 .sign-header .icon{
     font-size: 25px;
 }
 .sign-content{
     padding: 40px 10px;
 }
 .des{
     margin-bottom: 30px;
 }
 .des h2{
     font-size: 24px;
     font-weight: bold;
 }
 .des p{
     line-height: 50px;
     color: #666;
 }
 .des p a,.not-sign p a{
     color: #628dbb;
     text-decoration:none
     /* padding: 0 5px; */
 }
 .sign-box{
     display: flex;
     height: 50px;
     align-items: center; 
     background: #f9f9f9;
    margin-top: 12px;
 }
 .sele-controll{
     background-color: #f9f9f9;
     height: 36px;
     font-weight: bold;
     margin-left: 5px;
     border: none;
 }
 
 .inp-controll{
     height: 36px;
     background-color: #f9f9f9;
     border: none;
     width: 90%;
     margin-left: 10px;
 }
 .input{
     caret-color: #fe2c55;
 }
 .input::-webkit-input-placeholder{
     color: #ccc;
 }
 .not-sign p{
     color: #ccc;
     font-size: 14px;
     margin-top: 10px;
 }
 .code-btn button{
     margin: 20px 0;
     width: 100%;
     padding: 15px 0;
     border: none;
     color: #f9f9f9;
 }
 .code-btn .active{
  color: #fff;
  background: #fe2c55;
}
 .other{
     display: flex;
     justify-content: space-between;
 }
 .other a{
     color: #628db8;
 }
</style>