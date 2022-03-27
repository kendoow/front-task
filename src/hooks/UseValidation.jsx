import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(true);
  const [inputVaild , setInputVaild] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
            value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
          default:
              return value
      }
    }
  }, [value]);
  


  useEffect (() => {
    if(isEmpty || minLengthError ){
        setInputVaild(false)
    } else {
        setInputVaild(true)
    }
  },[isEmpty,minLengthError])
  return {
    isEmpty,
    minLengthError,
    inputVaild,
  }
};

export default useValidation;
