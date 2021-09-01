import { CallAPI,$$ } from "../../../../until"
import { useState,useEffect } from "react"
const ListCar = () => {
    // const [list, setList]= useState('')

    const listCar =async ()=>{
        return  await CallAPI.list('products');
        
    } 
    useEffect(()=>{
        listCar().then(({data})=>{
            $$('#data-list').innerHTML = data.map(ele=>{
                return `
                <div className="col-md-6 c-1">
                            <div className="img-box">
                            <img src="${ele.photo}" width=453 alt="" />
                            </div>
                            <div className="detail-box">
                            <div className="btn-box">
                                <a href>
                                Book Now
                                </a>
                            </div>
                            <div className="detail_text">
                                <div className="name">
                                <h4>
                                    ${ele.name}
                                </h4>
                                </div>
                                <div className="price">
                                <h4>
                                    <span>
                                    $
                                    </span>
                                    30000.00
                                </h4>
                                </div>
                            </div>
                            </div>
                        </div>
                `
            }).join('');
        })
    },[])
    return (
        <>
            <section className="car_section layout_padding">
                <div className="container">
                <div className="heading_container">
                    <h2>
                    Our Cars
                    </h2>
                    <hr />
                </div>
                <div className="layout_padding">
                    <div className="row" id="data-list">
                        
                    
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href className="see_more-btn">
                    See More
                    </a>
                </div>
                </div>
            </section>
        </>
    )
}

export default ListCar
