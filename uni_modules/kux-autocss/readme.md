# kux-autocss
即时原子化CSS框架，让你省去手写样式的烦恼~。插件基于 `vite HMR` 根据页面class实时生成行内样式。

## 插件特色
+ 即时原子化
+ 支持大多数原子化框架语法规则
+ 深度适配uniapp x编译器
+ 配置自动生成
+ 全局样式自动生成
+ 支持自定义样式生成规则
+ 支持自定义颜色
+ 无预设样式
+ 支持样式自动导入
+ 支持快捷方式
+ ...

> **提示**
>
> 插件支持 `app-uvue` 只是官方发布插件限制，发布 `app-uvue` 时必须有 `uts` 文件存在才能发布，所以 `app-uvue` 选择了不确定。

## 安装说明
插件下载后需要在项目根目录 `vite.config.ts` 或者 `vite.config.js` 注册插件。示例如下：

```ts
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import autocss from './uni_modules/kux-autocss';

export default defineConfig({
	plugins: [
		uni(),
		autocss()
	]
});
```

> **提示**
>
> 因为测试最新编译器【4.23】版本默认 `vite.config` 文件中不识别 `@` ，所以上面引入方式需要使用相对路径。

## uniapp 项目安装说明
`uniapp` 项目由于编译器环境差异，所以引入插件需要手动导入模块。示例如下：

```js
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import autocss from './uni_modules/kux-autocss/dist/index.mjs';

export default defineConfig({
  plugins: [
    uni(),
	autocss()
  ]
})
```

> **提示**
>
> 编译器版本【4.23】及以上版本不需要上面的特殊配置，直接像【安装说明示例】同样的方式引入即可。

## 样式引入
+ uniapp x 项目
`web` 环境需要在 `App.uvue` 单独引入使用。示例代码如下：

```ts
/* #ifdef WEB */
@import url('@/style/auto.css');
/* #endif */
```

`app` 环境不需要单独引入样式即可实时生成样式代码，代码保存样式实时生效哦~

> **提示**
> 
> `v1.0.6` 及以上版本 `web` 支持自动导入样式，上面示例代码可以省略。
> `v1.0.12` 及以上版本样式生成为行内样式，不再需要上面的全局样式导入。插件也不再有生成自动导入样式代码的逻辑。

## 插件配置
插件配置支持 `注册配置` 和 `插件配置`。其中 `注册配置` 完全继承 `插件配置`，注册配置即在 `vite.config` 中注册时传的配置内容。具体定义如下：

### 注册配置

```ts
/**
 * 插件初始化的配置内容
 */
interface PluginOptions extends AutocssConfig {
    /**
     * 指明仅在 'build/serve' 环境调用
     * + build 生产环境
     * + serve 开发环境
     */
    apply?: 'build' | 'serve';
    /**
     * 自定义配置文件位置，如: `'../my-auto.config.ts'`
     */
    configFile?: string;
    /**
     * 自定义CSS文件位置，如：`'../my-auto.css'`
     */
    cssFile?: string;
    /**
     * CSS代码提示文件位置，如：`'../my-auto.snippets.css'`
     */
    cssSnippetsFile?: string;
    /**
	 * 是否开启调试模式，开启后将输出详细的日志信息
	 *  `v1.0.12` 及以上版本支持
	 */
	debug?: boolean
	/**
	 * 是否生成全局css文件
	 *  `v1.0.12` 及以上版本支持
	 */
	generateGlobalCss?: boolean
}
```

### 插件配置

