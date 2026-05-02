import { LogicalExpression } from "../function/function";
import { Action } from "./action";
import { CompositeAction } from "./sequencer";

export class IfAction extends CompositeAction {
    conditions : LogicalExpression[] = [];

    *exec() : Generator<any> {        
    }
}


export class WhileAction extends Action {
    condition : LogicalExpression;

    *exec() : Generator<any> {        
    }
}


export class ForAction extends Action {
    list : RuntimeFunction;

    *exec() : Generator<any> {        
    }
}
