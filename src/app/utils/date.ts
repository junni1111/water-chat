/**
 * 백엔드 날짜 데이터를 보기 편한값으로 변경
 * @param dateString 백엔드 날짜 데이터
 * @returns ex) 2023-05-11 일요일
 */
export const getDate = (dateString: string) => {
  const date = new Date(dateString);

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const formattedDate = `${dateString.slice(0, 10)} ${dayOfWeek}요일`;

  return formattedDate;
};

interface Person {
  name: string;
}

interface Lifespan {
  birth: number;
  death: number;
}
type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "kim",
  birth: 1,
  death: 2,
};

type K = Person & Lifespan;

function getKey<K extends string>(key: string) {}
const a = 1;
const b = 2;
getKey(a + b > 3 ? "a" : "c");
