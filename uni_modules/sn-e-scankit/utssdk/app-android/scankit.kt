// 混编示例中的包名
package uts.sdk.modules.snEScankit

import android.app.ActivityManager
import android.content.Context.ACTIVITY_SERVICE
// UTS内置对象的包名引用
import io.dcloud.uts.UTSAndroid
import io.dcloud.uts.UTSArray
import io.dcloud.uts.console
import com.huawei.hms.ml.scan.*
import com.huawei.hms.hmsscankit.ScanUtil
import android.content.Intent
import android.os.Parcelable
import android.widget.Toast

val REQUEST_CODE_SCAN_ONE = 334;

fun getResultType(code: Int): String {
    val codeDescriptions = mapOf(
        1001 to "articleNumber",
        1009 to "contactDetail",
        1010 to "driverInfo",
        1002 to "emailContent",
        1008 to "eventInfo",
        1012 to "isbnNumber",
        1011 to "coordinate",
        1004 to "text",
        1005 to "sms",
        1003 to "telephone",
        1006 to "url",
        1007 to "wifiInfo"
    )
    return codeDescriptions[code] ?: "text"
}


fun getScanType(type: String): Int {
    return when (type.uppercase()) {
        "CODE_128" -> HmsScan.CODE128_SCAN_TYPE
        "CODE_39" -> HmsScan.CODE39_SCAN_TYPE
        "CODE_93" -> HmsScan.CODE93_SCAN_TYPE
        "CODABAR" -> HmsScan.CODABAR_SCAN_TYPE
        "EAN_13" -> HmsScan.EAN13_SCAN_TYPE
        "EAN_8" -> HmsScan.EAN8_SCAN_TYPE
        "ITF_14" -> HmsScan.ITF14_SCAN_TYPE
        "UPC_A" -> HmsScan.UPCCODE_A_SCAN_TYPE
        "UPC_E" -> HmsScan.UPCCODE_E_SCAN_TYPE
        "QRCODE" -> HmsScan.QRCODE_SCAN_TYPE
        "PDF_417" -> HmsScan.PDF417_SCAN_TYPE
        "AZTEC" -> HmsScan.AZTEC_SCAN_TYPE
        "DATAMATRIX" -> HmsScan.DATAMATRIX_SCAN_TYPE
        "MULTI_FUNCTIONAL" -> HmsScan.MULTI_FUNCTIONAL_SCAN_TYPE
        else -> HmsScan.QRCODE_SCAN_TYPE
    }
}

fun getScanTypesArray(types: Array<String>): Array<Int> {
    return types.map { getScanType(it) }.distinct().filterNotNull().toTypedArray()
}

fun startScan(
	scanTypes: Array<String>,
	titleType: Int = 0,
	callback: (UTSArray<Any>) -> Unit
) {
	val context = UTSAndroid.getUniActivity()
	val scanTypeArray = getScanTypesArray(scanTypes).toIntArray()
	var options: HmsScanAnalyzerOptions;
	options = HmsScanAnalyzerOptions.Creator()
	.setHmsScanTypes(scanTypeArray[0],*scanTypeArray.drop(1).toIntArray())
	.setViewType(titleType)
	.setErrorCheck(true)
	.create()
	
	ScanUtil.startScan(context!!, REQUEST_CODE_SCAN_ONE, options)
	
	fun handleActivityResult(requestCode: Int, resultCode: Int,data: Intent?) {
	    if (data != null && requestCode == REQUEST_CODE_SCAN_ONE) {
	        val errorCode: Int = data.getIntExtra(ScanUtil.RESULT_CODE, ScanUtil.SUCCESS)
	        if (errorCode == ScanUtil.SUCCESS) {
				val obj = data.getParcelableExtra(ScanUtil.RESULT) as Parcelable?
	            if (obj != null) {
	                val res = obj as HmsScan
	                callback(
	                    UTSArray(getResultType(res.getScanTypeForm()), res.getOriginalValue())
	                )
	            }
	        }
	        if (errorCode == ScanUtil.ERROR_NO_READ_PERMISSION) {
	            val toast = Toast.makeText(UTSAndroid.getAppContext(), "请授权相册权限重试", Toast.LENGTH_SHORT)
	            toast.show()
	        }
	    }
		UTSAndroid.offAppActivityResult(::handleActivityResult);
	}
	
	UTSAndroid.onAppActivityResult(::handleActivityResult);
}