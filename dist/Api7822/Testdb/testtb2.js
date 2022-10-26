"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa78_base78_1 = require("@www778878net/koa78-base78");
/**
 * 参数表 （测试用）
 * */
class testtb2 extends koa78_base78_1.Base78 {
    constructor(ctx) {
        super(ctx);
        //this.uidcid = "uid";//默认是cid
        this.tbname = "testtb2";
        this.colsImp = [
            //类别   项目   设置值
            "kind", "item", "data",
            "d2", "d3", "d4", "d5", "d6"
        ];
        this.cols = this.colsImp.concat(this.colsremark);
    }
}
exports.default = testtb2;
//# sourceMappingURL=testtb2.js.map