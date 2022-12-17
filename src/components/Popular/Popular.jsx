import React from "react";
import './Popular.css'
import star from '../../assets/icons/star.svg'
import suny from '../../assets/icons/suny.svg'
import shina from '../../assets/img/shina_disc.svg'
import arrow from '../../assets/icons/arrowRight.svg'

const Popular = () => {
    return(
        <div className="popular">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                <div className="popular-text">Популярные товары</div>
                <div className="popular-link">
                    <span>Смотреть все</span>
                    <img src={arrow} alt="" />
                </div>
                </div>
                
                <div className="row m20">
                    <div className="col-3">
                        <div className="popular-box">
                            <img className="suny" src={suny} alt="" />
                            <div className="popular-box-img">
                            <img src={shina} alt=""  />
                            </div>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <span>4.84</span>
                            </div>
                            <div className="popular-box-price">
                            250 000 сум

                            <span>320 000 сум</span>
                            </div>
                            <div className="popular-box-text">
                            Yokohama BluEarth *Winter V905 205 45 R17 88V 
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="popular-box">
                            <img className="suny" src={suny} alt="" />
                            <div className="popular-box-img">
                            <img src={shina} alt=""  />
                            </div>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <span>4.84</span>
                            </div>
                            <div className="popular-box-price">
                            250 000 сум

                            <span>320 000 сум</span>
                            </div>
                            <div className="popular-box-text">
                            Yokohama BluEarth *Winter V905 205 45 R17 88V 
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="popular-box">
                            <img className="suny" src={suny} alt="" />
                            <div className="popular-box-img">
                            <img src={shina} alt=""  />
                            </div>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <span>4.84</span>
                            </div>
                            <div className="popular-box-price">
                            250 000 сум

                            <span>320 000 сум</span>
                            </div>
                            <div className="popular-box-text">
                            Yokohama BluEarth *Winter V905 205 45 R17 88V 
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="popular-box">
                            <img className="suny" src={suny} alt="" />
                            <div className="popular-box-img">
                            <img src={shina} alt=""  />
                            </div>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <span>4.84</span>
                            </div>
                            <div className="popular-box-price">
                            250 000 сум

                            <span>320 000 сум</span>
                            </div>
                            <div className="popular-box-text">
                            Yokohama BluEarth *Winter V905 205 45 R17 88V 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Popular