/**
 * #graphs
 * 841. Keys and Rooms
 * https://leetcode.com/problems/keys-and-rooms/?envType=study-plan-v2&envId=leetcode-75
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */
let canVisitAllRooms = function (rooms) {
  /*
     ALG:

     *  Breadth-First Search

     TEST CASES:
     * [[1,3],[3,0,1],[2],[0]]
     * [[1,3],[3,2,1],[2],[0]]
     
  */

  let isAllRoomsVisited = true; // or isAllNodesVisited
  let firstNodeIndex = 0; // we always started from zero for t1
  let queue: number[] = [firstNodeIndex];
  let q = queue;
  let visitedRoomsArr: boolean[] = Array(rooms.length).fill(false);

  // iterate in breadth
  // push all next edges
  while (q.length > 0) {
    // get the first element in the queue
    let currentNodeIndex: number = q.shift() ?? 0; // current room

    // check if already visited
    let isVisited = visitedRoomsArr[currentNodeIndex];
    if (isVisited) {
      continue;
    }

    // push reachable nodes
    // get all edges and add / push them to queue for next search in breadth
    q.push(...rooms[currentNodeIndex]); // add all nodes that we can reach

    // mark visited
    visitedRoomsArr[currentNodeIndex] = true; // here we can check
  }

  for (let i = 0; i < visitedRoomsArr.length; i++) {
    // if not visited
    if (visitedRoomsArr[i] === false) {
      isAllRoomsVisited = false;
      break;
    }
  }

  return isAllRoomsVisited;
};

// test cases
// todo - add tests
l(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
l(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
l('2 test case | expected true', canVisitAllRooms([[2, 3], [], [2], [1, 3]])); // expected true

function l(...args) {
  console.log(...args);
}
