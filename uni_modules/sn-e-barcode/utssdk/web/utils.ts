export function isNumberString(num: string): boolean {
	const reg = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/
	return reg.test(num)
}

export function getPx(value: string): number {
	let valueTmp = value.toString().toLowerCase()
	if (valueTmp.indexOf('%') != -1) {
		try {
			return uni.getSystemInfoSync().windowWidth * (parseFloat(valueTmp.replace('%', '')) / 100)
		} catch (e) {}
	}

	if (isNumberString(valueTmp)) {
		return parseFloat(valueTmp)
	}

	if (/(rpx|upx)$/.test(valueTmp)) {
		try {
			let n = parseInt(valueTmp.replace(/rpx/g, '').replace(/upx/g, ''))
			return uni.rpx2px(n)
		} catch (e) {}
	}

	return parseFloat(valueTmp)
}

export function getDPI(): number {
	let dpi = 96
	if (window.screen.deviceXDPI) {
		dpi = window.screen.deviceXDPI;
	} else {
		var tmpNode = document.createElement("DIV");
		tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
		document.body.appendChild(tmpNode);
		dpi = parseInt(tmpNode.offsetWidth);
		tmpNode.parentNode.removeChild(tmpNode);
	}
	return dpi;
}

export function px2mm(px: number, dpi = 96) {
	return (px * 25.4) / dpi;
}