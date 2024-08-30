<template>
	<view>
		<slot />
	</view>
</template>

<script lang="uts">
	import Context from 'android.content.Context';
	import LinearLayout from 'android.widget.LinearLayout';
	import View from 'android.view.View';
	import MotionEvent from 'android.view.MotionEvent'
	import GestureDetector from 'android.view.GestureDetector';
	import SimpleOnGestureListener from 'android.view.GestureDetector.SimpleOnGestureListener'
	import ScaleGestureDetector from "android.view.ScaleGestureDetector";

	const lastTouchesRecords : Map<number, Map<string, number>> = new Map()

	export default {
		name: "sn-e-gesture",
		emits: ['click', 'longpress', 'showpress', 'dbclick', 'down', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'scale', 'fling'],
		data() {
			return {
				view: null as GestureLinearLayout | null
			}
		},
		NVLoad() : GestureLinearLayout {
			this.view = new GestureLinearLayout($androidContext!)!;
			let gestureDetector = new GestureDetector($androidContext!, new GestureViewGestureListener(this));
			let scaleGestureDetector = new ScaleGestureDetector($androidContext!, new GestureViewSimpleOnScaleGestureListener(this))
			this.view!.setOnTouchListener(new GestureViewOnTouchListener(this, gestureDetector, scaleGestureDetector))
			return this.view!;
		},
		NVMeasure(size : UTSSize) : UTSSize {
			return size;
		}
	}

	function getPos(e : MotionEvent, index : Int = (0).toInt()) : number[] {
		return [UTSAndroid.devicePX2px(Number.from(e.getRawX(index))), UTSAndroid.devicePX2px(Number.from(e.getRawY(index)))]
	}

	function getPosAndDirection(t : MotionEvent, index : Int) : any[] {
		let diffPos = [] as any[]
		diffPos = [0, 0, 0, 0, '', 0]
		let id = Number.from(t.getPointerId(index))
		let pos = getPos(t, index)
		let x = pos[0]
		let y = pos[1]

		if (lastTouchesRecords.has(id)) {
			let info = lastTouchesRecords.get(id)!
			let diffX = x - info.get('x')!
			let diffY = y - info.get('y')!
			let direction = Math.abs(diffX) > Math.abs(diffY) ? (diffX < 0 ? 'left' : 'right') : (diffY < 0 ? 'up' : 'down')
			diffPos = [x, y, diffX, diffY, direction, id]
		} else {
			let info = new Map<string, number>()
			info.set('x', x)
			info.set('y', y)
			diffPos = [x, y, 0, 0, '', id]
			lastTouchesRecords.set(id, info)
		}

		return diffPos
	}

	class GestureLinearLayout extends LinearLayout {
		constructor(context : Context) {
			super(context)
		}
		override onInterceptTouchEvent(motionEvent : MotionEvent) : boolean {
			return true
		}
	}

	class GestureViewSimpleOnScaleGestureListener extends ScaleGestureDetector.SimpleOnScaleGestureListener {
		private comp : SnEGestureComponent;
		constructor(comp : SnEGestureComponent) {
			super()
			this.comp = comp;
		}

		override onScale(detector : ScaleGestureDetector) : boolean {
			let deltaZoom = detector.getScaleFactor()
			this.comp.$emit('scale', { zoom: deltaZoom })
			return true
		}
	}

	class GestureViewGestureListener extends SimpleOnGestureListener {
		private comp : SnEGestureComponent;
		constructor(comp : SnEGestureComponent) {
			super()
			this.comp = comp;
		}

		override onDoubleTap(motionEvent : MotionEvent) : boolean {
			let pos = getPos(motionEvent)
			let e = {
				type: 'dbclick',
				x: pos[0],
				y: pos[1]
			}
			this.comp.$emit('dbclick', e)
			return false
		}

		override onDown(motionEvent : MotionEvent) : boolean {
			let pos = getPos(motionEvent)
			let e = {
				type: 'down',
				x: pos[0],
				y: pos[1]
			}
			this.comp.$emit('down', e)
			return false
		}

		override onShowPress(motionEvent : MotionEvent) {
			let pos = getPos(motionEvent)
			this.comp.$emit('showpress', { type: 'showpress', touches: [{ x: pos[0], y: pos[1], diffX: 0, diffY: 0, id: motionEvent.getPointerId(motionEvent.getActionIndex()), direction: '' }] })
		}

		override onLongPress(motionEvent : MotionEvent) {
			let pos = getPos(motionEvent)
			this.comp.$emit('longpress', { type: 'longpress', touches: [{ x: pos[0], y: pos[1], diffX: 0, diffY: 0, id: motionEvent.getPointerId(motionEvent.getActionIndex()), direction: '' }] })
		}

		override onSingleTapUp(motionEvent : MotionEvent) : boolean {
			let pos = getPos(motionEvent)
			let e = {
				type: 'click',
				x: pos[0],
				y: pos[1]
			}
			this.comp.$emit('click', e)
			return false
		}

		override onFling(e1 : MotionEvent | null, e2 : MotionEvent, velocityX : Float, velocityY : Float) : boolean {
			let beginPos = getPos(e1!)
			let endPos = getPos(e2)
			this.comp.$emit('fling', { type: 'fling', beginX: beginPos[0], endX: endPos[0], beginY: beginPos[1], endY: endPos[1], vX: UTSAndroid.devicePX2px(velocityX), vY: UTSAndroid.devicePX2px(velocityY) })
			return false
		}


		override onScroll(e1 ?: MotionEvent | null, e2 : MotionEvent, distanceX : Float, distanceY : Float) : boolean {
			let pointerCount = e2.getPointerCount()
			let touches = [] as UTSJSONObject[]

			for (let i = 0; i < pointerCount; i++) {
				let tmp = getPosAndDirection(e2, i.toInt())
				touches.push({
					x: tmp[0] as number,
					y: tmp[1] as number,
					diffX: tmp[2] as number,
					diffY: tmp[3] as number,
					direction: tmp[4] as string,
					id: tmp[5] as number
				})
			}

			this.comp.$emit('touchmove', {
				type: 'touchmove',
				touches,
			})
			return true
		}

	}

	class GestureViewOnTouchListener extends View.OnTouchListener {
		gestureDetector ?: GestureDetector
		scaleGestureDetector ?: ScaleGestureDetector
		private comp : SnEGestureComponent;

		constructor(comp : SnEGestureComponent, gestureDetector : GestureDetector, scaleGestureDetector : ScaleGestureDetector) {
			super()
			this.comp = comp;
			this.gestureDetector = gestureDetector
			this.scaleGestureDetector = scaleGestureDetector
		}

		override onTouch(v : View, motionEvent : MotionEvent) : boolean {
			this.gestureDetector?.onTouchEvent(motionEvent);
			this.scaleGestureDetector?.onTouchEvent(motionEvent)
			let actionMasked = motionEvent.getActionMasked();
			let pointerIndex = 0;

			function getTouches() : UTSJSONObject[] {
				let touches = [] as UTSJSONObject[]
				let tmp = getPosAndDirection(motionEvent, pointerIndex.toInt())
				touches.push({
					x: tmp[0] as number,
					y: tmp[1] as number,
					diffX: tmp[2] as number,
					diffY: tmp[3] as number,
					direction: tmp[4] as string,
					id: tmp[5] as number
				})
				return touches
			}

			function touchstart() {
				pointerIndex = motionEvent.getActionIndex()
				let touches = getTouches()
				this.comp.$emit('touchstart', { type: 'touchstart', touches })
			}

			function touchend() {
				pointerIndex = motionEvent.getActionIndex()
				let touches = getTouches()
				this.comp.$emit('touchend', { type: 'touchend', touches })
				lastTouchesRecords.delete(Number.from(motionEvent.getPointerId(pointerIndex.toInt())))
			}

			function touchcancel() {
				pointerIndex = motionEvent.getActionIndex()
				let touches = getTouches()
				this.comp.$emit('touchcancel', { type: 'touchcancel', touches })
				lastTouchesRecords.delete(Number.from(motionEvent.getPointerId(pointerIndex.toInt())))
			}


			// 处理不同的触摸动作
			switch (actionMasked) {
				case MotionEvent.ACTION_DOWN:
					touchstart()
					break;
				case MotionEvent.ACTION_POINTER_DOWN:
					touchstart()
					break;
				case MotionEvent.ACTION_UP:
					touchend()
					break;
				case MotionEvent.ACTION_POINTER_UP:
					touchend()
					break;
				case MotionEvent.ACTION_CANCEL:
					touchcancel()
			}
			return true;
		}

	}
	// #endif
</script>

<style lang="scss">
	.view {
		width: 100%;
	}
</style>