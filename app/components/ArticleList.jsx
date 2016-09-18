var React = require('react');
var Article = require('Article');

var articleList = [
    { avatar: "/assets/wahs_logo.png", title: "WAHS Introduction Sequence", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/Z53t4xdtbtE",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "WAHS News -The Office- Introduction Sequence", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/isoB6RAuqsM",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Music Adventures Band Camp (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/qFUjnJQHaqE",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Wood Mill Lab (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/X7SqjKJrT9w",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Hitting All the Right Notes (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/aIZ2F3zz7fE",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Bar B Ranch (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/6_ECz4u13MQ",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Teacher Talks (Short Film)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/U2PqmtJsOu4",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Fall (Man on the Street)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/1wbeCvSimyE",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Golfing for Autism (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/FgxdcDRtg3M",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Moto Max (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/AT2w_FOYSDM",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Serving Her Way to Success (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/Y9JXIBt-o44",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Alexander Baikovitz (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/SRo5UU_WPek",
        author: "WAHS News" },
    { avatar: "/assets/wahs_logo.png", title: "Nullam accumsan lorem in dui", subtitle: "Tempus non, auctor et, hendrerit quis, nisi. ",
        text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        video: "https://www.youtube.com/embed/R4UvORkbQ0o",
        author: "WAHS News" }
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