const cats = ["Milo","Otis","Garfield"]
cats.length=0
cats.push('Milo','Otis','Garfield');

    function destructivelyAppendCat(){
        cats.push('Ralph');
}
cats.length=0
cats.push('Milo','Otis','Garfield');

    function destructivelyPrependCat(){
        cats.unshift("Bob");
}
cats.length=0
cats.push('Milo','Otis','Garfield');

    function destructivelyRemoveLastCat(){
        cats.pop();

    }
cats.length=0
cats.push('Milo','Otis','Garfield');

    function destructivelyRemoveFirstCat(){
        cats.shift();
    }
cats.length=0
cats.push('Milo','Otis','Garfield');
   
    function appendCat(){
        return([...cats,'Broom']);
        
    }

    function prependCat(){
        return(['Arnold',...cats]);
    }
    
    function removeLastCat(){
        return cats.slice(0, cats.length -1)
        
    }
cats.length=0
cats.push('Milo','Otis','Garfield');

    function removeFirstCat(){
        return cats.slice(1)
    }

    console.log(appendCat(),prependCat(),removeLastCat("Milo","Otis"));