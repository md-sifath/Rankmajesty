import React from 'react';
import './Card.css';

const Card = ({title,value,img}) => {
    return (
        <div>
                <div className='card'>
                   <div className='card-body'>
                   <div className='row align-items-center'>
                        <div className='col'>
                             <h6 className="text-uppercase text-muted mb-2">{title}</h6>
                            <span className='h2 mb-0'>{value}</span>
                        </div>
                        <div className='col-auto'>
                            <span>
                            <img className='h2 text-muted' src={img} alt="..."></img>
                            </span>
                        </div>
                    </div>
                   </div>
                </div>
        </div>
    );
};

export default Card;