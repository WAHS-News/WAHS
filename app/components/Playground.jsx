/**
 * Created by Anurag Akkiraju on 8/28/16.
 */
var React = require('react');


var Playground = React.createClass({
    render: function(){
        return(
            <div>
                <textarea rows="45" cols="25" placeholder="Have fun and type in whatever you want..."></textarea>
            </div>
        );
    }
});

module.exports = Playground;
