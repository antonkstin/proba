(()=>{"use strict";const t=document.querySelector(".content"),e=new class{constructor(t,e,r){this.CELLS_IN_ROW=t,this.GRID_GAP_PIXELS=e,this.PADDING_OF_MAIN_BLOCK_VW=r,this.randomArr=[],this.GRID_GAP_QUANITY=this.CELLS_IN_ROW-1,this.COMMON_GRID_GAP_PX=this.GRID_GAP_QUANITY*this.GRID_GAP_PIXELS,this.PROP_OF_GRID=`repeat(${this.CELLS_IN_ROW}, calc((${100-2*this.PADDING_OF_MAIN_BLOCK_VW}vw - ${this.COMMON_GRID_GAP_PX}px)/${this.CELLS_IN_ROW})`,this.block,this.cellsArr=[],this.counter=1,this.counterOfTasks=1}createRandomArr(){for(let t=1;t<=Math.pow(this.CELLS_IN_ROW,2);t++)this.randomArr.push(t);this.randomArr.sort((()=>Math.random()-.5))}createBlock(){const t=document.createElement("div");t.classList.add("patience-quiz"),t.style.setProperty("--grid-gap-px",`${this.GRID_GAP_PIXELS}px`),t.style.setProperty("--prop-of-grid",this.PROP_OF_GRID),t.style.setProperty("--cells-in-row",this.CELLS_IN_ROW),this.block=t}createCellsArr(){for(let t of this.randomArr){let e=document.createElement("div");e.classList.add("patience-quiz__cell"),e.textContent=t,this.cellsArr.push(e)}}renderBlockInContainer(t,e){e.insertAdjacentElement("afterbegin",t)}increaseCounter(){this.counter++}resetCounter(){this.counter=1}cleanCells(){this.block.innerHTML="",this.cellsArr=[],this.randomArr=[]}preservingThePast(){for(let t=1;t<this.counter;t++)this.cellsArr.find((e=>e.textContent==t)).classList.add("patience-quiz__cell_active")}increaseCellsInRow(){this.CELLS_IN_ROW++}refreshState(){this.GRID_GAP_QUANITY=this.CELLS_IN_ROW-1,this.COMMON_GRID_GAP_PX=this.GRID_GAP_QUANITY*this.GRID_GAP_PIXELS,this.PROP_OF_GRID=`repeat(${this.CELLS_IN_ROW}, calc((${100-2*this.PADDING_OF_MAIN_BLOCK_VW}vw - ${this.COMMON_GRID_GAP_PX}px)/${this.CELLS_IN_ROW})`,this.counter=1,this.block.style.setProperty("--grid-gap-px",`${this.GRID_GAP_PIXELS}px`),this.block.style.setProperty("--prop-of-grid",this.PROP_OF_GRID),this.block.style.setProperty("--cells-in-row",this.CELLS_IN_ROW)}}(2,5,5);e.createBlock(),e.createRandomArr(),e.createCellsArr(),t.insertAdjacentElement("afterbegin",e.block);for(let t of e.cellsArr)e.block.insertAdjacentElement("afterbegin",t);t.querySelector(".patience-quiz").addEventListener("click",(t=>{if(t.target.classList.contains("patience-quiz__cell")&&t.target.textContent==e.counter){t.target.classList.add("patience-quiz__cell_active"),e.increaseCounter(),e.counter==Math.pow(e.CELLS_IN_ROW,2)+1&&(e.increaseCellsInRow(),e.refreshState()),e.cleanCells(),e.createRandomArr(),e.createCellsArr(),e.preservingThePast();for(let t of e.cellsArr)e.block.insertAdjacentElement("afterbegin",t)}}))})();