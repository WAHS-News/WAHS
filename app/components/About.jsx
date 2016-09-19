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
                <span>WAHS NEWS is one of the most successful high school news groups in the U.S, named best Daily Taped Morning Show in the Nation.</span>
                <p className="text-center page-title">
                    This is a Web Application/Site built for WAHS News/American Heritage School. Built by Anurag Akkiraju(11th grade).
                </p>

                <br></br>
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
                    <br></br>
                    <li className="text-center page-title">
                        <img src="/assets/jquery_logo.png" alt="jQuery_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="https://jquery.com/">jQuery</a> - I used
                        jQuery to asynchronously load frameworks as well as for DOM changes.
                    </li>
                    <br></br>
                    <li className="text-center page-title">
                        <img src="/assets/nodejs_logo.png" alt="nodejs_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="https://nodejs.org/en/">Node</a> - I used
                        Node.js to deploy my website to external servers and to route between pages.
                    </li>
                    <br></br>
                    <li className="text-center page-title">
                        <a href="http://foundation.zurb.com/">
                            <img src="/assets/foundation_logo.png" alt="foundation_logo"  height="40" width="40"/>
                        </a>
                        &nbsp;
                        <img src="/assets/sass_logo.svg" alt="sass_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="http://sass-lang.com/">Sass w/ Foundation framework</a> - I used
                        SASS/SCSS w/ Foundation Framework to style my page.
                    </li>
                    <br></br>
                    <li className="text-center page-title">
                        <img src="/assets/heroku_logo.png" alt="heroku_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="https://www.heroku.com/">Heroku</a> - I used
                        Heroku to host the website and deploy code to.
                    </li>
                    <br></br>
                    <li className="text-center page-title">
                        <img src="/assets/github_logo.svg" alt="github_logo" height="40" width="40" />
                        &nbsp;
                        &nbsp;
                        <a href="https://github.com/MaskedBandit1/WAHS">Github</a> - I used
                        Github for Version Control and Code Storage.
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = About;
