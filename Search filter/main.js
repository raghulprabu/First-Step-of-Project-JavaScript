let fruits =["apple", "banana" ,"orange" ,"Mango" ,"jackruits" ,
     "muskmelon" , "grapes" , "kiwi" , "peach" , "pear" , 
     "strawberry" , "watermelon" , "blueberry" , "blackberry" , 
     "coconut" , "papaya" , "pomegranate" , "plum" , "tangerine" ,
      "cantaloupe"];

document.getElementById("search").addEventListener("keyup", () => {
    document.getElementById("output").innerHTML = ""
    // debugger
    let searchkey = document.getElementById("search").value  //! it will take value  apple

    let filteredFruits = fruits.filter(item => {      //! filter fruits "Apple" ,orange .....etc
        return item.includes(searchkey)   //! take searchkey values Apple 
    })

    filteredFruits.map(item => {                     //! for each item search  in filteredFruits "apple"
        document.getElementById("output").innerHTML += `<h1>${item}</h1>` //! give the output values
    })
})
