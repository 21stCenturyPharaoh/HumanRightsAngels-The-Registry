<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PHARAOH CONGLOMERATE | Sovereign Intelligence Ecosystem</title>
<style>
:root{--gold:#d4af37;--gold2:#f9e27d;--bg:#070a12;--muted:#9aa3b8}
*{box-sizing:border-box;margin:0;padding:0}body{background:#070a12;color:#eef1f7;font-family:Inter,system-ui,sans-serif;line-height:1.6}
.container{max-width:1280px;margin:0 auto;padding:0 24px}
.hero{text-align:center;padding:90px 0 50px;background:radial-gradient(1000px 500px at 50% -10%, #1a2040, #070a12)}
.logo{width:112px;height:112px;margin:0 auto 16px;border-radius:50%;background:#000 url('logo.png') center/cover;box-shadow:0 0 50px rgba(212,175,55,.5)}
h1{font-size:54px;background:linear-gradient(180deg,#f9e27d,#d4af37);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:.14em;font-weight:900}
h2{color:#f9e27d;letter-spacing:.2em;font-size:15px;margin-bottom:14px;font-weight:600}
.btn{display:inline-block;padding:13px 26px;border-radius:12px;background:linear-gradient(180deg,#f9e27d,#d4af37);color:#0a0a0a;font-weight:900;text-decoration:none;margin:6px;font-size:13px;letter-spacing:.02em}
.btn-o{border:1px solid #d4af37;color:#f9e27d;background:transparent}
.section{padding:70px 0;border-top:1px solid #121a30}
h3{text-align:center;font-size:30px;letter-spacing:.12em}.sub{color:#9aa3b8;text-align:center;font-size:14px;margin-top:8px;max-width:820px;margin-left:auto;margin-right:auto}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-top:28px}
.card{border:1px solid #1f2946;background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.01));border-radius:16px;padding:20px}
.card h4{color:#f9e27d;font-size:11.5px;letter-spacing:.11em;margin-bottom:8px}
.card p{font-size:12.5px;color:#9aa3b8;line-height:1.7}
.video{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:18px;border:1px solid rgba(212,175,55,.4);max-width:920px;margin:26px auto;box-shadow:0 0 60px rgba(212,175,55,.15)}
.video iframe{position:absolute;top:0;left:0;width:100%;height:100%}
.wall{display:grid;grid-template-columns:1.7fr .3fr;gap:14px;margin-top:26px}
@media(max-width:1000px){.wall{grid-template-columns:1fr}}
.main-monitor{position:relative;border:1px solid rgba(212,175,55,.5);border-radius:16px;overflow:hidden;background:#000;aspect-ratio:16/9;box-shadow:0 0 50px rgba(212,175,55,.18)}
.side-stack{display:grid;gap:10px}
.side-monitor{border:1px solid #1f2946;border-radius:10px;overflow:hidden;background:#0d1222;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;font-size:9px;color:#6b7a9a}
.thumb{width:100%;height:160px;border-radius:10px;object-fit:cover;border:1px solid #1f2946;margin-bottom:10px}
.badge-verified{display:inline-block;background:#2bd17e;color:#000;font-size:9px;font-weight:900;padding:3px 8px;border-radius:6px;margin-bottom:8px;letter-spacing:.06em}
.live{position:absolute;top:12px;left:12px;background:#ff1e1e;color:#fff;padding:4px 10px;border-radius:6px;font-size:10px;font-weight:900;letter-spacing:.08em}
</style>
<script src="./micdom-engine.js"></script>
</head>
<body>
<header class="hero"><div class="container">
<div class="logo"></div>
<h1>PHARAOH CONGLOMERATE</h1>
<h2>SOVEREIGN INTELLIGENCE ECOSYSTEM</h2>
<p style="color:#9aa3b8;max-width:780px;margin:0 auto 22px;font-size:17px;line-height:1.7">Direct Provision. Volunteer Mobilization. Stewardship Finance. Governance. Ecological Recovery. Strategic Intelligence. Zero headcount. Global reach. Digital products only.</p>
<a href="/signup.html" class="btn">ENTER THE ENGINE</a>
<a href="#wall" class="btn btn-o">BROADCAST WALL</a>
</div></header>

<section class="section container" id="micdom">
<h3>MICDOM RECORDS — DIGITAL PRODUCT LINE</h3>
<p class="sub">88 AI Music Artists. 1 Label. 1 Genre Ecosystem. Part of Pharaoh Conglomerate Digital Products.</p>
<div class="grid">
<div class="card"><h4>THE VANGUARD — DRILL TRAP KING</h4><p>Team Aleph — First Light, First Strike</p></div>
<div class="card"><h4>THE ORACLE — NEO SOUL QUEEN</h4><p>Lapis Lazuli — Vision Beyond Veil</p></div>
<div class="card"><h4>THE MERCHANT — AFROBEAT MOGUL</h4><p>Citrine — Abundance Flows</p></div>
<div class="card"><h4>THE SEER — CONSCIOUS HIP HOP</h4><p>Sapphire — Wisdom Sees Through</p></div>
</div>
<button class="btn" onclick="exportGlossary()">DOWNLOAD GLOSSARY ASSET v1.0</button>
</section>

<footer style="text-align:center;padding:44px 0;color:#5a647c;font-size:11px;border-top:1px solid #121a30;line-height:1.9">© 2026 Pharaoh Angels Inc dba Pharaoh Conglomerate — Sovereign Intelligence Ecosystem</footer>

<script>
function exportGlossary(){
  const blob = new Blob([JSON.stringify(MICDOM.glossary, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'Micdom_Glossary_v1.0.json';
  a.click();
}
</script>
</body>
</html>