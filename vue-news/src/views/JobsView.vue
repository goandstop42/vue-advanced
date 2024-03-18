<template>
  <div>
    <p v-for="job in this.$store.state.jobs">
      <a v-bind:href="job.url">{{job.title}}</a>
      <small>{{job.time}} {{ job.user  }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS_LIST')
  }
}
</script>

<style>

</style>
