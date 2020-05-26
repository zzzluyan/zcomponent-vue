<template>
  <div class="z-component-input-root">
    <label class="z-componet-input-label">
      <span class="z-componet-input-label-name"><slot></slot></span>
      <span :class="[
            'z-component-input--defalut',
            isFocus ? 'z-component-input--isFocus' : ''
            ]">
        <input
          class="z-component--default-inner-show z-component--default-input"
          v-bind="$attrs"
          :type="$attrs.type ? $attrs.type : 'text'"
          :placeholder="$attrs.placeholder"
          v-on="inputListeners"
          :value="value"
          >
          <!-- placeholder的动画显示和隐藏 参考transition-->
          <!-- <span
            class="z-componet-input-ph">
              {{$attrs.placeholder}}
          </span> -->
      </span>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'ZInput',
    props: {
      // type: String //type不能作为props传入，否则，父组件绑定的$attrs会获取不到原生的type
      value: {}
    },
    computed: {
      inputListeners() {
        let _this = this;
        return Object.assign({}, _this.$listeners, {
          input(event) {
            _this.$emit('input', event.target.value);
            _this.$emit('on-change', event.target.value)
          },
          blur(event) {
            _this.$emit('blur', event.target.value);
            _this.isFocus = false;
          },
          focus(event) {
            _this.$emit('focus', event.target.value);
            _this.isFocus = true;
          },
          //input本身存在change的原生事件，事件失去焦点时才触发，传出的值为event type=text/textarea
          // change(event) {
          //   _this.$emit('change', evnet.target.value);
          // }
        });
      }
    },
    data() {
      return {
        isFocus: false
      }
    },
    // watch: {
    //   value(val) {
    //     console.log('watch', val);
    //   }
    // },
    // mounted() {
    //   console.log('attr', this.$attrs);
    // }
  }
</script>
<style scoped>
.z-component--default-inner-show {
  outline: none;
  border: 0px;
}
.z-component--default-input {
  /* padding: 10px; */
  box-sizing: border-box;
  font-size: 14px;
}
.z-component-input--defalut {
  position: relative;
  border: 1px solid #b0b1b8;
  display: inline-block;
  border-radius: 5px;
  line-height: 30px;
  padding: 3px 10px;
}
.z-componet-input-ph {
  position: absolute;
  left: 12px;
  color: #7c7c7c;
}
.z-componet-input-label-name {
  display: inline-block;
  margin-right: 5px;
}
.z-component-input--isFocus {
  border: 1px solid #4646a1;
}
</style>
