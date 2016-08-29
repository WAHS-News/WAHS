/**
 * Created by Anurag Akkiraju on 8/28/16.
 */
var React = require('react');


var Crew = React.createClass({
    render: function(){
        return(
            <div className="media-object stack-for-small">
                <div className="media-object-section">
                    <div className="thumbnail">
                        <img src='https://googledrive.com/host/0B4j84GV7_geaZEtfdFMyWjhPaHM/AnuragPic.jpg' height="200" width="200"></img>
                    </div>
                </div>
                <div className="media-object-section">
                    <h4>Anurag Akkiraju.</h4>
                    <p>Anurag Akkiraju is the creator of this website and he is the webmaster/dev for WAHS News. He is currently a junior and is the lead programmer for an FRC Robotics Team. He enjoys programming and working with his hands.</p>
                </div>
            </div>
        );
    }
});

module.exports = Crew;
