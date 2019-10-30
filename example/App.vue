<template>
  <div>
    Here is the page
    <button @click="showModal = true">Show Modal</button>

    <pure-modal v-show="showModal" @close="showModal = false">
      modal content goes here
    </pure-modal>
  </div>
</template>

<script>
import PureModal from '../src/PureModal';

export default {
  name: 'PureModalPlayground',
  data: () => ({
    showModal: false
  }),
  components: {
    PureModal
  }
};
</script>
