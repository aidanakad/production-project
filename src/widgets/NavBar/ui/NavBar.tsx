import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}
const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.Navbar)}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLink}>Home</AppLink>
            <AppLink to="/about">About</AppLink>
        </div>

    </div>
);

export default NavBar;
