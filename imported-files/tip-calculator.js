const bill = Number(prompt()); /* The prompt has to be inside of the number 
declaration because by default the prompt produces a string. This forces the prompt to produce a number value */

if(bill <= 9){
    console.log(`Tip not worth it; don't bother leaving one 😅... 
or just leave one I dont care.🤷‍♂️`);
} else{
    const tip = 
    bill > 600 && bill <= 1500 ? bill * .28 : 
    bill > 300 && bill <= 600 ? bill * .2  : 
    bill >= 50 && bill <= 300 ? bill * .15 : 
    bill < 50 && bill >= 10 ? bill * .09 : 
    0;

    const tpRnd = Math.round(tip * 100) / 100; /* This is to round the tip calculation; "tpRnd" is shortened for tip rounded. */

    console.log(`Bill: $${bill}`);
    console.log(`Tip: $${tpRnd}`);
    console.log(`Total: $${bill + tpRnd}`);
}
