<template>
  <div class="z-component-input-root">
    <span :class="[
          'z-component-input--defalut'
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
        console.log(this.$listeners);
        return Object.assign({}, _this.$listeners, {
          input(event) {
            _this.$emit('input', event.target.value); //这个是使v-model生效
          },
          // change(event) { //失去焦点时才触发 type=text/textarea
          //   console.log(event);
          //   _this.$emit('change', evnet.target.value);
          // }
        });
      }
    },
    data() {
      return {
      }
    },
    watch: {
      value(val) {
        console.log('watch', val);
      }
    },
    mounted() {
      console.log('attr', this.$attrs);
      console.log(this.value);
    }
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
</style>
