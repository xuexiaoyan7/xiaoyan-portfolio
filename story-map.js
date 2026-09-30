const storyMarkup = `
<section class="story-map" id="story-map">
  <div class="map-heading"><p>PERSONAL PORTFOLIO STORY MAP</p><h2>From following a path<br><em>to choosing my own.</em></h2><span>从努力符合既定标准，到慢慢拥有选择自己人生的能力。</span></div>
  <article class="identity-card"><div><p class="map-label">01. ONE-LINE IDENTITY｜一句话身份</p><blockquote>I’m still figuring out where I’m going, but I believe in my ability to create value — and in a future that will be good.</blockquote></div><div class="cn-quote">我仍然在寻找自己真正想走的路，但我相信自己能够创造价值，也始终相信未来会很好。</div></article>
  <article class="positioning"><p class="map-label">02. PERSONAL POSITIONING｜个人定位</p><div><p>I’m a recent graduate still exploring what kind of work and life I want to build. I’ve moved across disciplines, countries, and industries — sometimes deliberately, sometimes simply because I didn’t have the answer yet. I care about success, but I’m learning not to let it define me.</p><p>我还在探索自己想建立怎样的工作与生活。我跨过学科、国家和行业，有时是主动选择，有时只是因为当时还没有答案。我在乎成功，但也在学习不让成功定义我。</p></div></article>
  <div class="map-section-title"><span>03</span><h3>THE JOURNEY <i>/ 成长路径</i></h3></div>
  <div class="chapters">
    <article><b>01</b><h4>Following the path<br><i>相信既定路径</i></h4><p>Good grades, good schools and good opportunities once felt like a clear scorecard. Peking University’s dual degree showed me that difficult things can be finished.</p><small>成绩、学校、机会曾是很清晰的评分标准。北大双学位让我证明了，困难的事也可以坚持完成。</small></article>
    <article><b>02</b><h4>Questioning the path<br><i>开始松动的标准</i></h4><p>A disappointing exam and studying abroad taught me that effort cannot control every outcome — and that life does not follow one timetable.</p><small>一次考试失利和交换出国让我知道：努力不保证所有结果，也没有唯一的人生时间表。</small></article>
    <article><b>03</b><h4>Exploring through work<br><i>在尝试中认识自己</i></h4><p>Consulting, finance and VC clarified what I did not want: work that feels empty, overly performative or disconnected from meaning.</p><small>咨询、金融和 VC 让我更清楚地知道：我不喜欢细碎、虚、让人感受不到意义的工作。</small></article>
    <article><b>04</b><h4>Creating value<br><i>在陌生处创造价值</i></h4><p>At TikTok, I entered data analytics from zero. Learning, asking mentors, forming insights and working with teams made value feel concrete for the first time.</p><small>零基础进入 TikTok 数据分析后，学习、请教、形成洞察、与团队协作，让“创造价值”第一次变得具体。</small></article>
  </div>
  <div class="map-section-title how"><span>04</span><h3>HOW I WORK <i>/ 核心能力</i></h3></div>
  <div class="strength-map">
    <article><b>LEARN</b><h4>Learning Agility<br><i>快速进入陌生领域</i></h4><p>Enter unfamiliar territory, learn fast, and become useful.</p><small>从不会开始，快速学习，并最终交付有价值的结果。</small><em>Evidence: TikTok · SQL · experimentation</em></article>
    <article><b>SOLVE</b><h4>Analytical Problem Solving<br><i>把模糊问题变成答案</i></h4><p>Turn ambiguous questions into structured analysis and actionable answers.</p><small>理解真正的问题，找到证据，把分析转化为可行动的判断。</small><em>Evidence: TikTok · VC · market-entry projects</em></article>
    <article><b>CONNECT</b><h4>Cross-functional Communication<br><i>连接人、业务与分析</i></h4><p>Connect people, business questions and analytical perspectives.</p><small>在产品、研发、数仓与业务之间，理解问题、协调语境、推动共识。</small><em>Evidence: TikTok · cross-functional collaboration</em></article>
    <article><b>BUILD</b><h4>Ownership &amp; Building<br><i>把想法做成真实的东西</i></h4><p>Turn an idea into something real, even before knowing exactly how.</p><small>不把自己包装成工程师；只是当我想做一个东西时，我愿意找到办法把它实现。</small><em>Evidence: Mood Map · vibe coding · zero prior coding</em></article>
  </div>
  <article class="current"><p class="map-label">05. CURRENT CHAPTER｜现在的我</p><h3>Still figuring it out.<br><i>但正在慢慢拥有选择的能力。</i></h3><p>I’m looking for work with growth and fair return, while moving toward economic and personal independence — and making room to see more of the world.</p><p>我正在寻找一份有成长和回报的工作，逐步实现经济独立与人格独立，也希望不被工作完全吞没，去看更多风景。</p><strong>I believe my future will be good.<br><span>我始终相信，未来会很好。</span></strong></article>
</section>`;
document.querySelector('.statement').insertAdjacentHTML('afterend', storyMarkup);

function setHeroStory(){
  const intro = document.querySelector('.intro');
  intro.innerHTML = 'I’m still figuring out where I’m going, but I believe in my ability to create value — and in a future that will be good.<small>我仍在寻找真正想走的路，但我相信自己能够创造价值，也始终相信未来会很好。</small>';
}
setHeroStory();
document.querySelector('#languageToggle').addEventListener('click',()=>setTimeout(setHeroStory,0));

const strengthTicket=document.querySelector('[data-card="strengths"]');
strengthTicket.addEventListener('click',()=>setTimeout(()=>{document.querySelector('#dialogNo').textContent='03 / HOW I WORK｜核心能力';document.querySelector('#dialogTitle').textContent='Learn. Solve. Connect. Build.';document.querySelector('#dialogContent').innerHTML='<p>These are not generic labels. They describe how I create value:</p><h3>Learning Agility｜快速进入陌生领域</h3><p>Enter unfamiliar territory, learn fast, and become useful. 从不会开始，快速学习，并最终交付有价值的结果。</p><h3>Analytical Problem Solving｜把模糊问题变成答案</h3><p>Turn ambiguous questions into structured analysis and actionable answers. 理解真正问题，找到证据，再把分析转化为判断。</p><h3>Cross-functional Communication｜连接人、业务与分析</h3><p>Connect people, business questions and analytical perspectives. 在真实协作中理解不同团队的需求与语境。</p><h3>Ownership &amp; Building｜把想法做成真实的东西</h3><p>Turn an idea into something real, even before knowing exactly how. Mood Map 是最诚实的例子：从零 coding 经验到可以分享给朋友的网站。</p>';},0));
