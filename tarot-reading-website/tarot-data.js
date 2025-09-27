// 塔罗牌数据结构
const tarotCards = [
  // 大阿尔卡那牌
  {
    id: "fool",
    name: "愚者",
    nameEn: "The Fool",
    type: "major",
    number: 0,
    image: "https://example.com/images/fool.jpg",
    upright: {
      keywords: ["开始", "自由", "冒险", "纯真", "潜能"],
      meaning: "新的开始，充满可能性的旅程，需要勇气和信任",
      love: "新的恋情可能性，需要勇敢表达感情",
      career: "新的职业机会，适合创业或转行",
      finance: "财务上需要谨慎，但有新的投资机会",
      health: "整体健康良好，需要保持积极心态"
    },
    reversed: {
      keywords: ["鲁莽", "天真", "风险", "不成熟", "缺乏规划"],
      meaning: "过度冲动，缺乏考虑，可能带来不良后果",
      love: "感情上过于理想化，不够成熟",
      career: "职业决策过于草率，需要谨慎规划",
      finance: "财务上冒风险，可能导致损失",
      health: "忽视健康问题，需要更加关注身体状况"
    }
  },
  {
    id: "magician",
    name: "魔术师",
    nameEn: "The Magician",
    type: "major",
    number: 1,
    image: "https://example.com/images/magician.jpg",
    upright: {
      keywords: ["创造", "力量", "专注", "技能", "显化"],
      meaning: "拥有实现目标的能力和资源，需要主动行动",
      love: "主动追求爱情，有魅力和吸引力",
      career: "具备专业技能，能够成功完成项目",
      finance: "有能力创造财富，善于理财",
      health: "有治愈身心的能力，健康良好"
    },
    reversed: {
      keywords: ["操纵", "欺骗", "滥用权力", "缺乏技能"],
      meaning: "能力被滥用，可能存在欺骗行为",
      love: "感情中存在操控或不诚实",
      career: "专业能力不足，项目可能失败",
      finance: "理财不当，可能导致财务损失",
      health: "忽视健康问题，需要及时治疗"
    }
  },
  {
    id: "high-priestess",
    name: "女祭司",
    nameEn: "The High Priestess",
    type: "major",
    number: 2,
    image: "https://example.com/images/high-priestess.jpg",
    upright: {
      keywords: ["直觉", "智慧", "神秘", "内在声音", "潜意识的"],
      meaning: "相信内在的智慧和直觉，隐藏的知识会被揭示",
      love: "需要倾听内心的声音，感情会有深层次发展",
      career: "依靠直觉做决策，会有意想不到的机会",
      finance: "需要谨慎分析财务状况，不要急于决策",
      health: "注意身心连接，内在平衡影响健康"
    },
    reversed: {
      keywords: ["困惑", "缺乏直觉", "秘密", "隐藏信息"],
      meaning: "直觉被忽视，可能存在被隐瞒的事实",
      love: "感情中缺乏沟通，存在误解",
      career: "信息不完整，决策困难",
      finance: "财务状况不透明，需要谨慎",
      health: "忽视身体发出的信号，可能存在健康隐患"
    }
  },
  {
    id: "empress",
    name: "皇后",
    nameEn: "The Empress",
    type: "major",
    number: 3,
    image: "https://example.com/images/empress.jpg",
    upright: {
      keywords: ["丰饶", "母性", "创造", "养育", "美感"],
      meaning: "创造力旺盛，生活充满丰盈和美好",
      love: "感情深厚，可能怀孕或感情进一步发展",
      career: "工作顺利，可能有新的合作机会",
      finance: "财务状况良好，收入增加",
      health: "身体健康，精力充沛"
    },
    reversed: {
      keywords: ["依赖", "创造力阻塞", "过度保护", "不安全"],
      meaning: "可能过度依赖他人，创造力受到限制",
      love: "感情中存在控制或不安全感",
      career: "工作遇到阻碍，发展受限",
      finance: "财务上过度依赖，需要独立",
      health: "需要关注女性健康问题"
    }
  },
  {
    id: "emperor",
    name: "皇帝",
    nameEn: "The Emperor",
    type: "major",
    number: 4,
    image: "https://example.com/images/emperor.jpg",
    upright: {
      keywords: ["权威", "稳定", "结构", "父亲形象", "秩序"],
      meaning: "建立秩序和稳定，需要领导和组织能力",
      love: "关系需要更多的结构和责任",
      career: "领导地位，事业有成",
      finance: "财务稳定，善于管理",
      health: "身体强健，但需要避免过度工作"
    },
    reversed: {
      keywords: ["暴政", "刚愎自用", "过度控制", "缺乏纪律"],
      meaning: "可能过于专制，缺乏灵活性",
      love: "关系中控制欲过强，需要平衡",
      career: "领导方式不当，可能遇到反抗",
      finance: "财务管理过于严格，影响生活质量",
      health: "工作压力过大，影响健康"
    }
  },
  // 更多大阿尔卡那牌可以根据需要继续添加...

  // 小阿尔卡那牌示例
  {
    id: "wands-ace",
    name: "权杖王牌",
    nameEn: "Ace of Wands",
    type: "minor",
    suit: "wands",
    number: 1,
    image: "https://example.com/images/wands-ace.jpg",
    upright: {
      keywords: ["灵感", "新开始", "热情", "创造力", "机会"],
      meaning: "新的创意和机会，充满激情和能量",
      love: "新的恋情开始，充满激情",
      career: "新的项目或职业机会",
      finance: "新的投资机会，财务增长潜力",
      health: "精力充沛，充满活力"
    },
    reversed: {
      keywords: ["缺乏方向", "延迟", "能量阻塞", "失去热情"],
      meaning: "可能缺乏明确的方向，能量不足",
      love: "感情缺乏激情，进展缓慢",
      career: "项目延迟，缺乏动力",
      finance: "投资机会错过，财务增长缓慢",
      health: "精力不足，需要休息"
    }
  }
];

