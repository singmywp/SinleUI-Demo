## 1.0.12（2024-08-26）
+ 修复编译器 `4.26` 版本编译样式失效问题。
+ 对齐全端使用体验，`web` 环境不再需要导入全局样式文件。
+ 插件配置新增 `debug` 参数，用来开启关闭控制台调试内容。
+ 插件配置新增 `generateGlobalCss` 参数，用来开启关闭是否生成全局样式文件。
+ 优化其他已知问题。
## 1.0.11（2024-08-01）
+ `textEllipsis`：调整为仅实现 `text-ellipsis-{num}` 语法，不再支持 `text-ellipsis` 语法。且该语法仅支持 `vue` 文件。
+ 新增 `textOverflow` 样式语法，可支持主流原子化框架的语法，如：`text-ellipsis`、`text-clip`、`truncate`。参考 [ucss text-overflow 属性值](https://doc.dcloud.net.cn/uni-app-x/css/text-overflow.html)。
	> **注意**
	>
	> `truncate` 语法在 `nvue` 的实现做了兼容调整，即不会实现 `white-space`。
## 1.0.10（2024-07-29）
+ 修复自动生成提示文件时 `visibility` 后续生成 `undefined` 的问题。
+ 修复 `orientation` 使用完整方向语法时样式生成为空的问题。

## 1.0.9（2024-07-29）
+ 支持的所有属性均支持主流原子化框架的提权语法，在class语法前或者后增加 `!` 即可。如：`!bg-clip-border`、`bg-clip-padding!`、`!bg-clip-content`。
	> **提示**
	>
	> 经过测试发现目前在 `app-uvue` 安卓端不支持在 `classname` 添加 `!@:`等符号，使用的时候要注意！！！
	
+ 优化底层逻辑，支持 `uniapp x` 项目类型的同时增加支持 `uniapp` 项目，包括 `cli` 项目类型。
## 1.0.8（2024-07-27）
+ 新增 `backgroundClip` 样式语法，可支持主流原子化框架的语法，如：`bg-clip-border`、`bg-clip-padding`、`bg-clip-content`。参考 [ucss background-clip 属性值](https://doc.dcloud.net.cn/uni-app-x/css/background-clip.html)。
+ 新增 `backgroundImage` 背景渐变样式语法，基础语法规则：`(bg-gradient|lg)-<方向[trbl]>-<起始颜色值>-<结束颜色值>`。使用示例：`bg-gradient-t-red-green`、`bg-lg-br-yellow-red`。 具体参考 [ucss background-image 属性值](https://doc.dcloud.net.cn/uni-app-x/css/background-image.html)。
	> **注意**
	>
	> 由于 `ucss` 目前不支持原生css变量，所以无法实现主流原子化框架那种拆分式的语法。
	>
	> 上面的颜色值和之前的颜色值一样都支持跟颜色透明度，如：`bg-lg-t-yellow-50-red-80`。
	
+ 新增 `boxShadow` 样式语法，可支持主流原子化框架的语法，如：`shadow-sm`、`shadow`、`shadow-md`、`shadow-lg`、`shadow-xl`、`shadow-2xl`、`shadow-inner`、`shadow-none`。参考 [ucss box-shadow 属性值](https://doc.dcloud.net.cn/uni-app-x/css/box-shadow.html)。
+ 新增 `flexFlow` 样式语法，基础语法规则：`(flex-flow|flow|ff)-<方向[row|col|column|raw-reverse|col-reverse|column-reverse]>-<换行[wrap|nowrap|wrap-reverse]>`。使用示例：`flex-flow-row-wrap`、`flow-col-nowrap`、`ff-row-wrap`、`ff-col-wrap-reverse`。 具体参考 [ucss flex-flow 属性值](https://doc.dcloud.net.cn/uni-app-x/css/flex-flow.html)。
+ 新增 `fontStyle` 样式语法，可支持主流原子化框架的语法，如：`font-italic`、`font-not-italic`、`italic`、`not-italic`。参考 [ucss font-style 属性值](https://doc.dcloud.net.cn/uni-app-x/css/font-style.html)。
+ 新增 `lines` 样式语法，基础语法规则：`lines-(数字)`，如：`lines-1`、`lines-2`、`lines-3`、`lines-4`。参考 [ucss line-clamp 属性值](https://doc.dcloud.net.cn/uni-app-x/css/line-clamp.html)。
	> **注意**
	>
	> 该样式仅对 `uvue` 的 `text` 类组件有效。

+ `overflow`：属性值新增 `clip`，可用于裁剪溢出内容。如：`overflow-clip`。
+ 新增 `pointerEvents` 样式语法，可支持主流原子化框架的语法，如：`pointer-events-none`、`pointer-events-auto`。同时增加了简写语法，如：`pe-none`、`pe-auto`。参考 [ucss pointer-events 属性值](https://doc.dcloud.net.cn/uni-app-x/css/pointer-events.html)。
+ `textDecoration`：属性调整为规范的 `text-decoration-line` 实现。
+ 新增 `textDecorationColor` 样式语法，可支持主流原子化框架的语法，如：`decoration-red`、`decoration-green-50`。参考 [ucss text-decoration-color 属性值](https://doc.dcloud.net.cn/uni-app-x/css/text-decoration-color.html)。
+ 新增 `textDecorationStyle` 样式语法，可支持主流原子化框架的语法，如：`decoration-solid`、`decoration-dashed`、`decoration-double`、`decoration-dotted`、`decoration-wavy`。参考 [ucss text-decoration-style 属性值](https://doc.dcloud.net.cn/uni-app-x/css/text-decoration-style.html)。
+ 新增 `textDecorationThickness` 样式语法，可支持主流原子化框架的语法，如：`decoration-1px`、`decoration-1`、`decoration-1p`。参考 [ucss text-decoration-thickness 属性值](https://doc.dcloud.net.cn/uni-app-x/css/text-decoration-thickness.html)。
	> **注意**
	>
	> 该样式跟随 `ucss` 多端兼容性，厚度单位和之前一样都支持 `px`、`em`、`rem` 等单位。同时支持 `p` 和 `a/b` 的分数单位，表示百分比。

+ 新增 `scale` 样式语法，可支持主流原子化框架的语法，如：`scale-100`、`scale-x-75`、`scale-y-50`、`scale-0`。参考 [ucss transform 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transform.html)。
+ 新增 `rotate` 样式语法，可支持主流原子化框架的语法，如：`rotate-45`、`rotate-x-45`、`rotate-y-45`。参考 [ucss transform 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transform.html)。
	> **注意**
	>
	> 角度和之前的数字场景一样同样支持负数。如：`rotate--45`、`rotate-m-45`。
	
+ 新增 `translate` 样式语法，可支持主流原子化框架的语法，如：`translate-x-10`、`translate-y-10`、`translate-x-1/2`。参考 [ucss transform 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transform.html)。
+ 新增 `transformOrigin` 样式语法，可支持主流原子化框架的语法，如：`origin-center`、`origin-top`、`origin-left`、`origin-right`、`origin-bottom`。参考 [ucss transform-origin 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transform-origin.html)。
+ 新增 `transitionProperty` 样式语法，可支持主流原子化框架的语法，如：`transition-opacity`、`transition-transform`。参考 [ucss transition 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transition.html)。
	> **注意**
	>
	> 除了支持主流原子化框架的语法外，还新增了 `orientation` ，用于快速设置 `上下左右` 过渡属性。

+ 新增 `transitionDuration` 样式语法，可支持主流原子化框架的语法，如：`duration-100`、`duration-200`。参考 [ucss transition 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transition.html)。
+ 新增 `transitionTimingFunction` 样式语法，可支持主流原子化框架的语法，如：`ease-in-out`、`ease-in`、`ease-out`、`linear`。参考 [ucss transition 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transition.html)。
+ 新增 `transitionDelay` 样式语法，可支持主流原子化框架的语法，如：`delay-100`、`delay-200`。参考 [ucss transition 属性值](https://doc.dcloud.net.cn/uni-app-x/css/transition.html)。
+ 新增 `whiteSpace` 样式语法，可支持主流原子化框架的语法，如：`whitespace-normal`、`whitespace-nowrap`、`whitespace-pre`、`whitespace-pre-line`、`whitespace-pre-wrap`。同时支持简写语法 `ws-`。参考 [ucss white-space 属性值](https://doc.dcloud.net.cn/uni-app-x/css/white-space.html)。
## 1.0.7（2024-07-26）
+ 重新上传上一个版本发行包，因为上一个版本忘记上传了。

## 1.0.6（2024-07-25）
+ 修复注册配置 `cssSnippetsFile` 无效的问题。
+ 修复 `box-sizing` 生成错误的问题。
+ 优化全局配置和样式文件生成逻辑，新增自动创建目录，`web` 不需要手动创建目录。
+ 增强 `web` 样式导入使用体验，新增自动导入生成的样式文件，不再需要手动导入。
	> **提示**
	>
	> 插件会自动在项目根目录生成 `.autocss` 目录用来管理历史样式导入记录，请不要删除该目录。
+ `orientation`：数字场景新增负数语法，如 `t--1`、`right--1`。
+ `orientation`：新增简化语法 `inset-`，如：`inset-t-1px`。
+ `orientation`：新增方向语法 `x|y`，如：`x-1`、`inset-y-1`、`y-1`。
+ `orientation`：数字单位新增 `a`，如：`inset-x-a`，对应 `left: auto;right: auto`。
+ `flexWrap`：新增简化语法 `flex-`，如：`flex-wrap`。
+ `flexShrinkAndGrow`：新增简化语法 `shrink-`、`grow-`，如：`shrink-0`、`grow-1`。
+ `flexBasis`：新增简化语法 `basis-`，如：`basis-100`。
+ `flexBasis`：数字场景新增 `full` 语法，如：`basis-full`，对应 `flex-basis: 100%`。
+ `columnGap`：新增简化语法 `col-gap-`，如：`col-gap-10`。
+ 新增 `fontFamily` 样式语法，可支持主流原子化框架的语法，如：`font-sans`、`font-serif`、`font-mono`。同时支持 [ucss font-family 属性值](https://doc.dcloud.net.cn/uni-app-x/css/font-family.html)。
+ 新增 `alignContent` 样式语法，可支持主流原子化框架的语法，如：`content-start`、`content-center`、`content-end`、`content-between`、`content-around`、`content-stretch`、`content-normal`。参考 [ucss align-content 属性值](https://doc.dcloud.net.cn/uni-app-x/css/align-content.html)。
+ 新增 `alignSelf` 样式语法，可支持主流原子化框架的语法，如：`self-start`、`self-center`、`self-end`、`self-stretch`、`self-auto`、`self-baseline`。参考 [ucss align-self 属性值](https://doc.dcloud.net.cn/uni-app-x/css/align-self.html)。

## 1.0.5（2024-07-19）
+ 新增快捷方式支持，可以通过对象静态方式和正则动态方式定义，支持单个对象格式和多个数组格式，如下示例：
	
	```javascript
	/**
	 * 快捷方式
	 */
	shortcuts: [
		{"kux-btn":"py-12 px-4 bg-green rounded-60px text-center flex justify-center items-center white"},
		// 动态快捷方式
		[/^kux-btn-(.*)$/, (_, c) => `kux-btn bg-${c}`]
	]
	```
	
+ 修复一些已知问题。
## 1.0.4（2024-07-17）
+ 新增根据当前文件类型自动选择对应的预设配置机制。
	+ 目前仅做了 `nvue` 和 `uvue` 文件的 `flex-1` 自动转换，如果是 `nvue` 和 `uvue` 规则为 `flex: 1`，其他文件规则为 `flex: 1 1 0%`。
	
## 1.0.3（2024-07-15）
+ 修复 `display` 简化语法 `flex` 导致的 `flex-direction` 失效的问题。
+ `flexDirection`：新增简化语法 `flex-col`、`flex-col-reverse`。
+ `flex-1` 默认css调整为 `flex: 1 1 0%`。
+ 新增支持主流原子化框架的提权语法。如：`!text-44`、`text-44!`。
+ `font-size`：新增简化语法 `text-`。如：`text-16`、`text-24`。
+ `font-weight`：新增简化语法 `font-`。如：`font-bold`、`font-500`。
+ `letter-spacing`：新增简化语法 `tracking-`。如：`tracking-1px`、`tracking-2px`。
+ `letter-spacing`：数字场景新增负数语法，如：`tracking--1px`。
+ `line-height`：新增简化语法 `leading-`。如：`leading-16`、`leading-24`。
+ `marginAndPadding`：数字场景新增负数语法，如：`m--1px`、`p--1px`。
+ `text-align`：新增简化语法 `text-`。如：`text-right`、`text-center`。

## 1.0.2（2024-07-14）
+ 为了提升操作效率，优化了语法结构，新增支持主流原子化框架的语法，具体参考如下：
  + `alignItems`：新增简化语法 `items-`，同时继续兼容旧版语法。
  + `justifyContent`：新增简化语法 `justify-`，同时继续兼容旧版语法。
  + `border`：新增方向简化语法，如：`border-t-1px`、`border-b-grey`等等。同时为了更大的灵活性，删除之前强制绑定边框样式和边框颜色，仅边框宽度生效。
  + `borderStyle`：新增方向简化语法，如：`border-t-solid`、`border-b-dashed`等等。
  + `boxSizing`：和主流原子化框架语法保持一致，如：`box-border`、`box-content`。
  + `colors`：边框颜色新增方向简化语法，如：`border-t-green`。
  + `display`：新增简化语法，可省略原来的前缀，如：`flex`、`none`。
  + `opacity`：新增简化语法 `op-`。
  + `overflow`：新增简化语法 `of-`。
  + `position`：新增简化语法，可省略原来的前缀，如：`relative`、`absolute`。
  + 新增 `visibility` 系列语法，如：`hidden`。
  + `z-index`：新增简化语法 `z-`。负数值场景新增简化语法，如：`z--1`。
  + 数值单位场景新增分数语法，如：`w-1/2`，分数格式会自动转换为百分比。
  + 修复单位场景 `p` 自动转换百分比无效的问题。

## 1.0.1 (2024-07-12)
+ 修复注册配置 `cssFile` 无效的问题。
+ 优化类型导出。
  
## 1.0.0（2024-07-11）
+ 初始发布
