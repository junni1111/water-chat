import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { signIn } from '@/services/user';
import { SignInInputType } from '@/types/sign';
import { CustomAxiosErrorType } from '@/types/api';
import { queryKeys } from '@/react-query/constants';

/**
 * 로그인 페이지에 필요한 훅
 * @returns 로그인 페이지에 필요한 로직들 { 로그인 input 값, input 값 변경 핸들러, 로그인 요청 핸들러}
 */
export const useSignIn = () => {
  const [signInValue, setSignInValue] = useState<SignInInputType>({
    email: '',
    password: '',
  });

  const { mutate } = useMutation(queryKeys.user, signIn, {
    onError: (error: CustomAxiosErrorType) => {},
    onSuccess() {},
  });

  const handleSignInValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = () => {
    mutate(signInValue);
  };

  return { signInValue, handleSignInValue, handleSignIn };
};
