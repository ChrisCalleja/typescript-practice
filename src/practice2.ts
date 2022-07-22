import Submission from "./models/Submission";

const submissions: Submission[] = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (
  array: Submission[],
  newName: string,
  newScore: number,
  newDate: string
): void => {
  const newObject: Submission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

// addSubmission(submissions, "Martin", 100, "Thursday");
// console.log(submissions);

const deleteSubmissionByIndex = (array: Submission[], index: number): void => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

// findsubmissionbyname is equal to a function. this function needs a name and an array to do its job. the array has to be of type submission. it has to meet the contract previously specified. provided these things, it will return an object that meets the submission interface, or it will return undefined.
const findSubmissionByName = (
  array: Submission[],
  name: string
): Submission | undefined => {
  // const result = array.find((item)=> {
  //     return item.name === name;
  // })
  // return result;
  return array.find((submission) => {
    if (submission.name === name) {
      return true;
    }
  });
};

console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore = (array: Submission[]): Submission | undefined => {
    if (array.length) {
      return array.reduce((pv, cv) => {
        return pv.score > cv.score ? cv : pv;
      });
    } else {
      return undefined;
    }
//   let currentLowest: Submission = array[0];
//   array.forEach((item) => {
//     if (item.score < currentLowest.score) {
//       currentLowest = item;
//     }
//   });
//   return currentLowest;
};

console.log(findLowestScore([]));