```ts
interface DynamicStringObj {
    [key: string]: string;
}
/**
 * 重写规则render函数回调
 */
interface RenderCallback {
    /**
     * 驼峰格式的属性名，如zIndex
     */
    name: string;
    /**
     * css排序
     */
    order: number;
    /**
     * css样式组，如['z-index: 100']
     */
    css: string[];
    /**
     * 组内渲染顺序
     */
    num?: number;
}
/**
 * 重写规则函数定义
 * 函数可接受 自带工具 工具有
 * + textToRgbText 将16进制颜色 或定义的颜色转为rgba语法
 * + getColorsKey 获取所有定义的颜色的key数组
 * + getColors 获取所有定义的颜色的对象
 * + UNIT_ENUM_STR 捕获单位的正则字符串
 * + NONNEGATIVE_NUMBER_REGEX_STR 捕获数字的正则字符串
 * + DIRECTION_MAP 方向定义的 map
 */
type OverrideRuleFunction = (tool: {
    textToRgbText: (value: string) => string;
    getColorsKey: () => string;
    getColors: () => DynamicStringObj;
    UNIT_ENUM_STR: string;
    NONNEGATIVE_NUMBER_REGEX_STR: string;
    DIRECTION_MAP: DynamicStringObj;
}) => {
    regExp: RegExp;
    render: (groups: DynamicStringObj) => RenderCallback;
};
/**
 * 自定义可变单位转换规则
 */
interface VToAny {
    /**
     * 单位，如 px，rpx，rem
     */
    unit?: string;
    /**
     * 跟字体大小或基于参数返回根元素字体大小，如 1px => 1/16rem
     */
    rootValue?: number;
    /**
     * 允许小数单位精度
     */
    unitPrecision: number;
    /**
     * 不会被转换的最小值
     */
    minPixelValue: number;
}
/**
 * autocss配置内容
 */
interface AutocssConfig {
    /**
     * css文件头部文本
     */
    beforeContent?: string;
    /**
     * css文件结束的文本
     */
    afterContent?: string;
    /**
     * class前缀
     */
    prefix?: string;
    /**
     * class前缀分隔符，比如前缀为kux，分隔符为-的话将自动生成类似kux-c-red格式的代码
     */
    prefixSeparator?: string;
    /**
     * 是否自动生成css代码提示文件
     */
    autoUseSnippets?: boolean;
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
    colors?: {
        [key: string]: string;
    };
    /**
     * 源码根目录
     */
    root?: string;
    /**
     * 自动生成css时检索的文件类型，可根据自己的项目自由调整，不过需注意为数组类型。
     */
    extName?: string[];
    /**
     * 默认单位，如填 v 则必须配合 vToAny
     */
    unit?: string;
    /**
     * 自定义规则，可复写默认规则
     */
    overrideRules?: {
        [key: string]: OverrideRuleFunction;
    };
    /**
     * 需要处理的文件列表，支持glob语法，如
     * ["src/**.vue", "!src/components/ignore/**"]
     */
    include?: string[];
    /**
     * 不需要处理的文件列表，支持glob语法，如
     * ['src/components/ignore/**']
     */
    exclude?: string[];
    /**
     * 自定义媒体查询
     * 可复写规则，以下为默认配置，如 md@bg-red diy@bg-red
     * sm           : '(min-width: 640px)',
     * md           : '(min-width: 768px)',
     * lg           : '(min-width: 1024px)',
     * xl           : '(min-width: 1280px)'
     */
    mediaQueries?: DynamicStringObj;
    /**
     * 是否为所有css 添加 important
     */
    important?: boolean;
    /**
     * 可变单位 v 的转换方式
     * 例如 w-10 => 10 / 16 => 0.625rem
     */
    vToAny?: VToAny;
	/**
	 * 快捷方式，可以通过对象静态方式和正则动态方式定义，支持单个对象格式和多个数组格式，如下示例：
	 * shortcuts: [
	 *     {"kux-btn":"py-12 px-4 bg-green rounded-60px text-center flex justify-center items-center white"},
	 *     // 动态快捷方式
	 *     [/^kux-btn-(.*)$/, (_, c) => `kux-btn bg-${c}`]
	 * ]
	 */
	shortcuts: Shortcut
	/**
	 * 是否开启调试模式，开启后将输出详细的日志信息
	 *  `v1.0.12` 及以上版本支持
	 */
	debug?: boolean
	/**
	 * 是否生成全局css文件
	 *  `v1.0.12` 及以上版本支持
	 */
	generateGlobalCss?: boolean

}
```

> **说明**
> 
> 配置文件修改时需要重新编译才会生效

## 完整配置内容参考

```js
module.exports = {
	beforeContent   : '', // css文件头部文本
	afterContent    : '', // css文件结束的文本
	prefix          : '', // css前缀
	prefixSeparator : '', // css前缀分隔符，比如css前缀为kui，分隔符为-的话将自动生成类似kui-c-red格式的代码
	autoUseSnippets : false, // 是否自动生成css代码提示文件
	cssSnippetsFile : 'auto.snippets.css', // css代码提示文件位置
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
	extName         : ['vue', 'nvue', 'uvue'], // 可选项，自动生成css时检索的文件类型，可根据自己的项目自由调整，不过需注意为数组类型。
	unit            : 'px', // 可选项，默认单位 px 如填 v 则必须配合 vToAny
	
	/**
	 * 自定义规则，可复写默认规则
	 */
	overrideRules   : {},
	
	include         : ["pages/**","components/**"], // 可选项，需要处理的文件列表，支持glob语法，如 ['src/**/*.vue', '!src/components/ignore/**'], 默认规则：['pages/**']
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

	/**	 * 可变单位 v 的转换方式
	 * 例如 w-10 => 10 / 16 => 0.625rem
	 */
	// vToAny          : {
	//     unit: 'rem',
	//     rootValue: 16, // 跟字体大小或基于参数返回根元素字体大小 1px => 1/16rem
	//     unitPrecision: 5, // 允许小数单位精度
	//     minPixelValue: 1 // 不会被转换的最小值
	// }
	/**
	 * 快捷方式
	 */
	shortcuts: {"kux-btn":"py-2 px-4 font-semibold rounded-lg shadow-md"},
	/**
	 * 是否开启调试模式，开启后将输出详细的日志信息
	 *  `v1.0.12` 及以上版本支持
	 */
	debug: true
	/**
	 * 是否生成全局css文件
	 *  `v1.0.12` 及以上版本支持
	 */
	generateGlobalCss: true
}
```

