<template>
	<view ref="containEle" v-html="src"></view>
</template>

<script setup lang="uts">
	/**
	 * @name sn-e-svg
	 * @tutorial https://sinleui.pages.dev/components/sn-e-svg
	 * @description  SVG 可缩放矢量图形
	 * 
	 * 主要因为 uni-app x 内置的 `image` 组件不支持 `svg` 格式，故使用此组件
	 * 
	 * SinleUI 框架基于 SVG 实现的组件都依赖此组件，故 HBuilderX 安装 SinleUI 插件时会自动安装此组件
	 * @property {String} src    String | SVG图片的路径，也可以直接写SVG图片源码
	 */
	
	defineOptions({
		name: 'sn-e-svg'
	})
	
	const containEle = ref(null as UniElement | null)
	
	const props = defineProps({
		src: {
			type: String,
			default: ''
		}
	})

	function init() {
		let contain = containEle.value
		if (contain == null || contain == undefined) return
		let child = contain.firstChild
		child?.style?.setProperty('width', contain.style.getPropertyValue('width'))
		child?.style?.setProperty('height', contain.style.getPropertyValue('height'))
	}
	
	onUpdated(()=>{
		init()
	})
	onMounted(()=>{
		init()
	})
</script>