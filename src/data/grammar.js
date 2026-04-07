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
];

export default grammarData;
