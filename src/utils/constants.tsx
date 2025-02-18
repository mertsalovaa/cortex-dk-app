export const WAY_COUNT: { up: number; down: number } = {
  up: 30,
  down: -30,
} as const;

export enum AxisValue {
  Y = "y",
  X = "x",
}
