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

/**
 * Setting up custom content for header and footer in template:
    <template v-slot:header>
      This is a custom <b>Title!</b>
    </template>
    <template v-slot:footer>
      <button @click="showModal = false">Hide Modal</button>
    </template>
 */

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
