// question 1 
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
      // if / else for array datatype
      if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
        //filtering for string
        const filterTheArray = mixedArray.filter((elem) => typeof elem === "string");
        //new array with filtered elements and lowercased
        const newArr = filterTheArray.map((strElm) =>
        strElm.toLowerCase()
        );
        // print new array
        resolve(newArr);
      } else {
        // array doen't meet requirement so print invaild
        reject("Invalid array");
      }
    });
  };
  // input array in question
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  //finally print new array or error
  lowerCaseWords(mixedArray).then((value) =>
      console.log(value)
    )
    .catch((error) =>
      console.log(error)
    );
