import { calculateProbabilityOfPeter } from "./main-functions";
import { calculateProbabilityOfBenjamin } from "./main-functions";

describe ("probability tests for Peter", () => {
    test("probability of Peter should return 10", () => {
        expect(calculateProbabilityOfPeter(1, 10)).toBe(10);
    })

    test("probability of Peter should return 33", () => {
        expect(calculateProbabilityOfPeter(2, 6)).toBe(33);
    })
})

describe("probability tests for Benjamin", () => {
    test("probability of Benjamin should return 20", () => {
        expect(calculateProbabilityOfBenjamin(80)).toBe(20);
    })

    test("probability of Benjamin should return 70", () => {
        expect(calculateProbabilityOfBenjamin(30)).toBe(70);
    })
})
