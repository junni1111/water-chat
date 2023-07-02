import { RefreshType, SignInInputType, SignUpInputType } from '@/types/sign';
import { postPublicApi } from '@/apis/publicApi';
import { postAuthApi } from '@/apis/authApi';

/**
 * 회원가입
 * @param email 이메일
 * @param name 이름
 * @param password 비밀번호
 * @param phoneNumber 핸드폰
 * @returns 가입 성공
 */
export const signUp = async (props: SignUpInputType) => {
  const response = await postPublicApi<null, SignUpInputType>('/signUp', props);

  return response;
};

/**
 * 로그인
 * @param email 이메일
 * @param password 비밀번호
 * @returns 성공 시 JWT 액세스 토큰 인계, 실패 시 에러 객체 반환
 */
export const signIn = async (props: SignInInputType) => {
  const response = await postAuthApi<null, SignInInputType>('/signIn', props);

  return response;
};

/**
 * 로그아웃
 * @returns 성공 시 header 비움
 */
export const signOut = async () => {
  const response = await postAuthApi<null, null>('/signOut');

  return response;
};

/**
 * 토큰 재발급
 * @returns 성공 시
 */
export const refreshToken = async () => {
  try {
    const response = await postAuthApi<RefreshType, null>('/reissue');
  } catch (error) {}
};
