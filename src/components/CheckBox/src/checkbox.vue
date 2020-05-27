<template>
  <label class="z-component-checkbox-root">
    <span :class="[
          'z-component-checkbox--default',
          isChecked ? 'z-component-checkbox--isChecked' : ''
          ]">
      <input
        class="z-component--default-inner"
        type="checkbox"
        :checked="value"
        v-on="inputListeners">
    </span>
    <span class="z-checkbox--default-label">{{label}}</span>
    <slot></slot>
  </label>
</template>
<script>
  export default {
    name: 'ZCheckBox',
    props: {
      label: {},
      TValue: {},
      FValue: {},
      value: {} //这个...
    },
    data() {
      return {
        isChecked: false
      }
    },
    computed: {
      // isChecked() {
      //   return
      // },
      inputListeners() {
        let _this = this;
        // console.log(this.$listeners); //只有一个input事件
        return Object.assign({}, _this.$listeners, {
          input(event) { //这里重写了input
            _this.isChecked = event.target.checked; //checkbox原生的value
            _this.$emit('input', event.target.checked); //checkbox的[value]是checked
          },
          change(evnet) {
            console.log('checkbox', event);
            evnet.target.value = event.target.checked ? _this.TValue : _this.FValue;
            _this.$emit('change', evnet.target.value);
          }
        })
      }
    }
  }
</script>
<style>
  .z-component-checkbox-root {
    user-select: none; /*qj*/
    display: inline-block;
  }
  .z-component--default-inner { /*qj*/
    outline: none;
    opacity: 0;
  }
  .z-component-checkbox--default {
    position: relative;
    display: inline-block;
    border: 1px solid#b0b1b8;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    /* transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),
                background-color .25s cubic-bezier(.71,-.46,.29,1.46); */
  }
  .z-component-checkbox--default::after {
    position: absolute;
    /* box-sizing: content-box; */
    content: "";
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 10px;
    width: 5px;
    left: 7px;
    top: 2px;
    transform-origin: center;
    /* transform: rotate(45deg); */
    transform: rotate(45deg) scaleY(1);
  }
  .z-component-checkbox--isChecked {
    /* color: #4646a1; */
    border: 1px solid #4646a1;
    background-color: #a0a0f7;
  }
  .z-component-checkbox--default:hover {
    border: 1px solid #4646a1;
  }
</style>
