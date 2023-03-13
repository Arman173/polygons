export class Canvas {
    _id: string;
    _status: boolean = false
    canvas: any = null;
    context: CanvasRenderingContext2D | null = null;
    constructor(id: string) {
        this._id = id;
    }

    init() {
        if (this._status && this.canvas) {
            console.log("canvas:",this._id,"already initalizate!");
            return;
        }
        this.canvas = document.getElementById(this._id);
        this.context = this.canvas.getContext("2d");
        if (!this.context) {
            console.log("error initializating canvas :(");
            return;
        }
        console.log("canvas:", this._id, "Initialized!");
    }

    // unit es la unidad de referencia para hacer la cuadricula
    // es decir el tamaño de cada cuadro de la cuadricula
    drawGrid(unit: number) {
        if (!this._status && !this.context) {
            console.log("canvas not initalize");
            return;
        }
        this.context!.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const rows = this.canvas.height / unit;
        const columns = this.canvas.width / unit;
        this.context!.lineWidth = 0.2;
        this.context!.beginPath();
        for (let i = 1; i <= rows; i++) {
            this.context!.moveTo(0, unit*i);
            this.context!.lineTo(this.canvas.width, unit*i);
        }
        for (let j = 1; j <= columns; j++) {
            this.context!.moveTo(unit*j, 0);
            this.context!.lineTo(unit*j, this.canvas.height);
        }
        this.context!.closePath();
        this.context!.stroke();
    }

    // dibujar un punto

    // dibujar un triangulo dado un arreglo de tres vertices
}