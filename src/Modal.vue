<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <!-- <button @click="모달창열렸니 = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
//props 문법으로 데이터를 전송해야 모달창 데이터바운딩한것을 쓸수있음.받으온것은 read-only
//props:{데이터이름:자료형이름}

export default {
    name : 'ModalPopup',
    props:{
        원룸들 : Array,
        누른거 : Number,
        모달창열렸니 : Boolean,
    }
}
</script>

<style>

</style>