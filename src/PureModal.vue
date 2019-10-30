<template>
  <transition v-if="animation" name="pure-modal-visual">
    <div class="puredrop">
      <focus-trap :active="focusTrap">
        <div
          class="modal"
          role="dialog"
          aria-labelledby="pure-header"
          aria-describedby="pure-body"
          tabindex="-1">
          <button
            @click="$emit('close')"
            type="button"
            class="dismiss"
            aria-label="close modal">
            x
          </button>
          <header id="pure-header">
            <slot name="header">Modal</slot>
          </header>

          <section id="pure-body">
            <slot></slot>
          </section>

          <footer>
            <slot name="footer">
              <button @click="$emit('close')" type="button" aria-label="ok">OK</button>
            </slot>
          </footer>
        </div>
      </focus-trap>
    </div>
  </transition>
</template>

<script>
import { FocusTrap } from 'focus-trap-vue';

export default {
  name: 'PureModal',
  props: {
    // TODO: control animation?
    animation: { type: Boolean, default: true },
    focusTrap: { type: Boolean, default: true }
  },
  components: {
    FocusTrap
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
  background: #f9f9f9;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  color: #545454;
  position: relative;
}

header {
  padding: 0.8rem 2rem 0.8rem 0.8rem;
  display: flex;
  border-bottom: 1px solid #DCDCDC;
  justify-content: space-between;
  word-break: break-all;
}

footer {
  padding: 0.8rem;
  display: flex;
  border-top: 1px solid #DCDCDC;
  justify-content: flex-end;
}

section {
  position: relative;
  padding: 20px 10px;
}

button {
  color: #f9f9f9;
  background: #4682B4;
  border: 1px solid #DCDCDC;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;

  &.dismiss {
    background: none;
    border: none;
    color: #777;
    font-size: 1rem;
    font-weight: bolder;
    position: absolute;
    right: 0.1rem;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    top: 0.1rem;
    cursor: pointer;
  }
}
</style>
