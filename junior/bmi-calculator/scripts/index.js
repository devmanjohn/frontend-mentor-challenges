function changeMeasurements(measurement) {
  const imperialInputs = document.getElementById('imperial-inputs');
  const metricInputs = document.getElementById('metric-inputs');

  if (measurement === 'metric') {
    imperialInputs.classList.add('hidden');
    metricInputs.classList.remove('hidden');

    calculateMetricBMI();
  } else {
    metricInputs.classList.add('hidden');
    imperialInputs.classList.remove('hidden');

    calculateImperialBMI();
  }
}

function calculateMetricBMI() {
  const heightCm = document.getElementById('cm').value;
  const weightKg = document.getElementById('kg').value;

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  const idealWeightMin = 18.5 * (heightM * heightM);
  const idealWeightMax = 24.9 * (heightM * heightM);

  document.getElementById('bmi-result').innerHTML = bmi.toFixed(1);

  if (bmi < 18.5) {
    const text = `Your BMI suggests you're underweight. Your ideal weight is between 
    <em>${idealWeightMin.toFixed(1)}kgs - ${idealWeightMax.toFixed(1)}kgs</em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    const text = `Your BMI suggests you're a healthy weight. Your ideal weight is between 
    <em>${idealWeightMin.toFixed(1)}kgs - ${idealWeightMax.toFixed(1)}kgs<em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  } else if (bmi >= 25 && bmi <= 29.9) {
    const text = `Your BMI suggests you're overweight. Your ideal weight is between 
    <em>${idealWeightMin.toFixed(1)}kgs - ${idealWeightMax.toFixed(1)}kgs<em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  } else if (bmi >= 30) {
    const text = `Your BMI suggests you're obese. Your ideal weight is between 
    <em>${idealWeightMin.toFixed(1)}kgs - ${idealWeightMax.toFixed(1)}kgs<em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  }
}

function calculateImperialBMI() {
  const heightFt = document.getElementById('ft').value;
  const heightIn = document.getElementById('in').value;
  const weightSt = document.getElementById('st').value;
  const weightLbs = document.getElementById('lbs').value;

  const heightInches = parseInt(heightFt) * 12 + parseInt(heightIn);
  const weightPounds = parseInt(weightSt) * 14 + parseInt(weightLbs);

  const bmi = (weightPounds / (heightInches * heightInches)) * 703;

  const idealWeightMin = (18.5 * heightInches * heightInches) / 703;
  const idealWeightMax = (24.9 * heightInches * heightInches) / 703;

  const idealWeightMinSt = Math.floor(idealWeightMin / 14);
  const idealWeightMinLbs = Math.round(idealWeightMin % 14);
  const idealWeightMaxSt = Math.floor(idealWeightMax / 14);
  const idealWeightMaxLbs = Math.round(idealWeightMax % 14);

  document.getElementById('bmi-result').innerHTML = bmi.toFixed(1);

  if (bmi < 18.5) {
    const text = `Your BMI suggests you're underweight. Your ideal weight is between 
        <em>${idealWeightMinSt}st ${idealWeightMinLbs}lbs - ${idealWeightMaxSt}st ${idealWeightMaxLbs}lbs</em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    const text = `Your BMI suggests you're a healthy weight. Your ideal weight is between 
        <em>${idealWeightMinSt}st ${idealWeightMinLbs}lbs - ${idealWeightMaxSt}st ${idealWeightMaxLbs}lbs</em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  } else if (bmi >= 25 && bmi <= 29.9) {
    const text = `Your BMI suggests you're overweight. Your ideal weight is between 
        <em>${idealWeightMinSt}st ${idealWeightMinLbs}lbs - ${idealWeightMaxSt}st ${idealWeightMaxLbs}lbs</em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  } else if (bmi >= 30) {
    const text = `Your BMI suggests you're obese. Your ideal weight is between 
        <em>${idealWeightMinSt}st ${idealWeightMinLbs}lbs - ${idealWeightMaxSt}st ${idealWeightMaxLbs}lbs</em>`;
    document.querySelector('.bmi-details').innerHTML = text;
  }
}

calculateMetricBMI();
