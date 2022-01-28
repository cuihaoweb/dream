// 声明.vue的文件，否则ts会报错
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}