export function useIsDiesel(car) {
  const isDiesel = car.fuel.toLowerCase() === "diesel";

  return isDiesel;
}
