import React from "react";
import './Box.css'

import arrowRight from '../../assets/icons/arrowRight.svg'
import shina from  '../../assets/img/shina.svg'
import disc from '../../assets/img/disc.svg'
import fara from '../../assets/img/fara.svg'
import zapchas from '../../assets/img/zapchas.svg'

const Box = () => {
    return(
        <div className="boxs">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="boxs-box">
                                    <img src={shina}  alt="" className="boxs-box-img"/>
                                      <div className="ml-50">
                                        <div className="boxs-box-text">
                                           <span> Шины</span>
                                            <img  className="ml-10" src={arrowRight} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="boxs-box">
                                    <img src={disc}  alt="" className="boxs-box-img"/>
                                      <div className="ml-50">
                                        <div className="boxs-box-text">
                                           <span> Диски</span>
                                            <img  className="ml-10" src={arrowRight} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-6">
                            <div className="boxs-box big">
                                      <div>
                                        <div className="boxs-box-text">
                                           <span> Запчасти</span>
                                            <img  className="ml-10" src={arrowRight} alt="" />
                                        </div>
                                    </div>
                                    <img src={zapchas}  alt="" className="boxs-box-img"/>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="boxs-box big">
                                      <div>
                                        <div className="boxs-box-text">
                                           <span> Для тюнинига</span>
                                            <img  className="ml-10" src={arrowRight} alt="" />
                                        </div>
                                    </div>
                                    <img src={fara}  alt="" className="boxs-box-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Box