/**
 * Created by Anurag Akkiraju on 8/28/16.
 */

var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    render:function(){
        return(
            <div>
                <Nav />

                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;

/*<img src="/assets/banner_large2.jpg" className="wahs-banner-image" width="3000px" height="100px"></img>*/