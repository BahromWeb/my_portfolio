import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="images" />
        </div>
        <div className="services-container">
             {
                Services_Data.map((services, index) => {
                    return (
                        <div className="services-format">
                            <img src={item.img} alt="img" />
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    )
                })
             }
        </div>
    </div>
  )
}

export default Services
