<template>
  <button @click="generateWithAI" class="btn btn-primary">
    Generate with AI
  </button>
</template>

<script>
export default {
  methods: {
    generateWithAI() {
      this.$router.push({ name: 'SubscriptionPage' });
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>