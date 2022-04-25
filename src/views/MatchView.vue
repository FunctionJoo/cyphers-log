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
      matchData: {},
      playerData: {}
    }
  },
  setup() {
    console.log();
  },
  mounted() {
    let that = this;
    //let test = `https://api.neople.co.kr/cy/players?nickname=${this.$route.params.nickName}&wordType=full&apikey=${store.apiKey}`;
    fetch(`https://api.neople.co.kr/cy/matches/${this.$route.params.matchId}?&apikey=${store.apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      that.$data.hasUser = true;
      that.$data.matchData = data;
      console.log(data);
      for (let idx = 0; idx < 10; idx++ ) {
        let pld = data.players[idx];
        that.$data.playerData[pld.playerId] = pld;
      }
    })
    .catch((error) => {
      console.error('실패:', error);
    });
  }
}
</script>

<template>
  <div class="game-view">
    <h1 v-if="hasUser == null">잘못된 경로</h1>
    <h1 v-else-if="hasUser == false">검색된 유저가 없음</h1>
    <div v-else-if="hasUser == true" class="match-info">
      <span v-if="matchData.gameTypeId === 'normal'">일반</span>
      <span v-else-if="matchData.gameTypeId === 'rank'">랭크</span>
      <span>{{matchData.date}}</span>
      <span>{{matchData.map.name}}</span>
      <div class="d">
        <div class="userlist" :class="{ win: (item.result == 'win'), lose: (item.result == 'lose')}" v-for="(item, idx) in matchData.teams" v-bind:key="idx">
          <div class="userlist_in" v-for="(datas, idx2) in item.players" v-bind:key="idx+'/'+idx2">
            <div class="playitem">
              <div class="itemli" v-for="(iteminfo, idx3) in playerData[datas].items" v-bind:key="idx+'/'+idx3">
                {{iteminfo.itemName}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!--profile-->
	</div><!--game-list-->
</template>

<style scoped>
.playitem {display: flex;}
.userlist.win {background-color: #faa;}
.userlist.lose {background-color: #aaf;}
</style>
