<template>
	<view>
		<text>sn-e-scan-provider 不支持 Web 端</text>
	</view>
</template>

<script setup>
	/**
	 * @name sn-e-scan-provider
	 * @tutorial https://sinleui.pages.dev/components/sn-e-scan-provider
	 * @description  Scan Provider 扫码核心
	 * 
	 * 本组件是 SinleUI 扫码插件的核心部分，负责摄像头预览、扫码解析等基础工作，并向外部提供接口。
	 * 
	 * SinleUI 框架内置的 `sn-scan` 组件依赖此组件，故 HBuilderX 安装 SinleUI 插件时会自动安装此组件
	 * 
	 * 如果你不满意内置的 `sn-scan` 的界面，可以参考 `sn-scan` 组件，对本组件进行再封装
	 * @property {String} scanType=[qrCode|barCode|all]    String | 扫码类型
	 * @value qrCode 二维码 
	 * @value barCode 条形码
	 * @value all 二维码和条形码
	 * @property {Boolean} enableDing    Boolean | 是否开启声音提示
	 * @property {Boolean} enableZoom    Boolean | 是否允许缩放
	 * @property {Number} initZoomScale    Number | 初始缩放比例
	 * @property {String} cameraPermTip    String | 相机权限请求提示
	 * @event {Function} scanned   (res:ScanResult)=>void | 扫码成功时触发。`res`的结构及说明见[文档](https://sinleui.pages.dev/components/sn-e-scan-provider#%E7%B1%BB%E5%9E%8B)
	 */
	
	defineEmits(['scanned'])
	defineProps({
		scanType: {
			type: String,
			default: "all"
		},
		enableDing: {
			type: Boolean,
			default: true
		},
		enableZoom: {
			type: Boolean,
			default: true
		},
		initZoomScale: {
			type: Number,
			default: 0
		},
		cameraPermTip: {
			type: String,
			default: '\u3000 本应用正在请求您的相机权限，仅用于条码、二维码识别，且不会将任何数据上传至云端。如不提供此权限，则无法正常使用扫码功能。'
		}
	})
</script>