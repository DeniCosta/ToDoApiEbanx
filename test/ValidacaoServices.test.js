import ValidacaoServices from "./src/ValidacaoServices";

describe ("Usuários", ()=>{

test("Quando a validação do nome retorna false",()=>{
    expect(ValidacaoServices.validanome("").toBe(false))
    expect(ValidacaoServices.validanome("1").toBe(false))
    expect(ValidacaoServices.validanome("12").toBe(false))
})
test("Quando a validação do nome retorna true",()=>{
    expect(ValidacaoServices.validanome("Denise").toBe(true))
})
})

