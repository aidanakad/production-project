import React, {Component, Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";

const App = ()=> {

    const {theme} = useTheme()
    return (
        <div className= {classNames('app', {hovered: true, selected: false}, [theme,  ])}>

            <NavBar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>

        </div>
    );
}

export default App;