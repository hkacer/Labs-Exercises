
const {returnTwo,greeting,add,divide,substract}=require('./functions.js')

describe('test the file',()=>{
  test('sum of two numbers',()=>expect(returnTwo()).toEqual(2))
  test('greetimg',()=>{
    expect(greeting('James')).toEqual('Hello James')
    expect(greeting('Jill')).toEqual('Hello Jill')
  })
  test('adding',()=>{
  expect(add(1,2)).toEqual(3)
  expect(add(5,9)).toEqual(14)
})
})
// describe('test for new func',()=>{
//   test('')
// })


