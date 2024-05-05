export function solution(bridge_length, weight, truck_weights) {
  const crossingTrucks = new Array(bridge_length).fill(0);
  let takenTime = 0;

  while (truck_weights.length) {
    takenTime++;
    moveTruck(crossingTrucks, truck_weights, weight);
  }

  return takenTime + bridge_length;
}

export function moveTruck(crossingTrucks, truck_weights, weight) {
  crossingTrucks.shift();
  const readyTruck = truck_weights.shift();
  if (canCross(crossingTrucks, readyTruck, weight)) {
    crossingTrucks.push(readyTruck);
  } else {
    crossingTrucks.push(0);
    truck_weights.unshift(readyTruck);
  }
}

export function canCross(crossingTrucks, readyTruck, weight) {
  return weight >= crossingTrucks.reduce((a, b) => a + b) + readyTruck;
}
