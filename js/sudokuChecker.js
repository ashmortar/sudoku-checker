export class Puzzle {
  constructor(r1c1, r1c2, r1c3, r1c4, r1c5, r1c6, r1c7, r1c8, r1c9, r2c1, r2c2, r2c3, r2c4, r2c5, r2c6, r2c7, r2c8, r2c9, r3c1, r3c2, r3c3, r3c4, r3c5, r3c6, r3c7, r3c8, r3c9, r4c1, r4c2, r4c3, r4c4, r4c5, r4c6, r4c7, r4c8, r4c9, r5c1, r5c2, r5c3, r5c4, r5c5, r5c6, r5c7, r5c8, r5c9, r6c1, r6c2, r6c3, r6c4, r6c5, r6c6, r6c7, r6c8, r6c9, r7c1, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7, r7c8, r7c9, r8c1, r8c2, r8c3, r8c4, r8c5, r8c6, r8c7, r8c8, r8c9, r9c1, r9c2, r9c3, r9c4, r9c5, r9c6, r9c7, r9c8, r9c9) {
    //rows
    this.row1 = [r1c1, r1c2, r1c3, r1c4, r1c5, r1c6, r1c7, r1c8, r1c9];
    this.row2 = [r2c1, r2c2, r2c3, r2c4, r2c5, r2c6, r2c7, r2c8, r2c9];
    this.row3 = [r3c1, r3c2, r3c3, r3c4, r3c5, r3c6, r3c7, r3c8, r3c9];
    this.row4 = [r4c1, r4c2, r4c3, r4c4, r4c5, r4c6, r4c7, r4c8, r4c9];
    this.row5 = [r5c1, r5c2, r5c3, r5c4, r5c5, r5c6, r5c7, r5c8, r5c9];
    this.row6 = [r6c1, r6c2, r6c3, r6c4, r6c5, r6c6, r6c7, r6c8, r6c9];
    this.row7 = [r7c1, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7, r7c8, r7c9];
    this.row8 = [r8c1, r8c2, r8c3, r8c4, r8c5, r8c6, r8c7, r8c8, r8c9];
    this.row9 = [r9c1, r9c2, r9c3, r9c4, r9c5, r9c6, r9c7, r9c8, r9c9];
    //columns
    this.col1 = [r1c1, r2c1, r3c1, r4c1, r5c1, r6c1, r7c1, r8c1, r9c1];
    this.col2 = [r1c2, r2c2, r3c2, r4c2, r5c2, r6c2, r7c2, r8c2, r9c2];
    this.col3 = [r1c3, r2c3, r3c3, r4c3, r5c3, r6c3, r7c3, r8c3, r9c3];
    this.col4 = [r1c4, r2c4, r3c4, r4c4, r5c4, r6c4, r7c4, r8c4, r9c4];
    this.col5 = [r1c5, r2c5, r3c5, r4c5, r5c5, r6c5, r7c5, r8c5, r9c5];
    this.col6 = [r1c6, r2c6, r3c6, r4c6, r5c6, r6c6, r7c6, r8c6, r9c6];
    this.col7 = [r1c7, r2c7, r3c7, r4c7, r5c7, r6c7, r7c7, r8c7, r9c7];
    this.col8 = [r1c8, r2c8, r3c8, r4c8, r5c8, r6c8, r7c8, r8c8, r9c8];
    this.col9 = [r1c9, r2c9, r3c9, r4c9, r5c9, r6c9, r7c9, r8c9, r9c9];
  }

  checkPuzzle() {
    let arraysToCheck = [this.row1, this.row2, this.row3, this.row4, this.row5, this.row6, this.row7, this.row8, this.row9, this.col1, this.col2, this.col3, this.col4, this.col5, this.col6, this.col7, this.col8, this.col9];
    let correct = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let results = [];
    for (i = 0; i < arraysToCheck.length; i++) {
      arraysToCheck[i].sort();
      if (arraysToCheck[i] === correct) {
        results.push("pass");
      } else {
        results.push("fail")
      }
    }
    console.log(results);
  }

}