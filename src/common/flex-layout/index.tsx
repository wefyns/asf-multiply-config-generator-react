import { ReactNode } from 'react';
import * as Styles from './styles';

interface Props {
  gap?: number;
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  children: ReactNode | JSX.Element[];
}

export const FlexLayout = ({ children, ...props }: Props) => (
  <Styles.Container {...props}>{children}</Styles.Container>
);
