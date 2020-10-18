/// <reference types="cypress" />


context('Loops',()=>{

    it('Equal opertors',()=>{

        let y = 10;
        let z = 2;
        z++;
        //z = z^10
        console.log(z)

    })

    

})

context('Json Objects',()=>{

    it('Simple Json with dot',()=>{

    let student = {
        name:'Sriram',
        class:10
    }
    console.log(student.name);
    })

    it('Simple Json with []',()=>{

        let student = {
            name:'Sriram',
            class:10
        }
        console.log(student['name']);
        })


        it('Complex Json with .',()=>{

            let student = {
                name:'Sriram',
                class:10,
                homeAddress:{
                    addressLine1:'10 Downing Street',
                    postcode:'IG11 9PN',
                    tel: 20232323212
                }
            }
            console.log(student.homeAddress.tel);
            })

            it('Complex Json with []',()=>{

                let student = {
                    name:'Sriram',
                    class:10,
                    homeAddress:{
                        addressLine1:'10 Downing Street',
                        postcode:'IG11 9PN',
                        tel: 20232323212
                    }
                }
                console.log(student['homeAddress']['tel']);
                })


                it('Complex Json with arrays',()=>{

                    let student = {
                        name:'Sriram',
                        class:10,
                        friends:['Rutvik','Manjunath','Venkatesh'],
                        homeAddress:{
                            addressLine1:'10 Downing Street',
                            postcode:'IG11 9PN',
                            tel: 20232323212
                        }
                    }
                    console.log(student.friends[1]);

                   // if(student.friends[10]){
                       var x = student.friends[1];
                        console.log(student.friends[1]);
                   // }
                    //else{
                      //  console.log('oops');
                   // }

                    })

                    it('Complex Json with function',()=>{

                        let student = {
                            name:'Sriram',
                            class:10,
                            getNHS: function(){
                                console.log('NHS Number is 1010101');
                            }
                        }
                        var x = student.getNHS;
                        console.log(typeof(x));
                        //object - AS,JY,PR
                        //function - GR,SU,RA,MN,SR,RT
                        //undefined
                    })

                })

context('Loops',()=>{

    it('Simple loop',()=>{
        for(let i=1;i<=10;i++){
            console.log(i)
        }
    })

    it('Simple loop with break',()=>{
        for(let i=1;i<=10;i++){
            console.log(i)
            break;
        }
    })

    it('nested loop with break',()=>{
        for(let i=1;i<=10;i++){
            for(let j=1;j<=10;j++){
                console.log(j)
                if(j==5)
                break;
            }
            if(i==5)
            break;
        }
    })

    it('nested loop with continue',()=>{
    //    for(let i=1;i<=10;i++){
            for(let j=1;j<=10;j++){
                
        

    }
            //break

            //for each**
            it('loop with for eact',()=>{

                let student = {
                    name:'Sriram',
                    class:10
                }

                for(let x in student){
                   // console.log(key)
                    console.log(`key is ${x} and value is ${student[x]}`)
                }

            })


            it('loop with for array',()=>{

                let student = ['Sriram',10,'Ram',true]

                for(let x in student){
                   // console.log(key)
                    console.log(`index is ${x} and value is ${student[x]}`)
                }

            })



    
            //while 
            
            it('loop with while',()=>{

                let i=11;

                while(i<=10){
                    console.log(i)
                    i++
                }

            })

            it('loop with do while',()=>{

                let i=11;
                do{
                    console.log(i)
                    i++
                }
                while(i<=10)
    

            })
            
            
            
            //do while
 })


 context('Exception',()=>{

    it.only('Try catch',()=>{

        // let x = 0;
         let y = 0;
        try{
            console.log(x)
            console.log(y)
            
        }
        catch(e){
            console.log('Oops '+e)
            throw('Sriram'+e)
        }
        finally{
            console.log('i am in finally')
        }

    })
 })

        





    



