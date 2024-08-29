type StaticShortcut = {
    [className: string]: string;
};
type DynamicShortcut = [RegExp, (match: string, p: string) => string] | StaticShortcut;
type SingleShortcut = StaticShortcut | DynamicShortcut;
type Shortcut = StaticShortcut | SingleShortcut[];
type DynamicStringObj = {
    [key: string]: string;
};
interface Colors {
    [key: string]: string | DynamicStringObj;
}
interface Theme {
    /**
     * 颜色相关配置
     */
    colors?: Colors;
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
    shortcuts?: Shortcut;
    /**
     * 自定义主题，可复写默认主题
     */
    theme?: Theme;
    /**
     * 是否开启调试模式，开启后将输出详细的日志信息
     * `v1.0.12` 及以上版本支持
     */
    debug?: boolean;
    /**
     * 是否生成全局css文件
     * `v1.0.12` 及以上版本支持
     */
    generateGlobalCss?: boolean;
}
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
}

declare function Autocss(options?: PluginOptions): any;

export { Autocss as default };
