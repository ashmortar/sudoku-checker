import {Puzzle} from './../js/sudokuChecker.js';


$(document).ready(function() {
  $('#sudoku-form').submit(function(event) {
    event.preventDefault();
    //get values
    //row1
    let r1c1 = parseInt($('#r1c1').val());
    let r1c2 = parseInt($('#r1c2').val());
    let r1c3 = parseInt($('#r1c3').val());
    let r1c4 = parseInt($('#r1c4').val());
    let r1c5 = parseInt($('#r1c5').val());
    let r1c6 = parseInt($('#r1c6').val());
    let r1c7 = parseInt($('#r1c7').val());
    let r1c8 = parseInt($('#r1c8').val());
    let r1c9 = parseInt($('#r1c9').val());

    //row2
    let r2c1 = parseInt($('#r2c1').val());
    let r2c2 = parseInt($('#r2c2').val());
    let r2c3 = parseInt($('#r2c3').val());
    let r2c4 = parseInt($('#r2c4').val());
    let r2c5 = parseInt($('#r2c5').val());
    let r2c6 = parseInt($('#r2c6').val());
    let r2c7 = parseInt($('#r2c7').val());
    let r2c8 = parseInt($('#r2c8').val());
    let r2c9 = parseInt($('#r2c9').val());

    //row3
    let r3c1 = parseInt($('#r3c1').val());
    let r3c2 = parseInt($('#r3c2').val());
    let r3c3 = parseInt($('#r3c3').val());
    let r3c4 = parseInt($('#r3c4').val());
    let r3c5 = parseInt($('#r3c5').val());
    let r3c6 = parseInt($('#r3c6').val());
    let r3c7 = parseInt($('#r3c7').val());
    let r3c8 = parseInt($('#r3c8').val());
    let r3c9 = parseInt($('#r3c9').val());

    //row4
    let r4c1 = parseInt($('#r4c1').val());
    let r4c2 = parseInt($('#r4c2').val());
    let r4c3 = parseInt($('#r4c3').val());
    let r4c4 = parseInt($('#r4c4').val());
    let r4c5 = parseInt($('#r4c5').val());
    let r4c6 = parseInt($('#r4c6').val());
    let r4c7 = parseInt($('#r4c7').val());
    let r4c8 = parseInt($('#r4c8').val());
    let r4c9 = parseInt($('#r4c9').val());

    //row5
    let r5c1 = parseInt($('#r5c1').val());
    let r5c2 = parseInt($('#r5c2').val());
    let r5c3 = parseInt($('#r5c3').val());
    let r5c4 = parseInt($('#r5c4').val());
    let r5c5 = parseInt($('#r5c5').val());
    let r5c6 = parseInt($('#r5c6').val());
    let r5c7 = parseInt($('#r5c7').val());
    let r5c8 = parseInt($('#r5c8').val());
    let r5c9 = parseInt($('#r5c9').val());

    //row6
    let r6c1 = parseInt($('#r6c1').val());
    let r6c2 = parseInt($('#r6c2').val());
    let r6c3 = parseInt($('#r6c3').val());
    let r6c4 = parseInt($('#r6c4').val());
    let r6c5 = parseInt($('#r6c5').val());
    let r6c6 = parseInt($('#r6c6').val());
    let r6c7 = parseInt($('#r6c7').val());
    let r6c8 = parseInt($('#r6c8').val());
    let r6c9 = parseInt($('#r6c9').val());

    //row7
    let r7c1 = parseInt($('#r7c1').val());
    let r7c2 = parseInt($('#r7c2').val());
    let r7c3 = parseInt($('#r7c3').val());
    let r7c4 = parseInt($('#r7c4').val());
    let r7c5 = parseInt($('#r7c5').val());
    let r7c6 = parseInt($('#r7c6').val());
    let r7c7 = parseInt($('#r7c7').val());
    let r7c8 = parseInt($('#r7c8').val());
    let r7c9 = parseInt($('#r7c9').val());

    //row8
    let r8c1 = parseInt($('#r8c1').val());
    let r8c2 = parseInt($('#r8c2').val());
    let r8c3 = parseInt($('#r8c3').val());
    let r8c4 = parseInt($('#r8c4').val());
    let r8c5 = parseInt($('#r8c5').val());
    let r8c6 = parseInt($('#r8c6').val());
    let r8c7 = parseInt($('#r8c7').val());
    let r8c8 = parseInt($('#r8c8').val());
    let r8c9 = parseInt($('#r8c9').val());

    //row9
    let r9c1 = parseInt($('#r9c1').val());
    let r9c2 = parseInt($('#r9c2').val());
    let r9c3 = parseInt($('#r9c3').val());
    let r9c4 = parseInt($('#r9c4').val());
    let r9c5 = parseInt($('#r9c5').val());
    let r9c6 = parseInt($('#r9c6').val());
    let r9c7 = parseInt($('#r9c7').val());
    let r9c8 = parseInt($('#r9c8').val());
    let r9c9 = parseInt($('#r9c9').val());

    let puzzle = new Puzzle(r1c1, r1c2, r1c3, r1c4, r1c5, r1c6, r1c7, r1c8, r1c9, r2c1, r2c2, r2c3, r2c4, r2c5, r2c6, r2c7, r2c8, r2c9, r3c1, r3c2, r3c3, r3c4, r3c5, r3c6, r3c7, r3c8, r3c9, r4c1, r4c2, r4c3, r4c4, r4c5, r4c6, r4c7, r4c8, r4c9, r5c1, r5c2, r5c3, r5c4, r5c5, r5c6, r5c7, r5c8, r5c9, r6c1, r6c2, r6c3, r6c4, r6c5, r6c6, r6c7, r6c8, r6c9, r7c1, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7, r7c8, r7c9, r8c1, r8c2, r8c3, r8c4, r8c5, r8c6, r8c7, r8c8, r8c9, r9c1, r9c2, r9c3, r9c4, r9c5, r9c6, r9c7, r9c8, r9c9);

    $('#solution').text(puzzle.checkPuzzle());

  });
});
