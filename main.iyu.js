
const { ref, reactive, computed, watch, watchEffect, inject, provide , onBeforeMount } = Vue
const ire = reactive, icd = computed, iwh = watch, iwt = watchEffect, iit = inject, ipe = provide, 响应变量 = ref, 响应对象 = reactive, 计算属性 = computed, 监视 = watch, 监视自动 = watchEffect, 注入 = inject, 提供 = provide;

export default {
__name: 'main',
setup(ps, { expose: __expose }) {
__expose();
try {

function iAppHalo(){
tw('Hello world');

}

function 载入(){
location.href = "AiIndex.htm";

}
onBeforeMount(载入);

return { iAppHalo, 载入, ref, reactive, computed, watch, watchEffect, inject, provide , onBeforeMount };
} catch (__err) {
sysoerr(__err + '; ' + __err.stack);
return { };
}
}
,components: {  }
,template: '\n<div></div>\n'
}
