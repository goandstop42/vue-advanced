<template>
  <div class="user-container">
    <div>
      <i aria-hidden="true" class="fa fa-user"></i>
    </div>
    <div class="user-description">
      <template>
        <!--        <div> {{ userInfo.id }}</div>-->
        <!--        상위 컴포넌트에서 정의할 영역-->
        <slot name="username">
        </slot>
      </template>
      <div class="time">
        <slot name="time"></slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    userInfo: Object
  },
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },

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