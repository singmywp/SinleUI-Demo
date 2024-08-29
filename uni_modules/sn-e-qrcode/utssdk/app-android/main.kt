package uts.sdk.modules.snEQrcode

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Color
import com.google.zxing.BarcodeFormat
import com.google.zxing.EncodeHintType
import com.google.zxing.MultiFormatWriter
import com.google.zxing.common.BitMatrix
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.util.*
// UTS内置对象的包名引用
import io.dcloud.uts.UTSAndroid
import io.dcloud.uts.setInterval
import io.dcloud.uts.clearInterval
import io.dcloud.uts.UTSArray
import io.dcloud.uts.console
import kotlin.Number


fun dp2px(dp: Number): Number {
	val context = UTSAndroid.getAppContext()
	val density = context!!.resources.displayMetrics.density
	return dp.toFloat() * density
}

fun px2dp(px: Number): Number {
	val context = UTSAndroid.getAppContext()
	val density = context!!.resources.displayMetrics.density
	return px.toFloat() / density
}

fun generateQRCode(
	data: String, 
	width: Int = 100, 
	height: Int = 100,
	margin: Int = 1, 
	errorCorrectionLevel: String = "L", 
	characterSet: String = "UTF-8",
	bgColor: String = "#ffffff",
	dotColor: String = "#000000"
): String? {
	val context = UTSAndroid.getAppContext();
	val _margin = px2dp(margin).toInt();
	
	var _errorCorrectionLevel = ErrorCorrectionLevel.L
	
	if (errorCorrectionLevel == "M") {
		_errorCorrectionLevel = ErrorCorrectionLevel.M
	} else if (errorCorrectionLevel == "Q") {
		_errorCorrectionLevel = ErrorCorrectionLevel.Q
	} else if (errorCorrectionLevel == "H") {
		_errorCorrectionLevel = ErrorCorrectionLevel.H
	}
	
    try {
		val hints = hashMapOf(
		    EncodeHintType.ERROR_CORRECTION to _errorCorrectionLevel,
		    EncodeHintType.CHARACTER_SET to characterSet,
		    EncodeHintType.MARGIN to _margin
		)

        val bitMatrix: BitMatrix = MultiFormatWriter().encode(
			data, 
			BarcodeFormat.QR_CODE, 
			width, 
			height, 
			hints
		)

        val cacheDir = context!!.cacheDir
        val tempFile = File.createTempFile("code", ".png", cacheDir)
        val outputStream = FileOutputStream(tempFile)

        val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
        for (x in 0 until width) {
            for (y in 0 until height) {
                bitmap.setPixel(x, y, if (bitMatrix.get(x, y)) Color.parseColor(dotColor) else Color.parseColor(bgColor))
            }
        }

        bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)
        outputStream.close()

        return tempFile.absolutePath
    } catch (e: IOException) {
        e.printStackTrace()
        return null
    }
}
