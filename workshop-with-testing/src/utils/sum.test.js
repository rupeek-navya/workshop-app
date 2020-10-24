import {sum} from './sum.js'

it('sum function should return 30 when 14 and 16 are passed',()=>{
    const x=14,y=16;
    let result;
    result=sum(x,y)
    expect(result).toBe(30)
})