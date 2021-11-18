import React from 'react';
import Genres from './Genres';
import SideContent from './SideContent';


function Main() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-10 row">
                <div className="col-8">
                    <Genres />
                    {/* Side bar goes here */}
                    
                </div>
                <div className="col-4">
                    <SideContent />
                </div>
            </div>
                
        </div>
    )
}

export default Main
