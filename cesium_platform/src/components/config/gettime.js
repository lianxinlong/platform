export default {
    data() {
      return {
        loading: true,
        currtime: "",
      };
    },
    components: {
      centerLeft1,
      centerLeft2,
      centerRight1,
      centerRight2,
      center,
      bottomLeft,
      bottomRight,
    },
    mounted() {
      this.cancelLoading();
      // 定时刷新当前时间
      this.currentTime();
    },
    methods: {
      getTime: function () {
        var _this = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth() + 1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf =
          new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes();
        let ss =
          new Date().getSeconds() < 10
            ? "0" + new Date().getSeconds()
            : new Date().getSeconds();
        _this.currtime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
      },
      currentTime() {
        setInterval(this.getTime, 500);
      },
      cancelLoading() {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      },
    },
  };
  