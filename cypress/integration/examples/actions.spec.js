/// <reference types="cypress" />

context('Practice Javascript Programmes', () => {
  
  it('Varible Number',()=>{
    var a;
    a = 10;
    console.log(typeof(a));
  });

  it('Varible',()=>{
    var x
    x = 1000
    console.log(typeof(x))
  })

  it('Varible String',()=>{
    var b;
    b = "Sriram";
    console.log(typeof(b))
  })
  it('Varible Boolean',()=>{
    var c;
    c = true;
    console.log(typeof(c))
  })
  it('Varible Non Premitive',()=>{
    var d;
    d = new Array();
    console.log(typeof(d))
  })


})
