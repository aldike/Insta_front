'use client'
import { useState } from "react"

import PhonePic from '../../../app/images/phone.png'
import GoogleLink from '../../../app/images/googleplay.png'
import MicrosoftLink from '../../../app/images/microsoft.png'
import Image from "next/image"

export default function UserLogin (){
    const [step, setStep] = useState(1)

    return(
        <section className="login-page">

            {step === 1 &&
            <div className="card-phone">
                <Image src={PhonePic}/>
            </div>}
            {step === 1 &&
            <div className="card">
                <div>
                    <h1>Instagram</h1>
                    <div>
                        <form className="login-form" action="">
                            <div>
                                <input className="login-input" placeholder="Телефон, имя пользователя или эл. адрес"/>
                                <input className="login-input" placeholder="Пароль"/>
                                <button className="login-button">Войти</button>
                                <span>ИЛИ</span>
                                <div className="login-facebook">
                                    <span></span>
                                    <span>Войти через Facebook</span>
                                </div>
                            </div>
                            <a href="">Забыли пароль?</a>
                        </form>
                    </div>
                </div>
                <div>
                    <p>У вас еще нет аккаунта? <a href="" onClick={(event)=>{event.preventDefault(); setStep(2);}}>Зарегистрироваться</a></p>
                </div>
                <div className="login-download">
                    <span>Установите приложение</span>
                    <div>
                        <a href=""><Image src={GoogleLink}/></a>
                        <a href=""><Image src={MicrosoftLink}/></a>
                    </div>
                </div>
            </div>}
        {step === 2 &&
        <div className="card">
            <div>
                <h1>Instagram</h1>
                <h2>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h2>
                <div>
                    <form className="login-form" action="">
                        <button className="login-button">
                            <div className="login-facebook">
                                <span></span>
                                <span>Войти через Facebook</span>
                            </div>
                        </button>
                        <div>
                            <span>ИЛИ</span>
                            <input className="login-input" placeholder="Моб. телефон или эл. адрес"/>
                            <input className="login-input" placeholder="Имя и Фамилия"/>
                            <input className="login-input" placeholder="Имя пользователя"/>
                            <input className="login-input" placeholder="Пароль"/>
                            <p>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a href="">Подробнее</a></p>
                            <p>Регистрируясь, вы принимаете наши <a href="">Условия, Политику конфиденциальности</a> и <a href="">Политику в отношении файлов cookie.</a></p>
                            <button className="login-button">Войти</button>
                        </div>
                        <a href="">Забыли пароль?</a>
                    </form>
                </div>
            </div>
            <div>
                <p>Есть аккаунт? <a href="" onClick={(event)=>{event.preventDefault(); setStep(1);}}>Вход</a></p>
            </div>
            <div className="login-download">
                <span>Установите приложение</span>
                <div>
                    <a href=""><Image src={GoogleLink}/></a>
                    <a href=""><Image src={MicrosoftLink}/></a>
                </div>
            </div>
        </div>}
        </section>
    )
}