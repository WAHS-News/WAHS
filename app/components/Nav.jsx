/**
 * Created by Anurag Akkiraju on 8/28/16.
 */
var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
    render: function(){
        return(
            <div class="top-bar-container" data-sticky-container>
                <div class="sticky" data-sticky data-options="anchor: page; marginTop: 0; stickyOn: small;">
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="menu" color="black">
                                <li className="nav-logo-image" color="black">
                                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><img src="/assets/wahs_logo.png" height="40" width="40"></img></IndexLink>
                                </li>
                                <li>
                                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Feed</IndexLink>
                                </li>
                                <li>
                                    <Link  to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                                </li>
                                <li>
                                    <Link to="crew" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Crew</Link>
                                </li>
                                <li>
                                    <Link to="playground" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Playground</Link>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>
                                <li>
                                    <div>&nbsp;</div>
                                </li>


                                <li className="twitter">
                                    <a href="https://twitter.com/wahstv">
                                        <img src="/assets/twitter_logo.jpg" alt="twitter_logo" height="40" width="40" />
                                    </a>
                                </li>
                                <li className="facebook">
                                    <a href="https://www.facebook.com/wahsnews">
                                        <img src="/assets/facebook_logo.png" alt="facebook_logo"  height="40" width="40"/>
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a href="https://www.instagram.com/wahs_news/">
                                        <img src="/assets/instagram_logo.png" alt="instagram_logo" height="40" width="40" />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:morningshowahs@gmail.com">
                                        <img src="/assets/gmail_logo.png" alt="gmail_logo" height="40" width="40" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="social-media">

                            </ul>
                            <form onSubmit={this.handleSearch}>
                                <ul className="menu">
                                    <li><input type="search" placeholder="Search"></input></li>
                                    <li><button type="button" class="button" value="search">Search</button></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    handleSearch(event){
        event.preventDefault();
        alert("Not yet");
    }
});

module.exports = Nav;
