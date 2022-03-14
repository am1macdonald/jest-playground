import cypher from '../scripts/caesarCipher.js';
//encrypts

test ('returns a string', () => {
  let str = 'string'
  expect(cypher(str, 0)).toMatch(/([A-Za-z])\w+/);
})

test ('shifts by 1', () => {
  let str = 'string'
  expect(cypher(str, 1)).toMatch(/tusjoh/);
})

test ('shifts by 24', () => {
  let str = 'string'
  expect(cypher(str, 24)).toMatch(/qrpgle/);
})

test ('shifts by 10', () => {
  let str = 'string'
  expect(cypher(str, 10)).toMatch(/cdbsxq/);
})

test ('handles a sentence', () => {
  let str = 'string or a thing'
  expect(cypher(str, 1)).toMatch(/tusjoh ps b uijoh/);
})

test ('handles capital letters', () => {
  let str = 'StrIng or a thIng'
  expect(cypher(str, 8)).toMatch(/AbzQvo wz i bpQvo/);
})

test ('handles punctuation', () => {
  let str = 'StrIng, or!! a ?thIng'
  expect(cypher(str, 8)).toMatch(/AbzQvo\, wz\!\! i \?bpQvo/);
})

test ('extreme', () => {
  let str = '​Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.'
  expect(cypher(str, 8)).toMatch(/​Mlqb bpm Mfxzmaaqwv \& Bmfb bw amm uibkpma\. Zwtt wdmz uibkpma wz bpm mfxzmaaqwv nwz lmbiqta\. XKZM \& RidiAkzqxb ntidwza wn ZmoMf izm acxxwzbml\. Ditqlibm gwcz mfxzmaaqwv eqbp Bmaba uwlm\./);
})