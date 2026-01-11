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
{
  id: "gesundheit-zucker",
  theme: { de: "Gesundheit & Staat", ja: "健康と国家" },
  title: { de: "Gesundheitsschutz und Zuckerregulierung", ja: "健康問題とスナック・砂糖規制" },
  zustand: {
    de: "Übergewicht, Diabetes und Herz-Kreislauf-Erkrankungen nehmen in vielen Ländern zu. Zuckerreiche Snacks und Getränke gelten als ein zentraler Risikofaktor, insbesondere bei Kindern. Staaten diskutieren daher Maßnahmen wie Zuckersteuern, Werbebeschränkungen und klare Nährwertkennzeichnung. Umstritten ist, wie weit staatliche Eingriffe in Konsumentscheidungen gehen dürfen.",
    ja: "肥満や糖尿病などの生活習慣病が増加し、砂糖の多い食品が要因とされる。砂糖税や広告規制、表示義務が議論され、国家介入の是非が問われている。"
  },
  issues: [
    { de: "Wirken Steuern und Verbote tatsächlich?", ja: "税や規制は効果があるか" },
    { de: "Wie viel Eigenverantwortung ist zumutbar?", ja: "自己責任の範囲" },
    { de: "Sollte Kinderschutz Vorrang haben?", ja: "子ども保護を優先すべきか" }
  ],
  views: {
    pro: {
      de: "Regulierungen können nachweislich den Zuckerkonsum senken und langfristige Gesundheitskosten reduzieren. Besonders Kinder profitieren von Werbeverboten und klaren Kennzeichnungen.",
      ja: "規制は砂糖摂取を抑え、医療費削減につながる。子ども保護の効果が大きい。"
    },
    contra: {
      de: "Solche Maßnahmen greifen in individuelle Konsumfreiheit ein und treffen einkommensschwache Haushalte überproportional. Zudem ist der gesundheitliche Effekt nicht immer eindeutig.",
      ja: "消費の自由を侵し、低所得層に不利となる可能性がある。効果も一概ではない。"
    },
    compromise: {
      de: "Eine Kombination aus transparenter Kennzeichnung, Bildungsprogrammen und moderaten fiskalischen Anreizen erscheint ausgewogener als reine Verbote.",
      ja: "表示義務や教育と、穏やかな税制誘導を組み合わせるのが現実的。"
    }
  },
  redemittel: [
    "Hier prallen Gesundheitsschutz und Konsumfreiheit aufeinander.",
    "Besonders beim Kinderschutz rechtfertigen sich staatliche Eingriffe eher.",
    "Aus meiner Sicht sind Information und Anreize wirksamer als pauschale Verbote."
  ]
},
{
  id: "alterung-rente",
  theme: { de: "Sozialstaat & Demografie", ja: "社会保障と人口動態" },
  title: { de: "Alternde Gesellschaft und Rentensystem", ja: "高齢化と年金制度の両立" },
  zustand: {
    de: "Die Alterung der Bevölkerung belastet umlagefinanzierte Rentensysteme zunehmend. Sinkende Geburtenzahlen und längere Lebenserwartung verschieben das Verhältnis von Beitragszahlern zu Rentenempfängern. Politik diskutiert höhere Beiträge, ein steigendes Rentenalter und kapitalgedeckte Elemente. Ziel ist die langfristige Finanzierbarkeit bei gesellschaftlicher Akzeptanz.",
    ja: "高齢化により年金制度の支え手が減り、受給者が増加している。保険料、定年、積立方式の見直しが議論されている。"
  },
  issues: [
    { de: "Muss das Rentenalter weiter steigen?", ja: "定年延長は不可避か" },
    { de: "Welche Rolle spielt private Vorsorge?", ja: "私的年金の役割" },
    { de: "Wie wahrt man Generationengerechtigkeit?", ja: "世代間公平をどう保つか" }
  ],
  views: {
    pro: {
      de: "Reformen wie ein höheres Rentenalter und zusätzliche Kapitaldeckung können die Finanzierung stabilisieren und die Last fairer verteilen.",
      ja: "定年延長や積立方式は持続性と負担分散に寄与する。"
    },
    contra: {
      de: "Nicht alle Berufsgruppen können länger arbeiten, und stärkere Eigenvorsorge verschärft soziale Ungleichheit.",
      ja: "長く働けない職種も多く、自己責任強化は格差を拡大する。"
    },
    compromise: {
      de: "Ein flexibles Rentenalter, gezielte Entlastung körperlich belastender Berufe und ein ausgewogener Mix aus Umlage und Kapitaldeckung gelten als tragfähiger Mittelweg.",
      ja: "柔軟な定年と職種配慮、賦課と積立の併用が現実的。"
    }
  },
  redemittel: [
    "Es geht um die langfristige Tragfähigkeit des Sozialstaats.",
    "Generationengerechtigkeit spielt hier eine zentrale Rolle.",
    "Reformen sind unvermeidbar, müssen aber sozial ausgewogen sein."
  ]
},
{
  id: "laendlicher-raum",
  theme: { de: "Regionalpolitik & Demografie", ja: "地域政策と人口動態" },
  title: { de: "Geburtenrückgang und ländliche Räume", ja: "少子化と過疎化する地方対策" },
  zustand: {
    de: "Geburtenrückgang und Abwanderung führen in vielen Regionen zu Überalterung und Infrastrukturabbau. Schulen, medizinische Versorgung und Verkehrsanbindungen geraten unter Druck. Staaten suchen nach Strategien, um ländliche Räume attraktiv zu halten und regionale Ungleichgewichte zu reduzieren.",
    ja: "出生率低下と若年層流出により、地方では高齢化とインフラ縮小が進む。地域間格差の是正が課題。"
  },
  issues: [
    { de: "Welche Infrastruktur ist unverzichtbar?", ja: "最低限必要なインフラは何か" },
    { de: "Kann Digitalisierung Abwanderung bremsen?", ja: "デジタル化は流出を止められるか" },
    { de: "Wie verteilt man Ressourcen gerecht?", ja: "資源配分の公平性" }
  ],
  views: {
    pro: {
      de: "Gezielte Investitionen in Verkehr, medizinische Versorgung und digitale Infrastruktur können Lebensqualität sichern und Abwanderung bremsen.",
      ja: "インフラ投資は生活の質を保ち、流出抑制に寄与する。"
    },
    contra: {
      de: "Nicht jede Region kann dauerhaft erhalten werden. Hohe Kosten bei geringer Bevölkerungsdichte werfen Effizienzfragen auf.",
      ja: "全地域維持は非効率で、財政負担が大きい。"
    },
    compromise: {
      de: "Regionale Schwerpunktbildung, mobile Dienstleistungen und digitale Angebote können Grundversorgung sichern, ohne Ressourcen zu stark zu streuen.",
      ja: "拠点化とモバイル・デジタルサービスで最低限を確保する。"
    }
  },
  redemittel: [
    "Hier zeigt sich der Zielkonflikt zwischen Gleichwertigkeit und Effizienz.",
    "Nicht jede Region kann identisch gefördert werden.",
    "Aus meiner Sicht braucht es realistische Prioritäten."
  ]
},
{
  id: "zentralismus-dezentralisierung",
  theme: { de: "Staat & Verwaltung", ja: "国家と行政" },
  title: { de: "Zentralisierung und Föderalismus (Japan–Deutschland)", ja: "一極集中と地方分権（日独比較）" },
  zustand: {
    de: "Japan ist stark zentralisiert, insbesondere wirtschaftlich und administrativ auf Tokio ausgerichtet. Deutschland hingegen ist föderal organisiert, mit starken Ländern und mehreren wirtschaftlichen Zentren. Beide Modelle haben Vor- und Nachteile in Bezug auf Effizienz, demokratische Teilhabe und regionale Entwicklung. Die Frage ist, welches Maß an Dezentralisierung zukunftsfähig ist.",
    ja: "日本は東京一極集中が顕著で、ドイツは連邦制により権限と機能が分散している。効率性、民主性、地域活力の観点から比較が求められる。"
  },
  issues: [
    { de: "Fördert Föderalismus regionale Stärke?", ja: "連邦制は地域活力を高めるか" },
    { de: "Geht Effizienz durch Dezentralisierung verloren?", ja: "分権で効率は下がるか" },
    { de: "Was lässt sich zwischen Japan und Deutschland übertragen?", ja: "相互に学べる点は何か" }
  ],
  views: {
    pro: {
      de: "Dezentralisierung stärkt regionale Verantwortung, politische Nähe und Krisenresilienz. Deutschlands föderales System verteilt Risiken und Kompetenzen.",
      ja: "分権は地域の自立と政治的近接性を高める。"
    },
    contra: {
      de: "Zu starke Zersplitterung kann Entscheidungsprozesse verlangsamen und Koordinationsprobleme verursachen, etwa in Krisensituationen.",
      ja: "過度な分権は調整コストや意思決定の遅れを招く。"
    },
    compromise: {
      de: "Ein klarer Kompetenzmix: nationale Standards und Finanzierung, kombiniert mit regionaler Umsetzung und Gestaltungsspielräumen.",
      ja: "国家レベルの基準と財源＋地域の裁量を組み合わせる。"
    }
  },
  redemittel: [
    "Im Vergleich zeigt sich ein anderer Umgang mit Zentralisierung.",
    "Föderalismus bedeutet nicht Ineffizienz, sondern Arbeitsteilung.",
    "Aus meiner Sicht braucht es klare Zuständigkeiten auf jeder Ebene."
  ]
},
{
  id: "stadt-parkraum",
  theme: { de: "Stadtentwicklung & Verkehr", ja: "都市政策と交通" },
  title: { de: "Parkraummangel in wachsenden Großstädten", ja: "過密都市と駐車場問題" },
  zustand: {
    de: "In vielen Großstädten konkurrieren Wohnen, Verkehr, Grünflächen und Gewerbe um begrenzten Raum. Parkplätze nehmen dabei viel Fläche ein, stehen oft leer oder werden ineffizient genutzt. Gleichzeitig bleibt das Auto für viele Menschen wichtig. Die Debatte verlagert sich zunehmend von der Frage nach Parkplätzen hin zu einer grundsätzlichen Diskussion über Flächennutzung und Mobilität.",
    ja: "大都市では住宅、交通、緑地、商業が限られた空間を奪い合っている。駐車場は広い面積を占める一方、利用効率が低い場合も多い。問題は単なる駐車不足ではなく、都市空間の使い方そのものにある。"
  },
  issues: [
    { de: "Soll öffentlicher Raum dem Auto gewidmet bleiben?", ja: "公共空間は車のために使うべきか" },
    { de: "Wer trägt die Kosten für Parkraum?", ja: "駐車スペースのコストは誰が負担するか" },
    { de: "Welche Alternativen gibt es zum privaten Pkw?", ja: "自家用車以外の選択肢は何か" }
  ],
  views: {
    pro: {
      de: "Eine Reduzierung von Parkplätzen schafft Raum für Wohnen, Grünflächen und Aufenthaltsqualität. Höhere Parkgebühren können Verkehr lenken und den Umstieg auf öffentliche Verkehrsmittel fördern.",
      ja: "駐車場削減は住宅や緑地の確保につながり、料金引き上げは交通行動を変える効果がある。"
    },
    contra: {
      de: "Zu starke Einschränkungen treffen Pendler, Handwerk und Menschen mit eingeschränkter Mobilität. Ohne attraktive Alternativen führt Parkraummangel zu Frust und Ausweichverkehr.",
      ja: "過度な制限は通勤者や高齢者、業務利用に不利で、代替手段がなければ混乱を招く。"
    },
    compromise: {
      de: "Ein integrierter Ansatz kombiniert Parkraumbewirtschaftung, Quartiersgaragen, Carsharing und einen konsequenten Ausbau des öffentlichen Verkehrs.",
      ja: "駐車管理、共同駐車場、カーシェア、公共交通の強化を組み合わせる。"
    }
  },
  redemittel: [
    "Im Kern ist Parkraummangel ein Problem der Flächennutzung.",
    "Die Frage ist weniger Auto ja oder nein, sondern wie Raum effizient genutzt wird.",
    "Aus meiner Sicht braucht es Alternativen, bevor man stark einschränkt."
  ]
},
{
  id: "overtourismus",
  theme: { de: "Tourismus & Nachhaltigkeit", ja: "観光と持続可能性" },
  title: { de: "Obertourismus und staatliche Regulierung", ja: "オーバーツーリズムと規制の是非" },
  zustand: {
    de: "Beliebte Reiseziele leiden zunehmend unter hohen Besucherzahlen, die Infrastruktur, Umwelt und Lebensqualität der lokalen Bevölkerung belasten. Gleichzeitig ist Tourismus ein wichtiger Wirtschaftsfaktor. Kritiker bemängeln, dass der Begriff Overtourismus zu kurz greift und strukturelle Probleme wie Wohnungsmarkt, Mobilität und ungleiche Wertschöpfung verdeckt. Politik steht vor der Frage, ob und wie Tourismus reguliert werden sollte.",
    ja: "観光地では訪問者集中により環境や住民生活への負荷が高まっている。一方、観光は重要な産業でもある。単なる『観光客が多すぎる』という見方では不十分で、住宅や交通など構造問題も絡む。"
  },
  issues: [
    { de: "Braucht es Besucherobergrenzen?", ja: "入域制限は必要か" },
    { de: "Wer profitiert vom Tourismus?", ja: "観光の利益は誰に分配されているか" },
    { de: "Wie schützt man Lebensqualität und Umwelt?", ja: "生活の質と環境をどう守るか" }
  ],
  views: {
    pro: {
      de: "Regulierungen wie Besucherlimits, Abgaben oder zeitliche Steuerung können Umwelt und Wohnraum schützen und Konflikte mit der lokalen Bevölkerung reduzieren.",
      ja: "入域制限や課金は環境や住民生活の保護に寄与する。"
    },
    contra: {
      de: "Starre Beschränkungen gefährden Arbeitsplätze und Einnahmen. Zudem besteht die Gefahr, dass Probleme nur verlagert werden, statt Ursachen wie Wohnraummangel anzugehen.",
      ja: "硬直的規制は雇用や収入を損ない、問題の根本解決にならない恐れがある。"
    },
    compromise: {
      de: "Nachhaltiger Tourismus erfordert eine Kombination aus Lenkung, fairer Wertschöpfung, Investitionen in Infrastruktur und Beteiligung der lokalen Bevölkerung.",
      ja: "観光の誘導、利益配分の改善、インフラ投資、住民参加を組み合わせる。"
    }
  },
  redemittel: [
    "Overtourismus ist weniger ein Mengen- als ein Strukturproblem.",
    "Tourismuspolitik muss Umwelt, Wirtschaft und Lebensqualität zusammendenken.",
    "Aus meiner Sicht braucht es Steuerung statt pauschaler Verbote."
  ]
},
{
  id: "schulessen-religion",
  theme: { de: "Bildung & Integration", ja: "教育と統合" },
  title: { de: "Schulessen und religiöse Rücksichtnahme", ja: "学校給食と宗教的配慮（ハラール）" },
  zustand: {
    de: "In pluralistischen Gesellschaften treffen unterschiedliche religiöse und kulturelle Ernährungsregeln auf staatliche Institutionen wie Schulen. Besonders beim Thema Halal-Essen stellt sich die Frage, ob und wie öffentliche Einrichtungen darauf Rücksicht nehmen sollen. Die Debatte berührt Gleichbehandlung, Religionsfreiheit, organisatorischen Aufwand und gesellschaftlichen Zusammenhalt.",
    ja: "多文化社会では宗教的食規定と公的制度が交差する。学校給食でのハラール対応は、宗教の自由、平等、運営負担、社会的統合を巡る議論を引き起こす。"
  },
  issues: [
    { de: "Ist religiöse Anpassung Aufgabe staatlicher Schulen?", ja: "公立学校は宗教配慮すべきか" },
    { de: "Wo liegen die Grenzen der Neutralität?", ja: "国家の中立性の限界" },
    { de: "Fördert oder behindert Anpassung Integration?", ja: "配慮は統合を促すか阻むか" }
  ],
  views: {
    pro: {
      de: "Religiöse Rücksichtnahme kann Ausgrenzung vermeiden und Teilhabe sichern. Wahlmöglichkeiten beim Essen stärken Integration und Akzeptanz im Schulalltag.",
      ja: "宗教配慮は排除を防ぎ、参加と安心感を高める。"
    },
    contra: {
      de: "Zu weitgehende Anpassung kann organisatorisch aufwendig sein und staatliche Neutralität infrage stellen. Zudem besteht die Sorge vor Parallelstrukturen.",
      ja: "過度な対応は運営負担が大きく、中立性や分断を招く懸念がある。"
    },
    compromise: {
      de: "Pragmatische Lösungen wie vegetarische Optionen für alle können religiöse Bedürfnisse berücksichtigen, ohne das System zu überfrachten.",
      ja: "全員向けのベジタリアン選択肢など、実務的解決が現実的。"
    }
  },
  redemittel: [
    "Hier geht es um den Umgang mit Vielfalt im öffentlichen Raum.",
    "Staatliche Neutralität bedeutet nicht Ignorieren, sondern faire Regeln.",
    "Aus meiner Sicht sind pragmatische Lösungen besser als Sonderregelungen."
  ]
},
// === add these cards to window.CARDS ===

