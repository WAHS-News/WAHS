/**
 * Created by Anurag Akkiraju on 8/28/16.
 */

var React = require('react');
var NewsModal = require('NewsModal');

var Node = require('react-if-comp');


var VideoPage = React.createClass({

    render(){
        return(
            <div>
                <div>
                    <h3 className="text-center"> The WAHS Newsfeed</h3>
                </div>

                <div class="flex-video1">
                    <iframe  width="700" height="700" src="https://www.youtube.com/embed/R4UvORkbQ0o" frameborder="0" allowfullscreen></iframe>
                </div>
                <button type="button" class="modalbutton"><NewsModal title="Crazy ax lunatic roams AHS" story="This is the secret story" source="https://www.youtube.com/embed/R4UvORkbQ0o"/></button>
            </div>
        );
    }
});

module.exports = VideoPage;


/*
  TODO: if - else support for modals
 */
