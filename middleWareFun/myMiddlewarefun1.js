

// You can store function inside a variable
let mwfn1 = (req, res, next)=>{

    console.log(req.query);

    // for(key in object){
    //       // Code need to execute
    // }

    let fullData = '';

    for(key in req.query){
        console.log(key , " : " , req.query[key]);       // KEY : VALUE

        // console.log(key);       // KEY
        // console.log(req.query[key]);   // VALUE

        fullData = fullData + req.query[key] + " ";


    }
    req.query = {fullData};

    console.log(fullData);

    next();
};


//You have to export



//There are two way you can export in NodeJS


module.exports = {mwfn1}
