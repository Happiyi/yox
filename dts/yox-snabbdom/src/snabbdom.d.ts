import { API, VNode } from '../../yox-type/src/type';
import { YoxInterface } from '../../yox-type/src/global';
export declare function patch(api: API, vnode: VNode, oldVnode: VNode): void;
export declare function create(api: API, node: Node, context: YoxInterface, keypath: string): VNode;
export declare function destroy(api: API, vnode: VNode, isRemove?: boolean): void;
//# sourceMappingURL=snabbdom.d.ts.map