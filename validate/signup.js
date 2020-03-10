$(function() {
  //검증규칙 작성하기
  $("#signupForm").validate({
    rules: {
      //이름을 사용해서 규칙 지정
      username: {
        //username 값이 비어 있으면 안되고, 최소 문자 길이는 2, 최대 길이는 4까지 가능
        required: true,
        minlength: 2,
        maxlength: 4
      },
      password: {
        //정규식 패턴과 일치하는지 확인하고, 필수입력값
        required: true
      },
      confirm_password: {
        //정규식패턴과 일치 / 필수입력값 / password값과 동일
        required: true,
        equalTo: "#password"
      },
      email: {
        //정규식 패턴과 일치 / 필수입력값
        required: true,
        email: true
      },
      policy: {
        required: true
      },
      topic: {
        //newsletter 체크 여부 / 최소2개 선택
        required: "#newsletter:checked",
        minlength: 2
      }
    },
    messages: {
      username: {
        required: "이름은 필수 요소입니다",
        minlength: "이름은 최소 2자리여야 합니다",
        maxlength: "이름은 최대 4자리까지 허용됩니다"
      },
      password: {
        required: "비밀번호는 필수 요소입니다"
      },
      confirm_password: {
        required: "비밀번호는 필수요소입니다",
        equalTo: "이전 비밀번호와 다릅니다"
      },
      email: {
        required: "이메일 필수",
        email: "이메일 형식 확인"
      },
      policy: {
        required: "정책 동의 필요"
      },
      topic: {
        minlength: "2개 이상 필요"
      }
    },
    errorPlacement: function(error, element) {
      error.addClass("help-block");
      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.next("label"));
      } else {
        error.insertAfter(element);
      }
    }
  });
});
