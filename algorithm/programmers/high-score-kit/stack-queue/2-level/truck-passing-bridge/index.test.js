import { canCross, moveTruck, solution } from '.';

describe('solution', () => {
  it('트럭이 다리를 건너는데 걸리는 총 시간을 반환합니다.', () => {
    // Given
    const bridge_length = 2;
    const weight = 10;
    const truck_weights = [7, 4, 5, 6];

    // When
    const result = solution(bridge_length, weight, truck_weights);

    // Then
    expect(result).toBe(8);
  });

  it('트럭이 다리를 건너는데 걸리는 총 시간을 반환합니다.', () => {
    // Given
    const bridge_length = 100;
    const weight = 100;
    const truck_weights = [10];

    // When
    const result = solution(bridge_length, weight, truck_weights);

    // Then
    expect(result).toBe(101);
  });

  it('트럭이 다리를 건너는데 걸리는 총 시간을 반환합니다.', () => {
    // Given
    const bridge_length = 100;
    const weight = 100;
    const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    // When
    const result = solution(bridge_length, weight, truck_weights);

    // Then
    expect(result).toBe(110);
  });
});

describe('moveTruck', () => {
  it('트럭이 다리를 건너면 다리 위에 올바르게 위치합니다.', () => {
    // Given
    const crossingTrucks = [0, 0, 0];
    const truck_weights = [7, 4, 5, 6];
    const weight = 10;

    // When
    moveTruck(crossingTrucks, truck_weights, weight);

    // Then
    expect(crossingTrucks).toEqual([0, 0, 7]);
  });

  it('트럭이 다리를 건너지 못하면 대기열로 다시 이동합니다.', () => {
    // Given
    const crossingTrucks = [0, 0, 0];
    const truck_weights = [7, 4, 5, 6];
    const weight = 5;

    // When
    moveTruck(crossingTrucks, truck_weights, weight);

    // Then
    expect(crossingTrucks).toEqual([0, 0, 0]);
    expect(truck_weights).toEqual([7, 4, 5, 6]);
  });
});

describe('canCross', () => {
  it('트럭이 다리를 건널 수 있는지 확인합니다.', () => {
    // Given
    const crossingTrucks = [0, 0, 0];
    const readyTruck = 5;
    const weight = 10;

    // When
    const result = canCross(crossingTrucks, readyTruck, weight);

    // Then
    expect(result).toBe(true);
  });

  it('트럭이 다리를 건널 수 없는지 확인합니다.', () => {
    // Given
    const crossingTrucks = [0, 0, 0];
    const readyTruck = 7;
    const weight = 5;

    // When
    const result = canCross(crossingTrucks, readyTruck, weight);

    // Then
    expect(result).toBe(false);
  });
});
