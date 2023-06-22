import express from "express"
import cors from 'cors'

/* Configs Fundamentais */
const app = express();
const PORT = 5000;
app.use(cors());
const log = console.log;


/* Objetos: */

const UserList = [
    {
        username: 'bobesponja', 
        avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
    },
    {
        username: 'Vinni_Evangelista', 
        avatar: "https://pbs.twimg.com/media/FDo4mQQVEAIcWh6.jpg" 
    }
]

const TweetList = [
    {
        username: "bobesponja",
        tweet: "Eu amo hambúrguer de siri!"
    },
    {
        username: "Vinni_Evangelista",
        tweet: "Será se esse negócio vai prestar???"
    }
]


/* Rotas */
app.get('/tweets', (req,res) => {
    let Tweets = [];
    for (let i = 0; i < TweetList.length; i++) {

        let username = TweetList[i].username;
        let tweet = TweetList[i].tweet;
        let avatar = UserList.find(element => element.username === username).avatar;

        let objetoTweet = {username, avatar, tweet};
        Tweets.push(objetoTweet);
    }
    res.send(Tweets)
})

app.get('/:name', (req, res) => {
	const name = req.params.name;

    res.send('Hello ' + name); 
});

/* Listen!! */
app.listen(PORT, () => log(`Servidor rodando na porta ${PORT}`))