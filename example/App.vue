<template>
  <div>
    Here is the page
    <button @click="showModal = true">Show Modal</button>

    <pure-modal v-show="showModal" @close="showModal = false">
      <template v-slot:header>THIS IS CUSTOM HEADER</template>
      <template v-slot:footer>
        <button @click="showModal = false">Hide Modal</button>
      </template>
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
