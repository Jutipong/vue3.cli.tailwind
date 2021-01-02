<template>
  <div>
    <UserCreate />
    <UserList />
  </div>
</template>


<script lang="ts">
import UserCreate from '../components/Users/UserCreate.vue';
import UserList from '../components/Users/UserList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    UserCreate,
      UserList
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>