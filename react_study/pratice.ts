// 먼저 배열하나를 선언해 줍니다.
let str_: string[] = ["테스트", "연습", "es6"]; 
let isExist_ = false; // 판단 결과를 저장하기 위한 변수입니다.

// 일단 indexOf를 사용하지 않고 직접 찾아봅니다.
for (var i = 0; i <= str_.length; i++) {
    if (str_[i] === "연습") { // === 를 사용해 직접 찾아줍니다.
        isExist_ = true;
        console.log('데이터 찾은 인덱스:', i);
    } else {
        console.log('데이터 못찾은 인덱스:', i);
    }
}

// indexOf를 사용하면, 한줄로 간단하게 찾을 수 있습니다.
let isExist2_ = (str_.indexOf('연습') !== -1);  
// 못찾으면 -1을 리턴한다는 걸 기억해주세요
console.log('isExist2_:', isExist2_);

// 이번에도 배열을 선언합니다. JSON 객체들을 갖고 있는 배열입니다.
let arr_ = [{ "name": "apple", "count": 2 },
            { "name": "orange", "count": 5 },
            { "name": "banana", "count": 16 },
            { "name": "orange", "count": 3 }];

let newArr_ = arr_.filter(function(item){
  	// return item.count === 2   : count가 2인 객체를 리턴
  	return item.name === 'orange'  // : name이 orange인 객체를 리턴
})
// item이 arr_ 내부의 객체입니다. 
// 매개변수로 쟤를 받고, 그 객체를 검사해서 name = orange 인 개체를 찾아서 리턴 -> newArr_로 들어가게됩니다.
console.log(newArr_);
// name이  orange인 객체 2가지가 콘솔에 표시될것입니다.


let arr2_=[1,2,3];
let test_ = arr2_.map(function(x){ 
    return x+x;
})
// 여기서의 x도 arr_의 각 값들입니다. 
// 내부적으로 forEach 로 각 개체들의 값을 반복시키면서 처리합니다.
console.log(test_); // [2,4,6]

const arr3_ = [6,5,8];

//화살표 함수를 사용해서 간단하게 표시해봅니다.
const test4_ = arr3_.map(x=>x+x);
console.log(test4_); [12,10,16]

let a_ = [3,4,5,6,7];
let c_ = a_.map(function(v,i){ 
  // v는 각 값, i는 인덱스 번호입니다.
    console.log('v:',v);
    return v+3;
  // 배열의 길이만큼 반복되며 값을 출력합니다. 
  // 또한 배열의 각 값에 3을 더해서 리턴해서 새로운 배열 c_를 생성합니다. 
})
console.log('c_:',c_);