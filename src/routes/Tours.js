import React from "react";
import { useState } from 'react';
import img1 from './img/турция.jpg'
import img2 from './img/оаэ.jpg'
import img3 from './img/таиланд.jpg'
import img4 from './img/россия2.jpg'
import img5 from './img/мальдивы.jpg'
import img6 from './img/венесуэла.jpg'
import ShowMore from './ShowMore'
import './Tours.css'

function Tours(){
    const [isOpen, setIsOpen]= useState(false);
    const openModel=()=> {setIsOpen(!isOpen)}
    return (
        <div class="latest_work">
        <div class="about_us">
            Лучшие предложения для отдыха
        </div>

        <div class="about_us_text">
        Туристическое агентство Travel предлагает полный комплекс услуг в области туризма:
        </div>

        <div class="latest_buttoms">
            <div class="latest_buttom">
                Море
            </div>
            <div class="latest_buttom">
                Горы
            </div>
            <div class="latest_buttom">
                Круизы
            </div>

        </div>
        

        <div class="latest_cards">

            <div class="latest_card">
            <div className="img1">
                <img src={img1} class="latest_img" alt=""></img>
            </div>
                <div class="latest_text">
                    <div class="latest_text_title">
                        Турция
                        <div class="latest_text_sub">
                            
                        </div>
                    </div>
                </div>

            </div>
            <div class="latest_card">
                <div className="img2">
                    <img src={img2} class="latest_img" alt=""></img>
                </div>
                <div class="latest_text">
                    <div class="latest_text_title">
                        ОАЭ
                        <div class="latest_text_sub">
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="latest_card">
                <div className="img3">
                    <img src={img3} class="latest_img" alt=""></img>
                </div>
                <div class="latest_text">
                    <div class="latest_text_title">
                        Таиланд
                        <div class="latest_text_sub">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="latest_card">
                <div className="img4">
                    <img src={img4} class="latest_img" alt=""></img>
                </div>
                <div class="latest_text">
                    <div class="latest_text_title">
                        Россия
                        <div class="latest_text_sub">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="latest_card">
                <div className="img5">
                    <img src={img5} class="latest_img" alt=""></img>
                </div>
                <div class="latest_text">
                    <div class="latest_text_title">
                        Мальдивы
                        <div class="latest_text_sub">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="latest_card">
                <div className="img6">
                    <img src={img6} class="latest_img" alt=""></img>
                </div>
                <div class="latest_text">
                    <div class="latest_text_title">
                        Венесуэла
                        <div class="latest_text_sub">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="view_all_buttom">
            <button class="buttom_view_all" onClick={openModel}>
                Показать больше
            </button>
            {isOpen && <ShowMore/>}
        </div>

    </div>
    )
}

export default Tours;

