// Applies Spanish translations to the English case data objects from cases.js.
// The English cases.js provides structure (section kinds, image srcs, etc.).
// The es.js caseX objects provide the translated text fields.

function applyBook(enCase, esTr) {
  const s = esTr.sections
  const sections = enCase.sections.map((sec) => ({ ...sec }))

  // 0: text — "It started with a phone call."
  sections[0] = { ...sections[0], heading: s.s1_heading, body: s.s1_body }
  // 1: callout/objective
  sections[1] = { ...sections[1], items: s.s1_objectives }
  // 2: callout/question
  sections[2] = { ...sections[2], text: s.s1_question }
  // 3: text — "Then a number changed…"
  sections[3] = { ...sections[3], heading: s.s2_heading, body: s.s2_body }
  // 4: image — benchmark
  sections[4] = { ...sections[4], caption: s.s2_caption }
  // 5: text — connector ("One finding reframed…")
  sections[5] = { ...sections[5], body: [s.s2_body_connector] }
  // 6: callout/insight
  sections[6] = { ...sections[6], label: s.s2_insight_label, value: s.s2_insight_value, text: s.s2_insight_text }
  // 7: version-compare
  sections[7] = {
    ...sections[7],
    versions: sections[7].versions.map((v, j) => ({
      ...v,
      label:   s.s3_versions[j].label,
      caption: s.s3_versions[j].caption,
    })),
  }
  // 8: text — "So I started drawing a clearer path."
  sections[8] = { ...sections[8], heading: s.s4_heading, body: s.s4_body }
  // 9: callout/question
  sections[9] = { ...sections[9], text: s.s4_question }
  // 10: video — keep label in English (UI label for the embed, not translated)
  // 11: text — "The first version didn't work."
  sections[11] = { ...sections[11], heading: s.s5_heading, body: s.s5_body }
  // 12: callout/takeaway
  sections[12] = { ...sections[12], label: s.s5_takeaway_label, text: s.s5_takeaway_text }
  // 13: text — "In the end, the flow had four moments." + step 1
  sections[13] = { ...sections[13], heading: s.s6_heading, body: [s.s6_body_1] }
  // 14: image — cupra02Identify
  sections[14] = { ...sections[14], caption: s.s6_caption_1 }
  // 15: text — step 2
  sections[15] = { ...sections[15], body: [s.s6_body_2] }
  // 16: image — cupra03Services
  sections[16] = { ...sections[16], caption: s.s6_caption_2 }
  // 17: text — step 3
  sections[17] = { ...sections[17], body: [s.s6_body_3] }
  // 18: image — cupra04Date
  sections[18] = { ...sections[18], caption: s.s6_caption_3 }
  // 19: text — step 4
  sections[19] = { ...sections[19], body: [s.s6_body_4] }
  // 20: image — cupra05Contact
  sections[20] = { ...sections[20], caption: s.s6_caption_4 }
  // 21: video — responsive
  sections[21] = { ...sections[21], intro: s.s6_video_intro }
  // 22: stat — "Seventeen people put it to the test."
  sections[22] = { ...sections[22], heading: s.s7_heading, companion: s.s7_companion, items: s.s7_stat }
  // 23: callout/quote
  sections[23] = { ...sections[23], text: s.s7_quote1 }
  // 24: callout/quote
  sections[24] = { ...sections[24], text: s.s7_quote2 }
  // 25: text — "And then the numbers came in."
  sections[25] = { ...sections[25], heading: s.s8_heading, body: [s.s8_body] }
  // 26: stat dark
  sections[26] = { ...sections[26], items: s.s8_stats }
  // 27: image — cupra06Confirm
  sections[27] = { ...sections[27], caption: s.s8_caption }
  // 28: livelinks
  sections[28] = { ...sections[28], links: s.s8_links }

  return { ...enCase, ...baseFields(esTr), sections }
}

