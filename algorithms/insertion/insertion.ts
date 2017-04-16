export type comparator = (item, pivot) => number;

function defaultComp(item: number, pivot: number): number {
  return item - pivot;
}

export function insertion<T>(input: T[], comp: comparator = defaultComp): T[] {
  input.forEach((pivot, index) => {
    // Index of the left array, which is left ordered at the end of each iteration
    let leftIndex = index - 1;

    while (leftIndex > -1 && comp(input[leftIndex], pivot) > 0) {
      input[leftIndex + 1] = input[leftIndex];
      leftIndex -= 1;
    }

    input[leftIndex + 1] = pivot;
  });

  return input;
}
