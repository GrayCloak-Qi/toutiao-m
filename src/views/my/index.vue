<template>
  <div class="my-container" >
    <div class="header user-info-wrap"  v-if="user">
      <div class="user-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            :src= userInfo.photo
            fit="cover"
          />
          <span class="text" >{{userInfo.name}}</span>
        </div>
        <div class="rigth">
          <van-button  size="mini" round  style=" width:60px; color:#666" >编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-tiem">
          <span class="count">{{userInfo.art_count}}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-tiem">
          <span class="count">{{userInfo.follow_count}}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-tiem">
          <span class="count">{{userInfo.fans_count}}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-tiem">
          <span class="count">{{userInfo.like_count}}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <div class="header not-login" v-else >
      <div class="login-btn" @click="$router.push('/login')">
        <img src="~@/assets/mobile.png" class='mobile-img'>
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- 导航 -->
    <div class="grid-nav">
        <van-grid clickable :column-num="2">
          <van-grid-item >
            <i slot="icon" class="toutiao toutiao-shoucang"></i>
            <span slot="text" >收 藏</span>
          </van-grid-item>
          <van-grid-item clickable>
            <i slot="icon" class="toutiao toutiao-lishi"></i>
            <span  slot="text" >历 史</span>
          </van-grid-item>
        </van-grid>
    </div>
    <van-cell title="消息通知"  is-link/>
    <van-cell title="小智同学"  is-link/>
    <van-cell title="退出登录" class="log_out" v-if="user" clickable @click="onLogOut"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user.js'
export default {
  name: 'myIndex',
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },

  async created () {
    if (this.$store.state.user) {
      this.loadUser()
    }
  },
  methods: {
    onLogOut () {
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          console.log('取消执行')
        })
    },
    async loadUser () {
      try {
        const { data: { data } } = await getUserInfo()
        this.userInfo = data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .header{
    height: 361px;
    background: url('~@/assets/banner.png');
    background-size: cover;

  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction:column;
      .mobile-img{
        width: 132px;
        height: 132px;
      }
      .text{
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info-wrap{
    .user-info{
    display:flex;
    height: 231px;
    // background-color: pink;
    justify-content: space-between;
    align-items: center;
    padding: 70px 32px 0 32px;
    box-sizing: border-box;
    .left{
      display: flex;
      align-items: center;
      .avatar{
        height: 130px;
        width: 130px;
        margin-right: 23px;
        border: 4px solid #fff
      }
      .text{
        font-size: 30px;
        color: #fff;
      }
    }
    .right{
      .btn{
        width: 150px;
        span{
        color: #fff;
        }
      }
    }
   }
    .data-stats{
    height: 130px;
    // background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    .data-tiem{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      .count{
        font-size: 34px;
      }
      .text{
        font-size: 28px;
      }
    }
   }
  }

  .grid-nav{
    .toutiao{
      font-size: 45px;
    }
    .toutiao-shoucang{
      color: #eb5253;
    }
    .toutiao-lishi{
      color: #ff9d1d;
    }
    span{
      margin-top: 10px;
      font-size: 28px;
    }
    margin-bottom: 9px;
  }
  .log_out{
    margin-top: 9px;
    text-align: center;
    color: #d86262;
  }
</style>
