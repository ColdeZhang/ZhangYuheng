export type Locale = 'zh' | 'en';
export type KeywordId =
  | 'roleDataAlgorithm'
  | 'roleAgent'
  | 'education'
  | 'employment'
  | 'industrialAi'
  | 'timeSeries'
  | 'anomalyDetection'
  | 'algorithmPlatform'
  | 'performanceEngineering'
  | 'agentPractice'
  | 'reliability'
  | 'interpretability'
  | 'performanceBoundary'
  | 'minecraftProjects'
  | 'generativeAi'
  | 'developerTooling';

export type TextSegment =
  | { kind: 'text'; text: string }
  | { kind: 'keyword'; keywordId: KeywordId; text: string };

export type ExpansionMode = 'inline' | 'crossSection';

export type KeywordContent = {
  mode: ExpansionMode;
  content: Record<Locale, string[]>;
};

type LocalizedHomepage = {
  meta: {
    displayName: string;
    email: string;
    languageLabel: string;
  };
  segments: TextSegment[];
};

const experienceStartDate = new Date('2022-03-01T00:00:00+08:00');

export function getYearsOfExperience(now = new Date()) {
  const averageYearMs = 365.2425 * 24 * 60 * 60 * 1000;
  return ((now.getTime() - experienceStartDate.getTime()) / averageYearMs).toFixed(2);
}

const yearsOfExperience = getYearsOfExperience();

