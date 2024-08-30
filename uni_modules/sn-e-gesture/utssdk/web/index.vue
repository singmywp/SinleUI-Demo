<template>
	<view>
		<text>sn-e-gesture 不支持 Web 端，请使用 sn-view 代替</text>
	</view>
</template>

<script setup>
/**
	 * @name sn-e-gesture
	 * @tutorial https://sinleui.pages.dev/components/sn-e-gesture
	 * @description  Gesture 手势
	 * 
	 * `sn-e-gesture` 是 SinleUI 框架的手势库核心组件。
	 * 
	 * 主要集成了一些 App 端原生手势事件（非 uni 内置事件），以便开发使用。
	 * @event {Function} click   (event:UTSJSONObject)=>void | 点击事件（`event`结构同[SnPointerEvent](https://sinleui.pages.dev/api/types/api#snpointerevent)）
	 * @event {Function} longpress   (event:UTSJSONObject)=>void | 长按事件（`event`结构同[SnTouchEvent](https://sinleui.pages.dev/api/types/api#sntouchevent)）
	 * @event {Function} dbclick   (event:UTSJSONObject)=>void | 双击事件（`event`结构同[SnPointerEvent](https://sinleui.pages.dev/api/types/api#snpointerevent)）
	 * @event {Function} touchstart   (event:UTSJSONObject)=>void | 手指落下事件（`event`结构同[SnTouchEvent](https://sinleui.pages.dev/api/types/api#sntouchevent)）
	 * @event {Function} touchmove   (event:UTSJSONObject)=>void | 手指移动事件（`event`结构同[SnTouchEvent](https://sinleui.pages.dev/api/types/api#sntouchevent)）
	 * @event {Function} touchend   (event:UTSJSONObject)=>void | 手指抬起事件（`event`结构同[SnTouchEvent](https://sinleui.pages.dev/api/types/api#sntouchevent)）
	 * @event {Function} touchcancel   (event:UTSJSONObject)=>void | 触摸打断事件（`event`结构同[SnTouchEvent](https://sinleui.pages.dev/api/types/api#sntouchevent)）
	 * @event {Function} down   (event:UTSJSONObject)=>void | 按下事件（`event`结构同[SnPointerEvent](https://sinleui.pages.dev/api/types/api#snpointerevent)）
	 * @event {Function} fling   (event:UTSJSONObject)=>void | 滑动事件（`event`结构同[SnFlingEvent](https://sinleui.pages.dev/api/types/api#snflingevent)）
	 * @event {Function} scale   (event:UTSJSONObject)=>void | 双指缩放事件（`event`结构同[SnScaleEvent](https://sinleui.pages.dev/api/types/api#snscaleevent)）
	 */
	defineEmits(['click', 'longpress', 'showpress', 'dbclick', 'down', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'scale', 'fling'])
</script>

<style>

</style>