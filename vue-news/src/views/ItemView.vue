<template>
  <div>
    <section>
      <UserProfile :userInfo="fetchedItem">
        <!--        <div slot="username">{{ fetchedItem.id }}</div>-->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.created }}</template>
      </UserProfile>
    </section>
    <section>
      <h2> {{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content">

      </div>
      {{ fetchedItem.title }}
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UserProfile from '../components/UserProfile.vue'
import NewsView from "./NewsView.vue";

export default {
  components: {
    NewsView,
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.78;
}
</style>
