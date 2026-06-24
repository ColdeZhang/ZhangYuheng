# Personal Homepage Design Spec

Date: 2026-06-24

## Goal

Build a creative bilingual personal homepage for Zhang Yuheng. The site should feel professional, memorable, clear, and light. It should avoid the shape of a traditional landing page, blog, portfolio grid, dashboard, or resume page.

The core experience is an interactive paragraph: a professional self-introduction with highlighted keywords. Visitors click keywords to reveal details through the same textual design language as the original paragraph.

Target impressions:

- Eye-catching
- Clear at a glance
- Light and effortless
- Professional, but not promotional
- Minimal, but not simple

## Core Concept

The homepage is a living piece of text.

The first screen contains:

- A top text line with identity and language controls
- A bilingual self-introduction paragraph
- Highlighted keywords embedded naturally inside the paragraph
- No traditional hero section
- No visible navigation bar
- No cards, popovers, bubbles, modals, or detached panels for primary content

When a visitor clicks a highlighted keyword, the paragraph itself changes. Details either unfold inline or open as a textual cross-section inside the paragraph. The expanded content must still look like part of the same text system.

## Confirmed Mother Text

Chinese mother text:

> 我是张宇衡，数据算法工程师与 AI Agent 工程师，毕业于西南交通大学，目前就职于上海华讯网络系统有限公司，关注复杂数据系统如何从模型走向稳定、可用、可维护的工程现实。我的工作横跨工业智能、时序预测、异常检测、算法平台与高性能工程，也包括将 AI 能力接入真实业务流程的 Agent 化实践。相比单点模型效果，我更在意系统在真实环境中的可靠性、解释性、性能边界，以及它是否能持续产生清楚的业务价值。工作之外，我长期维护 Minecraft 插件与相关项目，也持续关注生成式 AI、时间序列建模和开发工具链的演进。

Draft English mother text:

> I’m Yuheng Zhang, a data algorithm engineer and AI Agent engineer. I graduated from Southwest Jiaotong University and currently work at Shanghai Huaxun Network Systems, focusing on how complex data systems move from models into stable, usable, and maintainable engineering reality. My work spans industrial intelligence, time-series forecasting, anomaly detection, algorithm platforms, high-performance engineering, and Agent-based integration of AI into real business workflows. I care less about isolated model scores than about reliability, interpretability, performance boundaries, and whether a system can keep producing clear value in the real world. Outside work, I maintain Minecraft plugins and related projects, while continuing to follow generative AI, time-series modeling, and developer tooling.

The English version should be natural English, not a strict line-by-line translation. Both languages should preserve the same semantic keyword map.

## Layout

Desktop:

- The content area contains a top information row and the main paragraph.
- Top row left: `张宇衡 / Yuheng Zhang / zhangyuheng@lunadeer.cn`
- Top row right: `中 / EN`
- The top row uses the same typography as the body text: same font size, color, weight, and line height.
- The vertical gap between the top row and the main paragraph equals the paragraph line height, so the whole page reads as one text composition rather than a header plus content.

Mobile:

- The layout becomes a single column.
- Language switch appears first, aligned left.
- Name pinyin and email appear below it.
- Main paragraph follows below.
- Spacing continues to follow the same line-height rhythm as the body text.

## Keyword Highlighting

Keywords should not look like buttons.

Default state:

- A highlighter mark covers only the lower 20% of the keyword.
- The mark should feel like a real highlight stroke, not a rectangular background.
- The text remains fully readable and visually calm.

Hover state:

- A second highlighter stroke animates from left to right.
- The stroke grows to fully cover the keyword height.
- This creates a "marking the important phrase again" effect.

Active state:

- The clicked keyword keeps the full highlighter coverage.
- The active keyword remains sharp while unrelated text enters the focus effect.

The language switch and email link should share this same text/highlighter interaction model.

## Focus Effect

When content is expanded, unrelated original paragraph text enters a frosted-glass defocus state.

Rules:

- Current keyword remains sharp.
- Expanded content remains sharp.
- Related text may remain partially sharp if needed for context.
- Unrelated text becomes softly blurred, like being seen through frosted glass.
- The effect should be restrained enough that the paragraph still feels elegant, not obscured or gimmicky.

The focus effect replaces extra visual emphasis. Expanded content does not need cards, smaller text, separators, borders, indentation, or side panels.

## Expansion Modes

There are two expansion modes.

### Inline Semantic Rewrite

Used for keywords that only need a few words or one sentence of explanation.

Behavior:

- The clicked phrase expands within the same sentence.
- The paragraph reflows naturally.
- The animation should feel like the text is rewriting itself.
- No separate module appears.

Confirmed inline keywords:

- `毕业于西南交通大学`
- `数据算法工程师`
- `AI Agent 工程师`
- `高性能工程`
- `解释性`
- `性能边界`

