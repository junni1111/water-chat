import StyledComponentsRegistry from './registry';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
