// Puppeteer-extra é o substituto do puppeteer, ele permite utilizar plugins enquanto fazemos o scraping, como por exemplo, ativar o AdBlock.
// Você pode usar versões mais simples, como o próprio puppeteer, usando o chromium, ou o puppeteer-core, utilizando um navegador padrão.
const puppeteer = require("puppeteer-extra");

// O StealthPlugin é um plugin do próprio Puppeteer, para previnir que sejamos detectados e o scraping seja barrado.
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// O ReadlineSync permite que seja feito perguntas no terminal, abrindo mais possibilidades para o scraping.
const readlineSync = require("readline-sync");

// O dotenv permite utilizar variáveis de ambiente, protegendo possiveis dados sensiveis dentro do seu script.
require("dotenv").config();

// O ReplaceAll permite trocar espaços vazios por hifens, o que facilita na hora de usar o readlinesync e fazer pesquisas no web scraping, visto que url não tem espaçamentos.
const replaceAll = require("string.prototype.replaceall");
replaceAll.shim();

let siteURL = `google.com.br`;

async function bot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(siteURL);

  await browser.close();
}

bot();

/* 
Para pegar elementos na página:

const nomeCidade = await page.evaluate(() => {
    return document.querySelectorAll("h1")[1].textContent
})
*/