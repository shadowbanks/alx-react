import { fromJS } from "immutable";

const mergeDeeplyElements = (page1, page2) => fromJS(page1).mergeDeep(page2);

export default mergeDeeplyElements;
