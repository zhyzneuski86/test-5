const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

golfScore(5, 4)

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      return answer = "alpha";
      break;
    case 2:
      return answer = "beta";
      break;
    case 3:
      return answer = "gamma";
      break;
    case 4:
      return answer = "delta";
  }
}
caseInSwitch(1);
