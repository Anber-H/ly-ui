<template>
    <transition name="dialog-fade" @after-enter="openDialog" @after-leave="closeDialog">
        <div class="ly-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <div class="ly-dialog">
                <div class="ly-dialog__header">
                    <slot name="title">
                        <span>{{title}}</span>
                    </slot>
                    <button class="ly-dialog__headerbtn" @click="handleClose">
                        <i class="icon-close"></i>
                    </button>
                </div>
                <div class="ly-dialog__body">
                    <slot></slot>
                </div>
                <div class="ly-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'LyDialog',
    props: {
        title: {
            type: String,
            default: '标题'
        },
        visible: {
            type: Boolean,
            defalut: false
        }
    },
    methods: {
        handleClose () {
            this.$emit('update:visible', false);
        },
        openDialog () {
            this.$emit('opened');
        },
        closeDialog () {
            this.$emit('closed');
        }
    }
};
</script>
<style lang="scss" scoped>
.ly-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);
  .ly-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .ly-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ly-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>