### Text Cross-Section Evidence Layer

Used for keywords that need multiple sentences or multiple paragraphs.

Behavior:

- The paragraph opens at or near the clicked keyword.
- Expanded text grows from the original text position.
- Expanded text uses the same type size, line height, width, weight, and color as the mother paragraph.
- Do not use smaller font, narrower line width, lines, borders, indentation, cards, bubbles, or floating windows.
- The depth is created through text motion and frosted-glass focus, not separate component styling.

Confirmed cross-section keywords:

- `目前就职于上海华讯网络系统有限公司`
- `工业智能`
- `时序预测`
- `异常检测`
- `算法平台`
- `Agent 化实践`
- `Minecraft 插件与相关项目`

## Keyword Content Plan

### 毕业于西南交通大学

Mode: Inline semantic rewrite

Content:

> 毕业于西南交通大学，本科专业为公共事业管理，之后长期转向数据、算法与工程系统方向。

### 数据算法工程师

Mode: Inline semantic rewrite

Content:

> 不只做单点建模，而是把数据处理、模型设计、工程落地和业务验证串成可持续运行的解决方案。

### AI Agent 工程师

Mode: Inline semantic rewrite

Content:

> 关注 Agent 如何进入真实工作流、开发过程、实验迭代和决策支持，而不是停留在演示层面。

### 目前就职于上海华讯网络系统有限公司

Mode: Text cross-section evidence layer

Initial content:

> 2022.07 至今，我在上海华讯网络系统有限公司从事机器学习、工业智能与算法平台方向研发。工作内容覆盖制药生产过程、AR 场景、气象预测等业务领域，重点在于把算法研发、系统架构和工程化落地连接成可交付的技术方案。
>
> 在工程侧，我参与或主导基于 C++ 的算法平台架构设计、多语言算法接口标准化、GPU 资源调度与负载均衡、高性能推理加速，以及边缘部署优化。在算法侧，我负责多源时序数据建模、机器视觉、空间定位、异常检测、质量预测与工艺参数推荐等能力建设。
>
> 这段经历最核心的部分不是某一个模型，而是把复杂业务问题拆解为可验证、可部署、可维护的系统能力。

### 工业智能

Mode: Text cross-section evidence layer

Initial content:

> 在工业智能方向，我主要处理来自生产过程、设备状态和传感器信号的多源数据，将异常检测、质量预测和参数推荐组合成面向真实工艺现场的决策支持能力。
>
> 代表项目是阿斯利康制药设备关键工艺参数优化与预测性维护。系统围绕冻干机、流化床、压片机等关键装备和工艺环节，构建覆盖风险识别、质量一致性评估和参数推荐的分析框架。
>
> 这些工作强调的不只是模型准确率，还包括生产现场中的稳定性、可解释性、提前预警价值，以及是否能减少对人工经验的单点依赖。

### 时序预测

Mode: Text cross-section evidence layer

Initial content:

> 时序预测是我工作和研究中持续关注的方向。一部分来自气象雷达降雨临近预测：基于 TCN 构建雷达回波时序预测模型，引入空间特征建模机制，同时学习时间演化和空间相关性，用于短时强降水、雷暴等强对流天气场景。
>
> 这个项目的工程难点在于雷达数据时空分辨率高、噪声强、实时性要求高。我参与使用 C++ 并行计算进行高性能预处理和特征构建，以满足滚动预测的分钟级更新需求。
>
> 另一部分是 TRACE 研究：从大语言模型中提取事件、因果、规则和情境知识，并通过采样一致性、跨 LLM 验证和数据锚定评估可靠性，再将结构化知识编码用于增强时间序列预测。

### 异常检测

Mode: Text cross-section evidence layer

Initial content:

> 异常检测相关工作主要面向工业过程中的早期风险识别。场景包括冻干机冷凝腔外漏、产品腔/冷凝腔内漏、压力升测试失败，流化床出风温湿度异常，以及压片机预压/主压数值异常等。
>
> 我更关注异常检测在生产系统中的实际位置：它需要在失控前发现偏离趋势，让工艺、设备和质量团队有足够时间介入，而不是事后解释一次失败。
>
> 这类能力最终服务于降低整批报废、冻干失败、不合格片和非计划停机等风险。

### 算法平台

Mode: Text cross-section evidence layer

Initial content:

> 算法平台方向的代表工作是 AR 视频融合算法平台。平台面向多终端、多语言、多模型的统一接入与调度，覆盖从算法研发到边缘部署的完整链路。
>
> 我参与设计和实现模块化算法接口体系，统一支持 C / C++ / Python 算法接入，并以 GPU 为核心资源对象实现动态负载均衡与任务调度，提高多模型并发推理场景下的吞吐和稳定性。
>
> 在工程落地中，我也参与 Python 算法的 C++ 重写与高性能封装、推理加速、边缘设备迁移与性能调优，解决算力受限、功耗约束和实时性要求下的部署问题。

