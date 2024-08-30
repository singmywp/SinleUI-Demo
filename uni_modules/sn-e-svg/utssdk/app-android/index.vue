<template>
	<view></view>
</template>
<script lang="uts">
	
	// #ifdef APP-ANDROID
	import FileInputStream from 'java.io.FileInputStream';
	import File from 'java.io.File';
	import SVGImageView from 'com.caverock.androidsvg.SVGImageView';
	import SVG from 'com.caverock.androidsvg.SVG';


	function getPath(path : string) : string {
		if (path.startsWith('file://')) return path.substring(7);
		return path.startsWith("/storage") ? path : UTSAndroid.getResourcePath(path)
	}

	export default {
		name: "sn-e-svg",
		props: {
			src: {
				type: String,
				default: ''
			},
		},
		data: {},
		methods: {
			resetSource(newPath : string) {
				if (newPath.startsWith('<')) {
					this.$el?.setSVG(SVG.getFromString(newPath))
				} else {
					var path = getPath(newPath);
					if (new File(path).exists()) {
						this.$el?.setSVG(SVG.getFromInputStream(new FileInputStream(path)))
					} else {
						console.error(`sn-e-svg: Svg path [${path}] does not exist`)
					}
				}
			}
		},
		watch: {
			"src": {
				handler(path : string) {
					this.resetSource(path)
				},
				immediate: true
			}
		},
		NVLoad() : SVGImageView {
			return new SVGImageView(this.$androidContext)
		}
	}
	// #endif
</script>