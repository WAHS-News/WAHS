/**
 * Created by Anurag Akkiraju on 8/28/16.
 */
var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">WAHS News</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Videos</IndexLink>
                        </li>
                        <li>
                            <Link  to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="crew" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Crew</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.handleSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search"></input></li>
                            <li><button type="button" class="button">Search</button></li>
                        </ul>
                    </form>
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
