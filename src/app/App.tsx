import React, {Component, Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

const App = ()=> {

    const {theme} = useTheme()
    return (
        <div className= {classNames('app', {hovered: true, selected: false}, [theme,  ])}>

            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default App;