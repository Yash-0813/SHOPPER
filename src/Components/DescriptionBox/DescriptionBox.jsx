import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    An Ecommerce website is an online platform that facilitates
                    buying and selling of products or services over the internet
                    serves as a virtual marketplace where bussinesses and individual
                    showcase their products ,interact with customers , and conduct
                    transactions without the need for a physical presence.
                </p>

                <p>
                    E-commerce websited typcially display products or services and
                    detailed description , images ,prices and any available various
                    (e.g - sizes , colors).Each product usually has its own with relevant
                    information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox