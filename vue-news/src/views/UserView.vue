<template>
  <div>
    <UserProfile :userInfo="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }},
        <span slot="karma">{{ userInfo.karma }}</span>
      </span>


    </UserProfile>

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
  methods: {
    logout() { // Corrected method declaration
      this.$store.dispatch('MODIFY_USER'); // Corrected dispatch call
    }
  }
};
</script>

<style>

</style>
