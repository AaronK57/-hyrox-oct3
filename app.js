const RACE_DATE = new Date('2026-10-03T09:00:00');
const STORAGE_KEY = 'hyrox-oct3-race-build-v1';
const ROXFIT_URL = 'https://go.roxfit.app/';

const sessions = [
  {date:'2026-09-10', type:'Recovery', intensity:'easy', title:'Recovery + mobility', intro:'Absorb the baseline session. No fitness to prove today.', items:['25–30 min very easy bike or jog','10–15 min mobility: calves, hips, T-spine','Optional easy walk later']},
  {date:'2026-09-11', type:'Run', intensity:'hard', title:'1 km running quality', intro:'Make race pace feel cheap by running faster while fresh.', items:['Warm-up 12–15 min + drills','5 × 1 km @ 4:05–4:10/km','90 sec easy recovery between reps','Cool down 10 min']},
  {date:'2026-09-12', type:'Strength', intensity:'hard', title:'Race-load stations', intro:'Technique first. Get familiar with the exact loads.', items:['Sled push 4 × 12.5 m @ 152 kg','Sled pull 4 × 12.5 m @ 103–115 kg','Farmers 4 × 50 m @ 2 × 24/25 kg','Lunges 4 × 20 m @ 20 kg','Wall balls 4 × 10 @ 6 kg']},
  {date:'2026-09-13', type:'Aerobic', intensity:'easy', title:'Easy aerobic + strides', intro:'Build aerobic volume without leaving fatigue behind.', items:['35–40 min conversational running','Finish 4 × 15 sec relaxed strides','Full recovery between strides']},
  {date:'2026-09-14', type:'Rest', intensity:'rest', title:'Full rest', intro:'Rest is part of the build.', items:['No hard training','Walk and mobility only if you want']},
  {date:'2026-09-15', type:'HYROX', intensity:'hard', title:'Compromised running #1', intro:'First proper race-specific running session.', items:['6 × 1 km @ 4:15–4:25/km','After rep 1: ~250 m Ski','After rep 2: 25 m sled push @ race load','After rep 3: 25 m sled pull @ race load','After rep 4: 20 m burpee broad jumps','After rep 5: ~250 m Row','After rep 6: 40 m lunges @ 20 kg']},
  {date:'2026-09-16', type:'Easy', intensity:'easy', title:'Easy + maintenance', intro:'Keep the system moving, not tired.', items:['25–30 min easy aerobic','Light upper body + core','No hard leg work']},
  {date:'2026-09-17', type:'Partner', intensity:'hard', title:'Partner handover practice', intro:'Your quickest gains can come from clean splitting and zero indecision.', items:['35–45 min together','Test Ski / Row changeover lengths','Practise sled handovers','Test wall-ball set sizes','Agree communication cues for race day']},
  {date:'2026-09-18', type:'Recovery', intensity:'rest', title:'Off / very easy', intro:'Freshen up before the key rehearsal.', items:['Rest, or max 20–25 min very easy','Mobility only']},
  {date:'2026-09-19', type:'Simulation', intensity:'hard', title:'FULL RACE REHEARSAL', intro:'Key session. Correct weights, planned partner split, about 90% effort.', items:['8 × 1 km + all 8 HYROX stations','Correct Mixed Doubles loads','Use planned partner split','Target ~1:06–1:09 without emptying the tank','Log every run and station split in ROXFIT']},
  {date:'2026-09-20', type:'Recovery', intensity:'rest', title:'Recovery', intro:'Nothing heroic.', items:['Walk, easy cycle or swim','No hard running or leg work']},
  {date:'2026-09-21', type:'Easy', intensity:'easy', title:'Easy run', intro:'Reset the legs.', items:['30 min easy running','Optional light mobility']},
  {date:'2026-09-22', type:'Run', intensity:'hard', title:'1 km running quality', intro:'Raise the ceiling again while fresh.', items:['Warm-up 12–15 min','5 × 1 km @ 4:00–4:08/km','2 min easy recovery','Cool down 10 min']},
  {date:'2026-09-23', type:'Strength', intensity:'hard', title:'Race-load strength', intro:'Keep specificity high but cut the volume.', items:['Sled push/pull at race load','20 kg lunges','24/25 kg farmers','~60–70% of Sep 12 total volume','Stop before technique degrades']},
  {date:'2026-09-24', type:'Aerobic', intensity:'easy', title:'Easy aerobic', intro:'Keep the aerobic system ticking.', items:['30–35 min easy','Relaxed mobility afterwards']},
  {date:'2026-09-25', type:'HYROX', intensity:'hard', title:'Compromised running #2', intro:'Race pace under fatigue, but leave one rep in the tank.', items:['4 × 1 km @ 4:12–4:20/km','Between reps use race-specific sled push, burpees, farmers and lunges','Fast transitions','Finish feeling capable of another round']},
  {date:'2026-09-26', type:'Rest', intensity:'rest', title:'Full rest', intro:'No need to force another session.', items:['Rest','Easy walk optional']},
  {date:'2026-09-27', type:'Partner', intensity:'hard', title:'Partner dress rehearsal', intro:'Last substantial partner session. Execution > fatigue.', items:['50–60% of a full HYROX','Race pace and race weights','Exact partner splits','Exact handover language','Practise opening pace discipline']},
  {date:'2026-09-28', type:'Recovery', intensity:'easy', title:'Recovery aerobic', intro:'Start removing fatigue.', items:['25–30 min very easy','Mobility']},
  {date:'2026-09-29', type:'Sharpen', intensity:'hard', title:'Sharpen', intro:'Short and quick. Finish wanting more.', items:['4 × 600 m @ ~4:00/km pace','2 min recovery','2–3 small sets wall balls / lunges / Ski','No grinding reps']},
  {date:'2026-09-30', type:'Rest', intensity:'rest', title:'OFF', intro:'Taper properly.', items:['No training required']},
  {date:'2026-10-01', type:'Shakeout', intensity:'easy', title:'Shakeout', intro:'Feel fast, not tired.', items:['20 min easy','4 × 20 sec relaxed strides','Optional few wall balls','Finish fresh']},
  {date:'2026-10-02', type:'Rest', intensity:'rest', title:'Race eve', intro:'Nothing that can create soreness.', items:['Walk + light mobility','Normal fluids and carbs','Kit and race plan ready','Early night']},
  {date:'2026-10-03', type:'RACE', intensity:'hard', title:'HYROX MIXED DOUBLES', intro:'Execute. Do not chase your partner on the runs.', items:['Run target: 4:15–4:25/km average','Target finish: 1:03–1:05','Stretch: sub-1:03','Fast, decisive partner handovers','Start controlled — race from the middle']},
];

