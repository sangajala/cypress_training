/// <reference types="cypress" />


context('Operators',()=>{

    it('Equal opertors',()=>{

        let y = 10;
        let z = 2;
        z++;
        //z = z^10
        console.log(z)

    })

    it('Comparision operators',()=>{

        let y = 10;
        let z = 0;
        
        if(z==false){
            console.log('I am in 1')
        }

        if(z===false){
            console.log('I am in 2')
        }

    })

})

context('Type conversion',()=>{

    it('Type Conversion +',()=>{
       let x = 'Sriram'
       let y = x + undefined;
       console.log(y);

    })

    it('Type Conversion -*',()=>{

        let y = '4';
        let z = 'sjsjsjs';
        let x = y*z;
        console.log(x);

    })

    it('Type Conversion boolean',()=>{

        let y = '4';
        let z = true
        let x = y*z;
        console.log(x);

    })


    it('Type Explicit Conversion List',()=>{

       //Number
       let x = '10';
       let y = Number(x) + 20;
        console.log(y)
       //String
       //Boolean
       //parseInt
       //parseFloat

    })

    it('Type Explicit Conversion String',()=>{

        let x = String(1);
        let y = (1).toString();
         console.log(y)
    
     })

})

context('Conditions',()=>{

    it('if and if else and else',()=>{
       
            //votes
            //if => 1+1+1+1***+2
            //else => 1+1+1+1
        let x = 10;
        // if(Expression) x = true,not 0, or not undefined , notnull
        //should be undefied,null,0,false,NaN,Empty,''
        if(x<10){
            console.log("I am in If")
            if(false){

            }
        }
        else if(10){
            console.log("I am in else If")
        }
        else{
            console.log("I am in else")
        }

    })

    it('if and if else and else - Mordern',()=>{
    
    let x = 10;
    let result;
    // if(Expression) x = true,not 0, or not undefined , notnull
    //should be undefied,null,0,false,NaN,Empty,''
    result = x<10?10:'';
    console.log(result)
})

    

})

