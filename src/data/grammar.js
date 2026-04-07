// 新版标准日本语（初级）语法要点，按课本章节排序
const grammarData = [
  {
    id: 1,
    chapter: 1,
    chapterTitle: "第1课",
    topic: "〜は〜です／〜は〜ではありません",
    pattern: "AはBです",
    description: "「は」是话题助词，「です」是礼貌体断定助动词，表示A是B的意思。否定形式为「〜ではありません」（口语可说「〜じゃありません」）。",
    examples: [
      { sentence: "わたしは　田中です。", translation: "我是田中。" },
      { sentence: "わたしは　学生です。", translation: "我是学生。" },
      { sentence: "わたしは　学生では　ありません。", translation: "我不是学生。" },
      { sentence: "田中さんは　日本人では　ありません。", translation: "田中先生不是日本人。" },
    ]
  },
  {
    id: 2,
    chapter: 1,
    chapterTitle: "第1课",
    topic: "〜は〜ですか（疑问句）",
    pattern: "AはBですか",
    description: "在句尾加「か」构成疑问句。回答用「はい、〜です」或「いいえ、〜ではありません」。日语疑问句不需要改变语序。",
    examples: [
      { sentence: "あなたは　学生ですか。", translation: "你是学生吗？" },
      { sentence: "はい、학생です。", translation: "是的，我是学生。" },
      { sentence: "田中さんは　中国人ですか。", translation: "田中先生是中国人吗？" },
      { sentence: "いいえ、中国人では　ありません。日本人です。", translation: "不，不是中国人，是日本人。" },
    ]
  },
  {
    id: 3,
    chapter: 2,
    chapterTitle: "第2课",
    topic: "これ／それ／あれ（指示代词）",
    pattern: "これ・それ・あれ は 〜です",
    description: "「これ」指离说话人近的事物，「それ」指离听话人近或双方都稍远的事物，「あれ」指离双方都远的事物。",
    examples: [
      { sentence: "これは　本です。", translation: "这是书。" },
      { sentence: "それは　わたしの　かばんです。", translation: "那是我的包。" },
      { sentence: "あれは　何ですか。", translation: "那是什么？" },
      { sentence: "あれは　図書館です。", translation: "那是图书馆。" },
    ]
  },
  {
    id: 4,
    chapter: 2,
    chapterTitle: "第2课",
    topic: "〜の〜（名词修饰）",
    pattern: "名詞 の 名詞",
    description: "「の」连接两个名词，前面的名词修饰后面的名词，表示所属、所在、性质等关系，相当于中文的【的】。",
    examples: [
      { sentence: "これは　日本語の　本です。", translation: "这是日语书。" },
      { sentence: "それは　田中さんの　傘です。", translation: "那是田中先生的伞。" },
      { sentence: "わたしの　会社は　東京に　あります。", translation: "我的公司在东京。" },
      { sentence: "この　かばんは　だれの　ですか。", translation: "这个包是谁的？" },
    ]
  },
  {
    id: 5,
    chapter: 3,
    chapterTitle: "第3课",
    topic: "ここ／そこ／あそこ（场所指示）",
    pattern: "ここ・そこ・あそこ は 〜です",
    description: "「ここ」指说话人所在处，「そこ」指听话人所在处，「あそこ」指离双方都远的地方。询问场所用「どこ」。",
    examples: [
      { sentence: "ここは　食堂です。", translation: "这里是食堂。" },
      { sentence: "トイレは　どこですか。", translation: "洗手间在哪里？" },
      { sentence: "トイレは　あそこです。", translation: "洗手间在那边。" },
      { sentence: "受付は　1階に　あります。", translation: "前台在1楼。" },
    ]
  },
  {
    id: 6,
    chapter: 3,
    chapterTitle: "第3课",
    topic: "〜に　あります／います",
    pattern: "場所に 物/人 が あります・います",
    description: "「あります」用于无生命物体存在，「います」用于有生命的人或动物存在。助词「に」表示存在的场所。",
    examples: [
      { sentence: "机の上に　本が　あります。", translation: "桌子上有书。" },
      { sentence: "教室に　学生が　います。", translation: "教室里有学生。" },
      { sentence: "冷蔵庫に　ビールが　あります。", translation: "冰箱里有啤酒。" },
      { sentence: "公園に　猫が　います。", translation: "公园里有猫。" },
    ]
  },
  {
    id: 7,
    chapter: 4,
    chapterTitle: "第4课",
    topic: "时间表达与「から〜まで」",
    pattern: "〜時〜分 ／ 〜から〜まで",
    description: "时刻用「〜時（じ）〜分（ふん/ぷん）」表示。「から」表示起点，「まで」表示终点，可用于时间和场所。",
    examples: [
      { sentence: "今　何時ですか。", translation: "现在几点？" },
      { sentence: "9時から　5時まで　働きます。", translation: "从9点工作到5点。" },
      { sentence: "授業は　9時から　始まります。", translation: "课从9点开始。" },
      { sentence: "駅から　学校まで　バスで　行きます。", translation: "从车站坐公交车去学校。" },
    ]
  },
  {
    id: 8,
    chapter: 5,
    chapterTitle: "第5课",
    topic: "日期、星期与月份",
    pattern: "〜年〜月〜日（ついたち/ふつか...）",
    description: "日期中1日「ついたち」、2日「ふつか」等有特殊读法。星期用「〜曜日（ようび）」，月份用「〜月（がつ）」。",
    examples: [
      { sentence: "今日は　何曜日ですか。", translation: "今天是星期几？" },
      { sentence: "今日は　月曜日です。", translation: "今天是星期一。" },
      { sentence: "誕生日は　いつですか。", translation: "生日是什么时候？" },
      { sentence: "9月1日です。", translation: "是9月1日。" },
    ]
  },
  {
    id: 9,
    chapter: 6,
    chapterTitle: "第6课",
    topic: "い形容词",
    pattern: "〜い です／〜くない です／〜かった です",
    description: "い形容词词尾是「い」。否定变「〜くない」，过去式变「〜かった」，否定过去式变「〜くなかった」。修饰名词直接前置。",
    examples: [
      { sentence: "この　映画は　おもしろいです。", translation: "这部电影有意思。" },
      { sentence: "今日は　寒くないです。", translation: "今天不冷。" },
      { sentence: "昨日は　暑かったです。", translation: "昨天很热。" },
      { sentence: "おいしい　料理が　食べたいです。", translation: "想吃好吃的料理。" },
    ]
  },
  {
    id: 10,
    chapter: 6,
    chapterTitle: "第6课",
    topic: "な形容词",
    pattern: "〜な 名詞 ／ 〜じゃないです",
    description: "な形容词修饰名词时加「な」，做谓语时用「〜です」。否定变「〜ではありません（じゃないです）」，过去式变「〜でした」。",
    examples: [
      { sentence: "東京は　賑やかです。", translation: "东京很热闹。" },
      { sentence: "この　部屋は　静かじゃないです。", translation: "这个房间不安静。" },
      { sentence: "彼女は　親切な　人です。", translation: "她是一个亲切的人。" },
      { sentence: "日本語は　好きですか。", translation: "喜欢日语吗？" },
    ]
  },
  {
    id: 11,
    chapter: 7,
    chapterTitle: "第7课",
    topic: "动词ます形（现在/将来·过去·否定）",
    pattern: "〜ます／〜ません／〜ました／〜ませんでした",
    description: "「ます形」是礼貌表达。现在/将来肯定：〜ます；否定：〜ません；过去肯定：〜ました；过去否定：〜ませんでした。",
    examples: [
      { sentence: "毎日　新聞を　読みます。", translation: "每天读报纸。" },
      { sentence: "お酒は　飲みません。", translation: "不喝酒。" },
      { sentence: "昨日　映画を　見ました。", translation: "昨天看了电影。" },
      { sentence: "先週　学校へ　行きませんでした。", translation: "上周没去学校。" },
    ]
  },
  {
    id: 12,
    chapter: 7,
    chapterTitle: "第7课",
    topic: "を・に・で・へ（格助词）",
    pattern: "〜を V ／ 〜に V ／ 〜で V ／ 〜へ V",
    description: "「を」接宾语；「に」表示目标/到达点/时间；「で」表示动作进行的场所或工具；「へ」表示方向（与「に」相近但更强调方向）。",
    examples: [
      { sentence: "コーヒーを　飲みます。", translation: "喝咖啡。（を=宾语）" },
      { sentence: "学校に　行きます。", translation: "去学校。（に=到达点）" },
      { sentence: "図書館で　勉強します。", translation: "在图书馆学习。（で=场所）" },
      { sentence: "日本へ　行きたいです。", translation: "想去日本。（へ=方向）" },
    ]
  },
  {
    id: 13,
    chapter: 8,
    chapterTitle: "第8课",
    topic: "〜に 来ます／行きます／帰ります",
    pattern: "場所に 行きます・来ます・帰ります",
    description: "移动动词「行く・来る・帰る」的目的地用助词「に」或「へ」表示。说话人视角决定用「来ます」还是「行きます」。",
    examples: [
      { sentence: "毎朝　会社に　行きます。", translation: "每天早上去公司。" },
      { sentence: "明日　ここに　来ますか。", translation: "明天来这里吗？" },
      { sentence: "6時に　家に　帰ります。", translation: "6点回家。" },
      { sentence: "週末は　どこへも　行きません。", translation: "周末哪儿也不去。" },
    ]
  },
  {
    id: 14,
    chapter: 8,
    chapterTitle: "第8课",
    topic: "频度副词（毎日・よく・時々・あまり・ぜんぜん）",
    pattern: "頻度副詞 ＋ 動詞",
    description: "频度副词放在动词前：毎日（每天）、よく（经常）、時々（有时）、あまり（不太，后接否定）、ぜんぜん（完全不，后接否定）。",
    examples: [
      { sentence: "毎日　日本語を　勉強します。", translation: "每天学习日语。" },
      { sentence: "よく　友達と　食事を　します。", translation: "经常和朋友吃饭。" },
      { sentence: "時々　映画を　見ます。", translation: "有时看电影。" },
      { sentence: "あまり　テレビを　見ません。", translation: "不太看电视。" },
    ]
  },
  {
    id: 15,
    chapter: 9,
    chapterTitle: "第9课",
    topic: "〜ています（継続的な動作）",
    pattern: "動詞て形 ＋ います",
    description: "表示动作正在持续进行，相当于中文的【正在〜】。与第6课的状态用法不同，这里强调动作本身的持续。常与【今】【毎日】等时间词连用。",
    examples: [
      { sentence: "今　テレビを　見ています。", translation: "现在正在看电视。" },
      { sentence: "毎朝　ジョギングを　しています。", translation: "每天早上都在跑步。" },
      { sentence: "雨が　降っています。", translation: "正在下雨。" },
      { sentence: "子供たちが　公園で　遊んでいます。", translation: "孩子们正在公园玩耍。" },
    ]
  },
  {
    id: 16,
    chapter: 10,
    chapterTitle: "第10课",
    topic: "位置を表す言葉（位置表达）",
    pattern: "場所の 上/下/左/右/前/後ろ/中/隣 に",
    description: "表示位置关系的词语。格式为「名词のXに　あります/います」，X为上下左右前後ろ中隣等位置词。",
    examples: [
      { sentence: "机の　上に　本が　あります。", translation: "桌子上有书。" },
      { sentence: "いすの　下に　ねこが　います。", translation: "椅子下面有猫。" },
      { sentence: "銀行の　隣に　郵便局が　あります。", translation: "银行旁边有邮局。" },
      { sentence: "駅の　前で　待っています。", translation: "在车站前面等待。" },
    ]
  },
  {
    id: 17,
    chapter: 11,
    chapterTitle: "第11课",
    topic: "〜てください / 〜をください",
    pattern: "動詞て形 ＋ ください ／ 名詞 を ください",
    description: "「〜てください」表示请求对方做某事；「〜をください」表示请求给予某物，用于购物等场合。两者均为礼貌请求。",
    examples: [
      { sentence: "これを　ひとつ　ください。", translation: "请给我一个这个。" },
      { sentence: "領収書を　ください。", translation: "请给我收据。" },
      { sentence: "ゆっくり　話してください。", translation: "请说慢一点。" },
      { sentence: "名前を　書いてください。", translation: "请写下名字。" },
    ]
  },
  {
    id: 18,
    chapter: 12,
    chapterTitle: "第12课",
    topic: "〜てもらいます / 〜てあげます / 〜てくれます",
    pattern: "〜て もらいます・あげます・くれます",
    description: "授受表达：【もらいます】我从对方获得行为；【あげます】我给对方做某事；【くれます】对方给我做某事。说话人视角不同，使用词语不同。",
    examples: [
      { sentence: "友達に　手伝って　もらいました。", translation: "请朋友帮了忙（我获得帮助）。" },
      { sentence: "荷物を　持って　あげます。", translation: "我来帮你拿行李（我给予帮助）。" },
      { sentence: "田中さんが　教えて　くれました。", translation: "田中先生教了我（对方给予）。" },
      { sentence: "道を　教えて　もらえますか。", translation: "能告诉我路怎么走吗？" },
    ]
  },
  {
    id: 19,
    chapter: 13,
    chapterTitle: "第13课",
    topic: "〜てもいいですか（许可）",
    pattern: "動詞て形 ＋ もいいですか",
    description: "用于请求许可，表示【可以做〜吗？】。回答允许时用「ええ、どうぞ」「はい、いいです」；不允许时用「ちょっと…」或「〜てはいけません」。",
    examples: [
      { sentence: "写真を　撮っても　いいですか。", translation: "可以拍照吗？" },
      { sentence: "ここに　座っても　いいですか。", translation: "可以坐这里吗？" },
      { sentence: "窓を　開けても　いいですか。", translation: "可以开窗吗？" },
      { sentence: "ちょっと　休んでも　いいですか。", translation: "可以稍微休息一下吗？" },
    ]
  },
  {
    id: 20,
    chapter: 14,
    chapterTitle: "第14课",
    topic: "〜てはいけません（禁止）",
    pattern: "動詞て形 ＋ はいけません",
    description: "表示禁止，相当于【不可以做〜】【不得〜】。口语中也说「〜ちゃいけません」。比「〜ないでください」（请不要〜）语气更强烈。",
    examples: [
      { sentence: "ここで　タバコを　吸っては　いけません。", translation: "不可以在这里抽烟。" },
      { sentence: "廊下を　走っては　いけません。", translation: "不可以在走廊跑步。" },
      { sentence: "授業中に　携帯を　使っては　いけません。", translation: "上课时不可以用手机。" },
      { sentence: "この　ボタンを　押しては　いけません。", translation: "不可以按这个按钮。" },
    ]
  },
  {
    id: 21,
    chapter: 15,
    chapterTitle: "第15课",
    topic: "〜ています（状態の継続）",
    pattern: "動詞て形 ＋ います（状態）",
    description: "结果状态的持续：动作完成后其结果状态仍在延续。如「結婚している」（已婚状态）、「住んでいる」（居住中）、「知っている」（已知状态）。",
    examples: [
      { sentence: "東京に　住んでいます。", translation: "住在东京（居住状态）。" },
      { sentence: "結婚して　います。", translation: "已婚（结婚状态持续）。" },
      { sentence: "田中さんを　知っていますか。", translation: "你认识田中先生吗？" },
      { sentence: "眼鏡を　かけています。", translation: "戴着眼镜（戴眼镜的状态）。" },
    ]
  },
  {
    id: 22,
    chapter: 16,
    chapterTitle: "第16课",
    topic: "〜でしょう（推量）",
    pattern: "普通形 ＋ でしょう",
    description: "表示推测，相当于【大概〜吧】【应该〜吧】。比「〜と思います」更客观，常用于天气预报、推测等场合。语气比「かもしれません」更确定。",
    examples: [
      { sentence: "明日は　晴れる　でしょう。", translation: "明天应该会晴吧。" },
      { sentence: "彼は　もう　家に　帰ったでしょう。", translation: "他大概已经回家了吧。" },
      { sentence: "この　映画は　おもしろいでしょう。", translation: "这部电影应该很有意思吧。" },
      { sentence: "試験は　難しかったでしょう。", translation: "考试大概很难吧。" },
    ]
  },
  {
    id: 23,
    chapter: 17,
    chapterTitle: "第17课",
    topic: "〜たことがあります（经验）",
    pattern: "動詞た形 ＋ ことがあります",
    description: "表示过去有过某种经历，相当于【曾经做过〜】。否定用「〜たことがありません」（从未做过〜）。只用于过去的经验，不用于将来。",
    examples: [
      { sentence: "富士山に　登った　ことが　あります。", translation: "曾经爬过富士山。" },
      { sentence: "日本料理を　食べた　ことが　ありますか。", translation: "你吃过日本料理吗？" },
      { sentence: "いいえ、食べた　ことが　ありません。", translation: "不，我从来没吃过。" },
      { sentence: "新幹線に　乗った　ことが　あります。", translation: "坐过新干线。" },
    ]
  },
  {
    id: 24,
    chapter: 18,
    chapterTitle: "第18课",
    topic: "〜ことが好きです（动词名词化）",
    pattern: "動詞辞書形 ＋ こと ＋ が 好き/できる/大切 です",
    description: "「こと」将动词短语名词化，使其可作主语或宾语。常见搭配：「〜ことが好きです」（喜欢做〜）、「〜ことができます」（能做〜）、「〜ことが大切です」（做〜很重要）。",
    examples: [
      { sentence: "音楽を　聴くことが　好きです。", translation: "喜欢听音乐。" },
      { sentence: "ピアノを　弾くことが　できます。", translation: "会弹钢琴。" },
      { sentence: "毎日　練習する　ことが　大切です。", translation: "每天练习是很重要的。" },
      { sentence: "趣味は　写真を　撮る　ことです。", translation: "爱好是拍照。" },
    ]
  },
  {
    id: 25,
    chapter: 19,
    chapterTitle: "第19课",
    topic: "〜より〜のほうが〜（比较）",
    pattern: "AよりBのほうが〜 ／ AとBとどちらが〜",
    description: "比较两者时使用。「AよりBのほうが〜」表示B比A更〜；询问比较用「AとBとどちらが〜ですか」；表示最高级用「〜の中で〜が一番〜」。",
    examples: [
      { sentence: "電車より　バスの　ほうが　安いです。", translation: "公交车比电车便宜。" },
      { sentence: "コーヒーと　お茶と　どちらが　好きですか。", translation: "咖啡和茶你更喜欢哪个？" },
      { sentence: "果物の中で　リンゴが　一番　好きです。", translation: "水果里最喜欢苹果。" },
      { sentence: "夏より　秋の　ほうが　好きです。", translation: "比起夏天更喜欢秋天。" },
    ]
  },
  {
    id: 26,
    chapter: 20,
    chapterTitle: "第20课",
    topic: "可能形（〜ことができます / 動詞可能形）",
    pattern: "動詞辞書形 ＋ ことができます ／ 可能形",
    description: "表示能力或可能性。两种表达：①「〜ことができます」礼貌正式；②动词可能形（一段：去る+られる，五段：词尾变え段+る）更口语。",
    examples: [
      { sentence: "日本語を　話すことが　できます。", translation: "能说日语。" },
      { sentence: "日本語が　話せます。", translation: "能说日语（可能形）。" },
      { sentence: "漢字が　読めますか。", translation: "会读汉字吗？" },
      { sentence: "ここで　クレジットカードが　使えますか。", translation: "这里可以用信用卡吗？" },
    ]
  },
  {
    id: 27,
    chapter: 21,
    chapterTitle: "第21课",
    topic: "〜始めます・〜続けます・〜終わります（补助动词）",
    pattern: "動詞ます形語幹 ＋ 始めます・続けます・終わります",
    description: "补助动词表示动作的阶段。「〜始めます」表示开始做；「〜続けます」表示继续做；「〜終わります」表示做完。前接动词ます形去掉ます。",
    examples: [
      { sentence: "日本語を　勉強し始めました。", translation: "开始学日语了。" },
      { sentence: "毎日　練習を　続けています。", translation: "每天持续练习。" },
      { sentence: "宿題を　やり終わりました。", translation: "作业做完了。" },
      { sentence: "雨が　降り始めました。", translation: "开始下雨了。" },
    ]
  },
  {
    id: 28,
    chapter: 22,
    chapterTitle: "第22课",
    topic: "〜てから（时间顺序）",
    pattern: "動詞て形 ＋ から、〜",
    description: "表示前一动作完成【之后】再做后一动作，强调顺序。与「〜た後で」（在〜之后）类似，但「〜てから」强调先后顺序的必要性，「後で」只说明时间先后。",
    examples: [
      { sentence: "ご飯を　食べてから　行きます。", translation: "吃完饭之后再去。" },
      { sentence: "手を　洗ってから　食べてください。", translation: "洗完手之后再吃。" },
      { sentence: "日本に　来てから　3年に　なります。", translation: "来日本已经3年了。" },
      { sentence: "仕事が　終わってから、飲みに　行きましょう。", translation: "工作结束后去喝一杯吧。" },
    ]
  },
  {
    id: 29,
    chapter: 23,
    chapterTitle: "第23课",
    topic: "〜から / 〜ので（原因・理由）",
    pattern: "普通形 ＋ から ／ 普通形（な形→な/名詞→な） ＋ ので",
    description: "「から」表示主观理由，语气较直接；「ので」表示客观原因，语气婉转，书面语和礼貌场合多用。「から」后可接命令/请求，「ので」则较温和。",
    examples: [
      { sentence: "眠いから、もう　寝ます。", translation: "因为困了，要去睡觉了。" },
      { sentence: "病気なので、会社を　休みます。", translation: "因为生病，请假不去公司。" },
      { sentence: "好きだから　続けます。", translation: "因为喜欢所以继续。" },
      { sentence: "電車が　遅れたので、遅刻しました。", translation: "因为电车晚点了，所以迟到了。" },
    ]
  },
  {
    id: 30,
    chapter: 24,
    chapterTitle: "第24课",
    topic: "〜になります（变化）",
    pattern: "名詞/な形 に ＋ なります ／ い形く ＋ なります",
    description: "表示变化，相当于【变成〜】【成为〜】。い形容词去い加く接なります；な形容词/名词直接加になります。表达渐变过程，与「〜にします」（主观决定）不同。",
    examples: [
      { sentence: "日本語が　上手に　なりましたね。", translation: "日语进步了呢。" },
      { sentence: "もうすぐ　春に　なります。", translation: "马上就要春天了。" },
      { sentence: "子どもが　大きく　なりました。", translation: "孩子长大了。" },
      { sentence: "有名に　なりたいです。", translation: "想变得有名。" },
    ]
  },
];

export default grammarData;
