// 故障注入攻击大事记数据 — Fault Injection Attacks Timeline Data
// 每个事件含 zh / en 双语
// 注意: JS 字符串统一使用双引号, HTML 属性统一使用单引号

const TIMELINE_TITLE = {
  "zh": {
    "headline": "⚡ 芯片故障注入攻击简史",
    "text": "<p>故障注入（Fault Injection）通过电压毛刺、时钟毛刺、电磁脉冲（EMFI）、激光/光照、衬底偏压乃至纯软件欠压等手段，在芯片执行的精确瞬间诱发错误，从而绕过签名校验、读保护与安全启动，或直接恢复密钥。本时间轴收录 1996–2026 年间 168 个公开案例：从 Bellcore 故障密码分析的早期理论工作，到 Xbox 360、硬件钱包、特斯拉与汽车 ECU 的实战破解。</p><p>拖动下方时间轴浏览，右上角可切换语言，点击事件可展开详情与原文链接。</p><p>本站案例内容由 AI 总结生成，可能存在错误或遗漏，欢迎大家一起补充、纠错和维护。</p>"
  },
  "en": {
    "headline": "⚡ A Brief History of Fault Injection Attacks",
    "text": "<p>Fault injection induces errors at the precise moment of chip execution — via voltage or clock glitches, electromagnetic pulses (EMFI), laser/light, body-bias injection, or even pure software undervolting — to bypass signature checks, readout protection and secure boot, or to recover cryptographic keys outright. This timeline collects 168 publicly documented cases from 1996 to 2026: from early Bellcore fault-cryptanalysis research to real-world hacks of the Xbox 360, crypto wallets, Tesla and automotive ECUs.</p><p>Drag the time navigator to explore; toggle language at top right; click an event for details and source links.</p><p>Entries on this site are AI-generated summaries and may contain errors or omissions — corrections and contributions are welcome.</p>"
  }
};

