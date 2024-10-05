// 混编示例中的包名
package uts.sdk.modules.snEScankit

import android.graphics.Bitmap
import com.huawei.hms.ml.scan.HmsBuildBitmapOption
import com.huawei.hms.ml.scan.HmsBuildBitmapOption.ErrorCorrectionLevel
import com.huawei.hms.ml.scan.HmsScan
import com.huawei.hms.hmsscankit.ScanUtil
import android.graphics.Color
import android.graphics.BitmapFactory
import android.text.TextUtils


fun getErrorLevel(level: String): ErrorCorrectionLevel {
    return when (level.uppercase()) {
        "L" -> ErrorCorrectionLevel.L
		"Q" -> ErrorCorrectionLevel.Q
		"M" -> ErrorCorrectionLevel.M
		"H" -> ErrorCorrectionLevel.H
        else -> ErrorCorrectionLevel.M
    }
}

fun generateCodeBitmap(
    content: String,
    type: String,
    width: Int,
    height: Int,
    margin: Int,
    bgColor: String,
    frontColor: String,
	qrErrorLevel: String,
	bgLogoSrc: String? = null
): Bitmap? {
	val codeType = getScanType(type)
	var bgLogo: Bitmap?
	val options = HmsBuildBitmapOption.Creator()
	    .setBitmapBackgroundColor(Color.parseColor(bgColor))
	    .setBitmapColor(Color.parseColor(frontColor))
	    .setBitmapMargin(margin)
		.setQRErrorCorrection(getErrorLevel(qrErrorLevel))
	if (bgLogoSrc != null && !TextUtils.isEmpty(bgLogoSrc)) {
		bgLogo = BitmapFactory.decodeFile(bgLogoSrc)
		options.setQRLogoBitmap(bgLogo)
	}
    
    return ScanUtil.buildBitmap(content, codeType, width, height, options.create())
}
