   function MoveZeroes(a: number[]) {
        let count  =0;
        for(let i =0, j =0; i< a.length; i++)
        {
           if(a[i] == 0)
           {
               continue;
           }
 
            if(i != j)
            {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
            j++;
            console.log(a);
        }  
        return a;
    }
    

console.log(MoveZeroes([0,1,0,0,3,12]));
console.log(MoveZeroes([0]));