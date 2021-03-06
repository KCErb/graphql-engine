const config = {
	"gatsby": {
		"pathPrefix": "/graphql/android",
		"siteUrl": "https://learn.hasura.io",
		"gaTrackingId": "UA-59768903-1"
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-android/android-favicon.png",
		"title": "/ graphql / android",
		"githubUrl": "https://github.com/hasura/graphql-engine",
		"helpUrl": "https://discordapp.com/invite/vBPpJkS",
		"tweetText": "Check out this GraphQL course for android developers by @HasuraHQ https://learn.hasura.io/graphql/android",
		"links": [{
			"text": "hasura.io",
			"link": "https://hasura.io"
		}],
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/intro-to-graphql",
    		"/setup",
    		"/apollo-client",
    		"/queries",
    		"/mutations-variables",
    		"/optimistic-update-mutations",
    		"/subscriptions",
    		"/realtime-feed",
    		"/what-next"
    		],
		"links": [
			{
			"text": "Hasura Docs",
			"link": "https://docs.hasura.io"
			},
			{
			"text": "GraphQL Docs",
			"link": "https://graphql.org/learn"
			}
		]
	},
	"siteMetadata": {
		"title": "2 hour GraphQL course for android developers | Hasura",
		"description": "A concise and powerful tutorial that covers fundamental concepts of both GraphQL and using GraphQL in android",
		"ogImage": "https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/twitter-card-android.png",
		"docsLocation": "https://github.com/hasura/graphql-engine/tree/master/community/learn/graphql-tutorials/tutorials/android-apollo/tutorial-site/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-android/android-favicon.png"
	},
};

module.exports = config;
