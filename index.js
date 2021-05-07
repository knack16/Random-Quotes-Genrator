const quotes=[
    {
        quote:"Change the world by being yourself.",
        auther:"– Amy Poehler"
    },
    {
        quote:"Every moment is a fresh beginning",
        auther:"– T.S Eliot"
    },
    {
        quote:"Never regret anything that made you smile.",
        auther:"– Mark Twain"
    },
    {
        quote:"Die with memories, not dreams",
        auther:"– Unknown"
    },
    {
        quote:"Aspire to inspire before we expire",
        auther:"– Unknown"
    },
    {
        quote:"Everything you can imagine is real",
        auther:"– Pablo Picasso"
    },
    {
        quote:"Simplicity is the ultimate sophistication",
        auther:"Leonardo da Vinci"
    },
    {
        quote:"Whatever you do, do it well",
        auther:"-Walt Disney"
    },
    {
        quote:"What we think, we become",
        auther:"– Buddha"
    },
];
const quoteBtn = document.getElementById("quoBtn");
const quote = document.querySelector(".quote");
const auther = document.querySelector(".auther");

quoteBtn.addEventListener("click",()=>{
    let random=Math.floor(Math.random() * quotes.length);
    
    quote.innerHTML = quotes[random].quote;
    auther.innerHTML = quotes[random].auther; 
});