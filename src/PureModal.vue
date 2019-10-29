<template>
  <transition v-if="animation" name="pure-modal-visual">
    <div class="puredrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="pure-header"
        aria-describedby="pure-body">
        <header id="pure-header">
          <button
            @click="$emit('close')"
            type="button"
            class="btn close"
            aria-label="close modal">
            x
          </button>
          <slot name="header">Modal</slot>
        </header>

        <section id="pure-body">
          <slot></slot>
        </section>

        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PureModal',
  props: {
    // TODO: control animation?
    animation: { type: Boolean, default: true }
  }
};
</script>

<style lang="scss" scoped>
/* Modal transition animation */
.pure-modal-visual {
  &-enter, &-leave-active {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: opacity 0.5s ease;
  }
}

.puredrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

header, footer {
  padding: 15px;
  display: flex;
}

header {
  border-bottom: 1px solid #eee;
  justify-content: space-between;
}

footer {
  border-top: 1px solid #eee;
  justify-content: flex-end;
}

section {
  position: relative;
  padding: 20px 10px;
}
</style>
