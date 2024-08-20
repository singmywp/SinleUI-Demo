<template>
	<view ref="containEle" v-html="src"></view>
</template>

<script lang="uts">
	export default {
		name: "sn-e-svg",
		props: {
			src: {
				type: String,
				default: ''
			}
		},
		methods: {
			init() {
				let contain = this.$refs['containEle'] as UniElement
				let child = contain.firstChild
				child?.style?.setProperty('width', contain.style.getPropertyValue('width'))
				child?.style?.setProperty('height', contain.style.getPropertyValue('height'))
			}
		},
		updated() {
			this.init()
		},
		mounted() {
			this.init()
		}
	}
</script>