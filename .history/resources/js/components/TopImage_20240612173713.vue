<template>
  <div class="top-img__container">
    <div class="top-img__background" :class="`top-img__type--${type}`">
      <div class="https://i.ibb.co/5ngvTZq/Screenshot-2024-06-10-at-16-52-28.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopImage',

  props: {
    type: { type: Number, default: 1 }
  }
}
</script>