// 牌阵数据结构
const tarotSpreads = [
  {
    id: "one-card",
    name: "单张牌",
    nameEn: "One-Card Spread",
    description: "快速获得当下的提示、每日指引、简答是／否问题",
    image: "https://example.com/images/one-card.jpg",
    cardCount: 1,
    bestFor: ["love", "career", "finance", "health", "other"],
    positions: [
      {
        id: "single",
        name: "核心指引",
        meaning: "针对你问题的直接答案和指引",
        position: { x: 200, y: 150 }
      }
    ]
  },
  {
    id: "three-card",
    name: "三张牌牌阵",
    nameEn: "Three Card Spread",
    description: "经典基础牌阵，可解读过去-现在-未来、优势-劣势-建议等多种方式",
    image: "https://example.com/images/three-card-spread.jpg",
    cardCount: 3,
    bestFor: ["love", "career", "finance", "health", "other"],
    positions: [
      {
        id: "past",
        name: "过去",
        meaning: "影响当前情况的基础和原因",
        position: { x: 100, y: 150 }
      },
      {
        id: "present",
        name: "现在",
        meaning: "当前的状况和挑战",
        position: { x: 250, y: 150 }
      },
      {
        id: "future",
        name: "未来",
        meaning: "可能的发展结果和建议",
        position: { x: 400, y: 150 }
      }
    ]
  },
  {
    id: "five-card-cross",
    name: "五张牌十字",
    nameEn: "Five-Card Cross",
    description: "紧凑的十字形布局，提供比三张牌更多层面的分析",
    image: "https://example.com/images/five-card-cross.jpg",
    cardCount: 5,
    bestFor: ["career", "finance", "health", "other"],
    positions: [
      {
        id: "present",
        name: "现状",
        meaning: "当前的状况和情况",
        position: { x: 200, y: 150 }
      },
      {
        id: "challenge",
        name: "挑战",
        meaning: "面临的挑战和障碍",
        position: { x: 150, y: 100 }
      },
      {
        id: "subconscious",
        name: "潜意识",
        meaning: "问题的根源和潜在影响",
        position: { x: 250, y: 100 }
      },
      {
        id: "conscious",
        name: "显意识",
        meaning: "可见的影响和外在表现",
        position: { x: 150, y: 200 }
      },
      {
        id: "outcome",
        name: "结果",
        meaning: "最终的结果和建议",
        position: { x: 250, y: 200 }
      }
    ]
  },
  {
    id: "celtic-cross",
    name: "凯尔特十字牌阵",
    nameEn: "Celtic Cross",
    description: "最全面复杂的牌阵，深入分析复杂问题的各个方面",
    image: "https://example.com/images/celtic-cross.jpg",
    cardCount: 10,
    bestFor: ["love", "career", "other"],
    positions: [
      {
        id: "significator",
        name: "现状",
        meaning: "当前状况的核心和本质",
        position: { x: 200, y: 150 }
      },
      {
        id: "crossing",
        name: "挑战",
        meaning: "当前面临的主要挑战",
        position: { x: 200, y: 180 }
      },
      {
        id: "crowning",
        name: "目标",
        meaning: "希望达到的目标和理想状态",
        position: { x: 200, y: 120 }
      },
      {
        id: "beneath",
        name: "基础",
        meaning: "影响当前情况的深层原因",
        position: { x: 200, y: 210 }
      },
      {
        id: "behind",
        name: "过去影响",
        meaning: "刚刚过去的影响因素",
        position: { x: 150, y: 135 }
      },
      {
        id: "before",
        name: "未来影响",
        meaning: "即将到来的影响因素",
        position: { x: 250, y: 135 }
      },
      {
        id: "self",
        name: "自我态度",
        meaning: "自己对这个问题的态度和看法",
        position: { x: 120, y: 180 }
      },
      {
        id: "environment",
        name: "环境影响",
        meaning: "外部环境和他人对这个事情的影响",
        position: { x: 200, y: 250 }
      },
      {
        id: "hopes",
        name: "希望恐惧",
        meaning: "内心的希望和恐惧",
        position: { x: 280, y: 180 }
      },
      {
        id: "outcome",
        name: "最终结果",
        meaning: "事情可能的发展结果",
        position: { x: 200, y: 320 }
      }
    ]
  },
  {
    id: "horseshoe",
    name: "七张马蹄形",
    nameEn: "Horseshoe Spread",
    description: "弧形展开的七张牌，适合探索事件发展脉络",
    image: "https://example.com/images/horseshoe.jpg",
    cardCount: 7,
    bestFor: ["career", "finance", "health", "other"],
    positions: [
      {
        id: "past",
        name: "过去",
        meaning: "过去的基础和经历",
        position: { x: 50, y: 200 }
      },
      {
        id: "present",
        name: "现在",
        meaning: "当前的状况",
        position: { x: 120, y: 150 }
      },
      {
        id: "future",
        name: "未来趋势",
        meaning: "短期的发展趋势",
        position: { x: 190, y: 120 }
      },
      {
        id: "advice",
        name: "建议",
        meaning: "关键的行动建议",
        position: { x: 260, y: 120 }
      },
      {
        id: "external",
        name: "外界影响",
        meaning: "外部环境和他人影响",
        position: { x: 330, y: 150 }
      },
      {
        id: "action",
        name: "行动方针",
        meaning: "应该采取的具体行动",
        position: { x: 400, y: 200 }
      },
      {
        id: "outcome",
        name: "最终结果",
        meaning: "事情的可能结果",
        position: { x: 470, y: 250 }
      }
    ]
  },
  {
    id: "relationship",
    name: "二人关系六角阵",
    nameEn: "Relationship Spread",
    description: "专用于分析恋爱、人际、合作等双人关系",
    image: "https://example.com/images/relationship.jpg",
    cardCount: 6,
    bestFor: ["love"],
    positions: [
      {
        id: "self-current",
        name: "你现状",
        meaning: "你当前的状态和想法",
        position: { x: 150, y: 200 }
      },
      {
        id: "other-current",
        name: "对方现状",
        meaning: "对方当前的状态和想法",
        position: { x: 300, y: 120 }
      },
      {
        id: "self-view",
        name: "你的看法",
        meaning: "你对这段关系的感受和看法",
        position: { x: 200, y: 150 }
      },
      {
        id: "other-view",
        name: "对方看法",
        meaning: "对方对这段关系的感受和看法",
        position: { x: 250, y: 220 }
      },
      {
        id: "strengths",
        name: "关系优势",
        meaning: "这段关系的优点和积极因素",
        position: { x: 150, y: 100 }
      },
      {
        id: "future",
        name: "未来走向",
        meaning: "关系未来的可能发展趋势",
        position: { x: 350, y: 200 }
      }
    ]
  }
];

// 问题分类
const questionCategories = [
  {
    id: "love",
    name: "亲密关系",
    icon: "❤️",
    description: "感情、恋爱、婚姻、人际关系"
  },
  {
    id: "career",
    name: "事业",
    icon: "💼",
    description: "工作、职业发展、学习、项目"
  },
  {
    id: "finance",
    name: "财富",
    icon: "💰",
    description: "财务、投资、收入、消费"
  },
  {
    id: "health",
    name: "健康",
    icon: "🏥",
    description: "身体健康、心理健康、生活方式"
  },
  {
    id: "other",
    name: "其他",
    icon: "🎯",
    description: "其他生活问题和决策"
  }
];

// 导出数据（全局变量）
window.tarotData = {
  tarotCards,
  tarotSpreads,
  questionCategories
};

// 添加加载完成标记
console.log('✅ tarot-data.js 加载完成');
console.log('window.tarotData 已设置:', window.tarotData);
console.log('questionCategories 数组长度:', window.tarotData.questionCategories.length);