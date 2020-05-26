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
        FValue="I am false">123 {{checked}}
      </z-check-box>
    </div>
    <div>
      <z-input
        placeholder="test"
        v-model="inputText"></z-input>
        <span>inputText: {{inputText}}</span>
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
        inputText: ''
      }
		},
    methods: {
      test(e) {
        console.log(e);
      }
    }
	}
</script>
<style>
div {
  margin: 25px;
}
</style>
