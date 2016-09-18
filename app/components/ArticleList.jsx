var React = require('react');
var Article = require('Article');

var articleList = [
    { avatar: "https://placebear.com/100/100", title: "Nulla consequat massa quis enim", subtitle: "Donec pede justo, fringilla vel ",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        video: "https://www.youtube.com/embed/R4UvORkbQ0o",
        author: "Anurag Akkiraju" },
    { avatar: "https://placebear.com/g/100/100", title: "Nullam accumsan lorem in dui", subtitle: "Tempus non, auctor et, hendrerit quis, nisi. ",
        text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        video: "https://www.youtube.com/embed/R4UvORkbQ0o",
        author: "Anurag Akkiraju" }
];

var ArticleList = React.createClass({
    render: function() {
        var articles = articleList.map(function(article, i) {
            return (
                    <div>
                        <Article avatar={ article.avatar } title={ article.title }
                            subtitle={ article.subtitle } text={ article.text }
                            video={article.video}
                            author={ article.author }
                            id={ 'id_' + i } />
                        <hr></hr>
                    </div>
            );
        });

        return (
            <div>
                <h1 className="text-center" >WAHS Feed</h1>
                <hr></hr>
                <ul className="article-list">
                    { articles }
                </ul>
            </div>
        )
    }
});

module.exports = ArticleList;