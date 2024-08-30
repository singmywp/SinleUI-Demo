<template>
	<view>
	</view>
</template>

<script lang="uts">
	
	import ImageView from 'android.widget.ImageView';
	import Uri from "android.net.Uri"

	export default {
		name: "sn-e-qrcode",
		props: {
			"data": {
				type: String,
				default: ""
			},
			"margin": {
				type: Number,
				default: 1
			},
			"errorLevel": {
				type: String,
				default: "M"
			},
			"charset": {
				type: String,
				default: "UTF-8"
			},
			"bgColor": {
				type: String,
				default: "#ffffff"
			},
			"dotColor": {
				type: String,
				default: "#000000"
			}
		},
		data() {
			return {
				width: 0,
				height: 0
			}
		},
		watch: {
			"data": {
				handler(newValue : string, oldValue : string) {
					// 避免空内容时报错 java.lang.IllegalArgumentException: Found empty contents
					let v = newValue.trim() != '' ? newValue : oldValue
					let level = this.errorLevel.toUpperCase()
					const levels = ["L", "M", "Q", "H"]
					level = levels.includes(level) ? level : "M"
					let src = generateQRCode(v, this.width.toInt(), this.height.toInt(), this.margin.toInt(), level, this.charset, this.bgColor, this.dotColor) ?? ''
					this.$el?.setImageURI(Uri.parse(src))
				},
				immediate: false
			},
		},
		NVLoad() : ImageView {
			let image = new ImageView($androidContext!);
			return image;
		},
		NVLayouted() {
			let level = this.errorLevel.toUpperCase()
			const levels = ["L", "M", "Q", "H"]
			level = levels.includes(level) ? level : "M"
			this.width = UTSAndroid.devicePX2px((this.$el?.getWidth() ?? 1) as number)
			this.height = UTSAndroid.devicePX2px((this.$el?.getHeight() ?? 1) as number)
			let src = generateQRCode(this.data, this.width.toInt(), this.height.toInt(), this.margin.toInt(), level, this.charset, this.bgColor, this.dotColor) ?? ''
			this.$el?.setImageURI(Uri.parse(src))
		},
		NVMeasure(size : UTSSize, mode : UTSMeasureMode) : UTSSize {
			return size;
		},
		NVUpdateStyles(styles : Map<String, any>) {
			this.width = parseInt(`${styles.get('width') ?? '1px'}`)
			this.height = parseInt(`${styles.get('height') ?? '1px'}`)
		}
	}
</script>

<style>

</style>