{
  id: "jp-fuufu-bessei",
  theme: { de: "Familie & Recht (Japan)", ja: "家族と法（日本）" },
  title: { de: "Japan: Wahlfreiheit beim Ehe-Namen (夫婦別姓)", ja: "日本の選択的夫婦別姓への賛否" },
  zustand: {
    de: "In Japan ist der gemeinsame Familienname nach der Eheschließung der Regelfall. Kritiker sehen darin eine Einschränkung der individuellen Identität (Beruf, Publikationen, internationale Anschlüsse). Befürworter der bisherigen Praxis betonen Einheit der Familie, Klarheit für Kinder und Verwaltungsvereinfachung. Umstritten sind konkrete Designfragen: Wahlmodell, Nachname der Kinder, Übergangsregeln und Kosten.",
    ja: "日本では婚姻後に同姓とする運用が一般的で、個人のアイデンティティやキャリアとの衝突が論点になる。一方で家族の一体感、子の姓の明確さ、行政実務の簡便さを重視する意見もある。選択制の設計（子の姓、移行措置、コスト）まで含めて議論が分かれる。"
  },
  issues: [
    { de: "Soll der Ehename frei wählbar sein (Wahlmodell)?", ja: "婚姻後の姓は選択制にすべきか" },
    { de: "Wie regelt man den Nachnamen der Kinder fair und praktikabel?", ja: "子の姓をどう決めるべきか（公平性・実務）" },
    { de: "Welche Übergangs- und Verwaltungsregeln sind nötig?", ja: "移行措置・行政手続の設計" }
  ],
  views: {
    pro: {
      de: "Ein Wahlmodell stärkt Selbstbestimmung und Gleichberechtigung. Es reduziert berufliche Nachteile (Name als Marke) und passt besser zu internationaler Mobilität. Familien können selbst entscheiden, was zu ihnen passt – ohne staatliche Bevormundung.",
      ja: "選択制は自己決定と平等を強め、改姓によるキャリア上の不利益を減らし、国際的整合性も高い。家族が自分たちに合う形を選べる点が利点。"
    },
    contra: {
      de: "Ein gemeinsamer Familienname kann Zusammengehörigkeit symbolisieren und vereinfacht Alltag und Verwaltung. Bei einem Wahlmodell drohen neue Konflikte: Druck innerhalb der Familie, Streit um den Kindernamen oder unübersichtliche Regelungen in Schule/Behörden, wenn Standards fehlen.",
      ja: "同姓は家族の一体感を示し、生活・行政実務を簡便にする。選択制は家族内の圧力や子の姓を巡る対立、制度の複雑化を招く恐れがある。"
    },
    compromise: {
      de: "Ein klares Wahlmodell mit Leitplanken: freie Wahl beim Ehename, aber standardisierte Regeln für Kinder (z.B. einheitliche Familienentscheidung bei der Geburt) und einfache Übergangsprozesse. Zusätzlich: Schutz vor innerfamiliärem Druck (Beratung) und digitale Verwaltungsumstellung mit realistischer Frist.",
      ja: "自由選択を認めつつ、子の姓は出生時に家族として明確に決める等のルールを整備し、移行を段階化する。相談体制で圧力を減らし、行政は期限を区切ってデジタル対応する。"
    }
  },
  redemittel: [
    "Meines Erachtens geht es hier um den Ausgleich zwischen individueller Freiheit und sozialer Praktikabilität.",
    "Ein wichtiger Punkt ist die Frage der Kinder – ohne klare Regelung bleibt das Konzept unvollständig.",
    "Man sollte zwischen Symbolpolitik und administrativer Umsetzbarkeit unterscheiden.",
    "Ein Wahlmodell kann funktionieren, wenn die Spielregeln transparent und einfach sind."
  ],
  vocab: [
    { de: "die Selbstbestimmung", ja: "自己決定", tip: "論点の軸に使える万能語。" },
    { de: "die Gleichberechtigung", ja: "男女平等", tip: "Familie/Arbeitsmarkt どちらでも頻出。" },
    { de: "die Übergangsregelung", ja: "移行措置", tip: "制度変更の議論で強い。" },
    { de: "der Verwaltungsaufwand", ja: "行政コスト/事務負担", tip: "Kosten だけでなく Aufwand も言えると便利。" }
  ],
  links: [
    { label: "Wikipedia: Koseki / Familiennamensystem (Überblick)", url: "https://de.wikipedia.org/wiki/Koseki" }
  ]
},

