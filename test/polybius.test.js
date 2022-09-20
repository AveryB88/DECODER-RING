// Write your tests here!
const {polybius} = require("../src/polybius")
const expect = require("chai").expect

describe("Polybius square", () => {
  it("thinkful", () => {
    let actual = polybius("thinkful")
    let expected =  "4432423352125413"
    expect(actual).to.eql(expected)
  })
  it("Hello world, ignore caps", () => {
    let actual = polybius("Hello world")
    let expected = "3251131343 2543241341"
    expect(actual).to.eql(expected)
  })
  it("3251131343 2543241341", () => {
    let actual = polybius("3251131343 2543241341", false)
    let expected = "hello world"
    expect(actual).to.eql(expected)
  })
  it("4432423352125413", () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  })
  it("44324233521254134", () => {
    let actual = polybius("44324233521254134", false)
    const expected = false
    expect(actual).to.eql(expected)
  })
})