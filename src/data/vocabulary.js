// 新版标准日本语（初级）单词表，按课本章节排序
const vocabulary = [
  {
    chapter: 1,
    chapterTitle: "第1课 · わたしは　田中です",
    words: [
      { id: 101, word: "わたし",      kana: "わたし",      romaji: "watashi",    meaning: "我",     example: "わたしは　李です。",         exampleMeaning: "我是小李。" },
      { id: 102, word: "あなた",      kana: "あなた",      romaji: "anata",      meaning: "你",     example: "あなたは　学生ですか。",      exampleMeaning: "你是学生吗？" },
      { id: 103, word: "学生",        kana: "がくせい",    romaji: "gakusei",    meaning: "学生",   example: "わたしは　学生です。",         exampleMeaning: "我是学生。" },
      { id: 104, word: "先生",        kana: "せんせい",    romaji: "sensei",     meaning: "老师",   example: "田中さんは　先生です。",       exampleMeaning: "田中先生是老师。" },
      { id: 105, word: "会社員",      kana: "かいしゃいん", romaji: "kaishain",  meaning: "公司职员", example: "父は　会社員です。",          exampleMeaning: "我父亲是公司职员。" },
      { id: 106, word: "日本人",      kana: "にほんじん",  romaji: "nihonjin",   meaning: "日本人", example: "田中さんは　日本人です。",     exampleMeaning: "田中先生是日本人。" },
      { id: 107, word: "中国人",      kana: "ちゅうごくじん", romaji: "chuugokujin", meaning: "中国人", example: "わたしは　中国人です。",   exampleMeaning: "我是中国人。" },
      { id: 108, word: "はじめまして", kana: "はじめまして", romaji: "hajimemashite", meaning: "初次见面", example: "はじめまして、李です。よろしく。", exampleMeaning: "初次见面，我是小李，请多关照。" },
    ]
  },
  {
    chapter: 2,
    chapterTitle: "第2课 · これは　本です",
    words: [
      { id: 201, word: "本",          kana: "ほん",        romaji: "hon",        meaning: "书",     example: "これは　本です。",             exampleMeaning: "这是书。" },
      { id: 202, word: "雑誌",        kana: "ざっし",      romaji: "zasshi",     meaning: "杂志",   example: "あれは　雑誌ですか。",         exampleMeaning: "那是杂志吗？" },
      { id: 203, word: "辞書",        kana: "じしょ",      romaji: "jisho",      meaning: "词典",   example: "これは　日本語の　辞書です。", exampleMeaning: "这是日语词典。" },
      { id: 204, word: "新聞",        kana: "しんぶん",    romaji: "shinbun",    meaning: "报纸",   example: "それは　新聞です。",           exampleMeaning: "那是报纸。" },
      { id: 205, word: "携帯電話",    kana: "けいたいでんわ", romaji: "keitai denwa", meaning: "手机", example: "これは　わたしの　携帯電話です。", exampleMeaning: "这是我的手机。" },
      { id: 206, word: "かばん",      kana: "かばん",      romaji: "kaban",      meaning: "包",     example: "そのかばんは　田中さんの　です。", exampleMeaning: "那个包是田中先生的。" },
      { id: 207, word: "傘",          kana: "かさ",        romaji: "kasa",       meaning: "雨伞",   example: "この　傘は　あなたの　ですか。", exampleMeaning: "这把雨伞是你的吗？" },
      { id: 208, word: "財布",        kana: "さいふ",      romaji: "saifu",      meaning: "钱包",   example: "財布は　どこですか。",         exampleMeaning: "钱包在哪里？" },
    ]
  },
  {
    chapter: 3,
    chapterTitle: "第3课 · ここは　食堂です",
    words: [
      { id: 301, word: "食堂",        kana: "しょくどう",  romaji: "shokudou",   meaning: "食堂",   example: "ここは　食堂です。",           exampleMeaning: "这里是食堂。" },
      { id: 302, word: "図書館",      kana: "としょかん",  romaji: "toshokan",   meaning: "图书馆", example: "図書館は　あそこです。",       exampleMeaning: "图书馆在那边。" },
      { id: 303, word: "郵便局",      kana: "ゆうびんきょく", romaji: "yuubinkyoku", meaning: "邮局", example: "郵便局は　どこですか。",      exampleMeaning: "邮局在哪里？" },
      { id: 304, word: "銀行",        kana: "ぎんこう",    romaji: "ginkou",     meaning: "银行",   example: "銀行は　駅の　そばです。",     exampleMeaning: "银行在车站旁边。" },
      { id: 305, word: "病院",        kana: "びょういん",  romaji: "byouin",     meaning: "医院",   example: "病院はどこにありますか。",     exampleMeaning: "医院在哪里？" },
      { id: 306, word: "デパート",    kana: "デパート",    romaji: "depaato",    meaning: "百货商店", example: "デパートで　買い物します。",  exampleMeaning: "在百货商店购物。" },
      { id: 307, word: "トイレ",      kana: "トイレ",      romaji: "toire",      meaning: "洗手间", example: "トイレは　どこですか。",       exampleMeaning: "洗手间在哪里？" },
      { id: 308, word: "会議室",      kana: "かいぎしつ",  romaji: "kaigishitsu", meaning: "会议室", example: "会議室は　3階です。",         exampleMeaning: "会议室在3楼。" },
    ]
  },
  {
    chapter: 4,
    chapterTitle: "第4课 · 今　何時ですか",
    words: [
      { id: 401, word: "今",          kana: "いま",        romaji: "ima",        meaning: "现在",   example: "今　何時ですか。",             exampleMeaning: "现在几点？" },
      { id: 402, word: "時間",        kana: "じかん",      romaji: "jikan",      meaning: "时间",   example: "時間が　ありません。",         exampleMeaning: "没有时间。" },
      { id: 403, word: "午前",        kana: "ごぜん",      romaji: "gozen",      meaning: "上午",   example: "午前　9時に　会社へ　行きます。", exampleMeaning: "上午9点去公司。" },
      { id: 404, word: "午後",        kana: "ごご",        romaji: "gogo",       meaning: "下午",   example: "午後　3時から　会議が　あります。", exampleMeaning: "下午3点有会议。" },
      { id: 405, word: "朝",          kana: "あさ",        romaji: "asa",        meaning: "早晨",   example: "朝　7時に　起きます。",         exampleMeaning: "早上7点起床。" },
      { id: 406, word: "夜",          kana: "よる",        romaji: "yoru",       meaning: "晚上",   example: "夜　11時に　寝ます。",          exampleMeaning: "晚上11点睡觉。" },
      { id: 407, word: "休み",        kana: "やすみ",      romaji: "yasumi",     meaning: "休息；假日", example: "日曜日は　休みです。",       exampleMeaning: "星期天休息。" },
      { id: 408, word: "昼",          kana: "ひる",        romaji: "hiru",       meaning: "中午",   example: "昼に　何を　食べますか。",     exampleMeaning: "中午吃什么？" },
    ]
  },
  {
    chapter: 5,
    chapterTitle: "第5课 · 誕生日は　いつですか",
    words: [
      { id: 501, word: "誕生日",      kana: "たんじょうび", romaji: "tanjoubi",  meaning: "生日",   example: "誕生日は　いつですか。",       exampleMeaning: "生日是什么时候？" },
      { id: 502, word: "今日",        kana: "きょう",      romaji: "kyou",       meaning: "今天",   example: "今日は　何曜日ですか。",       exampleMeaning: "今天是星期几？" },
      { id: 503, word: "明日",        kana: "あした",      romaji: "ashita",     meaning: "明天",   example: "明日　学校へ　行きます。",     exampleMeaning: "明天去学校。" },
      { id: 504, word: "昨日",        kana: "きのう",      romaji: "kinou",      meaning: "昨天",   example: "昨日　映画を　見ました。",     exampleMeaning: "昨天看了电影。" },
      { id: 505, word: "来年",        kana: "らいねん",    romaji: "rainen",     meaning: "明年",   example: "来年　日本へ　行きたいです。", exampleMeaning: "明年想去日本。" },
      { id: 506, word: "先月",        kana: "せんげつ",    romaji: "sengetsu",   meaning: "上个月", example: "先月　友達に　会いました。",   exampleMeaning: "上个月见到了朋友。" },
      { id: 507, word: "来月",        kana: "らいげつ",    romaji: "raigetsu",   meaning: "下个月", example: "来月　新しい　仕事が　始まります。", exampleMeaning: "下个月开始新工作。" },
      { id: 508, word: "毎日",        kana: "まいにち",    romaji: "mainichi",   meaning: "每天",   example: "毎日　日本語を　勉強します。", exampleMeaning: "每天学习日语。" },
    ]
  },
  {
    chapter: 6,
    chapterTitle: "第6课 · 桜が　きれいです",
    words: [
      { id: 601, word: "桜",          kana: "さくら",      romaji: "sakura",     meaning: "樱花",   example: "桜が　きれいです。",           exampleMeaning: "樱花很美。" },
      { id: 602, word: "天気",        kana: "てんき",      romaji: "tenki",      meaning: "天气",   example: "今日は　いい　天気ですね。",   exampleMeaning: "今天天气真好啊。" },
      { id: 603, word: "有名",        kana: "ゆうめい",    romaji: "yuumei",     meaning: "有名",   example: "富士山は　有名です。",         exampleMeaning: "富士山很有名。" },
      { id: 604, word: "静か",        kana: "しずか",      romaji: "shizuka",    meaning: "安静",   example: "図書館は　静かです。",         exampleMeaning: "图书馆很安静。" },
      { id: 605, word: "便利",        kana: "べんり",      romaji: "benri",      meaning: "方便",   example: "この　電車は　便利です。",     exampleMeaning: "这列电车很方便。" },
      { id: 606, word: "好き",        kana: "すき",        romaji: "suki",       meaning: "喜欢",   example: "わたしは　音楽が　好きです。", exampleMeaning: "我喜欢音乐。" },
      { id: 607, word: "嫌い",        kana: "きらい",      romaji: "kirai",      meaning: "讨厌",   example: "辛い　食べ物が　嫌いです。",   exampleMeaning: "不喜欢辛辣的食物。" },
      { id: 608, word: "上手",        kana: "じょうず",    romaji: "jouzu",      meaning: "擅长",   example: "田中さんは　料理が　上手です。", exampleMeaning: "田中先生擅长烹饪。" },
    ]
  },
  {
    chapter: 7,
    chapterTitle: "第7课 · 荷物を　送ります",
    words: [
      { id: 701, word: "電話",        kana: "でんわ",      romaji: "denwa",      meaning: "电话",   example: "電話を　かけます。",           exampleMeaning: "打电话。" },
      { id: 702, word: "手紙",        kana: "てがみ",      romaji: "tegami",     meaning: "信",     example: "友達に　手紙を　書きます。",   exampleMeaning: "给朋友写信。" },
      { id: 703, word: "荷物",        kana: "にもつ",      romaji: "nimotsu",    meaning: "行李",   example: "荷物を　駅まで　送ります。",   exampleMeaning: "把行李送到车站。" },
      { id: 704, word: "切符",        kana: "きっぷ",      romaji: "kippu",      meaning: "车票",   example: "切符を　買います。",           exampleMeaning: "买车票。" },
      { id: 705, word: "地図",        kana: "ちず",        romaji: "chizu",      meaning: "地图",   example: "地図を　見ながら　歩きます。", exampleMeaning: "一边看地图一边走。" },
      { id: 706, word: "写真",        kana: "しゃしん",    romaji: "shashin",    meaning: "照片",   example: "写真を　撮ります。",           exampleMeaning: "拍照片。" },
      { id: 707, word: "店",          kana: "みせ",        romaji: "mise",       meaning: "商店",   example: "あの　店で　買い物を　します。", exampleMeaning: "在那家店买东西。" },
      { id: 708, word: "駅",          kana: "えき",        romaji: "eki",        meaning: "车站",   example: "駅まで　歩いて　5分です。",    exampleMeaning: "步行到车站5分钟。" },
    ]
  },
  {
    chapter: 8,
    chapterTitle: "第8课 · 森さんは　7時に　起きます",
    words: [
      { id: 801, word: "起きます",    kana: "おきます",    romaji: "okimasu",    meaning: "起床",   example: "毎朝　6時に　起きます。",      exampleMeaning: "每天早上6点起床。" },
      { id: 802, word: "寝ます",      kana: "ねます",      romaji: "nemasu",     meaning: "睡觉",   example: "夜　12時に　寝ます。",          exampleMeaning: "晚上12点睡觉。" },
      { id: 803, word: "食べます",    kana: "たべます",    romaji: "tabemasu",   meaning: "吃",     example: "朝ご飯を　食べます。",         exampleMeaning: "吃早饭。" },
      { id: 804, word: "飲みます",    kana: "のみます",    romaji: "nomimasu",   meaning: "喝",     example: "コーヒーを　飲みます。",       exampleMeaning: "喝咖啡。" },
      { id: 805, word: "行きます",    kana: "いきます",    romaji: "ikimasu",    meaning: "去",     example: "学校へ　行きます。",           exampleMeaning: "去学校。" },
      { id: 806, word: "帰ります",    kana: "かえります",  romaji: "kaerimasu",  meaning: "回去",   example: "5時に　家へ　帰ります。",      exampleMeaning: "5点回家。" },
      { id: 807, word: "働きます",    kana: "はたらきます", romaji: "hatarakimasu", meaning: "工作", example: "会社で　働きます。",          exampleMeaning: "在公司工作。" },
      { id: 808, word: "勉強します",  kana: "べんきょうします", romaji: "benkyou shimasu", meaning: "学习", example: "毎日　日本語を　勉強します。", exampleMeaning: "每天学习日语。" },
    ]
  },
];

export default vocabulary;
