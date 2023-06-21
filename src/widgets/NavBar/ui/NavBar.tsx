import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import AppLink from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavBarProps {
    className?: string
}
const NavBar = ({className}: NavBarProps) => {

    return (
        <div className={classNames(cls.Navbar)}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}>Home</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>

        </div>
    );
};

export default NavBar;
