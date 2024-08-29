<template>
	<view ref="containEle">
		<svg :id="id"
		style="width: auto !important;height: auto !important;"></svg>
	</view>
</template>

<script setup lang="uts">
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