{
  id: "weihnachtsmarkt-kosten-sicherheit",
  theme: { de: "Stadt & Sicherheit", ja: "都市と安全" },
  title: { de: "Weihnachtsmärkte: steigende Sicherheitskosten und Budgets", ja: "クリスマスマーケットと予算増大（安全対策）" },
  zustand: {
    de: "Viele Städte erhöhen die Sicherheitsmaßnahmen auf Weihnachtsmärkten (z.B. Zufahrtssperren, Poller, zusätzliche Sicherheitskräfte). Das steigert die Budgets deutlich und führt zu Zielkonflikten: Sicherheit vs. Kosten, Offenheit vs. Kontrolle, Tradition vs. neue Risiken. Gerade kleinere Kommunen stoßen an finanzielle Grenzen, wollen aber die Attraktivität der Innenstadt erhalten.",
    ja: "クリスマスマーケットでは侵入防止のバリケードや警備強化などが進み、自治体のコストが増大している。安全・費用・開放性・伝統のバランスが課題で、とくに小規模自治体は財政負担の限界が見えやすい。"
  },
  issues: [
    { de: "Wer soll die Mehrkosten tragen: Stadt, Veranstalter, Besucher?", ja: "追加費用は誰が負担すべきか（自治体/主催/来場者）" },
    { de: "Wie viel Sicherheit ist realistisch – und ab wann sinkt die Lebensqualität?", ja: "安全強化の限度と生活の質" },
    { de: "Wie schützt man offene Stadträume ohne ‘Festungsgefühl’?", ja: "開放的な都市空間を守りつつ要塞化を避けるには" }
  ],
  views: {
    pro: {
      de: "Erhöhte Sicherheitsbudgets sind angesichts neuer Bedrohungslagen gerechtfertigt. Prävention kann Menschenleben schützen und das Vertrauen der Bevölkerung stärken. Ein sicherer Markt stabilisiert zudem lokale Wirtschaft und Innenstädte.",
      ja: "新たなリスクに備える安全投資は正当化されうる。予防は人命を守り、安心感を高め、地域経済の維持にもつながる。"
    },
    contra: {
      de: "Sicherheitskosten können ausufern und andere kommunale Aufgaben verdrängen. Zu starke Kontrolle verändert die Atmosphäre und kann Besucher abschrecken. Außerdem ist ‘absolute Sicherheit’ nicht erreichbar – Kosten und Nutzen müssen verhältnismäßig bleiben.",
      ja: "安全対策費が膨らむと他の行政サービスを圧迫する。過度な警備は雰囲気を損ない来場者減につながる可能性もある。絶対安全は不可能なので費用対効果と比例性が重要。"
    },
    compromise: {
      de: "Risikobasiertes Konzept: Priorität für konkrete Schwachstellen (Zufahrten), modulare Maßnahmen je nach Lage, und Kooperation zwischen Stadt, Polizei und Veranstaltern. Finanzierung über Mischmodell (kommunaler Anteil + zweckgebundene Beiträge + ggf. Landesförderung) – transparent kommuniziert, um Akzeptanz zu sichern.",
      ja: "リスクに応じた重点配分（侵入経路など）と、状況に応じて強弱をつけるモジュール型対策にする。費用は自治体・主催・補助金等のミックスで透明化し、受容性を確保する。"
    }
  },
  redemittel: [
    "Hier prallen Sicherheitsbedürfnis und finanzielle Tragfähigkeit direkt aufeinander.",
    "Aus meiner Sicht ist ein risikobasierter Ansatz sinnvoller als pauschale Verschärfungen.",
    "Man darf nicht den Eindruck einer ‘Festung’ erzeugen, sonst leidet die Akzeptanz.",
    "Entscheidend ist die Verhältnismäßigkeit: Was bringt messbar mehr Sicherheit – und zu welchem Preis?"
  ],
  vocab: [
    { de: "die Sicherheitsmaßnahmen", ja: "安全対策", tip: "万能。Maßnahmen = ‘施策’。" },
    { de: "die Zufahrtssperre", ja: "車両侵入防止柵", tip: "Zufahrt + Sperre で意味が作りやすい。" },
    { de: "die Akzeptanz", ja: "受容/支持", tip: "雰囲気・負担・規制の議論で強い。" },
    { de: "die Verhältnismäßigkeit", ja: "比例性/釣り合い", tip: "独検1級の“言えると一段上”。" }
  ],
  links: [
    { label: "Bericht zu Sicherheitskosten bei Weihnachtsmärkten (Beispiele nach Stadt)", url: "https://www.welt.de/article6919459ec7cd0ff6c620317b" }
  ]
},
];