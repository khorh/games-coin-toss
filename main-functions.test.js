import { calculateProbabilityOfPeter } from "./main-functions";

describe ("probability tests", () => {
    test("probability of Peter should return a number between 0 and 100", () => {
        expect(calculateProbabilityOfPeter(1, 10)).toBe(10);
    })
})
