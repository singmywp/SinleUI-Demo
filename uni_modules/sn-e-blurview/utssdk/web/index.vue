<template>
	<view :style="[blurviewStylesC]">
		<slot></slot>
	</view>
</template>

<script setup>
	
	defineOptions({
		name: 'sn-e-blurview'
	})
	
	const props = defineProps({
		radius: {
			type: Number,
			default: 15
		}
	})
	
	const blurviewStylesC = computed(() : Map<string, any> => {
		let styles = new Map<string, any>()
		styles.set('backdrop-filter', `blur(${props.radius}px)`)
		styles.set('-webkit-backdrop-filter', `blur(${props.radius}px)`)
		
		return styles
	})
</script>

<style lang="scss">
</style>