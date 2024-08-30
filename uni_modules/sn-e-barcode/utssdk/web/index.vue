<template>
	<view ref="containEle">
		<svg :id="id"
		style="width: auto !important;height: auto !important;"></svg>
	</view>
</template>

<script setup lang="uts">
	/**
	 * @name sn-e-barcode
	 * @tutorial https://sinleui.pages.dev/components/sn-e-barcode
	 * @description  Barcode 条形码
	 * @property {String} data    String | 条形码数据
	 * @property {Number} margin    Number | 条形码内边距
	 * @property {String} format=[UPC_A|UPC_E|EAN_8|EAN_13|CODE_39|CODE_93|CODE_128|ITF|CODABAR|DATA_MATRIX|AZTEC|PDF_417|MAXICODE|RSS_14|RSS_EXPANDED]    String | 条形码格式（不常见的格式部分设备可能不支持）具体[见下](#格式)
	 * @value UPC_A
	 * @value UPC_E
	 * @value EAN_8
	 * @value EAN_13
	 * @value CODE_39
	 * @value CODE_93
	 * @value CODE_128
	 * @value ITF
	 * @value CODABAR
	 * @value DATA_MATRIX
	 * @value AZTEC
	 * @value PDF_417
	 * @value MAXICODE
	 * @value RSS_14
	 * @value RSS_EXPANDED
	 * @property {String} bgColor    String | 条形码背景颜色（Android端有限制，必须为颜色名或完整不简写的Hex格式，不支持类似于CSS函数的用法）
	 * @property {String} lineColor    String | 条形码前景（线）的颜色（Android端有限制，必须为颜色名或完整不简写的Hex格式，不支持类似于CSS函数的用法）
	 * @property {String} charset    String | 条形码数据字符集（仅支持 Android）
	 * @property {Boolean} showText    Boolean | 是否在条形码下方显示数据文本（仅支持 Web）
	 * @property {String} textColor    String | 数据文本颜色（仅支持 Web）
	 * @property {String} textAlign=[left|center|right]    String | 数据文本对齐方式（仅支持 Web）
	 * @value left 左对齐
	 * @value center 居中对齐
	 * @value right 右对齐
	 * @property {String} textSize    String | 数据文本字体大小（仅支持 Web）
	 * @property {String} textXOffset    String | 数据文本横向偏移量（仅支持 Web）
	 * @property {String} textYOffset    String | 数据文本纵向偏移量（仅支持 Web）
	 * @property {String} textGap    String | 数据文本字符间距（仅支持 Web）
	 */
	// @ts-ignore
	import { tmp } from "./bwip-js.js"
	import { getPx, getDPI, px2mm } from "./utils.ts"
	
	const props = defineProps({
		data: {
			type: String,
			default: ""
		},
		margin: {
			type: Number,
			default: 1
		},
		format: {
			type: String,
			default: "CODE_128"
		},
		bgColor: {
			type: String,
			default: "#ffffff"
		},
		lineColor: {
			type: String,
			default: "#000000"
		},
		// WEB 特有
		showText: {
			type: Boolean,
			default: false
		},
		textColor: {
			type: String,
			default: "#000000"
		},
		textAlign: {
			type: String,
			default: "center"
		},
		textSize: {
			type: String,
			default: "12px"
		},
		textXOffset: {
			type: String,
			default: "0px"
		},
		textYOffset: {
			type: String,
			default: "1px"
		},
		textGap: {
			type: String,
			default: "0px"
		}
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

	const id = `code-${uuid()}`
	
	const format = computed((): string => {
		const barcodeTypes = {
		  "UPC_A": 'upca',
		  "UPC_E": 'upce',
		  "EAN_8": 'ean8',
		  "EAN_13": 'ean13',
		  "CODE_39": 'code39',
		  "CODE_93": 'code93',
		  "CODE_128": 'code128',
		  "ITF": 'itf14',
		  "CODABAR": 'rationalizedCodabar',
		  "DATA_MATRIX": 'datamatrix ',
		  "AZTEC": 'azteccode',
		  "PDF_417": 'pdf417',
		  "MAXICODE": 'maxicode'
		}.toMap()
		return barcodeTypes.has(props.format) ? barcodeTypes.get(props.format) as string : 'code128'
	})
	
	
	function init() {
		let node = containEle.value?.getBoundingClientRect()
		let width = node?.width || 100
		let height = node?.height || 100
		if (window.bwipjs != undefined && window.bwipjs != null) {
			let svg = window.bwipjs.toSVG({
			        bcid:        format.value,
			        text:        props.data,
			        height:      px2mm(height, getDPI()),
			        includetext: props.showText,
					padding: props.margin,
					backgroundcolor: props.bgColor,
					barcolor: props.lineColor,
			        textxalign:  props.textAlign,
			        textcolor:   props.textColor,
					textsize: getPx(props.textSize),
					textxoffset: getPx(props.textXOffset),
					textyoffset: getPx(props.textYOffset),
					textgaps: getPx(props.textGap)
			    });
			document.getElementById(id).innerHTML = svg
		}
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