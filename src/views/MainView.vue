<script>
//import { RouterLink, RouterView } from 'vue-router'
//import { useStore } from '@/stores/store'

let data = {
  playerId : "a52d4f6e8e4303f9e59c46354d2b92ba",
  nickname : "사이퍼즈개핵노잼",
  grade : 74,
  clanName : "ㅡ중독ㅡ",
  ratingPoint : null,
  maxRatingPoint : null,
  tierName : null,
  records : [ {
    gameTypeId : "rating",
    winCount : 0,
    loseCount : 0,
    stopCount : 0
  }, {
    gameTypeId : "normal",
    winCount : 82,
    loseCount : 111,
    stopCount : 0
  } ]
};

let data2 = {
  "playerId" : "507a8e01d95536925e76a3d39e3c05b6",
  "nickname" : "ㅡFURYㅡ",
  "grade" : 116,
  "clanName" : "도리화",
  "ratingPoint" : 2865,
  "maxRatingPoint" : 2865,
  "tierName" : "ACE",
  "records" : [ {
    "gameTypeId" : "rating",
    "winCount" : 171,
    "loseCount" : 122,
    "stopCount" : 0
  }, {
    "gameTypeId" : "normal",
    "winCount" : 119,
    "loseCount" : 52,
    "stopCount" : 4
  } ]
};

//const store = useStore();

export default {
  data() {
    return {
      nickName: ''
    }
  },
  setup() {
  },
  mounted() {
    
  },
  methods: {
    onSearch: function(e) {
      e.preventDefault();
      this.$router.push({ path: `/search/${this.nickName}` });
    },
    dbUpload: function(e) {
      //e.preventDefault();
      console.log(e);
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="search">
      <form id="main-search" v-on:submit="onSearch">
        <div class="box">
          <input type="text" name="nickName" id="nickName" v-model="nickName">
          <button type="submit">search</button>
        </div>
      </form>
      <form action="http://localhost:8080/api/character" method="post" v-on:submit="dbUpload">
        <input type="text" id="title" name="title">
        <input type="text" id="author" name="author">
        <button type="submit">search</button>
      </form>
    </div>
	</div>
</template>

<style scoped>
</style>
