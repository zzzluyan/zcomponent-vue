<template>
  <label class="z-component-radio-root">
    <span :class="[
          'z-component-radio--default',
          isCheck ? 'z-component-radio--isChecked' : ''
          ]">
      <input
        class="z-component--default-inner"
        type="radio"
        :value="value"
        v-on="inputListeners">
    </span>
    <span class="z-component-radio-lable">
      {{ label }}
      <slot></slot>
    </span>
  </label>
</template>
<script>
  export default {
    name: 'ZRadio',
    props: {
      value: {},
      label: String,
      val: {}
    },
    computed: {
      inputListeners() {
        let _this = this;
        return Object.assign({}, _this.$listeners, {
          input(event) {
            // console.log(event.target.value);
            _this.$emit('input', _this.val);
          },
          click(event) {
            _this.$emit('input', _this.val);
          }
        });
      },
      isCheck() {
        return this.val === this.value;
      }
    }
  }
</script>
<style>
.z-component-radio--default {
  position: relative;
  display: inline-block;
  border: 1px solid #b0b1b8;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.z-component-radio--default::after {
  content: "";
  position: absolute;
  height: 6px;
  width: 6px;
  border-radius: 100%;
  top: 30%;
  left: 31%;
  background-color: #fff;
}
.z-component-radio--isChecked {
  border: 1px solid #4646a1;
  background-color: #a0a0f7;
}
.z-component-radio-lable {
  vertical-align: middle;
}
</style>
