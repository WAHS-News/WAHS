var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var NewsModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'News Story'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        story: React.PropTypes.string.isRequired,
        source: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var {title, story,source} = this.props;
        var modalMarkup = (
            <div id="news-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <div class="flex-video">
                    <iframe width="200" height="200" src={source} frameborder="0"></iframe>
                </div>
                <p>{story}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#news-modal'));
        modal.open();
    },
    render: function () {
        return (
            <div>
            </div>
        );
    }
});

module.exports = NewsModal;