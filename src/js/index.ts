let inputfield: HTMLInputElement = <HTMLInputElement>document.getElementById("inputfield");
let choice: HTMLSelectElement = <HTMLSelectElement>document.getElementById("selection");
let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
let colorelement: HTMLDivElement = <HTMLDivElement>document.getElementById("colorcontent");
let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
button.addEventListener("click", ToLowerAndUpperCase)

function ToLowerAndUpperCase(): void {
    colorelement.innerHTML = "";
    let selection: string = choice.value;
    let UserInput: string = inputfield.value;
    if (selection === "UPPERCASE")
        element.innerHTML = String(UserInput).toUpperCase();

    if (selection === "lowercase")
        element.innerHTML = String(UserInput).toLowerCase();

    if (selection === "Color")
        ToColor();
};
function ToColor(): void {
    element.innerHTML = "";
    let UserInput: string = inputfield.value;
    colorelement.innerHTML = String(UserInput);
};






















