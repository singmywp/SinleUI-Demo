<template>
	<view ref="containEle">
		<svg :id="id"
		style="width: auto !important;height: auto !important;"></svg>
	</view>
</template>

<script setup lang="uts">
	/**
	 * @name sn-e-qrcode
	 * @tutorial https://sinleui.pages.dev/components/sn-e-qrcode
	 * @description  Qrcode 二维码
	 * @property {String} data    String | 二维码数据
	 * @property {Number} margin    Number | 二维码内边距
	 * @property {String} errorLevel=[L|M|Q|H]    String | 二维码纠错等级
	 * @value L 低
	 * @value M 中
	 * @value Q 中高
	 * @value H 高
	 * @property {String} bgColor    String | 二维码背景颜色（Android端有限制，必须为颜色名或完整不简写的Hex格式，不支持类似于CSS函数的用法）
	 * @property {String} dotColor    String | 二维码前景（点）的颜色（Android端有限制，必须为颜色名或完整不简写的Hex格式，不支持类似于CSS函数的用法）
	 * @property {String} charset    String | 二维码数据字符集（仅支持 Android）
	 */
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