const express=require('express');
const cors=require('cors');
const path = require('path');
const puppeteer = require('puppeteer');

const app=express();

app.use(express.json());
app.use(cors());

app.post('/create-pdf', async(req, res) => {
    const pdf=await createPDF(req.body.name);
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	res.send(pdf)
});

app.listen(8000, () => {
    console.log(`server connected at ${8000}`)
  });

async function createPDF (name){
    const queryParams=[];
    queryParams.push(encodeURIComponent('name')+'='+encodeURIComponent(name));

    const queryString=queryParams.join('&');
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto("http://localhost:3000/report?"+queryString, {waitUntil: 'networkidle2'});
      const pdf = await page.pdf({ printBackground:true, format: 'A4',pageRanges:'1-2'  });
      await browser.close();
      return pdf;
    }