import { Seq } from "immutable";

const temp = (object) => {
    const format = (str) => (str.charAt(0).toUpperCase() + str.slice(1));
    Seq(object)
    .filter(x => x.score > 69)
    .map(y => 
        y.updateIn(['firstName'], format(y.get('firstName')))
        .updateIn(['lastName'], format(y.get('lastName')))
    ).forEach(console.log(y.toJS()));
};
