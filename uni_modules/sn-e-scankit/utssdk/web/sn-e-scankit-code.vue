<template>
	<view>
		<text>sn-e-scankit-code 不支持 Web 端，请使用 sn-e-barcode 或 sn-e-qrcode 代替</text>
	</view>
</template>

<script setup>
	/**
	 * @name sn-e-scankit-code
	 * @tutorial https://sinleui.pages.dev/components/sn-e-scankit-code
	 * @description  ScanKit  Code 华为码图
	 * 
	 * - 此插件是扩展插件，基于华为统一扫码服务（Scan Kit）封装。Scan Kit支持将字符串转换为一维码或二维码，目前已支持的码制式为EAN-8、EAN-13、UPC-A、UPC-E、Codabar、Code 39、Code 93、Code 128、ITF14、QR、DataMatrix、PDF417、Aztec。您只需要提供字符串、码制式和码图尺寸要求，即可获得相应的码图。在生成QR码前，您还可以在固定区域上传图片，如厂家Logo，生成一些个性化的QR码。
	 * @property {String} data    String | 需要编码的数据
	 * @property {ScanType} type=[CODE_128|CODE_39|CODE_93|CODABAR|EAN_13|EAN_8|ITF_14|UPC_A|UPC_E|QRCODE|PDF_417|AZTEC|DATAMATRIX|MULTI_FUNCTIONAL]    ScanType | 码图类型
	 * @value CODE_128
	 * @value CODE_39
	 * @value CODE_93
	 * @value CODABAR
	 * @value EAN_13
	 * @value EAN_8
	 * @value ITF_14
	 * @value UPC_A
	 * @value UPC_E
	 * @value QRCODE
	 * @value PDF_417
	 * @value AZTEC
	 * @value DATAMATRIX
	 * @value MULTI_FUNCTIONAL
	 * @property {Number} margin    Number | 码图边距
	 * @property {String} bgColor    String | 码图背景颜色
	 * @property {String} frontColor    String | 码图前景颜色
	 * @property {String} qrErrorLevel=[L|M|Q|H]    String | 二维码错误容错级别
	 * @value L
	 * @value M
	 * @value Q
	 * @value H
	 * @property {String} qrLogo    String | 二维码中间的Logo图片路径
	 */
	import { ScanType } from '../interface.uts'
	defineProps({
		data: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'QRCODE',
		},
		margin: {
			type: Number,
			default: 1,
		},
		bgColor: {
			type: String,
			default: "#ffffff"
		},
		frontColor: {
			type: String,
			default: "#000000"
		},
		qrErrorLevel: {
			type: String,
			default: "M"
		},
		qrLogo: {
			type: String,
			default: "",
		}
	})
</script>

<style>

</style>