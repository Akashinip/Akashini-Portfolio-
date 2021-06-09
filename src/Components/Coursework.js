import React from 'react'

const Coursework = () => {
    return (
       <div className="coursework">
           <h1 className="py-5">
               <div className="container">
                   <div className ="row">
                       <div className=".col-md-3.col-sm-6">
                           <div className="box">
                               <h3> Web Design</h3>
                               <p> Focus on the Design</p>
                           </div>
                       </div>
                       {/*-*/}
                       <div className=".col-md-3.col-sm-6">
                           <div className="box">
                               <h3> Web Development</h3>
                               <p> Website build with new proven technology</p>
                           </div>
                       </div>
                       {/* - */}
                       <div className=".col-md-3.col-sm-6">
                           <div className="box">
                               <h3> Promo</h3>
                           </div>
                       </div>
                   </div>
               </div>
           </h1>
       </div>
    )
}

export default Coursework
