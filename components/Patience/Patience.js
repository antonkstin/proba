import './Patience.css';

export default class Patience {
  constructor(cellsInRow, gridGapPX, paddingOfMainBlockVW) {
    this.CELLS_IN_ROW = cellsInRow;
    this.GRID_GAP_PIXELS = gridGapPX;
    this.PADDING_OF_MAIN_BLOCK_VW = paddingOfMainBlockVW;

    this.PROGRESS_BAR_WIDTH = '0%';

    this.randomArr = [];

    this.GRID_GAP_QUANITY = this.CELLS_IN_ROW-1;
    this.COMMON_GRID_GAP_PX = this.GRID_GAP_QUANITY * this.GRID_GAP_PIXELS;
    this.PROP_OF_GRID = `repeat(${this.CELLS_IN_ROW}, calc((${100 - this.PADDING_OF_MAIN_BLOCK_VW*2}vw - ${this.COMMON_GRID_GAP_PX}px)/${this.CELLS_IN_ROW})`;

    this.mainBlock;
    this.block;
    this.progressBarInner;
    this.cellsArr = [];
    this.counter = 1;
    this.counterOfTasks = 1;
  }

  createRandomArr() {
    this.randomArr = [];
    for (let i=1; i<=Math.pow(this.CELLS_IN_ROW, 2); i++) {
      this.randomArr.push(i);
    }
    this.randomArr.sort(() => { return (Math.random() - 0.5) });
  }

  createBlock() {
    const patienceContainer = document.createElement('div');
    patienceContainer.classList.add('patience');


    const patienceQuiz = document.createElement('div');
    patienceQuiz.classList.add('patience__table');
    patienceQuiz.style.setProperty('--grid-gap-px', `${this.GRID_GAP_PIXELS}px`);
    patienceQuiz.style.setProperty('--prop-of-grid', this.PROP_OF_GRID);
    patienceQuiz.style.setProperty('--cells-in-row', this.CELLS_IN_ROW);


    const patienceProgressBar = document.createElement('div');
    patienceProgressBar.classList.add('patience__progress-bar');

    const patienceProgressBarInner = document.createElement('div');
    patienceProgressBarInner.classList.add('patience__progress-bar-inner');

    patienceProgressBar.appendChild(patienceProgressBarInner);
    patienceProgressBarInner.style.setProperty('--progress-bar-width', this.PROGRESS_BAR_WIDTH);


    patienceContainer.appendChild(patienceQuiz);
    patienceContainer.appendChild(patienceProgressBar);

    this.block = patienceQuiz;
    this.mainBlock = patienceContainer;
    this.progressBarInner = patienceProgressBarInner;
  }

  createCellsArr() {
    this.cellsArr = [];
    for (let el of this.randomArr) {
      let cell = document.createElement('div');
      cell.classList.add('patience__cell');
      cell.textContent = el;
      this.cellsArr.push(cell);
    }
  }

  renderBlockInContainer(block, container) {
    container.insertAdjacentElement('afterbegin', block);
  }

  increaseCounter() {
    this.counter++;
  }

  resetCounter() {
    this.counter = 1;
  }

  cleanCells() {
    this.block.innerHTML = '';
  }

  preservingThePast() {
    for (let i=1; i<this.counter; i++) {
      this.cellsArr.find((el) => {return el.textContent == i}).classList.add('patience__cell_active');
    }
  }

  increaseCellsInRow() {
    this.CELLS_IN_ROW++;
  }

  refreshState() {
    this.GRID_GAP_QUANITY = this.CELLS_IN_ROW-1;
    this.COMMON_GRID_GAP_PX = this.GRID_GAP_QUANITY * this.GRID_GAP_PIXELS;
    this.PROP_OF_GRID = `repeat(${this.CELLS_IN_ROW}, calc((${100 - this.PADDING_OF_MAIN_BLOCK_VW*2}vw - ${this.COMMON_GRID_GAP_PX}px)/${this.CELLS_IN_ROW})`;
    this.counter = 1;

    this.block.style.setProperty('--grid-gap-px', `${this.GRID_GAP_PIXELS}px`);
    this.block.style.setProperty('--prop-of-grid', this.PROP_OF_GRID);
    this.block.style.setProperty('--cells-in-row', this.CELLS_IN_ROW);
  }

  increaseProgress() {
    this.PROGRESS_BAR_WIDTH = parseInt(this.PROGRESS_BAR_WIDTH) + 25 + '%';
    this.progressBarInner.style.setProperty('--progress-bar-width', this.PROGRESS_BAR_WIDTH);
  }
}

// сброс при нажатии не на ту клавишу чтобы исключить спам