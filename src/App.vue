<template>
  <div class="container">
    <SiteNav />
    <EmptyList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EmptyList, SiteNav } from "@/components";

export default defineComponent({
  name: 'App',
  components: { EmptyList, SiteNav },
  setup() {


    return {};
  },
  methods: {},
});
</script>

<style lang="scss">
.container {
  max-width: 720px;
  margin: 50px auto;
  padding: 20px;
  background-color: #e5e5e5;
  border-radius: 25px;
}
</style>
