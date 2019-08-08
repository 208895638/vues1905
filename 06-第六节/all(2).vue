<template>
  <div class="all-main">
    <ul class="movies scroller-wrapper" ref="scroller-wrapperr">
      <li v-for="coup in couponsList" :key="coup.couponUserId" class="content">
        <p class="movie-top clearfix">
          <span class="cinema">{{coup.couponTitle}}</span>
          <span class="finish">
            {{coup.couponPrice}}
            <p class="rebate">折</p>
          </span>
        </p>

        <div class="movie-main clearfix">
          <!-- <img :src="'https://images.weserv.nl/?url='+movie.images.small" alt /> -->
          <div class="text">
            <div class="movie-title">
              有效期至 : {{coup.endTime}}
              <!-- <span class="num">2张</span> -->
            </div>
            <div class="time">优惠信息 : 满100打{{coup.couponPrice}}折</div>
            <!-- <div class="place">5号厅 5排14座</div> -->
          </div>
        </div>

        <!-- <div class="totalPrice">
          <p class="donation">转赠</p>
        </div>-->

        <router-link
          tag="div"
          class="totalPrice"
          :to="{name:'donation',params:{couponUserId:coup.couponUserId}}"
        >
          <p class="donation">转赠</p>
        </router-link>

        <div class="detail" @click="ruleEtim(coup.couponUserId)">
          <p class="messige">详细信息</p>
          <img class="triangle" src="../../../../assets/imgs/main/massage/triang.png" alt />
        </div>

        <div class="rule" v-show="rulesim==coup.couponUserId">
          <p class="restricted">规则: 仅限常规课及新用户使用</p>
        </div>
      </li>
      <p class="moreText">{{footerText}}</p>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
// import $ from "jquery";
export default {
  name: "all",

  data() {
    return {
      //movieList: [],
      rulesim: 1,
      count: 0,
      couponsList: [], //后台获取的数据
      footerText: "上滑加载更多"
      //hasNext:1,
      //  page:1 ,
    };
  },
  created() {
    this.getdiscount();
    // this.listenScroll();
    // this.getServerData();
  },
  mounted() {
    // var wrapper = document.querySelector('.base-layer-main .scroller-wrapper');
    // wrapper.style.height = document.documentElement.clientHeight-80+'px';
    this.$nextTick(() => {
      new BScroll(this.$refs.scrollbox, {
        tap: "tap",
        scrollY: true,
        probeType: 3
      });
    });
  },
  methods: {
    //获取优惠券信息
    getdiscount() {
      axios.get("/api/coupons/list?userId=1&titleType=0&index=1").then(res => {
        //console.log("111", res);
        this.couponsList = res.data.data.couponsList;
        console.log("222", this.couponsList);
      });
    },

    // 上滑加载事件
    // getServerData() {
    //   if (this.couponsList.hasNext == 0) {
    //     this.footerText = "到底了";
    //     $(window).unbind("scroll");
    //   }
    // },
    // listenScroll() {
    //let self = this;
    //   $(window).scroll(function() {
    // let scrollTop = $(window).scrollTop();
    // let windowTop = $(window).height();
    // let documentTop = $(document).height();
    //documentTop - windowTop <= scrollTop
    //  console.log("333",this.couponsList.length)
    //  if (this.couponsList.length%5==0) {
    //   this.index++;
    // this.loading = true;
    //   this.getServerData();
    // }
    //  });
    //}
    // 点击详细信息的事件
    ruleEtim(id) {
      console.log(id);
      //  记一次数
      this.count++;
      // 为偶 取消显示
      if (this.count % 2 == 0) {
        if (this.rulesim != id) {
          this.rulesim = id;
        } else {
          this.rulesim = 1;
        }
      } else {
        this.rulesim = id;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.all-main {
  overflow: hidden;
  background-color: #ffffff;
  height: 800px;

  .movies {
    margin-top: 136px;
    height: 800px;
    overflow: hidden;

    .content {
      overflow: hidden;
      width: 343px;
      margin: 0 auto;
      padding: 0 12px;
      box-sizing: border-box;
      //height: 100%;
      //background: rgba(51, 54, 61, 1);
      background-color: #fff;
      border: 1px solid #ededed;
      border-radius: 4px;
      margin-bottom: 8px;
      // margin-top: 8px;
      text-align: left;
      .movie-top {
        color: #fff;
        margin: 14px 0;
        overflow: hidden;
        .cinema {
          float: left;
          color: #914b62;
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
        }
        .finish {
          float: right;
          width: 62px;
          height: 45px;
          line-height: 45px;
          margin-top: -8px;
          text-align: center;
          font-size: 38px;
          color: #914b62;

          .rebate {
            display: block;
            float: right;
            margin-top: 8px;
            font-size: 16px;
          }
        }
      }
      .movie-main {
        width: 100%;
        height: 45px;
        font-size: 14px;
        color: #fff;

        .text {
          float: left;
          width: 190px;
          .movie-title {
            color: #989898;
            font-size: 12px;
          }
          .time {
            font-size: 12px;
            color: #989898;
            margin: 10px 0;
          }
        }
      }
      .totalPrice {
        float: left;
        width: 50px;
        height: 20px;
        background-color: #914b62;
        border-radius: 5px;
        margin: 6px 0 21px 0;
        text-align: center;
        .donation {
          font-size: 12px;
          color: #fff;
          line-height: 20px;
          // margin: 0 auto;
        }
      }
      .detail {
        float: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // width: 75px ;
        // height: 20px ;
        .messige {
          width: 48px;
          height: 17px;
          margin: 6px 0 21px 0;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(152, 152, 152, 1);
          line-height: 17px;
        }
        .triangle {
          width: 18px;
          height: 18px;
          margin: 6px 0 21px 0;
        }
      }

      .rule {
        width: 92%;
        height: 40px;
        margin: 40px auto 0;
        border-top: 1px solid rgba(243, 237, 239, 1);

        .restricted {
          //display: block ;
          margin-top: 10px;
          color: #696b70;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
