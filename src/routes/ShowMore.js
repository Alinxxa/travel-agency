import img1 from './img/турция.jpg'
import img2 from './img/оаэ.jpg'
import img5 from './img/мальдивы.jpg'

function ShowMore(){
    return(
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


        </div>
     )
}

export default ShowMore;