/**
* @description autocss config file
* @version v1.0.11
* @author kux <kviewui@163.com>
* @see https://gitcode.com/kviewui/kux-autocss
* @date 2024-08-03 19:09:50
* @copyright Copyright (c) 2024 The Authors.
* @license MIT License
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
**/
module.exports = {
	beforeContent   : '', // css文件头部文本
	afterContent    : '', // css文件结束的文本
	prefix          : '', // css前缀
	prefixSeparator : '', // css前缀分隔符，比如css前缀为kui，分隔符为-的话将自动生成类似kui-c-red格式的代码
	autoUseSnippets : true, // 是否自动生成css代码提示文件
	cssSnippetsFile : 'autocss.snippets.css', // CSS代码提示文件位置
	/**
	 * 颜色配置 默认包含如下值
	 * red          : '#F53F3F'
	 * oranged      : '#F77234'
	 * orange       : '#FF7D00'
	 * gold         : '#F7BA1E'
	 * yellow       : '#FADC19'
	 * lime         : '#9FDB1D'
	 * green        : '#00BC79'
	 * cyan         : '#14C9C9'
	 * blue         : '#3491FA'
	 * deepblue     : '#165DFF'
	 * purple       : '#722ED1'
	 * pinkpurple   : '#D91AD9'
	 * magenta      : '#F5319D'
	 * grey         : '#86909C'
	 * black        : '#000000'
	 * white        : '#FFFFFF'
	 * transparent  : 'transparent'
	 * 只需要配置颜色的变量值即可，会自动适配到所有颜色相关属性，如 color-red bg-red bg-diy
	 */
	// colors       : {},
	root            : './', // 必填项，源码根目录
	cssFile          : 'style/auto.css', // 必填项，自动生成的css文件位置（不存在会自动创建目录【hbx 可视化创建的项目暂时不会自动创建，需要手动创建好目录】）
	type            : 'uniapp', // 必填项，项目类型，暂时固定 uniapp类型
	extName         : ['vue', 'uvue'], // 可选项，自动生成css时检索的文件类型，可根据自己的项目自由调整，不过需注意为数组类型。
	unit            : 'px', // 可选项，默认单位 px 如填 v 则必须配合 vToAny
	
	/**
	 * 自定义规则，可复写默认规则
	 */
	overrideRules   : {},
	
	include         : [], // 可选项，需要处理的文件列表，支持glob语法，如 ['src/**/*.vue', '!src/components/ignore/**'], 默认规则：['pages/**']
	exclude         : [], // 可选项，不需要处理的文件列表，支持glob语法，如 ['src/components/ignore/**'],

	/**
	 * 自定义媒体查询
	 * 可复写规则，以下为默认配置，如 md@bg-red diy@bg-red
	 * sm           : '(min-width: 640px)',
	 * md           : '(min-width: 768px)',
	 * lg           : '(min-width: 1024px)',
	 * xl           : '(min-width: 1280px)'
	 */
	mediaQueries    : {},
	/**
	 * 是否为所有css 添加 important
	 */
	important       : false,

	/**
	 * 可变单位 v 的转换方式
	 * 例如 w-10 => 10 / 16 => 0.625rem
	 */
	// vToAny          : {
	//     unit: 'rem',
	//     rootValue: 16, // 跟字体大小或基于参数返回根元素字体大小 1px => 1/16rem
	//     unitPrecision: 5, // 允许小数单位精度
	//     minPixelValue: 1 // 不会被转换的最小值
	// }
}
