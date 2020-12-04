// form 전송
const form = document.querySelector('.form');
const name = form.querySelector('.form__name');
const email = form.querySelector('.form__email');
const pwd = form.querySelector('.form__pwd');
const rePwd = form.querySelector('.form__re-pwd');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkLength(input, min, max) {
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${input.placeholder}의 길이는 ${min}에서 ${max}입니다.`);
    }
}

function checkPassword(pwd, rePwd) {
    if (pwd.value !== rePwd.value) {
        showError(rePwd, `${rePwd.placeholder} 하세요.`);
    }
}

function checkEmail(email) {
    const re = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (re.test(email.value)) {
        showSuccess(email);
    }else {
        showError(email, `${email.placeholder} 형식을 확인하세요.`);
    }
}

function required(requirements) {
    requirements.forEach(requirement => {
        if(requirement.value === '') {
            showError(requirement, `${requirement.placeholder} 창은 필수입력입니다.`);
        }else {
            showSuccess(requirement);
        }
    })
}

form.addEventListener('submit', (e) => {
    // 페이지 이동 막음
    e.preventDefault();

    // 필수입력
    required([name, email, pwd, rePwd]);

    // 이메일 확인
    checkEmail(email);

    // 비밀번호 match
    checkPassword(pwd, rePwd);

    // 비밀번호 길이
    checkLength(pwd, 6, 18);

    // 이름 길이
    checkLength(name, 3, 10);
});