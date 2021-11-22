"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.get("/", (req, res) => {
    res.json({ message: "hello there" });
});
const dbUrl = process.env.DATABASE;
mongoose_1.default
    .connect(dbUrl)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    throw err;
});
