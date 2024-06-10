/* 
    머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
    구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(price) {
<<<<<<< HEAD:LV_0/1. 옷가게 할인 받기.js
  let result = 0;
  if (100000 <= price && price < 300000) {
    result = price - Math.ceil(price * 0.05);
  } else if (300000 <= price && price < 500000) {
    result = price - Math.ceil(price * 0.1);
  } else if (500000 <= price) {
    result = price - Math.ceil(price * 0.2);
  } else {
    result = priceQ;
  }
  console.log(result);
  return result;
}

solution(100010);
=======
    let result = 0;
    if(100000 <= price && price < 300000 ){
        result =  price - (Math.ceil(price * 0.05));
    }else if(300000<= price && price < 500000){
        result = price - (Math.ceil(price * 0.10));
    }else if(500000 <= price ){
        result = price - (Math.ceil(price * 0.20));
    }else{
        result = price
    }
    console.log(result);
    return result
}

solution(100010)
>>>>>>> b5715c8 (2024-06-10):LV0/1. 옷가게 할인 받기.js
