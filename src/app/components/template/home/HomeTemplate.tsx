import { ChangeEvent } from 'react';

import Input from '@/components/pages/home/input';
import SideBar from '@/components/pages/home/side-bar';
import * as style from './HomeTemplate.style';

interface HomeTemplateProps {
  chatInput: string;
  onHandleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
const HomeTemplate = ({
  chatInput,
  onHandleChangeInput,
}: HomeTemplateProps) => (
  <style.Wrapper>
    <style.Header>헤더</style.Header>
    <style.Box>
      <style.Side>
        <SideBar />
      </style.Side>
      <style.Inner>
        <style.Body>채팅방</style.Body>
        <style.Input>
          <Input input={chatInput} onChange={onHandleChangeInput} />
        </style.Input>
      </style.Inner>
    </style.Box>
  </style.Wrapper>
);

export default HomeTemplate;
