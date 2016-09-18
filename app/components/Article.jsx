var React = require('react');

var Article = React.createClass({
    render: function() {
        var key = 'id_' + this.props.id;
        return (
            <div className="row article">
                <div className="left-col large-2 columns">
                    <figure>
                        <img src={ this.props.avatar } className="avatar-image"
                             alt="avatar_picture" />
                    </figure>
                    <h6> By: { this.props.author}</h6>
                </div>
                <div className="right-col large-10 columns">
                    <h2>{ this.props.title }</h2>
                    <hr></hr>
                    <div className="center">
                        <iframe width="800" height="450" src={this.props.video} frameborder="0" allowfullscreen></iframe>
                    </div>
                    <hr></hr>
                    &nbsp;
                    <strong>{ this.props.subtitle }</strong>
                    <span>{ this.props.text }</span>
                </div>
            </div>
        );
    }
});

module.exports = Article;