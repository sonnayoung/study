<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>
  <!-- 동적인 UI만드는법
1. UI의 현재 상태를 데이터로 저장해둠
2. 데이터에 따라 UI가 어떻게 보일지작성 -->
  <div class="menu">
    <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
    <!-- key의 용도 : 반복문쓸때필수, 반복문 돌린요소를 컴터가 구분하기위해 -->
    <!-- (a,i) //a는 데이터들 i는 인덱스 -->

  </div>
  <!-- <div v-for="(a,i) in product" :key="i">
    <h4 :style="스타일" >{{a}} 원룸</h4>
    <p>{{price1}} 만원</p>
  </div> -->
   <div>
    <img src="./assets/room0.jpg" alt="" class="room-img">
    <h4 @click="모달창열렸니 = true">{{product[0]}} 원룸</h4>
    <p>{{price1}} 만원</p>
    <button @click="increase">허위매물신고</button> <span>신고수 : {{신고수[0]}}</span>
    <!-- v-on:click == @click -->
  </div>
  <div>
    <img src="./assets/room1.jpg" alt="" class="room-img">
    <h4>{{product[1]}} 원룸</h4>
    <p>{{price2}} 만원</p>
    <button @click="신고수[1]++">허위매물신고</button> <span>신고수 : {{신고수[1]}}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" alt="" class="room-img">
    <h4>{{product[2]}} 원룸</h4>
    <p>{{price2}} 만원</p>
    <button @click="신고수[2]++">허위매물신고</button> <span>신고수 : {{신고수[2]}}</span>
  </div>
</template>

<script>

// {{데이터바인딩하는이유}}
// 1. html 하드코딩은 변경하기 어려움
// 2. 실시간 자동 렌더링 기능 사용
export default {
  name: 'App',
  data(){//데이터보관함
    return{
      price1: 60,
      price2: 70,
      스타일:"color:blue",
      product : ['역삼동원룸', '천호동원룸','마포구원룸'],
      메뉴들 : ['Home', 'Shop','About'],
      신고수 : [0,0,0],
      모달창열렸니: false,
    }// state라고 부름
  },
  methods: {//함수만드는공간
    increase(i){
      this.신고수[i]++; //그냥 신고수 가져오면안되고 this.으로 시작해야힘
    },
    minus2(){

    }
  },
  components: {
   
  }
}
</script>

<style>
body{
  margin: 0;
}
div{box-sizing: border-box;}
.black-bg{width: 100%;height: 100%;background: rgba(0,0,0,0.5);position: fixed;padding: 20px;}
.white-bg{width: 100%;background: white;border-radius:8px;padding: 20px;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding:15px;
  border-radius: 5px;
}
.menu a{
  color:white;
  padding:5px
}
.room-img {width:100%;margin-top: 40px;}
</style>
