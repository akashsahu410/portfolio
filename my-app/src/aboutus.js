import React from 'react';
class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <div id="about">
            <div className="container">
              <div className="section-title text-center center">
                <h2>About Us</h2>
                <hr />
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-6"> <img src="img/about.png" className="img-responsive" alt /> </div>
                <div className="col-xs-12 col-md-6">
                  <div className="about-text">
                    <h3>Lorem ipsum dolor sit amet!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                </div>
        )
    }
}
export default AboutUs;