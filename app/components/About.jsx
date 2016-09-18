/**
 * Created by Anurag Akkiraju on 8/28/16.
 */
var React = require('react');


var About = React.createClass({
    render: function(){
        return(
            <div>
                <h1 className="text-center page-title">About</h1>
                <hr></hr>
                <p className="text-center page-title">
                    This is a Web Application/Site built for WAHS News/American Heritage School. Built by Anurag Akkiraju.
                </p>
                <br></br>
                <p className="text-center page-title">
                    Here are some of the cutting edge tools and frameworks used in the development of this site:
                </p>
                <ul className="text-center page-title">
                    <li className="text-center page-title">
                        <img src="/assets/react_logo.svg" alt="react_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="https://facebook.github.io/react">React</a> - This was the
                        JavaScript framework used. Made by Facebook, it is one of the hottest new web technologies in existence.
                    </li>
                    <li className="text-center page-title">
                        <img src="/assets/jQuery_logo.png" alt="jQuery_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="https://jquery.com/">jQuery</a> - I used
                        jQuery to asynchronously load frameworks as well as for DOM changes.
                    </li>
                    <li className="text-center page-title">
                        <img src="/assets/nodejs_logo.png" alt="nodejs_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="https://nodejs.org/en/">Node</a> - I used
                        Node.js to deploy my website to external servers and to route between pages.
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = About;
