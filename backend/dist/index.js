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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const presentationServices_1 = require("../models/presentation/presentationServices");
(0, dotenv_1.config)();
mongoose_1.default.connect(process.env.MONGODB_URI || '');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.static(`${__dirname}/build/`));
app.post('/api/presentations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield (0, presentationServices_1.createPresentation)(req.body.name, req.body.textContent);
        res.send(note);
    }
    catch (error) {
        // console.log(error)
    }
}));
app.get('/api/presentations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, presentationServices_1.getAllPresentations)();
    res.send(notes);
}));
app.get('/api/presentations/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield (0, presentationServices_1.getPresentationByName)(req.params.name);
        res.send(note);
    }
    catch (error) {
        // console.log(error)
    }
}));
app.delete('/api/presentations/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield (0, presentationServices_1.deletePresentationByName)(req.params.name);
        res.send(note);
    }
    catch (error) {
        // console.log(error)
    }
}));
const PORT = process.env.PORT || 3001;
// eveyrting that is not API route, is a react page
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
