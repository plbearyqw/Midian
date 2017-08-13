function sortNumber(a, b){
          return a - b;
}

function middle(arr){
          arr.sort(sortNumber);
          let length = arr.length;
          if(length % 2 === 0){
                    return (arr[Math.floor((length - 1) / 2)] 
                              + arr[Math.round((length - 1) / 2)]) / 2;
          }
          else{
                    return arr[(length - 1) / 2];
          }
}


function main(){
      let ar = [6, 46, 1, 62, 13];
      return middle(ar);
}