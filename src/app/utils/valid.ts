import { SignUpType, SignUpValidateType } from "@/types/sign";

/**
 * 회원가입시 유효한 값인지 확인하는 함수
 * @param type 어떤값을 확인할 것인지 ex) email, name, password, phoneNumber
 * @param input 확인할 값
 * @returns isValid: 유효한지, message: 보여줄 메세지
 */
export const validateSignUp = (type: SignUpType, input: string) => {
  const regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: /^[A-Za-z가-힣]+$/,
    phoneNumber: /^\d{3}-\d{3,4}-\d{4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
  };

  const isValid: boolean = regex[type].test(input);
  let message = "";

  switch (type) {
    case "email":
      isValid
        ? (message = "사용가능한 이메일 입니다.")
        : (message = "이메일 형식에 맞게 입력해 주세요.");
      break;
    case "name":
      isValid
        ? (message = "사용가능한 이름입니다.")
        : (message = "1글자 이상 입력해 주세요.");
      break;
    case "password":
      isValid
        ? (message = "사용가능한 비밀번호 입니다.")
        : (message = "영문, 숫자 조합 8~16자로 입력해 주세요.");
      break;
    case "phoneNumber":
      isValid
        ? (message = "사용가능한 휴대폰 번호 입니다.")
        : (message = "휴대폰 번호 형식에 맞게 입력해 주세요.");
      break;
    default:
      message = "";
      break;
  }
  return { isValid, message };
};

/**
 * 모든값이 유효한지 확인하는 함수
 * @param input 모든 입력값
 * @returns 유효한지 안유효한지
 */
export const validateAll = (input: SignUpValidateType) => {
  for (let key in input)
    if (input[key as keyof SignUpValidateType].isValid === false) return false;
  return true;
};