---
## RULE 语法规则
# 生成规则

### 简写约定 
```text
+ m is margin
+ p is padding
+ h is height
+ w is width
```

### 方向约定 trblxy
```text
+ y代表上下tb x代表左右lr组合方向
+ tblr代表上下左右单方向
+ 权重优先级 tblr单项 > xy双向组合 > 四项组合
```

### 伪类约定 
```text
+ 伪类后跟任意属性
hover|link|visited|active|focus|focus-within 等伪类 后接属性 如 hover:c-red active:w-233
```

### 媒体查询约定
```text
内置三种媒体查询 如果需要覆盖或自定义添加 请看进阶使用
  sm : '(min-width: 640px)',
  md : '(min-width: 768px)',
  lg : '(min-width: 1024px)',
  xl : '(min-width: 1280px)'
  如 sm@bg-fff lg@w-2333 xl@m-t-10
  即可在不同屏幕大小中正确使用媒体查询支持全部属性 如需要与伪类配合使用 语法如下 <媒体查询>@<伪类>:<属性>
```

### 数值约定  
```text
+ m-16  16代表正数
+ m-m-16 -m-16代表负数(部分属性支持)
+ m--16 --16代表负数(部分属性支持)
+ 数值全部支持小数 如 m-t-0.222vh w-33.333333p
```

### 单位约定  
```text
+ p为百分比%的缩写。默认不传为px
+ v为可变单位 例如 w-10 => 10 / 16 =>  width: 0.625rem (在配置文件中编写 <big>vToAny</big> 生效)
```
```javascript
const UNIT_ENUM = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'p', 'rpx']
const UNIT_ENUM_STR = UNIT_ENUM.join('|')
```
### 属性约定  
```text
+ 大部分属性符合key-value形式，部分属性会兼容简写，如dispaly-flex / d-flex
+ 部分属性为常用组合属性，如正方形 square-80(width:80px;height:80px) flex-center-center等
```

### 详情如下

* 宽或高 
  
    #### (w|h)-(数值)(单位)?
    ```css
    .w-10p{width:10%}
    .w-375{width:375px}
    ```
    ```javascript
    new RegExp(`^[wh]-(0|[1-9]\\d*)(${UNIT_ENUM_STR})?$`)
    ```
    
* 最大(小)宽(高)

    #### (min|max)-(h|w)-(数值)(单位)?
    ```css
    .max-w-100 {max-width:100px;}
    .min-w-300rem {min-width:300rem;}
    .max-h-100vh {max-height:100vh}
    ```
    ```javascript
    new RegExp(`^(min|max)-[wh]-(0|[1-9]\\d*)(${UNIT_ENUM_STR})?$`)
    ```
    
* 正方形简写

    #### square-(数值)(单位)?
    ```css
    .w-10p{width:10%} 
    .w-375{width:375px}
    .square-80{width:80px;height:80px}
    ```
    ```javascript
    new RegExp(`^square-(0|[1-9]\\d*)(${UNIT_ENUM_STR})?$`)
    ```
    
* 内外间距
  
    #### (m|margin|p|padding)-(方向-)?(m|margin|p|padding)(方向-)(m-|-)?(数值)(单位)?
    ```css
    .m-16 {margin:16px}
	.m--16 {margin: -16px}
    .m-b-32rem{margin-bottom:32rem}
    .m-x-m-22rem {margin-left:-22rem;margin-right:-22rem;}
    .p-x-24{padding-left:24px;padding-right:24px}
    .mx-20{margin-left:20px;margin-right:20px}
    .px-10{padding-left:10px;padding-right:10px}
    ```
    ```javascript
    new RegExp(`^(?<type>m|margin|p|padding)(-|)((?<direction>[trblxy])-)?((?<auto>auto)|(?<isMinus>(m-|-))?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)$`)
    ```
    
* 图层高度
  
    #### (z-index|z)-(m-|-)?(数值)
    ```css
    .z-index-9{z-index:9}
    .z-index-m-9{z-index:-9}
	.z--9{z-index: -9}
    ```
    ```javascript
    /^(z-index|z)-(?<isMinus>(m-|-))?(?<value>0|[1-9]\d*)$/
    ```
    
* flex 系数
  
    #### flex-(数值|参数)
    ```css
    .flex-1{flex:1}
    .flex-none{flex:none}
    .flex-auto{flex:auto}
    ```
    ```javascript
   	/^flex-(?<value>null|auto|none|(0|[1-9]\d*))$/
    ```
    
* flex组合属性
  
    #### flex-(主轴参数)-(交叉轴参数)
    ```css
    .flex-space-between-center {
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    .flex-center-center {
      display:flex;
      justify-content:center;
      align-items:center;
    }
    ```
    ```javascript
    new RegExp(`^flex-(${JUSTIFY_CONTENT_ENUM_STR})-(${ALIGN_ITEMS_ENUM_STR})$`)
    ```
    
