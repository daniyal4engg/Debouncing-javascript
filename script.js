let counter = 0;
const getData = () => {
  console.log("fetch Data..", counter++);
};
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    let arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFuncttion = debounce(getData, 300);
