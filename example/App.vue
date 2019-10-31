<template>
  <div>
    Here is the page
    <button @click="showModal = true">Show Modal</button>

    <pure-modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <b>PureModal</b>  Example
      </template>
      How do you like the modal so far?
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