function applyGencat(enCase, esTr) {
  const s = esTr.sections
  const sections = enCase.sections.map((sec) => ({ ...sec }))

  // 0: text — "It started with the 'simple' trámite that wasn't."
  sections[0] = { ...sections[0], heading: s.s1_heading, body: s.s1_body }
  // 1: callout/question
  sections[1] = { ...sections[1], text: s.s1_question }
  // 2: text — "I evaluated the old flow."
  sections[2] = { ...sections[2], heading: s.s2_heading, body: s.s2_body }
  // 3: image — gencatOldFlow
  sections[3] = { ...sections[3], caption: s.s2_image_caption }
  // 4: text — "Then I looked at how other governments handle it."
  sections[4] = { ...sections[4], heading: s.s3_heading, body: s.s3_body }
  // 5: image — gencatBenchmark
  sections[5] = { ...sections[5], caption: s.s3_image_caption }
  // 6: text — "So I redesigned the way in."
  sections[6] = { ...sections[6], heading: s.s4_heading, body: s.s4_body }
  // 7: callout/insight
  sections[7] = { ...sections[7], label: s.s4_insight_label, text: s.s4_insight_text }
  // 8: image — gencatModal
  sections[8] = { ...sections[8], caption: s.s4_image_caption }
  // 9: before-after — gencatOldInfo / gencatNewAccordion
  sections[9] = {
    ...sections[9],
    before: { ...sections[9].before, caption: s.s4_before_caption },
    after:  { ...sections[9].after,  caption: s.s4_after_caption },
  }
  // 10: text — "Designing the whole flow, not just the happy path."
  sections[10] = { ...sections[10], heading: s.s5_heading, body: [s.s5_body] }
  // 11: gallery — gencatUnavailable / gencatDeadline / gencatBot
  sections[11] = {
    ...sections[11],
    images: sections[11].images.map((img, j) => ({
      ...img,
      caption: s.s5_gallery[j].caption,
    })),
  }
  // 12: callout/objective
  sections[12] = { ...sections[12], items: s.s5_objectives }

  return { ...enCase, ...baseFields(esTr), sections }
}

function applyFaq(enCase, esTr) {
  const s = esTr.sections
  const sections = enCase.sections.map((sec) => ({ ...sec }))

  // 0: text — "Everything in one place. Nothing findable."
  sections[0] = { ...sections[0], heading: s.s1_heading, body: s.s1_body }
  // 1: callout/question
  sections[1] = { ...sections[1], text: s.s1_question }
  // 2: text — "The same structure failing in three different ways."
  sections[2] = { ...sections[2], heading: s.s2_heading, body: s.s2_body }
  // 3: image — faqArchitecture
  sections[3] = { ...sections[3], caption: s.s2_diagram_caption }
  // 4: before-after — faqAntes / faqDespues
  sections[4] = {
    ...sections[4],
    before: { ...sections[4].before, caption: s.s2_before_caption },
    after:  { ...sections[4].after,  caption: s.s2_after_caption },
  }
  // 5: text — "Structure first. Everything else follows."
  sections[5] = { ...sections[5], heading: s.s3_heading, body: s.s3_body }
  // 6: image — faqSubcategoryImage
  sections[6] = { ...sections[6], caption: s.s3_image_caption }
  // 7: text — "Small additions, real difference."
  sections[7] = { ...sections[7], heading: s.s4_heading, body: s.s4_body }
  // 8: text — "What stayed out of scope"
  sections[8] = { ...sections[8], heading: s.s5_heading, body: [s.s5_body] }
  // 9: livelinks
  sections[9] = { ...sections[9], links: s.s5_links }

  return { ...enCase, ...baseFields(esTr), sections }
}

function baseFields(esTr) {
  return {
    client:       esTr.client,
    cardTitle:    esTr.cardTitle,
    articleTitle: esTr.articleTitle,
    summary:      esTr.summary,
    tags:         esTr.tags,
    metric:       esTr.metric,
    meta:         esTr.meta,
    intro:        esTr.intro,
    learned:      esTr.learned,
  }
}

// slug → es.js case key mapping
const SLUG_TO_CASE_KEY = {
  'cupra-book-an-appointment': 'case1',
  'gencat-public-procedure':   'case3',
  'cupra-faq-architecture':    'case2',
}

const APPLIERS = {
  'cupra-book-an-appointment': applyBook,
  'gencat-public-procedure':   applyGencat,
  'cupra-faq-architecture':    applyFaq,
}

export function applyCase(slug, enCase, esTranslations) {
  const caseKey = SLUG_TO_CASE_KEY[slug]
  const applier = APPLIERS[slug]
  if (!caseKey || !applier) return enCase
  const esTr = esTranslations[caseKey]
  if (!esTr) return enCase
  return applier(enCase, esTr)
}
