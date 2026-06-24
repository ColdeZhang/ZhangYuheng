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
      { kind: 'text', text: '我是张宇衡，' },
      { kind: 'keyword', keywordId: 'roleDataAlgorithm', text: '数据算法工程师' },
      { kind: 'text', text: '与 ' },
      { kind: 'keyword', keywordId: 'roleAgent', text: 'AI Agent 工程师' },
      { kind: 'text', text: '，' },
      { kind: 'keyword', keywordId: 'education', text: '毕业于西南交通大学' },
      { kind: 'text', text: '，' },
      { kind: 'keyword', keywordId: 'employment', text: '目前就职于上海华讯网络系统有限公司' },
      { kind: 'text', text: '，关注复杂数据系统如何从模型走向稳定、可用、可维护的工程现实。我的工作横跨' },
      { kind: 'keyword', keywordId: 'industrialAi', text: '工业智能' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'timeSeries', text: '时序预测' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'anomalyDetection', text: '异常检测' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'algorithmPlatform', text: '算法平台' },
      { kind: 'text', text: '与' },
      { kind: 'keyword', keywordId: 'performanceEngineering', text: '高性能工程' },
      { kind: 'text', text: '，也包括将 AI 能力接入真实业务流程的 ' },
      { kind: 'keyword', keywordId: 'agentPractice', text: 'Agent 化实践' },
      { kind: 'text', text: '。相比单点模型效果，我更在意系统在真实环境中的' },
      { kind: 'keyword', keywordId: 'reliability', text: '可靠性' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'interpretability', text: '解释性' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'performanceBoundary', text: '性能边界' },
      { kind: 'text', text: '，以及它是否能持续产生清楚的业务价值。工作之外，我长期维护 ' },
      { kind: 'keyword', keywordId: 'minecraftProjects', text: 'Minecraft 插件与相关项目' },
      { kind: 'text', text: '，也持续关注' },
      { kind: 'keyword', keywordId: 'generativeAi', text: '生成式 AI' },
      { kind: 'text', text: '、时间序列建模和' },
      { kind: 'keyword', keywordId: 'developerTooling', text: '开发工具链' },
      { kind: 'text', text: '的演进。' },
    ],
  },
  en: {
    meta: {
      displayName: 'Yuheng Zhang / 张宇衡',
      email: 'zhangyuheng@lunadeer.cn',
      languageLabel: 'EN / 中',
    },
    segments: [
      { kind: 'text', text: "I'm Yuheng Zhang, " },
      { kind: 'keyword', keywordId: 'roleDataAlgorithm', text: 'a data algorithm engineer' },
      { kind: 'text', text: ' and ' },
      { kind: 'keyword', keywordId: 'roleAgent', text: 'AI Agent engineer' },
      { kind: 'text', text: '. I ' },
      { kind: 'keyword', keywordId: 'education', text: 'graduated from Southwest Jiaotong University' },
      { kind: 'text', text: ' and ' },
      { kind: 'keyword', keywordId: 'employment', text: 'currently work at Shanghai Huaxun Network Systems' },
      { kind: 'text', text: ', focusing on how complex data systems move from models into stable, usable, and maintainable engineering reality. My work spans ' },
      { kind: 'keyword', keywordId: 'industrialAi', text: 'industrial intelligence' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'timeSeries', text: 'time-series forecasting' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'anomalyDetection', text: 'anomaly detection' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'algorithmPlatform', text: 'algorithm platforms' },
      { kind: 'text', text: ', and ' },
      { kind: 'keyword', keywordId: 'performanceEngineering', text: 'high-performance engineering' },
      { kind: 'text', text: ', as well as ' },
      { kind: 'keyword', keywordId: 'agentPractice', text: 'Agent-based practice' },
      { kind: 'text', text: ' for bringing AI into real workflows. I care less about isolated model scores than about ' },
      { kind: 'keyword', keywordId: 'reliability', text: 'reliability' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'interpretability', text: 'interpretability' },
      { kind: 'text', text: ', ' },
      { kind: 'keyword', keywordId: 'performanceBoundary', text: 'performance boundaries' },
      { kind: 'text', text: ', and whether a system can keep producing clear value in the real world. Outside work, I maintain ' },
      { kind: 'keyword', keywordId: 'minecraftProjects', text: 'Minecraft plugins and related projects' },
      { kind: 'text', text: ', while continuing to follow ' },
      { kind: 'keyword', keywordId: 'generativeAi', text: 'generative AI' },
      { kind: 'text', text: ', time-series modeling, and ' },
      { kind: 'keyword', keywordId: 'developerTooling', text: 'developer tooling' },
      { kind: 'text', text: '.' },
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
        zh: ['毕业于西南交通大学，本科专业为公共事业管理，之后长期转向数据、算法与工程系统方向。'],
        en: ['I graduated from Southwest Jiaotong University with a public administration background, then moved deeply into data, algorithms, and engineering systems.'],
      },
    },
    employment: {
      mode: 'crossSection',
      content: {
        zh: [
          '2022.07 至今，我在上海华讯网络系统有限公司从事机器学习、工业智能与算法平台方向研发。工作内容覆盖制药生产过程、AR 场景、气象预测等业务领域，重点在于把算法研发、系统架构和工程化落地连接成可交付的技术方案。',
          '在工程侧，我参与或主导基于 C++ 的算法平台架构设计、多语言算法接口标准化、GPU 资源调度与负载均衡、高性能推理加速，以及边缘部署优化。在算法侧，我负责多源时序数据建模、机器视觉、空间定位、异常检测、质量预测与工艺参数推荐等能力建设。',
          '这段经历最核心的部分不是某一个模型，而是把复杂业务问题拆解为可验证、可部署、可维护的系统能力。',
        ],
        en: [
          'Since July 2022, I have worked at Shanghai Huaxun Network Systems on machine learning, industrial intelligence, and algorithm platforms across pharmaceutical production, AR scenarios, and weather forecasting.',
          'On the engineering side, my work includes C++ platform architecture, multilingual algorithm interfaces, GPU scheduling, high-performance inference, and edge deployment. On the algorithm side, it includes time-series modeling, machine vision, spatial localization, anomaly detection, quality prediction, and process parameter recommendation.',
          'The important part is not a single model, but turning complex business problems into verifiable, deployable, and maintainable system capabilities.',
        ],
      },
    },
    industrialAi: {
      mode: 'crossSection',
      content: {
        zh: [
          '在工业智能方向，我主要处理来自生产过程、设备状态和传感器信号的多源数据，将异常检测、质量预测和参数推荐组合成面向真实工艺现场的决策支持能力。',
          '代表项目是阿斯利康制药设备关键工艺参数优化与预测性维护。系统围绕冻干机、流化床、压片机等关键装备和工艺环节，构建覆盖风险识别、质量一致性评估和参数推荐的分析框架。',
          '这些工作强调的不只是模型准确率，还包括生产现场中的稳定性、可解释性、提前预警价值，以及是否能减少对人工经验的单点依赖。',
        ],
        en: [
          'In industrial intelligence, I work with multisource data from production processes, equipment states, and sensor signals, combining anomaly detection, quality prediction, and parameter recommendation into decision support for real process environments.',
          'A representative project is key process parameter optimization and predictive maintenance for AstraZeneca pharmaceutical equipment, covering freeze dryers, fluid beds, tablet presses, and related process stages.',
          'The work is about more than model accuracy: it also depends on stability, interpretability, early warning value, and reducing reliance on isolated human experience.',
        ],
      },
    },
    timeSeries: {
      mode: 'crossSection',
      content: {
        zh: [
          '时序预测是我工作和研究中持续关注的方向。一部分来自气象雷达降雨临近预测：基于 TCN 构建雷达回波时序预测模型，引入空间特征建模机制，同时学习时间演化和空间相关性，用于短时强降水、雷暴等强对流天气场景。',
          '这个项目的工程难点在于雷达数据时空分辨率高、噪声强、实时性要求高。我参与使用 C++ 并行计算进行高性能预处理和特征构建，以满足滚动预测的分钟级更新需求。',
          '另一部分是 TRACE 研究：从大语言模型中提取事件、因果、规则和情境知识，并通过采样一致性、跨 LLM 验证和数据锚定评估可靠性，再将结构化知识编码用于增强时间序列预测。',
        ],
        en: [
          'Time-series forecasting is a continuing theme in both my work and research. In weather radar nowcasting, I worked with TCN-based radar echo sequence prediction and spatial-temporal modeling for short-term heavy rainfall and thunderstorm scenarios.',
          'The engineering challenge was high-resolution, noisy radar data with strict real-time requirements. I worked on C++ parallel preprocessing and feature construction for minute-level rolling updates.',
          'In TRACE, I study reliable knowledge extraction from LLMs for time-series forecasting: extracting events, causality, rules, and context, scoring reliability, and encoding structured knowledge for forecasting models.',
        ],
      },
    },
    anomalyDetection: {
      mode: 'crossSection',
      content: {
        zh: [
          '异常检测相关工作主要面向工业过程中的早期风险识别。场景包括冻干机冷凝腔外漏、产品腔/冷凝腔内漏、压力升测试失败，流化床出风温湿度异常，以及压片机预压/主压数值异常等。',
          '在制药设备项目中，我围绕多源过程数据与传感器信号构建正常工况特征模型，用于识别工况偏离、设备异常与质量风险。冻干场景关注外漏、内漏和压力升测试失败；流化床场景关注出风温湿度异常与混合均匀性；压片场景关注预压/主压异常、模具磨损趋势和更换预测。',
          '我更关注异常检测在生产系统中的实际位置：它需要在失控前发现偏离趋势，让工艺、设备和质量团队有足够时间介入，而不是事后解释一次失败。它也需要和质量预测、参数推荐、计划性维护一起工作，才会真正进入生产决策链路。',
          '这类能力最终服务于降低整批报废、冻干失败、不合格片和非计划停机等风险，并减少对人工经验的单点依赖。',
        ],
        en: [
          'My anomaly detection work focuses on early risk identification in industrial processes, including freeze dryer leaks and pressure-rise test failures, outlet temperature and humidity anomalies in fluid beds, and pre-pressure or main-pressure anomalies in tablet presses.',
          'In pharmaceutical equipment projects, I build normal operating condition models from process data and sensor signals to recognize process deviations, equipment anomalies, and quality risks.',
          'I care about where anomaly detection sits in production: it should find deviation trends before loss of control, giving process, equipment, and quality teams time to act. It also needs to work with quality prediction, parameter recommendation, and planned maintenance.',
          'The intended value is reducing batch scrap, freeze-drying failures, nonconforming tablets, unplanned downtime, and dependence on isolated manual experience.',
        ],
      },
    },
    algorithmPlatform: {
      mode: 'crossSection',
      content: {
        zh: [
          '算法平台方向的代表工作是 AR 视频融合算法平台。平台面向多终端、多语言、多模型的统一接入与调度，覆盖从算法研发到边缘部署的完整链路。',
          '我参与设计和实现模块化算法接口体系，统一支持 C / C++ / Python 算法接入，并以 GPU 为核心资源对象实现动态负载均衡与任务调度，提高多模型并发推理场景下的吞吐和稳定性。',
          '在工程落地中，我也参与 Python 算法的 C++ 重写与高性能封装、推理加速、边缘设备迁移与性能调优，解决算力受限、功耗约束和实时性要求下的部署问题。',
        ],
        en: [
          'A representative platform project is an AR video fusion algorithm platform for unified access and scheduling across terminals, languages, and models.',
          'I helped design modular algorithm interfaces supporting C, C++, and Python, with GPU-centered load balancing and task scheduling for stable concurrent inference.',
          'I also worked on Python-to-C++ rewrites, high-performance wrapping, inference acceleration, edge migration, and tuning under compute, power, and latency constraints.',
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
          'Lodey 是一个开源的 AI Agent 驱动的项目管理与执行编排平台，用于将传统 Agile 工作流（Workspace / Project / Milestone / Sprint / Issue）与智能 Agent 执行体系结合，让任务从规划到执行形成自动化流转。',
          '系统通过 Execution Scheduler 基于状态机调度 Issue，覆盖 backlog、todo、in_progress、in_review、blocked 等状态，并支持 Human / Agent 混合分配，以及 Human-in-the-Loop 与 YOLO 全自治两种执行模式。',
          '在执行层，Lodey 通过 MCP 协议为 Agent 提供状态更新、评论、知识检索等工具调用能力，并通过 Bureau Node 支持 Agent 分布式部署与执行。平台支持多节点调度、负载感知分配和执行日志回传；内置 Knowledge Compiler 会将 Issue、决策与评审沉淀为知识库并向量化检索，辅助后续任务执行。',
          '这一部分展示的是我对 Agent 工程化的核心关注：调度、权限、工具调用、知识沉淀、自动注册、能力发现，以及 Human / Agent 协作如何从概念变成可扩展的自治研发系统。',
        ],
        en: [
          'Lodey is an open-source AI-Agent-driven project management and execution orchestration platform that connects traditional Agile workflows with intelligent Agent execution.',
          'Its Execution Scheduler dispatches Issues through states such as backlog, todo, in_progress, in_review, and blocked, supporting Human / Agent assignment and both Human-in-the-Loop and YOLO autonomous modes.',
          'Agents receive tools through MCP for state updates, comments, knowledge retrieval, and related actions. Bureau Node enables distributed Agent deployment and execution with multi-node scheduling, load-aware assignment, and execution log return.',
          'The built-in Knowledge Compiler turns Issues, decisions, and reviews into a searchable vectorized knowledge base. This reflects my focus on scheduling, permissions, tool use, knowledge capture, registration, capability discovery, and scalable Human / Agent collaboration.',
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
          '工作之外，我长期维护 Minecraft 插件与相关项目。它们不会成为整个网站的视觉主题，但会作为轻量个人作品出现，展示我对社区生态、玩法机制和技术实现的持续兴趣。',
          'LunaDeerMC 是这一部分的主要入口：https://mc.lunadeer.cn/。这里可以保留稍微轻松的语气，但仍然强调长期维护、真实用户、工程质量和可持续迭代。',
        ],
        en: [
          'Outside work, I maintain Minecraft plugins and related projects. They should not become the visual theme of the site, but they do show long-term interest in community ecosystems, gameplay systems, and technical implementation.',
          'LunaDeerMC is the main lightweight entry for this part: https://mc.lunadeer.cn/. The tone can be a little lighter while still emphasizing maintenance, real users, engineering quality, and sustainable iteration.',
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
