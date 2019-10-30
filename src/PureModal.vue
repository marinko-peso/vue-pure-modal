<template>
  <transition :name="transitionName">
    <div class="puremodal puremodal__drop">
      <focus-trap :active="focusTrap">
        <div
          class="puremodal__container"
          role="dialog"
          aria-labelledby="pure-header"
          aria-describedby="pure-body"
          tabindex="-1">
          <button
            @click="$emit('close')"
            type="button"
            class="puremodal__button puremodal__button--dismiss"
            aria-label="close modal">
            x
          </button>
          <header id="pure-header" class="puremodal__header">
            <slot name="header">Modal</slot>
          </header>

          <section id="pure-body" class="puremodal__body">
            <slot></slot>
          </section>

          <footer class="puremodal__footer">
            <slot name="footer">
              <button
                @click="$emit('close')"
                type="button"
                class="puremodal__button"
                aria-label="ok">
                OK
              </button>
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
    animation: { type: Boolean, default: true },
    focusTrap: { type: Boolean, default: true }
  },
  computed: {
    transitionName: ({ animation }) => animation ? 'puremodal--animation' : null
  },
  components: {
    FocusTrap
  }
};
</script>

<style lang="scss">
.puremodal--animation {
  &-enter, &-leave-active {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: opacity 0.5s ease;
  }
}

// same level
.puremodal.puremodal {
  &__drop {
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
}

// puremodal children
.puremodal .puremodal {
  &__container {
    background: #f9f9f9;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    color: #545454;
    position: relative;
  }

  &__header {
    padding: 0.8rem 2rem 0.8rem 0.8rem;
    display: flex;
    border-bottom: 1px solid #DCDCDC;
    justify-content: space-between;
    word-break: break-all;
  }

  &__footer {
    padding: 0.8rem;
    display: flex;
    border-top: 1px solid #DCDCDC;
    justify-content: flex-end;
  }

  &__body {
    position: relative;
    padding: 20px 10px;
  }

  &__button {
    color: #f9f9f9;
    background: #4682B4;
    border: 1px solid #DCDCDC;
    border-radius: 2px;
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    cursor: pointer;

    &--dismiss {
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
}
</style>
