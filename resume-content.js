const resumeDetails = {
  en: {
    projects: {
      no: '01 / SELECTED PROJECTS', title: 'Ideas, analysis & market entry.',
      body: `<h3>Mood Map · AI vibe coding</h3><p>A personal interactive product that makes emotional patterns visible and reflective through a simple visual experience.</p><h3>Unilever (Dermalogica) · AI-Driven Social Commerce</h3><p>Led a 5-person team to examine AI personalization and creator-led content across the beauty consumer journey; translated platform and consumer insight into go-to-market recommendations for targeting and conversion.</p><h3>Huel · South Korea Market Entry</h3><p>Evaluated TAM/SAM/SOM, consumer demand and competitive positioning; developed a phased market-entry strategy spanning localized positioning, influencer marketing and digital platforms.</p>`
    },
    experience: {
      no: '02 / EXPERIENCE', title: 'Turning evidence into action.',
      body: `<h3>TikTok Shop · User Product Data Science Intern</h3><p>Monitored e-commerce performance using event tracking and funnel analysis; conducted quantitative and qualitative analysis, including A/B tests and strategy evaluation; partnered with Product, R&amp;D and Data Engineering to improve analytics frameworks and build automated dashboards.</p><h3>Challengers Venture · Post-Investment Analyst Intern</h3><p>Analyzed monthly financial and business performance for consumer portfolio companies; built scenario and sensitivity analyses across 10+ companies, and delivered market, consumer and risk insights for strategic planning.</p><h3>BDO China · Audit Consulting Intern</h3><p>Synthesized 20+ regulatory and inspection guidelines into evaluation frameworks; used Excel to benchmark operations and identify internal-control, reporting and R&amp;D management opportunities.</p>`
    }
  },
  zh: {
    projects: {
      no: '01 / 项目经历', title: '想法、分析与市场进入。',
      body: `<h3>Mood Map · AI Vibe Coding</h3><p>一个个人互动产品：以简洁的可视化体验帮助用户看见、回顾情绪模式。</p><h3>联合利华（Dermalogica）· AI 驱动社交电商策略</h3><p>带领 5 人团队研究 AI 个性化推荐和达人内容在美妆消费者旅程中的作用，把消费者与平台洞察转化为提升触达与转化的市场策略建议。</p><h3>Huel · 韩国市场进入策略</h3><p>完成 TAM/SAM/SOM 测算、消费者需求研究与竞品对标，制定涵盖本地化定位、达人营销与数字平台的分阶段市场进入策略。</p>`
    },
    experience: {
      no: '02 / 实践经历', title: '让证据变成行动。',
      body: `<h3>TikTok Shop · 用户产品数据分析实习生</h3><p>通过埋点与漏斗分析监控电商表现；独立完成定量/定性分析、A/B 实验与策略评估；协同产品、研发和数仓团队完善分析体系并搭建自动化核心指标看板。</p><h3>挑战者创投 · 投后分析实习生</h3><p>跟踪消费赛道被投企业的月度财务和业务表现；对 10+ 家公司完成情景与敏感性分析，并输出市场、消费者及风险洞察，支持资源配置与增长规划。</p><h3>立信会计师事务所 · 咨询实习生</h3><p>将 20+ 项监管与检查要求整理为评估框架；使用 Excel 完成运营与业绩对标，识别内控、报告与研发管理方面的优化空间。</p>`
    }
  }
};

function showResumeDetail(kind) {
  const language = document.documentElement.lang === 'zh' ? 'zh' : 'en';
  const detail = resumeDetails[language][kind];
  document.querySelector('#dialogNo').textContent = detail.no;
  document.querySelector('#dialogTitle').textContent = detail.title;
  document.querySelector('#dialogContent').innerHTML = detail.body;
}

for (const kind of ['projects', 'experience']) {
  const ticket = document.querySelector(`[data-card="${kind}"]`);
  ticket.addEventListener('click', () => setTimeout(() => showResumeDetail(kind), 0));
  ticket.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') setTimeout(() => showResumeDetail(kind), 0);
  });
}
