/* ============================================================
   30 Din Mein HTML - Course Data
   Har "day" object me: id, title, explanation (Hindi HTML), code
   ============================================================ */

const courseData = [
{
  id: 1,
  title: "HTML Kya Hai? (Introduction)",
  explanation: `
    <p><strong>HTML</strong> ka pura naam hai <em>HyperText Markup Language</em>. Yeh koi programming language nahi hai, balki ek <strong>markup language</strong> hai jiska kaam hai webpage ka <em>structure</em> (dhaancha) banana - jaise heading kahan hogi, paragraph kahan hoga, image kahan lagegi.</p>
    <p>Har HTML page ek fixed "skeleton" se shuru hota hai:</p>
    <ul>
      <li><code>&lt;!DOCTYPE html&gt;</code> - browser ko batata hai ki yeh HTML5 document hai.</li>
      <li><code>&lt;html&gt;</code> - poore page ka sabse bada container.</li>
      <li><code>&lt;head&gt;</code> - yahan title, meta info hoti hai (screen par directly nahi dikhti).</li>
      <li><code>&lt;body&gt;</code> - yahan jo bhi likhenge, woh screen par dikhega.</li>
    </ul>
    <p>Niche diya code Run karke dekhiye - yeh aapka sabse pehla webpage hai!</p>
  `,
  code:
`<!DOCTYPE html>
<html>
  <head>
    <title>Mera Pehla Webpage</title>
  </head>
  <body>
    <h1>Namaste Duniya!</h1>
    <p>Yeh meri pehli HTML file hai. Main HTML seekh raha/rahi hoon.</p>
  </body>
</html>`
},

{
  id: 2,
  title: "HTML Tags Aur Elements",
  explanation: `
    <p>HTML me sab kuch <strong>tags</strong> se banta hai. Zyadatar tags do parts me aate hain - <em>opening tag</em> jaise <code>&lt;p&gt;</code> aur <em>closing tag</em> jaise <code>&lt;/p&gt;</code>. Tag + uske beech ka content milkar ek <strong>element</strong> banate hain.</p>
    <p>Kuch tags "self-closing" hote hain, matlab unki closing tag nahi hoti - jaise <code>&lt;br&gt;</code> (line break) aur <code>&lt;hr&gt;</code> (horizontal line).</p>
    <p>Tags ke andar extra information bhi de sakte hain, jise <strong>attribute</strong> kehte hain - jaise <code>&lt;p title="hint"&gt;</code>. Attributes hamesha opening tag ke andar likhe jaate hain.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <p>Yeh pehla paragraph hai.</p>
  <p>Yeh doosra paragraph hai.<br>Yahan line break ke baad text hai.</p>
  <hr>
  <p title="Yeh ek hint hai">Mouse hover karke dekhiye (title attribute).</p>
</body>
</html>`
},

{
  id: 3,
  title: "Headings Aur Paragraphs",
  explanation: `
    <p>HTML me 6 level ki headings hoti hain - <code>&lt;h1&gt;</code> se <code>&lt;h6&gt;</code> tak. <code>&lt;h1&gt;</code> sabse important aur sabse badi heading hoti hai, aur <code>&lt;h6&gt;</code> sabse chhoti.</p>
    <p>Headings ka use sirf bada text dikhane ke liye nahi hota - inse page ka <strong>structure</strong> banta hai, jo SEO aur screen-reader users ke liye bahut zaroori hai. Ek page me sirf ek <code>&lt;h1&gt;</code> hona best practice hai.</p>
    <p>Normal text ke liye <code>&lt;p&gt;</code> (paragraph) tag use hota hai.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h1>Yeh H1 Heading Hai</h1>
  <h2>Yeh H2 Heading Hai</h2>
  <h3>Yeh H3 Heading Hai</h3>
  <p>Yeh ek normal paragraph hai jo headings ke neeche likha gaya hai.</p>
  <h6>Yeh sabse chhoti H6 Heading Hai</h6>
</body>
</html>`
},

{
  id: 4,
  title: "Text Formatting Tags",
  explanation: `
    <p>HTML me text ko style dene ke liye kuch special tags hote hain:</p>
    <ul>
      <li><code>&lt;b&gt;</code> / <code>&lt;strong&gt;</code> - bold text (strong matlab important bhi)</li>
      <li><code>&lt;i&gt;</code> / <code>&lt;em&gt;</code> - italic text (em matlab emphasis bhi)</li>
      <li><code>&lt;u&gt;</code> - underline</li>
      <li><code>&lt;mark&gt;</code> - highlight (jaise marker pen)</li>
      <li><code>&lt;small&gt;</code> - chhota text</li>
      <li><code>&lt;del&gt;</code> - cut/strikethrough text</li>
      <li><code>&lt;sub&gt;</code> / <code>&lt;sup&gt;</code> - subscript / superscript (jaise H<sub>2</sub>O ya x<sup>2</sup>)</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <p><b>Yeh bold text hai</b> aur <i>yeh italic text hai</i>.</p>
  <p><strong>Strong tag important text ke liye</strong></p>
  <p><u>Underline text</u> aur <mark>highlight kiya gaya text</mark></p>
  <p><small>Yeh chhota text hai</small> aur <del>yeh kata hua text hai</del></p>
  <p>Water ka formula: H<sub>2</sub>O, aur x ka square: x<sup>2</sup></p>
</body>
</html>`
},

{
  id: 5,
  title: "Links (Anchor Tag)",
  explanation: `
    <p>Webpages ko ek doosre se jodne ke liye <code>&lt;a&gt;</code> (anchor) tag use hota hai. Sabse zaroori attribute hai <code>href</code>, jo batata hai link kahan jaayega.</p>
    <ul>
      <li><code>target="_blank"</code> - link ko naye tab me kholta hai</li>
      <li><code>href="mailto:email@example.com"</code> - email client kholta hai</li>
      <li><code>href="tel:9999999999"</code> - mobile par dialer kholta hai</li>
      <li><code>href="#section"</code> - same page ke kisi section par jump karta hai</li>
    </ul>
    <p>Note: yeh preview sandbox hai, isliye real links yahan navigate nahi karenge, lekin code structure samajhna important hai.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <p><a href="https://example.com" target="_blank">Naye tab me link kholiye</a></p>
  <p><a href="mailto:test@example.com">Email bhejiye</a></p>
  <p><a href="tel:9999999999">Call kariye</a></p>
  <p><a href="#niche">Niche jump kariye</a></p>
  <h2 id="niche">Aap yahan pahunch gaye!</h2>
</body>
</html>`
},

{
  id: 6,
  title: "Images",
  explanation: `
    <p>Image lagane ke liye <code>&lt;img&gt;</code> tag use hota hai. Yeh self-closing tag hai aur zaroori attributes hain:</p>
    <ul>
      <li><code>src</code> - image ka path/URL</li>
      <li><code>alt</code> - agar image load na ho ya screen-reader use ho to dikhne wala text (yeh hamesha dena chahiye!)</li>
      <li><code>width</code> / <code>height</code> - image ka size</li>
    </ul>
    <p>Niche diye code me hum ek simple SVG image bana kar dikha rahe hain, taaki bina internet ke bhi real output dikhe.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h2>Image Example</h2>
  <img
    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='120'><rect width='200' height='120' fill='%234fd1ff'/><text x='20' y='65' font-size='20' fill='white'>HTML Image</text></svg>"
    alt="Ek demo image jisme HTML Image likha hai"
    width="200" height="120">
  <p>Upar di image alt text ke saath hai.</p>
</body>
</html>`
},

{
  id: 7,
  title: "Lists (Ordered & Unordered)",
  explanation: `
    <p>HTML me list banane ke 2 main tareeke hain:</p>
    <ul>
      <li><code>&lt;ul&gt;</code> - <strong>Unordered List</strong> (bullet points), har item <code>&lt;li&gt;</code> me</li>
      <li><code>&lt;ol&gt;</code> - <strong>Ordered List</strong> (numbered list), har item <code>&lt;li&gt;</code> me</li>
    </ul>
    <p>Lists ko <strong>nest</strong> (ek list ke andar doosri list) bhi kar sakte hain - jaise sub-points dikhane ke liye.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h2>Unordered List</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript
      <ul>
        <li>Variables</li>
        <li>Functions</li>
      </ul>
    </li>
  </ul>

  <h2>Ordered List</h2>
  <ol>
    <li>HTML Seekho</li>
    <li>CSS Seekho</li>
    <li>JavaScript Seekho</li>
  </ol>
</body>
</html>`
},

{
  id: 8,
  title: "Tables",
  explanation: `
    <p>Data ko rows aur columns me dikhane ke liye <code>&lt;table&gt;</code> use hota hai:</p>
    <ul>
      <li><code>&lt;tr&gt;</code> - table row</li>
      <li><code>&lt;th&gt;</code> - table header cell (bold, center)</li>
      <li><code>&lt;td&gt;</code> - table data cell (normal cell)</li>
    </ul>
    <p>Border dikhane ke liye CSS (style) ka use karna chahiye, purane <code>border</code> attribute ki jagah.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<head>
<style>
  table, th, td { border: 1px solid #555; padding: 8px; }
</style>
</head>
<body>
  <table>
    <tr>
      <th>Naam</th>
      <th>Subject</th>
      <th>Marks</th>
    </tr>
    <tr>
      <td>Riya</td>
      <td>HTML</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Aman</td>
      <td>CSS</td>
      <td>88</td>
    </tr>
  </table>
</body>
</html>`
},

{
  id: 9,
  title: "Div Aur Span",
  explanation: `
    <p><code>&lt;div&gt;</code> aur <code>&lt;span&gt;</code> dono "generic container" tags hain - inka apna koi visual style nahi hota, inka kaam hai content ko <strong>group</strong> karna taaki CSS/JS se style ya control kiya ja sake.</p>
    <ul>
      <li><code>&lt;div&gt;</code> - <strong>block-level</strong> element (apni ek naye line se shuru hota hai, poori width leta hai)</li>
      <li><code>&lt;span&gt;</code> - <strong>inline</strong> element (line ke beech me hi rehta hai)</li>
    </ul>
    <p>Yeh dono modern web layouts (jaise card, navbar) banane ke liye sabse zyada use hone wale tags hain.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <div style="background:#eee; padding:10px;">
    Yeh ek <strong>div</strong> hai - poori line leta hai.
  </div>
  <p>
    Is paragraph ke andar <span style="color:red;">yeh wala text</span> ek span hai
    jo line ke beech me hi hai.
  </p>
</body>
</html>`
},

{
  id: 10,
  title: "Forms Ki Shuruaat",
  explanation: `
    <p><code>&lt;form&gt;</code> tag user se data lene ke liye use hota hai - jaise login form, contact form.</p>
    <ul>
      <li><code>action</code> - data kahan jaayega (server URL)</li>
      <li><code>method</code> - <code>GET</code> ya <code>POST</code></li>
      <li><code>&lt;label&gt;</code> - input field ka naam/description</li>
      <li><code>&lt;input&gt;</code> - user input lene ka box</li>
    </ul>
    <p><code>&lt;label&gt;</code> ka <code>for</code> attribute input ke <code>id</code> se match hona chahiye - isse label par click karne se bhi input select ho jaata hai.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h2>Simple Form</h2>
  <form>
    <label for="naam">Aapka Naam:</label><br>
    <input type="text" id="naam" name="naam" placeholder="Apna naam likhiye">
    <br><br>
    <button type="submit">Submit Kariye</button>
  </form>
</body>
</html>`
},

{
  id: 11,
  title: "Input Types",
  explanation: `
    <p><code>&lt;input&gt;</code> tag ka <code>type</code> attribute badal kar alag-alag tarah ka input le sakte hain:</p>
    <ul>
      <li><code>text</code> - normal text</li>
      <li><code>email</code> - email format check karta hai</li>
      <li><code>password</code> - text ko dots me chhupata hai</li>
      <li><code>number</code> - sirf numbers</li>
      <li><code>date</code> - calendar date picker</li>
      <li><code>checkbox</code> - multiple options select</li>
      <li><code>radio</code> - ek option select</li>
      <li><code>file</code> - file upload</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <form>
    <input type="text" placeholder="Naam"><br><br>
    <input type="email" placeholder="Email"><br><br>
    <input type="password" placeholder="Password"><br><br>
    <input type="number" placeholder="Age"><br><br>
    <input type="date"><br><br>
    <input type="checkbox"> Mujhe HTML pasand hai<br>
    <input type="radio" name="gender"> Male
    <input type="radio" name="gender"> Female<br><br>
    <input type="file">
  </form>
</body>
</html>`
},

{
  id: 12,
  title: "Select, Textarea Aur Button",
  explanation: `
    <p>Kuch aur important form elements:</p>
    <ul>
      <li><code>&lt;select&gt;</code> + <code>&lt;option&gt;</code> - dropdown menu</li>
      <li><code>&lt;textarea&gt;</code> - multi-line text input (jaise message box)</li>
      <li><code>&lt;button&gt;</code> - clickable button (form submit ke liye ya JS ke saath)</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <form>
    <label>Apna shehar chuniye:</label><br>
    <select>
      <option value="delhi">Delhi</option>
      <option value="mumbai">Mumbai</option>
      <option value="patna">Patna</option>
    </select>
    <br><br>
    <label>Message:</label><br>
    <textarea rows="4" cols="30" placeholder="Apna message likhiye..."></textarea>
    <br><br>
    <button type="button">Normal Button</button>
    <button type="submit">Submit Button</button>
  </form>
</body>
</html>`
},

{
  id: 13,
  title: "Semantic HTML",
  explanation: `
    <p><strong>Semantic tags</strong> wo tags hain jinka naam khud bata deta hai unka kaam kya hai - isse code padhna aasaan hota hai aur SEO/accessibility behtar hoti hai.</p>
    <ul>
      <li><code>&lt;header&gt;</code> - page/section ka top part</li>
      <li><code>&lt;nav&gt;</code> - navigation links</li>
      <li><code>&lt;main&gt;</code> - page ka main content</li>
      <li><code>&lt;section&gt;</code> - content ka logical group</li>
      <li><code>&lt;article&gt;</code> - independent content (jaise blog post)</li>
      <li><code>&lt;aside&gt;</code> - side content</li>
      <li><code>&lt;footer&gt;</code> - page ka bottom part</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>Mera Blog</h1>
    <nav>Home | About | Contact</nav>
  </header>
  <main>
    <article>
      <h2>Pehla Blog Post</h2>
      <p>Yeh ek semantic HTML ka example hai.</p>
    </article>
  </main>
  <footer>
    <p>&copy; 2026 Mera Blog</p>
  </footer>
</body>
</html>`
},

{
  id: 14,
  title: "Audio Aur Video Tags",
  explanation: `
    <p>HTML5 me directly audio/video chalane ke tags milte hain - kisi extra plugin ki zaroorat nahi:</p>
    <ul>
      <li><code>&lt;audio controls&gt;</code> - audio player (play/pause controls ke saath)</li>
      <li><code>&lt;video controls&gt;</code> - video player</li>
      <li><code>&lt;source src="..." type="..."&gt;</code> - file ka path aur type batata hai</li>
    </ul>
    <p>Note: is sandbox preview me real audio/video file load nahi hogi (kyunki koi file upload nahi hai), lekin player ka structure/controls dikh jaayenge.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h2>Audio Player</h2>
  <audio controls>
    <source src="audio-file.mp3" type="audio/mpeg">
    Aapka browser audio support nahi karta.
  </audio>

  <h2>Video Player</h2>
  <video width="300" controls>
    <source src="video-file.mp4" type="video/mp4">
    Aapka browser video support nahi karta.
  </video>
</body>
</html>`
},

{
  id: 15,
  title: "iframe Tag",
  explanation: `
    <p><code>&lt;iframe&gt;</code> ek webpage ke andar doosra webpage (ya content) embed karne ke liye use hota hai - jaise YouTube video, Google Map.</p>
    <ul>
      <li><code>src</code> - kis URL ka content dikhana hai</li>
      <li><code>width</code> / <code>height</code> - size</li>
      <li><code>sandbox</code> - security ke liye restrictions lagata hai</li>
    </ul>
    <p>Security tip: kabhi bhi kisi anjaan/untrusted website ko iframe me load na karein.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h2>iframe Example</h2>
  <iframe
    srcdoc="<h2 style='color:#4fd1ff;font-family:sans-serif'>Main ek alag mini-webpage hoon, iframe ke andar!</h2>"
    width="100%" height="100">
  </iframe>
</body>
</html>`
},

{
  id: 16,
  title: "HTML Entities",
  explanation: `
    <p>HTML me kuch characters special meaning rakhte hain (jaise <code>&lt;</code> aur <code>&gt;</code> tags banate hain), isliye unhe directly text me likhna mushkil hota hai. Iske liye <strong>HTML Entities</strong> use hoti hain:</p>
    <ul>
      <li><code>&amp;lt;</code> → <code>&lt;</code></li>
      <li><code>&amp;gt;</code> → <code>&gt;</code></li>
      <li><code>&amp;amp;</code> → <code>&amp;</code></li>
      <li><code>&amp;nbsp;</code> → ek non-breaking space</li>
      <li><code>&amp;copy;</code> → <code>&copy;</code></li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <p>Agar &lt;p&gt; tag likhna ho text me, to entity use karte hain.</p>
  <p>5 &lt; 10 aur 10 &gt; 5 - dono sahi hain.</p>
  <p>Copyright symbol: &copy; 2026</p>
  <p>Yeh&nbsp;&nbsp;&nbsp;extra spaces&nbsp;&nbsp;&nbsp;hain.</p>
</body>
</html>`
},

{
  id: 17,
  title: "Head Section Aur Meta Tags",
  explanation: `
    <p><code>&lt;head&gt;</code> section me wo information hoti hai jo seedha screen par nahi dikhti, lekin browser/search engine ke liye zaroori hoti hai:</p>
    <ul>
      <li><code>&lt;title&gt;</code> - browser tab me dikhne wala naam</li>
      <li><code>&lt;meta charset="UTF-8"&gt;</code> - character encoding (Hindi/emoji sahi dikhane ke liye zaroori)</li>
      <li><code>&lt;meta name="description"&gt;</code> - search engine result me dikhne wala description</li>
      <li><code>&lt;link rel="stylesheet"&gt;</code> - external CSS file jodne ke liye</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mera Awesome Page</title>
  <meta name="description" content="Yeh HTML seekhne ke liye banaya gaya page hai.">
</head>
<body>
  <h1>Browser tab me title dekhiye!</h1>
  <p>Head section ka content directly page par nahi dikhta.</p>
</body>
</html>`
},

{
  id: 18,
  title: "HTML Comments",
  explanation: `
    <p>Comments code ke andar likhe gaye notes hote hain jo browser par <strong>dikhte nahi</strong> hain - yeh sirf developers ke liye hote hain, jaise code samjhane ke liye ya kisi line ko temporarily disable karne ke liye.</p>
    <p>Syntax: <code>&lt;!-- yahan comment likhein --&gt;</code></p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <!-- Yeh ek comment hai, yeh screen par nahi dikhega -->
  <h1>Yeh heading dikhegi</h1>

  <!-- <p>Yeh paragraph comment ke andar hai, isliye nahi dikhega</p> -->

  <p>Yeh wala paragraph normal hai, isliye dikhega.</p>
</body>
</html>`
},

{
  id: 19,
  title: "Block Vs Inline Elements",
  explanation: `
    <p>HTML elements 2 categories me aate hain:</p>
    <ul>
      <li><strong>Block-level</strong> - apni naye line se shuru hote hain aur poori available width lete hain. Example: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;ul&gt;</code></li>
      <li><strong>Inline</strong> - sirf jitni zaroorat ho utni width lete hain, line ke beech me hi rehte hain. Example: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;img&gt;</code></li>
    </ul>
    <p>Niche diye example me color background se difference saaf dikh jaayega.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <div style="background:#bde0fe;">Block element 1 (div)</div>
  <div style="background:#ffd6a5;">Block element 2 (div)</div>

  <span style="background:#caffbf;">Inline 1</span>
  <span style="background:#fdffb6;">Inline 2</span>
  <span style="background:#ffadad;">Inline 3</span>
</body>
</html>`
},

{
  id: 20,
  title: "HTML Attributes",
  explanation: `
    <p>Attributes tags ko extra information dete hain. Sabse common attributes:</p>
    <ul>
      <li><code>id</code> - element ki unique pehchaan (ek page me ek id sirf ek baar use ho)</li>
      <li><code>class</code> - group of elements ko style/select karne ke liye (multiple elements same class le sakte hain)</li>
      <li><code>style</code> - inline CSS dene ke liye</li>
      <li><code>title</code> - hover tooltip</li>
      <li><code>data-*</code> - custom data store karne ke liye (jaise <code>data-user-id</code>)</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <p id="intro" class="highlight" style="color:#4fd1ff;" title="Yeh intro paragraph hai">
    Mouse hover kariye is text par.
  </p>
  <button data-user-id="101" onclick="alert(this.dataset.userId)">
    Data Attribute Check Kariye
  </button>
</body>
</html>`
},

{
  id: 21,
  title: "Inline CSS",
  explanation: `
    <p><strong>Inline CSS</strong> ka matlab hai CSS ko directly tag ke <code>style</code> attribute me likhna. Syntax: <code>property: value;</code></p>
    <p>Yeh tarika chhote/quick changes ke liye theek hai, lekin badi websites me <strong>internal</strong> ya <strong>external CSS</strong> use karna best practice hai (yeh hum next day me seekhenge).</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h1 style="color:#ff6b6b; text-align:center;">Yeh Red Aur Centered Hai</h1>
  <p style="background:#1b222c; color:#fff; padding:12px; border-radius:8px;">
    Yeh paragraph dark background ke saath hai, inline CSS se.
  </p>
  <button style="background:#4fd1ff; color:#000; padding:10px 20px; border:none; border-radius:6px;">
    Stylish Button
  </button>
</body>
</html>`
},

{
  id: 22,
  title: "Internal CSS",
  explanation: `
    <p><strong>Internal CSS</strong> me hum <code>&lt;head&gt;</code> ke andar <code>&lt;style&gt;</code> tag likh kar saare CSS rules ek jagah define karte hain. Isse ek hi tag ki styling baar-baar likhne ki zaroorat nahi padti.</p>
    <p>CSS Selectors: <code>tagname { }</code>, <code>.classname { }</code>, <code>#idname { }</code></p>
  `,
  code:
`<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; background: #0d1117; color: #e6edf3; }
  h1 { color: #ffb454; }
  .card { background: #1b222c; padding: 16px; border-radius: 10px; }
</style>
</head>
<body>
  <h1>Internal CSS Example</h1>
  <div class="card">
    <p>Yeh card class se style hua hai, jo head section me defined hai.</p>
  </div>
</body>
</html>`
},

{
  id: 23,
  title: "HTML Aur JavaScript",
  explanation: `
    <p>HTML page me JavaScript jodne ke liye <code>&lt;script&gt;</code> tag use hota hai. JavaScript se page ko <strong>interactive</strong> banaya jaata hai.</p>
    <p><code>console.log()</code> ek bahut useful function hai jo developer console/terminal me message print karta hai - isi se hum apna code "debug" karte hain. Niche wala code run karenge to terminal panel me output dikhega!</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h1>JavaScript Ke Saath HTML</h1>
  <p>Terminal panel check kariye is code ko Run karne ke baad.</p>

  <script>
    console.log("Namaste! Yeh JavaScript se print hua hai.");
    let naam = "HTML Student";
    console.log("Mera naam hai: " + naam);
    console.log(2 + 2);
  </script>
</body>
</html>`
},

{
  id: 24,
  title: "Buttons Aur Events",
  explanation: `
    <p>Button par click hone par koi action chalane ke liye <code>onclick</code> attribute use hota hai. Yeh sabse simple tarika hai HTML me "event handling" ka.</p>
    <p>Niche wale example me button click karne se page ka text JavaScript se badal jaata hai, aur saath me terminal me bhi log hota hai.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <h2 id="message">Button dabane ka intezaar hai...</h2>
  <button onclick="badloMessage()">Click Kariye</button>

  <script>
    function badloMessage() {
      document.getElementById("message").innerText = "Aapne button dabaya! 🎉";
      console.log("Button click hua, message update ho gaya.");
    }
  </script>
</body>
</html>`
},

{
  id: 25,
  title: "Form Validation Basics",
  explanation: `
    <p>HTML khud bhi kuch basic validation kar sakta hai, JavaScript likhe bina:</p>
    <ul>
      <li><code>required</code> - field bharna zaroori hai</li>
      <li><code>minlength</code> / <code>maxlength</code> - text ki minimum/maximum length</li>
      <li><code>min</code> / <code>max</code> - number ki range</li>
      <li><code>pattern</code> - custom regex pattern</li>
      <li><code>placeholder</code> - hint text (yeh validation nahi hai, sirf hint hai)</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <form>
    <label>Naam (zaroori):</label><br>
    <input type="text" required placeholder="Apna naam likhiye"><br><br>

    <label>Age (5 se 99 tak):</label><br>
    <input type="number" min="5" max="99"><br><br>

    <label>Pincode (6 digit):</label><br>
    <input type="text" pattern="[0-9]{6}" placeholder="Jaise: 800001"><br><br>

    <button type="submit">Submit Kariye</button>
  </form>
</body>
</html>`
},

{
  id: 26,
  title: "Advanced Tables",
  explanation: `
    <p>Tables ko aur professional banane ke liye:</p>
    <ul>
      <li><code>colspan</code> - ek cell ko kitne columns tak failana hai</li>
      <li><code>rowspan</code> - ek cell ko kitne rows tak failana hai</li>
      <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> - table ko logical sections me todna</li>
    </ul>
  `,
  code:
`<!DOCTYPE html>
<html>
<head>
<style> table, th, td { border: 1px solid #555; padding: 8px; } </style>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th colspan="2">Student Report</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Naam</td>
        <td>Riya Sharma</td>
      </tr>
      <tr>
        <td rowspan="2">Subjects</td>
        <td>HTML - 95</td>
      </tr>
      <tr>
        <td>CSS - 90</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
},

{
  id: 27,
  title: "Nested Elements Aur DOM Structure",
  explanation: `
    <p>HTML elements ek doosre ke andar likhe ja sakte hain - isse <strong>parent-child relationship</strong> banti hai. Browser is poore structure ko ek tree jaisa banata hai, jise <strong>DOM (Document Object Model)</strong> kehte hain.</p>
    <p>Important rule: tags ko hamesha sahi order me close karna chahiye - "last opened, first closed" (jaise stack ki tarah).</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<body>
  <div style="border:2px solid #4fd1ff; padding:10px;">
    Parent Div
    <div style="border:2px solid #ffb454; padding:10px; margin-top:8px;">
      Child Div
      <p style="border:2px solid #ff6b6b; padding:6px;">
        Grandchild Paragraph
      </p>
    </div>
  </div>
</body>
</html>`
},

{
  id: 28,
  title: "Responsive Viewport Meta Tag",
  explanation: `
    <p>Mobile devices par website sahi dikhe, iske liye yeh line har page ke <code>&lt;head&gt;</code> me hona zaroori hai:</p>
    <p><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
    <p>Iske bina mobile browser page ko "zoom-out" karke desktop jaisa dikhane ki koshish karta hai, jisse text bahut chhota dikhta hai. Yeh tag yeh batata hai ki page ki width device ki actual width ke barabar honi chahiye.</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: sans-serif; padding: 16px; }
    .box { background:#4fd1ff; padding:20px; border-radius:10px; }
  </style>
</head>
<body>
  <div class="box">
    <h2>Yeh box mobile par bhi sahi fit hoga</h2>
    <p>Viewport meta tag ki wajah se.</p>
  </div>
</body>
</html>`
},

{
  id: 29,
  title: "HTML Best Practices",
  explanation: `
    <p>Achha HTML likhne ke kuch zaroori rules:</p>
    <ul>
      <li>Tags hamesha properly close karein</li>
      <li>Har <code>&lt;img&gt;</code> ko meaningful <code>alt</code> text dein</li>
      <li>Jahan possible ho, semantic tags use karein (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> wagairah <code>&lt;div&gt;</code> ki jagah)</li>
      <li>Code ko proper indentation ke saath likhein, taaki padhna aasaan ho</li>
      <li>Tags aur attributes lowercase me likhein</li>
      <li>Forms me <code>&lt;label&gt;</code> ka use zaroor karein (accessibility ke liye)</li>
    </ul>
  `,
  code:
`<!-- ❌ Bura Tarika -->
<!--
<DIV><IMG SRC="pic.jpg"><P>text
-->

<!-- ✅ Achha Tarika -->
<!DOCTYPE html>
<html>
<body>
  <figure>
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='60'><rect width='100' height='60' fill='%2356e39f'/></svg>"
         alt="Ek simple green rectangle ki demo image">
    <figcaption>Properly closed aur indented code</figcaption>
  </figure>
</body>
</html>`
},

{
  id: 30,
  title: "Mini Project - Apna Pehla Webpage",
  explanation: `
    <p>🎉 Badhai ho! Aap 30 din ke HTML safar ke aakhri din par pahunch gaye hain. Ab waqt hai sab kuch jodne ka - headings, text formatting, links, image, list, table, form aur semantic tags - ek saath, ek real mini-webpage banane ke liye.</p>
    <p>Niche diya code ek chhota "Portfolio" page hai. Ise Run kariye, fir ise edit karke apna naam, apni pasand ki cheezein dal kar apna khud ka page banaye!</p>
  `,
  code:
`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mera Portfolio</title>
  <style>
    body { font-family: sans-serif; background:#0d1117; color:#e6edf3; padding:20px; }
    header { background:#1b222c; padding:16px; border-radius:10px; }
    h1 { color:#ffb454; margin:0; }
    nav a { color:#4fd1ff; margin-right:12px; text-decoration:none; }
    section { margin-top:20px; }
    footer { margin-top:30px; color:#9aa7b3; font-size:14px; }
  </style>
</head>
<body>
  <header>
    <h1>Mera Naam Hai HTML Student</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>Mere Baare Me</h2>
    <p>Main 30 din se <strong>HTML</strong> seekh raha/rahi hoon aur ab apna pehla webpage bana raha/rahi hoon!</p>
  </section>

  <section id="skills">
    <h2>Meri Skills</h2>
    <ul>
      <li>HTML Structure</li>
      <li>Forms Aur Tables</li>
      <li>Semantic Tags</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact Kariye</h2>
    <form>
      <input type="text" placeholder="Aapka naam" required><br><br>
      <input type="email" placeholder="Aapka email" required><br><br>
      <button type="submit">Message Bhejiye</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2026 Mera Portfolio - 30 Din Mein HTML Course Se Bana</p>
  </footer>
</body>
</html>`
}

];
