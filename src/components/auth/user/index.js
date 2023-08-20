'use client'
import { useState } from "react"

import PhonePic from '../../../app/images/phone.png'
import GoogleLink from '../../../app/images/googleplay.png'
import MicrosoftLink from '../../../app/images/microsoft.png'
import Image from "next/image"

export default function UserLogin (){
    const [step, setStep] = useState(1)

    return(
        <section className="login-page flex jc-c">

            {step === 1 &&
            <div className="card-phone">
                <Image src={PhonePic}/>
            </div>}
            {step === 1 &&
            <div className="card">
                <div className="container-bordered flex-cl ai-c">
                    <h1 className="insta-title login-title">Instagram</h1>
                    <div>
                        <form className="login-form flex-cl ai-c" action="">
                            <div className="flex-cl ai-c">
                                <input className="login-input" placeholder="Телефон, имя пользователя или эл. адрес"/>
                                <input className="login-input" placeholder="Пароль"/>
                                <button className="login-button">Войти</button>
                                <span className="m-t-b-10">ИЛИ</span>
                                <div className="login-facebook flex jc-c ai-c m-t-b-10">
                                    <span className="fb-icon-small"></span>
                                    <span>Войти через Facebook</span>
                                </div>
                            </div>
                            <a href="">Забыли пароль?</a>
                        </form>
                    </div>
                </div>
                <div className="card-register container-bordered flex jc-c p-t-b-10 m-b-10">
                    <p>У вас еще нет аккаунта? <a href="" onClick={(event)=>{event.preventDefault(); setStep(2);}}>Зарегистрироваться</a></p>
                </div>
                <div className="login-download flex-cl ai-c">
                    <span className="m-t-b-10">Установите приложение</span>
                    <div className="flex jc-c m-t-b-10">
                        <a className="m-r-10" href=""><Image src={GoogleLink}/></a>
                        <a href=""><Image src={MicrosoftLink}/></a>
                    </div>
                </div>
            </div>}
        {step === 2 &&
        <div className="card">
            <div className="container-bordered flex-cl ai-c">
                <h1 className="insta-title">Instagram</h1>
                <h2 className="text-a-c">Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h2>
                <div>
                    <form className="login-form flex-cl ai-c m-l-r-20" action="">
                        <button className="login-facebook-button">
                            <div className="flex jc-c ai-c m-t-b-10">
                                <span className="fb-icon-small"></span>
                                <span>Войти через Facebook</span>
                            </div>
                        </button>
                        <div className="flex-cl ai-c">
                            <span className="m-t-b-10">ИЛИ</span>
                            <input className="login-input" placeholder="Моб. телефон или эл. адрес"/>
                            <input className="login-input" placeholder="Имя и Фамилия"/>
                            <input className="login-input" placeholder="Имя пользователя"/>
                            <input className="login-input" placeholder="Пароль"/>
                            <p className="text-a-c">Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a href="">Подробнее</a></p>
                            <p className="text-a-c">Регистрируясь, вы принимаете наши <a href="">Условия, Политику конфиденциальности</a> и <a href="">Политику в отношении файлов cookie.</a></p>
                            <button className="login-button">Войти</button>
                        </div>
                        <a href="">Забыли пароль?</a>
                    </form>
                </div>
            </div>
            <div className="container-bordered">
                <p className="text-a-c">Есть аккаунт? <a href="" onClick={(event)=>{event.preventDefault(); setStep(1);}}>Вход</a></p>
            </div>
            <div className="login-download flex-cl ai-c">
                <span className="m-t-b-10">Установите приложение</span>
                <div className="flex jc-c m-t-b-10">
                    <a className="m-r-10" href=""><Image src={GoogleLink}/></a>
                    <a href=""><Image src={MicrosoftLink}/></a>
                </div>
            </div>
        </div>}
        </section>
    )
}