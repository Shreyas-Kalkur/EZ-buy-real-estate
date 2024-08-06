import React from 'react'
import Slider from '../../components/slider/Slider'
import { singlePostData, userData } from '../../lib/data'
import Map from '../../components/map/Map'
import './singlePage.scss'

function SinglePage() {
    return (
        <div className='singlePage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">
                                    ${singlePostData.price}
                                </div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt="" />
                                <span>
                                    {userData.name}
                                </span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>

            </div>
            <div className="features">
                <div className="wrapper">
                    <p className='title'>General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utility</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet policy</span>
                                <p>Pets are allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Property fee</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Room Sizes</p>
                    <div className="sizes">
                        <img src="/size.png" alt="" />
                        <span>80 sq.metre</span>
                    </div>
                    <div className="sizes">
                        <img src="/bed.png" alt="" />
                        <span>2 bedrooms</span>
                    </div>
                    <div className="sizes">
                        <img src="/bath.png" alt="" />
                        <span>1 bathroom</span>
                    </div>
                    <p className='title'>Nearby places</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featureText">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />Send a message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />Save the place
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage