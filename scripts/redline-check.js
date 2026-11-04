/**
 * redline-check.js — AI 生成代码红线校验
 * 对应 G6/G4 阶段门的 agentic_redline 维度
 */
const DEFAULT_WHITELIST = [
  'api.openai.com','api.anthropic.com','api.deepseek.com',
  'open.bigmodel.cn','dashscope.aliyuncs.com','api.moonshot.cn'
];

const REDLINES = [
  { id:'no-eval', desc:'禁止 eval/new Function',
    check:(c)=>!/\beval\s*\(|new\s+Function\s*\(/.test(c) },
  { id:'no-external-fetch', desc:'禁止不可信外部 fetch',
    check:(c)=>{
      const wl=DEFAULT_WHITELIST.map(w=>w.replace(/\./g,'\\.')).join('|');
      const pat=new RegExp(`fetch\\(\\s*['"]https?://(?!${wl})`,'g');
      return !pat.test(c);
    }},
  { id:'schema-validation', desc:'输入输出需 schema 校验',
    check:(c)=>/validate(Input|Output)|zod\.|schema\.parse|ajv\.compile/.test(c) },
  { id:'no-secrets', desc:'禁止硬编码 API Key',
    check:(c)=>!/['"]sk-[A-Za-z0-9]{20,}['"]/.test(c) },
  { id:'no-innerhtml', desc:'避免未净化 innerHTML',
    check:(c)=>!/\.innerHTML\s*=\s*(?!['"`]|''|"")/.test(c) }
];

function runRedlineCheck(codeContent) {
  const results = REDLINES.map(r=>({
    id:r.id, desc:r.desc, passed:r.check(codeContent||'')
  }));
  const passed = results.filter(r=>r.passed).length;
  return {
    pass_rate: (passed/REDLINES.length)*100,
    failures: results.filter(r=>!r.passed)
  };
}

if (typeof module !== 'undefined') module.exports = { runRedlineCheck, REDLINES };
