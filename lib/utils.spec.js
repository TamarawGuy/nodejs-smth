const { getNewUser, mapObjectToArray } = require("./utils.js");

describe("mapObjectToArray()", () => {
  test("maps values to array", () => {
    const result = mapObjectToArray(
      {
        age: 30,
        height: 65,
      },
      (k, v) => {
        return v + 10;
      }
    );
    expect(result).toEqual([40, 75]);
  });
});

describe("getNewUser()", () => {
  test("it gets user", async () => {
    const user = await getNewUser(1);
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
  });

  test("no user found", async () => {
    expect.assertions(1);
    try {
      const user = await getNewUser(14894);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
