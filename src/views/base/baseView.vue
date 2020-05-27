<template>
	<div id="base-view-root">
    <div>
      <z-button :size="1.5">test-button</z-button>
    </div>
    <div>
      <z-check-box
        label="测试"
        v-model="checked"
        @change="test"
        TValue="I am true"
        FValue="I am false">123 {{checked}}</z-check-box>
    </div>
    <div>
      <z-input
        placeholder="test"
        v-model="inputText"
        @blur="inputBlur"
        @focus="inputFocus"
        @on-change="inputChange">inputText: {{inputText}}</z-input>
    </div>
    <div>
      <z-radio
        v-model="radioValue"
        val="radio1"
        @click="test"
        >radio</z-radio>
        <z-radio
        v-model="radioValue"
        val="radio2"
        >radio2</z-radio>
    </div>
	</div>
</template>
<script>
	export default {
		name: 'base-componet-view',
		data() {
			return {
        checked: false,
        cValue: 'test',
        inputText: '',
        radioValue: 'radio2'
      }
		},
    methods: {
      test(e) {
        console.log('test', e);
      },
      inputBlur(e) {
        console.log('blur', e);
      },
      inputFocus(e) {
        console.log('focus', e);
      },
      inputChange(e) {
        console.log('change', e);
      }
    }
	}
</script>
<style>
div {
  margin: 25px;
}
</style>
