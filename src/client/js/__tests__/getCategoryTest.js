
import {determineCategory} from ".././formHandler.js"



describe("Get Cat Function", () =>{
  test("Valid input", ()=>{
    const input = "american football"
    const output = "sport - American football"
    expect(determineCategory(input).toEqual(output))
  })
})

describe("Get Cat Function", () =>{
  test("InValid input", ()=>{
    const input = ""
    const output = "Invalid Input"
    expect(determineCategory(input).toEqual(output))
  })
})


