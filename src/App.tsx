import React, {Component, Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {HomePageAsync} from "./pages/HomePage/HomePage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";
const App = ()=> {

    const {theme, toggleTheme} = useTheme()
    return (
        <div className= {classNames('app', {hovered: true, selected: false}, [theme,  ])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;