/*Write a function compareRobots which takes 
two robots (and their starting memory). It should generate a hundred tasks,
 and let each of the robots solve each of these tasks. When done,
  it should output the average number of steps each robot took per task.

For the sake of fairness, make sure that you give each task to both robots,
 rather than generating different tasks per robot.*/



function countSteps(state,robot,memory)
{ 
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
     
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
}
}
  


function compareRobots(robot1, memory1, robot2, memory2) {
   
  let total1 = 0, total2 = 0;
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
}
let finalTot1=total1/100;
let finalTot2=total2/100;
 console.log('Route robot needed ' +finalTot1+ ' steps on average'); 
   console.log('Goal robot needed ' +finalTot2+ ' steps on average');  

}


compareRobots(routeRobot, [], goalOrientedRobot, []);