function betterThanAverage(classPoints, yourPoints) {
    let sumPoints = 0;
    for (i = 0; i < classPoints.length; i++) {
        sumPoints += classPoints[i];
    }
    let average = sumPoints / classPoints.length;
    if (yourPoints > average)
    {
        console.log(true);
    }
    else
        {
        console.log(false);
        }
}

betterThanAverage([2, 3], 2);
