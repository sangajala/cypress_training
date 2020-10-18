/// <reference types="cypress" />
var x=true;
const text = "Sriram";

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
    add()
  })

  it('String Quotes',()=>{
    
     text = "Sriram1";
    let text2 = 'Girish';
    let text3 = `Venky ${(false)?text:text2}`;
    let text4 = `Venky ${add()}`;
    console.log(text);
    console.log(text2);
    console.log(text3);
    console.log(text4);
  })
  function add(){
    return 'jaya';
  }

})
