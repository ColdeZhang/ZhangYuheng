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
      { kind: 'text', text: `张宇衡，数据算法工程师，拥有 ${yearsOfExperience} 年工作经验，研究和实践方向包括 AI Agent 工程化。本科` },
      { kind: 'keyword', keywordId: 'education', text: '毕业于西南交通大学' },
      { kind: 'text', text: '，' },
      { kind: 'keyword', keywordId: 'employment', text: '目前就职于上海华讯网络系统有限公司' },
      { kind: 'text', text: '，主要工作涉及机器学习模型在业务场景中的工程化应用，包括数据链路接入与持续可用、推理服务运行、模型验证迭代，以及与业务、工艺、产品等团队的协同交付。过去几年的项目主要围绕' },
      { kind: 'keyword', keywordId: 'industrialAi', text: '工业智能' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'timeSeries', text: '时序预测' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'anomalyDetection', text: '异常检测' },
      { kind: 'text', text: '、' },
      { kind: 'keyword', keywordId: 'algorithmPlatform', text: '算法平台' },
      { kind: 'text', text: '展开，也包括 C++/Python 混合加速、GPU 调度、边缘部署和生产环境中的性能调优。近期相关工程经验也延伸到 ' },
      { kind: 'keyword', keywordId: 'agentPractice', text: 'Agent 化实践' },
      { kind: 'text', text: '中，关注智能体在研发流程、任务编排和知识沉淀中的实际应用。相关工作重点包括系统在噪声数据、资源约束和业务变化下的连续运行能力，输出结果的可采纳性，以及性能边界的明确性。工作之外，长期维护 ' },
      { kind: 'keyword', keywordId: 'minecraftProjects', text: 'Minecraft 插件与相关项目' },
      { kind: 'text', text: '；这些项目与职业方向不完全重合，但提供了面向真实用户进行工具设计、反馈处理和长期维护的实践经验。' },
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
        zh: ['覆盖数据处理、模型设计、工程落地和业务验证等环节，目标是形成可持续运行的算法解决方案。'],
        en: ['Not only model building, but connecting data processing, model design, engineering delivery, and business validation into systems that keep running.'],
      },
    },
    roleAgent: {
      mode: 'inline',
      content: {
        zh: ['关注 Agent 在真实工作流、开发过程、实验迭代和决策支持中的工程化应用。'],
        en: ['Focused on how Agents enter real workflows, development loops, experiments, and decision support rather than staying as demos.'],
      },
    },
    education: {
      mode: 'inline',
      content: {
        zh: ['公共事业管理专业背景，后续主要方向转向数据、算法与工程系统。'],
        en: ['Public administration major, then a long-term shift into data, algorithms, and engineering systems.'],
      },
    },
    employment: {
      mode: 'crossSection',
      content: {
        zh: [
          '2022.07 至今，在上海华讯网络系统有限公司从事机器学习与算法系统相关研发。工作覆盖制药生产、AR 视频融合、气象雷达预测等场景，通常需要结合业务、工艺和产品需求，对问题边界、数据条件和工程链路进行梳理后，再确定模型、规则、统计方法或数据基础设施方案。',
          '相关工作主要包括两类：一类是算法能力建设，包括多源时序建模、机器视觉、空间定位、异常检测、质量预测和工艺参数推荐；另一类是算法交付工程，包括 C++ 算法平台架构、多语言接口标准化、Python/C++ 混合加速、GPU 资源调度、高性能推理和边缘设备部署。',
          '这些经历强调算法从实验结果到生产应用的完整链路。算法系统需要具备明确的输入输出、可解释的结果、可验证的收益，并能够适应真实生产环境中的噪声、延迟、算力限制和维护成本。',
        ],
        en: [
          'Since July 2022, I have worked at Shanghai ECCOM on machine learning and algorithm systems across pharmaceutical production, AR video fusion, and weather radar forecasting. The work often starts by clarifying the real problem with business, process, and product teams before deciding whether the answer should be a model, a rule, a statistical method, or better data infrastructure.',
          'My work has two sides that constantly meet each other: algorithm capability, including multisource time-series modeling, machine vision, spatial localization, anomaly detection, quality prediction, and process parameter recommendation; and delivery engineering, including C++ algorithm platform architecture, multilingual interfaces, Python/C++ acceleration, GPU scheduling, high-performance inference, and edge deployment.',
          'That experience shaped my standard for useful AI work: an algorithm should not live only in an experiment report. It needs clear inputs and outputs, interpretable results, measurable value, and enough engineering discipline to handle noise, latency, compute limits, and maintenance in production.',
        ],
      },
    },
    industrialAi: {
      mode: 'crossSection',
      content: {
        zh: [
          '工业智能是当前主要业务场景之一。制药生产数据通常具有噪声、延迟和多源异构特征，设备状态、传感器信号、工艺参数与质量结果之间也存在来自现场经验和生产条件的隐性约束。',
          '在阿斯利康制药设备关键工艺参数优化与预测性维护项目中，相关工作围绕冻干机、流化床、压片机等装备构建数据驱动的监测和决策支持能力。系统功能覆盖异常识别、质量预测和参数推荐，需要支持风险提前识别，并给出可解释的参数调整依据。',
          '此类项目的应用价值主要体现在生产决策支持能力上。除模型准确率外，还需要关注结果是否能够被工艺、设备和质量团队理解，预警是否具备可操作性，系统是否能够减少对单个专家经验的依赖，并降低报废、返工和非计划停机风险。',
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
          '时序预测相关工作来自工程项目和正在进行的 TRACE 研究。在气象雷达降雨临近预测项目中，参与构建基于 TCN 的雷达回波序列预测模型，并在结构中加入空间特征建模，使模型同时处理时间演化和空间相关性。',
          '该场景对工程实现有较高要求：雷达数据分辨率高、噪声强、更新频率快，预测结果需要服务短时强降水、雷暴等强对流天气场景。相关工作包括使用 C++ 并行计算进行雷达基数据预处理和特征构建，使滚动预测的数据准备满足分钟级更新要求。',
          'TRACE 研究关注时间序列模型在外部事件、因果关系、规则和情境知识方面的不足。方法上尝试从大语言模型中提取结构化知识，再通过采样一致性、跨 LLM 验证和数据锚定评估可靠性，最后使用轻量知识编码器将其引入预测模型。',
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
          '异常检测相关工作主要面向生产过程中的早期风险识别，而不是单一离群点识别。典型场景包括冻干机冷凝腔外漏、产品腔/冷凝腔内漏、压力升测试失败、流化床出风温湿度异常，以及压片机预压/主压数值异常。',
          '这些问题的难点在于异常通常会先表现为工况偏离、趋势变化或多个变量之间关系的变化。因此需要从多源过程数据和传感器信号中建立正常工况特征，再识别需要提醒现场团队关注的变化。',
          '在冻干、流化床和压片场景中，异常检测通常需要与质量预测、参数推荐、模具磨损趋势判断和计划性维护结合，形成生产决策链路的一部分，用于降低整批报废、冻干失败、不合格片和非计划停机风险。',
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
          '算法平台方向的代表项目是 AR 视频融合算法平台。该平台主要解决多终端、多语言、多模型在统一接入、调度、部署和迭代中的工程问题。',
          '相关工作包括设计和实现模块化算法接口体系，使 C / C++ / Python 算法能够以统一方式接入；同时以 GPU 为核心资源对象进行动态负载均衡和任务调度，提升多模型并发推理时的吞吐、延迟和稳定性表现。',
          '这类平台工作涉及较多工程细节：Python 算法需要 C++ 重写或高性能封装，推理链路需要加速，模型需要迁移到边缘设备，并在算力、功耗和实时交互要求之间进行权衡。平台建设的目标是将算法迭代纳入可复用、可维护的交付流程。',
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
          'Lodey 是一个正在开发中的开源（暂未发布）AI Agent 驱动项目管理与执行编排平台。它将传统 Agile 工作流中的 Workspace / Project / Milestone / Sprint / Issue 与 Agent 执行体系放在同一套系统中，使任务从规划、分配、执行到评审形成连续流转。',
          '系统包含基于状态机的 Execution Scheduler，用于调度 Issue 在 backlog、todo、in_progress、in_review、blocked 等状态之间流动，并支持 Human / Agent 混合分配。执行模式同时覆盖 Human-in-the-Loop 协作和 YOLO 全自治执行的实验场景。',
          '在执行层，Lodey 通过 MCP 为 Agent 提供状态更新、评论、知识检索等工具调用能力；Bureau Node 负责分布式 Agent 部署与执行，支持多节点调度、负载感知分配和执行日志回传。Knowledge Compiler 将 Issue、决策和评审沉淀为可检索的知识库，用于减少后续任务中的上下文丢失。',
          '该项目关注 Agent 工程化中的调度、权限、工具调用、记忆边界、能力注册、失败恢复，以及人与 Agent 的协作关系。相关问题更接近工程系统设计，而不是单一聊天界面设计。',
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
        zh: ['指系统在真实环境中的连续运行能力，以及在噪声数据、资源约束、业务变化和部署条件变化下的稳定性。'],
        en: ['Systems should keep running in real environments, staying stable under noisy data, resource limits, business changes, and deployment constraints.'],
      },
    },
    interpretability: {
      mode: 'inline',
      content: {
        zh: ['指模型输出能够被业务、工艺或产品团队理解、验证和采纳，而不是仅提供难以解释的数值结果。'],
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
          '工作之外，长期维护 Minecraft 插件与相关项目，并运营独立插件站 LunaDeerMC。相关工作包括关注社区生态、玩法机制、服务端插件行为、配置体验、文档和维护流程。',
          '这些项目不是本站的主要职业叙事，但补充了面向真实用户进行系统设计、反馈处理、问题修复和工具长期维护的实践经验。入口在 https://mc.lunadeer.cn/。',
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
        zh: ['关注生成式 AI 在开发效率、实验质量、知识提取和复杂任务协作中的应用。'],
        en: ['Focused on how generative AI improves development efficiency, experiment quality, knowledge extraction, and complex-task collaboration.'],
      },
    },
    developerTooling: {
      mode: 'inline',
      content: {
        zh: ['关注工具链在减少重复劳动、保护上下文，以及支持复杂工程任务拆解、验证和复用方面的作用。'],
        en: ['Focused on tooling that reduces repetitive work, preserves context, and makes complex engineering tasks easier to decompose, verify, and reuse.'],
      },
    },
  },
};
