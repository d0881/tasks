const getInputValues = () => {
  const input1 = parseInt(document.querySelector("#input1").value);
  const input2 = parseInt(document.querySelector("#input2").value);
  const input3 = parseInt(document.querySelector("#input3").value);
  const inputCount = document.querySelectorAll("input").length;
  return { input1, input2, input3, inputCount };
};

const calculateAverage = ({ input1, input2, input3, inputCount }) => {
  const average = (input1 + input2 + input3) / inputCount;
  return average;
};

const notPermitted = (average) => {
  if (isNaN(average)) {
    return 1;
  }
  return 0;
};

const output = () => {
  const inputValues = getInputValues();
  const result = calculateAverage(inputValues);
  const errorCode = notPermitted(result);
  if (errorCode === 1) {
    document.querySelector("#output").innerHTML = "Wprowadź poprawną wartość";
  }
  document.querySelector("#output").innerHTML = "Średnia ocen:" + " " + result;
};
