function TappingRainWater() {
  let buildings = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  let leftArr = [];
  let rightArr = [];
  let leftMax = 0,
    rightMax = 0,
    totalSum = 0;

  for (
    let i = 0, j = buildings.length - 1;
    i <= buildings.length - 1, j >= 0;
    i++, j--
  ) {
    leftArr[i] = leftMax;
    leftMax = Math.max(leftMax, buildings[i]);

    rightArr[j] = rightMax;
    rightMax = Math.max(rightMax, buildings[i]);
  }

  for (let i = 0; i < buildings.length; i++) {
    let water = Math.min(leftArr[i] - rightArr[i]) - buildings[i];
    totalSum += water > 0 ? water : 0;
  }
  console.log("Total " + totalSum + " units of water saved!!");
}
TappingRainWater();
