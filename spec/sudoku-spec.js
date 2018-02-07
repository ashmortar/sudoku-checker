import {Puzzle} from './../js/sudokuChecker.js';

describe('Puzzle', function() {
  let failTestPuzzle;
  let passTestPuzzle;

  beforeEach(function () {
    failTestPuzzle = new Puzzle(
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9);
    passTestPuzzle = new Puzzle(
      4, 3, 5, 2, 6, 9, 7, 8, 1,
      6, 8, 2, 5, 7, 1, 4, 9, 3,
      1, 9, 7, 8, 3, 4, 5, 6, 2,
      8, 2, 6, 1, 9, 5, 3, 4, 7,
      3, 7, 4, 6, 8, 2, 9, 1, 5,
      9, 5, 1, 7, 4, 3, 6, 2, 8,
      5, 1, 9, 3, 2, 6, 8, 7, 4,
      2, 4, 8, 9, 5, 7, 1, 3, 6,
      7, 6, 3, 4, 1, 8, 2, 5, 9);
  })


  it('should identify a failing puzzle and a passing puzzle', function() {
    expect(failTestPuzzle.checkPuzzle()).toEqual(false)
    expect(passTestPuzzle.checkPuzzle()).toEqual(true)
  });

  it('should tell you which parts are failing if test is failing', function() {
    expect(failTestPuzzle.checkPuzzle()).toEqual(false)
    expect(failTestPuzzle.getErrors().toString()).toEqual("Column 1 with value 1,1,1,1,1,1,1,1,1 does not pass,Column 2 with value 2,2,2,2,2,2,2,2,2 does not pass,Column 3 with value 3,3,3,3,3,3,3,3,3 does not pass,Column 4 with value 4,4,4,4,4,4,4,4,4 does not pass,Column 5 with value 5,5,5,5,5,5,5,5,5 does not pass,Column 6 with value 6,6,6,6,6,6,6,6,6 does not pass,Column 7 with value 7,7,7,7,7,7,7,7,7 does not pass,Column 8 with value 8,8,8,8,8,8,8,8,8 does not pass,Column 9 with value 9,9,9,9,9,9,9,9,9 does not pass")
  })
});
