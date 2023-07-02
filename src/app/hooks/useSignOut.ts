import { useMutation } from '@tanstack/react-query';

import { signOut } from '@/services/user';
import { queryKeys } from '@/react-query/constants';

/**
 * 로그아웃 hook
 * @returns 로그아웃 핸들러 반환
 */
export const useSignOut = () => {
  const { mutate } = useMutation(queryKeys.user, signOut, {
    onError: () => {},
    onSuccess: () => {},
  });

  const handleSignOut = () => {
    mutate();
  };

  return { handleSignOut };
};
