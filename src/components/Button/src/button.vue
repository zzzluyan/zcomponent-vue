<template>
    <button @click="handleClick" class="z-button--default" :style="ZButtonExtra">
        <span><slot v-if="hasSlot" ref="btn-slot"></slot></span>
    </button>
</template>
<script>
export default {
    name: 'ZButton',
    data() {
        return {
            hasSlot: true,
            ZButtonExtra: {}
        };
    },
    props: {
        size: { // 代表缩放比例,范围(0, 2]
          type: Number,
          default: 1,
          validator(val) {
            return (val > 0 && val <= 2);
          },
          immediate: true
        }
    },
    watch: {
      size(val) {
        if (val > 0 && val <= 2) {
          this.ZButtonExtra = {
            transform: `scale(${val})`
          }
        } else {
          throw Error('按钮size数值超标')
        }
      }
    },
    mounted() {
        this.hasSlot = this.$slots.default !== undefined;
        // if (this.size > 0 && this.size <=2) {
        //   this.ZButtonExtra = {
        //     transform: `scale(${this.size})`
        //   }
        // } else {
        //   throw Error('按钮size数值超标')
        // }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
}
</script>
<!--
    1、按钮支持等比例缩放
    2、设置全局统一的样式变量
 -->
<style scoped>
.z-button--default {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    color: #1b1c33;
    background-color: #fff;
    border-color: #b0b1b8;
    border-radius: 4px;
    height: 36px;
    min-width: 76px;
    line-height: 1;
    outline: 0; /* 元素最外圈的轮廓 */
    user-select: none; /* 不可被复制 */
    margin: 0;
    padding: 0 12px;
    white-space: nowrap; /* 段落文本换行 */
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    /* transition: all .3s cubic-bezier(.645,.045,.355,1);  ??*/
}
.z-button--default:hover {
    color: #5757c3;
    border: 1px solid #5757c3;
}
.z-button--default:active {
    color: #4646a1;
    border: 1px solid #4646a1;
    background-color: #f4eefd;
}
</style>
