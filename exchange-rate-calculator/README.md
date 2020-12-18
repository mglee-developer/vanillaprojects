# Exchange Rate Calculator

# Introduction
- open API를 활용하여 국제 통화 환율을 계산하는 프로그램
- 개발기간: 2020.12.15 - 2020.12.18(4일)

# Usage
```
    npm install
    npm install express
    npm install axios
    npm install body-parser
    npm install nodemon -g
```

```
    nodemon server.js

    # Visit http://localhost:5500
```

# DEMO
![Exchange Rate Calculator](https://user-images.githubusercontent.com/70195171/102623399-c6ff2d80-4185-11eb-9764-52f1312b07e5.gif)

# Technologies
- HTML
- CSS
- JavaScript
- Node JS
- Git, Github

# APIs
- 한국수출입은행 open API : https://www.koreaexim.go.kr
- 국제 환율 계산 open API : https://v6.exchangerate-api.com

# Feature
- 2개의 open API 사용
- CORS 허가를 위해 nodeJS로 서버 생성
- 두 나라의 환율을 표시
- 아이콘 버튼 클릭하여 금액 교체