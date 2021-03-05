import './index.css';
import Patience from '../components/Patience/Patience';

// Музыкальное сопровождение
const patienceBlockClick = new Audio('../vendor/panelSheildOn.wav');
const patienceBlockError = new Audio('../vendor/panelSheildOff.wav');
const taskComplete = new Audio('../vendor/taskComplete.wav');

// Объявил главный блок, куда будут вставляться все компоненты
const mainBlock = document.querySelector('.content');

// Первый блок(таблица) 2х2, расстоянием между клетками 5пикс, паддингом основного блока 5vw
const patienceBlock = new Patience(2,5,5);

// Создание блока(таблицы) и вставка его в главный блок
patienceBlock.createBlock();
mainBlock.insertAdjacentElement('afterbegin', patienceBlock.mainBlock);

// Создание в блоке(таблице) случайного массива элементов и вставка их
patienceBlock.createRandomArr();
patienceBlock.createCellsArr();
for (let el of patienceBlock.cellsArr) {
  patienceBlock.block.insertAdjacentElement('afterbegin', el);
}

//
//
// Слушатели событий
//
//

mainBlock.querySelector('.patience__table').addEventListener('click', (event) => {
  if (event.target.classList.contains('patience__cell')) {
    if (event.target.textContent == patienceBlock.counter) {
      event.target.classList.add('patience__cell_active');
      patienceBlock.increaseCounter();

      if (patienceBlock.counter == Math.pow(patienceBlock.CELLS_IN_ROW, 2) + 1) {
        patienceBlock.increaseCellsInRow();
        patienceBlock.refreshState();
        patienceBlock.increaseProgress();
        taskComplete.play();
      } else {
        patienceBlockClick.play();
      }

      // Перерисовка
      patienceBlock.cleanCells();
      patienceBlock.createRandomArr();
      patienceBlock.createCellsArr();
      patienceBlock.preservingThePast();
      for (let el of patienceBlock.cellsArr) {
        patienceBlock.block.insertAdjacentElement('afterbegin', el);
      }
    } else {
      patienceBlock.resetCounter();
      patienceBlock.cleanCells();
      patienceBlock.createRandomArr();
      patienceBlock.createCellsArr();
      for (let el of patienceBlock.cellsArr) {
        patienceBlock.block.insertAdjacentElement('afterbegin', el);
      }
      patienceBlockError.play();
    }
  }
});