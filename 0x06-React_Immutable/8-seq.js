import { Seq } from "immutable";

const printBestStudents = (object) => {
  const format = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const result = Seq(object)
    .filter((x) => x.score > 69)
    .map((y) =>
      y
        .updateIn(["firstName"], format(y.get("firstName")))
        .updateIn(["lastName"], format(y.get("lastName")))
    )
    .toJS();
  console.log(result);
};

export default printBestStudents;