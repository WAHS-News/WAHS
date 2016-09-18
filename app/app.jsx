var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var VideoPage = require('VideoPage');
var About = require('About');
var Crew = require('Crew');
var ArticleList  = require("ArticleList");
var Playground = require("Playground");

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="crew" component={Crew}/>
            <Route path="playground" component={Playground}/>
            <IndexRoute component={ArticleList}/>

        </Route>
    </Router>,
    document.getElementById('app')
);
