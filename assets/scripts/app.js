/*
Ik maak gebruik van de geek joke api van de onderstaande link
https://github.com/sameerkumar18/geek-joke-api
 */
const quoteApiUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';
const QuoteNumberGenOptions = 1000;
const quoteHeader = document.getElementById('quote-header')
const quoteBody = document.getElementById('quote-body');
const getNewQuoteBtn = document.getElementById('btn-get-new-quote');
getNewQuoteBtn.addEventListener('click', getNewQuote);

getNewQuote();

function getNewQuote() {
    fetch(quoteApiUrl)
        .then((response) => response.json())
        .then((quote) => {
            setNewQuote(generateRandomQuoteId(), quote.joke);
            //setNewQuote(generateRandomQuoteId(), loremIpsum)
        })
}

function setNewQuote(newQuoteHeader, newQuoteBody) {
    quoteHeader.textContent = newQuoteHeader;
    quoteBody.textContent = newQuoteBody;
}

function generateRandomQuoteId() {
    return parseInt((Math.random() * QuoteNumberGenOptions).toString());
}

const loremIpsum = 'Dicta at quam quod ipsam cupiditate. Quia nobis qui excepturi explicabo. Minima sapiente tempora mollitia velit rerum hic.\n' +
    '\n' +
    'Aut voluptatem possimus eius ipsum dignissimos rerum libero consequuntur. Sint fuga dignissimos deleniti. Earum perferendis suscipit qui. Eveniet eum consequatur adipisci consequatur corporis et eum. Omnis enim voluptatem molestiae commodi mollitia. Nostrum laboriosam et assumenda aliquid placeat dolore et voluptate.\n' +
    '\n' +
    'Optio distinctio velit et sed voluptatem. Quod itaque ut quas veniam autem qui. Natus voluptas earum nesciunt quia.\n' +
    '\n' +
    'Iste aut repellat pariatur. Dolores est recusandae qui aut sit est. Hic velit quia ea iure et. Et qui at aut autem non tempore tempore quia. Unde sit minus placeat nihil nulla eos.\n' +
    '\n' +
    'Sed temporibus deserunt illo quam dolores. Reprehenderit veniam aperiam nesciunt ipsam sed facere ratione sit. Cum minus repellendus tenetur. Molestiae voluptates delectus ex esse repellendus. Et rerum et perferendis ratione.\n' +
    '\n' +
    'Consequuntur qui eos minima nobis. Vero voluptas non est ut. Impedit pariatur voluptas fugiat sed rerum facere mollitia illo. Perferendis excepturi aut numquam dicta. Omnis velit tempore eius aut.\n' +
    '\n' +
    'Recusandae et sed cum rerum. Expedita quisquam deleniti ut quo doloremque deserunt hic. Vel facilis sapiente deserunt libero earum nihil praesentium ut. Culpa officiis laborum suscipit fuga ut et omnis id. Sed tenetur accusantium quidem illo minima rerum hic voluptates. Magni maxime sint ex laborum qui hic qui maxime.\n' +
    '\n' +
    'Dolor illum quia qui. Sint libero cum quia et aut. Totam et voluptatem maiores temporibus pariatur ratione. Qui recusandae sunt molestias vitae aperiam explicabo soluta architecto.\n' +
    '\n' +
    'Eaque et qui blanditiis ut unde doloribus qui eos. Debitis consequatur quibusdam ut a earum. Quia inventore ut quasi eum. Qui esse deleniti optio et cupiditate rerum sequi accusantium.\n' +
    '\n' +
    'Fugit explicabo minima quidem qui facilis architecto mollitia eaque. Quas consequuntur facilis et eos facere culpa. Impedit nemo cupiditate eos sunt praesentium harum.';