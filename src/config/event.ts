
/**
 * tap 事件
 *
 * 非常有用的抽象事件，比如 pc 端是 click 事件，移动端是 touchend 事件
 *
 * 这样只需 on-tap="handler" 就可以完美兼容各端
 *
 * 框架未实现此事件，通过 Yox.dom.specialEvents 提供给外部扩展
 *
 */
export const TAP = 'tap'

/**
 * 点击事件
 */
export const CLICK = 'click'

/**
 * 输入事件
 */
export const INPUT = 'input'

/**
 * 表单控件的修改事件
 */
export const CHANGE = 'change'

/**
 * IE 模拟输入事件的特殊事件
 */
export const PROPERTY_CHANGE = 'propertychange'
