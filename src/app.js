import express from "express"
import cors from 'cors'

/* Configs Fundamentais */
const app = express();
const PORT = 5000;
app.use(cors());
const log = console.log;
app.use(express.json());


/* Objetos e funções: */

const UserList = [

]

const TweetList = [

]

function validação(val1, val2){
    let String = "";
    if (!val1 || !val2) {
        return(true)
    } else if (typeof(val1) !== typeof(String) ||  typeof(val2) !== typeof(String) ) {
        return (true)
    } else {
        return(false);
    }
}


/* Rotas */
/*Gets */
app.get('/tweets', (req,res) => {
    let Tweets = [];
    for (let i = 0; i < TweetList.length; i++) {

        let username = TweetList[i].username;
        let tweet = TweetList[i].tweet;
        let avatar = UserList.find(element => element.username === username).avatar;

        let objetoTweet = {username, avatar, tweet};
        Tweets.push(objetoTweet);
    }
    res.send(Tweets.slice(-10, Tweets.length))
})

app.get('/users', (req,res) => {
    res.send(UserList);
})
app.get('/tweets/:username', (req,res) => {
    let Tweets = [];
    let user = req.params.username
    for (let i = 0; i < TweetList.length; i++) {
        if (TweetList[i].username === user) {
            let username = TweetList[i].username;
            let tweet = TweetList[i].tweet;
            let avatar = UserList.find(element => element.username === username).avatar;
            let objetoTweet = {username, avatar, tweet};
            Tweets.push(objetoTweet);
        }
    }
    res.send(Tweets)
})


/* Posts */
app.post('/sign-up', (req, res) => {
    let body = req.body;

    if (validação(body.username,body.avatar)) {
        return res.status(400).send('Todos os campos são obrigatórios!')
    }

    UserList.push(body)
	res.status(201).send("OK")
});

app.post('/tweets', (req, res) => {
    let body = req.body;

    let users = [];
    for (let i = 0; i < UserList.length; i++) {
        users.push(UserList[i].username)
    }

    if (validação(body.username,body.tweet)) {
        return res.status(400).send('Todos os campos são obrigatórios!')
    }
    if (!users.includes(body.username)) {
        return res.status(401).send('UNAUTHORIZED');
    }

    TweetList.push(body);
    res.status(201).send("OK")
});


/* Listen!! */
app.listen(PORT, () => log(`Servidor rodando na porta ${PORT}`))