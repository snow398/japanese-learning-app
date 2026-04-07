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
  {
    chapter: 9,
    chapterTitle: "第9课 · 休みの日には何をしますか",
    words: [
      { id: 901, word: "映画",       kana: "えいが",       romaji: "eiga",         meaning: "电影",   example: "映画を　見に　行きます。",         exampleMeaning: "去看电影。" },
      { id: 902, word: "音楽",       kana: "おんがく",     romaji: "ongaku",       meaning: "音乐",   example: "音楽を　聴くのが　好きです。",     exampleMeaning: "喜欢听音乐。" },
      { id: 903, word: "運動",       kana: "うんどう",     romaji: "undou",        meaning: "运动",   example: "毎日　運動を　しています。",       exampleMeaning: "每天都在运动。" },
      { id: 904, word: "料理",       kana: "りょうり",     romaji: "ryouri",       meaning: "料理/烹饪", example: "週末に　料理を　作ります。",    exampleMeaning: "周末做料理。" },
      { id: 905, word: "旅行",       kana: "りょこう",     romaji: "ryokou",       meaning: "旅行",   example: "日本へ　旅行に　行きたいです。",   exampleMeaning: "想去日本旅行。" },
      { id: 906, word: "買い物",     kana: "かいもの",     romaji: "kaimono",      meaning: "购物",   example: "デパートで　買い物を　します。",   exampleMeaning: "在百货商店购物。" },
      { id: 907, word: "散歩",       kana: "さんぽ",       romaji: "sanpo",        meaning: "散步",   example: "公園で　散歩を　します。",         exampleMeaning: "在公园散步。" },
      { id: 908, word: "趣味",       kana: "しゅみ",       romaji: "shumi",        meaning: "爱好",   example: "趣味は　読書です。",               exampleMeaning: "爱好是读书。" },
    ]
  },
  {
    chapter: 10,
    chapterTitle: "第10课 · 売り場はどこですか",
    words: [
      { id: 1001, word: "上",        kana: "うえ",         romaji: "ue",           meaning: "上面",   example: "机の　上に　本が　あります。",     exampleMeaning: "桌子上有书。" },
      { id: 1002, word: "下",        kana: "した",         romaji: "shita",        meaning: "下面",   example: "いすの　下に　ねこが　います。",   exampleMeaning: "椅子下面有猫。" },
      { id: 1003, word: "左",        kana: "ひだり",       romaji: "hidari",       meaning: "左边",   example: "左に　曲がってください。",         exampleMeaning: "请向左转。" },
      { id: 1004, word: "右",        kana: "みぎ",         romaji: "migi",         meaning: "右边",   example: "右に　曲がってください。",         exampleMeaning: "请向右转。" },
      { id: 1005, word: "前",        kana: "まえ",         romaji: "mae",          meaning: "前面",   example: "駅の　前で　待っています。",       exampleMeaning: "在车站前面等。" },
      { id: 1006, word: "後ろ",      kana: "うしろ",       romaji: "ushiro",       meaning: "后面",   example: "後ろを　見てください。",           exampleMeaning: "请看后面。" },
      { id: 1007, word: "中",        kana: "なか",         romaji: "naka",         meaning: "里面",   example: "箱の　中に　何が　ありますか。",   exampleMeaning: "箱子里面有什么？" },
      { id: 1008, word: "隣",        kana: "となり",       romaji: "tonari",       meaning: "旁边",   example: "銀行の　隣に　郵便局が　あります。", exampleMeaning: "银行旁边有邮局。" },
    ]
  },
  {
    chapter: 11,
    chapterTitle: "第11课 · 誕生日のプレゼントを買いました",
    words: [
      { id: 1101, word: "プレゼント", kana: "プレゼント",   romaji: "purezento",   meaning: "礼物",   example: "誕生日の　プレゼントを　買いました。", exampleMeaning: "买了生日礼物。" },
      { id: 1102, word: "花",        kana: "はな",         romaji: "hana",         meaning: "花",     example: "きれいな　花を　買いました。",     exampleMeaning: "买了漂亮的花。" },
      { id: 1103, word: "いくら",    kana: "いくら",       romaji: "ikura",        meaning: "多少钱", example: "これは　いくらですか。",           exampleMeaning: "这个多少钱？" },
      { id: 1104, word: "高い",      kana: "たかい",       romaji: "takai",        meaning: "贵/高",  example: "このかばんは　高いですね。",       exampleMeaning: "这个包真贵啊。" },
      { id: 1105, word: "安い",      kana: "やすい",       romaji: "yasui",        meaning: "便宜",   example: "このシャツは　安いです。",         exampleMeaning: "这件衬衫很便宜。" },
      { id: 1106, word: "ください",  kana: "ください",     romaji: "kudasai",      meaning: "请给我", example: "これを　ひとつ　ください。",       exampleMeaning: "请给我一个这个。" },
      { id: 1107, word: "色",        kana: "いろ",         romaji: "iro",          meaning: "颜色",   example: "この　色が　好きです。",           exampleMeaning: "喜欢这个颜色。" },
      { id: 1108, word: "サイズ",    kana: "サイズ",       romaji: "saizu",        meaning: "尺寸",   example: "サイズが　ありますか。",           exampleMeaning: "有这个尺码吗？" },
    ]
  },
  {
    chapter: 12,
    chapterTitle: "第12课 · 荷物を送ってください",
    words: [
      { id: 1201, word: "手伝う",    kana: "てつだう",     romaji: "tetsudau",     meaning: "帮忙",   example: "手伝って　もらえますか。",         exampleMeaning: "能帮我一下吗？" },
      { id: 1202, word: "教える",    kana: "おしえる",     romaji: "oshieru",      meaning: "教/告知", example: "道を　教えてください。",          exampleMeaning: "请告诉我路怎么走。" },
      { id: 1203, word: "貸す",      kana: "かす",         romaji: "kasu",         meaning: "借出",   example: "辞書を　貸してください。",         exampleMeaning: "请借给我词典。" },
      { id: 1204, word: "借りる",    kana: "かりる",       romaji: "kariru",       meaning: "借入",   example: "本を　借りてもいいですか。",       exampleMeaning: "可以借这本书吗？" },
      { id: 1205, word: "持つ",      kana: "もつ",         romaji: "motsu",        meaning: "拿/持有", example: "かばんを　持って　あげます。",    exampleMeaning: "我帮你拿包。" },
      { id: 1206, word: "待つ",      kana: "まつ",         romaji: "matsu",        meaning: "等待",   example: "少し　待って　ください。",         exampleMeaning: "请稍等一下。" },
      { id: 1207, word: "呼ぶ",      kana: "よぶ",         romaji: "yobu",         meaning: "叫/呼唤", example: "タクシーを　呼んで　ください。",  exampleMeaning: "请帮我叫出租车。" },
      { id: 1208, word: "送る",      kana: "おくる",       romaji: "okuru",        meaning: "寄/送",  example: "荷物を　宅配便で　送ります。",     exampleMeaning: "用快递寄行李。" },
    ]
  },
  {
    chapter: 13,
    chapterTitle: "第13课 · 写真を撮ってもいいですか",
    words: [
      { id: 1301, word: "使う",      kana: "つかう",       romaji: "tsukau",       meaning: "使用",   example: "この　電話を　使っても　いいですか。", exampleMeaning: "可以用这个电话吗？" },
      { id: 1302, word: "入る",      kana: "はいる",       romaji: "hairu",        meaning: "进入",   example: "部屋に　入っても　いいですか。",   exampleMeaning: "可以进房间吗？" },
      { id: 1303, word: "開ける",    kana: "あける",       romaji: "akeru",        meaning: "打开",   example: "窓を　開けても　いいですか。",     exampleMeaning: "可以开窗吗？" },
      { id: 1304, word: "吸う",      kana: "すう",         romaji: "suu",          meaning: "吸（烟）", example: "ここで　タバコを　吸っても　いいですか。", exampleMeaning: "可以在这里抽烟吗？" },
      { id: 1305, word: "持ち込む",  kana: "もちこむ",     romaji: "mochikomu",    meaning: "带入",   example: "食べ物を　持ち込んでも　いいですか。", exampleMeaning: "可以带食物进来吗？" },
      { id: 1306, word: "触る",      kana: "さわる",       romaji: "sawaru",       meaning: "触摸",   example: "触っても　いいですか。",           exampleMeaning: "可以摸吗？" },
      { id: 1307, word: "試す",      kana: "ためす",       romaji: "tamesu",       meaning: "尝试",   example: "試しても　いいですか。",           exampleMeaning: "可以试试吗？" },
      { id: 1308, word: "変える",    kana: "かえる",       romaji: "kaeru",        meaning: "改变/更换", example: "席を　変えても　いいですか。",  exampleMeaning: "可以换座位吗？" },
    ]
  },
  {
    chapter: 14,
    chapterTitle: "第14课 · 電気を消してはいけません",
    words: [
      { id: 1401, word: "消す",      kana: "けす",         romaji: "kesu",         meaning: "关掉/熄灭", example: "電気を　消してください。",      exampleMeaning: "请关灯。" },
      { id: 1402, word: "つける",    kana: "つける",       romaji: "tsukeru",      meaning: "打开/开启", example: "エアコンを　つけても　いいですか。", exampleMeaning: "可以开空调吗？" },
      { id: 1403, word: "騒ぐ",      kana: "さわぐ",       romaji: "sawagu",       meaning: "喧闹",   example: "ここで　騒いでは　いけません。",   exampleMeaning: "不可以在这里喧闹。" },
      { id: 1404, word: "走る",      kana: "はしる",       romaji: "hashiru",      meaning: "跑步",   example: "廊下を　走っては　いけません。",   exampleMeaning: "不可以在走廊跑。" },
      { id: 1405, word: "危ない",    kana: "あぶない",     romaji: "abunai",       meaning: "危险",   example: "危ないから　入っては　いけません。", exampleMeaning: "因为危险所以不可以进入。" },
      { id: 1406, word: "ルール",    kana: "ルール",       romaji: "ruuru",        meaning: "规则",   example: "ルールを　守ってください。",       exampleMeaning: "请遵守规则。" },
      { id: 1407, word: "禁止",      kana: "きんし",       romaji: "kinshi",       meaning: "禁止",   example: "ここは　撮影　禁止です。",         exampleMeaning: "这里禁止拍摄。" },
      { id: 1408, word: "マナー",    kana: "マナー",       romaji: "manaa",        meaning: "礼仪/规矩", example: "マナーを　守りましょう。",       exampleMeaning: "请遵守礼仪。" },
    ]
  },
  {
    chapter: 15,
    chapterTitle: "第15课 · 私は毎朝ジョギングをしています",
    words: [
      { id: 1501, word: "住む",      kana: "すむ",         romaji: "sumu",         meaning: "居住",   example: "東京に　住んでいます。",           exampleMeaning: "住在东京。" },
      { id: 1502, word: "結婚する",  kana: "けっこんする", romaji: "kekkon suru",  meaning: "结婚",   example: "結婚して　います。",               exampleMeaning: "已经结婚了（状态）。" },
      { id: 1503, word: "知る",      kana: "しる",         romaji: "shiru",        meaning: "知道",   example: "田中さんを　知っていますか。",     exampleMeaning: "你认识田中先生吗？" },
      { id: 1504, word: "着る",      kana: "きる",         romaji: "kiru",         meaning: "穿（衣服）", example: "セーターを　着ています。",      exampleMeaning: "穿着毛衣。" },
      { id: 1505, word: "かぶる",    kana: "かぶる",       romaji: "kaburu",       meaning: "戴（帽子）", example: "帽子を　かぶっています。",      exampleMeaning: "戴着帽子。" },
      { id: 1506, word: "続ける",    kana: "つづける",     romaji: "tsuzukeru",    meaning: "继续",   example: "毎日　練習を　続けています。",     exampleMeaning: "每天坚持练习。" },
      { id: 1507, word: "習慣",      kana: "しゅうかん",   romaji: "shuukan",      meaning: "习惯",   example: "早起きの　習慣が　あります。",     exampleMeaning: "有早起的习惯。" },
      { id: 1508, word: "ジョギング", kana: "ジョギング",  romaji: "jogingu",      meaning: "慢跑",   example: "毎朝　ジョギングを　しています。", exampleMeaning: "每天早上跑步。" },
    ]
  },
  {
    chapter: 16,
    chapterTitle: "第16课 · 明日の天気はどうですか",
    words: [
      { id: 1601, word: "天気予報",  kana: "てんきよほう", romaji: "tenki yohou",  meaning: "天气预报", example: "天気予報を　確認します。",        exampleMeaning: "确认天气预报。" },
      { id: 1602, word: "晴れ",      kana: "はれ",         romaji: "hare",         meaning: "晴天",   example: "明日は　晴れる　でしょう。",       exampleMeaning: "明天应该会晴。" },
      { id: 1603, word: "曇り",      kana: "くもり",       romaji: "kumori",       meaning: "阴天",   example: "今日は　曇りです。",               exampleMeaning: "今天是阴天。" },
      { id: 1604, word: "雨",        kana: "あめ",         romaji: "ame",          meaning: "雨",     example: "雨が　降って　います。",           exampleMeaning: "正在下雨。" },
      { id: 1605, word: "雪",        kana: "ゆき",         romaji: "yuki",         meaning: "雪",     example: "雪が　降りました。",               exampleMeaning: "下雪了。" },
      { id: 1606, word: "暖かい",    kana: "あたたかい",   romaji: "atatakai",     meaning: "暖和",   example: "春は　暖かいです。",               exampleMeaning: "春天很暖和。" },
      { id: 1607, word: "涼しい",    kana: "すずしい",     romaji: "suzushii",     meaning: "凉爽",   example: "秋は　涼しいです。",               exampleMeaning: "秋天很凉爽。" },
      { id: 1608, word: "寒い",      kana: "さむい",       romaji: "samui",        meaning: "冷",     example: "冬は　とても　寒いです。",         exampleMeaning: "冬天非常冷。" },
    ]
  },
  {
    chapter: 17,
    chapterTitle: "第17课 · 日本の映画を見たことがありますか",
    words: [
      { id: 1701, word: "経験",      kana: "けいけん",     romaji: "keiken",       meaning: "经历/经验", example: "いい　経験を　しました。",       exampleMeaning: "有了很好的经历。" },
      { id: 1702, word: "富士山",    kana: "ふじさん",     romaji: "fujisan",      meaning: "富士山", example: "富士山に　登った　ことが　あります。", exampleMeaning: "曾经爬过富士山。" },
      { id: 1703, word: "乗る",      kana: "のる",          romaji: "noru",        meaning: "乘坐",   example: "新幹線に　乗った　ことが　ありますか。", exampleMeaning: "你坐过新干线吗？" },
      { id: 1704, word: "一度",      kana: "いちど",       romaji: "ichido",       meaning: "一次",   example: "一度　行った　ことが　あります。",  exampleMeaning: "曾经去过一次。" },
      { id: 1705, word: "初めて",    kana: "はじめて",     romaji: "hajimete",     meaning: "第一次", example: "初めて　日本に　来ました。",       exampleMeaning: "第一次来日本。" },
      { id: 1706, word: "挑戦する",  kana: "ちょうせんする", romaji: "chousen suru", meaning: "挑战", example: "新しい　ことに　挑戦します。",     exampleMeaning: "挑战新事物。" },
      { id: 1707, word: "参加する",  kana: "さんかする",   romaji: "sanka suru",   meaning: "参加",   example: "イベントに　参加した　ことが　ありますか。", exampleMeaning: "你参加过活动吗？" },
      { id: 1708, word: "訪れる",    kana: "おとずれる",   romaji: "otozureru",    meaning: "访问/游览", example: "京都を　訪れた　ことが　あります。", exampleMeaning: "曾经去过京都。" },
    ]
  },
  {
    chapter: 18,
    chapterTitle: "第18课 · 歌うことが好きです",
    words: [
      { id: 1801, word: "泳ぐ",      kana: "およぐ",       romaji: "oyogu",        meaning: "游泳",   example: "泳ぐことが　好きです。",           exampleMeaning: "喜欢游泳。" },
      { id: 1802, word: "歌う",      kana: "うたう",       romaji: "utau",         meaning: "唱歌",   example: "歌を　歌うことが　好きです。",     exampleMeaning: "喜欢唱歌。" },
      { id: 1803, word: "踊る",      kana: "おどる",       romaji: "odoru",        meaning: "跳舞",   example: "踊ることが　できます。",           exampleMeaning: "会跳舞。" },
      { id: 1804, word: "描く",      kana: "かく",         romaji: "kaku",         meaning: "画/绘画", example: "絵を　描くことが　趣味です。",    exampleMeaning: "画画是爱好。" },
      { id: 1805, word: "弾く",      kana: "ひく",         romaji: "hiku",         meaning: "弹（乐器）", example: "ピアノを　弾くことが　できます。", exampleMeaning: "会弹钢琴。" },
      { id: 1806, word: "登る",      kana: "のぼる",       romaji: "noboru",       meaning: "攀登",   example: "山に　登ることが　好きです。",     exampleMeaning: "喜欢爬山。" },
      { id: 1807, word: "集める",    kana: "あつめる",     romaji: "atsumeru",     meaning: "收集",   example: "切手を　集めることが　趣味です。", exampleMeaning: "集邮是爱好。" },
      { id: 1808, word: "趣味",      kana: "しゅみ",       romaji: "shumi",        meaning: "兴趣爱好", example: "あなたの　趣味は　何ですか。",   exampleMeaning: "你的爱好是什么？" },
    ]
  },
  {
    chapter: 19,
    chapterTitle: "第19课 · 電車よりバスのほうが便利です",
    words: [
      { id: 1901, word: "より",      kana: "より",         romaji: "yori",         meaning: "比",     example: "電車より　バスの　ほうが　速いです。", exampleMeaning: "比起电车，公交车更快。" },
      { id: 1902, word: "もっと",    kana: "もっと",       romaji: "motto",        meaning: "更/还要", example: "もっと　ゆっくり　話してください。", exampleMeaning: "请说得更慢一些。" },
      { id: 1903, word: "一番",      kana: "いちばん",     romaji: "ichiban",      meaning: "最",     example: "日本語が　一番　好きです。",       exampleMeaning: "最喜欢日语。" },
      { id: 1904, word: "ゆっくり",  kana: "ゆっくり",     romaji: "yukkuri",      meaning: "慢慢地", example: "ゆっくり　話してください。",       exampleMeaning: "请说慢一点。" },
      { id: 1905, word: "速い",      kana: "はやい",       romaji: "hayai",        meaning: "快/早",  example: "新幹線は　とても　速いです。",     exampleMeaning: "新干线非常快。" },
      { id: 1906, word: "遅い",      kana: "おそい",       romaji: "osoi",         meaning: "慢/晚",  example: "バスは　電車より　遅いです。",     exampleMeaning: "公交车比电车慢。" },
      { id: 1907, word: "少し",      kana: "すこし",       romaji: "sukoshi",      meaning: "一点/稍微", example: "少し　待って　ください。",       exampleMeaning: "请稍等一下。" },
      { id: 1908, word: "どちら",    kana: "どちら",       romaji: "dochira",      meaning: "哪个/哪边", example: "どちらが　好きですか。",         exampleMeaning: "你更喜欢哪个？" },
    ]
  },
  {
    chapter: 20,
    chapterTitle: "第20课 · どこで買えますか",
    words: [
      { id: 2001, word: "話せる",    kana: "はなせる",     romaji: "hanaseru",     meaning: "能说/会说", example: "日本語が　話せますか。",        exampleMeaning: "你会说日语吗？" },
      { id: 2002, word: "読める",    kana: "よめる",       romaji: "yomeru",       meaning: "能读",   example: "ひらがなが　読めます。",           exampleMeaning: "会读平假名。" },
      { id: 2003, word: "書ける",    kana: "かける",       romaji: "kakeru",       meaning: "能写",   example: "漢字が　書けますか。",             exampleMeaning: "会写汉字吗？" },
      { id: 2004, word: "使える",    kana: "つかえる",     romaji: "tsukaeru",     meaning: "能使用", example: "パソコンが　使えますか。",         exampleMeaning: "会用电脑吗？" },
      { id: 2005, word: "泳げる",    kana: "およげる",     romaji: "oyogeru",      meaning: "能游泳", example: "100メートル　泳げます。",          exampleMeaning: "能游100米。" },
      { id: 2006, word: "できる",    kana: "できる",       romaji: "dekiru",       meaning: "能做/会", example: "料理が　できますか。",            exampleMeaning: "会做饭吗？" },
      { id: 2007, word: "運転する",  kana: "うんてんする", romaji: "unten suru",   meaning: "开车",   example: "車を　運転できますか。",           exampleMeaning: "会开车吗？" },
      { id: 2008, word: "弾ける",    kana: "ひける",       romaji: "hikeru",       meaning: "能弹（乐器）", example: "ギターが　弾けます。",        exampleMeaning: "会弹吉他。" },
    ]
  },
  {
    chapter: 21,
    chapterTitle: "第21课 · 電車が動き始めました",
    words: [
      { id: 2101, word: "始まる",    kana: "はじまる",     romaji: "hajimaru",     meaning: "开始（自动）", example: "映画が　始まりました。",      exampleMeaning: "电影开始了。" },
      { id: 2102, word: "終わる",    kana: "おわる",       romaji: "owaru",        meaning: "结束（自动）", example: "授業が　終わりました。",      exampleMeaning: "课结束了。" },
      { id: 2103, word: "始める",    kana: "はじめる",     romaji: "hajimeru",     meaning: "开始（他动）", example: "日本語を　勉強し始めました。", exampleMeaning: "开始学日语了。" },
      { id: 2104, word: "続ける",    kana: "つづける",     romaji: "tsuzukeru",    meaning: "继续",   example: "毎日　練習を　続けています。",     exampleMeaning: "每天继续练习。" },
      { id: 2105, word: "やめる",    kana: "やめる",       romaji: "yameru",       meaning: "停止/放弃", example: "タバコを　やめました。",         exampleMeaning: "戒烟了。" },
      { id: 2106, word: "忘れる",    kana: "わすれる",     romaji: "wasureru",     meaning: "忘记",   example: "名前を　忘れて　しまいました。",   exampleMeaning: "忘记名字了。" },
      { id: 2107, word: "覚える",    kana: "おぼえる",     romaji: "oboeru",       meaning: "记住/学会", example: "単語を　覚えます。",           exampleMeaning: "记单词。" },
      { id: 2108, word: "動く",      kana: "うごく",       romaji: "ugoku",        meaning: "动/运作", example: "電車が　動き始めました。",        exampleMeaning: "电车开始动了。" },
    ]
  },
  {
    chapter: 22,
    chapterTitle: "第22课 · 日本に来てから5年になります",
    words: [
      { id: 2201, word: "〜年間",    kana: "〜ねんかん",   romaji: "~nenkan",      meaning: "…年间",  example: "5年間　日本語を　勉強しています。", exampleMeaning: "学了5年日语了。" },
      { id: 2202, word: "〜週間",    kana: "〜しゅうかん", romaji: "~shuukan",     meaning: "…周",    example: "2週間で　覚えました。",            exampleMeaning: "用2周记住了。" },
      { id: 2203, word: "以前",      kana: "いぜん",       romaji: "izen",         meaning: "以前",   example: "以前　東京に　住んでいました。",   exampleMeaning: "以前住在东京。" },
      { id: 2204, word: "最近",      kana: "さいきん",     romaji: "saikin",       meaning: "最近",   example: "最近　忙しいです。",               exampleMeaning: "最近很忙。" },
      { id: 2205, word: "もうすぐ",  kana: "もうすぐ",     romaji: "mou sugu",     meaning: "马上/快要", example: "もうすぐ　春に　なります。",     exampleMeaning: "马上就要春天了。" },
      { id: 2206, word: "まだ",      kana: "まだ",         romaji: "mada",         meaning: "还/仍然", example: "まだ　終わっていません。",         exampleMeaning: "还没有结束。" },
      { id: 2207, word: "もう",      kana: "もう",         romaji: "mou",          meaning: "已经/不再", example: "もう　食べました。",             exampleMeaning: "已经吃了。" },
      { id: 2208, word: "〜てから",  kana: "〜てから",     romaji: "~tekara",      meaning: "…之后",  example: "ご飯を　食べてから　行きます。",   exampleMeaning: "吃完饭之后去。" },
    ]
  },
  {
    chapter: 23,
    chapterTitle: "第23课 · なぜ日本語を勉強していますか",
    words: [
      { id: 2301, word: "なぜ",      kana: "なぜ",         romaji: "naze",         meaning: "为什么", example: "なぜ　日本語を　勉強していますか。", exampleMeaning: "为什么学日语？" },
      { id: 2302, word: "どうして",  kana: "どうして",     romaji: "doushite",     meaning: "为什么", example: "どうして　日本に　来ましたか。",   exampleMeaning: "为什么来日本？" },
      { id: 2303, word: "理由",      kana: "りゆう",       romaji: "riyuu",        meaning: "理由",   example: "理由を　教えてください。",         exampleMeaning: "请告诉我理由。" },
      { id: 2304, word: "目的",      kana: "もくてき",     romaji: "mokuteki",     meaning: "目的",   example: "旅行の　目的は　何ですか。",       exampleMeaning: "旅行的目的是什么？" },
      { id: 2305, word: "ために",    kana: "ために",       romaji: "tame ni",      meaning: "为了",   example: "健康の　ために　運動します。",     exampleMeaning: "为了健康而运动。" },
      { id: 2306, word: "将来",      kana: "しょうらい",   romaji: "shourai",      meaning: "将来/未来", example: "将来　日本で　働きたいです。",   exampleMeaning: "将来想在日本工作。" },
      { id: 2307, word: "夢",        kana: "ゆめ",         romaji: "yume",         meaning: "梦想",   example: "夢は　医者に　なることです。",     exampleMeaning: "梦想是成为医生。" },
      { id: 2308, word: "目標",      kana: "もくひょう",   romaji: "mokuhyou",     meaning: "目标",   example: "今年の　目標を　決めました。",     exampleMeaning: "定下了今年的目标。" },
    ]
  },
  {
    chapter: 24,
    chapterTitle: "第24课 · 日本語がずいぶん上手になりましたね",
    words: [
      { id: 2401, word: "上手になる", kana: "じょうずになる", romaji: "jouzu ni naru", meaning: "变好/进步", example: "日本語が　上手に　なりましたね。", exampleMeaning: "日语进步了呢。" },
      { id: 2402, word: "変わる",    kana: "かわる",       romaji: "kawaru",       meaning: "改变",   example: "生活が　大きく　変わりました。",   exampleMeaning: "生活发生了很大变化。" },
      { id: 2403, word: "増える",    kana: "ふえる",       romaji: "fueru",        meaning: "增加",   example: "友達が　増えました。",             exampleMeaning: "朋友增加了。" },
      { id: 2404, word: "減る",      kana: "へる",         romaji: "heru",         meaning: "减少",   example: "体重が　少し　減りました。",       exampleMeaning: "体重稍微减少了。" },
      { id: 2405, word: "ずいぶん",  kana: "ずいぶん",     romaji: "zuibun",       meaning: "相当/很", example: "ずいぶん　上手に　なりましたね。", exampleMeaning: "进步相当大呢。" },
      { id: 2406, word: "久しぶり",  kana: "ひさしぶり",   romaji: "hisashiburi",  meaning: "好久不见", example: "久しぶりですね！",               exampleMeaning: "好久不见！" },
      { id: 2407, word: "成長する",  kana: "せいちょうする", romaji: "seichou suru", meaning: "成长", example: "日本語の　力が　成長しました。",   exampleMeaning: "日语能力成长了。" },
      { id: 2408, word: "頑張る",    kana: "がんばる",     romaji: "ganbaru",      meaning: "加油/努力", example: "これからも　頑張ります。",       exampleMeaning: "今后也继续加油。" },
    ]
  },
];

export default vocabulary;
