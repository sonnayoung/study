<template>
    <div>
        <img :src="원룸.image" class="room-img">
        <!-- <h4 @click="모달창열렸니 = true; 누른거 = i">{{a.title}}</h4> -->
        <h4 @click="send">{{원룸.title}}</h4>
        <!-- $표시는 뷰의 내장된 변수 / 커스텀이벤트 / $emit('작명', 데이터):부모에게 메세지보낼때-->
        <p>{{원룸.price}} 원</p>
        
    </div>
</template>

<script>
export default {
    name : 'CardList',
    props:{
        원룸 : Object,
    },
    methods: {
    send(){
      this.$emit('openModal', this.원룸.id)
    },
  },
}
</script>

<style>

</style>