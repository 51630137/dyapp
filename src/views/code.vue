<template>
    <div class="sign">
        <div class="sign-header">
            <span class="icon">←</span>
            <span>帮助</span>
        </div>
        <div class="sign-content">
            <div class="des">
                <h2>请输入验证码</h2>
                <p>验证码已通过短信发送到+86 15861882995</p>
            </div>
            <div class="sign-box">
                <div class="inp">
                    <input  v-model="code" @input="changeCode"
                    type="text" class="inp-controll" placeholder="请输入验证码">
                </div>
                <div class="sele">
                    {{time}}
                </div>
            </div>
            <div class="code-btn">
                    <button :disabled="disabled" :class="[btnBg?'active':'']" class="load-btn" @click="login"> <div class="loads"></div> 登录</button>
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            telErea:'',
            time:60,
            code:'',
            disabled:true,
            btnBg:false
        }
    },
created(){
    this.getCode()

},
methods: {
    getCode(){
        this.timer()
        this.codes='1234'
    },
    timer(){
        if(this.time>0){
            this.time--;
            setTimeout(this.timer,1000);
        }else{
            console.log(11)
        }
    },
    changeCode(e){ 
        this.code=e.target.value;
        if(this.code==this.codes){
            this.disabled=false
            this.btnBg=true
        }
        else{
            this.disabled=true
            this.btnBg=false
            console.log('验证码输入错误')
        }
        },
        login(){
             this.$router.push('/me')
        }
    },
    
    

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
     margin-bottom: 10px;
 }
 .des h2{
     font-size: 24px;
     font-weight: bold;
 }
 .des p{
     line-height: 50px;
     color: #999;
     font-size: 14px;
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
    justify-content: space-between;
 }
.sele{
    margin-right:20px ;
    color: #ccc;
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
.load-btn {
    display: flex;
    justify-content: center;
}
.loads{
    width: 14px;
    height: 14px;
    border: 3px solid #fff;
    border-bottom: 3px #eee solid;
    border-radius: 50%;
    animation: load 1s infinite;
}
@keyframes load {
    from{
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
}
</style>