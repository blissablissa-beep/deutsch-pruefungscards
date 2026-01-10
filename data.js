// data.js
// lang fields: de / ja
// Keep text concise and "exam-usable".

window.CARDS = [
  {
    id: "migration-fachkraefte",
    theme: { de: "Migration & Arbeitsmarkt", ja: "移民と労働市場" },
    title: { de: "Fachkräftemangel und gesteuerte Zuwanderung", ja: "人材不足と管理された移民" },
    zustand: {
      de: "Viele Branchen suchen Personal, während Zuwanderung politisch umstritten bleibt. Verfahren sind oft langsam, Abschlüsse werden nicht immer schnell anerkannt, und Integration (Sprache, Wohnen) kostet Ressourcen. So entsteht ein Spannungsfeld zwischen Arbeitsmarktbedarf, Humanität und Steuerungsfähigkeit.",
      ja: "多くの産業で人手不足が続く一方、移民は政治的に賛否が分かれる。手続きの遅さや資格認定、統合（言語・住居）などが課題で、労働需要・人道・管理のバランスが争点になる。"
    },
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
    id: "klima-wettbewerb",
    theme: { de: "Klima & Energie", ja: "気候とエネルギー" },
    title: { de: "Klimaschutz vs. Wettbewerbsfähigkeit", ja: "気候対策と競争力のトレードオフ" },
    zustand: {
      de: "Deutschland will Emissionen senken, gleichzeitig stehen energieintensive Branchen unter Kostendruck. Höhere CO₂-Preise und Auflagen können Investitionen bremsen, während andere Länder günstiger produzieren. Daraus entsteht ein Zielkonflikt zwischen Klimazielen und Standortpolitik.",
      ja: "排出削減を進める一方、エネルギー集約産業はコスト圧力にさらされる。CO₂価格や規制が投資を抑え、海外との競争で不利になりうる。気候目標と産業立地のジレンマが生まれる。"
    },
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
  },

  {
    id: "klima-energie",
    theme: { de: "Klima & Energie", ja: "気候とエネルギー" },
    title: { de: "Klimapolitik: Ziele, Kosten, Akzeptanz", ja: "気候政策：目標・コスト・受容" },
    zustand: {
      de: "Klimapolitik zielt auf eine nachhaltige Reduktion von Treibhausgasen, greift jedoch tief in wirtschaftliche Strukturen ein. Steigende Energiepreise, regulatorische Vorgaben und Transformationskosten beeinflussen Investitionsentscheidungen. Gleichzeitig wächst der Anspruch auf soziale Ausgewogenheit und Versorgungssicherheit. Politik muss ökologische Ziele mit Wettbewerbsfähigkeit und sozialer Stabilität in Einklang bringen.",
      ja: "気候政策は温室効果ガス削減を狙うが、産業構造や生活コストに影響する。エネルギー価格、規制、転換コストが投資判断を左右し、同時に公平性や供給安定も求められる。環境目標と競争力・社会安定の両立が課題。"
    },
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
        de: "Zu hohe kurzfristige Belastungen können Akzeptanz zerstören und Branchen verdrängen. Ohne Ausgleich drohen soziale Spannungen und politische Polarisierung.",
        ja: "短期コストが高すぎると支持を失い産業流出も起こりうる。補償がないと緊張や分断が進む。"
      },
      compromise: {
        de: "CO₂-Preis mit Rückverteilung, gezielte Transformationshilfen, schnellere Genehmigungen und europäische Koordination (z.B. Grenzausgleich).",
        ja: "CO₂価格＋還元、転換支援、許認可迅速化、EU連携（国境調整など）。"
      }
    },
    vocab: [
      { de: "die Wettbewerbsfähigkeit", ja: "競争力", tip: "Prüfungswort。'Standort' と組み合わせやすい。" },
      { de: "die Akzeptanz", ja: "受容/支持", tip: "政策議論の万能語。" },
      { de: "die Versorgungssicherheit", ja: "供給の安定", tip: "Energie/Netz/Import と相性が良い。" }
    ],
    links: [
      { label: "Umweltbundesamt", url: "https://www.umweltbundesamt.de/" }
    ]
  },{
  id: "ai-arbeit",
  theme: { de: "Digitalisierung & Arbeit", ja: "デジタル化と労働" },
  title: { de: "Künstliche Intelligenz und Beschäftigung", ja: "AIと雇用" },
  zustand: {
    de: "Künstliche Intelligenz übernimmt zunehmend Aufgaben in Verwaltung, Industrie und Dienstleistungssektor. Während Produktivität und Effizienz steigen, geraten bestimmte Tätigkeiten unter Druck oder verschwinden ganz. Gleichzeitig entstehen neue Berufsbilder mit hohen Qualifikationsanforderungen. Daraus ergibt sich die Frage, wie Arbeitsmärkte, Bildungssysteme und Sozialstaat auf den technologischen Wandel reagieren sollen.",
    ja: "AIは多くの業務を代替し、生産性を高める一方で職種消失の懸念を生んでいる。高度技能職とのミスマッチが拡大し、労働・教育・社会保障の対応が問われている。"
  },
  issues: [
    { de: "Welche Berufe sind besonders gefährdet?", ja: "どの職種が影響を受けやすいか" },
    { de: "Reicht Umschulung als Antwort?", ja: "再教育は十分か" },
    { de: "Wie verhindert man soziale Spaltung?", ja: "社会的分断をどう防ぐか" }
  ],
  views: {
    pro: {
      de: "KI kann Produktivität steigern, Arbeitskräfte entlasten und neue Tätigkeitsfelder schaffen. Richtig eingesetzt fördert sie Innovation und sichert langfristig Wettbewerbsfähigkeit. Voraussetzung sind Investitionen in Bildung und Qualifizierung.",
      ja: "AIは生産性向上と新職種創出を通じて競争力を高めうる。前提は教育・再訓練への投資。"
    },
    contra: {
      de: "Ohne ausreichende Weiterbildung drohen Jobverluste, insbesondere bei gering Qualifizierten. Einkommen könnten sich weiter polarisieren, und soziale Sicherungssysteme geraten unter Druck.",
      ja: "再教育が不十分だと失業や格差拡大を招き、社会保障への負担が増す。"
    },
    compromise: {
      de: "Eine aktive Arbeitsmarktpolitik mit lebenslangem Lernen, flankiert durch soziale Absicherung und Beteiligung der Unternehmen, kann Innovation ermöglichen und soziale Risiken begrenzen.",
      ja: "生涯学習と社会的セーフティネットを組み合わせ、革新と安定を両立させる。"
    }
  },
  redemittel: [
    "Es handelt sich um einen tiefgreifenden Strukturwandel des Arbeitsmarktes.",
    "Dabei stellt sich die Frage, wie man Chancen nutzt, ohne soziale Risiken zu ignorieren.",
    "Entscheidend ist aus meiner Sicht die Kombination aus Innovation und Absicherung."
  ]
},
{
  id: "ai-kunst",
  theme: { de: "Kultur & Gesellschaft", ja: "文化と社会" },
  title: { de: "KI und menschliche Kreativität", ja: "AIと人間の芸術" },
  zustand: {
    de: "Generative KI erzeugt Texte, Bilder und Musik, die menschlicher Kunst immer ähnlicher werden. Dadurch geraten traditionelle Konzepte von Kreativität, Autorschaft und geistigem Eigentum unter Druck. Gleichzeitig entstehen neue kreative Werkzeuge. Umstritten ist, ob KI Kunst ersetzt oder menschliche Kreativität erweitert.",
    ja: "生成AIは人間の創作と見分けがつかない作品を生み、創造性や著作権の概念を揺さぶっている。"
  },
  issues: [
    { de: "Kann KI kreativ sein?", ja: "AIは創造的か" },
    { de: "Wie schützt man Urheberrechte?", ja: "著作権をどう守るか" },
    { de: "Verändert sich der Wert menschlicher Kunst?", ja: "人間の芸術価値は変わるか" }
  ],
  views: {
    pro: {
      de: "KI kann als Werkzeug neue Ausdrucksformen ermöglichen und Kreativität demokratisieren. Künstlerinnen und Künstler profitieren von neuen Inspirations- und Produktionsmöglichkeiten.",
      ja: "AIは創作の道具として表現の幅を広げ、創造行為を民主化する可能性がある。"
    },
    contra: {
      de: "KI-basierte Werke verwässern den Begriff von Kreativität und gefährden wirtschaftlich die Existenz menschlicher Kunstschaffender. Zudem bleiben Urheberrechtsfragen oft ungeklärt.",
      ja: "創造性の価値が曖昧になり、人間の芸術家の生計が脅かされる恐れがある。"
    },
    compromise: {
      de: "Klare rechtliche Regeln, Transparenz bei KI-Nutzung und die Anerkennung menschlicher Autorschaft können technologische Innovation und kulturelle Vielfalt verbinden.",
      ja: "法整備と透明性により、技術革新と人間の創作価値を両立させる。"
    }
  },
  redemittel: [
    "Hier geht es weniger um Technik als um ein kulturelles Selbstverständnis.",
    "Meiner Ansicht nach sollte KI als Werkzeug, nicht als Ersatz verstanden werden.",
    "Langfristig braucht es klare Regeln für Autorschaft und Nutzung."
  ]
},
{
  id: "verbrenner-ev",
  theme: { de: "Verkehr & Energie", ja: "交通とエネルギー" },
  title: { de: "Verbrennungsmotor versus Elektromobilität", ja: "燃料車とEVの限界" },
  zustand: {
    de: "Elektromobilität wird politisch gefördert, um Emissionen im Verkehrssektor zu senken. Gleichzeitig bestehen Probleme bei Ladeinfrastruktur, Strommix, Rohstoffabhängigkeit und Kosten. Der Verbrennungsmotor ist technisch ausgereift, steht jedoch wegen Klimazielen unter Druck. Die Debatte dreht sich um Technologieoffenheit und Übergangsfristen.",
    ja: "EVは排出削減策として推進されるが、インフラや資源問題が残る。内燃機関は成熟技術だが規制対象となっている。"
  },
  issues: [
    { de: "Ist Elektromobilität wirklich klimafreundlich?", ja: "EVは本当に環境に良いか" },
    { de: "Braucht es Verbote oder Anreize?", ja: "禁止か誘導か" },
    { de: "Wie sozial gerecht ist der Umstieg?", ja: "社会的公平性は確保できるか" }
  ],
  views: {
    pro: {
      de: "Elektromobilität kann lokale Emissionen reduzieren und ist langfristig klimafreundlicher, insbesondere bei grünem Strom. Sie fördert Innovation und neue Industrien.",
      ja: "EVは再生可能エネルギーと組み合わせれば環境負荷を下げ、産業革新を促す。"
    },
    contra: {
      de: "Hohe Anschaffungskosten, Rohstoffabhängigkeit und ungleiche Infrastruktur belasten Verbraucher. Der ökologische Nutzen ist ohne sauberen Strom begrenzt.",
      ja: "高コストや資源依存により、必ずしも環境効果が高いとは言えない。"
    },
    compromise: {
      de: "Technologieoffenheit, realistische Übergangsfristen und ein Ausbau erneuerbarer Energien können ökologische Ziele und soziale Akzeptanz verbinden.",
      ja: "技術中立と段階的移行で、環境目標と受容性を両立させる。"
    }
  },
  redemittel: [
    "Es handelt sich um einen klassischen Zielkonflikt zwischen Klima- und Sozialpolitik.",
    "Entscheidend ist nicht die einzelne Technologie, sondern der Gesamtkontext.",
    "Kurzfristig braucht es Übergangslösungen, langfristig klare Ziele."
  ]
},
{
  id: "demografie-jp-de",
  theme: { de: "Demografie & Sozialstaat", ja: "人口動態と社会保障" },
  title: { de: "Alternde Gesellschaften in Japan und Deutschland", ja: "日本とドイツの少子高齢化" },
  zustand: {
    de: "Japan und Deutschland gehören zu den am stärksten alternden Gesellschaften der Welt. Sinkende Geburtenraten und steigende Lebenserwartung belasten Renten-, Pflege- und Gesundheitssysteme. Deutschland setzt stärker auf Migration, Japan auf Automatisierung und Familienpolitik. Beide Modelle stoßen an Grenzen.",
    ja: "日独は高齢化が進み、社会保障制度の持続可能性が問われている。対策は異なるが、いずれも限界がある。"
  },
  issues: [
    { de: "Reicht Zuwanderung zur Stabilisierung?", ja: "移民で支えられるか" },
    { de: "Wie wirksam ist Familienpolitik?", ja: "家族政策は有効か" },
    { de: "Muss das Rentenalter steigen?", ja: "定年延長は不可避か" }
  ],
  views: {
    pro: {
      de: "Migration, höhere Erwerbsbeteiligung von Frauen und Älteren sowie Produktivitätssteigerungen können dem demografischen Druck entgegenwirken.",
      ja: "移民、女性・高齢者就労、生産性向上が緩和策となる。"
    },
    contra: {
      de: "Migration allein löst strukturelle Probleme nicht. Familienpolitik wirkt nur langfristig, und höhere Belastungen gefährden gesellschaftliche Akzeptanz.",
      ja: "移民だけでは不十分で、負担増は反発を招く。"
    },
    compromise: {
      de: "Ein Maßnahmenmix aus moderater Zuwanderung, besserer Vereinbarkeit von Familie und Beruf sowie schrittweisen Rentenreformen erscheint am realistischsten.",
      ja: "移民・家族支援・年金改革を組み合わせる現実路線が必要。"
    }
  },
  redemittel: [
    "Im internationalen Vergleich zeigen sich unterschiedliche Strategien.",
    "Keine Maßnahme allein ist ausreichend.",
    "Langfristig geht es um die finanzielle Tragfähigkeit des Sozialstaats."
  ]
},
{
  id: "jugend-smartphone",
  theme: { de: "Bildung & Gesellschaft", ja: "教育と社会" },
  title: { de: "Smartphone-Regulierung für Minderjährige", ja: "未成年のスマホ規制の是非" },
  zustand: {
    de: "Smartphones prägen den Alltag von Kindern und Jugendlichen, etwa durch soziale Medien, Messenger und Online-Spiele. Gleichzeitig wachsen Sorgen über Konzentrationsprobleme, Schlafmangel, Cybermobbing und problematische Inhalte. Schulen und Politik diskutieren daher über Altersgrenzen, Nutzungsverbote und medienpädagogische Konzepte. Die zentrale Frage lautet, wie man Schutz und Teilhabe sinnvoll austariert.",
    ja: "スマホは未成年の日常に深く入り込む一方、集中力低下や睡眠不足、ネットいじめ、有害コンテンツなどが問題化している。年齢制限や学校での禁止などが議論され、保護と参加のバランスが焦点。"
  },
  issues: [
    { de: "Schützen Verbote oder fördern sie Ausweichverhalten?", ja: "禁止は保護か、抜け道を生むか" },
    { de: "Welche Verantwortung tragen Eltern, Schulen und Plattformen?", ja: "親・学校・プラットフォームの責任分担" },
    { de: "Wie verbindet man Medienkompetenz mit Jugendschutz?", ja: "メディア教育と青少年保護の両立" }
  ],
  views: {
    pro: {
      de: "Klare Regeln können Minderjährige vor Abhängigkeit, Cybermobbing und manipulativen Mechanismen schützen. In Schulen fördern smartphonefreie Zeiten Konzentration und soziale Interaktion. Altersgerechte Einschränkungen können zudem Druck durch soziale Medien reduzieren.",
      ja: "明確なルールは依存やネットいじめ、過度な刺激から未成年を守れる。学校でのスマホフリーは集中と対人関係を改善しうる。"
    },
    contra: {
      de: "Zu strikte Verbote ignorieren die digitale Realität und können soziale Teilhabe erschweren. Kinder lernen den Umgang nicht automatisch, wenn man Geräte nur verbietet. Außerdem besteht das Risiko, dass Kontrolle ins Private ausweicht und Vertrauen beschädigt.",
      ja: "厳しすぎる禁止はデジタル社会の現実を無視し、参加や学習機会を奪いかねない。禁止だけでは使い方を学べず、過剰な監視は信頼を損なう。"
    },
    compromise: {
      de: "Sinnvoll ist ein Stufenmodell: klare Regeln nach Alter, smartphonefreie Lernphasen in der Schule, begleitete Medienbildung sowie strengere Plattformpflichten (Datenschutz, Werbe- und Suchtmechanismen, Meldesysteme).",
      ja: "年齢に応じた段階規制＋学校での学習時間はスマホフリー、家庭・学校でのメディア教育、さらにプラットフォーム側の規制強化を組み合わせる。"
    }
  },
  redemittel: [
    "Hier geht es um den Ausgleich zwischen Schutz und Teilhabe.",
    "Verbote allein lösen das Problem nicht; entscheidend ist Medienkompetenz.",
    "Aus meiner Sicht braucht es klare Regeln, aber auch Erziehung und Verantwortung der Plattformen."
  ]
},
{
  id: "populismus-demokratie",
  theme: { de: "Politik & Gesellschaft", ja: "政治と社会" },
  title: { de: "Populismus und Demokratie", ja: "ポピュリズム政党とデモクラシー" },
  zustand: {
    de: "In vielen Demokratien gewinnen populistische Parteien an Einfluss. Sie kritisieren etablierte Eliten, versprechen einfache Lösungen und mobilisieren stark über Emotionen und soziale Medien. Befürworter sehen darin eine Korrektur politischer Blindstellen, Kritiker warnen vor Polarisierung, Desinformation und Angriffen auf unabhängige Institutionen. Damit stellt sich die Frage, wie Demokratie mit Protest und Radikalisierung umgehen soll.",
    ja: "多くの民主主義国でポピュリズム政党が台頭している。既存エリート批判や単純解を掲げ、SNSで動員する一方、分断や偽情報、制度への攻撃が懸念される。民主主義がどう向き合うかが問われる。"
  },
  issues: [
    { de: "Sind populistische Parteien ein Warnsignal oder eine Gefahr?", ja: "警鐘か脅威か" },
    { de: "Wie schützt man Institutionen ohne Meinungsfreiheit zu beschneiden?", ja: "言論の自由と制度防衛の両立" },
    { de: "Welche Rolle spielen Medien, Bildung und soziale Ungleichheit?", ja: "メディア・教育・格差の役割" }
  ],
  views: {
    pro: {
      de: "Populistische Bewegungen können reale Sorgen sichtbar machen, die etablierte Parteien übersehen haben. Sie zwingen Politik, verständlicher zu kommunizieren und Themen wie soziale Gerechtigkeit oder Migration offener zu diskutieren.",
      ja: "既存政党が見落としてきた不安や不満を可視化し、政治の説明責任や論点の透明化を促す面がある。"
    },
    contra: {
      de: "Populismus vereinfacht komplexe Probleme, arbeitet häufig mit Sündenböcken und schwächt Vertrauen in Institutionen. Wenn Gerichte, Medien oder Wissenschaft delegitimiert werden, gerät die demokratische Ordnung unter Druck.",
      ja: "複雑な課題を単純化し、スケープゴート化や制度不信を煽りやすい。司法・メディア・科学の正統性を傷つけると民主主義が危うくなる。"
    },
    compromise: {
      de: "Demokratie sollte Kritik ernst nehmen, aber klare Grenzen ziehen: transparente Politik, soziale Ausgleichspolitik und politische Bildung stärken, zugleich Rechtsstaat und unabhängige Institutionen konsequent schützen.",
      ja: "不満を放置せず透明性と社会的包摂を強めつつ、法治と独立機関を守る線引きを明確にする。"
    }
  },
  redemittel: [
    "Man muss zwischen legitimer Proteststimme und antidemokratischer Delegitimierung unterscheiden.",
    "Aus meiner Sicht ist Transparenz wichtig, aber ebenso die Stärke des Rechtsstaats.",
    "Entscheidend ist, Polarisierung zu reduzieren, ohne Kritik zu tabuisieren."
  ]
},
{
  id: "ehe-gleichgeschlechtlich-jp",
  theme: { de: "Recht & Gesellschaft", ja: "法と社会" },
  title: { de: "Gleichgeschlechtliche Ehe und Familienbild in Japan", ja: "同性婚と家族観（日本で認めるべきか）" },
  zustand: {
    de: "Viele Staaten haben die gleichgeschlechtliche Ehe eingeführt und begründen dies mit Gleichbehandlung und Menschenrechten. In Japan ist die Ehe rechtlich bisher heterosexuellen Paaren vorbehalten, während einige Kommunen Partnerschaftszertifikate ausstellen. Befürworter fordern rechtliche Sicherheit in Bereichen wie Erbrecht, Pflege und Kinder, Gegner betonen Tradition und verfassungsrechtliche Fragen. Die Debatte verbindet rechtliche Gleichstellung mit gesellschaftlichem Wertewandel.",
    ja: "諸外国では同性婚が広がる一方、日本では法的には未整備で、自治体のパートナー証明にとどまる場合が多い。相続・医療・子どもなどの法的安定を求める声と、伝統的家族観や憲法解釈を巡る議論がある。"
  },
  issues: [
    { de: "Geht es primär um Gleichheit vor dem Gesetz?", ja: "法の下の平等が中心か" },
    { de: "Welche Folgen hat es für Kinder und Familienrecht?", ja: "子ども・家族法への影響" },
    { de: "Braucht es Ehe oder reicht eine eingetragene Partnerschaft?", ja: "婚姻かパートナー制度か" }
  ],
  views: {
    pro: {
      de: "Die Öffnung der Ehe stärkt Gleichbehandlung und schafft rechtliche Sicherheit im Alltag, etwa bei Krankenhausbesuchen, Erbrecht, Steuern und Sorgerechtsfragen. Sie signalisiert zudem gesellschaftliche Anerkennung und kann Diskriminierung reduzieren.",
      ja: "婚姻の平等化は相続・医療・税制などの法的安定をもたらし、差別を減らす社会的メッセージにもなる。"
    },
    contra: {
      de: "Kritiker befürchten einen Bruch mit traditionellen Familienbildern oder sehen verfassungsrechtliche Hürden. Außerdem wird argumentiert, dass die Ehe historisch mit Fortpflanzung und Kindererziehung verbunden sei, weshalb alternative Modelle genügen könnten.",
      ja: "伝統的家族観との衝突や憲法上の論点が指摘される。婚姻は歴史的に生殖・子育てと結びつくとして、別制度で十分という主張もある。"
    },
    compromise: {
      de: "Ein realistischer Weg ist, zunächst umfassende Partnerschaftsrechte zu garantieren (Erbe, Pflege, Steuer, Aufenthalt), parallel eine sachliche Verfassungsdebatte zu führen. Ziel sollte gleiche Rechte bei klaren Regeln im Familienrecht sein.",
      ja: "まず包括的なパートナー法を整備し、憲法論議を整理した上で、家族法のルールを明確にしつつ権利を平等化する。"
    }
  },
  redemittel: [
    "Im Kern geht es um Gleichbehandlung und rechtliche Sicherheit im Alltag.",
    "Man sollte zwischen moralischen Vorstellungen und staatlicher Rechtsordnung unterscheiden.",
    "Aus meiner Sicht ist entscheidend, gleiche Rechte zu schaffen und gleichzeitig klare familienrechtliche Regeln zu definieren."
  ]
},
{
  id: "fiskalregeln-jp-de",
  theme: { de: "Wirtschaft & Staat", ja: "経済と国家" },
  title: { de: "Fiskalregeln in Japan und Deutschland", ja: "日独の財政規律（違いと課題）" },
  zustand: {
    de: "Deutschland setzt traditionell stark auf fiskalische Regeln wie die Schuldenbremse, um Neuverschuldung zu begrenzen und Vertrauen in die Stabilität zu sichern. Japan dagegen hat seit Jahrzehnten eine sehr hohe Staatsverschuldung, stützt Wirtschaft und Sozialstaat aber häufig durch expansive Fiskalpolitik und eine besondere Rolle der Zentralbank. Beide Länder stehen vor Herausforderungen: Deutschland ringt um Investitionen und Modernisierung, Japan um langfristige Tragfähigkeit bei Demografie und Zinsrisiken. Die Frage lautet, wie man Stabilität und Zukunftsinvestitionen ausbalanciert.",
    ja: "ドイツは債務ブレーキなど規律重視の枠組みが強い一方、日本は高い政府債務の下で景気・社会保障を支える拡張的政策が続いてきた。ドイツは投資不足、日本は持続可能性や金利上昇リスクが論点で、安定と未来投資の両立が課題。"
  },
  issues: [
    { de: "Braucht Deutschland mehr Spielraum für Investitionen?", ja: "ドイツは投資のために柔軟性が必要か" },
    { de: "Wie riskant ist Japans hohe Verschuldung langfristig?", ja: "日本の高債務は長期的にどこまで危険か" },
    { de: "Welche Regeln erhöhen Akzeptanz und Transparenz?", ja: "納得感と透明性を高めるルールとは" }
  ],
  views: {
    pro: {
      de: "Strikte Regeln wie die Schuldenbremse können Haushaltsdisziplin sichern, Inflationserwartungen stabilisieren und Generationengerechtigkeit fördern. Sie zwingen Politik, Prioritäten zu setzen und ineffiziente Ausgaben zu prüfen.",
      ja: "厳格な規律は財政の信認や世代間公平を支え、優先順位付けを促す。"
    },
    contra: {
      de: "Zu starre Regeln können notwendige Zukunftsinvestitionen bremsen, etwa in Infrastruktur, Digitalisierung oder Klimaschutz. In Krisen kann eine prozyklische Sparpolitik die Wirtschaft zusätzlich schwächen und politische Akzeptanz untergraben.",
      ja: "硬直的すぎる規律はインフラ・デジタル・気候など将来投資を阻害し、危機時には景気悪化を深め得る。"
    },
    compromise: {
      de: "Sinnvoll ist eine regelgebundene Flexibilität: klare Kriterien für Investitionen, transparente Sonderbudgets, unabhängige Evaluation und ein glaubwürdiger Pfad zur Stabilisierung. So lässt sich Investitionsfähigkeit erhöhen, ohne Vertrauen zu verlieren.",
      ja: "投資を例外扱いする基準を明確化し、透明な特別枠と第三者評価を組み合わせ、信認を維持しつつ投資余地を確保する。"
    }
  },
  redemittel: [
    "Im Vergleich zeigt sich ein unterschiedlicher Umgang mit Risiko und Verantwortung.",
    "Es geht um den Zielkonflikt zwischen Stabilität und Investitionsfähigkeit.",
    "Aus meiner Sicht braucht es klare Regeln, aber auch Transparenz und Flexibilität in Krisen."
  ]
},
{
  id: "jugend-sns-regulierung",
  theme: { de: "Medien & Regulierung", ja: "メディアと規制" },
  title: { de: "Soziale Medien und Jugendschutz", ja: "未成年とSNS規制" },
  zustand: {
    de: "Soziale Medien spielen eine zentrale Rolle im Leben von Jugendlichen, dienen der Kommunikation und Identitätsbildung, bergen aber auch Risiken wie Cybermobbing, Desinformation, problematische Inhalte und Suchtmechanismen. Staaten diskutieren daher Altersverifikation, Nutzungsbeschränkungen und strengere Pflichten für Plattformen. Umstritten ist, wie weit staatliche Regulierung gehen darf, ohne Meinungsfreiheit und Teilhabe zu beschneiden.",
    ja: "SNSは若者の交流や自己形成に重要だが、ネットいじめ、偽情報、有害コンテンツ、依存的設計などのリスクも大きい。年齢確認や利用制限、事業者責任の強化が議論され、規制の範囲が争点となっている。"
  },
  issues: [
    { de: "Braucht es eine verbindliche Altersverifikation?", ja: "年齢確認は義務化すべきか" },
    { de: "Wie weit reicht die Verantwortung der Plattformen?", ja: "プラットフォーム責任の範囲" },
    { de: "Wie schützt man Jugendliche ohne Überwachung?", ja: "監視にならずに保護できるか" }
  ],
  views: {
    pro: {
      de: "Strengere Regeln für soziale Medien können Jugendliche besser vor schädlichen Inhalten, Manipulation und Suchtmechanismen schützen. Altersverifikation und klare Haftungsregeln erhöhen den Druck auf Plattformen, Verantwortung zu übernehmen.",
      ja: "規制強化は有害コンテンツや依存的設計から若者を守り、事業者に責任を負わせる効果がある。"
    },
    contra: {
      de: "Zu weitgehende Regulierung kann Meinungsfreiheit einschränken, Datenschutz gefährden und Jugendliche von gesellschaftlicher Teilhabe ausschließen. Altersverifikation birgt zudem Missbrauchs- und Überwachungsrisiken.",
      ja: "過度な規制は言論の自由やプライバシーを侵害し、社会参加を妨げる恐れがある。"
    },
    compromise: {
      de: "Ein ausgewogener Ansatz kombiniert strengere Plattformpflichten (Algorithmen-Transparenz, Meldewege, Werbebeschränkungen) mit freiwilligen Alterskontrollen, Medienbildung und unabhängiger Aufsicht.",
      ja: "アルゴリズム透明化や広告制限などの事業者規制に、任意の年齢管理とメディア教育、第三者監督を組み合わせる。"
    }
  },
  redemittel: [
    "Hier stellt sich die Frage nach der Verantwortung digitaler Plattformen.",
    "Jugendschutz darf nicht automatisch zu Überwachung führen.",
    "Aus meiner Sicht braucht es klare Regeln für Anbieter, nicht für jede einzelne Nutzerin."
  ]
},
];