const TIMELINE_EVENTS = [
  {
    "start": {
      "year": 1996,
      "month": 11
    },
    "zh": {
      "headline": "防篡改的警示 — Anderson & Kuhn",
      "text": "上世纪 90 年代，银行和政府系统使用智能卡与加密模块。Ross Anderson 与 Markus Kuhn 在第二届 USENIX 电子商务研讨会上发表论文，回顾了电压/时钟毛刺、微探针、芯片开封和总线窃听等攻击，并讨论了低成本实验室对商用防篡改芯片的评估方法。论文获得最佳论文奖，内容涵盖商用防篡改芯片的物理攻击与评估方法。<br><a href='https://www.usenix.org/conference/2nd-usenix-workshop-electronic-commerce/tamper-resistance-cautionary-note' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Tamper Resistance — A Cautionary Note",
      "text": "In the 1990s, banks and government systems used smartcards and cryptographic modules. At the 2nd USENIX Workshop on Electronic Commerce, Ross Anderson and Markus Kuhn surveyed voltage and clock glitches, microprobing, decapsulation and bus snooping, and discussed how low-cost laboratories could evaluate commercial tamper-resistant chips. The paper received a best-paper award and describes physical-attack evaluation methods for commercial tamper-resistant chips.<br><a href='https://www.usenix.org/conference/2nd-usenix-workshop-electronic-commerce/tamper-resistance-cautionary-note' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 1997,
      "month": 5
    },
    "zh": {
      "headline": "Bellcore 攻击：RSA-CRT 故障密码分析",
      "text": "EUROCRYPT 1997。Bellcore 的 Boneh、DeMillo 与 Lipton 证明了一个结果：RSA 用中国剩余定理（CRT）加速签名时，只需让芯片在运算中发生<b>一次</b>随机故障，攻击者拿到错误签名后计算 gcd(S′ᵉ − m, N) 即可分解模数、恢复私钥。论文本身是纯理论模型，没有攻击真实芯片；文中讨论了硬件错误对 RSA-CRT 的影响，以及签名结果自检（如 Shamir 校验）这一类防护。<br><a href='https://crypto.stanford.edu/~dabo/abstracts/faults.html' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "The Bellcore Attack on RSA-CRT",
      "text": "EUROCRYPT 1997. Boneh, DeMillo and Lipton of Bellcore proved a result: when RSA signing is accelerated with the Chinese Remainder Theorem, a <b>single</b> random hardware fault during the computation lets an attacker factor the modulus and recover the private key by computing gcd(S′ᵉ − m, N) from the faulty signature. The paper was a purely theoretical model — no real chip was attacked — but it showed that hardware errors can be used as a cryptanalytic weapon. The paper discusses RSA-CRT signature verification before output and other countermeasures.<br><a href='https://crypto.stanford.edu/~dabo/abstracts/faults.html' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 1997,
      "month": 8
    },
    "zh": {
      "headline": "差分故障分析 (DFA)：DES",
      "text": "CRYPTO 1997。Biham 与 Shamir 提出差分故障分析（Differential Fault Analysis）：对同一明文分别获取正确密文与故障密文，通过两者在末几轮的差分传播逐段恢复 DES 子密钥 —— 几十条故障密文即可恢复完整密钥。论文将故障模型应用到 DES 对称密码，并讨论了向其他分组密码扩展的分析方法。<br><a href='https://link.springer.com/chapter/10.1007/BFb0052259' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Differential Fault Analysis of DES",
      "text": "CRYPTO 1997. Biham and Shamir introduced Differential Fault Analysis (DFA): obtain a correct and a faulty ciphertext of the same plaintext, then trace the differential propagation through the final rounds to recover DES subkeys piece by piece — a few dozen faulty ciphertexts suffice for the full key. The paper applies the method to DES and outlines extensions to other block ciphers.<br><a href='https://link.springer.com/chapter/10.1007/BFb0052259' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 1999,
      "month": 5
    },
    "zh": {
      "headline": "智能卡处理器防篡改设计原则",
      "text": "USENIX 智能卡技术研讨会。Kömmerling 与 Kuhn 在真实智能卡处理器（论文未列出具体料号）上系统演示了攻击：向 Vcc、时钟或复位线注入毛刺以跳过指令或破坏比较，用紫外光擦除熔丝位，以及半侵入式微探针读取总线。论文给出了实验装置、防护设计建议（随机化时序、环境传感器、多层金属屏蔽等），并讨论了智能卡安全认证中的物理攻击评估。<br><a href='https://www.usenix.org/conference/usenix-workshop-smartcard-technology/design-principles-tamper-resistant-smartcard' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Design Principles for Tamper-Resistant Smartcard Processors",
      "text": "USENIX Workshop on Smartcard Technology. Kömmerling and Kuhn demonstrated attacks on production smartcard processors (the paper does not list a part number): glitching Vcc, clock or reset lines to skip instructions or corrupt comparisons, erasing fuse bits with UV light, and semi-invasive microprobing of on-chip buses. The paper also gave design advice (randomized timing, environmental sensors, metal shield layers). The paper discusses low-cost attack equipment and physical-attack evaluation in smartcard certification.<br><a href='https://www.usenix.org/conference/usenix-workshop-smartcard-technology/design-principles-tamper-resistant-smartcard' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2000,
      "month": 8
    },
    "zh": {
      "headline": "DFA 扩展到椭圆曲线密码 (ECC)",
      "text": "CRYPTO 2000。Biehl、Meyer 与 Müller 将差分故障分析引入椭圆曲线密码：在标量乘法过程中注入故障（例如让点离开预定曲线、或翻转中间值符号位），可从错误结果中逐比特恢复秘密标量。论文分析了 ECC 标量乘法中的故障模型，并讨论了 ECDSA/ECDH 实现的物理攻击场景。<br><a href='https://link.springer.com/chapter/10.1007/3-540-44598-6_8' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Differential Fault Attacks on ECC",
      "text": "CRYPTO 2000. Biehl, Meyer and Müller brought differential fault analysis to elliptic-curve cryptography: injecting faults during scalar multiplication (e.g., pushing a point off the intended curve or flipping sign bits of intermediates) recovers the secret scalar bit by bit from erroneous results. The paper analyzes fault models for ECC scalar multiplication and physical-attack scenarios against ECDSA/ECDH implementations.<br><a href='https://link.springer.com/chapter/10.1007/3-540-44598-6_8' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2002,
      "month": 8
    },
    "zh": {
      "headline": "Bellcore 攻击在真实智能卡上实现",
      "text": "CHES 2002。英飞凌的 Aumüller、Bier、Fischer、Hofreiter 与 Seifert 将 1997 年的理论攻击在真实硬件上验证：在智能卡 IC（论文未列出具体料号）执行 RSA-CRT 时用电压尖峰注入故障，成功从错误签名中分解出私钥。论文同时测试了多种软件与硬件对策，并记录了签名前自检在双重故障下的表现。<br><a href='https://eprint.iacr.org/2002/073.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Bellcore Attack on a Real Smartcard",
      "text": "CHES 2002. Infineon's Aumüller, Bier, Fischer, Hofreiter and Seifert validated the 1997 theoretical attack on real hardware: inducing faults with voltage spikes while a smartcard IC (the paper does not list a part number) computed RSA-CRT, they successfully factored the private key out of faulty signatures. The paper also evaluated several software/hardware countermeasures in practice, showing that the most common one — verifying before output — still falls to double faults. The paper reports a hardware experiment corresponding to the theoretical analysis.<br><a href='https://eprint.iacr.org/2002/073.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2002,
      "month": 8
    },
    "zh": {
      "headline": "低成本光故障注入",
      "text": "CHES 2002。Skorobogatov 与 Anderson 对开封后的智能卡微控制器（论文未列出具体料号）进行光故障注入：普通相机闪光灯即可引起 SRAM 多位翻转，把约 60 美元的二手激光笔改装聚焦后可对单个晶体管进行置位或复位，实验达到单比特精度。整套装置成本仅几百美元，把此前被认为需要昂贵设备的攻击带入低成本实验室；论文同时讨论了顶层金属屏蔽与光传感器等防护方向。<br><a href='https://www.cl.cam.ac.uk/~sps32/ches02-optofault.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Low-Cost Optical Fault Injection",
      "text": "CHES 2002. Skorobogatov and Anderson performed optical fault injection on decapsulated smartcard microcontrollers (no part numbers disclosed): an ordinary camera flash flipped multiple SRAM bits, while a repurposed ~$60 laser pointer could set or reset individual transistors with single-bit precision. The entire setup cost only a few hundred dollars, bringing attacks once thought to require expensive equipment into low-budget labs; the paper also discusses countermeasures such as top-metal shields and light sensors.<br><a href='https://www.cl.cam.ac.uk/~sps32/ches02-optofault.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2003,
      "month": 2
    },
    "zh": {
      "headline": "AES 的差分故障分析：Dusart 等",
      "text": "ePrint 2003/010。Olivier Vivolo、Philippe Dusart 与 Guillaume Letourneux 针对 AES 末轮（不含 MixColumns）的单字节故障建立差分分析：故障在最后一轮只影响四个输出字节，据此可逐字节约束并反推末轮子密钥。数值模拟显示平均不到 10 条错误密文、配合约 2^40 次离线运算即可恢复完整 128 位密钥。这是最早针对 AES 的差分故障分析之一，同年 CHES 的 Piret–Quisquater 等工作进一步降低了所需故障密文数量。<br><a href='https://eprint.iacr.org/2003/010' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Differential Fault Analysis on AES: Dusart et al.",
      "text": "ePrint 2003/010. Olivier Vivolo, Philippe Dusart and Guillaume Letourneux built a differential analysis for single-byte faults in the last AES round (which has no MixColumns): the fault spreads to only four output bytes, so the final-round subkey can be recovered byte by byte. Simulations showed fewer than 10 faulty ciphertexts plus about 2^40 offline operations recover the full 128-bit key. It was among the first DFAs on AES; Piret–Quisquater at CHES the same year cut the required number of faulty ciphertexts further.<br><a href='https://eprint.iacr.org/2003/010' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2003,
      "month": 9
    },
    "zh": {
      "headline": "AES 的差分故障攻击",
      "text": "CHES 2003。Piret 与 Quisquater 提出针对 SPN（代换-置换网络）结构的通用 DFA 并应用于 AES 与 Khazad：在倒数第二轮 MixColumns 前注入单字节故障，理论上仅 2 条正确/故障密文对即可大幅缩小密钥空间，约 250 条故障密文可在论文给定条件下恢复 AES-128 密钥。论文还讨论了感染式计数器和冗余校验等防护。<br><a href='https://link.springer.com/chapter/10.1007/978-3-540-45238-6_7' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "DFA Comes to AES",
      "text": "CHES 2003. Piret and Quisquater proposed a generic DFA against SPN (substitution-permutation network) ciphers and applied it to AES and Khazad: injecting a single-byte fault just before the MixColumns of the penultimate round, as few as 2 correct/faulty ciphertext pairs dramatically shrink the key space, and ~250 faulty ciphertexts recover an AES-128 key under the paper’s stated conditions. The paper discusses infection-based and redundancy countermeasures.<br><a href='https://link.springer.com/chapter/10.1007/978-3-540-45238-6_7' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2004,
      "month": 9
    },
    "zh": {
      "headline": "流密码的故障分析",
      "text": "CHES 2004。Jonathan J. Hoch 与 Adi Shamir 提出针对流密码的故障分析通用框架，按故障作用于密钥流、内部状态还是反馈函数分类，并给出对 LILI-128、RC4、Scream、Snow 和蓝牙 E0 等算法的具体攻击推演，说明少量故障输出即可恢复内部状态乃至密钥。论文属于纯密码分析，不对应单一芯片实验，但为后来在真实器件上攻击流密码实现提供了理论基础。<br><a href='https://doi.org/10.1007/978-3-540-28632-5_18' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault Analysis of Stream Ciphers",
      "text": "CHES 2004. Jonathan J. Hoch and Adi Shamir proposed a general framework for fault analysis of stream ciphers, classified by whether the fault hits the keystream, internal state or feedback function, and worked out concrete attacks on LILI-128, RC4, Scream, Snow and Bluetooth E0, showing a few faulty outputs suffice to recover internal state or the key. It is pure cryptanalysis with no single-chip experiment, but it laid the theoretical groundwork for later attacks on real stream-cipher implementations.<br><a href='https://doi.org/10.1007/978-3-540-28632-5_18' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2004,
      "month": 9
    },
    "zh": {
      "headline": "《故障攻击巫师学徒指南》",
      "text": "FDTC 2004（期刊版发表于 Proceedings of the IEEE 2006 年 2 月）。Bar-El、Choukri、Naccache、Tunstall 与 Whelan 综述了故障注入手段（电压、时钟、温度、光照、粒子束）、故障模型（瞬态/永久、单比特/多比特）、DFA、安全错误攻击（safe-error）和碰撞故障攻击，并汇总了相应对策。<br><a href='https://eprint.iacr.org/2004/100' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "The Sorcerer's Apprentice Guide to Fault Attacks",
      "text": "FDTC 2004 (journal version in Proceedings of the IEEE, Feb 2006). Bar-El, Choukri, Naccache, Tunstall and Whelan wrote a survey of the field: a systematic taxonomy of injection methods (voltage, clock, temperature, light, particle beams) and fault models (transient/permanent, single-/multi-bit), plus DFA, safe-error and collision fault-analysis techniques and a panorama of countermeasures. The survey covers the fault-attack methods and countermeasures discussed at FDTC 2004.<br><a href='https://eprint.iacr.org/2004/100' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2005,
      "month": 4
    },
    "zh": {
      "headline": "故障、格与 DSA",
      "text": "PKC 2005。David Naccache、Phong Q. Nguyên、Michael Tunstall 与 Claire Whelan 研究 DSA 签名中的故障信息：如果故障让临时密钥 k 的若干比特变为已知（例如部分位置零），签名方程就转化为隐藏数问题，可用格基约简恢复私钥。论文给出了在智能卡芯片上诱发此类临时密钥部分故障的实验验证（未披露具体料号），并统计了恢复私钥所需的签名数量与泄露比特数的关系。<br><a href='https://doi.org/10.1007/978-3-540-30580-4_3' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Experimenting with Faults, Lattices and the DSA",
      "text": "PKC 2005. David Naccache, Phong Q. Nguyên, Michael Tunstall and Claire Whelan studied fault information in DSA signatures: if a fault makes some bits of the ephemeral key k known (e.g. partially zeroed), the signature equation becomes a hidden-number problem solvable by lattice reduction. The paper includes an experimental demonstration of inducing such partial ephemeral-key faults on a smartcard chip (no part number disclosed) and quantifies how many signatures and leaked bits are needed.<br><a href='https://doi.org/10.1007/978-3-540-30580-4_3' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2005,
      "month": 4
    },
    "zh": {
      "headline": "半侵入式攻击体系化",
      "text": "Skorobogatov 的剑桥博士论文/技术报告 UCAM-CL-TR-630。“半侵入式”指开封芯片（发烟硝酸去封装）但不接触钝化层；在这一条件下可实施光故障注入、光探测（非接触读出总线数据）和背面成像。报告对比了约一万美元级实验装置与百万美元级 FIB 工作站的成本，系统梳理了从开封、显微成像到存储器直接读取的完整流程，实验对象包括多款 90 年代智能卡与微控制器（未按商业料号逐一列出）。<br><a href='https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-630.html' target='_blank'>报告</a>"
    },
    "en": {
      "headline": "Semi-invasive Attacks Systematized",
      "text": "Skorobogatov's Cambridge PhD thesis / technical report UCAM-CL-TR-630. 'Semi-invasive' means decapsulating the chip (fuming nitric acid) without touching the passivation layer; this enables optical fault injection, optical probing (contactless readout of bus data) and rear-side imaging. The report contrasts a ~$10,000 lab setup with million-dollar FIB workstations, documents the full flow from decapsulation and microscopy to direct memory readout, and covers several 1990s smartcards and microcontrollers without listing commercial part numbers.<br><a href='https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-630.html' target='_blank'>Report</a>"
    }
  },
  {
    "start": {
      "year": 2006,
      "month": 9
    },
    "zh": {
      "headline": "椭圆曲线密码的符号变换故障攻击",
      "text": "FDTC 2006。Johannes Blömer、Martin Otto 与 Jean-Pierre Seifert 提出针对椭圆曲线密码实现的 sign-change fault attack：在标量乘法中间点注入使其符号翻转的故障后，错误结果与正确结果的差异只与少数几位秘密标量有关，结合枚举或格方法即可逐段恢复标量。攻击要求实现未校验中间点是否仍在曲线上，因此点验证被证明是关键对策。论文为理论分析，不对应单一芯片。<br><a href='https://doi.org/10.1007/11889700_4' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Sign Change Fault Attacks on Elliptic Curve Cryptosystems",
      "text": "FDTC 2006. Johannes Blömer, Martin Otto and Jean-Pierre Seifert proposed the sign-change fault attack on ECC implementations: flipping the sign of an intermediate point during scalar multiplication makes the difference between faulty and correct results depend on only a few secret scalar bits, recoverable segment by segment via enumeration or lattice methods. The attack requires the implementation to skip point-on-curve checks, making point validation the key countermeasure. It is a theoretical analysis with no single-chip experiment.<br><a href='https://doi.org/10.1007/11889700_4' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2007,
      "month": 9
    },
    "zh": {
      "headline": "无效故障分析 (Ineffective Fault Analysis)",
      "text": "CHES 2007。Clavier 提出：即便注入的故障<b>没有</b>改变输出，攻击者只要观察到“这次故障无效”这一事实，就已经获得了关于秘密的信息。无效故障分析（IFA）不要求故障成功，因此许多只检测“输出是否出错”的对策对它无效。2018 年的 SIFA 将这一故障有效性信息与统计密钥排序结合，用于分析部分带掩码的实现。<br><a href='https://iacr.org/workshops/ches/ches2007/presentations/S5T2-Clavier.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Ineffective Fault Analysis",
      "text": "CHES 2007. Clavier observed that even when an injected fault does <b>not</b> change the output, merely observing that “this fault was ineffective” leaks information about the secret. Ineffective Fault Analysis (IFA) does not require faults to succeed, so countermeasures that only check whether the output is wrong are useless against it. The paper defines IFA and its effect on output-only fault checks; SIFA (2018) uses fault-effectiveness statistics for masked implementations.<br><a href='https://iacr.org/workshops/ches/ches2007/presentations/S5T2-Clavier.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2007,
      "month": 10
    },
    "zh": {
      "headline": "光/电磁故障攻击 CRT-RSA：Austrochip 2007",
      "text": "Austrochip 2007（2007 年 10 月 11 日）。Jörn-Marc Schmidt 与 Michael Hutter 在运行 CRT-RSA 的安全设备上分别使用光照和电磁脉冲注入故障，两条路径都能得到错误签名并分解出私钥。论文对比了两类手段在故障率、设备成本和时序精度上的差异，并验证了签名结果自检的必要性；实验使用低成本设备，论文未给出芯片料号。<br><a href='https://tugraz.elsevierpure.com/en/publications/optical-and-em-fault-attacks-on-crt-based-rsa-concrete-results/' target='_blank'>论文资料</a>"
    },
    "en": {
      "headline": "Optical and EM Fault Attacks on CRT-RSA: Austrochip 2007",
      "text": "Austrochip 2007 (Oct 11, 2007). Jörn-Marc Schmidt and Michael Hutter injected faults into a security device running CRT-RSA using both light and electromagnetic pulses; either path produced faulty signatures from which the private key was factored. The paper compares the two methods in fault rate, equipment cost and timing precision, and confirms the necessity of signature verification; all experiments used low-cost equipment and no chip part number is given.<br><a href='https://tugraz.elsevierpure.com/en/publications/optical-and-em-fault-attacks-on-crt-based-rsa-concrete-results/' target='_blank'>Paper record</a>"
    }
  },
  {
    "start": {
      "year": 2008,
      "month": 8
    },
    "zh": {
      "headline": "Square-and-Multiply 的实用故障攻击",
      "text": "FDTC 2008（2008 年 8 月 10 日）。Jörn-Marc Schmidt 与 Christoph Herbst 针对 Square-and-Multiply 模幂算法的控制流提出故障攻击：在平方/乘法条件分支处注入故障改变执行路径，通过比较正确与错误签名逐比特恢复私钥指数。作者用非侵入式电压尖峰在真实芯片上完成实验，整套设备仅数百欧元；论文未披露芯片料号，并讨论了分支随机化等防护思路。<br><a href='https://doi.org/10.1109/FDTC.2008.10' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "A Practical Fault Attack on Square and Multiply",
      "text": "FDTC 2008 (Aug 10, 2008). Jörn-Marc Schmidt and Christoph Herbst presented a fault attack on the control flow of square-and-multiply exponentiation: glitching the conditional branch between square and multiply steps lets the private exponent be recovered bit by bit from correct/faulty signature pairs. Experiments on a real chip used non-invasive voltage spikes with equipment costing only a few hundred euros; no part number is disclosed, and countermeasures such as branch randomization are discussed.<br><a href='https://doi.org/10.1109/FDTC.2008.10' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2008,
      "month": 8
    },
    "zh": {
      "headline": "故障攻击椭圆曲线 Montgomery ladder",
      "text": "FDTC 2008。Pierre-Alain Fouque、Reynald Lercier、Denis Réal 与 Frédéric Valette 针对不使用 y 坐标的 Montgomery ladder 提出故障攻击：注入故障使中间点离开原椭圆曲线、落到阶含小因子的弱曲线上，再利用小子群离散对数和中国剩余定理逐段恢复秘密标量。论文给出对 XTR 与 ECDH 类实现的具体攻击复杂度，指出约一到两次故障即可恢复完整秘密指数，并建议以点验证作为防护。<br><a href='https://doi.org/10.1109/FDTC.2008.15' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault Attack on Elliptic Curve Montgomery Ladder Implementation",
      "text": "FDTC 2008. Pierre-Alain Fouque, Reynald Lercier, Denis Réal and Frédéric Valette attacked the y-coordinate-free Montgomery ladder: a fault pushes an intermediate point off the original curve onto a weak curve whose order has small factors, allowing the secret scalar to be recovered piecewise via small-subgroup discrete logs and the CRT. The paper gives concrete attack complexities for XTR- and ECDH-type implementations, shows one to two faults can suffice, and recommends point validation as countermeasure.<br><a href='https://doi.org/10.1109/FDTC.2008.15' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2009,
      "month": 1
    },
    "zh": {
      "headline": "局部加热攻击 Flash 存储器",
      "text": "HST 2009。Sergei Skorobogatov 使用显微镜上的低成本激光二极管对开封装芯片局部加热，改变 EEPROM 与 Flash 单元的读出阈值，使其读出为擦除态；作者用该方法把安全熔丝恢复为未保护状态并读取存储器内容。由于无法逐位精确控制，论文结合密钥空间穷举恢复部分密码材料。整套装置远低于常规激光注入系统的成本，论文未公开具体商业料号。<br><a href='https://doi.org/10.1109/HST.2009.5225028' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Local-Heating Attacks on Flash Memory Devices",
      "text": "HST 2009. Sergei Skorobogatov used a low-cost laser diode on a microscope to locally heat decapsulated chips, shifting the read threshold of EEPROM and Flash cells so they read as erased; he applied this to reset security fuses to an unprotected state and read out memory. Because bit-precise control was impossible, the attack is combined with keyspace search to recover partial cryptographic material. The setup costs far less than conventional laser systems; no commercial part numbers are disclosed.<br><a href='https://doi.org/10.1109/HST.2009.5225028' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2009,
      "month": 9
    },
    "zh": {
      "headline": "故障攻击 ECDSA",
      "text": "FDTC 2009。Jörn-Marc Schmidt 与 Marcel Medwed 通过故障注入修改 ECDSA 签名过程的程序流：跳过或篡改指令可使临时密钥 k 部分位置零或泄露若干比特，再用格攻击从少量错误签名中恢复签名私钥。作者在真实硬件上验证了故障模型的可行性，并给出临时密钥完整性校验、冗余计算与签名自检等防护建议；实验芯片未披露具体料号。<br><a href='https://doi.org/10.1109/FDTC.2009.38' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "A Fault Attack on ECDSA",
      "text": "FDTC 2009. Jörn-Marc Schmidt and Marcel Medwed used fault injection to alter the program flow of ECDSA signing: skipping or corrupting instructions can partially zero or leak bits of the ephemeral key k, after which lattice attacks recover the private key from a few faulty signatures. The fault model was validated on real hardware (no part number disclosed), and countermeasures including ephemeral-key integrity checks, redundant computation and signature self-verification are proposed.<br><a href='https://doi.org/10.1109/FDTC.2009.38' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2009,
      "month": 9
    },
    "zh": {
      "headline": "ARM9 上的欠压故障实验",
      "text": "FDTC 2009。Barenghi、Bertoni、Parrinello 与 Pelosi 对运行纯软件 RSA 的 ARM9 应用处理器（论文未披露具体料号）实施 underfeeding——让芯片在低于额定值的电压下运行。在临界电压附近出现可重复、确定性的计算错误，作者从错误签名中恢复出私钥，并刻画了电压、频率与故障率的关系。论文是最早系统研究应用处理器欠压故障的工作之一，并提出电压监测等防护建议。<br><a href='https://doi.org/10.1109/FDTC.2009.30' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Low-Voltage Fault Attacks Reach Full CPUs",
      "text": "FDTC 2009. Barenghi, Bertoni, Parrinello and Pelosi applied underfeeding — running the chip below its nominal supply voltage — to an ARM9 application processor executing software RSA (no part number disclosed). Near the critical voltage, repeatable and deterministic computation errors appeared, from which the private key was recovered; the paper characterizes the voltage/frequency/fault-rate relationship. It was among the first systematic studies of undervolting faults on application processors, with countermeasures such as voltage monitoring proposed.<br><a href='https://doi.org/10.1109/FDTC.2009.30' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2009,
      "month": 9
    },
    "zh": {
      "headline": "CRT-RSA 的二阶故障分析防护",
      "text": "WISTP 2009。Emmanuelle Dottax、Christophe Giraud、Matthieu Rivain 与 Yannick Sierra 讨论 CRT-RSA 实现抵抗二阶故障分析的设计：当攻击者能注入两次相关故障时，Shamir 校验、感染式计算等一阶防护会失效。论文给出可抵抗二阶故障的 CRT-RSA 实现结构，并对安全性与性能开销做了量化比较；工作属于算法/协议层设计，不对应单一芯片。<br><a href='https://doi.org/10.1007/978-3-642-03944-7_6' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "On Second-Order Fault Analysis Resistance for CRT-RSA Implementations",
      "text": "WISTP 2009. Emmanuelle Dottax, Christophe Giraud, Matthieu Rivain and Yannick Sierra studied CRT-RSA designs resistant to second-order fault analysis: when an attacker can inject two related faults, first-order countermeasures such as Shamir's check and infective computation fail. The paper presents a CRT-RSA structure secure against second-order faults with quantified security/performance trade-offs; it is an algorithm/protocol-level design with no single-chip experiment.<br><a href='https://doi.org/10.1007/978-3-642-03944-7_6' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2009,
      "month": 9
    },
    "zh": {
      "headline": "激光/光照故障攻击 AES：“紫色威胁”",
      "text": "FDTC 2009。Jörn-Marc Schmidt、Michael Hutter 与 Thomas Plos 在四种去封装微控制器上研究 254 nm UV-C 光对非易失存储的影响，并在 8 位 MCU 的 AES 软件实现中改变 S-box；论文报告约 2,500 对正确/故障密文可在给定条件下恢复密钥。<br><a href='https://doi.org/10.1109/fdtc.2009.37' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Optical Fault Attacks on AES: “A Threat in Violet”",
      "text": "FDTC 2009. Jörn-Marc Schmidt, Michael Hutter and Thomas Plos studied 254 nm UV-C irradiation on non-volatile memory in four depackaged microcontrollers, then changed an AES S-box in an 8-bit MCU software implementation; the paper reports that about 2,500 correct/faulty ciphertext pairs recover the key under its stated conditions.<br><a href='https://doi.org/10.1109/fdtc.2009.37' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2010,
      "month": 1
    },
    "zh": {
      "headline": "PlayStation 3 Hypervisor：内存总线毛刺",
      "text": "2010 年 1 月。George Hotz（geohot）的 PlayStation 3 Hypervisor 攻击利用 Cell Broadband Engine 处理器内存总线上约 40 ns 的电压脉冲，使 hypervisor 在释放页表映射时漏写，随后通过 Linux 内核模块篡改哈希页表，获得对主内存的完整读写权限。这一突破打破了 PS3 的安全链，随后 fail0verflow 团队进一步提取了 ECDSA 签名密钥，索尼则以固件更新移除了 OtherOS 功能。<br><a href='https://rdist.root.org/2010/01/27/how-the-ps3-hypervisor-was-hacked/' target='_blank'>分析文章</a>"
    },
    "en": {
      "headline": "PlayStation 3 Hypervisor: Memory-Bus Glitch",
      "text": "January 2010. George Hotz (geohot) attacked the PlayStation 3 hypervisor with a ~40 ns voltage pulse on the Cell Broadband Engine's memory bus, causing the hypervisor to miss a write when releasing a page-table mapping; a Linux kernel module then rewrote the hashed page table for full read/write access to main memory. The breach broke the PS3 security chain — fail0verflow subsequently extracted the ECDSA signing keys, and Sony removed OtherOS via a firmware update.<br><a href='https://rdist.root.org/2010/01/27/how-the-ps3-hypervisor-was-hacked/' target='_blank'>Technical analysis</a>"
    }
  },
  {
    "start": {
      "year": 2010,
      "month": 4
    },
    "zh": {
      "headline": "Java Card 3 的故障与逻辑组合攻击",
      "text": "CARDIS 2010。Guillaume Barbu、Hugues Thiebeauld 与 Vincent Guerin 将故障注入和逻辑篡改组合用于 Java Card 3 Connected Edition：先用激光故障改变字节码校验器对恶意 applet 的判定，再向卡内写入存在类型混淆的方法字节码，最终实现非法方法执行并读取卡内敏感对象。该工作开创了“组合攻击”路线，说明仅防御故障或仅防御逻辑攻击都不充分；实验芯片未公布料号。<br><a href='https://doi.org/10.1007/978-3-642-12510-2_11' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Attacks on Java Card 3.0 Combining Fault and Logical Attacks",
      "text": "CARDIS 2010. Guillaume Barbu, Hugues Thiebeauld and Vincent Guerin combined fault injection with logical tampering against Java Card 3 Connected Edition: a laser fault flips the bytecode verifier's decision on a malicious applet, then type-confused method bytecode written to the card enables illicit method execution and reading of sensitive on-card objects. The work pioneered 'combined attacks', showing that defending against only fault or only logical attacks is insufficient; the card part number was not disclosed.<br><a href='https://doi.org/10.1007/978-3-642-12510-2_11' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2010,
      "month": 7
    },
    "zh": {
      "headline": "How to Flip a Bit？：0.35 µm 单比特激光故障",
      "text": "IOLTS 2010。Agoyan、Dutertre、Mirbaha、Naccache、Ribotta 与 Tria 在无防护的 8 位 0.35 µm RISC 微控制器上调节光斑与时序，稳定得到单比特故障，并在片上 SRAM 的 AES 实现中验证攻击。论文未给出商业料号。<br><a href='https://doi.org/10.1109/IOLTS.2010.5560194' target='_blank'>论文</a> · <a href='https://hal-emse.ccsd.cnrs.fr/emse-01130826' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "How to Flip a Bit?: Single-Bit Laser Faults on 0.35 µm",
      "text": "IOLTS 2010. Agoyan, Dutertre, Mirbaha, Naccache, Ribotta and Tria tuned beam size and timing on an unprotected 8-bit 0.35 µm RISC microcontroller to obtain repeatable single-bit faults, then demonstrated the attack on an AES implementation in on-chip SRAM. The paper does not give a commercial part number.<br><a href='https://doi.org/10.1109/IOLTS.2010.5560194' target='_blank'>Paper</a> · <a href='https://hal-emse.ccsd.cnrs.fr/emse-01130826' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2010,
      "month": 8
    },
    "zh": {
      "headline": "Flash Memory “Bumping” Attacks",
      "text": "CHES 2010。Sergei Skorobogatov 在 NEC 78K/0S µPD78F9116（16 KB Flash）和 Actel ProASIC3 A3P250 上演示光学 bumping：利用验证操作对数据通路进行选择性干扰，绕过 verify-only 保护并提取 Flash/AES 认证相关数据。<br><a href='https://www.cl.cam.ac.uk/~sps32/ches2010-bumping.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Flash Memory “Bumping” Attacks",
      "text": "CHES 2010. Sergei Skorobogatov demonstrated optical “bumping” on a NEC 78K/0S µPD78F9116 with 16 KB Flash and an Actel ProASIC3 A3P250, using the verify operation to selectively disturb the data path and bypass verify-only protection for Flash/AES-authentication data.<br><a href='https://www.cl.cam.ac.uk/~sps32/ches2010-bumping.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2010,
      "month": 8
    },
    "zh": {
      "headline": "光学故障屏蔽：PIC 与 MSP430 非易失存储器",
      "text": "FDTC 2010。Sergei Skorobogatov 提出 optical fault masking：持续光照在浮动栅单元中感生光电流，使编程/擦除高压无法累积，写入或擦除操作“看似成功”但内容未变。作者演示用该方法阻止安全熔丝被烧录，把 Microchip PIC 微控制器与 TI MSP430 的保护位留在未锁定状态；实验用背面注入定位活动区域，PIC 的完整料号未公开。<br><a href='https://doi.org/10.1109/FDTC.2010.18' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Optical Fault-Masking Attacks on PIC and MSP430",
      "text": "FDTC 2010. Sergei Skorobogatov introduced optical fault masking: continuous illumination induces photocurrent in floating-gate cells so the program/erase high voltage cannot build up, making writes or erases appear successful while contents stay unchanged. He demonstrated preventing security fuses from being programmed, leaving protection bits unlocked on Microchip PIC microcontrollers and TI MSP430 devices; rear-side injection was used to locate active areas, and the full PIC part number was not disclosed.<br><a href='https://doi.org/10.1109/FDTC.2010.18' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2010,
      "month": 9
    },
    "zh": {
      "headline": "故障敏感性分析",
      "text": "CHES 2010。Yang Li、Kazuo Sakiyama、Shigeto Gomisawa、Toshinori Fukunaga、Junko Takahashi 与 Kazuo Ohta 提出 Fault Sensitivity Analysis，用器件对故障的敏感性分布辅助区分和利用故障；论文聚焦分析方法，不对应单一芯片型号。<br><a href='https://doi.org/10.1007/978-3-642-15031-9_22' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault Sensitivity Analysis",
      "text": "CHES 2010. Yang Li, Kazuo Sakiyama, Shigeto Gomisawa, Toshinori Fukunaga, Junko Takahashi and Kazuo Ohta introduced fault sensitivity analysis, using a device's sensitivity profile to characterize and exploit injected faults; the method is not tied to one chip model.<br><a href='https://doi.org/10.1007/978-3-642-15031-9_22' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2010,
      "month": 10
    },
    "zh": {
      "headline": "SRAM FPGA 上 AES 的电压与激光故障攻击",
      "text": "Journal of Cryptology，在线发表于 2010 年 10 月 26 日。G. Canivet、P. Maistri、R. Leveugle、J. Clédière、F. Valette 与 M. Renaudin 在 SRAM FPGA 的受保护 AES 实现上比较电压毛刺和动态激光故障；论文讨论两类故障的差异及相应防护，实验使用 Xilinx FPGA 设计但未给出统一的器件料号。<br><a href='https://doi.org/10.1007/s00145-010-9083-9' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Voltage and Laser Fault Attacks on AES in an SRAM FPGA",
      "text": "Journal of Cryptology, published online 26 October 2010. G. Canivet, P. Maistri, R. Leveugle, J. Clédière, F. Valette and M. Renaudin compared voltage glitches with dynamic laser faults against a protected AES implementation in an SRAM FPGA; the paper discusses their different effects and countermeasures, using a Xilinx FPGA design without one disclosed part number.<br><a href='https://doi.org/10.1007/s00145-010-9083-9' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2011,
      "month": 6
    },
    "zh": {
      "headline": "一种新的 ECDSA 故障攻击",
      "text": "HOST 2011。Alessandro Barenghi、Guido Bertoni、Andrea Palomba 与 Ruggero Susella 提出一种新的 ECDSA 故障攻击：在签名计算中注入单比特翻转故障后，把错误签名代入公钥验证方程，通过穷举少量候选即可筛出私钥。论文针对定点标量乘法（如 wNAF）给出完整复杂度分析，并讨论签名前验证与点校验等对策；属于密码实现分析，不对应单一芯片。<br><a href='https://doi.org/10.1109/HST.2011.5955015' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "A Novel Fault Attack against ECDSA",
      "text": "HOST 2011. Alessandro Barenghi, Guido Bertoni, Andrea Palomba and Ruggero Susella proposed a new ECDSA fault attack: after injecting a single-bit flip into the signature computation, the faulty signature is substituted into the public verification equation and the private key is filtered from a small set of candidates. The paper gives a full complexity analysis for fixed-point scalar multiplication such as wNAF and discusses countermeasures like pre-output verification and point validation; it is an implementation analysis with no single-chip experiment.<br><a href='https://doi.org/10.1109/HST.2011.5955015' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2011,
      "month": 8
    },
    "zh": {
      "headline": "Xbox 360 Reset Glitch Hack (RGH)",
      "text": "GliGli 与 Tiros 发布的社区主机越狱：Xbox 360 的 IBM Xenon CPU 在启动时用 memcmp 比对引导加载器哈希，攻击者通过 CPLD 在比对的精确瞬间向 CPU 注入慢时钟/复位脉冲，使比较指令出错、永远返回“相等”—— 微软的签名链就此断裂，多个硬件版本可以运行未签名代码。后续版本包括 RGH2 和 RGH3，均使用时序故障注入。<br><a href='https://free60.org/Hacks/Reset_Glitch_Hack' target='_blank'>free60 wiki</a>"
    },
    "en": {
      "headline": "Xbox 360 Reset Glitch Hack (RGH)",
      "text": "GliGli and Tiros published a community console jailbreak: the Xbox 360's IBM Xenon CPU compares bootloader hashes with memcmp during boot; a CPLD injects a slow-clock/reset pulse at the precise instant of the comparison, faulting the instruction so it always returns “equal” — the signature-check path is bypassed and unsigned code runs on multiple console revisions. RGH2 and RGH3 are timing-only variants; the documented method faults the memcmp comparison during boot.<br><a href='https://free60.org/Hacks/Reset_Glitch_Hack' target='_blank'>free60 wiki</a>"
    }
  },
  {
    "start": {
      "year": 2011,
      "month": 9
    },
    "zh": {
      "headline": "时钟毛刺故障模型的黑盒刻画",
      "text": "FDTC 2011。Balasch、Gierlichs 与 Verbauwhede 对 8 位 AVR 微控制器（论文未披露具体料号）进行黑盒时钟毛刺实验：系统扫描毛刺偏移与宽度并绘制故障成功率热图，观察到指令跳过与指令损坏两类主要结果，且故障率与参数强相关。实测行为与理想化的“单比特翻转”模型存在明显差异，说明在真实芯片上做黑盒毛刺刻画是设计攻击与防护的前提。<br><a href='https://doi.org/10.1109/fdtc.2011.9' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Clock-Glitch Fault Models on 8-bit MCUs",
      "text": "FDTC 2011. Balasch, Gierlichs and Verbauwhede ran black-box clock-glitch experiments on an 8-bit AVR microcontroller (no part number disclosed): sweeping glitch offset and width produced fault-rate heat maps revealing two dominant outcomes — instruction skipping and instruction corruption — with strongly parameter-dependent rates. Measured behavior diverged noticeably from the idealized 'single-bit flip' model, showing that black-box glitch characterization on real silicon is a prerequisite for attack and countermeasure design.<br><a href='https://doi.org/10.1109/fdtc.2011.9' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2011,
      "month": 9
    },
    "zh": {
      "headline": "局部直接 EM 注入：90 nm CMOS 环形振荡器",
      "text": "FDTC 2011。Poucheret、Tobich、Lisart、Chusseau、Robisson 与 Maurine 用微型天线探针在不去封装的条件下向 90 nm CMOS 环形振荡器局部注入电磁能量，观察到逻辑结构、TRNG 与时钟发生器的扰动；论文对象是测试结构而非商业 MCU。<br><a href='https://doi.org/10.1109/FDTC.2011.18' target='_blank'>论文</a> · <a href='https://hal-lirmm.ccsd.cnrs.fr/lirmm-00607868' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Local Direct EM Injection into 90 nm CMOS",
      "text": "FDTC 2011. Poucheret, Tobich, Lisart, Chusseau, Robisson and Maurine used a micro-antenna probe to inject EM energy locally into 90 nm CMOS ring oscillators without decapsulation, disturbing logic structures, TRNG elements and clock generators; the targets were test structures rather than a commercial MCU.<br><a href='https://doi.org/10.1109/FDTC.2011.18' target='_blank'>Paper</a> · <a href='https://hal-lirmm.ccsd.cnrs.fr/lirmm-00607868' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2011,
      "month": 9
    },
    "zh": {
      "headline": "安全微控制器的实用光故障注入",
      "text": "FDTC 2011。Jasper G. J. van Woudenberg、Marc F. Witteman 与 Federico Menarini 用 FPGA 对目标功耗波形做实时模式识别，在指定运算轮次触发无抖动二极管激光，在受保护智能卡（未给出料号）上实现了可重复的指令级光故障注入。论文给出了光斑、能量与时序参数的校准方法，并验证了对称加密与 RSA 实现的攻击路径，把光注入从“碰运气”推向可工程化复现。<br><a href='https://doi.org/10.1109/FDTC.2011.12' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Practical Optical Fault Injection on Secure Microcontrollers",
      "text": "FDTC 2011. Jasper G. J. van Woudenberg, Marc F. Witteman and Federico Menarini used an FPGA for real-time pattern matching on the target's power trace, triggering a jitter-free diode laser at a chosen computation round to achieve repeatable instruction-level optical fault injection on a protected smartcard (no part number given). The paper documents calibration of spot size, energy and timing, and validates attack paths on symmetric-cipher and RSA implementations, turning optical injection into an engineering-repeatable technique.<br><a href='https://doi.org/10.1109/FDTC.2011.12' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2011,
      "month": 9
    },
    "zh": {
      "headline": "Fault Attack Jungle：故障攻击分类模型",
      "text": "FDTC 2011。Ingrid Verbauwhede、Dusko Karaklajic 与 Jörn-Marc Schmidt 指出此前文献中故障模型定义混乱，于是按注入媒介、空间与时间精度、故障持续性和可观测效果建立统一分类，梳理 DFA、碰撞攻击、safe-error 等攻击族与软硬件对策的对应关系。论文是分类学研究，不对应单一芯片实验，但为后续故障攻击与防护研究提供了共同的术语框架。<br><a href='https://doi.org/10.1109/FDTC.2011.13' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "The Fault Attack Jungle: A Classification Model",
      "text": "FDTC 2011. Ingrid Verbauwhede, Dusko Karaklajic and Jörn-Marc Schmidt noted that fault models in prior literature were inconsistently defined, and built a unified taxonomy by injection medium, spatial/temporal precision, fault duration and observable effect, mapping attack families (DFA, collision attacks, safe-error) to hardware and software countermeasures. It is a classification study with no single-chip experiment, but it gave later fault-attack research a common vocabulary.<br><a href='https://doi.org/10.1109/FDTC.2011.13' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2012,
      "month": 6
    },
    "zh": {
      "headline": "AES 轮数修改分析：激光改变轮计数器",
      "text": "HOST 2012。Dutertre、Mirbaha、Naccache、Ribotta、Tria 与 Vaschalde 对一颗 8 位 0.35 µm RISC 微控制器上的软件 AES 实施激光故障注入，改变轮计数器或总轮数，使 AES 执行缩减或增加轮次并从错误密文恢复密钥；论文未给出商业料号。<br><a href='https://doi.org/10.1109/HST.2012.6224334' target='_blank'>论文</a> · <a href='https://hal-emse.ccsd.cnrs.fr/emse-00742567' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "AES Round Modification Analysis: Laser Faults on the Round Counter",
      "text": "HOST 2012. Dutertre, Mirbaha, Naccache, Ribotta, Tria and Vaschalde laser-glitched a software AES implementation on an 8-bit 0.35 µm RISC microcontroller, changing the round counter or total round count so AES executed fewer or more rounds and the key could be recovered from faulty ciphertexts; no commercial part number is given.<br><a href='https://doi.org/10.1109/HST.2012.6224334' target='_blank'>Paper</a> · <a href='https://hal-emse.ccsd.cnrs.fr/emse-00742567' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2012,
      "month": 6
    },
    "zh": {
      "headline": "RSA-CRT 实现的故障攻击",
      "text": "Fault Analysis in Cryptography 2012。Chong Hee Kim 与 Jean-Jacques Quisquater 系统归纳并扩展针对 RSA-CRT 实现的故障攻击：比较永久故障与瞬态故障模型下 Bellcore 攻击及其变体（Cao、Giraud、Aumüller 等）的威胁差异，并形式化分析“校验签名”“感染式计算”等对策在多重故障下的失效条件。论文是纯理论分析，不对应单一芯片，为 CRT-RSA 防护设计提供了参考基准。<br><a href='https://doi.org/10.1007/978-3-642-29656-7_8' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault Attacks Against RSA-CRT Implementation",
      "text": "Fault Analysis in Cryptography 2012. Chong Hee Kim and Jean-Jacques Quisquater systematized and extended fault attacks on RSA-CRT implementations: they compared permanent- versus transient-fault variants of the Bellcore attack and its successors (Cao, Giraud, Aumüller et al.), and formally analyzed when countermeasures like signature verification and infective computation fail under multiple faults. It is a purely theoretical analysis with no single-chip experiment, serving as a reference baseline for CRT-RSA protection design.<br><a href='https://doi.org/10.1007/978-3-642-29656-7_8' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2012,
      "month": 9
    },
    "zh": {
      "headline": "电磁瞬态故障注入 AES：硬件与软件实现",
      "text": "FDTC 2012。Amine Dehbaoui、Jean-Max Dutertre、Bruno Robisson 与 Assia Tria 在 AVR ATmega128 的软件 AES 和 Xilinx Spartan-3 FPGA 的硬件 AES 上实施电磁瞬态故障，报告可改变 AES 计算中的单个字节。<br><a href='https://doi.org/10.1109/FDTC.2012.15' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Electromagnetic Transient Faults Injection on AES",
      "text": "FDTC 2012. Amine Dehbaoui, Jean-Max Dutertre, Bruno Robisson and Assia Tria injected transient EM faults into software AES on an AVR ATmega128 and hardware AES on a Xilinx Spartan-3 FPGA, reporting faults that changed individual AES bytes.<br><a href='https://doi.org/10.1109/FDTC.2012.15' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2012,
      "month": 9
    },
    "zh": {
      "headline": "微线圈 EMFI 精确定位攻击 AES",
      "text": "FDTC 2012。Dehbaoui、Dutertre、Robisson 与 Tria 使用毫米级微线圈在芯片表面逐点扫描，在不去封装的条件下向 FPGA 硬件 AES 与微控制器软件 AES（均未列出具体型号）注入电磁故障：实验给出可复现故障与探头坐标、脉冲参数的关系，并通过差分分析恢复完整密钥。该工作证明局部化的近场电磁注入可以替代激光完成空间选择性故障注入。<br><a href='https://doi.org/10.1109/fdtc.2012.15' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Localized EMFI on AES with a Micro-Coil",
      "text": "FDTC 2012. Dehbaoui, Dutertre, Robisson and Tria scanned a millimeter-scale micro-coil across the chip surface, injecting electromagnetic faults without decapsulation into a hardware AES on FPGA and a software AES on a microcontroller (neither part number listed): the experiments map reproducible faults to probe coordinates and pulse parameters, and the full key was recovered by differential analysis. The work showed localized near-field EM injection can replace lasers for spatially selective fault injection.<br><a href='https://doi.org/10.1109/fdtc.2012.15' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2012,
      "month": 9
    },
    "zh": {
      "headline": "EMFI 技术、设备与实验结果",
      "text": "FDTC 2012。Philippe Maurine 比较谐波注入（连续波耦合）与脉冲注入（瞬态高场强）两类电磁故障注入平台在成本、空间分辨率与故障率上的权衡，并介绍从芯片背面注入与正向体偏压注入（FBBI）的装置结构。论文在运行 CRT-RSA 的安全器件上给出实验结果，成功诱发可利用故障并分解出私钥，为后续 EMFI 实验台设计提供了参考。<br><a href='https://doi.org/10.1109/FDTC.2012.21' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Techniques for EM Fault Injection: Equipment and Results",
      "text": "FDTC 2012. Philippe Maurine compared harmonic injection (continuous-wave coupling) and pulsed injection (transient high field) EMFI platforms in cost, spatial resolution and fault rate, and described rear-side injection and Forward Body Biasing Injection (FBBI) setups. Experiments on a secure device running CRT-RSA produced exploitable faults and factored the private key, providing a reference for later EMFI bench design.<br><a href='https://doi.org/10.1109/FDTC.2012.21' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2012,
      "month": 11
    },
    "zh": {
      "headline": "故障注入攻击综述：理论、实践与对策",
      "text": "Proceedings of the IEEE，2012 年 11 月。Alessandro Barenghi、Luca Breveglieri、Israel Koren 与 David Naccache 综述电压、时钟、光和电磁故障注入，整理 RSA、ECC、AES 等算法的故障分析及硬件、软件防护；论文是综述，不对应单一芯片。<br><a href='https://doi.org/10.1109/JPROC.2012.2188769' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault Injection Attacks: Theory, Practice and Countermeasures",
      "text": "Proceedings of the IEEE, November 2012. Alessandro Barenghi, Luca Breveglieri, Israel Koren and David Naccache survey voltage, clock, optical and electromagnetic injection, together with fault analysis of RSA, ECC and AES and hardware/software countermeasures; it is a survey rather than a single-chip experiment.<br><a href='https://doi.org/10.1109/JPROC.2012.2188769' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 6
    },
    "zh": {
      "headline": "前照式激光注入 AES 末轮：大光斑故障模型",
      "text": "HST 2013。Roscian、Dutertre 与 Tria 对运行硬件 AES 的 ASIC（未给出商业型号）实施正面激光注入，比较约 100 µm 大光斑与较小光斑的故障效果：大光斑主要产生 bit-set/bit-reset 故障且集中在末轮状态存储单元。作者据此实施两种 DFA（Piret–Quisquater 与 Tunstall 变体），仅用少量故障密文即恢复密钥，说明攻击者不必具备单比特精度也能完成有效攻击。<br><a href='https://doi.org/10.1109/HST.2013.6581576' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Frontside Laser Fault Injection into AES",
      "text": "HST 2013. Roscian, Dutertre and Tria performed front-side laser injection on an ASIC running hardware AES (no commercial model given), comparing a ~100 µm wide spot with smaller ones: the wide spot mainly produced bit-set/bit-reset faults concentrated in the last-round state registers. Two DFAs (Piret–Quisquater and Tunstall variants) recovered the key from only a few faulty ciphertexts, showing effective attacks do not require single-bit precision.<br><a href='https://doi.org/10.1109/HST.2013.6581576' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 8
    },
    "zh": {
      "headline": "EMFI 故障模型扩展到 32 位单片机",
      "text": "FDTC 2013。Moro、Dehbaoui、Heydemann、Robisson 与 Encrenaz 在 ARM Cortex-M3 微控制器（论文未披露具体料号）上分析电磁故障注入：结合反汇编逐条比对执行轨迹，作者把观察到的指令替换故障归因于 Flash 读出数据在取指通路上被篡改，而非流水线时序错误。该结论把 EMFI 故障模型研究从 8 位 AVR 扩展到 32 位单片机，并直接影响了后续 EMFI 攻击的建模方式。<br><a href='https://doi.org/10.1109/fdtc.2013.9' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "EMFI Fault Model on 32-bit MCUs",
      "text": "FDTC 2013. Moro, Dehbaoui, Heydemann, Robisson and Encrenaz analyzed EMFI on an ARM Cortex-M3 microcontroller (no part number disclosed): by comparing execution traces against disassembly instruction by instruction, they attributed the observed instruction-substitution faults to corruption of Flash read data on the instruction-fetch path rather than pipeline timing errors. The result extended EMFI fault-model research from 8-bit AVR to 32-bit MCUs and shaped how later EMFI attacks were modeled.<br><a href='https://doi.org/10.1109/fdtc.2013.9' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 8
    },
    "zh": {
      "headline": "激光故障的 SRAM 位集/位清模型",
      "text": "FDTC 2013。Roscian、Sarafianos、Dutertre 与 Tria 对独立 SRAM 测试单元及微控制器 RAM 进行激光注入：扫描结果显示故障以单比特 bit-set 或 bit-reset 出现，方向取决于单元原存储值，与 MOS 光电流模型一致。作者据此修正了密码分析文献中常用的理想 bit-flip 假设，并讨论真实故障模型对 DFA 攻击复杂度的影响；论文未公开微控制器的商业料号。<br><a href='https://doi.org/10.1109/FDTC.2013.17' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Laser Faults in SRAM: Bit-Set/Bit-Reset Model",
      "text": "FDTC 2013. Roscian, Sarafianos, Dutertre and Tria laser-injected standalone SRAM test cells and microcontroller RAM: scans showed faults appear as single-bit set or reset, with direction depending on the cell's stored value, consistent with a MOS photocurrent model. The authors corrected the idealized bit-flip assumption common in cryptanalysis literature and discussed how the real fault model affects DFA complexity; the microcontroller's commercial part number was not disclosed.<br><a href='https://doi.org/10.1109/FDTC.2013.17' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 8
    },
    "zh": {
      "headline": "统计故障攻击 (SFA)：只需错误密文",
      "text": "FDTC 2013。Fuhr、Jaulmes、Lomné 与 Thillard 提出统计故障攻击（SFA）：只需在 AES 倒数第二轮注入一次非均匀分布的单字节故障，再对一批错误密文按字节做统计分布分析，即可逐字节恢复子密钥。与 DFA 相比不需要正确/故障密文配对，与故障敏感度分析相比不依赖精确的故障模型；论文给出仿真与实验结果，不限定单一芯片型号。<br><a href='https://doi.org/10.1109/fdtc.2013.18' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Statistical Fault Attacks: Faulty Ciphertexts Only",
      "text": "FDTC 2013. Fuhr, Jaulmes, Lomné and Thillard introduced Statistical Fault Attacks (SFA): a single non-uniformly distributed byte fault injected before the penultimate AES round lets the subkey be recovered byte by byte from the statistical distribution of faulty ciphertexts alone. Unlike DFA it needs no correct/faulty pairs, and unlike fault-sensitivity analysis it needs no precise fault model; the paper gives simulation and experimental results without targeting a specific chip.<br><a href='https://doi.org/10.1109/fdtc.2013.18' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 9
    },
    "zh": {
      "headline": "电磁毛刺攻击 AES 轮计数器",
      "text": "COSADE 2013。Amine Dehbaoui、Amir-Pasha Mirbaha、Nicolas Moro、Jean-Max Dutertre 与 Assia Tria 在 ARM Cortex-M3 32 位 MCU 上干扰 AES 倒数第二轮末的轮计数器，使 AES 多执行一轮；两对正确/错误密文可用于恢复密钥。<br><a href='https://doi.org/10.1007/978-3-642-40026-1_2' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Electromagnetic Glitch on the AES Round Counter",
      "text": "COSADE 2013. Amine Dehbaoui, Amir-Pasha Mirbaha, Nicolas Moro, Jean-Max Dutertre and Assia Tria targeted the AES round counter on a 32-bit ARM Cortex-M3 MCU, causing one extra AES round at the end of the penultimate round; two correct/faulty ciphertext pairs can recover the key.<br><a href='https://doi.org/10.1007/978-3-642-40026-1_2' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 11
    },
    "zh": {
      "headline": "Glitch It If You Can：故障参数搜索策略",
      "text": "CARDIS 2013（11 月 27–29 日）。Rafael Boix Carpi、Stjepan Picek、Lejla Batina、Federico Menarini、Domagoj Jakobovic 与 Marin Golub 比较故障注入中时刻、宽度和幅度等参数的搜索策略，研究如何减少实验次数；论文不限定单一芯片型号。<br><a href='https://doi.org/10.1007/978-3-319-08302-5_16' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Glitch It If You Can: Parameter Search Strategies",
      "text": "CARDIS 2013 (27–29 November). Rafael Boix Carpi, Stjepan Picek, Lejla Batina, Federico Menarini, Domagoj Jakobovic and Marin Golub compare search strategies for injection timing, width and amplitude to reduce experiments; the paper does not target one chip model.<br><a href='https://doi.org/10.1007/978-3-319-08302-5_16' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 11
    },
    "zh": {
      "headline": "温度侧信道与加热故障攻击",
      "text": "CARDIS 2013（2013 年 11 月 27–29 日）。Michael Hutter 与 Jörn-Marc Schmidt 把温度作为观测与攻击的双重对象：一方面通过片上传感与功耗分析提取温度侧信道信息，另一方面用局部加热改变安全芯片的存储与计算行为、诱发可利用故障。论文给出了两类实验的装置与结果，并讨论了温度监测类对策的边界；实验器件未给出商业料号。<br><a href='https://doi.org/10.1007/978-3-319-08302-5_15' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "The Temperature Side Channel and Heating Fault Attacks",
      "text": "CARDIS 2013 (Nov 27–29, 2013). Michael Hutter and Jörn-Marc Schmidt treated temperature as both observable and attack vector: they extracted temperature side-channel information via on-chip sensing and power analysis, and used localized heating to alter memory and computation behavior of a security chip, inducing exploitable faults. The paper reports both experimental setups and discusses the limits of temperature-monitoring countermeasures; no commercial part number is given.<br><a href='https://doi.org/10.1007/978-3-319-08302-5_15' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2013,
      "month": 12
    },
    "zh": {
      "headline": "故障攻击硬件设计指南",
      "text": "IEEE TVLSI，2013 年 12 月。Dusko Karaklajic、Jörn-Marc Schmidt 与 Ingrid Verbauwhede 面向硬件设计者系统整理故障攻击：按电压、时钟、温度、光照与电磁等注入媒介分类，分析寄存器、总线、存储器等易受攻击结构与对应故障模型，并给出从威胁建模、故障仿真到硅后验证的评估流程。论文还讨论了传感器、冗余与随机化等硬件防护；属于设计方法学综述，不对应单一芯片。<br><a href='https://doi.org/10.1109/TVLSI.2012.2231707' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Hardware Designer's Guide to Fault Attacks",
      "text": "IEEE TVLSI, December 2013. Dusko Karaklajic, Jörn-Marc Schmidt and Ingrid Verbauwhede systematically organized fault attacks for hardware designers: categorizing injection media (voltage, clock, temperature, light, EM), analyzing vulnerable structures (registers, buses, memories) and their fault models, and presenting an evaluation flow from threat modeling and fault simulation to post-silicon validation. Hardware countermeasures — sensors, redundancy, randomization — are discussed; it is a design-methodology survey with no single-chip experiment.<br><a href='https://doi.org/10.1109/TVLSI.2012.2231707' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2014,
      "month": 3
    },
    "zh": {
      "headline": "EM 毛刺检测器的覆盖范围",
      "text": "DATE 2014。Loic Zussa、Amine Dehbaoui、Karim Tobich、Jean-Max Dutertre、Philippe Maurine、Ludovic Guillaume-Sage、Jessy Clediere 与 Assia Tria 在 Xilinx Spartan 700 上的 128 位 AES 设计中评估延迟型毛刺检测器；实验显示局部 EM 毛刺可能绕过单个检测器。<br><a href='https://doi.org/10.7873/DATE.2014.216' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Efficiency of a Glitch Detector against Electromagnetic Fault Injection",
      "text": "DATE 2014. Loic Zussa, Amine Dehbaoui, Karim Tobich, Jean-Max Dutertre, Philippe Maurine, Ludovic Guillaume-Sage, Jessy Clediere and Assia Tria evaluated a delay-based glitch detector on a 128-bit AES design in a Xilinx Spartan 700; experiments showed that localized EM glitches can bypass a single detector.<br><a href='https://doi.org/10.7873/DATE.2014.216' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2014,
      "month": 8
    },
    "zh": {
      "headline": "SASEBO-G 上同步电磁故障注入",
      "text": "EMC 2014。Yu-ichi Hayashi、Naofumi Homma、Takaaki Mizuki、Takafumi Aoki 与 Hideaki Sone 提出用目标自身的电磁辐射作为触发信号：先实时监测 SASEBO-G AES 评估板（Xilinx FPGA）的电磁泄漏波形，在识别到目标运算时刻后同步注入有意电磁干扰（IEMI）故障，从而把故障时刻精度提高到时钟周期级。实验证明这种自触发结构能在无外部触发线的条件下实现高精度故障注入。<br><a href='https://doi.org/10.1109/ISEMC.2014.6899066' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Synchronized IEMI Fault Injection on SASEBO-G",
      "text": "EMC 2014. Yu-ichi Hayashi, Naofumi Homma, Takaaki Mizuki, Takafumi Aoki and Hideaki Sone proposed using the target's own electromagnetic emanation as a trigger: monitoring the EM leakage of a SASEBO-G AES evaluation board (Xilinx FPGA) in real time, they injected intentional electromagnetic interference (IEMI) synchronized to the detected computation moment, achieving clock-cycle-level timing precision. The experiments show this self-triggered structure enables precise fault injection without an external trigger line.<br><a href='https://doi.org/10.1109/ISEMC.2014.6899066' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2014,
      "month": 9
    },
    "zh": {
      "headline": "故障强度分析：结合故障与功耗统计",
      "text": "FDTC 2014。Nahid Farhady Ghalaty、Bilgiday Yuce、Mostafa Taha 与 Patrick Schaumont 提出 Differential Fault Intensity Analysis，在 FPGA AES 故障注入模型上用故障偏差进行统计检验；实验报告平均约 7 次故障注入即可重建 128 位密钥。<br><a href='https://doi.org/10.1109/FDTC.2014.15' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Differential Fault Intensity Analysis",
      "text": "FDTC 2014. Nahid Farhady Ghalaty, Bilgiday Yuce, Mostafa Taha and Patrick Schaumont introduced Differential Fault Intensity Analysis, applying statistical tests to biased faults in an FPGA AES injection model; the experiment reports reconstructing a 128-bit key with an average of about seven injections.<br><a href='https://doi.org/10.1109/FDTC.2014.15' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2014,
      "month": 12
    },
    "zh": {
      "headline": "Glitching For n00bs：低门槛电气毛刺实验",
      "text": "31C3 2014。exide 展示如何用面包板、自蚀刻 PCB、廉价 FPGA 与自制逻辑分析仪搭建电气毛刺实验平台，并比较直接电源短接、MOSFET crowbar 等不同瞬态注入方式对集成电路的影响。议题面向入门者给出完整的物料清单与调试经验，大幅降低了故障注入的硬件门槛；讨论的是实验方法本身，未限定单一芯片型号。<br><a href='https://media.ccc.de/v/31c3_-_6499_-_en_-_saal_2_-_201412271715_-_glitching_for_n00bs_-_exide' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "Glitching For n00bs: Low-Cost Electrical Glitching",
      "text": "31C3 2014. exide showed how to build an electrical-glitching platform from a breadboard, self-etched PCBs, a cheap FPGA and a homemade logic analyzer, comparing transient injection techniques such as direct supply shorting and MOSFET crowbars and their effects on ICs. Aimed at beginners, the talk provides a full bill of materials and debugging tips, sharply lowering the hardware entry barrier; it covers experimental method rather than a specific chip.<br><a href='https://media.ccc.de/v/31c3_-_6499_-_en_-_saal_2_-_201412271715_-_glitching_for_n00bs_-_exide' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2015,
      "month": 5
    },
    "zh": {
      "headline": "ARMv7-M 指令缓存的高精度 EMFI",
      "text": "HST 2015。Rivière、Najm、Rauzy、Danger、Bringer 与 Sauvage 针对 ARMv7-M 处理器的指令缓存建立可复现的电磁故障注入平台：实验显示 EMFI 可在缓存行粒度精确损坏取指数据，精确故障模型复现率最高约 96%。作者进一步展示了缓存级故障对控制流完整性和既有故障攻击（如指令跳过）效果的影响；论文未指定单一 MCU 料号。<br><a href='https://doi.org/10.1109/HST.2015.7140238' target='_blank'>论文</a> · <a href='https://arxiv.org/abs/1510.01537' target='_blank'>预印本</a>"
    },
    "en": {
      "headline": "High-Precision EMFI on ARMv7-M Instruction Caches",
      "text": "HST 2015. Rivière, Najm, Rauzy, Danger, Bringer and Sauvage built a reproducible EMFI platform targeting the instruction cache of an ARMv7-M processor: experiments show EMFI can corrupt fetched instructions at cache-line granularity, with up to ~96% reproduction of precise fault models. They further demonstrate the impact of cache-level faults on control-flow integrity and on the effectiveness of known fault attacks such as instruction skipping; no specific MCU part number is given.<br><a href='https://doi.org/10.1109/HST.2015.7140238' target='_blank'>Paper</a> · <a href='https://arxiv.org/abs/1510.01537' target='_blank'>Preprint</a>"
    }
  },
  {
    "start": {
      "year": 2015,
      "month": 7
    },
    "zh": {
      "headline": "SRAM 激光注入：30 ps 与 50 ns 脉冲对比",
      "text": "IOLTS 2015。Lacruche、Borrel、Champeix、Roscian、Sarafianos、Rigaud、Dutertre 与 Kussener 将 SRAM 激光脉冲从 50 ns 缩短到 30 ps，发现新的敏感区域，并在微控制器 RAM 上复现实验；结果仍以 bit-set/bit-reset 为主。目标器件未给出商业料号。<br><a href='https://doi.org/10.1109/IOLTS.2015.7229820' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Laser Injection into SRAM: 30 ps vs 50 ns",
      "text": "IOLTS 2015. Lacruche, Borrel, Champeix, Roscian, Sarafianos, Rigaud, Dutertre and Kussener compared 30-ps and 50-ns laser pulses on SRAM, found additional sensitive regions, and validated the results on a microcontroller RAM; bit-set/bit-reset remained the dominant model. No commercial part number is given.<br><a href='https://doi.org/10.1109/IOLTS.2015.7229820' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2015,
      "month": 8
    },
    "zh": {
      "headline": "ChipWhisperer：开源毛刺实验平台",
      "text": "DEF CON 23。Colin O'Flynn 发布开源的 ChipWhisperer 平台：一块几百美元的 FPGA 板即可精确产生电压/时钟毛刺，并同步采集功耗波形用于侧信道分析。现场演示包括绕过 MCU 的密码校验和提取 AES 密钥。ChipWhisperer 把故障注入与功耗分析从数万美元的商用设备带入教育和个人实验场景，成为后续大量公开毛刺研究的默认平台。<br><a href='https://www.youtube.com/watch?v=BHqrA8lzz2o' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "ChipWhisperer: Glitching Made Easy",
      "text": "DEF CON 23. Colin O'Flynn released the open-source ChipWhisperer platform: a few-hundred-dollar FPGA board that generates precise voltage/clock glitches and synchronously captures power traces for side-channel analysis. Live demos included bypassing an MCU password check and extracting an AES key. ChipWhisperer moved fault injection and power analysis from tens-of-thousands-of-dollars commercial gear into education and hobbyist labs, becoming the default platform for much of the public glitching research that followed.<br><a href='https://www.youtube.com/watch?v=BHqrA8lzz2o' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2015,
      "month": 8
    },
    "zh": {
      "headline": "Hardware Attacks：极低成本的芯片攻击",
      "text": "Camp 2015。Ramiro Pareja 与 Rafa Boix 评估用约 30 欧元的器材入门功耗分析和故障注入：对比市电变压器、蜂鸣器线圈等极易获取的元件与商用平台的差异，演示在智能卡与微控制器上实施毛刺与采集的可行性与局限。议题面向零基础研究者，证明芯片级攻击不必从昂贵设备起步；未限定单一芯片型号。<br><a href='https://media.ccc.de/v/camp2015-6711-hardware_attacks_hacking_chips_on_the_very_cheap' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "Hardware Attacks: Hacking Chips on the Very Cheap",
      "text": "Camp 2015. Ramiro Pareja and Rafa Boix evaluated entry-level power analysis and fault injection with about €30 of equipment: comparing readily available parts (mains transformers, buzzer coils) against commercial platforms, they demonstrated the feasibility and limits of glitching and trace capture on smartcards and microcontrollers. Aimed at absolute beginners, the talk showed chip-level attacks need not start with expensive gear; no specific chip model is targeted.<br><a href='https://media.ccc.de/v/camp2015-6711-hardware_attacks_hacking_chips_on_the_very_cheap' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2015,
      "month": 9
    },
    "zh": {
      "headline": "激光故障攻击物理不可克隆函数",
      "text": "FDTC 2015。Shahin Tajik、Heiko Lohrke、Fatemeh Ganji、Jean-Pierre Seifert 与 Christian Boit 在 180 nm CPLD 的可编程逻辑单元上实施激光故障，分别分析 XOR arbiter PUF 与 RO PUF：故障可提高建模攻击效果并降低响应熵。<br><a href='https://doi.org/10.1109/FDTC.2015.19' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Laser Fault Attack on Physically Unclonable Functions",
      "text": "FDTC 2015. Shahin Tajik, Heiko Lohrke, Fatemeh Ganji, Jean-Pierre Seifert and Christian Boit injected laser faults into programmable logic cells of a 180 nm CPLD, analyzing XOR arbiter PUFs and RO PUFs; the faults increased modeling-attack effectiveness and reduced response entropy.<br><a href='https://doi.org/10.1109/FDTC.2015.19' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 1
    },
    "zh": {
      "headline": "体偏压注入（BBI）实验化",
      "text": "YACC 2016。Noemie Beringuier-Boher、Marc Lacruche、David El-Baze、Jean-Max Dutertre、Jean-Baptiste Rigaud 与 Philippe Maurine 介绍可重复的体偏压注入实验台：向芯片衬底施加高压脉冲以诱发瞬态故障，并给出器件物理效应和故障模型。<br><a href='https://doi.org/10.1145/2858930.2858940' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Body Bias Injection (BBI) in Practice",
      "text": "YACC 2016. Noemie Beringuier-Boher, Marc Lacruche, David El-Baze, Jean-Max Dutertre, Jean-Baptiste Rigaud and Philippe Maurine present a repeatable body-bias-injection bench: a high-voltage substrate pulse induces transient faults, and the paper describes the physical effects and a refined fault model.<br><a href='https://doi.org/10.1145/2858930.2858940' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 3
    },
    "zh": {
      "headline": "EMFI：触发器的脆弱性",
      "text": "Journal of Cryptographic Engineering，在线发表于 2016 年 3 月 25 日。Ordas、Guillaume-Sage 与 Maurine 通过 D 触发器实验说明电磁故障可产生 bit-set 或 bit-reset，而不只是时序错误；实验使用 Xilinx Spartan 3E-1000 和 Spartan 3-1000 上的 AES 设计。<br><a href='https://doi.org/10.1007/s13389-016-0128-3' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "EMFI: The Curse of Flip-Flops",
      "text": "Journal of Cryptographic Engineering, published online 25 March 2016. Ordas, Guillaume-Sage and Maurine used D-flip-flop experiments to show that EM faults can produce bit-set or bit-reset effects, rather than only timing faults; experiments used AES designs on Xilinx Spartan 3E-1000 and Spartan 3-1000 devices.<br><a href='https://doi.org/10.1007/s13389-016-0128-3' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 3
    },
    "zh": {
      "headline": "90/45 nm SRAM 单元的精确激光故障注入",
      "text": "CARDIS 2015（Springer 2016）。Selmke、Brummer、Heyszl 与 Sigl 在 90 nm 和 45 nm SRAM 测试单元上用皮秒激光定位故障，比较背面注入的空间分辨率、脉冲参数与可重复的位翻转：实验显示 45 nm 单元对激光能量更敏感，精确控制脉冲可在不损伤邻近单元的前提下翻转目标位；对象为工艺测试结构，不是商业 MCU。<br><a href='https://doi.org/10.1007/978-3-319-31271-2_12' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Precise Laser Fault Injection into 90 nm and 45 nm SRAM Cells",
      "text": "CARDIS 2015 (Springer 2016). Selmke, Brummer, Heyszl and Sigl used picosecond lasers to localize faults in 90 nm and 45 nm SRAM test cells, comparing rear-side injection spatial resolution, pulse parameters and reproducible bit flips: the 45 nm cells proved more sensitive to laser energy, and precise pulse control flipped target bits without damaging neighbors; the targets were process test structures, not commercial MCUs.<br><a href='https://doi.org/10.1007/978-3-319-31271-2_12' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 6
    },
    "zh": {
      "headline": "光学故障注入智能卡 Flash",
      "text": "ICEIEC 2016。Cai、Bai、Liu 与 Hu 对现代微型智能卡的 Flash 存储器进行光学故障注入：实验能把部分字节改成已知值，再结合卡内校验机制的绕过与对剩余字节的猜测，恢复非易失存储中的敏感内容。该工作说明即使做不到完全位级控制，部分可控的存储故障仍足以构成实际威胁；论文未公开智能卡型号。<br><a href='https://doi.org/10.1109/ICEIEC.2016.7589684' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Optical Fault Injection against Smartcard Flash",
      "text": "ICEIEC 2016. Cai, Bai, Liu and Hu optically fault-injected the Flash memory of a modern miniaturized smartcard: the experiments changed selected bytes to known values, then bypassed the card's checksum mechanism and brute-forced the remaining bytes to recover sensitive non-volatile contents. The work shows that even partially controlled memory faults — short of full bit-level control — are enough for practical attacks; the smartcard model was not disclosed.<br><a href='https://doi.org/10.1109/ICEIEC.2016.7589684' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 7
    },
    "zh": {
      "headline": "多重故障注入结合缓冲区溢出",
      "text": "Journal of Cryptographic Engineering，在线发表于 2016 年 7 月 20 日。Shoei Nashimoto、Naofumi Homma、Yu-ichi Hayashi、Junko Takahashi、Hitoshi Fuji 与 Takafumi Aoki 通过跳过输入长度检查，将多重故障注入与缓冲区溢出结合；实验对象为 AVR ATmega163 和 ARM Cortex-M0+，并验证了软件对策。<br><a href='https://doi.org/10.1007/s13389-016-0136-3' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Buffer Overflow Attack with Multiple Fault Injection",
      "text": "Journal of Cryptographic Engineering, published online 20 July 2016. Shoei Nashimoto, Naofumi Homma, Yu-ichi Hayashi, Junko Takahashi, Hitoshi Fuji and Takafumi Aoki combined multiple instruction skips with a buffer overflow; experiments used an AVR ATmega163 and an ARM Cortex-M0+, and evaluated a software countermeasure.<br><a href='https://doi.org/10.1007/s13389-016-0136-3' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 8
    },
    "zh": {
      "headline": "电压毛刺控制 ARM 程序计数器",
      "text": "FDTC 2016。Timmers、Spruyt 与 Witteman 报告了对 ARM 应用处理器（论文未披露具体料号）的实验：在取指阶段对数据通路实施电压毛刺，可直接控制程序计数器（PC）的值，把执行流重定向到攻击者选择的地址。这是早期公开演示“毛刺劫持 PC”的工作之一，说明电压故障不止能跳过指令，还能实现任意控制流转移，为后续的代码执行攻击铺路。<br><a href='https://doi.org/10.1109/fdtc.2016.18' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Controlling PC on ARM Using Fault Injection",
      "text": "FDTC 2016. Timmers, Spruyt and Witteman reported experiments on an ARM application processor (no part number disclosed): voltage-glitching the instruction-fetch datapath directly controls the program counter, redirecting execution to an attacker-chosen address. Among the first public demonstrations of 'glitching the PC', it showed voltage faults can do more than skip instructions — they enable arbitrary control-flow transfer, paving the way for later code-execution attacks.<br><a href='https://doi.org/10.1109/fdtc.2016.18' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 8
    },
    "zh": {
      "headline": "Crowbar：嵌入式系统电压故障注入",
      "text": "ePrint 2016/810（2016 年 8 月 25 日）。Colin O'Flynn 介绍 crowbar 电压故障注入：用 MOSFET 把目标电源轨瞬时短接到地，产生宽度可控的电压跌落。论文在 8 位 AVR 微控制器上重复产生单比特和多比特故障，并在 FPGA 内部寄存器与配置逻辑上验证故障注入；该方法结构简单、成本极低，此后成为 ChipWhisperer 等平台的标准毛刺生成方式。<br><a href='https://eprint.iacr.org/2016/810' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault Injection using Crowbars on Embedded Systems",
      "text": "ePrint 2016/810 (Aug 25, 2016). Colin O'Flynn presented crowbar voltage fault injection: a MOSFET momentarily shorts the target's supply rail to ground, producing a precisely width-controlled voltage dip. The paper repeatedly generates single- and multi-bit faults on an 8-bit AVR microcontroller and validates injection into FPGA internal registers and configuration logic. The method is simple and extremely cheap, and has since become the standard glitch-generation approach in platforms like ChipWhisperer.<br><a href='https://eprint.iacr.org/2016/810' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 8
    },
    "zh": {
      "headline": "双激光绕过冗余 AES 故障防护",
      "text": "FDTC 2016。Selmke、Heyszl 与 Sigl 在 Xilinx Spartan-6 FPGA（45 nm）上实现带感染式防护的冗余 AES——两份计算持续比对，一旦结果不同就污染输出。作者用两束激光同时命中两个状态寄存器，使相同故障同步进入两份计算，比对无法发现差异，感染式防护被绕过，随后重新实施 DFA 恢复密钥。实验证明“双重故障”是冗余类对策的系统性弱点。<br><a href='https://doi.org/10.1109/FDTC.2016.16' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Simultaneous Laser Faults Defeat Redundant AES",
      "text": "FDTC 2016. Selmke, Heyszl and Sigl implemented a redundancy-protected AES with infective countermeasures on a Xilinx Spartan-6 FPGA (45 nm) — two computations are continuously compared and any mismatch poisons the output. Using two laser beams hitting both state registers simultaneously, they injected identical faults into both copies so the comparison saw no difference, defeated the infective protection, and re-mounted DFA to recover the key. The work demonstrates double faults as a systemic weakness of redundancy-based countermeasures.<br><a href='https://doi.org/10.1109/FDTC.2016.16' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 8
    },
    "zh": {
      "headline": "Software Fault Resistance is Futile：单次时钟毛刺",
      "text": "FDTC 2016。Yuce、Ghalaty、Santapuri、Deshpande、Patrick 与 Schaumont 证明，面向指令级冗余和结果校验的软件防护可被一次低成本时钟毛刺破坏：故障同时影响冗余执行的两份拷贝，使校验失效。实验在 SAKURA-G 板（Xilinx FPGA）上进行，并对带故障防护的 LED 分组密码实现恢复了密钥。论文结论是纯软件对策必须假设多重/相关故障能力，否则防护强度会被高估。<br><a href='https://doi.org/10.1109/FDTC.2016.21' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Software Fault Resistance is Futile: Single-Glitch Attacks",
      "text": "FDTC 2016. Yuce, Ghalaty, Santapuri, Deshpande, Patrick and Schaumont showed that software-only countermeasures based on instruction-level redundancy and result checking can be broken by a single low-cost clock glitch: the fault hits both copies of the redundant execution, defeating the check. Experiments ran on a SAKURA-G board (Xilinx FPGA), recovering the key from a fault-protected LED block-cipher implementation. The paper concludes software countermeasures must assume multiple/correlated fault capability or their strength is overestimated.<br><a href='https://doi.org/10.1109/FDTC.2016.21' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2016,
      "month": 11
    },
    "zh": {
      "headline": "电压毛刺绕过安全启动 — Raelize",
      "text": "Black Hat Europe 2016。Raelize（Niek Timmers 与 Cristofaro Mune）演示在 ARM 嵌入式 SoC（公开演示未披露具体料号）校验启动镜像签名时注入电压毛刺，使签名校验结果被篡改，未授权固件得以启动。该演示把故障注入从密码密钥提取扩展到“安全启动绕过”这一影响面更大的目标，并给出毛刺参数搜索与触发点定位的工程方法，成为后来大量安全启动毛刺研究的范本。<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>"
    },
    "en": {
      "headline": "Bypassing Secure Boot using Fault Injection",
      "text": "Black Hat Europe 2016. Raelize (Niek Timmers and Cristofaro Mune) demonstrated injecting voltage glitches while an ARM embedded SoC (no part number disclosed) verifies the boot image signature, corrupting the verification result so unauthorized firmware boots. The demo extended fault injection from key extraction to the higher-impact target of secure-boot bypass, and documented an engineering method for glitch-parameter search and trigger-point localization that became a template for later secure-boot glitching research.<br><a href='https://raelize.com/publications' target='_blank'>Raelize</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 1
    },
    "zh": {
      "headline": "纳米聚焦 X 射线重编程安全电路：ATmega1284P",
      "text": "2017。Anceau、Bleuet、Clédière、Maingault、Rainard 与 Tucoulou 在 350 nm ATmega1284P 上用同步辐射纳米 X 射线定位 Flash、EEPROM 和 RAM 的单个晶体管，制造可热恢复的半永久 stuck-at 故障，并把 Flash 中的认证分支改写为绕过 PIN。<br><a href='https://doi.org/10.1007/978-3-319-66787-4_9' target='_blank'>论文</a> · <a href='https://cea.hal.science/cea-03986080' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Nanofocused X-Ray Reprogramming of an ATmega1284P",
      "text": "2017. Anceau, Bleuet, Clédière, Maingault, Rainard and Tucoulou used a synchrotron nanofocused X-ray beam on a 350-nm ATmega1284P to target individual transistors in Flash, EEPROM and RAM. The semi-permanent stuck-at faults were thermally reversible; a Flash authentication branch was changed to bypass a PIN.<br><a href='https://doi.org/10.1007/978-3-319-66787-4_9' target='_blank'>Paper</a> · <a href='https://cea.hal.science/cea-03986080' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 2
    },
    "zh": {
      "headline": "NXP LPC 代码读取保护的故障注入测试",
      "text": "REcon Brussels 2017。Chris Gerlinsky 针对 NXP LPC 系列 MCU 的 CRP（Code Read Protection）：引导程序在上电时读取 CRP 等级值，在读取瞬间注入电压毛刺可把合法等级损坏成“无效值”，而芯片固件对无效值的处理是<b>静默关闭保护</b>；随后可用调试器读取完整固件。实验记录了配置读取阶段的故障结果及其错误处理路径。<br><a href='https://www.youtube.com/watch?v=YNpJ3c1GJoc' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "Breaking Code Read Protection on NXP LPC MCUs",
      "text": "REcon Brussels 2017. Chris Gerlinsky targeted the CRP (Code Read Protection) of NXP LPC MCUs: the bootloader reads the CRP level at power-up; a voltage glitch at that instant corrupts a valid level into an <b>invalid</b> one — and the firmware silently disabled protection for the invalid value. A debugger then read the firmware. The talk records the configuration-read fault and its error-handling path.<br><a href='https://www.youtube.com/watch?v=YNpJ3c1GJoc' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 7
    },
    "zh": {
      "headline": "比特币硬件钱包的故障注入测试",
      "text": "DEF CON 25。Josh Datko 与 Chris Quartier 对一款比特币硬件钱包中的 STM32F2 系列微控制器（演讲未列出具体料号）实施电压毛刺：在启动读取 RDP 读保护配置的瞬间注入故障，把保护等级降级，随后通过调试接口读取固件与钱包敏感数据。演讲完整演示了从拆机、焊接到毛刺参数搜索的流程，是硬件钱包故障注入攻击的早期公开案例。<br><a href='https://www.youtube.com/watch?v=hAtoRrxFBWs' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "Breaking Bitcoin Hardware Wallets",
      "text": "DEF CON 25. Josh Datko and Chris Quartier voltage-glitched an STM32F2-series microcontroller (no specific part number named) inside a Bitcoin hardware wallet: glitching while the boot code reads the RDP readout-protection configuration downgrades the protection level, after which firmware and wallet secrets are read out over the debug interface. The talk covers the full flow from teardown and soldering to glitch-parameter search — an early public case of fault injection against hardware wallets.<br><a href='https://www.youtube.com/watch?v=hAtoRrxFBWs' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 8
    },
    "zh": {
      "headline": "BADFET：二阶脉冲电磁故障注入",
      "text": "USENIX WOOT 2017。Ang Cui 与 Rick Housley 介绍 BADFET（二阶脉冲电磁故障注入）：用线圈产生强瞬态磁场，无需拆机或去封装即可在芯片内部诱发故障。作者在 Cisco 8861 VoIP 电话上验证攻击，目标组件包括 Broadcom BCM11123 应用处理器、Micron DDR3L D9SFT 内存和 Spansion S34ML02G2 NAND Flash，演示了电磁脉冲对安全启动链的破坏效果。<br><a href='https://www.usenix.org/system/files/conference/woot17/woot17-paper-cui.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "BADFET: Second-Order Pulsed EMFI",
      "text": "USENIX WOOT 2017. Ang Cui and Rick Housley introduced BADFET (second-order pulsed electromagnetic fault injection): a coil generates a strong transient magnetic field that induces faults inside a chip without teardown or decapsulation. They validated the attack on a Cisco 8861 VoIP phone, targeting its Broadcom BCM11123 application processor, Micron DDR3L D9SFT memory and Spansion S34ML02G2 NAND Flash, demonstrating disruption of the secure-boot chain.<br><a href='https://www.usenix.org/system/files/conference/woot17/woot17-paper-cui.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 8
    },
    "zh": {
      "headline": "CLKSCREW：软件触发的故障注入",
      "text": "USENIX Security 2017（同年 12 月登陆 Black Hat Europe）。哥伦比亚大学 Tang、Sethumadhavan 与 Stolfo 使用内核驱动通过软件接口触发故障：在搭载 Qualcomm Snapdragon 805（APQ8084）SoC 的 Nexus 6 上用内核驱动滥用 DVFS 动态调压调频，把 CPU 核心推到安全工作点之外（超频+欠压），使 ARM TrustZone 内的执行出错 —— 成功提取 TrustZone 中的 AES 密钥，并加载自签名的可信应用。攻击通过软件接口触发，不需要物理接触设备。<br><a href='https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/tang' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "CLKSCREW: Software-Driven Fault Attack",
      "text": "USENIX Security 2017 (also at Black Hat Europe that December). Columbia's Tang, Sethumadhavan and Stolfo used a kernel driver on a Nexus 6 with a Qualcomm Snapdragon 805 (APQ8084) SoC they abused DVFS to push the CPU core outside its safe operating point (overclock + undervolt), faulting execution inside ARM TrustZone — extracting AES keys from the secure world and loading self-signed trusted apps. The attack was triggered through software interfaces and did not require physical contact with the device.<br><a href='https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/tang' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 8
    },
    "zh": {
      "headline": "WOOT：STM32F0 固件保护研究",
      "text": "USENIX WOOT 2017。Johannes Obermaier 与 Stefan Tatschner 在 STM32F051R8T6 和 STM32F030R8T6 上研究固件读保护：RDP1 下的 Cold-Boot Stepping 可读 SRAM，254 nm UV-C 可使 RDP2 降级，SWD 竞争条件可绕过 RDP1 并读取 Flash。<br><a href='https://www.usenix.org/system/files/conference/woot17/woot17-paper-obermaier.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Shedding too much Light on STM32F0 Firmware Protection",
      "text": "USENIX WOOT 2017. Johannes Obermaier and Stefan Tatschner studied firmware readout protection on STM32F051R8T6 and STM32F030R8T6: Cold-Boot Stepping reads SRAM under RDP1, 254 nm UV-C downgrades RDP2, and an SWD race condition bypasses RDP1 to read Flash.<br><a href='https://www.usenix.org/system/files/conference/woot17/woot17-paper-obermaier.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 9
    },
    "zh": {
      "headline": "ASIL 认证汽车 MCU 的故障注入测试",
      "text": "FDTC 2017。Pareja、Wiersma 与 Witteman（Riscure）对通过 ISO 26262 QM、ASIL-D1 与 ASIL-D2 安全认证的汽车微控制器（论文未列出具体料号）实施电压毛刺和 EMFI，记录到 16–37% 的故障注入成功率。论文的核心结论是：锁步核、ECC、电压监控等 ASIL 安全机制针对的是随机硬件失效（如宇宙射线翻转），而非攻击者精确控制幅度与时序的故意故障——“功能安全认证不等于信息安全防护”。<br><a href='https://doi.org/10.1109/fdtc.2017.15' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Fault Injection on ASIL-Certified Automotive MCUs",
      "text": "FDTC 2017. Pareja, Wiersma and Witteman (Riscure) applied voltage glitching and EMFI to automotive microcontrollers certified to ISO 26262 QM, ASIL-D1 and ASIL-D2 (no part numbers listed), recording 16–37% fault-injection success rates. The key conclusion: ASIL safety mechanisms such as lockstep cores, ECC and voltage monitors are designed against random hardware faults (e.g. cosmic-ray upsets), not deliberately timed attacker-controlled glitches — functional-safety certification does not equal security protection.<br><a href='https://doi.org/10.1109/fdtc.2017.15' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 9
    },
    "zh": {
      "headline": "KERNELFAULT：故障注入影响 Linux 内核",
      "text": "hardwear.io 2017。Raelize 在系统启动早期、内核镜像正从外部 SDRAM 取数时注入电压毛刺，测试 ARM Cortex-A9 SoC（公开材料未披露具体料号）中传入 Linux 内核的指令和数据被篡改时的行为：实验观察到了权限提升类效果。该工作说明毛刺窗口不必局限在引导 ROM，内核加载阶段的取数通路同样是有效攻击面，外部存储器的完整性校验因此成为关键防护点。<br><a href='https://raelize.com/upload/research/2017/2017_Hardwear-io_KERNELFAULT-Pwning-Linux-using-Hardware-Fault-Injection_NT-CM.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "KERNELFAULT: Pwning Linux via FI",
      "text": "hardwear.io 2017. Raelize injected voltage glitches early in boot, while the kernel image is being fetched from external SDRAM, testing what happens when instructions and data flowing into the Linux kernel are corrupted on an ARM Cortex-A9 SoC (no part number disclosed in public material): privilege-escalation effects were observed. The work shows the glitch window need not be limited to boot ROM — the fetch path during kernel loading is equally exposed, making integrity checks on external memory a critical defense.<br><a href='https://raelize.com/upload/research/2017/2017_Hardwear-io_KERNELFAULT-Pwning-Linux-using-Hardware-Fault-Injection_NT-CM.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 9
    },
    "zh": {
      "headline": "激光故障注入绕过手机安全启动",
      "text": "FDTC 2017（扩展版发表于 TCHES 2018）。Aurélien Vasselle 与 Hugues Thiebeauld 在商用智能手机 SoC（公开材料未披露具体料号）的启动链签名校验指令处实施激光故障注入，使校验结果被跳过或篡改，最终加载并执行未授权镜像。该工作证明即使在集成度极高的手机 SoC 上，激光注入仍能精确命中启动验证的关键指令，安全启动的物理层脆弱性不因工艺演进而消失。<br><a href='https://doi.org/10.1109/fdtc.2017.18' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Laser FI Bypasses Smartphone Secure Boot",
      "text": "FDTC 2017 (extended version in TCHES 2018). Aurélien Vasselle and Hugues Thiebeauld performed laser fault injection at the signature-verification instruction of a commercial smartphone SoC's boot chain (no part number disclosed), causing the check to be skipped or corrupted so an unauthorized image loads and executes. The work shows that even on highly integrated mobile SoCs, laser injection can precisely hit the critical boot-verification instruction — the physical-layer fragility of secure boot persists across process generations.<br><a href='https://doi.org/10.1109/fdtc.2017.18' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 12
    },
    "zh": {
      "headline": "GlitchKit：开源故障注入工具链",
      "text": "34C3 2017。ktemkin 展示 GlitchKit 开源硬件与固件工具链：基于 GreatFET、FaceDancer 和 ChipWhisperer，对 USB 枚举等通信事件进行同步触发，把毛刺精确落在目标芯片处理协议的关键时刻，用于从读保护或加密 ROM 中提取固件。议题的重点是工具链设计与事件同步触发方法，并开源了全部硬件与软件；未限定单一芯片型号。<br><a href='https://media.ccc.de/v/34c3-9207-opening_closed_systems_with_glitchkit' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "GlitchKit: An Open Fault-Injection Toolchain",
      "text": "34C3 2017. ktemkin presented GlitchKit, an open-source hardware/firmware toolchain: built on GreatFET, FaceDancer and ChipWhisperer, it synchronizes glitches to communication events such as USB enumeration, landing faults at the exact moment the target processes protocol data, for extracting firmware from read-protected or encrypted ROMs. The talk focuses on toolchain design and event-synchronized triggering, with all hardware and software open-sourced; no single chip model is targeted.<br><a href='https://media.ccc.de/v/34c3-9207-opening_closed_systems_with_glitchkit' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2017,
      "month": 12
    },
    "zh": {
      "headline": "Switch Security：Homebrew on the Horizon",
      "text": "34C3 2017。Plutoo、Derrek 与 Naehrwert 系统梳理了 Nintendo Switch 的安全架构，议题内容涵盖对 NVIDIA Tegra X1 启动 ROM 的电压毛刺研究，记录了密钥和明文固件暴露的结果，并分析了 Switch 启动链各阶段的安全边界。该议题是 Switch 破解社区早期最重要的公开资料之一，为后续引导链分析与自制系统研究提供了基础。<br><a href='https://www.youtube.com/watch?v=Ec4NgWRE8ik' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Switch Security: Homebrew on the Horizon",
      "text": "34C3 2017. Plutoo, Derrek and Naehrwert systematically walked through the Nintendo Switch security architecture; the talk covered voltage-glitching work against the NVIDIA Tegra X1 boot ROM, recording the exposure of keys and plaintext firmware, and analyzed the security boundaries of each boot-chain stage. It was one of the most important early public resources for the Switch homebrew community, laying groundwork for later boot-chain analysis and custom-system research.<br><a href='https://www.youtube.com/watch?v=Ec4NgWRE8ik' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 5
    },
    "zh": {
      "headline": "安全嵌入式软件的故障攻击综述",
      "text": "Journal of Hardware and Systems Security，在线发表于 2018 年 5 月 10 日。Bilgiday Yuce、Patrick Schaumont 与 Marc Witteman 综述电压、时钟、电磁和激光故障如何影响嵌入式软件的数据流、控制流及防护评估；论文是综述，不对应单一芯片。<br><a href='https://doi.org/10.1007/s41635-018-0038-1' target='_blank'>论文</a> · <a href='https://arxiv.org/pdf/2003.10513' target='_blank'>开放版本</a>"
    },
    "en": {
      "headline": "Fault Attacks on Secure Embedded Software",
      "text": "Journal of Hardware and Systems Security, published online 10 May 2018. Bilgiday Yuce, Patrick Schaumont and Marc Witteman survey how voltage, clock, electromagnetic and laser faults affect embedded-software data/control flow and how to evaluate countermeasures; it is a survey rather than a single-chip experiment.<br><a href='https://doi.org/10.1007/s41635-018-0038-1' target='_blank'>Paper</a> · <a href='https://arxiv.org/pdf/2003.10513' target='_blank'>Open version</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 6
    },
    "zh": {
      "headline": "故障注入测试汽车诊断协议",
      "text": "escar USA 2018。Raelize 在未披露具体料号的汽车 ECU 上测试 UDS（统一诊断服务）SecurityAccess 流程：ECU 校验诊断工具返回的密钥响应时注入电压毛刺，使错误响应被判定为通过，诊断会话解锁后便可读取或修改固件。该工作把故障注入从芯片级密码操作引入车载诊断协议层，说明通信协议中的“比较-放行”结构同样是毛刺的高价值目标。<br><a href='https://raelize.com/upload/research/2018/2018_escarusa_fault-injection-on-diagnosis-protocols-presentation.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Fault Injection on Automotive Diagnostic Protocols",
      "text": "escar USA 2018. Raelize tested the UDS (Unified Diagnostic Services) SecurityAccess flow on an automotive ECU (no part number disclosed): voltage-glitching the ECU while it validates the diagnostic tool's key response makes a wrong response pass, after which the unlocked diagnostic session allows firmware readout or modification. The work brought fault injection from chip-level crypto operations to the vehicle-diagnostic protocol layer, showing compare-and-grant structures in communication protocols are equally valuable glitch targets.<br><a href='https://raelize.com/upload/research/2018/2018_escarusa_fault-injection-on-diagnosis-protocols-presentation.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 6
    },
    "zh": {
      "headline": "Glitching the Switch：故障注入任天堂 Switch 启动链",
      "text": "OpenChaos（CCC 科隆）2018。研究者对 Nintendo Switch 的 NVIDIA Tegra X1 启动 ROM 实施电压毛刺，尝试在硬件层面绕过签名校验：议题记录了毛刺时序搜索、目标点位定位以及电源轨改造的完整过程，并讨论了成败判据。该演示与同期其他 Tegra X1 毛刺工作相互印证，说明游戏主机的启动链是低成本故障注入的可达目标。<br><a href='https://media.ccc.de/v/c4.openchaos.2018.06.glitching-the-switch' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "Glitching the Switch (Tegra X1 Boot ROM)",
      "text": "OpenChaos (CCC Cologne) 2018. The presenter voltage-glitched the NVIDIA Tegra X1 boot ROM of the Nintendo Switch, attempting to bypass signature verification at the hardware level: the talk documents glitch-timing search, target-point localization and power-rail modification, along with success criteria. The demonstration corroborates contemporary Tegra X1 glitching work, showing console boot chains are reachable targets for low-cost fault injection.<br><a href='https://media.ccc.de/v/c4.openchaos.2018.06.glitching-the-switch' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 8
    },
    "zh": {
      "headline": "FPGAhammer：共享 FPGA 的远程电压故障",
      "text": "TCHES 2018。FPGAhammer 证明在多租户共享 FPGA 场景中，攻击者只需向自己租用的逻辑区域部署高功耗翻转电路（如大规模环形振荡器阵列），即可制造局部电压跌落和时序故障，从另一租户的 AES 实现中构造差分故障攻击并恢复密钥。论文讨论的是共享 FPGA 平台的远程电压故障，不限定单一器件料号，并评估了电压传感器等对策。<br><a href='https://doi.org/10.46586/tches.v2018.i3.44-68' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "FPGAhammer: Remote Voltage Faults on Shared FPGAs",
      "text": "TCHES 2018. FPGAhammer showed that in multi-tenant shared FPGAs, an attacker who simply deploys high-power toggle logic (large ring-oscillator arrays) in their own allocated region can create local voltage droops and timing faults, mounting a differential fault attack against another tenant's AES implementation to recover its key. The paper studies remote voltage faults on shared FPGA platforms without targeting a specific device part number, and evaluates countermeasures such as voltage sensors.<br><a href='https://doi.org/10.46586/tches.v2018.i3.44-68' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 8
    },
    "zh": {
      "headline": "遗传算法优化 EMFI 参数",
      "text": "FDTC 2018。研究者把 EMFI 的探针位置、脉冲强度和时序搜索建模为黑盒优化问题，用遗传算法自动演化参数组合：在黑盒 SHA-3 设备上，相比随机搜索获得约 40 倍的故障样本和约 20 倍的不同故障样本，可利用故障比例也显著提高。该工作是“自动化毛刺参数搜索”的早期代表，此后进化算法成为故障注入参数寻优的常用工具；论文未指定单一芯片型号。<br><a href='https://doi.org/10.1109/FDTC.2018.00014' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Genetic-Algorithm Optimization for EMFI",
      "text": "FDTC 2018. The researchers formulated the search for EMFI probe position, pulse strength and timing as a black-box optimization problem solved by a genetic algorithm: on a black-box SHA-3 device it yielded about 40× more faulty samples and 20× more distinct faults than random search, with a higher share of exploitable faults. An early example of automated glitch-parameter search, it helped establish evolutionary algorithms as a standard tool for fault-injection parameter tuning; no single chip model is specified.<br><a href='https://doi.org/10.1109/FDTC.2018.00014' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 8
    },
    "zh": {
      "headline": "There Will Be Glitches：汽车 ECU 固件提取",
      "text": "Black Hat USA 2018。Alyssa Milburn 与 Niek Timmers 演示对缺少软件漏洞的汽车 ECU 实施故障注入：先用毛刺绕过读保护提取受保护固件，再用自建的 CPU 仿真器对固件做动态分析、秘密提取和接口模糊测试，形成“毛刺提取+软件分析”的完整流程。议题强调即使 ECU 软件本身没有可利用漏洞，物理层故障注入仍能打开缺口；公开摘要未给出单一芯片料号。<br><a href='https://www.youtube.com/watch?v=4svMU1qGods' target='_blank'>演讲录像</a> · <a href='https://www.blackhat.com/us-18/briefings/schedule/#there-will-be-glitches-extracting-and-analyzing-automotive-firmware-efficiently-10696' target='_blank'>议题摘要</a>"
    },
    "en": {
      "headline": "There Will Be Glitches: Extracting and Analyzing Automotive Firmware Efficiently",
      "text": "Black Hat USA 2018. Alyssa Milburn and Niek Timmers demonstrated fault injection against automotive ECUs that lack software vulnerabilities: glitching past readout protection to extract protected firmware, then running it in a self-built CPU emulator for dynamic analysis, secret extraction and interface fuzzing — a complete 'glitch-and-analyze' pipeline. The talk stressed that even when ECU software has no exploitable bugs, physical-layer fault injection can still open a way in; no single chip part number was given in the public abstract.<br><a href='https://www.youtube.com/watch?v=4svMU1qGods' target='_blank'>Talk video</a> · <a href='https://www.blackhat.com/us-18/briefings/schedule/#there-will-be-glitches-extracting-and-analyzing-automotive-firmware-efficiently-10696' target='_blank'>Abstract</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 9
    },
    "zh": {
      "headline": "CMOS 28 nm 工艺节点的激光故障模型",
      "text": "FDTC 2018。Dutertre 等人在 CMOS 28 nm 测试芯片的 64 个 D 触发器、移位寄存器和硬件 AES 单元上进行激光注入，比较静态（器件保持状态）与动态（器件运行中）实验的单比特、位集/位清故障模型，并把观测结果与电路级仿真对照。研究为先进工艺节点下的激光故障建模提供了器件级数据；对象为 28 nm 测试芯片，论文未给商业料号。<br><a href='https://doi.org/10.1109/FDTC.2018.00009' target='_blank'>论文</a> · <a href='https://hal-emse.ccsd.cnrs.fr/emse-01856008' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Laser Fault Injection at the CMOS 28 nm Node",
      "text": "FDTC 2018. Dutertre et al. laser-injected 64 D flip-flops, shift registers and a hardware AES unit on a CMOS 28 nm test chip, comparing single-bit and set/reset fault models under static (state-held) and dynamic (running) conditions, and checked observations against circuit-level simulation. The study provides device-level data for laser fault modeling at advanced process nodes; the target was a 28 nm test chip with no commercial part number.<br><a href='https://doi.org/10.1109/FDTC.2018.00009' target='_blank'>Paper</a> · <a href='https://hal-emse.ccsd.cnrs.fr/emse-01856008' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 9
    },
    "zh": {
      "headline": "SIFA：统计无效故障攻击",
      "text": "CHES 2018 / TCHES 2018(3)。Dobraunig、Eichlseder、Korak、Mangard、Mendel 与 Primas 将无效故障信息与统计密钥排序结合成 SIFA：利用故障是否生效的概率偏差逐比特筛选密钥，分析部分带掩码的 AES 实现以及只检测错误输出的对策。论文还讨论了相应防护方向。<br><a href='https://tches.iacr.org/index.php/TCHES/article/view/7286' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "SIFA: Statistical Ineffective Fault Attacks",
      "text": "CHES 2018 / TCHES 2018(3). Dobraunig, Eichlseder, Korak, Mangard, Mendel and Primas combined ineffective-fault information with statistical key ranking into SIFA. The paper analyzes masked AES implementations and countermeasures that only detect wrong outputs, and discusses corresponding protections.<br><a href='https://tches.iacr.org/index.php/TCHES/article/view/7286' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 11
    },
    "zh": {
      "headline": "ATmega328P：激光脉冲黑盒刻画",
      "text": "CARDIS 2018。Kumar、Beckers、Balasch、Gierlichs 与 Verbauwhede 对 Microchip（原 Atmel）ATmega328P 8 位 AVR 微控制器进行黑盒激光脉冲实验：可重复地将指令和数据字中的单个位复位，并演示了 AES 轮数修改攻击。研究完全基于公开文档和实测，不依赖芯片内部设计资料，说明成熟商用 MCU 的激光故障行为可被低成本黑盒方法精确刻画。<br><a href='https://doi.org/10.5281/zenodo.2647324' target='_blank'>预印本</a> · <a href='https://doi.org/10.1007/978-3-030-15462-2_11' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "ATmega328P: Black-Box Characterization of Laser Pulses",
      "text": "CARDIS 2018. Kumar, Beckers, Balasch, Gierlichs and Verbauwhede ran black-box laser-pulse experiments on the Microchip (formerly Atmel) ATmega328P 8-bit AVR microcontroller: they could reproducibly reset individual bits in instruction and data words and demonstrated an AES round-modification attack. The study relied solely on public documentation and measurements — no internal design data — showing that the laser fault behavior of a mature commercial MCU can be precisely characterized with low-cost black-box methods.<br><a href='https://doi.org/10.5281/zenodo.2647324' target='_blank'>Preprint</a> · <a href='https://doi.org/10.1007/978-3-030-15462-2_11' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 12
    },
    "zh": {
      "headline": "Viva la Vita Vida：PlayStation Vita F00D 故障注入",
      "text": "35C3 2018。Yifan Lu 介绍 PlayStation Vita 的 F00D 安全协处理器——索尼定制 SoC 中负责密钥管理与安全启动的独立核心：他使用改造的 ChipWhisperer 对该定制 SoC 实施故障注入和侧信道分析，讲解了 F00D 的电源域划分、毛刺触发点选择和参数搜索过程。公开材料未给出 F00D 的商业料号，该议题是 Vita 安全研究的关键公开资料。<br><a href='https://media.ccc.de/v/35c3-9364-viva_la_vita_vida' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "Viva la Vita Vida: Fault-Injection Attacks on F00D",
      "text": "35C3 2018. Yifan Lu presented the PlayStation Vita's F00D security co-processor — a dedicated core inside Sony's custom SoC handling key management and secure boot: using a modified ChipWhisperer, he performed fault injection and side-channel analysis on the custom SoC, explaining F00D's power domains, glitch trigger-point selection and parameter search. Public material gives no commercial part number for F00D; the talk is a key public reference for Vita security research.<br><a href='https://media.ccc.de/v/35c3-9364-viva_la_vita_vida' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2018,
      "month": 12
    },
    "zh": {
      "headline": "wallet.fail：硬件钱包故障注入研究",
      "text": "35C3（第 35 届混沌通信大会）。Thomas Roth、Josh Datko 与 Dmitry Nedospasov 对 Ledger Nano S、Ledger Blue 的 STM32 主控（演讲未列出具体料号）以及 Trezor One 的 STM32F205 实施电压毛刺，展示了绕过读保护、提取助记词种子与 PIN 的方法，并演示了 Ledger Blue 的射频侧信道。厂商随后发布了固件更新和安全声明。<br><a href='https://media.ccc.de/v/35c3-9563-wallet_fail' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "wallet.fail — 35C3",
      "text": "35th Chaos Communication Congress. Thomas Roth, Josh Datko and Dmitry Nedospasov used voltage glitches against the STM32 controllers in Ledger Nano S and Ledger Blue (the talk does not list part numbers) and the STM32F205 in Trezor One, showing readout-protection bypasses and extraction of seed material and PINs, alongside an RF side-channel demonstration on the Ledger Blue. The vendors published firmware updates and security statements after the presentation.<br><a href='https://media.ccc.de/v/35c3-9563-wallet_fail' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 1
    },
    "zh": {
      "headline": "激光指令跳过模型的实验分析：ATmega328P",
      "text": "NordSec 2019。Dutertre、Riom、Potin 与 Rigaud 在 0.35 µm、8 位 AVR ATmega328P（32 kB Flash、2 kB SRAM、1 kB EEPROM）上用 1064 nm 激光把取指指令变成 NOP，可连续擦除任意长度的固件片段，并演示 PIN 检查绕过。<br><a href='https://doi.org/10.1007/978-3-030-35055-0_14' target='_blank'>论文</a> · <a href='https://hal.science/hal-02379754' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Laser-Induced Instruction Skips on ATmega328P",
      "text": "NordSec 2019. Dutertre, Riom, Potin and Rigaud used a 1064-nm laser on a 0.35-µm 8-bit AVR ATmega328P (32 kB Flash, 2 kB SRAM, 1 kB EEPROM) to turn fetched instructions into NOPs, erase firmware sections of arbitrary length and demonstrate a PIN-check bypass.<br><a href='https://doi.org/10.1007/978-3-030-35055-0_14' target='_blank'>Paper</a> · <a href='https://hal.science/hal-02379754' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 2
    },
    "zh": {
      "headline": "用电压毛刺注入软件漏洞",
      "text": "arXiv 2019。Yifan Lu 建立 CMOS 电路电压毛刺的晶体管级模型，解释毛刺如何转化为软件层可利用的漏洞（如跳过安全检查、篡改比较结果），并在 Sony PlayStation Vita 的定制 Samsung 45 nm SoC/F00D 启动处理器上实施毛刺，取得早期启动控制并转储 secure-boot ROM。该工作为“用故障注入注入软件漏洞”的思路提供了从器件物理到系统攻破的完整案例。<br><a href='https://arxiv.org/abs/1903.08102' target='_blank'>论文预印本</a>"
    },
    "en": {
      "headline": "Injecting Software Vulnerabilities with Voltage Glitching",
      "text": "arXiv 2019. Yifan Lu built a transistor-level model of voltage glitching in CMOS circuits, explaining how glitches turn into software-exploitable vulnerabilities (such as skipped security checks or corrupted comparisons), and applied glitches to the custom Samsung 45 nm SoC/F00D boot processor of the Sony PlayStation Vita, gaining early boot control and dumping the secure-boot ROM. The work provides a complete case of 'injecting software vulnerabilities with fault injection', from device physics to system compromise.<br><a href='https://arxiv.org/abs/1903.08102' target='_blank'>Preprint</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 3
    },
    "zh": {
      "headline": "Number “Not Used” Once：pqm4 后量子密码故障攻击",
      "text": "COSADE 2019（在线发表于 2019 年 3 月 16 日）。Prasanna Ravi、Debapriya Basu Roy、Shivam Bhasin、Anupam Chattopadhyay 与 Debdeep Mukhopadhyay 分析 NewHope、Kyber、Frodo 和 Dilithium 的 nonce 分隔用途；EMFI 跳过 ARM Cortex-M4 参考实现中的指令可造成 nonce 重复，从而恢复密钥或消息。<br><a href='https://doi.org/10.1007/978-3-030-16350-1_13' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Number “Not Used” Once: Fault Attacks on pqm4",
      "text": "COSADE 2019 (online 16 March 2019). Prasanna Ravi, Debapriya Basu Roy, Shivam Bhasin, Anupam Chattopadhyay and Debdeep Mukhopadhyay analyze the nonce-separation role in NewHope, Kyber, Frodo and Dilithium; EMFI instruction skips in ARM Cortex-M4 pqm4 reference implementations can repeat a nonce and enable key or message recovery.<br><a href='https://doi.org/10.1007/978-3-030-16350-1_13' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 3
    },
    "zh": {
      "headline": "塑造毛刺：任意波形电压注入",
      "text": "TCHES 2019 / CHES 2019。Bozzato、Focardi 与 Palmarini 比较任意波形发生器和 crowbar 产生的电压毛刺，在 STMicroelectronics STM32F103、STM32F373，Texas Instruments MSP430F5172、MSP430FR5725，以及 Renesas 78K0/Kx2、78K0R/Kx3-L 六个目标上绕过串行引导加载器并提取固件。<br><a href='https://doi.org/10.46586/tches.v2019.i2.199-224' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Shaping the Glitch",
      "text": "TCHES 2019 / CHES 2019. Bozzato, Focardi and Palmarini compared arbitrary-waveform-generator and crowbar voltage glitches. They bypassed serial bootloaders and extracted firmware on six targets: STMicroelectronics STM32F103 and STM32F373, Texas Instruments MSP430F5172 and MSP430FR5725, and Renesas 78K0/Kx2 and 78K0R/Kx3-L.<br><a href='https://doi.org/10.46586/tches.v2019.i2.199-224' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 5
    },
    "zh": {
      "headline": "32 位微控制器 Flash：激光单比特指令破坏",
      "text": "HOST 2019。Colombier、Menu、Dutertre、Moëllic、Rigaud 与 Danger 在 90 nm、Cortex-M3、128 kB Flash 的 32 位微控制器上进行激光注入；读取指令时可触发只影响取指结果的单比特 bit-set 故障，并演示改变比较、加法等指令字段。论文未给出商业料号。<br><a href='https://doi.org/10.1109/HST.2019.8741030' target='_blank'>论文</a> · <a href='https://telecom-paris.hal.science/hal-02344050' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Laser-Induced Single-Bit Faults in 32-bit Flash Instructions",
      "text": "HOST 2019. Colombier, Menu, Dutertre, Moëllic, Rigaud and Danger injected a 90 nm Cortex-M3 microcontroller with 128 kB Flash; read-time laser shots produced single-bit bit-set faults in fetched instructions, and the authors demonstrated changes to compare, add and other instruction fields. No commercial part number is given.<br><a href='https://doi.org/10.1109/HST.2019.8741030' target='_blank'>Paper</a> · <a href='https://telecom-paris.hal.science/hal-02344050' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 8
    },
    "zh": {
      "headline": "EMFI：故障是如何发生的",
      "text": "FDTC 2019。Dehbaoui、Dutertre、Robisson 与 Tria 建立电磁故障注入的感应机理模型：把脉冲磁场在芯片供电网络与键合线中感生的电流/电压扰动形式化，并用实验数据验证模型，解释了封装无需去除时电磁场如何在 SoC 内部形成可利用故障。该工作把 EMFI 从经验技术向可预测的工程方法推进了一步；论文未限定单一芯片型号。<br><a href='https://doi.org/10.1109/FDTC.2019.00010' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Electromagnetic Fault Injection: How Faults Occur",
      "text": "FDTC 2019. Dehbaoui, Dutertre, Robisson and Tria built a model of EMFI's induction mechanism: formalizing how pulsed magnetic fields induce current/voltage disturbances in the chip's power network and bond wires, validated with experimental data, explaining how EM fields create exploitable faults inside a SoC without package removal. The work moved EMFI from an empirical technique toward a predictable engineering method; no single chip model is specified.<br><a href='https://doi.org/10.1109/FDTC.2019.00010' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 8
    },
    "zh": {
      "headline": "MIN()imum Failure：WOOT 上的 STM32 USB 栈 EMFI",
      "text": "USENIX WOOT 2019。Colin O'Flynn 证明无需拆开设备外壳，也能用电磁故障注入攻击 USB 协议栈：Trezor One 使用 STM32F205，SoloKey 使用 STM32L432；EMFI 跳过 USB 栈中的 MIN() 长度比较后，主机提供的异常 wLength 可让两者回读最多 64 KB 内存并泄露敏感数据。论文介绍了 PhyWhisperer-USB 的 USB 解码与周期级毛刺触发功能。<br><a href='https://www.usenix.org/conference/woot19/presentation/oflynn' target='_blank'>论文与演讲</a>"
    },
    "en": {
      "headline": "MIN()imum Failure: EMFI on STM32 USB Stacks at WOOT",
      "text": "USENIX WOOT 2019. Colin O'Flynn showed that an enclosure need not be opened to attack USB stacks with electromagnetic fault injection: the Trezor One uses an STM32F205 and the SoloKey an STM32L432; EMFI skips the USB stack's MIN() length check, so a host-supplied oversized wLength makes both devices read back up to 64 KB of memory, exposing secrets. The paper introduced PhyWhisperer-USB for USB decoding and cycle-accurate glitch triggering.<br><a href='https://www.usenix.org/conference/woot19/presentation/oflynn' target='_blank'>Paper and talk</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 11
    },
    "zh": {
      "headline": "毛刺数据传输与代码执行",
      "text": "POC 2019（首尔）。Raelize 在 ARM AArch32 启动环境中测试总线数据传输阶段的电压毛刺：在启动代码从外部存储读取数据的传输瞬间注入故障，使一次传输中的取指数据被篡改，启动阶段随即执行了构造的代码。该演示说明毛刺目标不限于处理核内部，存储器总线上的数据通路同样是任意代码执行的入口。<br><a href='https://raelize.com/upload/research/2019/2019_PoC_Using-Fault-Injection-to-Turn-Data-Transfers-into-Arbitrary-Execution_CM-NT.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "FI Turns Data Transfers into Arbitrary Execution",
      "text": "POC 2019 (Seoul). Raelize tested voltage glitching during bus data transfers in an ARM AArch32 boot environment: glitching the exact moment boot code fetches data from external memory corrupts the fetched instruction data of a single transfer, after which the boot stage executes constructed code. The demo shows glitch targets are not limited to the processor core — the datapath on the memory bus is equally an entry point to arbitrary code execution.<br><a href='https://raelize.com/upload/research/2019/2019_PoC_Using-Fault-Injection-to-Turn-Data-Transfers-into-Arbitrary-Execution_CM-NT.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 11
    },
    "zh": {
      "headline": "VoltJockey：软件欠压攻破 TrustZone",
      "text": "ACM CCS 2019。Qiu、Wang、Lyu 与 Qu 提出 VoltJockey：在商用多核 ARM 手机/平板平台（公开摘要未列出具体 SoC 料号）上，利用内核可调用的 DVFS 调压调频接口精确控制欠压时机，对 TrustZone 安全世界注入故障，最终提取安全存储中的密钥。与 CLKSCREW 同属软件触发故障注入，但 VoltJockey 用硬件性能计数器实现了更精确的故障时刻控制，并分析了相应防护。<br><a href='https://dl.acm.org/doi/10.1145/3319535.3354201' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "VoltJockey: Breaching TrustZone via Software",
      "text": "ACM CCS 2019. Qiu, Wang, Lyu and Qu presented VoltJockey: on commercial multi-core ARM phone/tablet platforms (no specific SoC part number in the public abstract), it uses the kernel-reachable DVFS interface to precisely time undervolting, injects faults into the TrustZone secure world, and extracts keys from secure storage. Like CLKSCREW it is software-triggered fault injection, but VoltJockey uses hardware performance counters for more precise fault timing, and analyzes corresponding defenses.<br><a href='https://dl.acm.org/doi/10.1145/3319535.3354201' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 12
    },
    "zh": {
      "headline": "激光可控指令替换：ARM SC100 智能卡",
      "text": "IEICE 2019。Sakamoto、Fujimoto 与 Matsumoto 使用 Flash 激光照射在 ARM SC100 系列安全微控制器（智能卡芯片，论文未给出具体卡片料号）上实现可控指令替换：精确替换目标指令的操作码而非简单跳过，并以 AES 软件实现为例，用替换分支指令的方式绕过针对指令跳过设计的防护。该工作说明“指令替换”比“指令跳过”更难被通用对策检测。<br><a href='https://doi.org/10.1587/transfun.2019cip0028' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Controllable Laser Instruction Replacement on ARM SC100",
      "text": "IEICE 2019. Sakamoto, Fujimoto and Matsumoto used flash-laser irradiation to achieve controllable instruction substitution on ARM SC100-series secure microcontrollers (smartcard chips; no specific card part number given): precisely replacing the opcode of a target instruction rather than merely skipping it, and demonstrated on a software AES by replacing a branch instruction to defeat countermeasures designed against instruction skipping. The work shows instruction substitution is harder for generic defenses to detect than instruction skipping.<br><a href='https://doi.org/10.1587/transfun.2019cip0028' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 12
    },
    "zh": {
      "headline": "Fatal Fury on ESP32：V1 安全配置绕过",
      "text": "Black Hat Europe 2019。LimitedResults 发布“Pwn the ESP32 Forever”成果：ESP32（V1 硅片）上电读取 eFuse 安全配置的瞬间注入电源毛刺，即可绕过 Secure Boot 与 Flash Encryption 两道防线，从量产芯片中提取出本应由熔丝保护的密钥。由于 eFuse 属一次性烧录、启动 ROM 无法更新，该问题需要硬件修订；乐鑫推出了 ESP32-V3。<br><a href='https://www.youtube.com/watch?v=vwwTC_ivG00' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "Fatal Fury on ESP32 — Black Hat Europe",
      "text": "Black Hat Europe 2019. LimitedResults presented “Pwn the ESP32 Forever”: power-glitching the ESP32 (V1 silicon) at the exact moment it reads eFuse security configuration at power-up defeats both Secure Boot and Flash Encryption, extracting keys that were supposed to be fused in production chips. The one-time-programmable eFuses and non-updatable boot ROM meant that the issue required a hardware revision; Espressif shipped the ESP32-V3 revision.<br><a href='https://www.youtube.com/watch?v=vwwTC_ivG00' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 12
    },
    "zh": {
      "headline": "Plundervolt：软件欠压影响 Intel SGX",
      "text": "2019 年 12 月披露，IEEE S&P 2020 正式发表（CVE-2019-11157）。Murdock、Oswald、Garcia、Van Bulck、Gruss 与 Piessens 发现 Intel 留给超频玩家的 MSR 0x150 电压调节接口可被滥用：从软件对 CPU 封装内欠压，使 SGX 飞地内的计算翻转比特 —— 提取 AES-NI 密钥、攻破 RSA 实现，甚至在飞地内制造内存安全漏洞。Intel 随后通过微码更新默认禁用该接口。<br><a href='https://plundervolt.com' target='_blank'>网站</a>"
    },
    "en": {
      "headline": "Plundervolt: Software Undervolting Affects SGX",
      "text": "Disclosed December 2019, formally published at IEEE S&P 2020 (CVE-2019-11157). Murdock, Oswald, Garcia, Van Bulck, Gruss and Piessens found that Intel's overclocking MSR 0x150 voltage interface could be abused: undervolting the CPU package from software flips bits inside SGX enclave computations — extracting AES-NI keys, breaking RSA implementations, even inducing memory-safety bugs inside enclaves. Intel disabled the interface via a microcode update. The paper documents the effect of software-controlled voltage on SGX computations.<br><a href='https://plundervolt.com' target='_blank'>Site</a>"
    }
  },
  {
    "start": {
      "year": 2019,
      "month": 12
    },
    "zh": {
      "headline": "TrustZone-M(eh)：ARMv8-M 安全特性故障注入",
      "text": "36C3 2019。Thomas Roth 公开其 FPGA 毛刺平台并演示对 Microchip SAM L11（ARM Cortex-M23、支持 TrustZone-M）等嵌入式处理器重新启用 JTAG 调试、绕过安全启动和 AES 密钥保护；工具链与硬件同时开源。议题系统测试了 ARMv8-M 新引入的 TrustZone-M 与调试认证机制在故障注入下的表现，是 TrustZone-M 安全性的早期公开评估。<br><a href='https://media.ccc.de/v/36c3-10859-trustzone-m_eh_breaking_armv8-m_s_security' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "TrustZone-M(eh): Faulting ARMv8-M Security",
      "text": "36C3 2019. Thomas Roth released his FPGA glitching platform and demonstrated re-enabling JTAG debug, bypassing secure boot and AES key protection on embedded processors including the Microchip SAM L11 (ARM Cortex-M23 with TrustZone-M); both toolchain and hardware were open-sourced. The talk systematically tested how ARMv8-M's newly introduced TrustZone-M and debug-authentication mechanisms behave under fault injection — an early public evaluation of TrustZone-M security.<br><a href='https://media.ccc.de/v/36c3-10859-trustzone-m_eh_breaking_armv8-m_s_security' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2020,
      "month": 7
    },
    "zh": {
      "headline": "Flash 临时激光故障：校准与增强攻击",
      "text": "IOLTS 2020。Garb 与 Obermaier 研究嵌入式微控制器 Flash 的临时激光故障：给出激光位置的校准方法，使不破坏芯片的临时故障（断电后恢复）可重复复现，并讨论 Flash 感知的错误检测与数据退化防护。论文区分了临时故障与永久损伤的边界条件，为“非破坏性激光攻击”提供了系统化实验依据；未公开具体商业料号。<br><a href='https://doi.org/10.1109/IOLTS50870.2020.9159712' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Temporary Laser Faults in Flash: Calibration and Countermeasures",
      "text": "IOLTS 2020. Garb and Obermaier studied temporary laser faults in embedded-microcontroller Flash: they present a laser-position calibration method making non-destructive temporary faults (which vanish after power-down) reproducible, and discuss Flash-aware error detection and data-degradation defenses. The paper delineates the boundary between temporary faults and permanent damage, systematizing the experimental basis for non-destructive laser attacks; no commercial part number is disclosed.<br><a href='https://doi.org/10.1109/IOLTS50870.2020.9159712' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2020,
      "month": 8
    },
    "zh": {
      "headline": "V0LTpwn：软件攻击 x86 完整性",
      "text": "USENIX Security 2020。Kenjar、Frassetto、Gens、Franz 与 Sadeghi 把欠压攻击的目标从 SGX 机密性扩展到整个 x86 的<b>完整性</b>：通过 MSR 欠压让普通（非飞地）代码出错，包括内核态执行与 Hypervisor；实验使用 Intel Core i7-7700、i7-7700K 和 i7-8700K。论文记录了这些处理器在软件欠压下的执行影响。<br><a href='https://www.usenix.org/system/files/sec20-kenjar.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "V0LTpwn: Attacking x86 Integrity from Software",
      "text": "USENIX Security 2020. Kenjar, Frassetto, Gens, Franz and Sadeghi extended undervolting attacks from SGX confidentiality to x86 <b>integrity</b> as a whole: MSR undervolting faults ordinary non-enclave code, including kernel-mode execution and hypervisors; the experiments use Intel Core i7-7700, i7-7700K and i7-8700K processors. The paper records their execution faults under software-controlled voltage.<br><a href='https://www.usenix.org/system/files/sec20-kenjar.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2020,
      "month": 9
    },
    "zh": {
      "headline": "NOR Flash 单比特激光故障模型",
      "text": "FDTC 2020。Menu、Dutertre、Colombier、Rigaud、Moëllic 与 Danger 在两种不同厂商的嵌入式 NOR Flash 微控制器上比较激光注入；两颗器件分别采用 Cortex-M0+（256 kB Flash、32 kB SRAM）和 Cortex-M3（128 kB Flash、8 kB SRAM），可在不改写存储内容的情况下得到单比特 bit-set 故障，并用于 AES safe-error 攻击。论文未给出商业料号。<br><a href='https://doi.org/10.1109/FDTC51366.2020.00013' target='_blank'>论文</a> · <a href='https://telecom-paris.hal.science/hal-03034855' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Single-Bit Laser Faults in NOR Flash",
      "text": "FDTC 2020. Menu, Dutertre, Colombier, Rigaud, Moëllic and Danger compared laser injection on two embedded NOR-Flash microcontrollers from different manufacturers: a Cortex-M0+ device with 256 kB Flash and 32 kB SRAM, and a Cortex-M3 device with 128 kB Flash and 8 kB SRAM. Single-bit bit-set faults left stored contents unchanged and enabled an AES safe-error attack; commercial part numbers are not given.<br><a href='https://doi.org/10.1109/FDTC51366.2020.00013' target='_blank'>Paper</a> · <a href='https://telecom-paris.hal.science/hal-03034855' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2020,
      "month": 11
    },
    "zh": {
      "headline": "BAM BAM!!：EMFI 解除车规 ECU 审查锁",
      "text": "escar Europe 2020（ePrint 2020/937）。Colin O'Flynn 在 NXP MPC55xx/MPC56xx 系列 E41 ECU 上实施 EMFI，攻击 BAM 密码比较；自动重试在数分钟内解锁一辆 2019 Chevrolet Silverado 2500 HD 的原厂 ECU 并读取 Flash。<br><a href='https://eprint.iacr.org/2020/937' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "BAM BAM!!: EMFI on an Automotive ECU",
      "text": "escar Europe 2020 (ePrint 2020/937). Colin O'Flynn used EMFI against the BAM password comparison on an NXP MPC55xx/MPC56xx-series E41 ECU. Automated retries unlocked the stock ECU from a 2019 Chevrolet Silverado 2500 HD and read its flash within minutes.<br><a href='https://eprint.iacr.org/2020/937' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2020,
      "month": 11
    },
    "zh": {
      "headline": "低成本 BBI 作用于 WLCSP 封装芯片",
      "text": "CARDIS 2020。Colin O'Flynn 把 2012 年提出的体偏压注入做成了较低成本的实验装置：无需 X 光或激光台，用自制廉价装置对晶圆级封装（WLCSP）的 STM32F415 从背面衬底注入偏压脉冲，成功诱导可利用故障。论文同时开源了工装与方法，并记录了 BBI 绕过正面金属屏蔽的实验结果。<br><a href='https://eprint.iacr.org/2020/1228.pdf' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Low-Cost Body Biasing Injection on WLCSP",
      "text": "CARDIS 2020. Colin O'Flynn implemented body bias injection (proposed in 2012) with a low-cost setup: with no X-ray or laser bench, a homebuilt cheap rig injected bias pulses through the backside substrate of a wafer-level chip-scale packaged STM32F415, inducing exploitable faults. The paper open-sourced the jig and methodology and records BBI faults injected through the backside of a shielded MCU.<br><a href='https://eprint.iacr.org/2020/1228.pdf' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2020,
      "month": 12
    },
    "zh": {
      "headline": "Debug Resurrection：恢复 Nordic nRF52 调试接口",
      "text": "Black Hat Europe 2020。LimitedResults 在 Nordic nRF52840 上研究 APPROTECT 调试保护：在芯片上电初始化的精确窗口注入电压毛刺，重新获得 SWD 调试访问并读取 Flash；演讲还在 nRF52832 和 nRF52833 上观察到相同模式。这是 nRF52 系列 APPROTECT 的首次公开绕过，研究者同时公开了完整的毛刺参数与复现方法，Nordic 随后在后续产品中强化了调试保护设计。<br><a href='https://i.blackhat.com/eu-20/Wednesday/eu-20-LimitedResults-Debug-Resurrection-On-nRF52-Series.pdf' target='_blank'>演讲幻灯片</a> · <a href='https://limitedresults.com/results/nrf52-debug-resurrection-approtect-bypass' target='_blank'>研究文章</a>"
    },
    "en": {
      "headline": "Debug Resurrection: Nordic nRF52 APPROTECT",
      "text": "Black Hat Europe 2020. LimitedResults studied the APPROTECT debug protection on the Nordic nRF52840: a voltage glitch fired in the precise window of power-on initialization restored SWD debug access and allowed Flash readout; the same pattern was observed on the nRF52832 and nRF52833. It was the first public bypass of nRF52-series APPROTECT — the researchers published full glitch parameters and reproduction steps, and Nordic subsequently strengthened debug protection in later products.<br><a href='https://i.blackhat.com/eu-20/Wednesday/eu-20-LimitedResults-Debug-Resurrection-On-nRF52-Series.pdf' target='_blank'>Slides</a> · <a href='https://limitedresults.com/results/nrf52-debug-resurrection-approtect-bypass' target='_blank'>Research article</a>"
    }
  },
  {
    "start": {
      "year": 2020,
      "month": 12
    },
    "zh": {
      "headline": "Fill your Boots：故障注入与二进制分析攻破引导加载器",
      "text": "TCHES 2021(1)，在线发表于 2020 年 12 月 3 日。论文分别研究 NXP LPC1343 上不需要毛刺的纯软件 ROP、STM8L152C6 和 STM8AF6266 上由动态分析辅助的多重电压毛刺，以及 Renesas 78K0/KC2 上由符号执行辅助的定点电压毛刺，并比较三条路线的适用场景与成本。结果表明程序分析与故障注入的结合能攻破单一手段无法处理的引导加载器目标。<br><a href='https://doi.org/10.46586/tches.v2021.i1.56-81' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fill your Boots: Bootloader Exploits via Fault Injection and Binary Analysis",
      "text": "TCHES 2021(1), published online Dec 3, 2020. The paper studies three cases: pure software ROP without any glitch on the NXP LPC1343, dynamic-analysis-assisted multiple voltage glitches on the STM8L152C6 and STM8AF6266, and symbolic-execution-assisted targeted voltage glitching on the Renesas 78K0/KC2, comparing applicability and cost of each route. The results show that combining program analysis with fault injection defeats bootloader targets that neither technique alone can handle.<br><a href='https://doi.org/10.46586/tches.v2021.i1.56-81' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 1
    },
    "zh": {
      "headline": "PQC KEM 的故障注入攻击",
      "text": "PQCrypto 2021。研究者分析 NIST 后量子密码第三轮 KEM 候选（Kyber、NewHope 等）在故障注入下的攻击面：解封装过程中的指令跳过可破坏其错误处理与重加密比对逻辑，泄露密钥相关信息。论文面向算法实现层面的故障路径，梳理了格基 KEM 的 FO 变换在物理攻击下的薄弱环节；不对应单一芯片。<br><a href='https://doi.org/10.1007/978-3-030-92075-3_2' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault-Injection Attacks on NIST PQC KEM Candidates",
      "text": "PQCrypto 2021. The researchers analyzed the fault-attack surface of NIST third-round PQC KEM candidates (Kyber, NewHope et al.): instruction skips during decapsulation can break error handling and re-encryption comparison logic, leaking key-related information. The paper maps fault paths at the algorithm-implementation level, identifying weak points of lattice-based KEMs' Fujisaki–Okamoto transform under physical attack; no single chip is involved.<br><a href='https://doi.org/10.1007/978-3-030-92075-3_2' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 2
    },
    "zh": {
      "headline": "CCA 安全格 KEM 的故障攻击",
      "text": "TCHES 2021。Krahmer 等人利用一次时钟毛刺造成的指令跳过，攻击 Kyber 和 NewHope 解封装中的解码路径：通过区分有效与无效故障的统计差异恢复密钥，并在 ARM Cortex-M4 上实验验证，Kyber512 模拟约需 6,500 次故障解封装。论文同时给出针对解码函数的防护建议，是 CCA 安全格 KEM 物理攻击的代表性工作之一。<br><a href='https://doi.org/10.46586/tches.v2021.i2.37-60' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Fault Attacks on CCA-Secure Lattice KEMs",
      "text": "TCHES 2021. Krahmer et al. used single clock-glitch instruction skips against the decoding path of Kyber and NewHope decapsulation: statistical separation of effective versus ineffective faults recovers the key, validated experimentally on an ARM Cortex-M4, with Kyber512 requiring about 6,500 faulted decapsulations in simulation. The paper also proposes defenses for the decoding function and is a representative physical attack on CCA-secure lattice KEMs.<br><a href='https://doi.org/10.46586/tches.v2021.i2.37-60' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 3
    },
    "zh": {
      "headline": "复杂 CPU 上的 EMFI 微架构故障模型",
      "text": "Journal of Cryptographic Engineering，在线发表于 2021 年 3 月 19 日。Trouchkine、Bukasa、Escouteloup、Lashermes 与 Bouffard 在 Raspberry Pi 3 使用的 Broadcom BCM2837 上观察 L1 指令缓存、L1 数据缓存、L2 缓存和 MMU 的持久故障，并用 AES 密钥恢复验证故障模型。<br><a href='https://doi.org/10.1007/s13389-021-00259-6' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "EMFI against a Complex CPU: Microarchitectural Fault Models",
      "text": "Journal of Cryptographic Engineering, published online 19 March 2021. Trouchkine, Bukasa, Escouteloup, Lashermes and Bouffard observed persistent faults in the L1 instruction cache, L1 data cache, L2 cache and MMU of the Broadcom BCM2837 used in Raspberry Pi 3, and validated the fault model by recovering an AES key.<br><a href='https://doi.org/10.1007/s13389-021-00259-6' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 5
    },
    "zh": {
      "headline": "TRAITOR：低成本多重故障注入平台",
      "text": "ASSS 2021（2021 年 5 月 24 日）。Ludovic Claudepierre、Pierre-Yves Péneau、Damien Hardy 与 Erven Rohou 设计低成本时钟毛刺平台 TRAITOR：在普通硬件上产生精确可控的多重故障脉冲，并在 STM32F100RB（ARM Cortex-M3）上评估多故障软件防护的有效性。实验显示部分针对单故障设计的对策在多重毛刺下失效，平台成本远低于商用多重故障设备。<br><a href='https://doi.org/10.1145/3457340.3458303' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "TRAITOR: A Low-Cost Multifault-Injection Platform",
      "text": "ASSS 2021 (May 24, 2021). Ludovic Claudepierre, Pierre-Yves Péneau, Damien Hardy and Erven Rohou designed TRAITOR, a low-cost clock-glitch platform that generates precisely controlled multiple-fault pulses on commodity hardware, and evaluated multi-fault software countermeasures on an STM32F100RB (ARM Cortex-M3). Experiments show some defenses designed for single faults fail under multiple glitches, at a platform cost far below commercial multi-fault equipment.<br><a href='https://doi.org/10.1145/3457340.3458303' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 6
    },
    "zh": {
      "headline": "Glitching Demystified：控制流毛刺攻击与防护",
      "text": "DSN 2021。研究者结合指令集级故障模拟、ChipWhisperer 实测和 GLITCHRESISTOR 自动插桩工具，分析控制流毛刺在真实程序中的实际效果：评估单次与多次毛刺的成功率、可被利用的指令窗口，以及软件防护带来的性能开销。工作为“控制流完整性 vs 故障注入”提供了量化数据；实验基于常见微控制器平台，论文未强调单一芯片料号。<br><a href='https://doi.org/10.1109/DSN48987.2021.00051' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Glitching Demystified: Control-Flow Attacks and Defenses",
      "text": "DSN 2021. The researchers combined instruction-set fault simulation, ChipWhisperer experiments and the GLITCHRESISTOR automatic instrumentation tool to analyze the real-world effects of control-flow glitches: quantifying single- versus multi-glitch success rates, exploitable instruction windows and the performance overhead of software defenses. The work provides quantitative data for control-flow integrity versus fault injection; experiments ran on common microcontroller platforms without emphasizing a single part number.<br><a href='https://doi.org/10.1109/DSN48987.2021.00051' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 6
    },
    "zh": {
      "headline": "微控制器 Flash 的永久激光故障",
      "text": "NEWCAS 2021。Viera、Dutertre、Dumont 与 Moëllic 在 90 nm、Cortex-M3、128 kB Flash 微控制器的写操作期间实施激光故障注入，得到可重复的单比特 bit-reset 永久故障，并用约 15 µm 光斑将 Flash 中的 32 位密码逐位清零；论文未给商业料号。<br><a href='https://doi.org/10.1109/NEWCAS50681.2021.9462773' target='_blank'>论文</a> · <a href='https://hal.science/hal-03360634' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Permanent Laser Faults in Microcontroller Flash",
      "text": "NEWCAS 2021. Viera, Dutertre, Dumont and Moëllic injected a 90 nm Cortex-M3 microcontroller with 128 kB Flash during write operations, producing repeatable permanent single-bit bit-reset faults; a roughly 15 µm spot cleared a 32-bit Flash password bit by bit. No commercial part number is given.<br><a href='https://doi.org/10.1109/NEWCAS50681.2021.9462773' target='_blank'>Paper</a> · <a href='https://hal.science/hal-03360634' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 7
    },
    "zh": {
      "headline": "Security and Trust：安全令牌闪存擦除抑制",
      "text": "TCHES 2021（2021-07-09）。Schink、Wagner、Unterstein 与 Heyszl 对七款开源安全令牌进行实测，公开展示 STM32L422 等 MCU 的闪存擦除抑制：在 RDP 降级与 mass-erase 期间注入 EMFI，使调试保护降级而保留原有固件，进而提取令牌中的密钥。论文报告了七款开源安全令牌上的闪存擦除抑制测试结果。<br><a href='https://doi.org/10.46586/tches.v2021.i3.176-201' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Security and Trust: Flash-Erase Suppression on Security Tokens",
      "text": "TCHES 2021 (9 July 2021). Schink, Wagner, Unterstein and Heyszl examined seven open-source security tokens and publicly demonstrated flash-erase suppression on MCUs including the STM32L422: EMFI during the RDP downgrade/mass-erase sequence lowers debug protection while preserving the original firmware, enabling key extraction from the token. The paper reports flash-erase suppression measurements on seven open-source security tokens.<br><a href='https://doi.org/10.46586/tches.v2021.i3.176-201' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 8
    },
    "zh": {
      "headline": "C8051F34x：毛刺影响 Silicon Labs 代码保护",
      "text": "2021 年 8 月公开。debug-silicon 对 Silicon Labs C8051F340/C8051F34x 的专有 C2 调试接口进行了协议逆向、功耗分析与 ChipWhisperer 毛刺实验：一次成功的电压毛刺最多可读出 256 字节受保护 Flash，重复执行即可恢复整片代码。研究同时绕过了未授权代码读取限制与 C2 调试器读取限制，披露时间线显示 2021 年 6 月通知厂商、7 月获准公开。<br><a href='https://github.com/debug-silicon/C8051F34x_Glitch' target='_blank'>研究与代码</a>"
    },
    "en": {
      "headline": "C8051F34x: Testing Silicon Labs Code Protection with Glitches",
      "text": "Publicly released in August 2021. debug-silicon reverse-engineered Silicon Labs' proprietary C2 debug interface and used power analysis plus ChipWhisperer glitching against the C8051F340/C8051F34x: each successful voltage glitch exposes up to 256 bytes of protected Flash, so repeated attempts recover the entire code image. The work bypasses both untrusted-code restrictions and external C2-debugger read protection; its disclosure log records vendor notification in June and publication clearance in July 2021.<br><a href='https://github.com/debug-silicon/C8051F34x_Glitch' target='_blank'>Research and code</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 8
    },
    "zh": {
      "headline": "Hacking the Apple AirTags：故障注入提取固件",
      "text": "DEF CON 29，2021 年 8 月。Thomas Roth 在 Apple AirTag 的 Nordic nRF52832 微控制器上实施电压故障注入，绕过 APPROTECT 调试保护恢复 SWD 访问，随后读取、修改并写回固件，演示了修改 NFC 链接等定制行为。该案例说明即便 AirTag 这类小型消费设备，其调试保护也挡不住低成本毛刺攻击；研究基于此前公开的 nRF52 APPROTECT 绕过技术。<br><a href='https://www.youtube.com/watch?v=paxErRRsrTU' target='_blank'>演讲录像</a> · <a href='https://defcon.org/html/defcon-29/dc-29-schedule.html' target='_blank'>DEF CON 29 日程</a>"
    },
    "en": {
      "headline": "Hacking the Apple AirTags with Fault Injection",
      "text": "DEF CON 29, August 2021. Thomas Roth performed voltage fault injection on the Nordic nRF52832 microcontroller inside Apple AirTag, bypassing APPROTECT to restore SWD debug access, then read, modified and reflashed the firmware, demonstrating customized behavior such as altered NFC links. The case shows even small consumer devices like AirTag are not protected against low-cost glitching, building on previously published nRF52 APPROTECT bypass techniques.<br><a href='https://www.youtube.com/watch?v=paxErRRsrTU' target='_blank'>Talk video</a> · <a href='https://defcon.org/html/defcon-29/dc-29-schedule.html' target='_blank'>DEF CON 29 schedule</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 8
    },
    "zh": {
      "headline": "VoltPillager：硬件 SVID 攻击复活 Plundervolt",
      "text": "USENIX Security 2021。Intel 用微码禁用了 MSR 欠压接口；Chen、Vasilakis、Murdock 等人在 SVID 总线上连接约 30 美元的 Teensy，伪造调压指令对 Intel Core i3-7100、i3-9100 和 i3-7100U 平台实施硬件欠压，影响 SGX 并提取飞地密钥。论文记录了通过 SVID 总线实施硬件欠压并影响 SGX 的实验结果。<br><a href='https://www.usenix.org/conference/usenixsecurity21/presentation/chen-zitai' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "VoltPillager: $30 Hardware Revives SGX Undervolting",
      "text": "USENIX Security 2021. Intel locked down the MSR undervolting interface with microcode to stop Plundervolt. Chen, Vasilakis, Murdock et al. connected a ~$30 Teensy to the SVID bus between CPU and voltage regulator; it forged voltage commands to undervolt Intel Core i3-7100, i3-9100 and i3-7100U platforms in hardware, affecting SGX and extracting enclave keys. The paper records hardware undervolting over the SVID bus and its effect on SGX.<br><a href='https://www.usenix.org/conference/usenixsecurity21/presentation/chen-zitai' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 9
    },
    "zh": {
      "headline": "不同架构 SoC 的 EM 故障模型",
      "text": "FDTC 2021。Trouchkine、Bouffard 与 Clediere 在 Broadcom BCM2837（Raspberry Pi 3 的 ARM Cortex-A53 SoC）和 Intel Core i3-6100T 上使用相同 EMFI 方法做对比实验，刻画 ARM 与 x86 两类复杂架构在电磁故障下的不同故障模型，并用 OpenSSL 的 RSA/AES 实现评估故障对真实密码库的影响。研究说明 EMFI 故障模型具有架构相关性，不能跨平台直接套用。<br><a href='https://doi.org/10.1109/FDTC53659.2021.00014' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "EM Fault Models across SoCs and ISAs",
      "text": "FDTC 2021. Trouchkine, Bouffard and Clediere applied the same EMFI method to the Broadcom BCM2837 (the ARM Cortex-A53 SoC of the Raspberry Pi 3) and an Intel Core i3-6100T, characterizing how the fault models of these two complex architectures differ under electromagnetic injection, and evaluated the impact on real crypto libraries via OpenSSL's RSA/AES implementations. The study shows EMFI fault models are architecture-dependent and cannot be transferred across platforms blindly.<br><a href='https://doi.org/10.1109/FDTC53659.2021.00014' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 9
    },
    "zh": {
      "headline": "激光故障注入 32 位 MCU 指令流水线",
      "text": "FDTC 2021。Vanthanh Khuat、Jean-Luc Danger 与 Jean-Max Dutertre 在 Microchip SAMD21G18A（Cortex-M0+）上沿 Flash 接口、AHB 总线和核心流水线布置激光故障点，观察到块重放、两条指令重放和单条指令跳过。<br><a href='https://doi.org/10.1109/FDTC53659.2021.00020' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Laser Fault Injection in a 32-bit MCU Pipeline",
      "text": "FDTC 2021. Vanthanh Khuat, Jean-Luc Danger and Jean-Max Dutertre placed laser-fault points along the Flash interface, AHB bus and execution pipeline of a Microchip SAMD21G18A (Cortex-M0+), observing block replay, two-instruction replay and single-instruction skips.<br><a href='https://doi.org/10.1109/FDTC53659.2021.00020' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 9
    },
    "zh": {
      "headline": "NVIDIA Tegra X2：电压毛刺攻击",
      "text": "FDTC 2021。Otto Bittner、Thilo Krachenfels、Andreas Galauner 与 Jean-Pierre Seifert 在 NVIDIA Tegra X2（Parker）SoC、Jetson TX2 平台上实施电压故障注入：重新启用隐藏 bootloader 后，可执行最高权限代码并提取 iROM、后续启动阶段解密密钥。论文还说明该 SoC 用于 NVIDIA DRIVE PX 2 等汽车/机器人平台。<br><a href='https://doi.org/10.1109/FDTC53659.2021.00021' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "NVIDIA Tegra X2: Voltage-Glitch Attack",
      "text": "FDTC 2021. Otto Bittner, Thilo Krachenfels, Andreas Galauner and Jean-Pierre Seifert fault-injected the NVIDIA Tegra X2 (Parker) SoC on a Jetson TX2 platform: re-enabling a hidden bootloader gives highest-privilege code execution and exposes the iROM and keys used to decrypt later boot stages. The paper notes the SoC's use in platforms such as NVIDIA DRIVE PX 2 for automotive and robotic systems.<br><a href='https://doi.org/10.1109/FDTC53659.2021.00021' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2021,
      "month": 11
    },
    "zh": {
      "headline": "One Glitch to Rule Them All：AMD SEV 故障注入研究",
      "text": "ACM CCS 2021。Buhren、Jacob、Krachenfels 与 Seifert（TU 柏林）对 AMD 安全处理器（PSP，Zen 1–3 全系列）的启动 ROM 签名校验实施一次电压毛刺，即在 PSP 上获得代码执行 —— 进而解密 SEV/SEV-ES/SEV-SNP 保护的虚拟机内存、提取 VCEK 背书密钥并伪造远程证明，在所测试的 Zen 1–3 平台上绕过 AMD 加密虚拟化的关键保护；论文未列出单一芯片料号。PSP 启动 ROM 无法通过固件更新修复；论文报告了 Zen 1–3 平台上的实验结果。<br><a href='https://arxiv.org/abs/2108.04575' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "One Glitch to Rule Them All: AMD SEV Fault-Injection Study",
      "text": "ACM CCS 2021. Buhren, Jacob, Krachenfels and Seifert (TU Berlin) hit the AMD Secure Processor's (PSP) boot-ROM signature check with a single voltage glitch to gain code execution on the PSP across Zen 1–3 — then decrypted SEV/SEV-ES/SEV-SNP virtual machine memory, extracted VCEK endorsement keys and forged remote attestation, bypassing key protections on the tested Zen 1–3 platforms. The PSP boot ROM cannot be patched through firmware updates; the paper does not list a single chip part number.<br><a href='https://arxiv.org/abs/2108.04575' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 3
    },
    "zh": {
      "headline": "多光斑激光故障注入：同时定位多个目标",
      "text": "CARDIS 2021（Springer 2022）。Colombier 等人用四束 980 nm 激光在 32 位 Cortex-M3、128 kB Flash 的 ChipWhisperer 目标板上同时注入多个时空分离故障，展示多指令/多数据位故障模型；目标芯片未给出商业料号。<br><a href='https://doi.org/10.1007/978-3-030-97348-3_9' target='_blank'>论文</a> · <a href='https://hal.science/hal-03353863' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Multi-Spot Laser Fault Injection",
      "text": "CARDIS 2021 (Springer 2022). Colombier and colleagues used four 980 nm laser spots to inject simultaneous, spatially separated faults into a 32-bit Cortex-M3 target with 128 kB Flash on a ChipWhisperer board, demonstrating multi-instruction and multi-data-bit fault models; no commercial part number is given.<br><a href='https://doi.org/10.1007/978-3-030-97348-3_9' target='_blank'>Paper</a> · <a href='https://hal.science/hal-03353863' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 3
    },
    "zh": {
      "headline": "瑞萨 RH850 电压毛刺研究",
      "text": "icanhack.nl，2022。Willem Melching 完成了首个公开的 RH850 电压毛刺攻击：目标是从 2021 款 Toyota RAV4 Prime 电动助力转向（EPS）模块拆下的 Renesas RH850/P1M-E（R7F701381），串行编程访问已完全禁用。攻击者在最后一个同步命令字节到芯片应答之间约 100 µs 的窗口内，用 Raspberry Pi Pico 驱动 N 沟道 FET 对两个 VCL 引脚做 crowbar 拉低；约一天的参数搜索后，成功的毛刺使芯片跳过访问权限检查进入命令等待状态，完整固件通过标准读存储器命令读出。<br><a href='https://icanhack.nl/knowledge-base/existing-research/fault-injection/' target='_blank'>研究整理</a>"
    },
    "en": {
      "headline": "Public Renesas RH850 Glitch Study (Toyota EPS)",
      "text": "icanhack.nl, 2022. Willem Melching carried out the first public voltage-glitch attack on RH850: the target was a Renesas RH850/P1M-E (R7F701381) pulled from the electric power-steering module of a 2021 Toyota RAV4 Prime, with serial programmer access fully disabled. In the ~100 µs window between the last synchronize-command byte and the chip's reply, a Raspberry Pi Pico driving N-channel FETs crowbarred both VCL pins; after about a day of parameter search, a successful glitch pushed the chip into its command-waiting phase regardless of the access check, and the full firmware came out over standard read-memory commands.<br><a href='https://icanhack.nl/knowledge-base/existing-research/fault-injection/' target='_blank'>Research summary</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 6
    },
    "zh": {
      "headline": "毛刺 OTP 数据传输与 SoC 安全配置",
      "text": "hardwear.io USA 2022。Raelize 测试 OTP/eFuse 安全配置从存储到使用点的传输阶段：许多 SoC 在启动时把 OTP 中的安全启动锁定、调试端口禁用等配置搬运到影子寄存器，在传输瞬间注入电压毛刺可改变最终生效值，从而重新打开调试口或解除启动锁定。公开演示未列出具体 SoC 料号，议题同时讨论了传输路径加密/校验等防护设计。<br><a href='https://raelize.com/upload/research/2022/hardwear_io_US2022_-_Breaking_SoC_Security_by_Glitching_OTP_Data_Transfers_v1.0.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Glitching OTP Data Transfers in SoCs",
      "text": "hardwear.io USA 2022. Raelize attacked the transfer stage of OTP/eFuse security configuration: many SoCs copy secure-boot lock and debug-disable settings from OTP into shadow registers at boot, and a voltage glitch timed at the transfer changes the effective values — re-opening debug ports or lifting boot locks. No specific SoC part number was named in the public demo; the talk also discusses defenses such as protecting and checking the transfer path.<br><a href='https://raelize.com/upload/research/2022/hardwear_io_US2022_-_Breaking_SoC_Security_by_Glitching_OTP_Data_Transfers_v1.0.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 7
    },
    "zh": {
      "headline": "现代多核 SoC 上的电磁故障注入",
      "text": "MCH 2022。Volokitin 与 Loftus 对运行在 GHz 频率的现代 Arm 多核 SoC 实施电磁故障注入，比较高频 SoC 与传统微控制器、安全元件（Secure Element）在故障效果上的差异，并讨论工作频率、电源网络复杂度对攻击效率的影响。实验表明高频并不天然免疫 EMFI，但参数搜索空间显著不同；公开议题未列出具体 SoC 料号。<br><a href='https://media.ccc.de/v/mch2022-279-fault-injection-on-a-modern-multicore-system-on-chip' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "Fault Injection on a Modern Multicore SoC",
      "text": "MCH 2022. Volokitin and Loftus performed EMFI on a modern GHz-class multi-core Arm SoC, comparing fault effects against traditional microcontrollers and Secure Elements, and discussed how operating frequency and power-network complexity affect attack efficiency. The experiments show high frequency does not inherently immunize a chip against EMFI, though the parameter search space differs markedly; no specific SoC part number was named in the public talk.<br><a href='https://media.ccc.de/v/mch2022-279-fault-injection-on-a-modern-multicore-system-on-chip' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 8
    },
    "zh": {
      "headline": "Glitched on Earth by Humans（SpaceX Starlink）",
      "text": "Black Hat USA 2022（DEF CON 30）。Lennert Wouters 对 Starlink 用户终端的 STM GLLCCOCA6BF（CATSON）四核 Cortex-A53 SoC 实施 crowbar 电压故障注入；终端还包含 STM GLLBSUABBBA（SHIRAZ）数字波束成形器和 STSAFE-A110 安全元件。RP2040 modchip 使 BL1 跳过签名校验并获得 root。终端 PCB 的丝印是 “Made on Earth by humans”，modchip 改为 “Glitched on Earth by humans”。<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-Wouters-Glitched-On-Earth.pdf' target='_blank'>幻灯片</a>"
    },
    "en": {
      "headline": "Glitched on Earth by Humans (SpaceX Starlink)",
      "text": "Black Hat USA 2022 (DEF CON 30). Lennert Wouters voltage-glitched the Starlink user terminal's STM GLLCCOCA6BF (CATSON) custom quad-core Cortex-A53 SoC with a crowbar; the terminal also contains the STM GLLBSUABBBA (SHIRAZ) digital beamformer and an STSAFE-A110 secure element. An RP2040 modchip made BL1 skip signature verification and yielded root access. The terminal PCB says “Made on Earth by humans”; the modchip changes it to “Glitched on Earth by humans”.<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-Wouters-Glitched-On-Earth.pdf' target='_blank'>Slides</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 8
    },
    "zh": {
      "headline": "Unlimited Results：ESP32-V3 固件加密故障注入",
      "text": "Black Hat USA 2022。Karim M. Abdellatif、Olivier Hériveaux 与 Adrian Thillard 在 Espressif ESP32-V3 上组合使用电压毛刺与 EMFI，控制程序计数器，并在测试芯片上绕过部分固件保护、读取受保护内容。研究针对的是乐鑫为修复 ESP32 V1 eFuse 毛刺问题而推出的 V3 硅片修订版，演示了电压与电磁两种媒介的组合使用，并给出故障定位与参数搜索方法。<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-ABDELLATIF-Unlimited-Results-Breaking-Firmware-Encryption.pdf' target='_blank'>演讲幻灯</a>"
    },
    "en": {
      "headline": "Unlimited Results: Fault Injection on ESP32-V3 Firmware Encryption",
      "text": "Black Hat USA 2022. Karim M. Abdellatif, Olivier Hériveaux and Adrian Thillard combined voltage glitching with EMFI on the Espressif ESP32-V3, controlling the program counter and bypassing parts of the firmware protection on a test chip to read protected content. The work targets the V3 silicon revision Espressif released to fix the ESP32 V1 eFuse glitching issue, demonstrates the combined use of voltage and electromagnetic media, and documents fault localization and parameter search.<br><a href='https://i.blackhat.com/USA-22/Wednesday/US-22-ABDELLATIF-Unlimited-Results-Breaking-Firmware-Encryption.pdf' target='_blank'>Slides</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 9
    },
    "zh": {
      "headline": "故障注入模拟：攻击者如何翻转一位",
      "text": "Labortage 2022。Max Hoffmann 用故障模拟器穷举示例程序中所有可能的位翻转和指令故障，跟踪每一类故障对引导加载器、密码运算与控制流的影响路径，并讨论如何从模拟结果提炼不依赖具体芯片的通用防护方法。该议题的价值在于把“攻击者能翻转会怎样”变成可系统枚举的问题，为软件层对策设计提供依据。<br><a href='https://media.ccc.de/v/labortage2021-4221-but-what-if-the-attac' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "Simulating Fault Injection: What If an Attacker Flips a Bit?",
      "text": "Labortage 2022. Max Hoffmann used a fault simulator to exhaustively enumerate all possible bit flips and instruction faults in an example program, tracing each fault class's impact on bootloaders, cryptographic operations and control flow, and discussed how to distill chip-agnostic software defenses from simulation results. The talk's value lies in turning 'what if the attacker flips a bit' into a systematically enumerable question that informs software-level countermeasure design.<br><a href='https://media.ccc.de/v/labortage2021-4221-but-what-if-the-attac' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2022,
      "month": 10
    },
    "zh": {
      "headline": "EM-Fault It Yourself：攻击 AMD Secure Processor",
      "text": "PAINE 2022（2022 年 10 月 25 日）。Kuhnapfel、Buhren、Jacob、Krachenfels、Werling 与 Seifert 搭建可复现的自动化 EMFI 平台，并在 AMD Secure Processor（AMD-SP）上运行已发表的代码执行载荷、定位故障区域和攻击固件签名验证；全文未给出单一 CPU 料号。<br><a href='https://publica.fraunhofer.de/handle/publica/457189' target='_blank'>论文资料</a> · <a href='https://doi.org/10.1109/PAINE56030.2022.10014927' target='_blank'>DOI</a>"
    },
    "en": {
      "headline": "EM-Fault It Yourself: Attacking AMD Secure Processor",
      "text": "PAINE 2022 (25 October 2022). Kuhnapfel, Buhren, Jacob, Krachenfels, Werling and Seifert built an automated, reproducible EMFI platform, then used a published code-execution exploit to run payloads on the AMD Secure Processor (AMD-SP), map fault regions and attack firmware-signature verification; the paper does not give one CPU part number.<br><a href='https://publica.fraunhofer.de/handle/publica/457189' target='_blank'>Paper record</a> · <a href='https://doi.org/10.1109/PAINE56030.2022.10014927' target='_blank'>DOI</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 1
    },
    "zh": {
      "headline": "EMFI 攻击面高效探索",
      "text": "FDTC/CHES 2023。研究者将由探针位置、脉冲强度、持续时间和时序构成的高维 EMFI 参数空间形式化建模，提出高效探索攻击面的策略：用分阶段采样与故障反馈引导搜索，减少穷举实验次数并更快定位易受攻击的电路区域。与早期的遗传算法搜索相比，该方法进一步降低了实验成本；面向任意目标芯片的 EMFI 参数寻优，未限定单一芯片型号。<br><a href='https://doi.org/10.1007/978-3-031-29497-6_2' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Efficient Attack-Surface Exploration for EMFI",
      "text": "FDTC/CHES 2023. The researchers formalized the high-dimensional EMFI parameter space — probe position, pulse strength, duration and timing — and proposed an efficient attack-surface exploration strategy: staged sampling and fault-feedback-guided search reduce exhaustive experiments and locate vulnerable circuit regions faster. Compared with earlier genetic-algorithm searches the method further cuts experimental cost; it targets EMFI parameter optimization on arbitrary chips, with no single part number specified.<br><a href='https://doi.org/10.1007/978-3-031-29497-6_2' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 5
    },
    "zh": {
      "headline": "汽车安全启动的进化式故障参数搜索",
      "text": "Neural Network World 2023。Pozzobon、Weiß、Mottok 与 Matoušek 以 NXP MPC5748G 汽车微控制器为初始目标，使用遗传算法搜索汽车 ECU 安全启动更新流程的 EMFI 参数（位置、强度、时序），把人工数周的搜索压缩为自动化过程；论文报告搜索次数相较基线约减少两个数量级，并验证了找到的可利用故障能跳过固件签名校验。<br><a href='https://doi.org/10.14311/nnw.2023.33.020' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Evolutionary Fault-Parameter Search for Automotive Secure Boot",
      "text": "Neural Network World 2023. Pozzobon, Weiß, Mottok and Matoušek targeted the NXP MPC5748G automotive microcontroller, using a genetic algorithm to search EMFI parameters (position, strength, timing) against a secure-boot update flow of an automotive ECU, compressing weeks of manual search into an automated process; the paper reports roughly two orders of magnitude fewer trials than baseline, and the discovered exploitable faults skip firmware signature verification.<br><a href='https://doi.org/10.14311/nnw.2023.33.020' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 8
    },
    "zh": {
      "headline": "Back in the Driver’s Seat：电压毛刺 Tesla Autopilot",
      "text": "Black Hat USA 2023。TU Berlin 研究者（Werling、Buhren、Jacob、Seifert 等）对 Tesla Model 3/Y 车载信息娱乐计算机的安全启动实施电压毛刺，绕过签名校验后获得 root shell，进而读取硬件唯一认证密钥与车辆数据，并可激活付费软件功能；研究还讨论了车辆 TPM 证明链被攻破后的影响。公开演讲材料未给出具体芯片料号。<br><a href='https://www.youtube.com/watch?v=AgC9OiFrIPk' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "Back in the Driver's Seat: Glitching Tesla Autopilot",
      "text": "Black Hat USA 2023. TU Berlin researchers (Werling, Buhren, Jacob, Seifert et al.) voltage-glitched the secure boot of the Tesla Model 3/Y infotainment computer, bypassing signature verification to gain a root shell, then reading the hardware-unique attestation key and vehicle data, and even unlocking paid software features; the study also discusses the impact once the vehicle TPM attestation chain is broken. Public talk material gives no specific chip part number.<br><a href='https://www.youtube.com/watch?v=AgC9OiFrIPk' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 8
    },
    "zh": {
      "headline": "Oven Repair：故障注入维修三星烤箱",
      "text": "Black Hat USA 2023。Colin O'Flynn 对三星烤箱中的 Toshiba TMP91FW60 主控实施时钟故障注入，并结合功耗侧信道绕过 bootloader 的串口命令认证，执行 RAMCode，最终修改固件以改善加热控制并实时反馈温度。实验记录了 Toshiba TMP91FW60 的 bootloader 认证绕过、RAMCode 执行与固件修改。<br><a href='https://www.youtube.com/watch?v=ugHxUi_Ijso' target='_blank'>演讲录像</a>"
    },
    "en": {
      "headline": "Oven Repair: The Hardware Hacking Way",
      "text": "Black Hat USA 2023. Colin O'Flynn combined clock fault injection with power side-channel analysis against the Toshiba TMP91FW60 controller in a Samsung oven, bypassed bootloader authentication for serial commands, and executed RAMCode. The firmware was modified for heating control and live temperature feedback.<br><a href='https://www.youtube.com/watch?v=ugHxUi_Ijso' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 8
    },
    "zh": {
      "headline": "别忘了毛刺：闪存擦除抑制现场演示",
      "text": "Camp 2023。Marc 演示 flash-erase suppression（闪存擦除抑制）：在 MCU 将调试保护降级且准备执行 mass erase 的窗口注入毛刺，抑制擦除操作的同时完成保护降级，从而在保留原有 Flash 内容的情况下读取固件。议题现场演示了完整攻击流程，并讨论了不同厂商芯片上擦除时序窗口的差异；未限定单一芯片型号。<br><a href='https://media.ccc.de/v/camp2023-57401-unlock_the_door_to_my_secrets_but_don_t_forget_to_glitch' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "Unlock the Door to My Secrets: Do Not Forget to Glitch",
      "text": "Camp 2023. Marc demonstrated flash-erase suppression: glitching the window in which an MCU downgrades its debug protection and prepares a mass erase suppresses the erase while the downgrade completes, so the original Flash contents survive and the firmware can be read out. The talk walks through the full attack live and discusses how erase-timing windows differ across vendors' chips; no single chip model is targeted.<br><a href='https://media.ccc.de/v/camp2023-57401-unlock_the_door_to_my_secrets_but_don_t_forget_to_glitch' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 8
    },
    "zh": {
      "headline": "µ-Glitch：多重毛刺与 TrustZone-M",
      "text": "USENIX Security 2023。Saß、Mitev 与 Sadeghi 指出现有 FI 对策的一个限制：重复校验、冗余执行等防护几乎全部假设“单次故障”。他们的 µ-Glitch 平台以纳秒精度连续注入多次协调的电压故障，在 NXP LPC55S69、NXP RT6600、ST STM32L5 和 Atmel SAML11 等 TrustZone-M MCU 上测试多重故障；其中 LPC55S69 与 RT6600 的冗余比较和隔离机制被同时绕过。实验结果显示，多次协调故障可同时影响冗余比较与隔离机制；论文包含 Black Hat USA 2022 版本的演示记录。<br><a href='https://www.usenix.org/conference/usenixsecurity23/presentation/sass' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "µ-Glitch: Multi-Glitching TrustZone-M Protections",
      "text": "USENIX Security 2023. Saß, Mitev and Sadeghi exposed a limitation of existing FI countermeasures: redundant checks and duplicated execution almost all assume a single fault. Their µ-Glitch platform injects multiple coordinated voltage faults with nanosecond precision, bypassing redundancy comparisons and isolation on NXP LPC55S69, NXP RT6600, ST STM32L5 and Atmel SAML11 TrustZone-M MCUs; LPC55S69 and RT6600 showed bypasses of redundant comparisons and isolation. The experiments report coordinated multi-glitching effects on redundant comparisons and isolation; the paper includes the Black Hat USA 2022 demonstration record.<br><a href='https://www.usenix.org/conference/usenixsecurity23/presentation/sass' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 9
    },
    "zh": {
      "headline": "EMFI 影响汽车安全启动加载器",
      "text": "ASRG 2023。Weiß 与 Pozzobon 在 NXP MPC5748G 汽车网关微控制器的安全启动加载器上用 EMFI 损坏栈指针，使程序流偏离正常路径并绕过固件签名校验；攻击的位置、强度和时序参数用自动化工具 EFISSA 搜索。该工作展示了“栈指针损坏”这一区别于经典指令跳过的 EMFI 利用原语，并给出其在真实汽车安全启动场景中的成功率数据。<br><a href='https://sos.asrg.io/wp-content/uploads/2023/09/Dr.-Nils-Weis-and-Enrico-Pozzobon_Presentation.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Fault Injection Attacks on Secure Automotive Bootloaders",
      "text": "ASRG 2023. Weiß and Pozzobon used EMFI to corrupt the stack pointer in the secure bootloader of an NXP MPC5748G automotive gateway microcontroller, diverting program flow past the firmware signature check; the position, strength and timing parameters were found with the automated tool EFISSA. The work showcases stack-pointer corruption as an EMFI exploitation primitive distinct from classic instruction skipping, with success-rate data on a real automotive secure-boot target.<br><a href='https://sos.asrg.io/wp-content/uploads/2023/09/Dr.-Nils-Weis-and-Enrico-Pozzobon_Presentation.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 10
    },
    "zh": {
      "headline": "时钟毛刺下的微架构行为",
      "text": "CARDIS 2023。Alshaer 等人从流水线、缓存和取指路径三个层面分析时钟毛刺导致的异常微架构行为，解释黑盒实验中难以归因的指令跳过与控制流变化——例如取指队列中残留旧指令被执行、分支行为与预期取指不一致等现象，并讨论这些发现对故障模型假设和防护设计的影响。研究也解释了为何相同毛刺参数在不同批次芯片上表现不一；论文未限定单一芯片型号。<br><a href='https://doi.org/10.1007/978-3-031-54409-5_1' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Microarchitectural Behavior under Clock-Glitch FI",
      "text": "CARDIS 2023. Alshaer et al. analyzed anomalous microarchitectural behavior under clock glitching at three levels — pipeline, cache and instruction-fetch path — explaining instruction skips and control-flow changes that black-box experiments struggle to attribute, such as stale instructions lingering in the fetch queue being executed and branch behavior diverging from expected fetches, and discussed implications for fault-model assumptions and countermeasure design. The work also explains why identical glitch parameters behave differently across chip batches; no single chip model is specified.<br><a href='https://doi.org/10.1007/978-3-031-54409-5_1' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 10
    },
    "zh": {
      "headline": "断电器件的 X 射线非易失存储故障注入",
      "text": "PAINE 2023。Grandamme、Bossuet 与 Dutertre 对断电状态的 32 位 Cortex-M3、128 kB Flash 微控制器实施 X 射线照射；Flash 出现按总电离剂量增长的 bit-set 故障，部分故障可通过加热恢复，研究还记录了安全位与存储擦除状态的变化。论文未给商业料号。<br><a href='https://doi.org/10.1109/PAINE58317.2023.10318018' target='_blank'>论文</a> · <a href='https://hal.science/hal-04500202v1/document' target='_blank'>HAL PDF</a>"
    },
    "en": {
      "headline": "X-Ray Fault Injection in Flash on Powered-Off MCUs",
      "text": "PAINE 2023. Grandamme, Bossuet and Dutertre irradiated a powered-off 32-bit Cortex-M3 microcontroller with 128 kB Flash. Flash developed dose-dependent bit-set faults; some faults recovered after heating, and the study recorded changes to security bits and erase-state behavior. No commercial part number is given.<br><a href='https://doi.org/10.1109/PAINE58317.2023.10318018' target='_blank'>Paper</a> · <a href='https://hal.science/hal-04500202v1/document' target='_blank'>HAL PDF</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 11
    },
    "zh": {
      "headline": "faulTPM：提取 AMD fTPM 密钥材料",
      "text": "EuroS&P 2023。Hans Niklas Jacob、Christian Werling、Nils Buhren 与 Jean-Pierre Seifert 在 AMD Zen 2/Zen 3 平台对 PSP 实施电压毛刺，在取得 PSP 代码执行后提取 fTPM 背书密钥和存储密钥（CVE-2023-20589）。<br><a href='https://doi.org/10.1109/EuroSP57164.2023.00069' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "faulTPM: Extracting AMD fTPM Key Material",
      "text": "EuroS&P 2023. Hans Niklas Jacob, Christian Werling, Nils Buhren and Jean-Pierre Seifert voltage-glitched the PSP on AMD Zen 2/Zen 3 platforms, then extracted fTPM endorsement and storage keys after obtaining PSP code execution (CVE-2023-20589).<br><a href='https://doi.org/10.1109/EuroSP57164.2023.00069' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2023,
      "month": 12
    },
    "zh": {
      "headline": "Who Watches the Watchers：攻击毛刺检测器",
      "text": "TCHES 2024（在线发表于 2023-12）。Askeland、Nikova 与 Nikov 分析三类时序违规检测器的工作原理，展示四种高速时钟毛刺攻击可在 FPGA 上注入故障而不触发检测器：毛刺被隐藏在检测器的时间分辨率或采样盲区之内。研究直接挑战了“检测器可替代其他对策”的假设，并为毛刺检测器的设计改进给出了方向。<br><a href='https://doi.org/10.46586/tches.v2024.i1.157-179' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Who Watches the Watchers: Attacking Glitch Detectors",
      "text": "TCHES 2024 (published online Dec 2023). Askeland, Nikova and Nikov analyzed how three classes of timing-violation detectors work and demonstrated four fast clock-glitch attacks that inject faults on FPGAs without triggering them: the glitches hide inside the detectors' temporal resolution or sampling blind spots. The study directly challenges the assumption that detectors can replace other countermeasures, and points out directions for improving glitch-detector design.<br><a href='https://doi.org/10.46586/tches.v2024.i1.157-179' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 1
    },
    "zh": {
      "headline": "ESP32-C3/C6：故障注入诱发 Boot ROM 缓冲区溢出",
      "text": "Courk's Blog，2024-01-08。针对 Espressif ESP32-C3 与 ESP32-C6（RISC-V 内核），在 Boot ROM 从 Flash 加载镜像头的阶段注入电压毛刺，把 memcpy 的长度参数从 0x8 改为 0x208，形成可控栈溢出并覆盖返回地址，最终在 Boot ROM 上下文中执行任意代码。研究还指出了 ESP32-C3 与 ESP32-C6 在外部 Flash 控制条件上的差异，并给出具体的毛刺点位与参数。<br><a href='https://courk.cc/esp32-c3-c6-fault-injection' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "ESP32-C3/C6: Boot-ROM Buffer Overflow via Fault Injection",
      "text": "Courk's Blog, 2024-01-08. Against the Espressif ESP32-C3 and ESP32-C6 (RISC-V cores), a voltage glitch injected while the Boot ROM loads the image header from Flash changes a memcpy length parameter from 0x8 to 0x208, producing a controllable stack overflow that overwrites the return address and yields arbitrary code execution in the Boot ROM context. The write-up also notes the ESP32-C3 and ESP32-C6 differ in external-Flash control conditions, and documents concrete glitch points and parameters.<br><a href='https://courk.cc/esp32-c3-c6-fault-injection' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 2
    },
    "zh": {
      "headline": "电压毛刺解锁 RH850/F1L 车身控制器",
      "text": "FEV Secure Lab（Sunny 与 Zari）在车身控制模块（BCM）的 RH850/F1L 上进行电压毛刺测试：使用数百美元级的 ChipWhisperer Lite 对 ISOVCL 引脚注入毛刺，绕过 16 字节 IDCODE 校验，提取 Flash 内容并恢复诊断安全访问密钥。文章报告了 RH850/F1L 的 IDCODE 绕过、Flash 读取和诊断安全访问密钥恢复。<br><a href='https://jerinsunny.github.io/blogs/2024/02/14/rh850-voltage-glitching.html' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Unlocking Renesas RH850/F1L with Voltage Glitching",
      "text": "FEV Secure Lab (Sunny & Zari) tested voltage glitching on the RH850/F1L in a body-control module (BCM). Using a ChipWhisperer Lite and the ISOVCL pin, they bypassed the 16-byte IDCODE check, extracted flash contents and recovered diagnostic security-access keys. The report records RH850/F1L IDCODE bypass, Flash extraction and diagnostic security-access-key recovery.<br><a href='https://jerinsunny.github.io/blogs/2024/02/14/rh850-voltage-glitching.html' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 3
    },
    "zh": {
      "headline": "Unlock the Door：多厂商闪存擦除抑制研究",
      "text": "TCHES 2024（2024-03-12）。Schink 等人将闪存擦除抑制研究扩展到多厂商目标：在 STMicroelectronics STM32L422、STM32L1 系列、Artery AT32 与 GigaDevice GD32 微控制器上量化 RDP 降级期间 EMFI 抑制 mass-erase 的成功率、设备间差异和对芯片的损伤风险，并给出可复现的实验流程。研究说明擦除抑制不是单一厂商的个案，而是跨厂商存在的系统性问题。<br><a href='https://doi.org/10.46586/tches.v2024.i2.88-129' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Unlock the Door: A Multi-Vendor Study of Flash-Erase Suppression",
      "text": "TCHES 2024 (2024-03-12). Schink et al. extended flash-erase-suppression research to multiple vendors: quantifying the success rate, device-to-device variance and chip-damage risk of EMFI-based mass-erase suppression during RDP downgrade on STMicroelectronics STM32L422, STM32L1-series, Artery AT32 and GigaDevice GD32 microcontrollers, with a reproducible experimental procedure. The study shows erase suppression is not a single-vendor anomaly but a systemic, cross-vendor problem.<br><a href='https://doi.org/10.46586/tches.v2024.i2.88-129' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 4
    },
    "zh": {
      "headline": "同步时钟毛刺的物理故障模型",
      "text": "CARDIS 2024。研究者结合实验与电路级仿真分析同步时钟毛刺（SCG）在 D 触发器中的失效模式，检验时序故障模型（setup/hold 违例）与采样故障模型对 EMFI 诱发时钟扰动的解释能力，系统比较了两类模型预测与实测故障的吻合度，为毛刺检测器和防护电路设计提供器件级依据；研究基于可控测试结构，未限定单一商业芯片型号。<br><a href='https://doi.org/10.1007/978-3-031-57543-3_1' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "Characterizing Synchronous Clock-Glitch Faults",
      "text": "CARDIS 2024. The researchers combined experiments with circuit-level simulation to analyze failure modes of synchronous clock glitching (SCG) in D flip-flops, testing how well the timing-fault model (setup/hold violations) and the sampling-fault model explain EMFI-induced clock disturbances, systematically comparing each model's predictions against measured faults to provide device-level evidence for glitch-detector and protection-circuit design; the study used controllable test structures rather than a specific commercial chip.<br><a href='https://doi.org/10.1007/978-3-031-57543-3_1' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 8
    },
    "zh": {
      "headline": "ACE up the Sleeve：EMFI 攻入 iPhone 15 USB-C 控制器",
      "text": "DEF CON 32 / 38C3。Thomas Roth 对 iPhone 15 使用的 Apple ACE3 USB-C 控制器进行架构逆向：先通过固件分析与总线行为观察理解其专有指令集，再获得 JTAG 访问，最后用电磁故障注入（EMFI）绕过固件认证，在该控制器上运行修改后的固件。议题完整展示了专有小型安全芯片同样可被系统化逆向与毛刺攻破的流程，并讨论了 ACE 在苹果生态中的安全角色。<br><a href='https://www.youtube.com/watch?v=-uxmmlQr3lA' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "ACE up the Sleeve: Hacking Apple's USB-C Controller",
      "text": "DEF CON 32 / 38C3. Thomas Roth reverse-engineered the Apple ACE3 USB-C controller used in the iPhone 15: first understanding its proprietary instruction set through firmware analysis and bus-level observation, then gaining JTAG access, and finally bypassing firmware authentication with electromagnetic fault injection (EMFI) to run modified firmware on the controller. The talk demonstrates the full pipeline by which a proprietary small security chip can be systematically reverse-engineered and glitched, and discusses the ACE's security role in the Apple ecosystem.<br><a href='https://www.youtube.com/watch?v=-uxmmlQr3lA' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 8
    },
    "zh": {
      "headline": "Ops! It Is JTAG's Fault：攻破 ST SPC58",
      "text": "Black Hat USA 2024。GoGoByte 在 STMicroelectronics SPC58 汽车微控制器上研究其双重 JTAG 密码比较机制：芯片分两次比对密码以抵抗单次毛刺，攻击者则用多次毛刺分别抑制两次比较，最终获得代码执行和固件访问。该案例说明“比较两次”这类简单重复对策可被多重故障系统性绕过，与 µ-Glitch 等多故障研究相互印证。<br><a href='https://blackhat.com/archive/usa/2024/briefings/schedule/index.html' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Ops! It Is JTAG's Fault — Black Hat USA 2024",
      "text": "Black Hat USA 2024. GoGoByte examined the double JTAG password comparison on the STMicroelectronics SPC58 automotive microcontroller: the chip compares the password twice to resist single glitches, but the attackers suppressed both comparisons with multiple glitches, ultimately gaining code execution and firmware access. The case shows simple repeat-based defenses like 'compare twice' can be systematically defeated by multiple faults, corroborating multi-fault research such as µ-Glitch.<br><a href='https://blackhat.com/archive/usa/2024/briefings/schedule/index.html' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 8
    },
    "zh": {
      "headline": "WOOT 2024：故障注入计算控制 ESP32-V3 程序计数器",
      "text": "USENIX WOOT 2024。Delvaux、Mune、Romero 与 Timmers 在带有故障注入防护的 ESP32-V3 上同时绕过 Secure Boot 与 Flash Encryption：先篡改加密 Flash 中的内容，使启动加载器签名 CRC 的 32 位结果变成任意值，再用一次电磁毛刺把该值装入 CPU 的程序计数器（PC），跳入 ROM Download Mode，进而执行任意代码并读取未加密 Flash。论文记录了 Espressif 公告 AR2023-005 与 CVE-2023-35818。<br><a href='https://www.usenix.org/conference/woot24/presentation/delvaux' target='_blank'>论文与演讲</a>"
    },
    "en": {
      "headline": "WOOT 2024: Program-Counter Control on ESP32-V3",
      "text": "USENIX WOOT 2024. Delvaux, Mune, Romero and Timmers bypassed both Secure Boot and Flash Encryption on the fault-injection-hardened ESP32-V3: they altered encrypted flash so the bootloader-signature CRC produced an attacker-chosen 32-bit value, then used a single EM glitch to load that value into the CPU program counter and jump into ROM Download Mode for arbitrary code execution and access to plaintext flash. The paper records Espressif advisory AR2023-005 and CVE-2023-35818.<br><a href='https://www.usenix.org/conference/woot24/presentation/delvaux' target='_blank'>Paper and talk</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 9
    },
    "zh": {
      "headline": "PoP DRAM：用电磁脉冲诱发 SoC 电压毛刺",
      "text": "FDTC 2024。针对 PoP（Package-on-Package）封装的移动 SoC，研究者移除叠层 DRAM 以暴露 SoC 本体，并比较三种注入方式：常规 EMFI、常规电压毛刺、以及由 EM 脉冲在供电轨上诱发的电压毛刺；实验显示第三种的故障特征更接近 EMFI，说明电磁与电压两种媒介可在同一目标上互补使用。论文未指定单一 SoC 料号。<br><a href='https://doi.org/10.1109/FDTC64268.2024.00010' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "PoP DRAM: EM-Induced Voltage Glitches on SoCs",
      "text": "FDTC 2024. Targeting mobile SoCs in PoP (Package-on-Package) packaging, the researchers removed the stacked DRAM to expose the SoC and compared three injection methods: conventional EMFI, conventional voltage glitching, and voltage glitches induced on the supply rail by EM pulses; the third method's fault signatures proved closer to EMFI, showing electromagnetic and voltage media can complement each other on the same target. No single SoC part number is specified.<br><a href='https://doi.org/10.1109/FDTC64268.2024.00010' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 9
    },
    "zh": {
      "headline": "断电 STM32F1 的激光故障与持久性分析",
      "text": "TCHES 2024。Viera 等人在断电的 STMicroelectronics STM32F1 上对 128 kB Flash 进行激光注入，建立单向 bit-set 故障模型，并在 Flash 中的 AES S 盒上实施持久性故障分析以恢复 128 位密钥；实验使用四颗器件。<br><a href='https://doi.org/10.46586/tches.v2024.i4.425-450' target='_blank'>论文</a> · <a href='https://hal.science/hal-04642748' target='_blank'>HAL 条目</a>"
    },
    "en": {
      "headline": "Powered-Off STM32F1: Laser Faults in Flash",
      "text": "TCHES 2024. Viera and colleagues used laser injection on the 128 kB Flash of an unpowered STMicroelectronics STM32F1, established a unidirectional bit-set model and applied persistent fault analysis to the AES S-box to recover a 128-bit key; four devices were tested.<br><a href='https://doi.org/10.46586/tches.v2024.i4.425-450' target='_blank'>Paper</a> · <a href='https://hal.science/hal-04642748' target='_blank'>HAL record</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 10
    },
    "zh": {
      "headline": "EMFI 修改 SPC5606B 审查配置",
      "text": "2024 年 10 月通报 NXP/ST PSIRT。Jan Van den Herrewegen 与 Faheem Adam 在日产 Hands-Free 模块的 STMicroelectronics SPC5606B 汽车微控制器上，利用上电复位（POR）阶段的功耗侧信道定位 SSCM 从 shadow Flash 加载审查（censorship）配置的约 4 µs 活动窗口，并用 EMFI 修改生效配置。值得注意的是：此前 O'Flynn 的 BAM 密码毛刺对这类采用公共密码的 chip-lockout 配置无效，本研究补上了这一空白。<br><a href='https://www.linkedin.com/posts/faheem-adam-b19a66a_emfi-to-disable-censorship-nxp-spc5606b-mcus-activity-7273372256288821249-ZrbH' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Modifying SPC5606B Censorship Configuration via EMFI",
      "text": "Reported to NXP/ST PSIRT in October 2024. Jan Van den Herrewegen and Faheem Adam used a power side channel during power-on reset (POR) on the STMicroelectronics SPC5606B automotive microcontroller from a Nissan Hands-Free module, locating the ~4 µs activity window in which the SSCM loads its censorship configuration from shadow Flash, and altered the effective configuration with EMFI. Notably, O'Flynn's earlier BAM password glitch does not work against this chip-lockout configuration, which uses the public password — this study closes that gap.<br><a href='https://www.linkedin.com/posts/faheem-adam-b19a66a_emfi-to-disable-censorship-nxp-spc5606b-mcus-activity-7273372256288821249-ZrbH' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 12
    },
    "zh": {
      "headline": "From Fault Injection to RCE：Chipolo ONE",
      "text": "38C3 2024。Nicolas Oberli 研究 Chipolo ONE 蓝牙追踪器，其核心为 Dialog（现 Renesas）DA14580：通过故障注入绕过芯片调试锁定并提取固件，随后分析固件中的弱认证和缓冲区溢出，实现蓝牙远程代码执行。议题完整呈现了从物理层故障注入到协议层漏洞利用的链式攻击——先拿到固件，再在其中发现可远程触发的内存破坏漏洞，最终无需物理接触即可控制设备。<br><a href='https://media.ccc.de/v/38c3-from-fault-injection-to-rce-analyzing-a-bluetooth-tracker' target='_blank'>议题录像与资料</a>"
    },
    "en": {
      "headline": "From Fault Injection to RCE: Chipolo ONE",
      "text": "38C3 2024. Nicolas Oberli examined the Chipolo ONE Bluetooth tracker, built around the Dialog (now Renesas) DA14580: fault injection bypassed the chip's debug lock to extract the firmware, after which analysis of the firmware's weak authentication and a buffer overflow yielded Bluetooth remote code execution. The talk presents the full chained attack — from physical-layer fault injection to protocol-layer exploitation: get the firmware first, find a remotely triggerable memory-corruption bug in it, and ultimately control the device without any physical access.<br><a href='https://media.ccc.de/v/38c3-from-fault-injection-to-rce-analyzing-a-bluetooth-tracker' target='_blank'>Talk and materials</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 12
    },
    "zh": {
      "headline": "RP2350：安全启动毛刺攻击",
      "text": "38C3 2024。Aedan Cullen 研究 Raspberry Pi RP2350 的安全架构：梳理其启动复位流程、Cortex-M33 内核、OTP 存储与内置毛刺检测器，并展示官方 Hacking Challenge 中通过复位阶段故障注入破坏启动认证的路径。议题还讨论了 RP2350 把毛刺检测器纳入芯片设计的意义及其被绕过的方式，是对该芯片安全特性的早期系统性公开分析。<br><a href='https://media.ccc.de/v/38c3-hacking-the-rp2350' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "RP2350: Fault Injection Against Secure Boot",
      "text": "38C3 2024. Aedan Cullen examined the Raspberry Pi RP2350's security architecture: walking through its boot and reset flow, Cortex-M33 cores, OTP storage and built-in glitch detectors, and demonstrating how reset-stage fault injection defeated boot authentication in the official Hacking Challenge. The talk also discusses the significance of RP2350's on-chip glitch detectors and how they were bypassed — an early systematic public analysis of the chip's security features.<br><a href='https://media.ccc.de/v/38c3-hacking-the-rp2350' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2024,
      "month": 12
    },
    "zh": {
      "headline": "STM32F4：PicoGlitcher 复现 RDP 固件读取",
      "text": "2024 年末。Matthias Kesenheimer 在 STM32F401 Black Pill 的 USART Bootloader Read Memory（0x11）路径注入 VCAP 毛刺，绕过 RDP1 并分块读取 Flash；相关项目记录了 STM32F40x/F412/F42x 的参数搜索。<br><a href='https://fault-injection-library.readthedocs.io/en/latest/examples/' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "STM32F4: Reproducible RDP Dumping with PicoGlitcher",
      "text": "Late 2024. Matthias Kesenheimer injected VCAP glitches into the USART Bootloader Read Memory (0x11) path on an STM32F401 Black Pill, bypassed RDP1 and read Flash in blocks; related projects document parameter searches for STM32F40x/F412/F42x.<br><a href='https://fault-injection-library.readthedocs.io/en/latest/examples/' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 5
    },
    "zh": {
      "headline": "STM32L051：不擦除固件的 RDP 降级",
      "text": "SySS 公告 SYSS-2025-033（2025-05-23 发布）。针对 STM32L051K8 的 RDP1→RDP0 降级流程，在自动擦除开始前注入电压毛刺，抑制 Flash erase，同时恢复调试读取权限；公告记录了最高约 30% 的成功率，并明确将其归类为 flash-erase suppression attack。6 月实验文章记录了 PicoGlitcher 与 findus 的复现实验。<br><a href='https://blog.syss.com/posts/voltage-glitching-the-stm32l05-microcontroller/' target='_blank'>实验文章</a>"
    },
    "en": {
      "headline": "STM32L051: RDP Downgrade without Erasing Flash",
      "text": "SySS advisory SYSS-2025-033 (first public disclosure on 23 May 2025). A voltage glitch is injected just before the automatic erase in the STM32L051K8 RDP1→RDP0 downgrade, suppressing Flash erase while restoring debug read access; the advisory reports up to roughly 30% success and classifies it as a flash-erase suppression attack. The June write-up records a PicoGlitcher/findus reproduction.<br><a href='https://blog.syss.com/posts/voltage-glitching-the-stm32l05-microcontroller/' target='_blank'>Experiment write-up</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 5
    },
    "zh": {
      "headline": "nRF54L15：EMFI 影响硬件毛刺检测器",
      "text": "SySS 公告 SYSS-2025-022（2025-05-23）。在 Nordic nRF54L15 上，即使启用了其 TAMPC/Glitch Detector 硬件毛刺检测器，ChipSHOUTER 电磁脉冲仍能扰动 256 字节 CRC 校验计算，扫描点中最高约 2.4% 产生错误结果。研究说明新一代 MCU 内置的故障检测机制并非不可绕过，同时也表明芯片厂商已开始把抗毛刺设计作为产品特性。<br><a href='https://www.syss.de/pentest-blog/fault-injection-angriffe-auf-die-mikrocontroller-nrf54l15-und-stm32l051-syss-2025-022/-033' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "nRF54L15: EMFI Tests of the Glitch Detector",
      "text": "SySS advisory SYSS-2025-022 (2025-05-23). On the Nordic nRF54L15, even with its TAMPC/Glitch Detector hardware enabled, ChipSHOUTER electromagnetic pulses could still disturb a 256-byte CRC computation, with up to ~2.4% of scanned points producing wrong results. The study shows the fault-detection mechanisms built into new-generation MCUs are not unbypassable, while also indicating that vendors have started treating glitch resistance as a product feature.<br><a href='https://www.syss.de/pentest-blog/fault-injection-angriffe-auf-die-mikrocontroller-nrf54l15-und-stm32l051-syss-2025-022/-033' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 5
    },
    "zh": {
      "headline": "setresuid(⚡)：故障注入 Google TV Streamer 权限检查",
      "text": "hardwear.io NL 2025。Raelize 在 Google TV Streamer 的 Amlogic 平台（公开材料未列出具体 SoC 料号）上，对 setresuid 系统调用的权限检查路径实施电压毛刺：通过篡改权限检查的执行结果，从 ADB 受限 shell 直接获得 root 权限。该演示把毛刺目标从启动链扩展到运行时 Linux 系统调用，说明已完成启动的设备仍有可被故障注入利用的攻击面。<br><a href='https://raelize.com/upload/research/2025/hwio-nl-2025_setresuid-glitching-google-tv-streamer-from-adb-to-root.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "setresuid(⚡): Glitching Google's TV Streamer",
      "text": "hardwear.io NL 2025. Raelize voltage-glitched the permission-check path of the setresuid syscall on the Google TV Streamer's Amlogic platform (no specific SoC part number in public material): corrupting the check's execution result escalated an ADB restricted shell straight to root. The demo extends glitch targets from boot chains to runtime Linux syscalls, showing that fully booted devices still present fault-injection attack surface.<br><a href='https://raelize.com/upload/research/2025/hwio-nl-2025_setresuid-glitching-google-tv-streamer-from-adb-to-root.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 6
    },
    "zh": {
      "headline": "EL3vated Privileges：从 root 到 ARM EL3 的故障注入",
      "text": "hardwear.io USA 2025。Raelize 在 Google Nest WiFi Pro 的 Qualcomm 路由器平台（公开材料未列出具体 SoC 料号）上，对 Linux 内核发起的 SMC（Secure Monitor Call）调用路径实施精确定时的电压毛刺，从已获得的 Linux root 进一步提升到 ARM EL3 安全监控级代码执行。研究显示 TrustZone 安全监控层的边界在故障注入下同样可被跨越。<br><a href='https://raelize.com/upload/research/2025/Hw_io-USA-2025_EL3vated-Privileges-Glitching-Google-Wifi-Pro-from-Root-to-EL3_v1.0.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "EL3vated Privileges: Root to EL3 by Glitching",
      "text": "hardwear.io USA 2025. Raelize fired precisely timed voltage glitches at the SMC (Secure Monitor Call) path issued by the Linux kernel on the Google Nest WiFi Pro's Qualcomm router platform (no specific SoC part number in public material), escalating from an already-obtained Linux root to code execution at ARM EL3 secure-monitor level. The research shows the TrustZone secure-monitor boundary can likewise be crossed with fault injection.<br><a href='https://raelize.com/upload/research/2025/Hw_io-USA-2025_EL3vated-Privileges-Glitching-Google-Wifi-Pro-from-Root-to-EL3_v1.0.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 8
    },
    "zh": {
      "headline": "RP2350：WOOT 2025 故障注入路线",
      "text": "USENIX WOOT 2025。Muench、Cullen、Courdesses、Roth 与 Zonenberg 总结 Raspberry Pi RP2350 Hacking Challenge 的五条公开攻击路线，覆盖电压、电磁和激光故障注入，分别针对 CPU 核心执行、调试口访问、启动签名校验、未签名固件加载和 OTP 反熔丝读取。论文比较了各路线的成本、可复现性与所需设备，是对该芯片安全设计的首次系统性公开评估。<br><a href='https://www.usenix.org/system/files/woot25-muench.pdf' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "RP2350: Multi-Path Fault Injection at WOOT 2025",
      "text": "USENIX WOOT 2025. Muench, Cullen, Courdesses, Roth and Zonenberg summarized the five public attack routes from the Raspberry Pi RP2350 Hacking Challenge, spanning voltage, electromagnetic and laser fault injection, targeting CPU core execution, debug-port access, boot signature verification, unsigned-firmware loading and OTP antifuse readout respectively. The paper compares each route's cost, reproducibility and equipment requirements — the first systematic public evaluation of the chip's security design.<br><a href='https://www.usenix.org/system/files/woot25-muench.pdf' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 8
    },
    "zh": {
      "headline": "Three Glitches to Rule One Car：特斯拉车载计算平台研究",
      "text": "ACM AsiaCCS 2025。TU Berlin SecT 团队在 Tesla HW3/HW4 车载计算平台上测试三类目标——AMD x86 信息娱乐 SoC、Tesla FSD 自动驾驶处理器和 NXP/ST 网关微控制器——的电压毛刺或 EMFI 路径，评估真实量产汽车计算平台的故障注入可达性与防护强度；论文未列出这些芯片的具体料号，并讨论了车厂在供应链各层部署抗毛刺设计的现状。<br><a href='https://doi.org/10.1145/3708821.3710820' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Three Glitches to Rule One Car (Tesla)",
      "text": "ACM AsiaCCS 2025. The TU Berlin SecT team tested voltage-glitch or EMFI paths against three target classes on Tesla HW3/HW4 vehicle computing platforms — the AMD x86 infotainment SoC, the Tesla FSD self-driving processor, and NXP/ST gateway microcontrollers — assessing fault-injection reachability and protection strength on real production automotive computers; the paper does not list specific part numbers for these chips and discusses the state of glitch-resistant design deployment across automakers' supply chains.<br><a href='https://doi.org/10.1145/3708821.3710820' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 8
    },
    "zh": {
      "headline": "Watch Your (Lock)Step：AURIX 调试接口故障注入",
      "text": "Black Hat USA 2025。Thomas Roth（stacksmashing）以英飞凌 AURIX TriCore 系列汽车微控制器为研究对象演示故障注入，议题覆盖了包括 TC275 在内的多个芯片，并对其中的 TC275 同时使用了电压毛刺和 EMFI 两种手段，研究复位/调试握手阶段的攻击窗口。需要说明的是：虽然从议题细节可以推断调试密码保护似乎被绕过，但议题本身并未明确宣称绕过了 TC275 的保护机制，这一点在 icanhack.nl 等第三方整理中也被特别标注。<br><a href='https://blackhat.com/archive/usa/2025/briefings/schedule/index.html' target='_blank'>参考链接</a> · <a href='https://icanhack.nl/knowledge-base/existing-research/fault-injection/' target='_blank'>第三方整理</a>"
    },
    "en": {
      "headline": "Watch Your (Lock)Step: Glitching Infineon AURIX",
      "text": "Black Hat USA 2025. Thomas Roth (stacksmashing) demonstrated fault injection against Infineon AURIX TriCore automotive microcontrollers; the research covered several chips including the TC275, on which he applied both voltage glitching and EMFI, probing the reset/debug handshake window. Note: while the talk's details suggest the debug-password protection was apparently bypassed, the talk does not explicitly claim to have defeated the TC275's protection mechanisms — a caveat also flagged by third-party summaries such as icanhack.nl.<br><a href='https://blackhat.com/archive/usa/2025/briefings/schedule/index.html' target='_blank'>Reference</a> · <a href='https://icanhack.nl/knowledge-base/existing-research/fault-injection/' target='_blank'>Third-party summary</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 9
    },
    "zh": {
      "headline": "AutoPulse：可复现的 EMFI 自动发现平台",
      "text": "FDTC 2025。AutoPulse 用商用 3D 打印机机构、开源软件和自制脉冲硬件搭建低成本 EMFI 平台，显著降低电磁故障注入的设备门槛；论文在 Espressif ESP32 上完成参数表征并复现执行流水线故障，同时强调工艺参数（线圈、脉冲形状、移动精度）对故障图谱的影响，并开源了完整设计，使 EMFI 实验可在桌面级预算内复现。<br><a href='https://doi.org/10.1109/FDTC68360.2025.00009' target='_blank'>论文</a>"
    },
    "en": {
      "headline": "AutoPulse: Reproducible EMFI Vulnerability Discovery",
      "text": "FDTC 2025. AutoPulse built a low-cost EMFI platform from a commercial 3D-printer motion system, open-source software and self-made pulse hardware, sharply lowering the equipment barrier for electromagnetic fault injection; the paper characterizes parameters and reproduces execution-pipeline faults on an Espressif ESP32, highlights how fabrication parameters (coil, pulse shape, motion precision) shape the fault map, and open-sources the full design so EMFI experiments can be reproduced on a desktop budget.<br><a href='https://doi.org/10.1109/FDTC68360.2025.00009' target='_blank'>Paper</a>"
    }
  },
  {
    "start": {
      "year": 2025,
      "month": 12
    },
    "zh": {
      "headline": "Of Boot Vectors and Double Glitches：RP2350",
      "text": "39C3 2025。stacksmashing 与 nsr 总结 Raspberry Pi RP2350 Hacking Challenge 的五条攻击路线，重点展示故障注入强制未验证向量启动、双重毛刺读取 OTP，以及激光故障注入和复位毛刺；对象为 Raspberry Pi RP2350。<br><a href='https://media.ccc.de/v/39c3-of-boot-vectors-and-double-glitches-bypassing-rp2350-s-secure-boot' target='_blank'>议题录像</a>"
    },
    "en": {
      "headline": "Of Boot Vectors and Double Glitches: RP2350",
      "text": "39C3 2025. stacksmashing and nsr summarized five Raspberry Pi RP2350 Hacking Challenge attack paths, including fault-injected unverified-vector boot, double-glitch OTP readout, laser fault injection and reset glitches against the RP2350 secure boot.<br><a href='https://media.ccc.de/v/39c3-of-boot-vectors-and-double-glitches-bypassing-rp2350-s-secure-boot' target='_blank'>Talk video</a>"
    }
  },
  {
    "start": {
      "year": 2026,
      "month": 3
    },
    "zh": {
      "headline": "Quarkslab：链式触发 RH850 调试密码",
      "text": "2026。Philippe Azalbert（Quarkslab）在 Renesas RH850/F1KM-S4 上串联 UART 输出、ADC 采样和功耗侧信道三种手段，定位 16 字节调试密码比较指令的精确窗口，再对 ISOVCL 引脚实施电压毛刺绕过密码校验；报告记录约 88 次尝试即成功，单次测试耗时不到一分钟。该工作把 RH850 调试密码攻击的触发定位从“盲扫”推进到侧信道辅助的精确制导。<br><a href='https://blog.quarkslab.com/bypassing-debug-password-protection-on-the-rh850-family-using-fault-injection.html' target='_blank'>参考链接</a>"
    },
    "en": {
      "headline": "Quarkslab: Chained Triggers for the RH850 Debug Password",
      "text": "2026. Philippe Azalbert (Quarkslab) chained three techniques — UART output, ADC sampling and a power side channel — on the Renesas RH850/F1KM-S4 to pinpoint the exact window of the 16-byte debug-password comparison instruction, then voltage-glitched the ISOVCL pin to bypass the password check; the write-up records success within about 88 attempts and under a minute per test run. The work moves RH850 debug-password attacks from blind scanning to side-channel-guided precision triggering.<br><a href='https://blog.quarkslab.com/bypassing-debug-password-protection-on-the-rh850-family-using-fault-injection.html' target='_blank'>Reference</a>"
    }
  },
  {
    "start": {
      "year": 2026,
      "month": 9
    },
    "zh": {
      "headline": "GlitchLab：硬件在环故障注入自动搜索",
      "text": "arXiv 2609.00502（2026-09-01）。Hossain、Mahadevan、Van Woudenberg、Velegalati 与 Bhattacharyya 提出 GlitchLab，将故障注入参数搜索建模为硬件在环优化：RL-Q 用 Q-learning 探索，结构化 bandit 负责发现，SOBAS 根据结构化结果复现故障。在 AES、密码与控制流实验中，方法相较基线减少 2–85 倍尝试次数、26–1,237 倍时间，并显著提高复现率，展示了硬件在环条件下的自动化参数搜索效果。<br><a href='https://arxiv.org/abs/2609.00502' target='_blank'>论文预印本</a>"
    },
    "en": {
      "headline": "GlitchLab: Hardware-in-the-Loop Fault-Injection Optimization",
      "text": "arXiv 2609.00502 (1 September 2026). Hossain, Mahadevan, Van Woudenberg, Velegalati and Bhattacharyya formulate glitch-parameter search as hardware-in-the-loop optimization: RL-Q explores with Q-learning, a structured bandit discovers candidates, and SOBAS reproduces faults from structured outcomes. Across AES, password and control-flow campaigns, the methods cut attempts by 2–85× and time by 26–1,237× versus baselines, while improving reproduction rates. The results quantify hardware-in-the-loop automated parameter search.<br><a href='https://arxiv.org/abs/2609.00502' target='_blank'>Preprint</a>"
    }
  }
];


