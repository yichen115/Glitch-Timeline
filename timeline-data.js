// 故障注入攻击大事记数据 — Fault Injection Attacks Timeline Data
// 每个事件含 zh / en 双语
// 注意: JS 字符串统一使用双引号, HTML 属性统一使用单引号

const TIMELINE_TITLE = {
  zh: {
    headline: "⚡ 芯片故障注入攻击简史",
    text: "<p>故障注入（Fault Injection）通过电压毛刺、时钟毛刺、电磁脉冲（EMFI）、激光/光照、衬底偏压乃至纯软件欠压等手段，在芯片执行的精确瞬间诱发错误，从而绕过签名校验、读保护与安全启动，或直接恢复密钥。本时间轴收录 1996–2026 年间 75 个标志性事件：从 Bellcore 故障密码分析的理论奠基，到 Xbox 360、硬件钱包、特斯拉与汽车 ECU 的实战破解。</p><p>拖动下方时间轴浏览，右上角可切换语言，点击事件可展开详情与原文链接。</p>"
  },
  en: {
    headline: "⚡ A Brief History of Fault Injection Attacks",
    text: "<p>Fault injection induces errors at the precise moment of chip execution — via voltage or clock glitches, electromagnetic pulses (EMFI), laser/light, body-bias injection, or even pure software undervolting — to bypass signature checks, readout protection and secure boot, or to recover cryptographic keys outright. This timeline collects 75 landmark events from 1996 to 2026: from the theoretical foundations of Bellcore fault cryptanalysis to real-world hacks of the Xbox 360, crypto wallets, Tesla and automotive ECUs.</p><p>Drag the time navigator to explore; toggle language at top right; click an event for details and source links.</p>"
  }
};

