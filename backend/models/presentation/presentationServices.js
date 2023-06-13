"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePresentationByName = exports.getPresentationByName = exports.getAllPresentations = exports.createPresentation = void 0;
const Presentation_1 = __importDefault(require("./Presentation"));
const createPresentation = (name, textContent) => __awaiter(void 0, void 0, void 0, function* () {
    const presentation = new Presentation_1.default({
        name,
        textContent,
    });
    return yield presentation.save();
});
exports.createPresentation = createPresentation;
const getAllPresentations = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Presentation_1.default.find();
});
exports.getAllPresentations = getAllPresentations;
const getPresentationByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Presentation_1.default.findOne({ name: name });
});
exports.getPresentationByName = getPresentationByName;
const deletePresentationByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Presentation_1.default.findOneAndDelete({ name: name });
});
exports.deletePresentationByName = deletePresentationByName;
