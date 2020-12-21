# DOM Array Method

# Introduction
- 배열과 DOM 조작을 연습을 위한 프로젝트
- 개발기간: 2020.12.21(1일)

# DEMO
[DEMO](https://mglee-developer.github.io/vanillaprojects/dom-array-methods/)


![Dom Array Methods](https://user-images.githubusercontent.com/70195171/102760518-f47fed00-43b8-11eb-9df9-3e12e6be7e45.gif)

# Technologies
- HTML
- CSS
- JavaScript
- Git, Github

# API
- 사용자 랜덤 open API : https://randomuser.me/api

# Feature
- 사용자 랜덤 open API 사용하여 사용자 이름 표시
- wealth는 Math.random()을 사용하여 표시
- Add User Button: 사용자를 임의로 추가하여 배열에 저장
- Double Money Button: 배열에 저장된 사용자의 wealth(money) 2배 증가
- Show Only Millionaires Button: wealth(money)가 1000000 이상인 사용자 표시
- Sort by Richest Button: wealth(money)가 높은 순부터 표시
- Calculate entire Wealth Button: 배열에 저장된 wealth(money) 합 구하기

# Study
### 배열저장
array.push(obj)

### map
배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과 출력
```
    user = user.map(data => {
        return {...data, wealth: data.wealth * 2};
    });
```

### filter
주어진 함수를 통과하는 요소를 모아 새로운 배열로 반환
```
    user = user.filter(data => data.wealth > 1000000);
```

### sort
배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
```
// 문자열 대신 숫자 비교 -> 내림차순 정렬
user.sort((a, b) => b.wealth - a.wealth);
```

### reduce
배열의 각 요소에 대해 reducer 함수를 실행하고 하나의 결과값으로 반환
```
    const total = user.reduce((acc, user) => (acc += user.wealth), 0);
```
- 4개의 인자
    - 누산기(acc) : 반환값 누적
    - 현재값(cur) : 처리할 현재 요소
    - 현재 인덱스(idx) : 처리할 현재 요소의 인덱스(initialValue 제공하면 0, 아니면 1)
    - 원본 배열(src) : reduce 함수를 호출할 배열

# 참고
[Mozilla MDN](https://developer.mozilla.org/ko/)