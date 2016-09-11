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
                </div>
                <div className="right-col large-10 columns">
                    <h1>{ this.props.title }</h1>
                    <h2>{ this.props.subtitle }</h2>
                    <p>{ this.props.text }</p>
                    <div>
                        <img src={ this.props.firstImage }
                             className="thumbnail" alt="thumbnail_image" />
                        <img src={ this.props.secondImage }
                             className="thumbnail" alt="thumbnail_image" />
                    </div>
                    <p> By: { this.props.author}</p>
                </div>
            </div>
        );
    }
});

module.exports = Article;