* flex 换行
  
    #### (flex-wrap|flex)-(参数)
    ```css
    .flex-wrap-inherit{flex-wrap:inherit;}

    .flex-wrap-initial{flex-wrap:initial;}

    .flex-nowrap{flex-wrap:nowrap;}

    .flex-wrap-reverse{flex-wrap:wrap-reverse;}

    .flex-wrap{flex-wrap:wrap;}
    ```
    ```javascript
    /^(flex-wrap|flex)-(?<value>inherit|initial|nowrap|wrap|wrap-reverse)$/
    ```
    
* flex主轴
  
    #### (justify-content|justify)-(主轴参数)
    ```css
    .justify-content-space-between {justify-content:space-between;}
    .justify-between {justify-content: space-between}
    .justify-space-between {justify-content: space-between}
    ```
    ```javascript
    new RegExp(`^(justify|justify-content)-(?<justify>${JUSTIFY_CONTENT_STR})$`)
    ```
    
* flex交叉轴
  
    #### (align-items|items|align-content|content)-(交叉轴参数)
    ```css
    .align-items-center {align-items:center}
    .items-center {align-items:center}
	.content-start {align-content:flex-start}
    ```
    ```javascript
     new RegExp(`^(align-items|items|align-content|content)(-?<align>${ALIGN_ITEMS_STR})?(-?<content>${ALIGN_CONTENT_STR})$`)
    ```
	
* flex对齐
	
	#### (align-self|self)-(参数)
	```css
	.align-self-center {align-self:center}
	.self-center {align-self:center}
	.align-self-flex-end {align-self:flex-end}
	.self-flex-end {align-self:flex-end}
	.align-self-flex-start {align-self:flex-start}
	.self-flex-start {align-self:flex-start}
	.align-self-baseline {align-self:baseline}
	.self-baseline {align-self:baseline}
	```
	```javascript
	new RegExp(`^(${ALIGN_SELF_NAME_STR})-(?<content>${ALIGN_SELF_STR})$`)
	```
    
* flex轴方向
  
    #### (flex-direction|flex)-(轴方向参数)
    ```css
    .flex-direction-column{ flex-direction:column; }
    .flex-column{ flex-direction:column; }
    ```
    ```javascript
    /^(flex-direction|flex)-(?<value>row|row-reverse|column|col|column-reverse|col-reverse)$/
    ```
    
* 文字水平对齐
  
    #### (text-align|text)-(参数)
    ```css
    .text-align-center {text-align:center}
    .text-center {text-align:center}
    ```
    ```javascript
    new RegExp(`(${TEXT_ALIGN_NAME_STR})-(?<value>${TEXT_ALIGN_STR})`)
    ```
    
* 行高
  
    #### (lh|line-height|leading)-(((数值)(单位)?)|参数)
    ```css
    .lh-14{line-height:14px;}
    .lh-normal{line-height:normal;}
    .line-height-14rem{line-height:14rem;}
    .leading-14{line-height:14px}
    ```
    ```javascript
    new RegExp(`^(lh|line-height|leading)-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)|normal|unset|inherit|initial)$`)    ```
    
* 定位
  
    #### (position|)-(定位参数)
    ```css
    .position-relative{position:relative}
    .relative{position:relative}
    ```
    ```javascript
    /^(position-|)(?<value>static|relative|sticky|unset|absolute|fixed|inherit|initial)$/
    ```
    
* 方向定位
  
    #### (inset-)?(方向[trblxy]top|right|bottom|left)-(m-|-)?-(数值)(单位)?
    ```css
    .l-283{left:283px;}
    .top-0px{top:0;}
    .right-m-672{right:-672px;}
    .inset-x-10{left:10px;right:10px}
    .x-a{left:auto;right:auto}
    ```
    ```javascript
    new RegExp(`^(inset-)?(?<direction>[trblxy]|top|right|bottom|left)-(?<isMinus>m-|-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR}|a)(?<unit>${UNIT_STR})?$`)
    ```
    
* 字体大小
  
    #### (font-size|fs|text)-(数值)(单位)?
    ```css
    .fs-22{font-size:22px}
    .font-size-22rem{font-size:22rem}
    .text-44{font-size:44px}
    ```
    ```javascript
    new RegExp(`^(?<important1>!?)?(font-size|fs|text)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?(?<important2>!?)$`)
    ```
    
* 字体粗细
  
    #### (font-weight|fw|font)-(参数)
    ```css
    .fw-bolder{font-weight:bolder}
    .font-weight-300{font-weight:300}
    .fw-900{font-weight:900}
    .font-bold{font-weight:bold}
    ```
    ```javascript
    /^(font-weight|fw|font)-(?<value>[1-9]00|bold|bolder|inherit|initial|lighter|normal|unset)$/
    ```
    
* 鼠标样式
  
    #### cursor-(参数)
    ```css
    .cursor-pointer{cursor:pointer;}
    ```
    ```javascript
    new RegExp(`^cursor-(${CURSOR_ENUM_STR})$`)
    ```
    
