
import {handleSubmit} from ".././formHandler.js"
import {determineCategory} from ".././formHandler.js"

const regeneratorRuntime = require("regenerator-runtime")

test("handleSubmit defined", async () =>{
  expect(handleSubmit).toBeDefined()
})

test("determineSentiment defined", async () =>{
  expect(determineCategory).toBeDefined()
})




