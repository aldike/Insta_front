'use client'

import Image from 'next/image'
export default function Header (){

    return(
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <a>Работодателям</a>
                        <a>Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            Поиск
                        </button>
                        <button className="header-button header-button--green">
                            Создать резюме
                        </button>
                        <button className="header-button">
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}