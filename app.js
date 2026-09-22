const products = [
  {
    "id": "semaglutide",
    "name": "Semaglutide",
    "molecule": "GLP–1",
    "category": "Fat loss",
    "format": "Injectable / Demo listing",
    "status": "Approved Rx products exist",
    "price": 99,
    "desc": "GLP-1 receptor agonist used in prescription weight-management products.",
    "detail": "Semaglutide is the active ingredient in prescription products including Wegovy. Approval applies to particular finished medicines and indications, not every vial sold under the ingredient name. This fictional listing is not Wegovy, an approved generic, or a compounded prescription. Clinical screening and a licensed prescribing and dispensing pathway would be needed for a real medicine service.",
    "source": "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss"
  },
  {
    "id": "tirzepatide",
    "name": "Tirzepatide",
    "molecule": "GIP + GLP–1",
    "category": "Fat loss",
    "format": "Injectable / Demo listing",
    "status": "Approved Rx products exist",
    "price": 129,
    "desc": "Dual GIP/GLP-1 receptor agonist used in prescription weight-management products.",
    "detail": "Tirzepatide is the active ingredient in prescription products including Zepbound. The existence of an approved branded medicine does not approve this fictional vial or an online research product. Suitability depends on a clinician reviewing the approved indication, contraindications, and medical history. No medicine is dispensed here.",
    "source": "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss"
  },
  {
    "id": "retatrutide",
    "name": "Retatrutide",
    "molecule": "Triple agonist",
    "category": "Fat loss",
    "format": "Investigational / Demo listing",
    "status": "Investigational · Not FDA-approved",
    "price": 149,
    "desc": "A triple-receptor agonist investigated in obesity clinical trials.",
    "detail": "Retatrutide targets GIP, GLP-1, and glucagon receptors. A phase 2 randomized trial reported weight reduction, but trial results are not approval to sell it for human use. FDA states that retatrutide is not a component of an approved drug. This is a fictional catalog entry, not an available treatment.",
    "source": "https://pubmed.ncbi.nlm.nih.gov/37366315/"
  },
  {
    "id": "tesamorelin",
    "name": "Tesamorelin",
    "molecule": "GHRH",
    "category": "Fat loss",
    "format": "Injectable / Demo listing",
    "status": "Specific Rx indication only",
    "price": 119,
    "desc": "A prescription peptide with a specific HIV-associated lipodystrophy indication.",
    "detail": "Egrifta (tesamorelin) is indicated to reduce excess abdominal fat in adults with HIV-associated lipodystrophy. Its label says it is not indicated for weight-loss management and describes a weight-neutral effect. It should not be presented as a general fat-loss or bodybuilding drug. This fictional listing is not an Egrifta product.",
    "source": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf"
  },
  {
    "id": "cjc1295",
    "name": "CJC-1295",
    "molecule": "CJC–1295",
    "category": "Muscle & GH",
    "format": "Experimental / Demo listing",
    "status": "Experimental · Benefit unproven",
    "price": 69,
    "desc": "Growth-hormone signaling research; muscle-gain benefits are not established.",
    "detail": "CJC-1295 has been studied for effects on growth hormone and IGF-1. Increased hormone measurements do not establish improved muscle size, strength, or athletic performance. FDA identifies limited clinical data and reports of increased heart rate and systemic vasodilatory reactions. Names such as CJC-1295 with or without DAC can refer to different products and should not be treated as interchangeable.",
    "source": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
  },
  {
    "id": "ipamorelin",
    "name": "Ipamorelin",
    "molecule": "GHS",
    "category": "Muscle & GH",
    "format": "Experimental / Demo listing",
    "status": "Experimental · Benefit unproven",
    "price": 59,
    "desc": "A growth-hormone secretagogue discussed in muscle and recovery marketing.",
    "detail": "Ipamorelin stimulates growth-hormone release, but that does not establish safe muscle-gain or recovery benefits. FDA identifies immune-reaction and impurity concerns, and insufficient safety information for certain injectable routes. It also cites serious events in an intravenous gastric-motility study; that evidence should not be generalized into a safe self-injection protocol.",
    "source": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
  },
  {
    "id": "aod9604",
    "name": "AOD-9604",
    "molecule": "AOD–9604",
    "category": "Fat loss",
    "format": "Experimental / Demo listing",
    "status": "Experimental · Benefit unproven",
    "price": 64,
    "desc": "A peptide often marketed for fat loss, with major evidence and safety gaps.",
    "detail": "Marketing interest is not proof of clinically meaningful fat loss. FDA identifies limited safety information, potential immune reactions, and difficulties with peptide impurities and characterization. No fat-loss outcome is promised and no injectable product is supplied by this demo.",
    "source": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
  },
  {
    "id": "bpc157",
    "name": "BPC-157",
    "molecule": "BPC–157",
    "category": "Recovery",
    "format": "Experimental / Demo listing",
    "status": "Experimental · Benefit unproven",
    "price": 54,
    "desc": "A research peptide discussed for tissue repair; human evidence is limited.",
    "detail": "BPC-157 is commonly promoted for recovery, but reliable human safety and efficacy data remain limited. FDA notes possible immune reactions, peptide impurities, and inadequate safety information for proposed administration routes. This entry does not claim injury healing or recommend human use.",
    "source": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
  },
  {
    "id": "tb500",
    "name": "TB-500",
    "molecule": "Tβ4 fragment",
    "category": "Recovery",
    "format": "Experimental / Demo listing",
    "status": "Experimental · Identity matters",
    "price": 64,
    "desc": "A name used for thymosin-related research products; identity needs verification.",
    "detail": "TB-500 labeling is not always precise. A thymosin beta-4 fragment must not be assumed to be the same as full-length thymosin beta-4 studied elsewhere. FDA identifies missing human-exposure data and possible immune-reaction risks for the LKKTETQ fragment. No recovery or muscle-building benefit is established for this fictional listing.",
    "source": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
  },
  {
    "id": "motsc",
    "name": "MOTS-c",
    "molecule": "MOTS–c",
    "category": "Metabolic research",
    "format": "Experimental / Demo listing",
    "status": "Experimental · Benefit unproven",
    "price": 79,
    "desc": "A mitochondria-derived peptide discussed in metabolic research.",
    "detail": "Interest in metabolic mechanisms does not establish safe weight loss or exercise-performance benefits in humans. FDA identifies insufficient human-exposure and safety information for drug products containing MOTS-c. This is an educational demo listing, not a treatment recommendation.",
    "source": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
  }
];
const bag=new Map();let toastTimer;const $=s=>document.querySelector(s);const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
function specimen(p,i){return `<span class="category"><span>${p.category.toUpperCase()} / CONCEPT</span><span>${String(i+1).padStart(2,'0')}</span></span><span class="molecule">${p.molecule}</span><span class="sub">${p.format.toUpperCase()}</span>`}
function renderProducts(filter='all'){const list=products.filter(p=>filter==='all'||p.category===filter);$('#products').innerHTML=list.map(p=>{const i=products.indexOf(p);return `<article class="product"><button class="specimen tone-${i}" data-detail="${p.id}" aria-label="View ${p.name}">${specimen(p,i)}</button><div class="product-line"><h3>${p.name}</h3><span class="price">${money(p.price)}<small>demo price</small></span></div><div class="approval-status">${p.status}</div><p>${p.desc}</p><div class="product-actions"><button class="text-button" data-detail="${p.id}">View peptide</button><button class="add" data-add="${p.id}" aria-label="Add ${p.name} to demo bag">+</button></div></article>`}).join('');$('#result-count').textContent=`${list.length} products`}
function notify(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2500)}
function add(id){const p=products.find(x=>x.id===id);if(!p)throw new Error('Unknown product');bag.set(id,(bag.get(id)||0)+1);renderBag();notify(`${p.name} added to demo bag`);return {product:id,quantity:bag.get(id),demo:true}}
function renderBag(){const count=[...bag.values()].reduce((a,b)=>a+b,0);$('#bag-count').textContent=count;$('#bag-items').innerHTML=count?[...bag].map(([id,q])=>{const p=products.find(x=>x.id===id);return `<div class="bag-row"><div><strong>${p.name}</strong><div class="quantity"><button data-quantity="${id}" data-delta="-1" aria-label="Decrease ${p.name} quantity">−</button><span>${q}</span><button data-quantity="${id}" data-delta="1" aria-label="Increase ${p.name} quantity">+</button></div></div><span>${money(q*p.price)}</span></div>`}).join(''):'<p>Your demo bag is empty. Explore the collection to add a concept product.</p>';const total=[...bag].reduce((n,[id,q])=>n+products.find(p=>p.id===id).price*q,0);$('#bag-summary').innerHTML=count?`<div class="total"><span>Sample subtotal</span><strong>${money(total)}</strong></div><p class="small">Illustrative USD prices. Shipping and tax are not calculated.</p><button class="button" id="checkout">Try demo checkout</button><p class="small">No payment details needed. No order will be placed.</p>`:'<button class="button" data-close>Continue exploring</button>'}
function detail(id){const p=products.find(x=>x.id===id);if(!p)return;const i=products.indexOf(p);$('#product-detail').innerHTML=`<p class="eyebrow">PEPTIDE PROFILE / ${String(i+1).padStart(2,'0')}</p><h2 id="detail-title">${p.name}</h2><div class="specimen tone-${i}">${specimen(p,i)}</div><div class="approval-status">${p.status}</div><p>${p.detail}</p>${p.source?`<p><a href="${p.source}" target="_blank" rel="noopener">Read the source ↗</a></p>`:''}<p class="notice">Demo listing only. No injectable product is available. ${money(p.price)} is a sample price, not a market quote.</p><button class="button" data-add="${p.id}">Add to demo bag — ${money(p.price)}</button>`;$('#product-dialog').showModal()}
document.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;if(button.dataset.detail)detail(button.dataset.detail);if(button.dataset.add)add(button.dataset.add);if(button.hasAttribute('data-close'))button.closest('dialog').close();if(button.dataset.filter){document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});renderProducts(button.dataset.filter)}if(button.id==='open-bag'){renderBag();$('#bag-dialog').showModal()}if(button.dataset.quantity){const id=button.dataset.quantity;const q=(bag.get(id)||0)+Number(button.dataset.delta);if(q<=0)bag.delete(id);else bag.set(id,q);renderBag()}if(button.id==='checkout'){$('#bag-summary').innerHTML='<div class="notice" role="status"><strong>Demo complete.</strong><br>This is where secure checkout would begin. No payment was taken and no order was created.</div><button class="text-button" id="back-bag">Back to your bag</button>'}if(button.id==='back-bag')renderBag()});
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));renderProducts();renderBag();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'add_demo_products_to_bag',description:'Stage concept products in the demo bag. Does not place an order or take payment.',inputSchema:{type:'object',properties:{productIds:{type:'array',items:{type:'string',enum:products.map(p=>p.id)},minItems:1,maxItems:20}},required:['productIds'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||Object.keys(input).some(k=>k!=='productIds')||!Array.isArray(input.productIds)||input.productIds.length<1||input.productIds.length>20||input.productIds.some(id=>!products.some(p=>p.id===id)))throw new Error('Provide 1–20 valid product IDs');const result=input.productIds.map(add);return {demo:true,items:result}}})).catch(()=>{})}catch{}}
