# vue-pure-modal
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![license](https://img.shields.io/github/license/marinko-peso/vue-pure-modal.svg)](https://github.com/marinko-peso/vue-pure-modal/blob/master/LICENSE)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![package version](https://img.shields.io/npm/v/vue-pure-modal.svg)](https://npm.im/vue-pure-modal)
[![install size](https://packagephobia.now.sh/badge?p=vue-pure-modal)](https://packagephobia.now.sh/result?p=vue-pure-modal)

👾 Pure &amp; simple Vue Modal component. Basic a11y covered.

## Installation

`npm i vue-pure-modal`

## Usage

As global component:
```
import PureModal from 'vue-pure-modal';
import Vue from 'vue';

Vue.use(PureModal);
```

Or import where you use it in your components:
```
import { PureModal } from 'vue-pure-modal';

...
components: {
  PureModal
}
```

## Example

```
<pure-modal v-if="showModal" @close="showModal = false">
  <template v-slot:header>
    <b>Pure</b> Modal Title
  </template>
  <template v-slot:footer>
    <button @click="showModal = false">Hide me!</button>
  </template>
  Modal body here as a message.
</pure-modal>
```
You can specify additional options:
- `animate` - to apply smooth open/close transition. `true` by default.
- `focusTrap` - to trap tab focus inside modal while open. `true` by default.

To use basic style (its not really pretty sorry!) just import generated css:
```
import 'vue-pure-modal/dist/puremodal.css';
```

In case you want to use this basic style and overwrite some parts of it you can simply do so since it was written with BEM naming.

Example in scss:
```
.my-custom-class.puremodal .puremodal {
  &__body {
    font-size: 2rem;
  }
}

```
Or in regular css:
```
.my-modal.puremodal .puremodal__body {
  font-size: 2rem;
}
```

Changing backdrop modal throws is also easy:
```
.my-modal.puremodal.puremodal__drop {
  color: blue;
}
```

To overwrite default styles coming with modal be sure to add your custom css class to `<pure-modal>` component, like `.my-modal` in examples above.

## License

MIT.
