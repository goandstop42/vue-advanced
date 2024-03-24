<template>
  <div>
    <ListItem></ListItem>
<!--    <ul class="new-list">-->
<!--      <li v-for="item in this.$store.state.news" class="post">-->
<!--        <div class="points">-->
<!--          {{ item.points }}-->
<!--        </div>-->
<!--        <div>-->
<!--          <p class="news-title">-->
<!--            <a v-bind:href="`item/${item.url}`">{{item.title}}</a>-->
<!--          </p>-->
<!--          <small class="link-text">-->
<!--            {{item.time_ago}} by-->
<!--            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem
  }
  // computed:{
  //   ...mapGetters(['fetchedAsk'])
    // ...mapGetters({fetchedAsk: 'fetchedAsk'})
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
  // },/
  // created() {
  //   this.$store.dispatch('FETCH_ASK')
  // }
}
</script>
