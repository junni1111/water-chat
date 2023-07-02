import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { signUp } from '@/services/user';
import { queryKeys } from '@/react-query/constants';
import { CustomAxiosErrorType } from '@/types/api';
import { SignUpInputType, SignUpType, SignUpValidateType } from '@/types/sign';
import { validateAll, validateSignUp } from '@/utils/valid';

/**
 * 회원가입 페이지에 필요한 hook
 * @returns 회원가입 페이지에서 필요한 로직들 {회원가입 input값, 회원가입 input값 유효성 검사,
 * 모든 검사 결과, input값 변경 핸들러, 회원가입 요청 핸들러 }
 */
export const useSignUp = () => {
  const [signUpValue, setSignUpValue] = useState<SignUpInputType>({
    email: '',
    name: '',
    password: '',
    phoneNumber: '',
  });
  const [signUpValidate, setSignUpValidate] = useState<SignUpValidateType>({
    email: { isValid: false, message: '' },
    name: { isValid: false, message: '' },
    password: { isValid: false, message: '' },
    phoneNumber: { isValid: false, message: '' },
  });
  const [isSignUpActivate, setIsSignUpActivate] = useState(false);

  const { mutate } = useMutation(queryKeys.user, signUp, {
    onError: (error: CustomAxiosErrorType) => {},
    onSuccess() {},
  });

  const handleSignupState = (e: ChangeEvent<HTMLInputElement>) => {
    const { isValid, message } = validateSignUp(
      e.target.name as SignUpType,
      e.target.value,
    );
    const newValid = {
      ...signUpValidate,
      [e.target.name]: { isValid, message },
    };

    setSignUpValue({
      ...signUpValue,
      [e.target.name]: e.target.value,
    });
    setSignUpValidate(newValid);
    setIsSignUpActivate(validateAll(newValid));
  };

  const handleSignUp = () => {
    mutate(signUpValue);
  };

  return {
    signUpValue,
    signUpValidate,
    isSignUpActivate,
    handleSignupState,
    handleSignUp,
  };
};