* 文字折叠
  
    #### word-break-(参数)
    ```css
    .word-break-break-all{word-break:break-all}
    ```
    ```javascript
    /^word-break-(normal|break-all|keep-all|break-word|inherit|initial|unset)$/
    ```
    
* display
  
    #### (参数)|(display|d)-(参数)
    ```css
    .display-none{display:none}
    .d-flex{display:flex}
    .flex{display:flex}
    .hidden{display:none}
    ```
    ```javascript
    new RegExp(`^(?<displayType1>${DISPLAY_STR})(?!\\S)|((display|d)-(?<displayType2>${DISPLAY_STR}))
    ```
    
* overflow
  
    #### overflow-(xy)?-(参数)
    ```css
    .overflow-x-hidden{overflow-x:hidden;}
    .overflow-auto{overflow:auto;}
    .of-hidden{overflow-x:hidden}
    ```
    ```javascript
    /^(overflow|of)(-(?<direction>[xy]))?-(?<value>hidden|auto|visible|scroll|inherit|clip)$/
    ```
    
* 颜色相关
  
    #### 自带 white transparent blue black 可进行配置
    ```javascript
    new RegExp(
        `^(?<type>color|c|text|bg|background|border-color|border-c|border)-((?<direction>[trblxy])-)?(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join('|')})(-(?<opacity>1|([1-9]\\d?)))?$`)
    ```
    
      * 字体颜色 
      
        ##### (color|c|text)-?(16进制色[8位,6位,3位]|自定义颜色)(-透明度 8位没有透明度)?
        ```css
        .c-red{color:rgba(255,0,0,1)}
        .color-43ad7f-25{color:rgba(67,173,127,0.25)}
        ```
        
      * 背景色 
      
        ##### (bg|background)-(伪类-)?(16进制色[6位或3位]|自定义颜色)(-透明度)?
        ```css
        .bg-black-35{background:rgba(0,0,0,0.35)}
        .background-active-43ad7f-35:active{background:rgba(67,173,127,0.35)}
        ```
        
      * 边框色 
      
        ##### (border-color|border-c|border)(方向-)?(-(伪类-))?(16进制色[6位或3位]|自定义颜色)(-透明度)?
        ```css
        .border-c-black-35{border-color:rgba(0,0,0,0.35)}
        .border-color-active-43ad7f-35:active{border-color:rgba(67,173,127,0.35)}
        .border-black-35{border-color:rgba(0,0,0,0.35)}
        .border-t-black-35{border-top-color:rgba(0,0,0,0.35)}
        ```
        
* 透明度
  
    ####  /^(opacity|op)-(0-100)$/
  	```css
   .opacity-20{ opacity: 0.2 }
   .op-50{opacity: 0.5}
  	```
      
* 字间距
  
    #### (letter-spacing|tracking)-(数值)(单位)?
    ```css
    .letter-spacing-4{letter-spacing:4px}
    .letter-spacing-4rem{letter-spacing:4rem}
    .tracking-4{letter-spacing:4px}
    ```
    ```javascript
    new RegExp(`^(letter-spacing|tracking)-(?<isMinus>(m-|-))?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?$`)
    ```
    
  <!--* 组合属性 circle
  
    #### circle  只有一个
    ```css
    .circle{border-radius:50%;}
    ```
    ```javascript
    /^circle$/
    ```
    -->    
    
* flex缩放
  
    #### (flex-|)?(shrink|grow)-(数值|参数)
    ```css
    .flex-grow-1{flex-grow:1}
    .flex-shrink-0{flex-shrink:0}
    .flex-shrink-initial{flex-shrink:initial}
    .grow-1{flex-grow:1}
    ```
    ```javascript
    /^flex-(shrink|grow)-((0|[1-9]\d*)|initial|inherit)$/
    ```
   
* flex占用轴空间
  
    #### (flex-basis|basis)-((数值(单位)?)|其他参数)
    ```css
    .flex-basis-20p{flex-basis:20%}
    .flex-basis-20{flex-basis:20px;}
    .flex-basis-auto{flex-basis:auto;}
    .basis-20{flex-basis:20px}
    .basis-full{flex-basis:100%}
    ```
    ```javascript
    new RegExp(`^(flex-basis|basis)-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR}|full)(?<unit>${UNIT_STR})?)|initial|inherit|auto)$`)
    ```
    
* 边框宽度 自带实线 黑色
  
    #### (border|border-width|border-w)-(方向-)?(数值)(单位)?
    ```css
    .border-2{
      border-width: 2px; 
      border-style: solid; 
      border-color: black;
    }
    .border-w-x-2em{
      border-width: 2em; 
      border-style: solid; 
      border-color: black;
    }
    ```
    ```javascript
    new RegExp(`^(border|border-width|border-w)-((?<direction>[trblxy])-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?$`)
    ```
    
* 边框圆角
  
    #### (border-radius|br|rounded)-(方向-)?(数值)(单位)?
    ```css
    .border-radius-4{border-radius:4px}
    .br-20p{border-radius:20%}
    .rounded-t-10{border-top-radius:10px}
    ```
    ```javascript
    new RegExp(`^(border-radius|br|rounded)-((?<direction>[trbl]|tl|tr|bl|br)-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?$`)
    ```
    
* 边框类型
  
    #### (border-style|border)-(方向-)?(参数)
    ```css
    .border-style-dashed{border-style:dashed}
    .border-dashed{border-style:dashed}
    .border-t-dashed{border-top-style:dashed}
    ```
    ```javascript
    /^(border-style|border)-((?<direction>[trblxy])-)?(?<value>none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)$/
    ```
    
* 图片填充
  
	#### object-fit-(参数)
  	```css
  	.object-fit-fill{object-fit:fill}
  	```
  	```javascript
  	/^object-fit-(fill|contain|cover|none|scale-down|inherit|initial|revert|unset)$/
  	```
	  
  <!--* text-align-last
  
    #### text-align-last-(参数)
    ```css
    .text-align-last-right{text-align-last:right;}
    ```
    ```javascript
    /^(text-align-last|text-last)-(auto|left|right|center|justify|start|end|initial|inherit)$/
    ```
-->  

* 文本修饰
 
    #### (text-decoration|text)-(参数)
    ```css
    .text-decoration-underline{text-decoration:underline}
    .text-overline{text-decoration:overline}
    ```
    ```javascript
    /^(text-decoration|text)-(none|underline|overline|line-through|blink|inherit)$/
    ```
    
* 鼠标选择
  
    #### (user-)?select-(参数)
    ```css
    .user-select-none{user-select:none}
    .select-none{user-select:none}
    .select-auto{user-select:auto}
    ```
    ```javascript
    /^(user-)?select-(none|auto|text|all|contain|element)$/
    ```
    
* 文字超出换行
  
    #### (text-ellipsis|ellipsis)-num
    ```css
    .ellipsis {
      display:inline-block;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap
      }
    .ellipsis-2 {
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
    }
    .text-ellipsis-2 {
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
    }
    ```
    ```javascript
    regExp: /^(text-)?ellipsis-[1-9]\d*$/
    ```
    
* 文本溢出

	#### ((text|to)-(ellipsis|clip))|truncate
	```css
	.text-ellipsis{ text-overflow: ellipsis; }
	.text-clip{ text-overflow: clip; }
	.truncate{ overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	```
	```js
	new RegExp(`^!?(((text|to)-(?<value>${TEXT_OVERFLOW_VALUE_STR}))|(?<value2>truncate))!?$`)
	```
    
* 间距

    #### gap-((数值(单位)?)|其他参数)
    ```css
    .gap-20 {
      column-gap:20px;
      row-gap:20px;
    }
    .gap-20p {
      column-gap:20%;
      row-gap:20%;
    }
    .gap-unset {
      column-gap:unset;
      row-gap:unset;
    }
    ```
    ```javascript
    regExp: /^gap-((<数字><单位>?)|inherit|initial|unset)*$/
    ```
    
* 列间距

    #### ((column|c|col)-gap)-((数值(单位)?)|其他参数)
    ```css
    .column-gap-20 {
      column-gap:20px;
    }
    .column-gap-20p {
      column-gap:20%;
    }
    .column-gap-unset {
      column-gap:unset;
    }
    .col-gap-20 {
    	column-gap:20px;
    }
    ```
    ```javascript
    new RegExp(`^c(olumn|ol)?-gap-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)|(?<value>${GAP_STR}))$`)
    ```
    
* 行间距

    #### row-gap-((数值(单位)?)|其他参数)
    ```css
    .row-gap-20 {
      row-gap:20px;
    }
    .row-gap-20p {
      row-gap:20%;
    }
    .row-gap-unset {
      row-gap:unset;
    }
    ```
    ```javascript
    regExp: /^row-gap-((<数字><单位>?)|inherit|initial|unset)*$/
    ```
    
* 可视化
 
    #### (visibility|)-(值)
    ```css
    .visibility-hidden {
      visibility: hidden;
    }
    .visibility-visible {
      visibility: visible;
    }
    .hidden {
    	visibility: hidden;
    }
    ```
	
+ 背景相关
   
	+ 裁剪

   #### (bg-clip)-(值)
   ```css
   .bg-clip-border {
	   background-clip: border-box;
   }
   .bg-clip-padding {
		background-clip: padding-box;
   }
   .bg-clip-content {
	    background-clip: content-box;
   }
   ```
   ```js
   new RegExp(`^${BACKGROUND_CLIP_NAME_STR}-(?<value>${BACKGROUND_CLIP_STR})$`)
   ```
   
   + 背景渐变
   	
   	#### (bg-(gradient|lg))-(方向)-(开始颜色值)(-透明度)-(结束颜色值)(-透明度)
   	```css
   	.bg-lg-br-red-green{ background-image: linear-gradient(to bottom right, rgba(245,63,63,1), rgba(0,188,121,1)); }
	.bg-lg-tl-yellow-50-red-80{ background-image: linear-gradient(to top left, rgba(250,220,25,0.5), rgba(245,63,63,0.8)); }
   	```
   	```js
   	new RegExp(`^bg-(gradient|lg)-(?<direction>[trbl]{1,2})-(?<shape>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join('|')})(-(?<shapeOpacity>1|([1-9]\\d?)))?-(?<stops>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join('|')})(-(?<stopsOpacity>1|([1-9]\\d?)))?$`)
   	```

+ 阴影

#### (shadow-|shadow)(值)
```css
.shadow{ box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
.shadow-lg{ box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
.shadow-md{ box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
.shadow-xl{ box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
.shadow-2xl{ box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
.shadow-none{ box-shadow: 0 0 #0000; }
.shadow-inner{ box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05); }
.shadow-sm{ box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
```
```js
new RegExp(`^(shadow-|shadow)(?<value>${BOX_SHADOW_SIZE_STR})$`)
```

+ flex-flow

#### (flex-flow|flow|ff)-(方向)-(换行)
```css
.ff-row-wrap{ flex-flow: row wrap; }
.ff-col-wrap{ flex-flow: col wrap; }
.ff-col-nowrap{ flex-flow: col nowrap; }
.ff-row-wrap-reverse{ flex-flow: row wrap-reverse; }
```
```js
new RegExp(`^${FLEX_FLOW_NAME_STR}-(?<direction>${FLEX_FLOW_DIRECTION_STR})-(?<wrap>${FLEX_FLOW_WRAP_STR})$`)
```

+ 字体样式

#### (font-|)(italic|not-italic)
```css
.font-italic{ font-style: italic; }
.italic{ font-style: italic; }
.font-not-italic{ font-style: normal; }
.not-italic{ font-style: normal; }
```
```js
new RegExp(`^(font-|)?(?<value>italic|not-italic)$`)
```

+ 文本最大行数

#### lines-(数字)
```css
.lines-1{ lines: 1 }
```
```js
new RegExp(`^lines-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})$`)
```

+ 鼠标事件

#### (pointer-events|pe)-(auto|none)
```css
.pointer-events-auto{ pointer-events: auto; }
.pe-auto{ pointer-events: auto; }
.pointer-events-none{ pointer-events: none; }
.pe-none{ pointer-events: none; }
```
```js
new RegExp(`^(pointer-events|pe)-(?<value>auto|none)$`)
```

+ 文本装饰线颜色

#### decoration-(颜色值)(-透明度)
```css
.decoration-green{ text-decoration-color: rgba(0,188,121,1); }
.decoration-green-50{ text-decoration-color: rgba(0,188,121,0.5); }
```
```js
new RegExp(`^decoration-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join('|')})(-(?<opacity>1|([1-9]\\d?)))?$`)
```

+ 文本装饰线样式

#### decoration-(solid|double|dotted|dashed|wavy)
```css
.decoration-dashed{ text-decoration-style: dashed; }
.decoration-solid{ text-decoration-style: solid; }
.decoration-double{ text-decoration-style: double; }
.decoration-dotted{ text-decoration-style: dotted; }
.decoration-wavy{ text-decoration-style: wavy; }
```
```js
new RegExp(`^decoration-(?<value>${TEXT_DECORATION_STYLE_VALUE_STR})$`)
```

+ 文本装饰线厚度

#### decoration-(厚度值)(单位)
```css
.decoration-1px{ text-decoration-thickness: 1px; }
.decoration-auto{ text-decoration-thickness: auto; }
```
```js
new RegExp(`^decoration-(?<num>(auto|from-font|${NONNEGATIVE_NUMBER_REGEX_STR}))(?<unit>${UNIT_STR})?$`)
```

+ 缩放

#### scale(-[xy])(角度)
```css
.scale-x-50{ transform: scaleX(0.5); }
.scale-50{ transform: scale(0.5); }
.scale-y-50{ transform: scaleY(0.5); }
```
```js
new RegExp(`^scale(-?(?<direction>[xy])?-)(?<angle>(\\d+))$`)
```

+ 旋转

#### rotate(-[xyz])(角度)
```css
.rotate-50{ transform: rotate(50deg); }
.rotate-x-50{ transform: rotateX(50deg); }
.rotate-y-50{ transform: rotateY(50deg); }
.rotate-z-50{ transform: rotateZ(50deg); }
.rotate-y--50{ transform: rotateY(-50deg); }
```
```js
new RegExp(`rotate(-?(?<direction>[xyz])?-)(?<isMinus>m-|-)?(?<deg>(\\d+))$`)
```

+ 平移

#### translate(-[xy])(距离)
```css
.translate-x-1{ transform: translateX(1px); }
.translate-y-1\/2{ transform: translateY(50.0000000000%); }
```
```js
new RegExp(`^translate(-?(?<direction>[xy])?-)(?<isMinus>m-|-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR}|full)(?<unit>${UNIT_STR})?$`)
```

+ 变形原点

#### origin-(方向)
```css
.origin-t{ transform-origin: top; }
.origin-cc{ transform-origin: center center; }
```
```js
new RegExp(`^origin-(?<direction>(${Array.from(TRANSFORM_ORIGIN_DIRECTION_MAP.keys()).join('|')}))$`)
```

+ 过渡属性

#### transition(-)(属性名)
```css
.transition{ transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transition-none{ transition-property: none; }
.transition-all{ transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transition-colors{ transition-property: color, background-color, border-color, text-decoration-color, border-top-color, border-bottom-color, border-left-color, border-right-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transition-orientation{ transition-property: top, bottom, left, right; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
```
```js
new RegExp(`^transition(-?(?<property>(${TRANSITION_PROPERTY_VALUE_STR})?))$`)
```

+ 过渡时间

#### duration-(时间)
```css
.duration-0{ transition-duration: 0ms; }
.duration-100{ transition-duration: 100ms; }
```
```js
new RegExp(`^duration-(?<num>\\d+)$`)
```

+ 过渡曲线

#### (transition-ease|ease)(-曲线函数)
```css
.ease-in{ transition-timing-function: ease-in; }
.ease-out{ transition-timing-function: ease-out; }
.ease{ transition-timing-function: ease; }
.ease-in-out{ transition-timing-function: ease-in-out; }
.ease-linear{ transition-timing-function: linear; }
```
```js
new RegExp(`^(ease|transition-ease)(-?(?<value>${TRANSITION_TIMING_FUNCTION_VALUE_STR})?)$`)
```

+ 过渡延迟

#### (transition-delay|delay)-(延迟时间)
```css
.delay-0{ transition-delay: 0ms; }
.delay-100{ transition-delay: 100ms; }
```
```js
new RegExp(`^(transition-delay|delay)-(?<num>\\d+)$`)
```

+ 空白字符

#### (whitespace|ws)-(值)
```css
.ws-normal{ white-space: normal; }
.ws-nowrap{ white-space: nowrap; }
.ws-pre{ white-space: pre; }
.ws-pre-wrap{ white-space: pre-wrap; }
.ws-pre-line{ white-space: pre-line; }
.ws-break-spaces{ white-space: break-spaces; }
```
```js
new RegExp(`^(whitespace|ws)-(?<value>${WHITE_SPACE_VALUE_STR})$`)
```
    
### 进阶使用
+ 关于 overrideRules 可覆盖属性如下
  + alignItems
  + border
  + borderRadius
  + borderStyle
  + boxSizing
  + circle
  + color
  + columnGap
  + cursor
  + display
  + flexBasis
  + flexDirection
  + flexJustAli
  + flexNum
  + flexShrinkAndGrow
  + flexWrap
  + fontSize
  + fontWeight
  + gap
  + height
  + index
  + justifyContent
  + letterSpacing
  + lineHeight
  + marginAndPadding
  + maxHeight
  + maxWidth
  + minHeight
  + minWidth
  + objectFit
  + opacity
  + orientation
  + overflow
  + position
  + rowGap
  + square
  + textAlign
  + textAlignLast
  + textDecoration
  + textEllipsis
  + userSelect
  + verticalAlign
  + visibility
  + width
  + wordBreak
  + zIndex

  ### 说明如下
  ```javascript
  overrideRules: {
        /**
         * 如需覆盖自带属性 则属性名 相同
         * 此处值 为 object 或者 函数 函数必须返回相同格式的对象
         * 函数可接受 自带工具 工具有
         * textToRgbText 将16进制颜色 或定义的颜色转为rgba语法
         * getColorsKey 获取所有定义的颜色的key数组
         * getColors 获取所有定义的颜色的对象
         * UNIT_ENUM_STR 捕获单位的正则字符串
         * NONNEGATIVE_NUMBER_REGEX_STR 捕获数字的正则字符串
         * DIRECTION_MAP 方向定义的 map
         */
       zIndex: ({ textToRgbText, getColorsKey, getColors, UNIT_ENUM_STR, NONNEGATIVE_NUMBER_REGEX_STR, DIRECTION_MAP }) => { 
         return {
           /**
            * 此处必须存在 regExp 为正则表达式 或 函数 函数必须返回正则表达式
            * 此处必须存在 render 函数 
            * 入参 为 字符串mathch 正则表达式的结果 (只有匹配上的才会调用render)
            * render 函数必须返回 name:String order:Number css:Array<String>
            * 将会使用 render 返回的结果 生成css
            * 如果导出 num 则会按照num 组内渲染排序 与其他css 排序无关
            * 如果捕获组有 unit 会自动处理单位问题
            */
           regExp: /^zindex-(?<isMinus>m-)?(?<num>0|[1-9]\d*)$/,
           render ({ groups }) {
             let { isMinus, num } = groups
             if (isMinus) {
               num = 0 - num
             }
             return { name: 'zIndex', order: 190, num, css: [`z-index: ${num}] }
           }
         }
       }

    },
    mediaQueries: {
      // 前面为前缀 后面为媒体属性 
      // 属性相同则覆盖自带属性
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)'
    }

  ```
