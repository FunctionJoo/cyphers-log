<script>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from '@/stores/store'

let dataasdasdasd = {
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

const store = useStore();

export default {
  data() {
    return {
      hasUser: null,
      userData: {},
      matchList: {}
    }
  },
  setup() {
    console.log();
  },
  mounted() {
    let that = this;
    //let test = `https://api.neople.co.kr/cy/players?nickname=${this.$route.params.nickName}&wordType=full&apikey=${store.apiKey}`;
    fetch(`https://api.neople.co.kr/cy/players?nickname=${this.$route.params.nickName}&wordType=match&apikey=${store.apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.rows.length == 0) {
        that.hasUser = false;
        console.log('not found');
        return false;
      } else if (data.rows.length > 0) {
        that.hasUser = true;
        fetch(`https://api.neople.co.kr/cy/players/${data.rows[0].playerId}/matches?gameTypeId=${'normal'}&apikey=${store.apiKey}`)
        .then((response) => response.json())
        .then((data_match) => {
          console.log('match!');
          console.log(data_match);
          that.$data.userData = data_match;
        });
      }
      //this.$data.userData = data;
    })
    .catch((error) => {
      console.error('실패:', error);
    });
  }
}
</script>

<template>
  <div class="game-list">
    <h1 v-if="hasUser == false">검색된 유저가 없음</h1>
    <div v-else-if="hasUser == true" class="profile">

      <div class="rankpic">
        <div class="tierpic">{{userData.tierName}}</div>
        <div class="tiertext" v-if="userData.ratingPoint">
          {{userData.ratingPoint}}
        </div>
        <div class="tiertext" v-else-if="userData.ratingPoint == null">
          unranked
        </div>
      </div>

      <div class="textbox">
        <div class="name">
          <b class="nickname">{{userData.nickname}}</b>
          <span class="grade">{{userData.grade}}</span>
          <span class="clanName" v-if="userData.clanName !== null">{{userData.clanName}}</span>
        </div>
      </div>

      <div class="game-list-in" v-if="userData.matches">
        <div class="game-li-li" :class="{ win: (item.playInfo.result == 'win'), lose: (item.playInfo.result == 'lose') }" v-for="item in userData.matches.rows" v-bind:key="item.matchId">
          <div class="date">{{item.date}} / {{item.playInfo.playTime}}</div>
          {{item.playInfo.characterId}}
          {{item.playInfo.characterName}}
          <div class="position">
            <p>{{item.position.name}}</p>
            <ul>
              <li v-for="(item_position, index) in item.position.attribute" v-bind:key="item.matchId+index">{{item_position.name}}</li>
            </ul>
          </div>
          <div class="party" v-if="item.playInfo.partyInfo.length > 0">
            <p>{{item.playInfo.partyInfo.length}}인</p>
            <ul>
              <li v-for="(item_party, index) in item.playInfo.partyInfo" v-bind:key="item.matchId+'party'+index">{{item_party.nickname}}</li>
            </ul>
          </div>
          <RouterLink :to="{ path: '/match/' + item.matchId }">view</RouterLink>
        </div>
      </div>

    </div><!--profile-->
	</div><!--game-list-->
</template>

<style scoped>
.game-li-li {display: flex;}
.game-li-li.win {background-color: #faa;}
.game-li-li.lose {background-color: #aaf;}

</style>
