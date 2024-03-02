import { Map, List } from "immutable";

export const concatElements = ((page1, page2) => List(page1).concat(page2));

export const mergeElements = ((page1, page2) => Map(page2).merge(Map(page1)));
