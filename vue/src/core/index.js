import Vue from "./instance/index";
import { initGlobalAPI } from "./global-api/index";
import { isServerRendering } from "core/util/env";
import { FunctionalRenderContext } from "core/vdom/create-functional-component";

// 初始化全局 API
initGlobalAPI(Vue);

// 设置服务端渲染
Object.defineProperty(Vue.prototype, "$isServer", {
  get: isServerRendering,
});

// 设置 ssr 配置
Object.defineProperty(Vue.prototype, "$ssrContext", {
  get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  },
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, "FunctionalRenderContext", {
  value: FunctionalRenderContext,
});

Vue.version = "__VERSION__";

export default Vue;
