<template>
  <p>
    {{ id }}
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style scoped>
</style>
