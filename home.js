randomwordGenerator = () => {
    let quotes = ['Believe in yourself', 'You can do it!', 'Hang in there!'];
    quotes = quotes[Math.floor(Math.random() *quotes.length)];
    alert('Inspirational quote of the day: ' + quotes);
}