const raceSplit = [
  ['SkiErg','You ~40–50%'],['Sled Push','You ~65–75%'],['Sled Pull','You ~65–75%'],['Burpees','~50/50'],['Row','You ~40–50%'],['Farmers','You ~65–75%'],['Lunges','You ~60–70%'],['Wall Balls','Split for zero stoppage']
];

const defaultData = {
  completed: {},
  results: [{
    id:'baseline-20260909', date:'2026-09-09', session:'Half HYROX baseline', totalTime:'30:22', runPace:'4:30', pushKg:115, pullKg:115, farmersKg:25, lungesKg:10, rpe:'', roxfitLink:'', notes:'First go. Lost time arranging sled pull. 4 km total running at 2:15 per 500 m.'
  }]
};

let data = loadData();

function loadData(){
  try { return {...defaultData, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')}; }
  catch { return structuredClone(defaultData); }
}
function saveData(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function dateKey(d=new Date()){ return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function displayDate(key){ return new Date(key+'T12:00:00').toLocaleDateString(undefined,{weekday:'short',day:'numeric',month:'short'}); }
function mmssToSeconds(v){ if(!v || !/^\d{1,2}:\d{2}$/.test(v.trim())) return null; const [m,s]=v.split(':').map(Number); return m*60+s; }
function secondsToPace(v){ if(v==null) return '—'; const m=Math.floor(v/60), s=Math.round(v%60); return `${m}:${String(s).padStart(2,'0')}`; }
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800); }

function getTodaySession(){
  const today=dateKey();
  return sessions.find(s=>s.date===today) || sessions.find(s=>s.date>today) || sessions[sessions.length-1];
}
function getNextSession(current){ return sessions.find(s=>s.date>current.date); }
function roxfitPrompt(session){
  return `Build this HYROX workout for me:\n${session.title}\n${session.items.map((x,i)=>`${i+1}. ${x}`).join('\n')}\nKeep the order exactly as written.`;
}
async function copyToRoxfit(session){
  try { await navigator.clipboard.writeText(roxfitPrompt(session)); toast('Workout copied — opening ROXFIT'); }
  catch { toast('Opening ROXFIT'); }
  setTimeout(()=>window.open(ROXFIT_URL,'_blank'),250);
}

function renderDashboard(){
  const s=getTodaySession();
  document.getElementById('todayTitle').textContent=`${displayDate(s.date)} · ${s.title}`;
  document.getElementById('todayType').textContent=s.type;
  document.getElementById('todayIntro').textContent=s.intro;
  document.getElementById('todayWorkout').innerHTML=s.items.map((x,i)=>`<div class="workout-line"><div class="num">${i+1}</div><div><strong>${x}</strong></div></div>`).join('');
  const next=getNextSession(s);
  document.getElementById('nextTitle').textContent=next?`${displayDate(next.date)} · ${next.title}`:'Race day';
  document.getElementById('nextDetails').textContent=next?next.intro:'Execute the plan.';
  document.getElementById('completeTodayBtn').onclick=()=>{ switchView('logView'); document.getElementById('logDate').value=s.date; document.getElementById('logSession').value=s.date; };
  document.getElementById('roxfitTodayBtn').onclick=()=>copyToRoxfit(s);
}

function renderPlan(){
  const today=dateKey();
  document.getElementById('planList').innerHTML=sessions.map(s=>{
    const done=!!data.completed[s.date];
    return `<div class="plan-item ${s.date===today?'today':''}">
      <div class="plan-date">${new Date(s.date+'T12:00:00').toLocaleDateString(undefined,{day:'numeric',month:'short'})}<small>${new Date(s.date+'T12:00:00').toLocaleDateString(undefined,{weekday:'short'})}</small></div>
      <div class="plan-body"><strong>${s.title}</strong><p>${s.items.join(' · ')}</p></div>
      <button class="status-btn ${done?'done':''}" data-date="${s.date}">${done?'✓ Done':'Mark done'}</button>
    </div>`;
  }).join('');
  document.querySelectorAll('.status-btn').forEach(btn=>btn.onclick=()=>{
    const d=btn.dataset.date; data.completed[d]=!data.completed[d]; saveData(); renderPlan(); renderProgress();
  });
}

function populateForm(){
  const sel=document.getElementById('logSession');
  sel.innerHTML=`<option value="custom">Custom / other</option>`+sessions.map(s=>`<option value="${s.date}">${displayDate(s.date)} — ${s.title}</option>`).join('');
  const s=getTodaySession(); document.getElementById('logDate').value=s.date; sel.value=s.date;
}

function renderRace(){
  document.getElementById('raceSplit').innerHTML=raceSplit.map(([name,val])=>`<div class="split-row"><span>${name}</span><strong>${val}</strong></div>`).join('');
}

function latestNumeric(field){
  const vals=[...data.results].filter(r=>Number(r[field])>0).sort((a,b)=>a.date.localeCompare(b.date));
  return vals.length?Number(vals[vals.length-1][field]):null;
}
function renderProgress(){
  const completed=Object.values(data.completed).filter(Boolean).length;
  const paceVals=data.results.map(r=>mmssToSeconds(r.runPace)).filter(v=>v!=null);
  const bestPace=paceVals.length?Math.min(...paceVals):null;
  const fullSims=data.results.filter(r=>/full|simulation|race/i.test(r.session||'') && r.totalTime).length;
  const raceSpecific=Math.round(((Math.min(latestNumeric('pushKg')||0,152)/152 + Math.min(latestNumeric('lungesKg')||0,20)/20)/2)*100);
  document.getElementById('metricGrid').innerHTML=`
    <div class="metric"><span>SESSIONS DONE</span><strong>${completed}</strong><small>of ${sessions.length}</small></div>
    <div class="metric"><span>BEST RUN PACE</span><strong>${secondsToPace(bestPace)}</strong><small>per km</small></div>
    <div class="metric"><span>RACE LOAD</span><strong>${raceSpecific}%</strong><small>push + lunges</small></div>
    <div class="metric"><span>SIMS LOGGED</span><strong>${fullSims}</strong><small>incl. baseline</small></div>`;
  drawPaceChart();
  const loads=[['Sled push',latestNumeric('pushKg')||0,152,'kg'],['Sled pull',latestNumeric('pullKg')||0,103,'kg'],['Farmers',latestNumeric('farmersKg')||0,24,'kg'],['Lunges',latestNumeric('lungesKg')||0,20,'kg']];
  document.getElementById('loadBars').innerHTML=loads.map(([n,v,t,u])=>`<div class="load-row"><div class="load-name">${n}</div><div class="bar"><i style="width:${Math.min(100,(v/t)*100)}%"></i></div><div class="load-val">${v}${u}</div></div>`).join('');
  const hist=[...data.results].sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById('historyList').innerHTML=hist.length?hist.map(r=>`<div class="history-item"><div><strong>${new Date(r.date+'T12:00:00').toLocaleDateString(undefined,{day:'numeric',month:'short'})}</strong><small>${r.totalTime||''}</small></div><div><strong>${r.session||'Session'}</strong><small>${r.runPace?`Run ${r.runPace}/km · `:''}${r.notes||''}</small></div><div>${r.roxfitLink?`<a href="${r.roxfitLink}" target="_blank" rel="noopener">ROXFIT ↗</a>`:''}</div></div>`).join(''):'<div class="muted">No results yet.</div>';
}

function drawPaceChart(){
  const canvas=document.getElementById('paceChart'); if(!canvas) return;
  const dpr=window.devicePixelRatio||1; const w=canvas.clientWidth||700, h=220; canvas.width=w*dpr; canvas.height=h*dpr; const c=canvas.getContext('2d'); c.scale(dpr,dpr); c.clearRect(0,0,w,h);
  const pts=data.results.filter(r=>mmssToSeconds(r.runPace)!=null).sort((a,b)=>a.date.localeCompare(b.date));
  c.font='12px system-ui'; c.fillStyle='#8f9aa6';
  if(pts.length<1){c.fillText('Log run pace to build this chart.',12,24);return;}
  const vals=pts.map(r=>mmssToSeconds(r.runPace)); const min=Math.min(...vals,240)-10, max=Math.max(...vals,280)+10; const pad={l:42,r:14,t:18,b:30};
  c.strokeStyle='#262e37'; c.lineWidth=1; for(let i=0;i<4;i++){const y=pad.t+(h-pad.t-pad.b)*(i/3);c.beginPath();c.moveTo(pad.l,y);c.lineTo(w-pad.r,y);c.stroke(); const sec=Math.round(max-(max-min)*(i/3));c.fillText(secondsToPace(sec),3,y+4)}
  const x=i=>pts.length===1?(pad.l+w-pad.r)/2:pad.l+(w-pad.l-pad.r)*(i/(pts.length-1)); const y=v=>pad.t+(h-pad.t-pad.b)*((max-v)/(max-min));
  c.strokeStyle='#d9ff43';c.lineWidth=3;c.beginPath();pts.forEach((r,i)=>{const xx=x(i),yy=y(vals[i]);i?c.lineTo(xx,yy):c.moveTo(xx,yy)});c.stroke();
  c.fillStyle='#d9ff43';pts.forEach((r,i)=>{c.beginPath();c.arc(x(i),y(vals[i]),4,0,Math.PI*2);c.fill()});
  c.fillStyle='#8f9aa6'; pts.forEach((r,i)=>{if(i===0||i===pts.length-1){c.fillText(new Date(r.date+'T12:00:00').toLocaleDateString(undefined,{day:'numeric',month:'short'}),Math.max(0,x(i)-18),h-7)}});
}

function updateCountdown(){
  const now=new Date(); const diff=RACE_DATE-now;
  if(diff<=0){document.getElementById('countdown').innerHTML='RACE <small>DAY</small>';document.getElementById('countdownSub').textContent='Go execute.';return;}
  const days=Math.floor(diff/86400000); const hrs=Math.floor((diff%86400000)/3600000);
  document.getElementById('countdown').innerHTML=`${days}<small>days</small>`;
  document.getElementById('countdownSub').textContent=`${hrs} hours into the next day · Saturday, 3 October`;
}

function switchView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  if(id==='progressView') setTimeout(drawPaceChart,50);
  window.scrollTo({top:0,behavior:'smooth'});
}

document.querySelectorAll('.nav-btn').forEach(b=>b.onclick=()=>switchView(b.dataset.view));
document.getElementById('openRoxfitBtn').onclick=()=>window.open(ROXFIT_URL,'_blank');
document.getElementById('resultForm').addEventListener('submit',e=>{
  e.preventDefault();
  const sv=document.getElementById('logSession').value; const s=sessions.find(x=>x.date===sv);
  const result={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),date:document.getElementById('logDate').value,session:s?s.title:'Custom session',totalTime:document.getElementById('totalTime').value.trim(),runPace:document.getElementById('runPace').value.trim(),pushKg:Number(document.getElementById('pushKg').value)||'',pullKg:Number(document.getElementById('pullKg').value)||'',farmersKg:Number(document.getElementById('farmersKg').value)||'',lungesKg:Number(document.getElementById('lungesKg').value)||'',rpe:document.getElementById('rpe').value,roxfitLink:document.getElementById('roxfitLink').value.trim(),notes:document.getElementById('notes').value.trim()};
  data.results.push(result); if(s) data.completed[s.date]=true; saveData(); renderPlan(); renderProgress(); toast('Result saved'); switchView('progressView'); e.target.reset(); populateForm();
});
document.getElementById('exportBtn').onclick=()=>{
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='hyrox-oct3-progress.json';a.click();URL.revokeObjectURL(a.href);toast('Progress exported');
};

renderDashboard(); renderPlan(); populateForm(); renderRace(); renderProgress(); updateCountdown(); setInterval(updateCountdown,60000);
window.addEventListener('resize',()=>{if(document.getElementById('progressView').classList.contains('active')) drawPaceChart()});
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
