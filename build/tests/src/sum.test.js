"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../../src/main"));
test("Some test", () => {
    expect((0, main_1.default)(1, 2)).toBe(3);
});
