// data.js
// lang fields: de / ja
// Keep text concise and "exam-usable".

window.CARDS = [
  {
    id: "migration-fachkraefte",
    theme: { de: "Migration & Arbeitsmarkt", ja: "移民と労働市場" },
    title: { de: "Fachkräftemangel und gesteuerte Zuwanderung", ja: "人材不足と管理された移民" },
    issues: [
      { de: "Welche Branchen leiden besonders unter Personalmangel?", ja: "どの産業で人手不足が深刻か" },
      { de: "Wie kombiniert man Humanität mit Steuerung und Rechtsstaatlichkeit?", ja: "人道と管理・法治をどう両立するか" },
      { de: "Anerkennung von Abschlüssen, Sprache, Integration: was wirkt?", ja: "資格認定・言語・統合で効く施策は何か" }
    ],
    views: {
      pro: {
        de: "Eine stärker gesteuerte Zuwanderung kann den Fachkräftemangel lindern, Innovation fördern und die Sozialsysteme stabilisieren – vorausgesetzt, Anerkennungsverfahren werden beschleunigt und Sprachförderung ist verbindlich.",
        ja: "管理された移民は人材不足を緩和し、イノベーションや社会保障を支えうる。ただし資格認定の迅速化と、言語教育の実効性が前提。"
      },
      contra: {
        de: "Ohne ausreichende Wohnungs- und Infrastrukturpolitik kann Zuwanderung Verteilungskonflikte verschärfen. Zudem droht Ausbeutung in prekären Jobs, wenn Kontrolle und Beratung fehlen.",
        ja: "住宅・インフラ整備が伴わないと摩擦が増える。監督や相談体制が弱いと低賃金労働での搾取も起こりうる。"
      },
      compromise: {
        de: "Ein Punktesystem plus schnellere Anerkennung, flankiert durch Wohnungsbau, Mindeststandards am Arbeitsmarkt und klare Integrationsangebote (Sprache, Beratung, Werte).",
        ja: "ポイント制＋資格認定迅速化に、住宅政策・労働市場の最低基準・言語/相談/価値教育を組み合わせる。"
      }
    },
    vocab: [
      { de: "der Fachkräftemangel", ja: "熟練人材不足", tip: "議論頻出。'Mangel an +D' も言い換えに便利。" },
      { de: "die Anerkennung von Abschlüssen", ja: "学位/資格の認定", tip: "Anerkennungsverfahren（認定手続）までセットで覚える。" },
      { de: "die Zuwanderung steuern", ja: "移民を管理する", tip: "steuern = 'コントロール/誘導' の中立語として使いやすい。" }
    ],
    links: [
      { label: "Bundesagentur für Arbeit – Fachkräfte", url: "https://www.arbeitsagentur.de/" }
    ]
  },

  {
    id: "klima-energie",
    theme: { de: "Klima & Energie", ja: "気候とエネルギー" },
    title: { de: "Klimaschutz vs. Wettbewerbsfähigkeit", ja: "気候対策と競争力のトレードオフ" },
    issues: [
      { de: "Wie vermeidet man soziale Härten bei CO₂-Preisen?", ja: "CO₂価格での負担増をどう緩和するか" },
      { de: "Welche Rolle spielen Technologieoffenheit und Ausbauziele?", ja: "技術中立と導入目標の役割" },
      { de: "Wie hält man Industrie im Land, ohne Klimaziele aufzuweichen?", ja: "産業維持と目標維持の両立" }
    ],
    views: {
      pro: {
        de: "Ambitionierter Klimaschutz schafft Planungssicherheit, beschleunigt Innovation und reduziert Folgekosten. Entscheidend sind verlässliche Rahmenbedingungen und schneller Netzausbau.",
        ja: "強い気候政策は予見可能性を高め、革新と将来コスト削減につながる。鍵は制度の安定と送電網整備。"
      },
      contra: {
        de: "Zu hohe kurzfristige Belastungen können energieintensive Branchen verdrängen und Akzeptanz zerstören. Ohne Ausgleich drohen soziale Spannungen.",
        ja: "短期コストが高すぎると産業流出と反発を招く。補償がないと社会的緊張が増す。"
      },
      compromise: {
        de: "CO₂-Preis mit Klimageld/Entlastung, zielgenaue Investitionshilfen, schnellere Genehmigungen und europäische Koordination (z.B. Grenzausgleich).",
        ja: "CO₂価格＋還元、重点投資支援、許認可迅速化、EU連携（国境調整など）。"
      }
    },
    vocab: [
      { de: "die Wettbewerbsfähigkeit", ja: "競争力", tip: "Prüfungswort。'Standort' と組み合わせやすい。" },
      { de: "die Akzeptanz", ja: "受容/支持", tip: "政策議論の万能語。" },
      { de: "energieintensiv", ja: "エネルギー集約的", tip: "Industrie/Branche とセット。" }
    ],
    links: [
      { label: "Umweltbundesamt", url: "https://www.umweltbundesamt.de/" }
    ]
  }
];
