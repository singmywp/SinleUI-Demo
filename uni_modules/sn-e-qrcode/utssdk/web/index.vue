<template>
	<view ref="containEle">
		<svg :id="id"
		style="width: auto !important;height: auto !important;"></svg>
	</view>
</template>

<script setup lang="uts">
	import { tmp } from "./bwip-js.js"
	
	const props = defineProps({
		data: {
			type: String,
			default: ""
		},
		margin: {
			type: Number,
			default: 1
		},
		errorLevel: {
			type: String,
			default: "L"
		},
		bgColor: {
			type: String,
			default: "#ffffff"
		},
		dotColor: {
			type: String,
			default: "#000000"
		},
	})
	
	const containEle = ref(null as UniElement | null)

	function uuid() : string {
		const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
		let uuid : string[] = []

		for (let i = 0; i < 36; i++) {
			let r = 0 | Math.random() * 16
			let c = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
			uuid.push(c)
		}
		uuid[8] = '-'
		uuid[13] = '-'
		uuid[18] = '-'
		uuid[23] = '-'
		uuid[14] = '4'
		return uuid.join('')
	}

	const id = `qrcode-${uuid()}`
	
	function init() {
		let node = containEle.value?.getBoundingClientRect()
		let width = node?.width || 100
		let height = node?.height || 100
		let svg = bwipjs.toSVG({
		        bcid:        'qrcode',
		        text:        props.data,
				padding: props.margin,
				backgroundcolor: props.bgColor,
				barcolor: props.dotColor,
		    });
		document.getElementById(id).innerHTML = svg
	}
	
	onMounted(() => {
		init()
	})
	
	onUpdated(() => {
		init()
	})

</script>

<style>

</style>