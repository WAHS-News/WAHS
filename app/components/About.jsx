/**
 * Created by Anurag Akkiraju on 8/28/16.
 */
var React = require('react');


var About = React.createClass({
    render: function(){
        return(
         <div>
            <div className="media-object stack-for-small">
            <div className="media-object-section">
            <div className="thumbnail">
            <img src="/assets/wahs_logo.png" className="wahs-logo-image" height="400" width="400"></img>
            </div>
            </div>
            <div className="media-object-section">
            <h4>WAHS NEWS.</h4>
            <h5>This Website was built by Anurag Akkiraju for WAHS NEWS. It was written in the brand new Web Technologies of React.js, Babel, and SCSS/SASS w/ Foundation framework. The Content is hosted through Youtube. The Website itself was bought through GoDaddy and hosted through Heroku.</h5>
        </div>
        </div>
        </div>
        );
    }
});

module.exports = About;
