$(function() {
  $("#join").validate({
    rules: {
      userid: {
        required: true,
        validId: true
      },
      userpw: {
        required: true,
        validPwd: true
      },
      confirmpwd: {
        required: true,
        equalTo: "#userpw",
        validPwd: true
      },
      gender: {
        required: true
      },
      email: {
        required: true
      },
      mobile: {
        required: true,
        validTel: true
      },
      hobby: {
        required: true
      }
    },
    messages: {
      userid: {
        required: "아이디는 필수"
      },
      userpw: {
        required: "비밀번호는 필수"
      },
      confirmpwd: {
        required: "필수",
        equalTo: "이전 비밀번호 확인"
      },
      gender: {
        required: "필수"
      },
      email: {
        required: "필수"
      },
      mobile: {
        required: "필수"
      },
      hobby: {
        required: "필수"
      }
    }
  });
});

//사용자 정의 규칙 추가-정규식을 이용한 검증
$.validator.addMethod(
  "validId",
  function(value) {
    let regId = /?=.*[A-Za-z](?=.*\d)(?=.*[@#!%*#?&])[A-Za-z\d@#!%*#?&]{6,12}/;
    return regId.test(value);
  },
  "아이디는 영문자,숫자,특수문자의 조합으로 6자리이상 12자리 이하로 만들어야 합니다."
);
$.validator.addMethod(
  "validPwd",
  function(value) {
    let regPwd = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}/;
    return regPwd.test(value);
  },
  "비밀번호는 숫자,영문자의 조합으로 8~15자리로 작성해야 합니다."
);
$.validator.addMethod(
  "validTel",
  function(value) {
    let regTel = /\d{3}\d{4}\d{4}/;
    return regTel.test(value);
  },
  "-를 제외한 번호만 입력해 주세요"
);
