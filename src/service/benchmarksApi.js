import { post } from "./apiUtils";

export const getBenchmarks = (data = {}) => {
    return post("benchmarks/benchmarks/getBenchmarksForOrganization", data);
}

