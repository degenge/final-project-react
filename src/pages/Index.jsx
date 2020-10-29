import React from 'react';
import {Link} from "react-router-dom";

export default function Index() {
    return (
        <div className="container-fluid">
        <div className="row no-gutter">
            
            <div className="col-md-6 d-none d-md-flex bg-image"></div>
    
            <div className="col-md-6">
                <div className=" d-flex align-items-center ">
    
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto">
                                <h1>Travel Keep</h1>
                                <p className="mb-4 text-light">With pretty stories for which there’s little good evidence the only home we’ve ever known Flatland another world finite but unbounded ship of the imagination. </p>
                                <Link to ='/Explore' className="btn btn-primary btn-lg rounded-0" >Go to map</Link>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    </div>
    );
}