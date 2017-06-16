<template>
  <div class="hz-calendar">
    <div class="calendar-select">
      <div class="box-year">
        <i class="el-icon-d-arrow-left" @click="prevMonth"></i>
        <span v-text="tmpYear"></span>
        <i>-</i>
        <span v-text="tmpMonth"></span>
        <i class="el-icon-d-arrow-right" @click="nextMonth"></i>
      </div>
    </div>
    <div class="calendar-week">
      <div class="calendar-data-item">星期天</div>
      <div class="calendar-data-item">星期一</div>
      <div class="calendar-data-item">星期二</div>
      <div class="calendar-data-item">星期三</div>
      <div class="calendar-data-item">星期四</div>
      <div class="calendar-data-item">星期五</div>
      <div class="calendar-data-item">星期六</div>
    </div>
    <div class="calendar-day">
      <div class="calendar-data-item"
           v-for="item in calendarData"
           :class="{prevMonthDay: item.prevMonth, nextMonthDay: item.nextMonth}"
           @click="selectDate(this)">
        <span v-text="item.value"></span>
      </div>
    </div>
    <div class="edit-calendar-win" v-show="editCalendarShow">
      <el-form>
        <el-form-item>
          <el-time-select
            v-model="timeStart"
            :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
            placeholder="选择时间">
          </el-time-select>
          <el-time-select
            v-model="timeEnd"
            :picker-options="{
          start: '10:00',
          step: '00:10',
          end: '18:30'
        }"
            placeholder="选择时间">
          </el-time-select>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="editCalendarBtn">确定</el-button>
          <el-button type="info" @click="editCalendarBtn">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  export  default {
    name: 'hz-calendar',
    data () {
      let now = new Date()
      return {
        timeStart: '',
        timeEnd: '',
        editCalendarShow: false,
        year: now.getFullYear(),
        tmpYear: now.getFullYear(),
        tmpMonth: now.getMonth() + 1
      }
    },
    mounted () {

    },
    methods: {
      selectDate ($item) {
        console.log($item)
        this.editCalendarShow = true
      },
      editCalendarBtn (item) {

        this.editCalendarShow = false
      },
      prevMonth () {
        this.tmpMonth--
        if(this.tmpMonth === 0){
          this.tmpMonth = 12
          this.tmpYear--
        }
      },
      nextMonth () {
        this.tmpMonth++
        if(this.tmpMonth === 13){
          this.tmpMonth = 1
          this.tmpYear++
        }
      }
    },
    computed: {
      calendarData () {
        // 获取当月的天数 new Date(年， 月， 日)
        let calendarData = new Date(this.tmpYear, this.tmpMonth, 0).getDate();
        // 当月的日期 currentDayArr
        let currentDayArr = Array.from({length: calendarData}, (n, i) => {
          return {
            currentMonth: true,
            value: i + 1
          }
        })
        //获取当月1号是星期几，为了确定在1号前需要插多少天
        let startDay = new Date(this.tmpYear, this.tmpMonth - 1, 1).getDay()
        //确认上个月一共多少天
        let prevMonthDay = new Date(this.tmpYear, this.tmpMonth - 1, 0).getDate()
        // 在第一个天前插入上个月日期 + currentDayArr + 在最后一天后插入下个月日期
        for(let i = 0, len = startDay; i < len; i++){
          currentDayArr = [{prevMonth: true, value: prevMonthDay - i}].concat(currentDayArr)
        }
        for(let i = currentDayArr.length, item = 1; i < 42; i++, item++){
          currentDayArr[currentDayArr.length] = {nextMonth: true, value: item}
        }
        return currentDayArr
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .calendar-group{
    color: #fff;
    width: 440px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    .calendar-select{
      color: #000;
      text-align: center;
      padding: 20px 0 0 0;
      span{
        font-size: 22px;
        cursor: pointer;
        &:hover{
          background: #ddd;
        }
      }
      i{
        font-size: 28px;
        cursor: pointer;
        padding: 0 10px;
      }
    }
    .calendar-week{
      display: flex;
      padding: 10px;
      justify-content: space-around;
      border-bottom: 1px #000 solid;
      .calendar-data-item{
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        display: inline-block;
        color: #666;
      }
    }
    .calendar-day{
      padding: 10px;
      .calendar-data-item{
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 25px;
        display: inline-block;
        color: #000;
        cursor: pointer;
        &:hover{
          background: #777;
          color: #fff !important;
        }
        &.prevMonthDay, &.nextMonthDay{
          color: #777;
        }
      }
    }
    .edit-calendar-win{
      width: 400px;
      padding: 20px 10px;
      background: rgba(0,0,0,.8);
      position: absolute;
      border-radius: 5px;
      border: 1px #fff solid;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
