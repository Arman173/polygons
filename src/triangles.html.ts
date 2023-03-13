import { Canvas } from "./lib/canvas.js";
import { Vector2 } from "./lib/polygons.js";

const panel: Canvas = new Canvas("panel");
let mode: string = "none";

function Mode(e: Event) {
    const btn: any = e.composedPath().find((ele: any) => ele.className === "btn-icon")
    if (!btn) return;

    const btns = document.querySelectorAll(".btn-icon").forEach(button => {
        if (button.id === btn.id)
            button.classList.add("selected")
        else
            button.classList.remove("selected");
    });
    mode = btn.id;
    console.log(mode);
}

function Select(pos: Vector2) {
    console.log("selecting", pos);
}
function Add(pos: Vector2) {
    console.log("adding", pos);
}
function Edit(pos: Vector2) {
    console.log("editing", pos);
}
function Area(pos: Vector2) {
    console.log("calculating area", pos);
}
function Angle(pos: Vector2) {
    console.log("checking angle", pos);
}
function DotInside(pos: Vector2) {
    console.log("checking dot", pos);
}
function Delete(pos: Vector2) {
    console.log("deleting", pos);
}

const ClickAction: any = {
    "select": Select,
    "add": Add
}

function OnCanvasClick(e: PointerEvent) {
    const pos: Vector2 = {x: e.offsetX, y: e.offsetY};
    if (ClickAction[mode]) ClickAction[mode](pos);
}

document.body.onload = () => {
    panel.init();
    panel.drawGrid(20);
    const buttons = document.getElementById("buttons");

    buttons!.addEventListener("click", Mode);
    panel.canvas.addEventListener("click", OnCanvasClick)
}