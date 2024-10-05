<template>
	<view>
		
	</view>
</template>

<script lang="uts">
	// #ifdef APP-ANDROID
	
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
	import ImageView from 'android.widget.ImageView';
	import Bitmap from 'android.graphics.Bitmap';
	import Uri from 'android.net.Uri';
	
	export default {
		name: 'sn-e-scankit-code',
		data() {
			return {
				width: 0,
				height: 0
			}
		},
		props: {
			data: {
				type: String,
				default: ''
			},
			type: {
				type: String as PropType<ScanType>,
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
		},
		methods: {
			getResourcePath(path: string): string|null {
				let uri = path
				if (uri.startsWith("http") || uri.startsWith("<svg") || uri.startsWith("data:image/")) {
					return null
				}
				if (uri.startsWith("file://")) {
					uri = uri.substring("file://".length)
				} else if (uri.startsWith("unifile://")) {
					uri = UTSAndroid.convert2AbsFullPath(uri)
				} else {
					uri = UTSAndroid.convert2AbsFullPath(uri)
				}
				return uri
			},
			setImage(){
				let v = this.data.trim() == '' ? 'null' : this.data
				let level = this.qrErrorLevel.toUpperCase()
				const levels = ["L", "M", "Q", "H"]
				level = levels.includes(level) ? level : "M"
				let src: Bitmap | null = generateCodeBitmap(v, this.type, this.width.toInt(), this.height.toInt(), this.margin.toInt(), this.bgColor, this.frontColor, level, this.getResourcePath(this.qrLogo))
				if (src !=null) {
					this.$el?.setImageBitmap(src)
				}
			}
		},
		watch: {
			data: {
				handler(_: string) {
					this.setImage()
				}
			},
			type: {
				handler(_: string) {
					this.setImage()
				}
			},
			margin: {
				handler(_: number) {
					this.setImage()
				}
			},
			bgColor: {
				handler(v: string) {
					this.setImage()
				}
			},
			frontColor: {
				handler(_: string) {
					this.setImage()
				}
			},
			qrLogo: {
				handler(_: string) {
					this.setImage()
				}
			},
			qrErrorLevel: {
				handler(_: string) {
					this.setImage()
				}
			},
		},
		NVLoad() : ImageView {
			let image = new ImageView($androidContext!);
			return image;
		},
		NVLayouted() {
			this.width = UTSAndroid.devicePX2px((this.$el?.getWidth() ?? 1) as number)
			this.height = UTSAndroid.devicePX2px((this.$el?.getHeight() ?? 1) as number)
			this.setImage()
		},
		NVMeasure(size : UTSSize, mode : UTSMeasureMode) : UTSSize {
			return size;
		},
		NVUpdateStyles(styles : Map<String, any>) {
			this.width = parseInt(`${styles.get('width') ?? '1px'}`)
			this.height = parseInt(`${styles.get('height') ?? '1px'}`)
		}
	}
	// #endif
</script>

<style>

</style>