export const homepageContent: {
  zh: LocalizedHomepage;
  en: LocalizedHomepage;
  keywords: Record<KeywordId, KeywordContent>;
} = {
  zh: {
    meta: {
      displayName: '张宇衡 / Yuheng Zhang',
      email: 'zhangyuheng@lunadeer.cn',
      languageLabel: '中 / EN',
    },
    segments: [
      { kind: 'text', text: `我是张宇衡，数据算法工程师，拥有 ${yearsOfExperience} 年工作经验，也在做 AI Agent 工程化方向的探索。本科` },
      { kind: 'keyword', keywordId: 'education', text: '毕业于西南交通大学' },
      { kind: 'text', text: '，' },
      { kind: 'keyword', keywordId: 'employment', text: '目前就职于上海华讯网络系统有限公司' },
      { kind: 'text', text: '，日常工作不仅仅是完成模型训练本身，更在于将模型有效落地到真实业务场景中，使其具备端到端的工程可用性：包括数据链路的稳定接入与持续可用、推理服务的高可靠运行，以及跨团队在理解、验证与持续迭代维护方面的协同能力。过去几年的项目主要围绕' },
      { kind: 'keyword', keywordId: 'industrialAi', text: '工业智能' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'timeSeries', text: '时序预测' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'anomalyDetection', text: '异常检测' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'algorithmPlatform', text: '算法平台' },
      { kind: 'text', text: '展开，也包括 C++/Python 混合加速、GPU 调度、边缘部署和生产环境里的性能调优。最近我也在把这类工程经验延伸到 ' },
      { kind: 'keyword', keywordId: 'agentPractice', text: 'Agent 化实践' },
      { kind: 'text', text: '里，思考智能体怎样真正进入研发流程、任务编排和知识沉淀，而不是停留在演示效果上。我更关心系统在噪声数据、资源约束和业务变化下能否持续工作，输出是否能被业务、工艺或产品团队采纳，以及性能边界是否清楚。工作之外，我长期维护 ' },
      { kind: 'keyword', keywordId: 'minecraftProjects', text: 'Minecraft 插件与相关项目' },
      { kind: 'text', text: '；它们和我的职业方向不完全重合，但一直提醒我，好的系统最终还是要让真实的人愿意用、用得久。' },
    ],
  },
  en: {
    meta: {
      displayName: 'Yuheng Zhang / 张宇衡',
      email: 'zhangyuheng@lunadeer.cn',
      languageLabel: 'EN / 中',
    },
    segments: [
      { kind: 'text', text: `I'm Yuheng Zhang, a data algorithm engineer with ${yearsOfExperience} years of experience who is also exploring AI Agent engineering. I ` },
      { kind: 'keyword', keywordId: 'education', text: 'graduated from Southwest Jiaotong University' },
      { kind: 'text', text: ' and ' },
      { kind: 'keyword', keywordId: 'employment', text: 'currently work at Shanghai Huaxun Network Systems' },
      { kind: 'text', text: ', where daily work is not only about completing model training, but about effectively landing models in real business scenarios with end-to-end engineering usability: stable and continuously available data pipelines, highly reliable inference services, and cross-team collaboration around understanding, validation, iteration, and maintenance. My recent projects span ' },
      { kind: 'keyword', keywordId: 'industrialAi', text: 'industrial intelligence' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'timeSeries', text: 'time-series forecasting' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'anomalyDetection', text: 'anomaly detection' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'algorithmPlatform', text: 'algorithm platforms' },
      { kind: 'text', text: ', along with C++/Python acceleration, GPU scheduling, edge deployment, and production performance tuning. I have also been extending that engineering lens into ' },
      { kind: 'keyword', keywordId: 'agentPractice', text: 'Agent-based practice' },
      { kind: 'text', text: ', thinking about how Agents can enter development workflows, task orchestration, and knowledge capture instead of staying at the demo layer. I care about whether a system keeps working under noisy data, resource limits, and changing business context; whether its output can be adopted by business, process, or product teams; and whether its performance boundaries are honest. Outside work, I maintain ' },
      { kind: 'keyword', keywordId: 'minecraftProjects', text: 'Minecraft plugins and related projects' },
      { kind: 'text', text: '; they are not the center of my professional story, but they keep me close to the simple question of whether real people will enjoy using what I build.' },
    ],
  },
  keywords: {
    roleDataAlgorithm: {
      mode: 'inline',
      content: {
        zh: ['不只做单点建模，而是把数据处理、模型设计、工程落地和业务验证串成可持续运行的解决方案。'],
        en: ['Not only model building, but connecting data processing, model design, engineering delivery, and business validation into systems that keep running.'],
      },
    },
    roleAgent: {
      mode: 'inline',
      content: {
        zh: ['关注 Agent 如何进入真实工作流、开发过程、实验迭代和决策支持，而不是停留在演示层面。'],
        en: ['Focused on how Agents enter real workflows, development loops, experiments, and decision support rather than staying as demos.'],
      },
    },
    education: {
      mode: 'inline',
      content: {
        zh: ['公共事业管理专业，之后长期转向数据、算法与工程系统方向。'],
        en: ['Public administration major, then a long-term shift into data, algorithms, and engineering systems.'],
      },
    },
    employment: {
      mode: 'crossSection',
      content: {
        zh: [
          '2022.07 至今，我在上海华讯网络系统有限公司做机器学习与算法系统相关研发。工作覆盖制药生产、AR 视频融合、气象雷达预测等场景，很多时候需要先和业务、工艺、产品团队一起把问题拆清楚，再决定该用模型、规则、统计方法，还是先补齐数据和工程链路。',
          '我承担过两类互相交叉的工作：一类是算法能力本身，包括多源时序建模、机器视觉、空间定位、异常检测、质量预测和工艺参数推荐；另一类是让这些能力稳定交付，包括 C++ 算法平台架构、多语言接口标准化、Python/C++ 混合加速、GPU 资源调度、高性能推理和边缘设备部署。',
          '这段经历让我形成了一个比较固定的判断标准：算法不能只停在实验报告里。它需要有清楚的输入输出、可解释的结果、可验证的收益，也需要在真实生产环境里承受噪声、延迟、算力和维护成本。',
        ],
        en: [
          'Since July 2022, I have worked at Shanghai Huaxun Network Systems on machine learning and algorithm systems across pharmaceutical production, AR video fusion, and weather radar forecasting. The work often starts by clarifying the real problem with business, process, and product teams before deciding whether the answer should be a model, a rule, a statistical method, or better data infrastructure.',
          'My work has two sides that constantly meet each other: algorithm capability, including multisource time-series modeling, machine vision, spatial localization, anomaly detection, quality prediction, and process parameter recommendation; and delivery engineering, including C++ algorithm platform architecture, multilingual interfaces, Python/C++ acceleration, GPU scheduling, high-performance inference, and edge deployment.',
          'That experience shaped my standard for useful AI work: an algorithm should not live only in an experiment report. It needs clear inputs and outputs, interpretable results, measurable value, and enough engineering discipline to handle noise, latency, compute limits, and maintenance in production.',
        ],
      },
    },
    industrialAi: {
      mode: 'crossSection',
      content: {
        zh: [
          '工业智能是我目前最主要的业务场景。制药生产里的数据通常不干净，也不总是按照建模最舒服的方式出现：设备状态、传感器信号、工艺参数、质量结果之间有延迟、有噪声，也有很多来自现场经验的隐性约束。',
          '在阿斯利康制药设备关键工艺参数优化与预测性维护项目中，我围绕冻干机、流化床、压片机等装备构建数据驱动的监测和决策支持能力。系统需要同时覆盖异常识别、质量预测和参数推荐，既要能提前发现风险，也要能解释为什么建议调整某个工艺参数。',
          '我在这类项目里最在意的是“能不能进入生产决策”。模型准确率当然重要，但更重要的是结果能否被工艺、设备和质量团队理解，能否提前给出足够可操作的预警，能否减少对单个专家经验的依赖，并最终降低报废、返工和非计划停机风险。',
        ],
        en: [
          'Industrial intelligence is my main business domain today. Production data is rarely tidy: equipment states, sensor signals, process parameters, and quality outcomes arrive with delay, noise, and many implicit constraints from real operating experience.',
          'In the AstraZeneca pharmaceutical equipment project, I worked on data-driven monitoring and decision support around freeze dryers, fluid beds, tablet presses, and related process stages. The system needs to connect anomaly detection, quality prediction, and parameter recommendation so it can warn early and explain why a process adjustment is suggested.',
          'What matters to me in these projects is whether the model can enter production decisions. Accuracy matters, but so do interpretability, usable warning time, reduced dependence on individual expert experience, and the ability to lower scrap, rework, and unplanned downtime risk.',
        ],
      },
    },
    timeSeries: {
      mode: 'crossSection',
      content: {
        zh: [
          '时序预测一部分来自工程项目，一部分来自我正在准备的 TRACE 研究。在气象雷达降雨临近预测项目里，我参与构建基于 TCN 的雷达回波序列预测模型，并在结构中加入空间特征建模，让模型同时理解时间演化和空间相关性。',
          '这个场景很考验工程实现：雷达数据分辨率高、噪声强、更新频率快，预测结果还要能服务短时强降水、雷暴等强对流天气场景。我参与使用 C++ 并行计算做雷达基数据预处理和特征构建，目标是把滚动预测的数据准备压到分钟级更新可以接受的范围内。',
          'TRACE 则是在研究另一类问题：时间序列模型往往缺少外部事件、因果关系、规则和情境知识。我尝试从大语言模型中提取这些结构化知识，再用采样一致性、跨 LLM 验证和数据锚定来评估可靠性，最后用轻量知识编码器把它们引入预测模型。',
        ],
        en: [
          'Time-series forecasting shows up in both my engineering work and my TRACE research. In weather radar nowcasting, I worked on TCN-based radar echo sequence prediction with spatial feature modeling so the model could learn temporal evolution and spatial correlation together.',
          'The engineering side was demanding: radar data is high-resolution, noisy, and fast-moving, and the result needs to support short-term heavy rainfall and thunderstorm scenarios. I worked on C++ parallel preprocessing and feature construction to keep rolling prediction close to minute-level update requirements.',
          'TRACE looks at a different weakness of time-series models: they often miss external events, causality, rules, and contextual knowledge. I explore extracting that structured knowledge from LLMs, scoring reliability through sampling consistency, cross-LLM validation, and data anchoring, then encoding it into forecasting models with a lightweight knowledge encoder.',
        ],
      },
    },
    anomalyDetection: {
      mode: 'crossSection',
      content: {
        zh: [
          '我做的异常检测不是单纯找离群点，而是面向生产过程的早期风险识别。典型场景包括冻干机冷凝腔外漏、产品腔/冷凝腔内漏、压力升测试失败，流化床出风温湿度异常，以及压片机预压/主压数值异常。',
          '这些问题的难点在于“异常”通常不是突然出现的。很多风险会先表现为工况偏离、趋势变化或多个变量之间关系的松动，所以需要从多源过程数据和传感器信号中建立正常工况特征，再判断哪些变化值得提醒现场团队。',
          '在冻干、流化床和压片场景里，异常检测通常还要和质量预测、参数推荐、模具磨损趋势判断、计划性维护结合起来。只有这样，它才不只是一个报警模块，而是能进入生产决策链路，帮助降低整批报废、冻干失败、不合格片和非计划停机风险。',
        ],
        en: [
          'My anomaly detection work is less about finding isolated outliers and more about early risk identification in production processes. Typical scenarios include freeze dryer condenser leaks, product chamber or condenser chamber leaks, pressure-rise test failures, fluid-bed outlet temperature and humidity anomalies, and tablet press pre-pressure or main-pressure anomalies.',
          'The hard part is that many failures do not appear all at once. They start as process deviation, trend drift, or weakened relationships between variables, so the system needs to model normal operating conditions from multisource process data and sensor signals before deciding which changes are worth surfacing.',
          'In freeze-drying, fluid-bed, and tablet-press scenarios, anomaly detection also needs to connect with quality prediction, parameter recommendation, tooling wear trends, and planned maintenance. That is what turns it from an alarm module into part of the production decision chain.',
        ],
      },
    },
    algorithmPlatform: {
      mode: 'crossSection',
      content: {
        zh: [
          '算法平台方向的代表项目是 AR 视频融合算法平台。这个平台要解决的不是某一个模型效果，而是多终端、多语言、多模型如何统一接入、调度、部署和迭代。',
          '我参与设计和实现模块化算法接口体系，让 C / C++ / Python 算法可以用统一方式接入；同时以 GPU 为核心资源对象做动态负载均衡和任务调度，提升多模型并发推理时的吞吐、延迟和稳定性。',
          '这类平台工作很贴近工程细节：Python 算法需要 C++ 重写或高性能封装，推理链路需要加速，模型需要迁移到边缘设备，还要在算力、功耗和实时交互要求之间做取舍。对我来说，平台的价值在于让算法迭代不再依赖临时拼装，而是进入一套可复用、可维护的交付流程。',
        ],
        en: [
          'A representative platform project is an AR video fusion algorithm platform. The problem was not one model, but how multiple terminals, languages, and models could share a unified path for access, scheduling, deployment, and iteration.',
          'I helped design and implement modular algorithm interfaces so C, C++, and Python algorithms could be integrated consistently. I also worked on GPU-centered load balancing and task scheduling to improve throughput, latency, and stability under concurrent inference.',
          'This kind of platform work lives close to engineering detail: Python algorithms need C++ rewrites or high-performance wrappers, inference paths need acceleration, models need to move to edge devices, and every decision has to balance compute, power, and real-time interaction requirements.',
        ],
      },
    },
    performanceEngineering: {
      mode: 'inline',
      content: {
        zh: ['包括基于 C++ 的算法平台架构、多语言算法接口、C++/Python 混合加速、GPU 资源调度与负载均衡、雷达数据并行预处理、边缘设备迁移、推理加速，以及面向生产环境的吞吐、延迟、稳定性和可扩展性调优。'],
        en: ['Including C++ algorithm platform architecture, multilingual algorithm interfaces, C++/Python acceleration, GPU scheduling and load balancing, radar-data parallel preprocessing, edge migration, inference acceleration, and production tuning for throughput, latency, stability, and scalability.'],
      },
    },
    agentPractice: {
      mode: 'crossSection',
      content: {
        zh: [
          'Lodey 是我正在开发的一个开源（暂未发布）AI Agent 驱动的项目管理与执行编排平台。它把传统 Agile 工作流里的 Workspace / Project / Milestone / Sprint / Issue，与 Agent 执行体系放在同一套系统里，让任务可以从规划、分配、执行到评审形成连续流转。',
          '系统里有一个基于状态机的 Execution Scheduler，用来调度 Issue 在 backlog、todo、in_progress、in_review、blocked 等状态之间流动，并支持 Human / Agent 混合分配。执行模式上，它既考虑 Human-in-the-Loop 的可控协作，也保留 YOLO 全自治执行的实验空间。',
          '在执行层，Lodey 通过 MCP 为 Agent 提供状态更新、评论、知识检索等工具调用能力；Bureau Node 负责分布式 Agent 部署与执行，支持多节点调度、负载感知分配和执行日志回传。Knowledge Compiler 会把 Issue、决策和评审沉淀为可检索的知识库，减少后续任务重复丢上下文。',
          '我做这个项目，是因为我觉得 Agent 真正困难的部分不在“能不能回答”，而在调度、权限、工具调用、记忆边界、能力注册、失败恢复和人与 Agent 的协作关系。它更像一个工程系统问题，而不是单纯的聊天界面问题。',
        ],
        en: [
          'Lodey is an open-source, not-yet-released AI-Agent-driven project management and execution orchestration platform I am developing. It puts traditional Agile entities such as Workspace, Project, Milestone, Sprint, and Issue into the same system as Agent execution, so work can flow from planning to assignment, execution, and review.',
          'Its Execution Scheduler uses a state machine to move Issues through backlog, todo, in_progress, in_review, blocked, and related states, while supporting Human / Agent mixed assignment. It is designed for both controlled Human-in-the-Loop collaboration and experimental YOLO autonomous execution.',
          'At the execution layer, Lodey uses MCP to give Agents tools for state updates, comments, knowledge retrieval, and related actions. Bureau Node supports distributed Agent deployment and execution with multi-node scheduling, load-aware assignment, and execution log return. Knowledge Compiler turns Issues, decisions, and reviews into a searchable knowledge base so later tasks lose less context.',
          'I am building it because the hard part of Agents is not only whether they can answer. It is scheduling, permissions, tool use, memory boundaries, capability registration, failure recovery, and the relationship between people and Agents inside real development work.',
        ],
      },
    },
    reliability: {
      mode: 'inline',
      content: {
        zh: ['系统需要在真实环境中连续运行，面对噪声数据、资源约束、业务变化和部署条件时仍保持稳定。'],
        en: ['Systems should keep running in real environments, staying stable under noisy data, resource limits, business changes, and deployment constraints.'],
      },
    },
    interpretability: {
      mode: 'inline',
      content: {
        zh: ['模型输出需要能被业务、工艺或产品团队理解、验证和采纳，而不只是给出一个难以解释的数值结果。'],
        en: ['Model outputs need to be understood, validated, and adopted by business, process, or product teams instead of remaining opaque numbers.'],
      },
    },
    performanceBoundary: {
      mode: 'inline',
      content: {
        zh: ['包括吞吐、延迟、资源约束、数值稳定性、连续运行能力和生产环境中的可靠性上限。'],
        en: ['Including throughput, latency, resource limits, numerical stability, continuous operation, and reliability ceilings in production environments.'],
      },
    },
    minecraftProjects: {
      mode: 'crossSection',
      content: {
        zh: [
          '工作之外，我长期维护 Minecraft 插件与相关项目，也有独立插件站 LunaDeerMC。这个部分对我来说更像长期兴趣的延伸：一边关注社区生态和玩法机制，一边把服务端插件、配置体验、文档和维护流程做得更顺手。',
          '它不会成为这个网站的主叙事，但能补充一个更生活化的侧面：我确实喜欢把一个系统做给真实用户用，听反馈，修问题，再慢慢把它整理成更稳定的工具。入口在 https://mc.lunadeer.cn/。',
        ],
        en: [
          'Outside work, I maintain Minecraft plugins and related projects, including the independent plugin site LunaDeerMC. This is a long-running interest where I pay attention to community ecosystems, gameplay systems, server-side plugin behavior, configuration experience, documentation, and maintenance.',
          'It is not the main story of this site, but it adds a more personal side: I like building systems for real users, listening to feedback, fixing problems, and gradually turning rough ideas into stable tools. The entry point is https://mc.lunadeer.cn/.',
        ],
      },
    },
    generativeAi: {
      mode: 'inline',
      content: {
        zh: ['关注生成式 AI 如何提升开发效率、实验质量、知识提取和复杂任务协作。'],
        en: ['Focused on how generative AI improves development efficiency, experiment quality, knowledge extraction, and complex-task collaboration.'],
      },
    },
    developerTooling: {
      mode: 'inline',
      content: {
        zh: ['关注工具链如何减少重复劳动、保护上下文，并让复杂工程任务更容易被拆解、验证和复用。'],
        en: ['Focused on tooling that reduces repetitive work, preserves context, and makes complex engineering tasks easier to decompose, verify, and reuse.'],
      },
    },
  },
};
