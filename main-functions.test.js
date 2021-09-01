import { calculateProbabilityOfPeter } from "./main-functions";

describe ("probability tests", () => {
    test("probability of Peter should return a number", () => {
        expect(calculateProbabilityOfPeter(1, 10)).toBe(10);
    })
})
