<template>
	<view>
		<slot></slot>
	</view>
</template>

<script lang="uts">
	/**
	 * @name sn-e-blurview
	 * @tutorial https://sinleui.pages.dev/components/sn-e-blurview
	 * @description  Blurview 高斯模糊
	 *
	 *- 快速展示模糊内容，实现毛玻璃效果。一般需要设置其为 `fixed` 定位且背景颜色透明。
	 * @property {Number} radius    Number | 模糊半径
	 */

	
	import RenderScriptBlur from "eightbitlab.com.blurview.RenderScriptBlur";
	import FrameLayout from 'android.widget.FrameLayout'
	import BlurView from "eightbitlab.com.blurview.BlurView";

	export default {
		name: "sn-e-blurview",
		data() {
			return {}
		},
		props: {
			radius: {
				type: Number,
				default: 15
			}
		},
		NVLoad() : BlurView {
			let blurview = new BlurView($androidContext)
			let decorView = UTSAndroid.getUniActivity()!.window.decorView;
			let rootView = decorView.findViewById<FrameLayout>(android.R.id.content)
			blurview.setupWith(rootView)
			.setBlurAlgorithm(new RenderScriptBlur($androidContext))
			.setBlurRadius(this.radius.toFloat());
			return blurview
		},
	}
</script>