### 高性能工程

Mode: Inline semantic rewrite

Content:

> 包括 C++/Python 混合编程、并行数据预处理、GPU 资源调度、边缘设备迁移、推理加速和生产环境性能调优。

### Agent 化实践

Mode: Text cross-section evidence layer

Initial content:

> Lodey 是一个开源的 AI Agent 驱动的项目管理与执行编排平台，用于将传统 Agile 工作流（Workspace / Project / Milestone / Sprint / Issue）与智能 Agent 执行体系结合，让任务从规划到执行形成自动化流转。
>
> 系统通过 Execution Scheduler 基于状态机调度 Issue，覆盖 `backlog`、`todo`、`in_progress`、`in_review`、`blocked` 等状态，并支持 Human / Agent 混合分配，以及 Human-in-the-Loop 与 YOLO 全自治两种执行模式。
>
> 在执行层，Lodey 通过 MCP 协议为 Agent 提供状态更新、评论、知识检索等工具调用能力，并通过 Bureau Node 支持 Agent 分布式部署与执行。平台支持多节点调度、负载感知分配和执行日志回传；内置 Knowledge Compiler 会将 Issue、决策与评审沉淀为知识库并向量化检索，辅助后续任务执行。
>
> 这一部分展示的是我对 Agent 工程化的核心关注：调度、权限、工具调用、知识沉淀、自动注册、能力发现，以及 Human / Agent 协作如何从概念变成可扩展的自治研发系统。

### Minecraft 插件与相关项目

Mode: Text cross-section evidence layer

Initial content:

> 工作之外，我长期维护 Minecraft 插件与相关项目。它们不会成为整个网站的视觉主题，但会作为轻量个人作品出现，展示我对社区生态、玩法机制和技术实现的持续兴趣。
>
> LunaDeerMC 是这一部分的主要入口：`https://mc.lunadeer.cn/`。这里可以保留稍微轻松的语气，但仍然强调长期维护、真实用户、工程质量和可持续迭代。

### 解释性

Mode: Inline semantic rewrite

Content:

> 模型输出需要能被业务、工艺或产品团队理解、验证和采纳，而不只是给出一个难以解释的数值结果。

### 性能边界

Mode: Inline semantic rewrite

Content:

> 包括吞吐、延迟、资源约束、数值稳定性、连续运行能力和生产环境中的可靠性上限。

## External Links

External links should appear naturally inside expanded text rather than as a prominent navigation row.

Known links:

- Email: `zhangyuheng@lunadeer.cn`
- GitHub: `https://github.com/ColdeZhang`
- LunaDeerMC: `https://mc.lunadeer.cn/`

Link display rules:

- GitHub repositories are not highlighted in the first version.
- LunaDeerMC is shown as a lightweight personal work, not a major homepage pillar.
- TRACE research should be shown as an active research item.

## Accessibility And Interaction Requirements

- All clickable keywords must be keyboard accessible.
- Focus state should match the highlighter visual language.
- Expanded state should be announced semantically in the DOM, not only visually.
- Blur effects must not make active content difficult to read.
- Reduced-motion preference should disable large text movement and replace it with opacity/reflow changes.
- Mobile tap targets must be comfortable without making the text look like buttons.
- Language state and expanded keyword state should be preserved when switching languages.

## Confirmed Content Decisions

- Chinese display name: `张宇衡`
- English display name: `Yuheng Zhang`
- Email: `zhangyuheng@lunadeer.cn`
- Mother text: use the current Chinese and English drafts in this spec for now.
- Inline and cross-section content: first draft extracted from `resume.md`.
- Quantitative metrics: use only information available in `resume.md` for now; do not invent metrics.
- GitHub repositories: do not highlight specific repositories in the first version.
- LunaDeerMC: show as a lightweight personal work.
- TRACE research: show as an active research item.
- Anonymization: no company, client, or project details need to be anonymized at this stage.

## Open Design Questions

- Should the first screen show all confirmed keywords highlighted at once, or reveal some highlights progressively after initial load?
- Should only one keyword be expanded at a time, or should the user be allowed to keep multiple expansions open?
- Should the site include a final "complete resume" plain text export/download, hidden behind an expanded keyword or footer text?
- How expressive should the highlighter colors be: one consistent color, or color families per topic?

## Out Of Scope For First Implementation

- Blog system
- CMS
- Traditional project card grid
- Traditional resume timeline page
- Heavy 3D scene
- Chatbot interface
- Full Minecraft-themed visual world
- Separate portfolio dashboard
