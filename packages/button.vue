<template>
    <button
        class="ly-button"
        :class="[
            `ly-button-${type}`,
            {'is-plain':plain,
            'is-round':round,
            'is-circle':circle,
            'is-disabled':disabled
        }]"
        :disabled="disabled"
        @click="handleClick"
    >
        <i v-if="icon" :class="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'LyButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            defalut: false
        },
        circle: {
            type: Boolean,
            defalut: false
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            defalut: false
        }
    },
    created () {
        console.log(this.type);
    },
    methods: {
        handleClick (e) {
            this.$emit('click', e);
        }
    }
};
</script>
<style lang="scss" scoped>
%default-disabled {
  border-color: #ebeef5;
  background-color: #fff;
  color: #c0c4cc;
}
%primary-disabled {
  border-color: #a0cfff;
  background-color: #a0cfff;
  color: #fff;
}
%success-disabled {
  border-color: #b3e19d;
  background-color: #b3e19d;
  color: #fff;
}
%info-disabled {
  border-color: #c8c9cc;
  background-color: #c8c9cc;
  color: #fff;
}
%warning-disabled {
  border-color: #f3d19e;
  background-color: #f3d19e;
  color: #fff;
}
%danger-disabled {
  border-color: #fab6b6;
  background-color: #fab6b6;
  color: #fff;
}
.ly-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
.ly-button-primary{
    color:#fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus{
        background: #66b1ff;
        background-color: #66b1ff;
        color: #fff;
    }
}
.ly-button-success{
    color:#fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus{
        background: #85ce61;
        background-color: #85ce61;
        color: #fff;
    }
}
.ly-button-info{
    color:#fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus{
        background: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
    }
}
.ly-button-warning{
    color:#fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus{
        background: #ebb563;
        background-color: #ebb563;
        color: #fff;
    }
}
.ly-button-danger{
    color:#fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus{
        background: #f78989;
        background-color: #f78989;
        color: #fff;
    }
}
// 朴素按钮样式
.ly-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.ly-button-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.ly-button-success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.ly-button-info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.ly-button-warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.ly-button-danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
//disabled
@each $type in (default, primary, success, warning, info, danger) {
  .ly-button-#{$type}.is-disabled {
    @extend %#{$type}-disabled;
    &:hover,
    &:focus{
        @extend %#{$type}-disabled;
    }
  }
}
// round属性
.ly-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.ly-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.ly-button [class*=icon-]+span{
  margin-left: 5px;
}
// disabled属性
.ly-button[class*=is-disabled] {
    cursor: no-drop;
}
</style>