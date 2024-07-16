// code your solution here
function superbowlWin(record) {
    // Use the find() method to search for an object where result === "W"
    const winningYearObj = record.find(game => game.result === "W");
    
    // Check if a winning year object was found
    if (winningYearObj) {
      return winningYearObj.year; // Return the year if found
    } else {
      return undefined; // Return undefined if no win is found
    }
  }