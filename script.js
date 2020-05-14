let gridSize = 20;

function calculateBlockSize(size) {
     return (920 - (size * 2)) / size;
}

function createGrid(size) {
    gridContainer = document.getElementById("grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    
    //Calculate block size while maintaining max width
    blockWidth = calculateBlockSize(size) + "px";
    blockHeight = calculateBlockSize(size) + "px";

    //Create each block div
    for(i = 0; i < (size * size); i++) {
        blockDiv = document.createElement("div");
        blockDiv.classList.add("grid-item");
        blockDiv.style.width = blockWidth;
        blockDiv.style.height = blockHeight;
        gridContainer.appendChild(blockDiv);
    }
}

function changeColor() {
    this.style.backgroundColor = "red";
}

createGrid(gridSize);

const gridBlocks = document.querySelectorAll(".grid-item");

gridBlocks.forEach(block => block.addEventListener("mouseover", changeColor));
