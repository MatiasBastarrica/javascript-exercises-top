// const meaningOfLifeArray = [42];
// const object = {
//   data: {
//     duplicate: "e",
//     stuff: {
//       thing: {
//         banana: NaN,
//         moreStuff: {
//           something: "foo",
//           answer: meaningOfLifeArray,
//         },
//       },
//     },
//     info: {
//       duplicate: "e",
//       magicNumber: 44,
//       empty: null,
//     },
//   },
// };

// const contains = function (obj, value) {
//   const values = Object.values(obj);
//   for (let i = 0; i < values.length; i++) {
//     if (Array.isArray(values[i])) {
//       values[i].forEach((item) => {
//         if (item === value) {
//           return true;
//         }
//       });
//     } else if (values[i] === value) {
//       return true;
//     } else if (typeof values[i] === "object" && values[i] !== null) {
//       if (contains(values[i], value)) {
//         return true;
//       } else if (i === values.length - 1) {
//         return false;
//       }
//     }
//   }
// };

const contains = function (obj, value) {
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === value) {
      return true;
    } else if (Number.isNaN(values[i]) && Number.isNaN(value)) {
      return true;
    }
    if (typeof values[i] === "object" && values[i] !== null) {
      if (contains(values[i], value)) {
        return true;
      } else if (i === values.length - 1) {
        return false;
      }
    }
  }
};

// contains(object, 44);

// Do not edit below this line
module.exports = contains;
