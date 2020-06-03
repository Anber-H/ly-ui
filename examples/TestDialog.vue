<template>
    <div>
        <ly-button @click="dialogVisible=true">打开</ly-button>
        <ly-dialog title="标题" :visible.sync="dialogVisible" @opened="open" @closed="close">
            <ul>
                <li>111</li>
                <li>222</li>
                <li>333</li>
            </ul>
            <div slot="footer">
                <ly-button>取消</ly-button>
                <ly-button type="success">确定</ly-button>
            </div>
        </ly-dialog>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dialogVisible: false
        };
    },
    methods: {
        open () {
            console.log('open');
        },
        close () {
            console.log('close');
        }
    }
};
</script>