const TIMELINE_EVENTS = [
  {
    start: { year: 1996, month: 11 },
    zh: { headline: "防篡改的警示 — Anderson & Kuhn",
          text: "上世纪 90 年代，银行与军方广泛部署宣称“防篡改”的智能卡与加密模块。剑桥大学的 Ross Anderson 与 Markus Kuhn 在第二届 USENIX 电子商务研讨会上发表这篇获奖论文，系统回顾了当时已知的攻击手段：电压与时钟毛刺、微探针探测、芯片开封与总线窃听，并指出大多数商用防篡改芯片都能被预算仅数千美元的实验室攻破。该论文获得最佳论文奖，被视为硬件安全评估领域的开山之作，也直接催生了此后十年的故障攻击研究热潮。<br><a href='https://www.usenix.org/conference/2nd-usenix-workshop-electronic-commerce/tamper-resistance-cautionary-note' target='_blank'>论文</a>" },
    en: { headline: "Tamper Resistance — A Cautionary Note",
          text: "In the 1990s, banks and militaries deployed smartcards and crypto modules advertised as “tamper-proof”. At the 2nd USENIX Workshop on Electronic Commerce, Cambridge researchers Ross Anderson and Markus Kuhn surveyed the state of the art: voltage and clock glitches, microprobing, decapsulation and bus snooping — showing that most commercial tamper-resistant chips could be broken with lab equipment costing only a few thousand dollars. The paper won best-paper award, is considered a founding work of hardware security evaluation, and directly inspired the fault-attack research wave that followed.<br><a href='https://www.usenix.org/conference/2nd-usenix-workshop-electronic-commerce/tamper-resistance-cautionary-note' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 1997, month: 5 },
    zh: { headline: "Bellcore 攻击：RSA-CRT 故障密码分析",
          text: "EUROCRYPT 1997。Bellcore 的 Boneh、DeMillo 与 Lipton 证明了一个震惊密码学界的结果：RSA 用中国剩余定理（CRT）加速签名时，只需让芯片在运算中发生<b>一次</b>随机故障，攻击者拿到错误签名后计算 gcd(S′ᵉ − m, N) 即可分解模数、恢复私钥。论文本身是纯理论模型，没有攻击真实芯片，但它首次指出“硬件错误”可以成为密码分析武器，迫使此后所有 RSA-CRT 实现加入签名结果自检（或 Shamir 校验等对策），开创了故障密码分析（fault cryptanalysis）这一全新领域。<br><a href='https://crypto.stanford.edu/~dabo/abstracts/faults.html' target='_blank'>论文</a>" },
    en: { headline: "The Bellcore Attack on RSA-CRT",
          text: "EUROCRYPT 1997. Boneh, DeMillo and Lipton of Bellcore proved a result that shocked the cryptographic community: when RSA signing is accelerated with the Chinese Remainder Theorem, a <b>single</b> random hardware fault during the computation lets an attacker factor the modulus and recover the private key by computing gcd(S′ᵉ − m, N) from the faulty signature. The paper was a purely theoretical model — no real chip was attacked — but it was the first to show that hardware errors themselves can be a cryptanalytic weapon. It forced all subsequent RSA-CRT implementations to verify signatures before output, and founded the field of fault cryptanalysis.<br><a href='https://crypto.stanford.edu/~dabo/abstracts/faults.html' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 1997, month: 8 },
    zh: { headline: "差分故障分析 (DFA) 攻破 DES",
          text: "CRYPTO 1997，紧随 Bellcore 攻击之后。Biham 与 Shamir 提出差分故障分析（Differential Fault Analysis）：对同一明文分别获取正确密文与故障密文，通过两者在末几轮的差分传播逐段恢复 DES 子密钥 —— 几十条故障密文即可恢复完整密钥。DFA 把故障模型从公钥算法扩展到对称密码，成为此后二十多年分组密码故障攻击的范式，AES、ECC 的同类攻击均由此发端。<br><a href='https://link.springer.com/chapter/10.1007/BFb0052259' target='_blank'>论文</a>" },
    en: { headline: "Differential Fault Analysis of DES",
          text: "CRYPTO 1997, hot on the heels of the Bellcore attack. Biham and Shamir introduced Differential Fault Analysis (DFA): obtain a correct and a faulty ciphertext of the same plaintext, then trace the differential propagation through the final rounds to recover DES subkeys piece by piece — a few dozen faulty ciphertexts suffice for the full key. DFA extended the fault model from public-key to symmetric ciphers and became the paradigm for block-cipher fault attacks for the next two decades; similar attacks on AES and ECC all descend from it.<br><a href='https://link.springer.com/chapter/10.1007/BFb0052259' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 1999, month: 5 },
    zh: { headline: "智能卡处理器防篡改设计原则",
          text: "USENIX 智能卡技术研讨会。Kömmerling 与 Kuhn 在真实智能卡处理器上系统演示了实战攻击：向 Vcc、时钟或复位线注入毛刺以跳过指令或破坏比较，用紫外光擦除熔丝位，以及半侵入式微探针读取总线。论文同时给出防御方的设计建议（随机化时序、环境传感器、多层金属屏蔽等），是“低成本攻击实验室”方法论的经典文献，直接塑造了此后智能卡安全认证（Common Criteria EAL 高等级的物理攻击评估）的测试方式。<br><a href='https://www.usenix.org/conference/usenix-workshop-smartcard-technology/design-principles-tamper-resistant-smartcard' target='_blank'>论文</a>" },
    en: { headline: "Design Principles for Tamper-Resistant Smartcard Processors",
          text: "USENIX Workshop on Smartcard Technology. Kömmerling and Kuhn systematically demonstrated real attacks on production smartcard processors: glitching Vcc, clock or reset lines to skip instructions or corrupt comparisons, erasing fuse bits with UV light, and semi-invasive microprobing of on-chip buses. The paper also gave defenders concrete design advice (randomized timing, environmental sensors, metal shield layers). It is the classic reference of the “low-budget attack lab” and directly shaped how smartcard certifications (high-EAL Common Criteria physical attack evaluation) are performed to this day.<br><a href='https://www.usenix.org/conference/usenix-workshop-smartcard-technology/design-principles-tamper-resistant-smartcard' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2000, month: 8 },
    zh: { headline: "DFA 扩展到椭圆曲线密码 (ECC)",
          text: "CRYPTO 2000。Biehl、Meyer 与 Müller 将差分故障分析引入椭圆曲线密码：在标量乘法过程中注入故障（例如让点离开预定曲线、或翻转中间值符号位），可从错误结果中逐比特恢复秘密标量。该工作奠定了 ECC 实现的故障攻击与防护研究基础，后来演变为“无效曲线攻击”等一整类针对 ECDSA/ECDH 实现的物理威胁，也是硬件钱包与安全芯片设计中必须考虑的场景。<br><a href='https://link.springer.com/chapter/10.1007/3-540-44598-6_8' target='_blank'>论文</a>" },
    en: { headline: "Differential Fault Attacks on ECC",
          text: "CRYPTO 2000. Biehl, Meyer and Müller brought differential fault analysis to elliptic-curve cryptography: injecting faults during scalar multiplication (e.g., pushing a point off the intended curve or flipping sign bits of intermediates) recovers the secret scalar bit by bit from erroneous results. The work founded fault-attack research on ECC implementations and later evolved into a whole family of physical threats against ECDSA/ECDH — including invalid-curve attacks — that designers of hardware wallets and secure elements must defend against.<br><a href='https://link.springer.com/chapter/10.1007/3-540-44598-6_8' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2002, month: 8 },
    zh: { headline: "光故障注入攻击诞生",
          text: "CHES 2002。Skorobogatov 与 Anderson 证明了一件出乎意料的事：把芯片开封后，一支普通<b>相机闪光灯</b>就能让 SRAM 比特翻转，一支改装激光笔就能对单个晶体管定点置位/复位 —— 而此前业界认为光注入需要价值数十万美元的激光台。实验在真实智能卡 MCU 上实现单比特精度的故障控制，把光/激光故障注入的门槛拉到百元级，迫使芯片厂商引入顶层金属屏蔽、光传感器等对策。激光 FI 日后成为实验室高精度攻击（以及 2024 年 RP2350 攻破）的主力手段。<br><a href='https://www.cl.cam.ac.uk/~sps32/ches02-optofault.pdf' target='_blank'>论文</a>" },
    en: { headline: "Optical Fault Induction Attacks",
          text: "CHES 2002. Skorobogatov and Anderson showed something unexpected: once a chip is decapsulated, an ordinary <b>camera flash</b> flips SRAM bits, and a modified laser pointer can set/reset individual transistors — until then the industry believed optical injection required laser stations costing hundreds of thousands of dollars. They achieved single-bit precision fault control on real smartcard MCUs, dropping the cost of optical FI to under $100 and forcing vendors to adopt top-metal shields and light sensors. Laser FI later became the go-to technique for high-precision lab attacks (and for the 2024 RP2350 break).<br><a href='https://www.cl.cam.ac.uk/~sps32/ches02-optofault.pdf' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2002, month: 8 },
    zh: { headline: "Bellcore 攻击在真实智能卡上实现",
          text: "CHES 2002。英飞凌的 Aumüller、Bier、Fischer、Hofreiter 与 Seifert 首次把 1997 年的理论攻击搬到真实硬件：在智能卡 IC 执行 RSA-CRT 时用电压尖峰注入故障，成功从错误签名中分解出私钥。论文同时实测了多种软件/硬件对策的有效性，指出“签名前自检”这一最常见对策在双重故障下仍会失效 —— 理论攻击与工程现实之间的鸿沟就此打通。<br><a href='https://eprint.iacr.org/2002/073.pdf' target='_blank'>论文</a>" },
    en: { headline: "Bellcore Attack on a Real Smartcard",
          text: "CHES 2002. Infineon's Aumüller, Bier, Fischer, Hofreiter and Seifert brought the 1997 theoretical attack to real hardware for the first time: inducing faults with voltage spikes while a smartcard IC computed RSA-CRT, they successfully factored the private key out of faulty signatures. The paper also evaluated several software/hardware countermeasures in practice, showing that the most common one — verifying before output — still falls to double faults. The gap between theoretical attack and engineering reality was closed.<br><a href='https://eprint.iacr.org/2002/073.pdf' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2003, month: 9 },
    zh: { headline: "AES 的差分故障攻击",
          text: "CHES 2003。Piret 与 Quisquater 提出针对 SPN（代换-置换网络）结构的通用 DFA 并应用于 AES 与 Khazad：在倒数第二轮 MixColumns 前注入单字节故障，理论上仅 2 条正确/故障密文对即可大幅缩小密钥空间，约 250 条故障密文可在分钟级恢复完整 AES-128 密钥。此后绝大多数 AES 故障攻击（包括激光、EMFI 载体上的实战版本）都建立在该模型之上，也推动了感染式计数器、冗余校验等防护研究。<br><a href='https://link.springer.com/chapter/10.1007/978-3-540-45238-6_7' target='_blank'>论文</a>" },
    en: { headline: "DFA Comes to AES",
          text: "CHES 2003. Piret and Quisquater proposed a generic DFA against SPN (substitution-permutation network) ciphers and applied it to AES and Khazad: injecting a single-byte fault just before the MixColumns of the penultimate round, as few as 2 correct/faulty ciphertext pairs dramatically shrink the key space, and ~250 faulty ciphertexts recover a full AES-128 key in minutes. Nearly all later AES fault attacks — including practical laser and EMFI versions — build on this model, and it motivated research on infection-based and redundancy countermeasures.<br><a href='https://link.springer.com/chapter/10.1007/978-3-540-45238-6_7' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2004, month: 9 },
    zh: { headline: "《故障攻击巫师学徒指南》",
          text: "FDTC 2004（期刊版发表于 Proceedings of the IEEE 2006 年 2 月）。Bar-El、Choukri、Naccache、Tunstall 与 Whelan 写出该领域引用最广的综述：系统分类了故障注入手段（电压、时钟、温度、光照、粒子束）与故障模型（瞬态/永久、单比特/多比特），梳理了 DFA、安全错误攻击（safe-error）、碰撞故障攻击等分析技术，并给出对策全景。FDTC 研讨会本身也正是在这一时期（2004 年起）成为故障攻击领域的专属顶级会议。<br><a href='https://eprint.iacr.org/2004/100' target='_blank'>论文</a>" },
    en: { headline: "The Sorcerer's Apprentice Guide to Fault Attacks",
          text: "FDTC 2004 (journal version in Proceedings of the IEEE, Feb 2006). Bar-El, Choukri, Naccache, Tunstall and Whelan wrote the most-cited survey of the field: a systematic taxonomy of injection methods (voltage, clock, temperature, light, particle beams) and fault models (transient/permanent, single-/multi-bit), plus DFA, safe-error and collision fault-analysis techniques and a panorama of countermeasures. The FDTC workshop itself, founded in this era (2004), became the field's dedicated premier venue.<br><a href='https://eprint.iacr.org/2004/100' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2005, month: 4 },
    zh: { headline: "半侵入式攻击体系化",
          text: "Skorobogatov 的剑桥博士论文/技术报告 UCAM-CL-TR-630。所谓“半侵入式”：开封芯片（发烟硝酸去封装）但不接触钝化层，即可实施光故障注入、光探测（读出总线数据）、背面成像等攻击 —— 威力接近完全侵入式的微探针攻击，但设备成本从百万美元级降到一万美元左右、且不再依赖稀有工艺。该报告成为硬件安全实验室的建设蓝本，也解释了为何此后二十年大部分物理攻击研究都走半侵入路线。<br><a href='https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-630.html' target='_blank'>报告</a>" },
    en: { headline: "Semi-invasive Attacks Systematized",
          text: "Skorobogatov's Cambridge PhD thesis / technical report UCAM-CL-TR-630. “Semi-invasive” means decapsulating the chip (fuming nitric acid) without penetrating the passivation layer — enabling optical fault injection, optical probing (reading bus data with light) and backside imaging at a cost of roughly $10k instead of the million-dollar FIB workstations of fully invasive attacks. The report became the blueprint for hardware security labs worldwide and explains why most physical-attack research of the following two decades took the semi-invasive route.<br><a href='https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-630.html' target='_blank'>Report</a>" }
  },
  {
    start: { year: 2007, month: 9 },
    zh: { headline: "无效故障分析 (Ineffective Fault Analysis)",
          text: "CHES 2007。Clavier 提出了一个反直觉的观点：即便注入的故障<b>没有</b>改变输出，攻击者只要观察到“这次故障无效”这一事实，就已经获得了关于秘密的信息。无效故障分析（IFA）不要求故障成功，因此许多只检测“输出是否出错”的对策对它无效。这一思想后来在 2018 年的 SIFA 中与统计方法结合，成为能击穿掩码防护的强力攻击。<br><a href='https://iacr.org/workshops/ches/ches2007/presentations/S5T2-Clavier.pdf' target='_blank'>论文</a>" },
    en: { headline: "Ineffective Fault Analysis",
          text: "CHES 2007. Clavier made a counter-intuitive point: even when an injected fault does <b>not</b> change the output, merely observing that “this fault was ineffective” leaks information about the secret. Ineffective Fault Analysis (IFA) does not require faults to succeed, so countermeasures that only check whether the output is wrong are useless against it. The idea was later combined with statistics in SIFA (2018), yielding an attack powerful enough to break masked implementations.<br><a href='https://iacr.org/workshops/ches/ches2007/presentations/S5T2-Clavier.pdf' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2007, month: 10 },
    zh: { headline: "首次电磁故障注入 (EMFI)",
          text: "Austrochip 2007。Schmidt 与 Hutter 用火花隙线圈产生强电磁脉冲，对运行 RSA-CRT 的 8 位单片机注入故障，并与光注入手段对比；更关键的是他们演示了“双重故障”攻击 —— 同时让计算与结果校验双双出错，绕过了“签名前自检”这一标准对策。这是电磁故障注入（EMFI）首次公开发表：无需开封、无需接触芯片内部，仅把探头贴近封装表面即可局部注入故障，为日后 EMFI 攻破汽车 ECU 与特斯拉网关埋下伏笔。<br><a href='https://www.semanticscholar.org/paper/Optical-and-EM-Fault-Attacks-on-CRT-based-RSA-%3A-Schmidt-Hutter/a56abd8e15a6de83784fbc1f9d476453e15f4da5' target='_blank'>论文</a>" },
    en: { headline: "First Electromagnetic Fault Injection",
          text: "Austrochip 2007. Schmidt and Hutter used a spark-gap coil to generate strong EM pulses, faulting RSA-CRT on an 8-bit microcontroller, and compared it with optical injection. Crucially, they demonstrated double-fault attacks — corrupting both the computation and the result check — bypassing the standard verify-before-output countermeasure. It was the first published EMFI: no decapsulation and no internal contact, a probe held against the package surface induces localized faults — foreshadowing EMFI's later use against automotive ECUs and the Tesla gateway.<br><a href='https://www.semanticscholar.org/paper/Optical-and-EM-Fault-Attacks-on-CRT-based-RSA-%3A-Schmidt-Hutter/a56abd8e15a6de83784fbc1f9d476453e15f4da5' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2009, month: 9 },
    zh: { headline: "激光 DFA 实战 AES：“紫色威胁”",
          text: "FDTC 2009。Schmidt 与 Herbst 用廉价的紫外/紫色激光器在真实 8 位单片机上对 AES 实施光故障 DFA，精确地在目标轮次注入单字节故障，完整复现了 Piret–Quisquater 理论攻击，把 AES 密钥从芯片里“照”了出来。论文标题“紫色威胁”（A Threat in Violet）一语双关：低成本紫光激光让 AES 故障攻击从理论变成了几百欧元设备就能完成的现实。" },
    en: { headline: "Optical Fault Attacks on AES: A Threat in Violet",
          text: "FDTC 2009. Schmidt and Herbst used a cheap UV/violet laser to perform optical DFA against AES on a real 8-bit microcontroller, injecting single-byte faults precisely at the target round and fully realizing the Piret–Quisquater theoretical attack — literally “shining” the AES key out of the chip. The title's “Threat in Violet” was a double entendre: AES fault attacks went from theory to a few hundred euros' worth of equipment." }
  },
  {
    start: { year: 2009, month: 9 },
    zh: { headline: "欠压故障攻击登上通用 CPU",
          text: "FDTC 2009。Barenghi、Bertoni、Parrinello 与 Pelosi 把故障注入的对象从专用智能卡扩展到通用处理器：对运行纯软件 RSA 的 ARM9 应用处理器缓慢降低供电电压（underfeeding），使其在临界电压下产生计算错误，且故障高度可复现。这证明了即使没有任何硬件密码模块，跑在普通 CPU 上的软件实现同样会被供电操控击垮 —— 十年后 CLKSCREW、Plundervolt 等“软件欠压攻击”的思想源头正在于此。<br><a href='https://dl.acm.org/doi/abs/10.1109/FDTC.2009.30' target='_blank'>论文</a>" },
    en: { headline: "Low-Voltage Fault Attacks Reach Full CPUs",
          text: "FDTC 2009. Barenghi, Bertoni, Parrinello and Pelosi extended fault injection from dedicated smartcards to general-purpose processors: slowly underfeeding an ARM9 application processor running pure-software RSA pushed it into a critical-voltage regime where computation errors appeared — highly reproducibly. It proved that even without any hardware crypto module, software on an ordinary CPU can be broken by power-supply manipulation. This was the intellectual ancestor of the software undervolting attacks — CLKSCREW, Plundervolt — a decade later.<br><a href='https://dl.acm.org/doi/abs/10.1109/FDTC.2009.30' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2011, month: 9 },
    zh: { headline: "时钟毛刺故障模型的黑盒刻画",
          text: "FDTC 2011。Balasch、Gierlichs 与 Verbauwhede（KU Leuven）对 8 位 AVR 单片机做了系统的黑盒实验：在不预设内部结构的前提下，用不同宽度/位置的时钟毛刺诱导故障，归纳出“指令跳过”“指令损坏”等故障模型，并给出故障成功率随参数变化的完整图谱。这篇论文成为指令跳过模型的标准参考 —— 后来绕过签名校验、密码比较的实战毛刺攻击，几乎都是在该故障模型的框架下描述的。<br><a href='https://ieeexplore.ieee.org/document/6076473' target='_blank'>论文</a>" },
    en: { headline: "Clock-Glitch Fault Models on 8-bit MCUs",
          text: "FDTC 2011. Balasch, Gierlichs and Verbauwhede (KU Leuven) ran systematic black-box experiments on 8-bit AVR MCUs: without assuming any internal structure, they induced faults with clock glitches of varying width and position, distilled fault models such as “instruction skip” and “instruction corruption”, and mapped success rates across the parameter space. The paper became the standard reference for instruction-skip models — nearly every later practical glitch that bypasses a signature check or password comparison is described in its framework.<br><a href='https://ieeexplore.ieee.org/document/6076473' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2012, month: 9 },
    zh: { headline: "衬底偏压注入 (BBI) 问世",
          text: "YACC 2012。Maurine、Tobich、Ordas 与 Liardet 提出体偏压注入（Body Bias Injection）：从芯片背面（衬底）注入电压脉冲，直接调制晶体管的阈值电压，从而诱导时序违例型故障。BBI 不需要对准某个具体模块，对正面有金属屏蔽层的芯片尤其有效，且可与 EMFI 共用部分设备。这一“第三条物理注入路线”后来被 Colin O'Flynn 低成本化（CARDIS 2020），并进入主流 FI 实验室的武器库。<br><a href='https://hal-lirmm.ccsd.cnrs.fr/file/index/docid/762035/filename/YAFIT_by_FBBI_YACC12.pdf' target='_blank'>论文</a>" },
    en: { headline: "Body Bias Injection (BBI) Introduced",
          text: "YACC 2012. Maurine, Tobich, Ordas and Liardet proposed Body Bias Injection: injecting a voltage pulse into the silicon substrate from the chip's backside directly modulates transistor threshold voltages, inducing timing-violation faults. BBI needs no aiming at a specific block, works especially well on chips with front-side metal shields, and can share much of an EMFI setup. This “third physical injection route” was later made low-cost by Colin O'Flynn (CARDIS 2020) and entered the arsenal of mainstream FI labs.<br><a href='https://hal-lirmm.ccsd.cnrs.fr/file/index/docid/762035/filename/YAFIT_by_FBBI_YACC12.pdf' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2012, month: 9 },
    zh: { headline: "微线圈 EMFI 精确定位攻击 AES",
          text: "FDTC 2012。Dehbaoui、Dutertre、Robisson 与 Tria（EMSE/CEA）把 EMFI 从“粗放干扰”升级为“定点打击”：用毫米级微线圈探头贴近芯片表面扫描，分别在 FPGA 硬件 AES 与软件 AES 中注入可利用故障并恢复密钥，全程无需开封。该工作确立了 EMFI 作为实用攻击技术的地位 —— 定位精度接近激光、成本和复杂度却低得多，此后汽车 ECU 攻击（BAM BAM、特斯拉网关）沿用的正是这套方法。<br><a href='https://hal-emse.ccsd.cnrs.fr/emse-00742639v1/file/HAL_FDTC2012_Electromagnetic_Transient_Faults_Injection_on_a_hardware_and_software_implementations_of_AES.pdf' target='_blank'>论文</a>" },
    en: { headline: "Localized EMFI on AES with a Micro-Coil",
          text: "FDTC 2012. Dehbaoui, Dutertre, Robisson and Tria (EMSE/CEA) upgraded EMFI from “blunt interference” to “precision strike”: scanning a millimetre-scale micro-coil probe across the chip surface, they injected exploitable faults into both FPGA hardware AES and software AES and recovered the keys — all without decapsulation. This established EMFI as a practical attack technique with near-laser spatial precision at far lower cost and complexity; the automotive ECU attacks that followed (BAM BAM, the Tesla gateway) use exactly this playbook.<br><a href='https://hal-emse.ccsd.cnrs.fr/emse-00742639v1/file/HAL_FDTC2012_Electromagnetic_Transient_Faults_Injection_on_a_hardware_and_software_implementations_of_AES.pdf' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2013, month: 8 },
    zh: { headline: "统计故障攻击 (SFA)：只需错误密文",
          text: "FDTC 2013。Fuhr、Jaulmes、Lomné 与 Thillard（法国 ANSSI）放松了 DFA 最强的假设：不再需要正确/故障密文对，仅凭<b>一批错误密文</b>的统计分布即可恢复 AES 密钥。这意味着攻击者可以毛刺整个加密过程、只收集输出，完全无需知道哪一条是“正确的”，在真实设备的盲打场景（如安全芯片批量攻击）中大幅降低了门槛，也为后来的 SIFA 等统计类攻击铺路。<br><a href='https://ieeexplore.ieee.org/document/6623561' target='_blank'>论文</a>" },
    en: { headline: "Statistical Fault Attacks: Faulty Ciphertexts Only",
          text: "FDTC 2013. Fuhr, Jaulmes, Lomné and Thillard (ANSSI) relaxed DFA's strongest assumption: no correct/faulty ciphertext pair is needed — the statistical distribution of a batch of <b>faulty ciphertexts alone</b> recovers the AES key. An attacker can glitch the entire encryption process, collecting only outputs, without ever knowing which one is “correct” — dramatically lowering the bar in blind scenarios such as mass attacks on secure chips, and paving the way for statistical attacks like SIFA.<br><a href='https://ieeexplore.ieee.org/document/6623561' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2013, month: 8 },
    zh: { headline: "EMFI 故障模型扩展到 32 位单片机",
          text: "FDTC 2013。Moro、Dehbaoui、Heydemann、Robisson 与 Encrenaz 把 EMFI 研究推向现代架构：在 ARM Cortex-M3 上系统刻画电磁脉冲引发的故障行为，通过反汇编级分析将故障归因于 Flash 读取通路的损坏（取指数据被篡改），而非此前猜测的流水线或寄存器堆。这一“取指篡改”模型直接解释了后来大量“毛刺绕过校验”的实战案例，也成为 Cortex-M 系列 FI 研究的基础参考文献。<br><a href='https://arxiv.org/abs/1402.6421' target='_blank'>论文</a>" },
    en: { headline: "EMFI Fault Model on 32-bit MCUs",
          text: "FDTC 2013. Moro, Dehbaoui, Heydemann, Robisson and Encrenaz pushed EMFI research onto modern architectures: systematically characterizing EM-pulse-induced faults on an ARM Cortex-M3, disassembly-level analysis attributed them to corruption of the flash read path (fetched instructions/data being tampered), rather than the pipeline or register file as previously assumed. This “fetch corruption” model directly explains many later “glitch past the check” exploits and became a foundational reference for Cortex-M FI research.<br><a href='https://arxiv.org/abs/1402.6421' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2016, month: 8 },
    zh: { headline: "电压毛刺直接劫持 ARM 程序计数器",
          text: "FDTC 2016。Riscure 的 Timmers、Spruyt 与 Witteman 演示了故障注入的“终极形态”：不再满足于让某次比较出错，而是用电压毛刺篡改取指数据，直接控制 ARM 应用处理器的程序计数器（PC），把故障转化为任意代码执行。这意味着 FI 从“绕过单个检查”升级为完整的漏洞利用原语 —— 同年他们在 Black Hat Europe 演示了绕过安全启动，次年又用 KERNELFAULT 拿下 Linux 内核。<br><a href='https://ieeexplore.ieee.org/document/7774479' target='_blank'>论文</a>" },
    en: { headline: "Controlling PC on ARM Using Fault Injection",
          text: "FDTC 2016. Riscure's Timmers, Spruyt and Witteman demonstrated fault injection's “final form”: rather than making a single comparison fail, voltage glitches corrupt fetched instructions to directly control the program counter of an ARM application processor — turning a fault into arbitrary code execution. FI thus graduated from “bypass one check” to a full exploitation primitive. The same team demoed a secure-boot bypass at Black Hat Europe that year and pwned the Linux kernel with KERNELFAULT the next.<br><a href='https://ieeexplore.ieee.org/document/7774479' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2017, month: 8 },
    zh: { headline: "CLKSCREW：首个纯软件故障攻击",
          text: "USENIX Security 2017（同年 12 月登陆 Black Hat Europe）。哥伦比亚大学 Tang、Sethumadhavan 与 Stolfo 把故障注入从物理实验室搬进纯软件世界：在 Nexus 6（骁龙 SoC）上用内核驱动滥用 DVFS 动态调压调频，把 CPU 核心推到安全工作点之外（超频+欠压），使 ARM TrustZone 内的执行出错 —— 成功提取 TrustZone 中的 AES 密钥，并加载自签名的可信应用。全程无需物理接触，云端/恶意应用场景即可触发，迫使 ARM 与 SoC 厂商封锁危险的频率-电压组合。<br><a href='https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/tang' target='_blank'>论文</a>" },
    en: { headline: "CLKSCREW: Software-Driven Fault Attack",
          text: "USENIX Security 2017 (also at Black Hat Europe that December). Columbia's Tang, Sethumadhavan and Stolfo moved fault injection out of the physical lab into pure software: from a kernel driver on a Nexus 6 (Snapdragon SoC) they abused DVFS to push the CPU core outside its safe operating point (overclock + undervolt), faulting execution inside ARM TrustZone — extracting AES keys from the secure world and loading self-signed trusted apps. No physical access required, so cloud or malicious-app scenarios become realistic; ARM and SoC vendors were forced to blacklist dangerous frequency-voltage pairs.<br><a href='https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/tang' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2017, month: 9 },
    zh: { headline: "激光故障注入绕过手机安全启动",
          text: "FDTC 2017（扩展版 TCHES 2018）。Vasselle 与 Thiebeauld 首次对商用智能手机 SoC 实施激光故障注入：在启动链签名校验的关键指令上定点注入，绕过 Android 安全启动加载任意镜像。该工作证明即便不开封就完全无法操作的现代 BGA 封装手机芯片，在开封+激光台面前依然脆弱，也把“FI 攻击移动设备启动链”从黑客社区经验变成了可复现的学术成果。" },
    en: { headline: "Laser FI Bypasses Smartphone Secure Boot",
          text: "FDTC 2017 (extended in TCHES 2018). Vasselle and Thiebeauld performed the first laser fault injection on a commercial smartphone SoC: precisely targeting the signature-verification instructions of the boot chain to bypass Android secure boot and load arbitrary images. It showed that even modern BGA-packaged phone chips — untouchable without decapsulation — remain vulnerable once exposed to a laser bench, and turned “FI against mobile boot chains” from hacker folklore into reproducible academic results." }
  },
  {
    start: { year: 2018, month: 9 },
    zh: { headline: "SIFA：统计无效故障攻击",
          text: "CHES 2018 / TCHES 2018(3)。Dobraunig、Eichlseder、Korak、Mangard、Mendel 与 Primas 将“无效故障”（2007 年 Clavier 的思想）与统计密钥排序结合成 SIFA：利用故障是否生效的概率偏差逐比特筛选密钥，可击穿掩码（masking）实现与大多数只防“错误输出”的故障对策，且对故障精度要求极低。SIFA 被认为是当时对防护最完善的 AES 实现威胁最大的攻击之一，直接推动了新一轮防护研究。<br><a href='https://tches.iacr.org/index.php/TCHES/article/view/7286' target='_blank'>论文</a>" },
    en: { headline: "SIFA: Statistical Ineffective Fault Attacks",
          text: "CHES 2018 / TCHES 2018(3). Dobraunig, Eichlseder, Korak, Mangard, Mendel and Primas fused “ineffective faults” (Clavier's 2007 idea) with statistical key ranking into SIFA: exploiting the bias in whether faults take effect to sieve the key bit by bit, it breaks masked implementations and most countermeasures that only guard against wrong outputs — and needs very low fault precision. SIFA was considered one of the most dangerous attacks against even the best-protected AES implementations of its time, sparking a new round of countermeasure research.<br><a href='https://tches.iacr.org/index.php/TCHES/article/view/7286' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2019, month: 3 },
    zh: { headline: "塑造毛刺：任意波形电压注入",
          text: "TCHES 2019 / CHES 2019。Bozzato、Focardi 与 Palmarini 挑战了“毛刺越陡越好”的直觉：用廉价的任意波形发生器精确塑造电压毛刺的波形（幅度、宽度、边沿、振铃），成功率显著优于传统 crowbar 短路法。他们在 ST、TI、瑞萨等 6 款 MCU 上绕过受保护的串行引导加载器并提取固件。该工作说明 FI 的“参数空间”远比社区惯例大，也直接推动了 Riscure/Keysight 等商用任意波形毛刺设备的普及。<br><a href='https://tches.iacr.org/index.php/TCHES/article/view/7390' target='_blank'>论文</a>" },
    en: { headline: "Shaping the Glitch",
          text: "TCHES 2019 / CHES 2019. Bozzato, Focardi and Palmarini challenged the “steeper is better” intuition: shaping voltage glitches with a cheap arbitrary waveform generator (amplitude, width, edges, ringing) yields markedly higher success rates than the traditional crowbar short. They bypassed protected serial bootloaders and extracted firmware on six MCUs from ST, TI and Renesas. The work showed the FI parameter space is far larger than community practice assumed and directly pushed the adoption of commercial arbitrary-waveform glitchers from Riscure/Keysight.<br><a href='https://tches.iacr.org/index.php/TCHES/article/view/7390' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2019, month: 11 },
    zh: { headline: "VoltJockey：软件欠压攻破 TrustZone",
          text: "ACM CCS 2019。Qiu、Wang、Lyu 与 Qu 在 CLKSCREW 之后进一步证明：利用多核 ARM 平台的 DVFS 接口，纯软件即可精确控制欠压注入时机，在商用手机/平板（如 Nexus 6 同代平台）上对 TrustZone 可信执行环境注入故障，提取密钥、加载恶意 TA。与 CLKSCREW 相比其可控性与通用性更强，再次说明“节能管理接口”本身就是一个攻击面。<br><a href='https://www.semanticscholar.org/paper/VoltJockey%3A-Breaching-TrustZone-by-Voltage-over-Qiu-Wang/edee1b82c5aa9c639c91f1e78f24a72464f07e96' target='_blank'>论文</a>" },
    en: { headline: "VoltJockey: Breaching TrustZone via Software",
          text: "ACM CCS 2019. Qiu, Wang, Lyu and Qu pushed further than CLKSCREW: using the DVFS interfaces of multi-core ARM platforms, pure software precisely times undervolting faults against TrustZone on commodity phones/tablets, extracting keys and loading malicious trusted apps. With better controllability and generality than its predecessor, VoltJockey reinforced the lesson that power-management interfaces are themselves an attack surface.<br><a href='https://www.semanticscholar.org/paper/VoltJockey%3A-Breaching-TrustZone-by-Voltage-over-Qiu-Wang/edee1b82c5aa9c639c91f1e78f24a72464f07e96' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2019, month: 12 },
    zh: { headline: "Plundervolt：软件欠压击碎 Intel SGX",
          text: "2019 年 12 月披露，IEEE S&P 2020 正式发表（CVE-2019-11157）。Murdock、Oswald、Garcia、Van Bulck、Gruss 与 Piessens 发现 Intel 留给超频玩家的 MSR 0x150 电压调节接口可被滥用：从软件对 CPU 封装内欠压，使 SGX 飞地内的计算翻转比特 —— 提取 AES-NI 密钥、攻破 RSA 实现，甚至在飞地内制造内存安全漏洞。由于 SGX 的安全承诺正是“连操作系统/云厂商都不可信”，这一攻击动摇了整个 Intel TEE 的信任模型；Intel 最终通过微码更新默认禁用该接口，并被学术界视为“软件定义电压攻击”的标志性事件。<br><a href='https://plundervolt.com' target='_blank'>网站</a>" },
    en: { headline: "Plundervolt: Software Undervolting Breaks SGX",
          text: "Disclosed December 2019, formally published at IEEE S&P 2020 (CVE-2019-11157). Murdock, Oswald, Garcia, Van Bulck, Gruss and Piessens found that Intel's overclocking MSR 0x150 voltage interface could be abused: undervolting the CPU package from software flips bits inside SGX enclave computations — extracting AES-NI keys, breaking RSA implementations, even inducing memory-safety bugs inside enclaves. Since SGX's whole promise is “don't even trust the OS or cloud provider”, the attack shook Intel's entire TEE trust model. Intel disabled the interface via microcode update; the work is regarded as the landmark of “software-defined voltage attacks”.<br><a href='https://plundervolt.com' target='_blank'>Site</a>" }
  },
  {
    start: { year: 2020, month: 8 },
    zh: { headline: "V0LTpwn：软件攻击 x86 完整性",
          text: "USENIX Security 2020。Kenjar、Frassetto、Gens、Franz 与 Sadeghi 把欠压攻击的目标从 SGX 机密性扩展到整个 x86 的<b>完整性</b>：通过 MSR 欠压让普通（非飞地）代码出错，包括内核态执行与 Hypervisor，首次证明软件触发的 FI 可以威胁到 SGX 之外的系统根基。这意味着“CPU 计算一定正确”这一所有软件安全的隐含假设，在软件可控的电压面前不再成立。<br><a href='https://www.usenix.org/system/files/sec20-kenjar.pdf' target='_blank'>论文</a>" },
    en: { headline: "V0LTpwn: Attacking x86 Integrity from Software",
          text: "USENIX Security 2020. Kenjar, Frassetto, Gens, Franz and Sadeghi extended undervolting attacks from SGX confidentiality to x86 <b>integrity</b> as a whole: MSR undervolting faults ordinary non-enclave code, including kernel-mode execution and hypervisors — the first demonstration that software-triggered FI threatens the system foundation beyond SGX. In other words, the implicit assumption of all software security — that the CPU computes correctly — no longer holds when voltage is software-controllable.<br><a href='https://www.usenix.org/system/files/sec20-kenjar.pdf' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2020, month: 11 },
    zh: { headline: "低成本 BBI 攻击 WLCSP 封装芯片",
          text: "CARDIS 2020。Colin O'Flynn 把 2012 年提出的体偏压注入拉到“创客级”成本：无需 X 光或激光台，用自制廉价装置对晶圆级封装（WLCSP）的 STM32F415 从背面衬底注入偏压脉冲，成功诱导可利用故障。论文同时开源了工装与方法，证明 BBI 可以绕开正面金属屏蔽，是对抗“有屏蔽层”的安全 MCU 的平民化路线。<br><a href='https://eprint.iacr.org/2020/1228.pdf' target='_blank'>论文</a>" },
    en: { headline: "Low-Cost Body Biasing Injection on WLCSP",
          text: "CARDIS 2020. Colin O'Flynn brought body bias injection (proposed in 2012) down to maker-level cost: with no X-ray or laser bench, a homebuilt cheap rig injected bias pulses through the backside substrate of a wafer-level chip-scale packaged STM32F415, inducing exploitable faults. The paper open-sourced the jig and methodology, showing BBI bypasses front-side metal shields — a democratized route against shielded secure MCUs.<br><a href='https://eprint.iacr.org/2020/1228.pdf' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2021, month: 8 },
    zh: { headline: "VoltPillager：硬件 SVID 攻击复活 Plundervolt",
          text: "USENIX Security 2021。Intel 用微码锁死 MSR 欠压接口防住了 Plundervolt —— Chen、Vasilakis、Murdock 等人随即换了一条路：在 CPU 与电压调节器之间的 SVID 总线上挂一块约 30 美元的 Teensy，伪造调压指令对 Coffee Lake 平台实施硬件欠压，重新攻破 SGX 并提取飞地密钥。论文结论耐人寻味：只要电压调节接口存在，单靠软件补丁无法根治这类攻击 —— 防御需要硬件级改动。<br><a href='https://www.usenix.org/conference/usenixsecurity21/presentation/chen-zitai' target='_blank'>论文</a>" },
    en: { headline: "VoltPillager: $30 Hardware Revives SGX Undervolting",
          text: "USENIX Security 2021. Intel locked down the MSR undervolting interface with microcode to stop Plundervolt — Chen, Vasilakis, Murdock et al. simply took another route: a ~$30 Teensy on the SVID bus between CPU and voltage regulator forges voltage commands to undervolt Coffee Lake platforms in hardware, re-breaking SGX and extracting enclave keys. The sobering conclusion: as long as a voltage-control interface exists, software patches alone cannot eradicate this class of attacks — defense requires hardware-level changes.<br><a href='https://www.usenix.org/conference/usenixsecurity21/presentation/chen-zitai' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2021, month: 11 },
    zh: { headline: "One Glitch to Rule Them All：攻破 AMD SEV",
          text: "ACM CCS 2021。Buhren、Jacob、Krachenfels 与 Seifert（TU 柏林）对 AMD 安全处理器（PSP，Zen 1–3 全系列）的启动 ROM 签名校验实施一次电压毛刺，即在 PSP 上获得代码执行 —— 进而解密 SEV/SEV-ES/SEV-SNP 保护的虚拟机内存、提取 VCEK 背书密钥并伪造远程证明，彻底打破 AMD 加密虚拟化跨三代的安全承诺。由于 PSP 启动 ROM 无法通过固件更新修复，该攻击对当时在售的所有 Zen 平台构成长期威胁，也直接启发了 2023 年 faulTPM 与 2025 年特斯拉攻击。<br><a href='https://arxiv.org/abs/2108.04575' target='_blank'>论文</a>" },
    en: { headline: "One Glitch to Rule Them All: Breaking AMD SEV",
          text: "ACM CCS 2021. Buhren, Jacob, Krachenfels and Seifert (TU Berlin) hit the AMD Secure Processor's (PSP) boot-ROM signature check with a single voltage glitch to gain code execution on the PSP across Zen 1–3 — then decrypted SEV/SEV-ES/SEV-SNP virtual machine memory, extracted VCEK endorsement keys and forged remote attestation, breaking three generations of AMD's encrypted virtualization. Because the PSP boot ROM cannot be patched by firmware updates, the attack posed a long-term threat to every Zen platform on sale, and directly inspired faulTPM (2023) and the Tesla attacks (2025).<br><a href='https://arxiv.org/abs/2108.04575' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2023, month: 8 },
    zh: { headline: "µ-Glitch：多重毛刺击破 TrustZone-M 防护",
          text: "USENIX Security 2023。Saß、Mitev 与 Sadeghi 指出现有 FI 对策的一个致命盲区：重复校验、冗余执行等防护几乎全部假设“单次故障”。他们的 µ-Glitch 平台以纳秒精度连续注入多次协调的电压故障，在 STM32 TrustZone-M MCU 上同时击穿冗余比较与隔离机制。结论：只防单故障的对策在多重毛刺面前形同虚设，防护设计必须重新考虑多故障模型。（其 Black Hat USA 2022 版本已先行展示。）<br><a href='https://www.usenix.org/conference/usenixsecurity23/presentation/sass' target='_blank'>论文</a>" },
    en: { headline: "µ-Glitch: Multi-Glitching TrustZone-M Protections",
          text: "USENIX Security 2023. Saß, Mitev and Sadeghi exposed a fatal blind spot of existing FI countermeasures: redundant checks and duplicated execution almost all assume a single fault. Their µ-Glitch platform injects multiple coordinated voltage faults with nanosecond precision, defeating both redundancy comparisons and isolation on STM32 TrustZone-M MCUs at once. Conclusion: single-fault countermeasures crumble under multi-glitching; protection design must reconsider multi-fault models. (An earlier version was shown at Black Hat USA 2022.)<br><a href='https://www.usenix.org/conference/usenixsecurity23/presentation/sass' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2011, month: 8 },
    zh: { headline: "Xbox 360 Reset Glitch Hack (RGH)",
          text: "黑客 GliGli 与 Tiros 发布的传奇主机越狱（社区发布而非会议议题）：Xbox 360 的 IBM Xenon CPU 在启动时用 memcmp 比对引导加载器哈希，攻击者通过 CPLD 在比对的精确瞬间向 CPU 注入慢时钟/复位脉冲，使比较指令出错、永远返回“相等”—— 微软的签名链就此断裂，所有版本主机都能运行未签名代码。RGH 后来演进出 RGH2/RGH3 等纯时序方案，成为游戏机故障注入破解的代名词，也把“glitch memcmp”这一套路推广到整个硬件黑客社区。<br><a href='https://free60.org/Hacks/Reset_Glitch_Hack' target='_blank'>free60 wiki</a>" },
    en: { headline: "Xbox 360 Reset Glitch Hack (RGH)",
          text: "A legendary console jailbreak released by hackers GliGli and Tiros (a scene release, not a conference talk): the Xbox 360's IBM Xenon CPU compares bootloader hashes with memcmp during boot; a CPLD injects a slow-clock/reset pulse at the precise instant of the comparison, faulting the instruction so it always returns “equal” — Microsoft's signature chain snaps and unsigned code runs on every console revision. RGH evolved into the timing-only RGH2/RGH3 and became synonymous with fault-injection console hacking, popularizing the “glitch the memcmp” pattern across the hardware hacking community.<br><a href='https://free60.org/Hacks/Reset_Glitch_Hack' target='_blank'>free60 wiki</a>" }
  },
  {
    start: { year: 2015, month: 8 },
    zh: { headline: "ChipWhisperer：毛刺攻击平民化",
          text: "DEF CON 23。Colin O'Flynn 发布开源的 ChipWhisperer 平台：一块几百美元的 FPGA 板即可精确产生电压/时钟毛刺并同步采集功耗波形。现场演示绕过 MCU 密码校验、提取密钥，把过去属于顶级实验室的故障注入与侧信道分析带进普通黑客的桌面。ChipWhisperer 此后成为事实上的行业标准教学/研究平台（大量论文与会议议题基于它），O'Flynn 本人也持续产出 BBI、车规 ECU 攻击等后续成果。<br><a href='https://www.youtube.com/watch?v=BHqrA8lzz2o' target='_blank'>演讲录像</a>" },
    en: { headline: "ChipWhisperer: Glitching Made Easy",
          text: "DEF CON 23. Colin O'Flynn released the open-source ChipWhisperer platform: a few-hundred-dollar FPGA board that produces precise voltage/clock glitches and captures synchronized power traces. Live demos bypassed MCU password checks and extracted keys, bringing fault injection and side-channel analysis — formerly the domain of top labs — to ordinary hackers' desks. ChipWhisperer has since become the de-facto standard teaching/research platform (countless papers and talks build on it), and O'Flynn went on to produce BBI and automotive ECU attacks.<br><a href='https://www.youtube.com/watch?v=BHqrA8lzz2o' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2016, month: 11 },
    zh: { headline: "电压毛刺绕过安全启动 — Raelize",
          text: "Black Hat Europe 2016。Raelize 团队（Niek Timmers、Albert Spruyt、Cristofaro Mune，多为 Riscure 背景）在 Black Hat 舞台上演示：ARM 嵌入式 SoC 校验启动镜像签名的瞬间注入一次电压毛刺，签名验证即告失效，任意固件得以启动。这是“安全启动可被 FI 绕过”第一次在主流安全会议上系统性公开演示，直接挑战了“ secure boot 一旦启用便高枕无忧”的行业假设，也奠定了 Raelize 此后近十年一系列 FI 议题的基调。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" },
    en: { headline: "Bypassing Secure Boot using Fault Injection",
          text: "Black Hat Europe 2016. The Raelize team (Niek Timmers, Albert Spruyt, Cristofaro Mune, mostly Riscure veterans) demonstrated on the Black Hat stage: a single voltage glitch injected while an ARM embedded SoC verifies the boot image signature breaks the verification, booting arbitrary firmware. It was the first systematic public demonstration at a major security conference that secure boot can be defeated by FI, directly challenging the industry assumption that “enabled secure boot = done”, and setting the tone for Raelize's decade-long series of FI talks.<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" }
  },
  {
    start: { year: 2017, month: 2 },
    zh: { headline: "攻破 NXP LPC 代码读取保护",
          text: "REcon Brussels 2017。Chris Gerlinsky 针对 NXP LPC 系列 MCU 的 CRP（Code Read Protection）：引导程序在上电时读取 CRP 等级值，在读取瞬间注入电压毛刺可把合法等级损坏成“无效值”，而芯片固件对无效值的处理竟是<b>静默关闭保护</b>—— 随后用调试器即可完整 dump 固件。这是“毛刺配置读取”套路的经典案例：保护机制的默认值/错误处理路径往往才是真正的软肋。<br><a href='https://www.youtube.com/watch?v=YNpJ3c1GJoc' target='_blank'>演讲录像</a>" },
    en: { headline: "Breaking Code Read Protection on NXP LPC MCUs",
          text: "REcon Brussels 2017. Chris Gerlinsky targeted the CRP (Code Read Protection) of NXP LPC MCUs: the bootloader reads the CRP level at power-up; a voltage glitch at that instant corrupts a valid level into an <b>invalid</b> one — and the firmware's handling of invalid values was to silently disable protection. A debugger then dumps the entire firmware. A classic of the “glitch the config read” pattern: the error-handling path of a protection mechanism is often the real weak spot.<br><a href='https://www.youtube.com/watch?v=YNpJ3c1GJoc' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2017, month: 7 },
    zh: { headline: "破解比特币硬件钱包",
          text: "DEF CON 25。Josh Datko 与 Chris Quartier 把目光投向保管私钥的硬件钱包：对钱包内 STM32F2 单片机实施电压毛刺，绕过其 RDP 读保护读取固件与敏感数据。这是针对加密货币硬件钱包的首次公开 FI 演示，预告了次年 35C3 上轰动行业的 wallet.fail，也促使钱包厂商开始认真评估物理攻击场景（此前多数设计只防远程攻击）。<br><a href='https://www.youtube.com/watch?v=hAtoRrxFBWs' target='_blank'>演讲录像</a>" },
    en: { headline: "Breaking Bitcoin Hardware Wallets",
          text: "DEF CON 25. Josh Datko and Chris Quartier turned to the devices guarding crypto private keys: voltage-glitching the STM32F2 inside hardware wallets to bypass RDP readout protection and read firmware and sensitive data. It was the first public FI demonstration against cryptocurrency hardware wallets, previewing the next year's sensational wallet.fail at 35C3, and pushed wallet vendors to finally take physical-attack scenarios seriously (most designs until then only defended against remote attacks).<br><a href='https://www.youtube.com/watch?v=hAtoRrxFBWs' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2017, month: 9 },
    zh: { headline: "KERNELFAULT：毛刺拿下 Linux 内核",
          text: "hardwear.io 2017。Raelize 回答了一个尖锐问题：如果软件完全没有漏洞，还能被攻破吗？答案是能 —— 在系统启动早期、从外部 SDRAM 读取数据的瞬间注入电压毛刺，即可篡改传入内核的指令/数据，从普通用户态一路提升到内核权限。该议题把 FI 的威胁模型从“嵌入式裸机”扩展到完整 Linux 系统，说明物理层攻击可以无视软件层的全部加固。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" },
    en: { headline: "KERNELFAULT: Pwning Linux via FI",
          text: "hardwear.io 2017. Raelize answered a sharp question: if the software has zero bugs, can it still be pwned? Yes — inject a voltage glitch while the system reads from external SDRAM during early boot, and instructions/data flowing into the kernel get corrupted, escalating from unprivileged userland to kernel privileges. The talk expanded FI's threat model from bare-metal embedded to full Linux systems, showing physical-layer attacks ignore all software-layer hardening.<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" }
  },
  {
    start: { year: 2018, month: 6 },
    zh: { headline: "Glitching the Switch：任天堂 Switch 启动 ROM",
          text: "OpenChaos（CCC 科隆）2018。在 Fusée Gelée 软件漏洞震惊 Switch 社区的同一年，安全研究者探讨了另一条路线：对 NVIDIA Tegra X1 启动 ROM 实施电压毛刺注入，试图在硬件层面绕过签名校验。议题记录了毛刺时序搜索、目标点位定位的完整过程，与软件漏洞互为补充，展示了现代游戏机 SoC 在 FI 面前的两条战线。<br><a href='https://media.ccc.de/v/c4.openchaos.2018.06.glitching-the-switch' target='_blank'>演讲录像</a>" },
    en: { headline: "Glitching the Switch (Tegra X1 Boot ROM)",
          text: "OpenChaos (CCC Cologne) 2018. In the same year the Fusée Gelée software exploit stunned the Switch scene, researchers explored the other route: voltage fault injection against the NVIDIA Tegra X1 boot ROM to bypass signature checks at the hardware level. The talk documents the full process of glitch-timing search and target localization, complementing the software exploit and illustrating the two fronts — software and physical — on which modern console SoCs can be attacked.<br><a href='https://media.ccc.de/v/c4.openchaos.2018.06.glitching-the-switch' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2018, month: 12 },
    zh: { headline: "wallet.fail：硬件钱包的至暗时刻",
          text: "35C3（第 35 届混沌通信大会）。Thomas Roth、Josh Datko 与 Dmitry Nedospasov 的这场演讲成为硬件安全史上最出圈的事件之一：对 Ledger Nano S、Ledger Blue 与 Trezor One 的 STM32 主控实施电压毛刺，绕过读保护提取助记词种子与 PIN；还现场用射频侧信道嗅探 Ledger Blue 输入的 PIN。演讲迫使两大钱包厂商紧急发布固件更新与安全声明，让“硬件钱包≠绝对安全”成为公众认知，也直接推高了整个行业的物理防护标准。<br><a href='https://media.ccc.de/v/35c3-9563-wallet_fail' target='_blank'>演讲录像</a>" },
    en: { headline: "wallet.fail — 35C3",
          text: "35th Chaos Communication Congress. The talk by Thomas Roth, Josh Datko and Dmitry Nedospasov became one of the most famous hardware-security events ever: voltage-glitching the STM32 MCUs of the Ledger Nano S, Ledger Blue and Trezor One to bypass readout protection and extract seed phrases and PINs — plus a live RF side-channel sniffing of PIN entry on the Ledger Blue. It forced both major wallet vendors into emergency firmware updates and security statements, made “hardware wallet ≠ absolute security” public knowledge, and permanently raised the industry's physical-protection bar.<br><a href='https://media.ccc.de/v/35c3-9563-wallet_fail' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2019, month: 11 },
    zh: { headline: "毛刺数据传输 → 任意代码执行",
          text: "POC 2019（首尔）。Raelize 把 KERNELFAULT 的思想一般化并推向极致：不再依赖具体系统调用或内存布局，只需毛刺总线上任意一次数据传输，即可把取到的指令篡改成攻击者需要的形态，在启动阶段实现稳定的任意代码执行。议题同时论证：由于攻击发生在物理层，补丁、栈保护、签名校验等一切纯软件缓解措施都无法根治 —— 只有硬件级对策（如在线存储加密、冗余校验）才有效。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" },
    en: { headline: "FI Turns Data Transfers into Arbitrary Execution",
          text: "POC 2019 (Seoul). Raelize generalized and perfected the KERNELFAULT idea: without relying on specific syscalls or memory layouts, glitching any single bus data transfer corrupts a fetched instruction into whatever the attacker needs, yielding reliable arbitrary code execution during boot. The talk also argued that since the attack happens at the physical layer, patches, stack protections and signature checks — any purely software mitigation — cannot fix it; only hardware-level countermeasures (inline memory encryption, redundant checks) help.<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" }
  },
  {
    start: { year: 2019, month: 12 },
    zh: { headline: "Fatal Fury on ESP32：永久攻陷",
          text: "Black Hat Europe 2019。LimitedResults（Karim M. Abdellatif）发表“Pwn the ESP32 Forever”系列成果：ESP32（V1 硅片）上电读取 eFuse 安全配置的瞬间注入电源毛刺，即可绕过 Secure Boot 与 Flash Encryption 两道防线，从量产芯片中提取出本���熔丝保护的密钥。由于 eFuse 属一次性烧录、启动 ROM 无法更新，该漏洞<b>不可通过软件修复</b>，乐鑫最终被迫推出硬件加固的 ESP32-V3 修订版 —— 这是 FI 攻击直接改变芯片厂商产品线的标志性案例。" },
    en: { headline: "Fatal Fury on ESP32 — Black Hat Europe",
          text: "Black Hat Europe 2019. LimitedResults (Karim M. Abdellatif) presented the “Pwn the ESP32 Forever” work: power-glitching the ESP32 (V1 silicon) at the exact moment it reads eFuse security configuration at power-up defeats both Secure Boot and Flash Encryption, extracting keys that were supposed to be fused in production chips. Because eFuses are one-time-programmable and the boot ROM cannot be updated, the flaw was <b>unfixable in software</b> — Espressif eventually shipped a hardware-hardened ESP32-V3 revision. A landmark case of FI directly changing a chip vendor's product line." }
  },
  {
    start: { year: 2022, month: 8 },
    zh: { headline: "Glitched on Earth by Humans：黑盒击穿星链终端",
          text: "Black Hat USA 2022（并登陆 DEF CON 30）。KU Leuven 的 Lennert Wouters 对 SpaceX 星链用户终端做了完全黑盒的安全评估：在不了解定制意法半导体 SoC 内部结构的情况下，用一块约 25 美元的 RP2040 自制 modchip 短接内核电源轨，在启动 ROM 校验签名的瞬间毛刺，获得终端上的任意代码执行。SpaceX 随后发布安全更新并公开致谢。这是低成本 FI 装备挑战航天级定制芯片的标志性案例，标题戏仿了马斯克“在火星上被人类看到”的豪言。<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-Wouters-Glitched-On-Earth.pdf' target='_blank'>演讲幻灯</a>" },
    en: { headline: "Glitched on Earth by Humans (SpaceX Starlink)",
          text: "Black Hat USA 2022 (also at DEF CON 30). Lennert Wouters (KU Leuven) ran a fully black-box evaluation of the SpaceX Starlink user terminal: with no knowledge of the custom STMicroelectronics SoC internals, a ~$25 RP2040-based modchip shorts the core voltage rail to glitch the boot ROM's signature check, yielding arbitrary code execution on the terminal. SpaceX shipped a security update and publicly thanked him. A landmark of low-cost FI gear challenging aerospace-grade custom silicon — the title lampoons Musk's “visible from Mars” ambitions.<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-Wouters-Glitched-On-Earth.pdf' target='_blank'>Slides</a>" }
  },
  {
    start: { year: 2022, month: 8 },
    zh: { headline: "Unlimited Results：再破加固版 ESP32-V3",
          text: "Black Hat USA 2022。乐鑫为修复“Fatal Fury”推出的 ESP32-V3 号称具备故障注入防护 —— Abdellatif、Hériveaux 与 Thillard（LimitedResults / Ledger Donjon）用电压毛刺与 EMFI 组合攻击实现了对程序计数器的精确控制，在加固硅片上再次攻破固件加密并提取受保护内容。结论相当直白：V3 的对策提高了门槛，但对坚持且有装备的攻击者仍然不够。攻防双方的下一次交锋（WOOT 2024 的 PC 控制学术化研究）随即到来。<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-ABDELLATIF-Unlimited-Results-Breaking-Firmware-Encryption.pdf' target='_blank'>演讲幻灯</a>" },
    en: { headline: "Unlimited Results: Breaking ESP32-V3",
          text: "Black Hat USA 2022. Espressif's ESP32-V3 — released to fix “Fatal Fury” — advertised fault-injection resistance; Abdellatif, Hériveaux and Thillard (LimitedResults / Ledger Donjon) combined voltage glitching with EMFI to achieve precise program-counter control, breaking firmware encryption on the hardened silicon and extracting protected content again. The blunt conclusion: V3's countermeasures raised the bar but were still insufficient against persistent, well-equipped attackers. The next round of the arms race — the WOOT 2024 academic study of PC control — followed shortly.<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-ABDELLATIF-Unlimited-Results-Breaking-Firmware-Encryption.pdf' target='_blank'>Slides</a>" }
  },
  {
    start: { year: 2022, month: 6 },
    zh: { headline: "毛刺 OTP 数据传输绕过 SoC 安全配置",
          text: "hardwear.io USA 2022。Raelize 揭示了安全配置链条上一个常被忽视的环节：OTP/eFuse 里存的安全设置本身可能完好无损，但在从 OTP 传送到使用点的<b>途中</b>被电压毛刺篡改 —— 安全启动锁定、调试端口禁用等设置在“运输路上”就被掉包。这一“攻其传输”的思路与此前“攻其读取”（LPC CRP）、“攻其比较”（Xbox RGH）形成完整的方法论家族。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" },
    en: { headline: "Breaking SoC Security by Glitching OTP Data Transfers",
          text: "hardwear.io USA 2022. Raelize exposed an often-overlooked link in the security-configuration chain: the OTP/eFuse contents themselves may be perfectly intact, yet get corrupted by a voltage glitch <b>in transit</b> from OTP storage to the point of use — secure-boot lockouts and debug-port disables are swapped out “on the road”. This “attack the transfer” idea completes a methodological family alongside “attack the read” (LPC CRP) and “attack the compare” (Xbox RGH).<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" }
  },
  {
    start: { year: 2023, month: 11 },
    zh: { headline: "faulTPM：榨干 AMD fTPM 的全部秘密",
          text: "ACM CCS 2023。Jacob、Werling、Buhren 与 Seifert 把 2021 年攻破 AMD PSP 的电压毛刺技术对准了其上运行的固件 TPM（fTPM）：在 Zen 2/3 平台上毛刺 PSP 获得代码执行后，提取 fTPM 的背书密钥与存储密钥（CVE-2023-20589）。后果极其严重：Windows BitLocker 磁盘加密、TPM 远程证明等一切信任 fTPM 的机制全部失效 —— 而受影响设备无需开封、现场数小时即可被完整克隆身份。研究再次证明：集成式安全方案一旦失守，失守的是整个信任链。<br><a href='https://arxiv.org/abs/2304.14717' target='_blank'>论文</a>" },
    en: { headline: "faulTPM: Exposing AMD fTPMs' Deepest Secrets",
          text: "ACM CCS 2023. Jacob, Werling, Buhren and Seifert aimed the 2021 AMD PSP voltage-glitch technique at the firmware TPM (fTPM) running on it: after glitching the PSP on Zen 2/3 platforms for code execution, they extracted the fTPM's endorsement and storage keys (CVE-2023-20589). The consequences are severe: everything trusting the fTPM — Windows BitLocker disk encryption, TPM remote attestation — collapses, and an affected machine's identity can be fully cloned in hours on-site without decapsulation. Once more: when an integrated security solution falls, the entire chain of trust falls with it.<br><a href='https://arxiv.org/abs/2304.14717' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2024, month: 8 },
    zh: { headline: "WOOT 2024：故障注入计算控制 ESP32-V3 程序计数器",
          text: "USENIX WOOT 2024。Delvaux、Mune、Romero 与 Timmers 首次在带有故障注入防护的 ESP32-V3 上同时绕过 Secure Boot 与 Flash Encryption：先篡改加密 Flash 中的内容，使启动加载器签名 CRC 的 32 位结果变成任意值，再用一次电磁毛刺把该值装入 CPU 的程序计数器（PC），跳入 ROM Download Mode，进而执行任意代码并读取未加密 Flash。论文还记录了厂商通报 AR2023-005 与 CVE-2023-35818，确认问题属于硬件缺陷。<br><a href='https://www.usenix.org/conference/woot24/presentation/delvaux' target='_blank'>论文与演讲</a>" },
    en: { headline: "WOOT 2024: Program-Counter Control on ESP32-V3",
          text: "USENIX WOOT 2024. Delvaux, Mune, Romero and Timmers were the first to bypass both Secure Boot and Flash Encryption on the fault-injection-hardened ESP32-V3: they altered encrypted flash so the bootloader-signature CRC produced an attacker-chosen 32-bit value, then used a single EM glitch to load that value into the CPU program counter and jump into ROM Download Mode for arbitrary code execution and access to plaintext flash. The paper records Espressif advisory AR2023-005 and CVE-2023-35818, confirming a hardware flaw that requires a new revision.<br><a href='https://www.usenix.org/conference/woot24/presentation/delvaux' target='_blank'>Paper and talk</a>" }
  },
  {
    start: { year: 2024, month: 8 },
    zh: { headline: "ACE up the Sleeve：EMFI 攻入 iPhone 15 USB-C 控制器",
          text: "DEF CON 32 / 38C3。stacksmashing（Thomas Roth）瞄准苹果首次随 iPhone 15 搭载的 ACE3 USB-C 端口控制器：先逆向其私有架构拿到 JTAG 调试能力，再用精确定时的电磁故障注入（EMFI）毛刺绕过固件认证，让芯片运行被篡改的固件 —— 从而获得对 iPhone 15 硬件前所未有的深度内省能力，也为研究苹果生态的物理安全打开了新入口。议题展示了“逆向+EMFI”组合对闭源定制芯片的杀伤力。<br><a href='https://media.defcon.org/DEF%20CON%2032/DEF%20CON%2032%20presentations/DEF%20CON%2032%20-%20stacksmashing%20-%20ACE%20up%20the%20Sleeve%20From%20getting%20JTAG%20on%20the%20iPhone%2015%20to%20hacking%20into%20Apples%20new%20USB-C%20Controller.pdf' target='_blank'>演讲幻灯</a>" },
    en: { headline: "ACE up the Sleeve: Hacking Apple's USB-C Controller",
          text: "DEF CON 32 / 38C3. stacksmashing (Thomas Roth) targeted Apple's ACE3 USB-C port controller, debuting in the iPhone 15: first reverse-engineering its proprietary architecture to gain JTAG, then using precisely-timed EMFI to glitch past firmware authentication and run patched firmware — gaining unprecedented hardware introspection on the iPhone 15 and opening a new entry point for physical security research on Apple's ecosystem. The talk showcases the killing power of combining reverse engineering with EMFI against closed-source custom silicon.<br><a href='https://media.defcon.org/DEF%20CON%2032/DEF%20CON%2032%20presentations/DEF%20CON%2032%20-%20stacksmashing%20-%20ACE%20up%20the%20Sleeve%20From%20getting%20JTAG%20on%20the%20iPhone%2015%20to%20hacking%20into%20Apples%20new%20USB-C%20Controller.pdf' target='_blank'>Slides</a>" }
  },
  {
    start: { year: 2024, month: 8 },
    zh: { headline: "RP2350 挑战赛：激光 FI 攻破树莓派新安全架构",
          text: "DEF CON 32。树莓派为新一代 RP2350 微控制器的安全架构（签名启动、OTP、冗余检测等一整套防护）悬赏约 2 万美元公开征集攻破者，并把奖金挑战赛搬到 DEF CON。安全公司 IOActive 的研究者使用激光故障注入完成了攻破，拿走了奖金。这是罕见的“厂商主动邀请 FI 攻击”案例：与其相信设计文档，不如让最强的攻击者实测 —— 也再次证明激光 FI 仍是高精度攻击的王者。<br><a href='https://ioactive.com/' target='_blank'>IOActive</a>" },
    en: { headline: "RP2350 Hacking Challenge Won with Laser FI",
          text: "DEF CON 32. Raspberry Pi put a ~$20k bounty on breaking its new RP2350 microcontroller's security architecture (signed boot, OTP, redundancy detection — a full stack of protections) and brought the challenge to DEF CON. Researchers at IOActive completed the break using laser fault injection and collected the bounty. A rare case of a vendor actively inviting FI attacks — trusting the strongest attackers' measurements over design documents — and once again proof that laser FI remains king of high-precision attacks.<br><a href='https://ioactive.com/' target='_blank'>IOActive</a>" }
  },
  {
    start: { year: 2025, month: 5 },
    zh: { headline: "setresuid(⚡)：毛刺 Google TV Streamer 提权",
          text: "hardwear.io NL 2025。Raelize 把 FI 提权 playbook 应用到最新消费级 Android 硬件：在 Google TV Streamer（Amlogic 平台）上已有 adb shell 的前提下，在权限检查（setresuid 等系统调用路径）执行的精确瞬间注入电压毛刺，让权限判断出错，从受限 shell 直接提权到 root。议题标题的 ⚡ 一语双关 —— 十年过去，从 2016 年 Black Hat 的安全启动到今天的流媒体盒子，FI 对现代消费电子依然一招致命。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" },
    en: { headline: "setresuid(⚡): Glitching Google's TV Streamer",
          text: "hardwear.io NL 2025. Raelize applied the FI privilege-escalation playbook to the latest consumer Android hardware: from an adb shell on a Google TV Streamer (Amlogic platform), a voltage glitch at the precise moment of a privilege check (the setresuid syscall path) corrupts the decision, jumping straight from restricted shell to root. The ⚡ in the title is a double entendre — a decade on, from Black Hat 2016's secure boot to today's streaming boxes, FI remains a one-shot kill against modern consumer electronics.<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" }
  },
  {
    start: { year: 2025, month: 6 },
    zh: { headline: "EL3vated Privileges：从 root 毛刺到 ARM EL3",
          text: "hardwear.io USA 2025。Raelize 又进一步：在 Google Nest WiFi Pro（高通平台路由器）上，即便攻击者已拿到 Linux root，ARM 的 EL3 安全监控器仍是最后的堡垒 —— 他们用一次定时电压毛刺篡改陷入 EL3 的 SMC 调用处理，完成从 root 到最高异常级别的逃逸，实现对该商用路由器全栈权限的彻底控制。从内核（2017 KERNELFAULT）到 EL3（2025），Raelize 用八年时间把 FI 提权链条推到了 ARM 特权等级的顶端。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" },
    en: { headline: "EL3vated Privileges: Root to EL3 by Glitching",
          text: "hardwear.io USA 2025. Raelize went one step further: on the Google Nest WiFi Pro (a Qualcomm router platform), even with Linux root in hand, ARM's EL3 secure monitor remains the final fortress — a timed voltage glitch corrupting SMC call handling into EL3 completed the escape from root to the highest exception level, yielding total stack control of a shipping commercial router. From the kernel (KERNELFAULT, 2017) to EL3 (2025), Raelize spent eight years pushing the FI privilege-escalation chain to the top of ARM's privilege ladder.<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" }
  },
  {
    start: { year: 2017, month: 9 },
    zh: { headline: "Safety ≠ Security：ASIL-D 车规 MCU 照样被毛刺",
          text: "FDTC 2017。Riscure 的 Pareja、Wiersma 与 Witteman 做了一个汽车行业不愿面对的实验：对通过 ISO 26262 功能安全认证（QM、ASIL-D1、ASIL-D2 等级）的汽车 MCU 实施电压毛刺与 EMFI。结果触目惊心：安全认证关注的是“随机硬件失效”，而非“攻击者蓄意注入故障”，即便是最高等级 ASIL-D 器件，也有 16–37% 的故障注入成功率。这篇论文是汽车芯片 FI 研究的先声 —— 此后 RH850��AURIX、MPC5xxx 等一个个沦陷，都印证了它的判断。" },
    en: { headline: "Safety ≠ Security: Glitching ASIL-D Automotive MCUs",
          text: "FDTC 2017. Riscure's Pareja, Wiersma and Witteman ran the experiment the automotive industry didn't want to see: voltage glitching and EMFI against MCUs certified to ISO 26262 functional safety (QM, ASIL-D1, ASIL-D2). The results were sobering: safety certification addresses random hardware failures, not deliberately injected faults — even the highest-grade ASIL-D devices faulted 16–37% of the time. The paper was the opening shot of automotive FI research; the subsequent falls of RH850, AURIX, MPC5xxx and others all confirmed its verdict." }
  },
  {
    start: { year: 2018, month: 6 },
    zh: { headline: "故障注入攻击汽车诊断协议",
          text: "escar USA 2018。Raelize 把目标对准汽车 ECU 的 UDS 诊断服务：维修诊断中的 SecurityAccess 采用“种子-密钥”挑战应答机制保护刷写/读取等高权限功能，而在 ECU 校验密钥响应的瞬间注入电压毛刺，即可让校验恒为通过 —— 无需知道密钥就能解锁诊断功能、读取和篡改固件。这是最早公开的汽车 ECU 故障注入实战之一，把 FI 威胁直接带进了汽车售后与改装场景。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" },
    en: { headline: "Fault Injection on Automotive Diagnostic Protocols",
          text: "escar USA 2018. Raelize targeted the UDS diagnostic services of automotive ECUs: SecurityAccess protects high-privilege functions (flashing, reading) with a seed-and-key challenge-response, but a voltage glitch at the moment the ECU verifies the key response makes the check always pass — unlocking diagnostic functions and reading/modifying firmware without ever knowing the key. One of the earliest public automotive ECU FI demonstrations, bringing the FI threat straight into the aftermarket and tuning scene.<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>" }
  },
  {
    start: { year: 2020, month: 11 },
    zh: { headline: "BAM BAM!!：EMFI 解除车规 ECU 审查锁",
          text: "escar Europe 2020（ePrint 2020/937）。Colin O'Flynn 攻克了 NXP MPC55xx/MPC56xx 系列（汽车动力/车身主力芯片）臭名昭著的“审查锁”（censorship）：其 BAM 启动模块会比较密码来决定是否锁死调试/读取，O'Flynn 用 EMFI 在密码比较瞬间注入故障，单次成功率仅 1–2%，但配合自动化重试，在一辆 2019 款雪佛兰 Silverado 2500 HD 的<b>原厂未拆改 E41 ECU 上</b>几分钟内完成解锁并 dump 全部 Flash。这是“整车在环、不拆芯片”EMFI 攻击真实量产 ECU 的里程碑。<br><a href='https://eprint.iacr.org/2020/937' target='_blank'>论文</a>" },
    en: { headline: "BAM BAM!!: EMFI Uncensors a Real Automotive ECU",
          text: "escar Europe 2020 (ePrint 2020/937). Colin O'Flynn broke the notorious “censorship” lock of the NXP MPC55xx/MPC56xx family (workhorse chips of powertrain/body electronics): the BAM boot module compares a password to decide whether to lock debug/readout, and O'Flynn faulted that comparison with EMFI. Single-attempt success was only 1–2%, but with automated retries he unlocked a <b>stock, unmodified E41 ECU</b> from a 2019 Chevrolet Silverado 2500 HD within minutes and dumped its entire flash. A milestone of in-situ EMFI against a real production ECU — no chip removal, no modification.<br><a href='https://eprint.iacr.org/2020/937' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2022, month: 3 },
    zh: { headline: "首次公开瑞萨 RH850 电压毛刺攻击",
          text: "Willem Melching（icanhack.nl）盯上了瑞萨 RH850 —— 汽车电子转向、刹车等安全关键系统的主力 MCU。目标是一块来自 2021 款丰田 RAV4 Prime 电动助力转向（EPS）模块的 RH850/P1M-E（R7F701381）：厂商已禁用串行编程接口，Melching 在芯片内部稳压器的 VCL 引脚上实施 crowbar 电压毛刺，绕过编程器访问保护，完整 dump 固件。这是首个公开的 RH850 故障注入攻击，此后 FEV（2024）、Quarkslab（2026）的工作均沿此路线演进。<br><a href='https://icanhack.nl/blog/' target='_blank'>博客</a>" },
    en: { headline: "First Public Renesas RH850 Glitch (Toyota EPS)",
          text: "Willem Melching (icanhack.nl) took on the Renesas RH850 — the workhorse MCU of safety-critical systems like steering and braking. The target: an RH850/P1M-E (R7F701381) from a 2021 Toyota RAV4 Prime electric power steering (EPS) module. With the serial programmer interface disabled by the vendor, Melching crowbar-glitched the VCL pins of the chip's internal voltage regulator, bypassing programmer access protection and dumping the full firmware. The first public RH850 fault injection attack; the later FEV (2024) and Quarkslab (2026) works follow this lineage.<br><a href='https://icanhack.nl/blog/' target='_blank'>Blog</a>" }
  },
  {
    start: { year: 2023, month: 9 },
    zh: { headline: "EMFI 攻破汽车安全启动加载器",
          text: "ASRG 2023。Dissecto 的 Weiß 与 Pozzobon 针对汽车网关的核心 —— NXP MPC5748G 的安全启动加载器：用 EMFI 在关键执行点损坏栈指针，让程序计数器（PC）被劫持着“跨过”签名校验代码，实现未授权固件启动。更具方法论意义的是，他们开发了 EFISSA 进化算法自动搜索毛刺参数（位置、强度、时序），把传统需要数周的手工调参压缩到一小时内 —— FI 攻击的“自动化时代”由此开启。" },
    en: { headline: "Fault Injection Attacks on Secure Automotive Bootloaders",
          text: "ASRG 2023. Dissecto's Weiß and Pozzobon went after the heart of the automotive gateway — the secure bootloader of the NXP MPC5748G: EMFI corrupts the stack pointer at a critical execution point, hijacking the program counter to “jump over” the signature-check code and boot unauthorized firmware. Methodologically even more significant: their EFISSA evolutionary algorithm automatically searches glitch parameters (position, strength, timing), compressing weeks of manual tuning into under an hour — the beginning of FI's “automation era”." }
  },
  {
    start: { year: 2023, month: 8 },
    zh: { headline: "Back in the Driver's Seat：电压毛刺特斯拉 Autopilot",
          text: "Black Hat USA 2023 / 37C3。TU 柏林团队（Werling、Kühnapfel、Jacob、Drokin）把 AMD SEV 攻击的经验搬到了特斯拉上：对 Model 3/Y 自动驾驶计算机（AP3.x，AMD 平台）的安全启动实施电压毛刺，获得 root shell，从报废车辆上提取出硬件唯一认证密钥、车主个人数据与自动驾驶数据，甚至可以免费激活付费功能（如加速提升包）。研究揭示：只要物理接触到车载电脑，特斯拉的“硬件信任根”可以被完全绕过，二手/报废车数据安全亦成问题。<br><a href='https://www.youtube.com/watch?v=AgC9OiFrIPk' target='_blank'>演讲录像</a>" },
    en: { headline: "Back in the Driver's Seat: Glitching Tesla Autopilot",
          text: "Black Hat USA 2023 / 37C3. The TU Berlin team (Werling, Kühnapfel, Jacob, Drokin) brought their AMD SEV attack experience to Tesla: voltage-glitching the secure boot of the Model 3/Y Autopilot computer (AP3.x, AMD platform) yields a root shell — extracting hardware-unique authentication keys, owner personal data and Autopilot data from salvage units, and even activating paid features (like acceleration boost) for free. The takeaway: with physical access to the car computer, Tesla's hardware root of trust can be fully bypassed — and the data security of used/salvaged cars is in question too.<br><a href='https://www.youtube.com/watch?v=AgC9OiFrIPk' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2024, month: 2 },
    zh: { headline: "电压毛刺解锁 RH850/F1L 车身控制器",
          text: "FEV Secure Lab（Sunny 与 Zari）把 RH850 攻击从研究台推向工程化：目标是车身控制模块（BCM）中的 RH850/F1L，使用仅数百美元的 ChipWhisperer Lite 对 ISOVCL 引脚注入电压毛刺，绕过 16 字节 IDCODE 校验，提取全部 Flash 内容并恢复出诊断安全访问密钥。案例说明：车身控制这种“看似不重要”的 ECU 一旦被 dump，泄露的诊断密钥可能成为横向攻击整车网络的跳板。" },
    en: { headline: "Unlocking Renesas RH850/F1L with Voltage Glitching",
          text: "FEV Secure Lab (Sunny & Zari) turned RH850 attacks into engineering practice: targeting the RH850/F1L inside a body control module (BCM), they used a ChipWhisperer Lite costing only a few hundred dollars to glitch the ISOVCL pin, bypassing the 16-byte IDCODE check, extracting all flash contents and recovering diagnostic security-access keys. The lesson: once a “seemingly unimportant” ECU like a BCM is dumped, its leaked diagnostic keys can become a springboard for lateral movement across the vehicle network." }
  },
  {
    start: { year: 2024, month: 8 },
    zh: { headline: "Ops! It Is JTAG's Fault：攻破 ST SPC58",
          text: "Black Hat USA 2024。GoGoByte 团队（Li、Shi、Yang、Wu）挑战 ST SPC58 —— 号称具备防毛刺冗余校验的汽车 MCU：其 JTAG 密码会连续比较两次，单次毛刺无法同时骗过。团队设计了自制毛刺适配器精确压制第二次校验，用电压毛刺突破双重比较，最终获得代码执行能力与完整固件访问。议题说明车厂/芯片厂为 FI 专门加的“冗余校验”对策，在精心设计的多次毛刺面前依然可以被系统性击败（与学术界 µ-Glitch 的结论互为印证）。" },
    en: { headline: "Ops! It Is JTAG's Fault — Black Hat USA 2024",
          text: "Black Hat USA 2024. The GoGoByte team (Li, Shi, Yang, Wu) took on the ST SPC58 — an automotive MCU advertised with glitch-resistant redundant checks: its JTAG password is compared twice in a row, so a single glitch cannot fool both. The team built a custom glitch adapter that precisely suppresses the second comparison, defeating the double check with voltage glitching and gaining code execution plus full firmware access. The talk shows that “redundant check” countermeasures added specifically against FI can still be systematically defeated by carefully engineered multi-glitches — corroborating the academic µ-Glitch results." }
  },
  {
    start: { year: 2024, month: 10 },
    zh: { headline: "EMFI 彻底关闭 SPC5606B 审查机制",
          text: "Van den Herrewegen 与 Adam 在日产 Hands-Free 模块 ECU 的 ST SPC5606B 上发现：与其攻击 BAM 层的密码比较（成功率低），不如攻击更上游 —— SSCM 模块在上电时从 Flash 加载“审查配置”的过程。他们利用上电复位（POR）的功耗侧信道精确定时，用 EMFI 篡改加载中的配置值，一次性<b>永久禁用</b>审查锁。2024 年 10 月通报 NXP/ST（PSIRT）。该案例把 O'Flynn 的 BAM BAM 思路推进一层：打配置加载比打密码比较更致命。" },
    en: { headline: "Disabling Censorship on SPC5606B via EMFI",
          text: "Van den Herrewegen and Adam found on a Nissan Hands-Free Module's ST SPC5606B that instead of attacking the low-success-rate BAM password comparison, one can strike further upstream: the SSCM module loads the “censorship configuration” from flash at power-up. Using the power-on-reset power side-channel for precise timing, EMFI corrupts the config value in flight, <b>permanently disabling</b> censorship in one shot. Reported to NXP/ST PSIRT in October 2024. The case advances O'Flynn's BAM BAM playbook one level deeper: hitting config load beats hitting password compare." }
  },
  {
    start: { year: 2025, month: 8 },
    zh: { headline: "Three Glitches to Rule One Car：击穿特斯拉全车计算机",
          text: "ACM ASIA CCS 2025。TU 柏林 SecT（Kühnapfel、Werling、Jacob、Seifert）完成了对特斯拉车机的“全满贯”：HW3/HW4 平台的三个核心子系统 —— AMD x86 信息娱乐 SoC（电压毛刺）、FSD 自动驾驶芯片（电压毛刺）、NXP/ST 网关 MCU（EMFI）—— 全部沦陷，且网关上的 EMFI 攻击是持久、非侵入式的。研究强调其普适性：同样的 AMD/英飞凌/NXP/ST 芯片广泛应用于其他车企，攻击手法可直接迁移。标题致敬 2021 年“One Glitch to Rule Them All”。<br><a href='https://dl.acm.org/doi/10.1145/3708821.3710820' target='_blank'>论文</a>" },
    en: { headline: "Three Glitches to Rule One Car (Tesla)",
          text: "ACM AsiaCCS 2025. TU Berlin SecT (Kühnapfel, Werling, Jacob, Seifert) completed a “grand slam” of Tesla's car computer: all three core subsystems of the HW3/HW4 platform fell — the AMD x86 infotainment SoC (voltage glitching), the FSD self-driving chip (voltage glitching), and the NXP/ST gateway MCU (a persistent, non-invasive EMFI attack). The paper stresses generality: the same AMD/Infineon/NXP/ST silicon is widely used by other automakers, so the techniques transfer directly. The title pays homage to 2021's “One Glitch to Rule Them All”.<br><a href='https://dl.acm.org/doi/10.1145/3708821.3710820' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2025, month: 8 },
    zh: { headline: "Watch Your (Lock)Step：毛刺攻入英飞凌 AURIX",
          text: "Black Hat USA 2025。stacksmashing（Thomas Roth）对阵汽车功能安全的旗帜 —— 英飞凌 AURIX TriCore：其“锁步核”（lockstep，双核同步执行互相校验）机制本是防随机故障的金钟罩，研究展示了如何在复位/调试握手的精确窗口注入电压毛刺，绕过调试密码保护与读保护，从这款广泛用于动力与底盘控制的 TC275 中提取固件与秘密。锁步防得住宇宙射线，防不住蓄意的毛刺 —— 汽车芯片的“安全/防护错位”再次暴露。" },
    en: { headline: "Watch Your (Lock)Step: Glitching Infineon AURIX",
          text: "Black Hat USA 2025. stacksmashing (Thomas Roth) faced the flagship of automotive functional safety — the Infineon AURIX TriCore: its lockstep cores (two cores executing in lockstep, cross-checking each other) were designed against random faults, yet the research shows voltage glitches injected in the precise window of the reset/debug handshake bypass debug password and readout protection on the widely-deployed TC275 (powertrain/chassis control), extracting firmware and secrets. Lockstep stops cosmic rays, not deliberate glitches — the safety/security mismatch of automotive silicon is exposed once again." }
  },
  {
    start: { year: 2026, month: 3 },
    zh: { headline: "Quarkslab：链式触发秒杀 RH850 调试密码",
          text: "Philippe Azalbert（Quarkslab）把 RH850 攻击打磨到“分钟级”：针对量产车规 ECU 普遍存在的时序抖动问题，他串联 UART 输出与 ADC 采样两个触发源逐级锁定目标指令窗口，结合 ISOVCL 引脚电压毛刺与功耗侧信道，仅用 88 次尝试、不到一分钟即绕过 RH850/F1KM-S4 及量产 ECU 的调试密码（IDCODE）保护。该工作说明：触发信号工程化之后，曾经“玄学”的毛刺时序搜索已经变成可批量复制的标准流程。<br><a href='https://blog.quarkslab.com/' target='_blank'>博客</a>" },
    en: { headline: "Quarkslab: RH850 Debug Password Falls in a Minute",
          text: "Philippe Azalbert (Quarkslab) polished RH850 attacks to “minute-grade”: against the timing jitter endemic to production automotive ECUs, he chained two trigger sources — UART output and ADC sampling — to lock onto the target instruction window step by step, combining ISOVCL-pin voltage glitching with power side-channel. The debug password (IDCODE) of the RH850/F1KM-S4 and production ECUs fell in 88 attempts, under a minute. The lesson: once trigger engineering matures, the once-“arcane” glitch timing search becomes a standard, mass-reproducible workflow.<br><a href='https://blog.quarkslab.com/' target='_blank'>Blog</a>" }
  },
  {
    start: { year: 2017, month: 12 },
    zh: { headline: "Switch Security：Homebrew on the Horizon",
          text: "34C3 2017。Plutoo、Derrek 与 Naehrwert 公开了 Nintendo Switch 的首个故障注入启动链：对 NVIDIA Tegra X1 的电源实施电压毛刺，泄露密钥与明文固件，为后续 Homebrew 链路奠定基础。演讲没有展开全部毛刺参数，但明确记录了故障注入在真实 Switch 首发破解中的关键作用。<br><a href='https://www.youtube.com/watch?v=Ec4NgWRE8ik' target='_blank'>演讲录像</a>" },
    en: { headline: "Switch Security: Homebrew on the Horizon",
          text: "34C3 2017. Plutoo, Derrek and Naehrwert disclosed the Nintendo Switch's first fault-injection boot-chain break: voltage-glitching the NVIDIA Tegra X1 exposed keys and plaintext firmware and laid the groundwork for the Homebrew chain. The talk did not publish every glitch parameter, but it clearly documents FI's role in the original real-world Switch compromise.<br><a href='https://www.youtube.com/watch?v=Ec4NgWRE8ik' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2019, month: 8 },
    zh: { headline: "MIN()imum Failure：EMFI 攻击 USB 协议栈",
          text: "USENIX WOOT 2019。Colin O'Flynn 证明无需拆开设备外壳，也能用电磁故障注入攻击 USB 协议栈：向 Trezor 钱包和 SoloKey FIDO2 密钥发送异常的 wLength，使设备回读最多 64 KB 内存，泄露敏感数据。论文还介绍了 PhyWhisperer-USB，用于 USB 解码与周期级毛刺触发。<br><a href='https://www.usenix.org/conference/woot19/presentation/oflynn' target='_blank'>论文与演讲</a>" },
    en: { headline: "MIN()imum Failure: EMFI Attacks against USB Stacks",
          text: "USENIX WOOT 2019. Colin O'Flynn showed that an enclosure need not be opened to attack USB stacks with electromagnetic fault injection: malformed wLength values sent to a Trezor wallet and a SoloKey FIDO2 key made the devices read back up to 64 KB of memory, exposing secrets. The paper also introduced PhyWhisperer-USB for USB decoding and cycle-accurate glitch triggering.<br><a href='https://www.usenix.org/conference/woot19/presentation/oflynn' target='_blank'>Paper and talk</a>" }
  },
  {
    start: { year: 2020, month: 12 },
    zh: { headline: "Debug Resurrection：复活 Nordic nRF52 调试接口",
          text: "Black Hat Europe 2020。LimitedResults 展示了 nRF52 系列的电压故障注入：在芯片启动和调试配置处理的关键窗口注入毛刺，重新开启已关闭的 SWD 调试接口，再从 Nordic nRF52 读出受保护固件。该案例把“无 BootROM 的 MCU 也能复活调试口”变成了可复现的硬件攻击路线。<br><a href='https://www.youtube.com/watch?v=r8YXOBb2h48' target='_blank'>演讲录像</a>" },
    en: { headline: "Debug Resurrection on Nordic nRF52 Series",
          text: "Black Hat Europe 2020. LimitedResults demonstrated voltage fault injection against the nRF52 family: glitching the critical startup/debug-configuration window resurrects a disabled SWD port, allowing protected firmware to be read from Nordic nRF52 devices. It turned “debug-port resurrection” on MCUs without a BootROM into a reproducible hardware-attack path.<br><a href='https://www.youtube.com/watch?v=r8YXOBb2h48' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2021, month: 8 },
    zh: { headline: "Hacking the Apple AirTags：故障注入提取固件",
          text: "DEF CON 29，2021 年 8 月。Thomas Roth 使用电压故障注入复活 AirTag 内 Nordic nRF52832 的 SWD 调试接口，提取、分析、修改并写回受保护固件，完成 AirTag 克隆与位置数据伪造研究。它也是 nRF52 调试口复活技术进入消费电子产品的代表案例。<br><a href='https://www.youtube.com/watch?v=paxErRRsrTU' target='_blank'>演讲录像</a>" },
    en: { headline: "Hacking the Apple AirTags with Fault Injection",
          text: "DEF CON 29, August 2021. Thomas Roth used voltage fault injection to resurrect the SWD port on the Nordic nRF52832 inside an AirTag, then extracted, analyzed, modified and reflashed its protected firmware for cloning and location-data spoofing research. It is the clearest consumer-device follow-on to the nRF52 debug-resurrection technique.<br><a href='https://www.youtube.com/watch?v=paxErRRsrTU' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2023, month: 8 },
    zh: { headline: "Oven Repair：故障注入维修三星烤箱",
          text: "Black Hat USA 2023。Colin O'Flynn 对三星烤箱中的 Toshiba TMP91FW60 主控实施时钟故障注入，并结合功耗侧信道绕过 bootloader 的串口命令认证，执行 RAMCode，最终修改固件以改善加热控制并实时反馈温度。这个案例说明故障注入同样适用于家电维修和固件定制，而不只用于安全启动破解。<br><a href='https://www.youtube.com/watch?v=ugHxUi_Ijso' target='_blank'>演讲录像</a>" },
    en: { headline: "Oven Repair: The Hardware Hacking Way",
          text: "Black Hat USA 2023. Colin O'Flynn combined clock fault injection with power side-channel analysis against the Toshiba TMP91FW60 controller in a Samsung oven, bypassed bootloader authentication for serial commands, and executed RAMCode. He then patched the firmware for improved heating control and live temperature feedback — a reminder that FI is useful for appliance repair and customization, not only secure-boot bypasses.<br><a href='https://www.youtube.com/watch?v=ugHxUi_Ijso' target='_blank'>Talk video</a>" }
  },
  {
    start: { year: 2021, month: 7 },
    zh: { headline: "Security and Trust：闪存擦除抑制攻破安全令牌",
          text: "TCHES 2021（2021-07-09）。Schink、Wagner、Unterstein 与 Heyszl 对七款开源安全令牌进行实测，首次公开展示 STM32L422 等 MCU 的闪存擦除抑制：在 RDP 降级与 mass-erase 期间注入 EMFI，使调试保护降级而保留原有固件，进而提取令牌中的密钥。该工作是后续 2024 年多厂商系统研究的直接起点。<br><a href='https://doi.org/10.46586/tches.v2021.i3.176-201' target='_blank'>论文</a>" },
    en: { headline: "Security and Trust: Flash-Erase Suppression on Security Tokens",
          text: "TCHES 2021 (9 July 2021). Schink, Wagner, Unterstein and Heyszl examined seven open-source security tokens and publicly demonstrated flash-erase suppression on MCUs including the STM32L422: EMFI during the RDP downgrade/mass-erase sequence lowers debug protection while preserving the original firmware, enabling key extraction from the token. This was the direct precursor to the broader multi-vendor study in 2024.<br><a href='https://doi.org/10.46586/tches.v2021.i3.176-201' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2021, month: 8 },
    zh: { headline: "C8051F34x：毛刺绕过 Silicon Labs 代码保护",
          text: "2021 年 8 月公开。debug-silicon 对 Silicon Labs C8051F340/C8051F34x 的专有 C2 调试接口进行了协议逆向、功耗分析与 ChipWhisperer 毛刺实验：一次成功的电压毛刺最多可读出 256 字节受保护 Flash，重复执行即可恢复整片代码。研究同时绕过了未授权代码读取限制与 C2 调试器读取限制，披露时间线显示 2021 年 6 月通知厂商、7 月获准公开。<br><a href='https://github.com/debug-silicon/C8051F34x_Glitch' target='_blank'>研究与代码</a>" },
    en: { headline: "C8051F34x: Glitching Silicon Labs Code Protection",
          text: "Publicly released in August 2021. debug-silicon reverse-engineered Silicon Labs' proprietary C2 debug interface and used power analysis plus ChipWhisperer glitching against the C8051F340/C8051F34x: each successful voltage glitch exposes up to 256 bytes of protected Flash, so repeated attempts recover the entire code image. The work bypasses both untrusted-code restrictions and external C2-debugger read protection; its disclosure log records vendor notification in June and publication clearance in July 2021.<br><a href='https://github.com/debug-silicon/C8051F34x_Glitch' target='_blank'>Research and code</a>" }
  },
  {
    start: { year: 2024, month: 1 },
    zh: { headline: "ESP32-C3/C6：故障注入诱发 Boot ROM 缓冲区溢出",
          text: "Courk's Blog，2024-01-08。针对带 Secure Boot 与 Flash Encryption 的 ESP32-C3/C6，研究者没有重复攻击最初的签名比较，而是用电压毛刺把 Boot ROM 中 memcpy 的长度参数从 0x8 扰乱为 0x208，制造可控栈溢出并改写返回地址。C3 只需控制外部 Flash 的首个 128 字节，C6 还需控制 0x180 偏移附近少量字节，即可执行自定义代码。<br><a href='https://courk.cc/esp32-c3-c6-fault-injection' target='_blank'>研究文章</a>" },
    en: { headline: "ESP32-C3/C6: Boot-ROM Buffer Overflow via Fault Injection",
          text: "Courk's Blog, 8 January 2024. Against ESP32-C3/C6 with Secure Boot and Flash Encryption, the researcher avoided the original signature-check attack and instead voltage-glitched the Boot ROM's memcpy length from 0x8 to 0x208, creating a controllable stack overflow and return-address overwrite. Controlling the first 128-byte flash block is enough on C3; C6 additionally needs a few bytes around offset 0x180 to execute custom code.<br><a href='https://courk.cc/esp32-c3-c6-fault-injection' target='_blank'>Research article</a>" }
  },
  {
    start: { year: 2024, month: 3 },
    zh: { headline: "Unlock the Door：多厂商闪存擦除抑制研究",
          text: "TCHES 2024（2024-03-12）。Schink 等人把 2021 年安全令牌中的闪存擦除抑制攻击扩展为系统性研究，在 STM32L422、STM32L1、Artery AT32、GigaDevice GD32 等多家 MCU 上量化成功率、设备差异与损伤风险，证明只要 RDP 降级会触发 mass erase，EMFI 就可能在保留固件的同时恢复调试访问。该论文也是后续 STM32L051 与 PicoGlitcher 复现案例的直接理论来源。<br><a href='https://doi.org/10.46586/tches.v2024.i2.88-129' target='_blank'>论文</a>" },
    en: { headline: "Unlock the Door: A Multi-Vendor Study of Flash-Erase Suppression",
          text: "TCHES 2024 (12 March 2024). Schink and colleagues expanded the 2021 security-token result into a systematic study: across STM32L422, STM32L1, Artery AT32 and GigaDevice GD32 devices they measured success rates, device variance and damage risk, showing that whenever RDP downgrade triggers a mass erase, EMFI can restore debug access while preserving firmware. The paper is the direct technical origin of later STM32L051 and PicoGlitcher reproductions.<br><a href='https://doi.org/10.46586/tches.v2024.i2.88-129' target='_blank'>Paper</a>" }
  },
  {
    start: { year: 2024, month: 12 },
    zh: { headline: "STM32F4：PicoGlitcher 复现 RDP 固件读取",
          text: "2024 年末公开的 PicoGlitcher 实验。Matthias Kesenheimer 在 STM32F401 Black Pill 上针对 USART Bootloader 的 Read Memory（0x11）命令注入 VCAP 电压毛刺，绕过 RDP1 并分块导出 Flash；STM32F40x/F412/F42x 项目随后把这套参数搜索和自动化脚本整理成可复现实验。它把 TCHES 2019 的任意波形研究落成了低成本、可重复的实机流程。<br><a href='https://mkesenheimer.github.io/blog/glitching-the-stm32f4.html' target='_blank'>实验记录</a>" },
    en: { headline: "STM32F4: Reproducible RDP Dumping with PicoGlitcher",
          text: "Published in late 2024 as a PicoGlitcher experiment. Matthias Kesenheimer injected VCAP voltage glitches into the USART Bootloader Read Memory (0x11) path of an STM32F401 Black Pill, bypassing RDP1 and dumping Flash in blocks; the STM32F40x/F412/F42x projects then packaged the parameter search and automation for reproduction. It turns the arbitrary-waveform work of TCHES 2019 into a low-cost, repeatable hardware demonstration.<br><a href='https://mkesenheimer.github.io/blog/glitching-the-stm32f4.html' target='_blank'>Experiment write-up</a>" }
  },
  {
    start: { year: 2025, month: 5 },
    zh: { headline: "STM32L051：不擦除固件的 RDP 降级",
          text: "SySS 公告 SYSS-2025-033（2025-05-23 首次公开）。针对 STM32L051K8 的 RDP1→RDP0 降级流程，在自动擦除开始前注入电压毛刺，抑制 Flash erase，同时恢复调试读取权限；公告记录了最高约 30% 的成功率，并明确将其归类为 flash-erase suppression attack。6 月发布的实验文章展示了 PicoGlitcher 与 findus 的完整复现。<br><a href='https://blog.syss.com/posts/voltage-glitching-the-stm32l05-microcontroller/' target='_blank'>实验文章</a>" },
    en: { headline: "STM32L051: RDP Downgrade without Erasing Flash",
          text: "SySS advisory SYSS-2025-033 (first public disclosure on 23 May 2025). A voltage glitch is injected just before the automatic erase in the STM32L051K8 RDP1→RDP0 downgrade, suppressing Flash erase while restoring debug read access; the advisory reports up to roughly 30% success and classifies it as a flash-erase suppression attack. The June write-up documents a complete PicoGlitcher/findus reproduction.<br><a href='https://blog.syss.com/posts/voltage-glitching-the-stm32l05-microcontroller/' target='_blank'>Experiment write-up</a>" }
  },
  {
    start: { year: 2025, month: 5 },
    zh: { headline: "nRF54L15：EMFI 绕过硬件毛刺检测器",
          text: "SySS 公告 SYSS-2025-022（2025-05-23 首次公开）。在 Nordic nRF54L15 启用 TAMPC/Glitch Detector 的情况下，使用 ChipSHOUTER 电磁脉冲与精确扫描位置、脉宽和时序，成功扰动 256 字节 CRC 计算，最高约 2.4% 的实验点产生错误结果。研究证明专用毛刺检测器对 EMFI 仍存在残余风险。<br><a href='https://blog.syss.com/posts/nrf54-emfi/' target='_blank'>实验文章</a>" },
    en: { headline: "nRF54L15: EMFI Evades the Glitch Detector",
          text: "SySS advisory SYSS-2025-022 (first public disclosure on 23 May 2025). With Nordic's nRF54L15 TAMPC/glitch detector enabled, a ChipSHOUTER and a scan over probe position, pulse width and timing altered a 256-byte CRC calculation; up to about 2.4% of scanned points produced faulty results. The study shows that a dedicated glitch detector still leaves residual risk against EMFI.<br><a href='https://blog.syss.com/posts/nrf54-emfi/' target='_blank'>Experiment write-up</a>" }
  },
  {
    start: { year: 2026, month: 9 },
    zh: { headline: "GlitchLab：硬件在环故障注入自动搜索",
          text: "arXiv 2609.00502（2026-09-01）。Hossain、Mahadevan、Van Woudenberg、Velegalati 与 Bhattacharyya 提出 GlitchLab，把故障注入参数搜索建模为硬件在环优化：RL-Q 用 Q-learning 探索，结构化 bandit 负责发现，SOBAS 根据结构化结果复现故障。在 AES、密码与控制流实验中，方法相较基线减少 2–85 倍尝试次数、26–1,237 倍时间，并显著提高复现率，代表故障注入从手工调参走向自动化闭环。<br><a href='https://arxiv.org/abs/2609.00502' target='_blank'>论文预印本</a>" },
    en: { headline: "GlitchLab: Hardware-in-the-Loop Fault-Injection Optimization",
          text: "arXiv 2609.00502 (1 September 2026). Hossain, Mahadevan, Van Woudenberg, Velegalati and Bhattacharyya formulate glitch-parameter search as hardware-in-the-loop optimization: RL-Q explores with Q-learning, a structured bandit discovers candidates, and SOBAS reproduces faults from structured outcomes. Across AES, password and control-flow campaigns, the methods cut attempts by 2–85× and time by 26–1,237× versus baselines, while improving reproduction rates — a shift from manual tuning to closed-loop automated fault injection.<br><a href='https://arxiv.org/abs/2609.00502' target='_blank'>Preprint</a>" }
  },
];


