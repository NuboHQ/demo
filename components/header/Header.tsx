import React, { FC } from 'react';
import Logo from '@/components/logo/Logo';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  return (
    <header className={classNames('p-10 md:p-14', className)}>
      <Logo />
    </header>
  );
};

export default Header;
