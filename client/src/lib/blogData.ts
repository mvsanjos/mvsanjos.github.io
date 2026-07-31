export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "lgpd-gdpr-conformidade-setor-publico",
    title: "LGPD e GDPR: Conformidade no Setor Público Brasileiro e Europeu",
    excerpt: "Uma análise comparativa das legislações de proteção de dados e como organizações públicas podem garantir a conformidade em ambos os cenários regulatórios.",
    content: `A proteção de dados pessoais tornou-se um dos pilares fundamentais da governança digital moderna. No Brasil, a Lei Geral de Proteção de Dados (LGPD), em vigor desde 2020, estabelece diretrizes claras para o tratamento de dados pessoais, enquanto na União Europeia, o GDPR já opera desde 2018.

## Paralelos entre LGPD e GDPR

Ambas as legislações compartilham princípios fundamentais: finalidade e adequação do tratamento, transparência, segurança, prevenção e não discriminação. A LGPD foi fortemente inspirada no GDPR, o que facilita a compreensão cruzada.

## O Papel do DPO

O Encarregado de Dados (DPO) desempenha papel central na conformidade, atuando como ponto de contato entre o controlador, os titulares e a autoridade fiscalizadora. No setor público, essa função ganha complexidade adicional devido ao volume e sensibilidade dos dados tratados.

## Desafios no Setor Público

Organizações públicas enfrentam desafios específicos: interoperabilidade entre órgãos, dados de cidadãos em múltiplos sistemas, e a necessidade de transparência conciliada com a proteção. A gestão eficaz requer políticas claras, mapeamento de dados e treinamento contínuo das equipes.

## Boas Práticas

Entre as melhores práticas estão: realização de avaliações de impacto (DPIA), implementação de governança de dados com comitês dedicados, adoção de Privacy by Design nos novos sistemas, e programas regulares de treinamento em privacidade para servidores públicos.`,
    date: "2026-07-15",
    category: "Proteção de Dados",
    readTime: "8 min",
    tags: ["LGPD", "GDPR", "DPO", "Governança", "Setor Público"],
  },
  {
    slug: "transformacao-digital-governanca-ti",
    title: "Transformação Digital na Governança de TI: Do PEDTIC à Execução",
    excerpt: "Como elaborar e implementar um Plano Estratégico de Desenvolvimento de TIC que realmente transforme a operação de uma organização pública.",
    content: `O Plano Estratégico de Desenvolvimento de TIC (PEDTIC) é o instrumento que orienta a atuação de TI em organizações públicas, alinhando tecnologia aos objetivos institucionais. Sua elaboração e execução eficazes são fundamentais para a transformação digital.

## Diagnóstico: O Primeiro Passo

Antes de qualquer planejamento, é essencial realizar um diagnóstico completo da maturidade digital da organização. Isso inclui mapear sistemas legados, identificar gargalos operacionais, avaliar a capacidade da equipe e entender as demandas das áreas de negócio.

## Alinhamento com Objetivos Institucionais

O PEDTIC deve estar intrinsecamente conectado ao planejamento estratégico da instituição. Cada iniciativa tecnológica deve responder a uma necessidade concreta: redução de custos, melhoria de serviços ao cidadão, ou aumento da transparência.

## Governança e Monitoramento

A execução do PEDTIC exige mecanismos de governança robustos: comitês gestores, indicadores de desempenho (KPIs), relatórios periódicos e mecanismos de correção de rota. O uso de frameworks como COBIT e ITIL facilita essa estruturação.

## Casos de Sucesso

Na Fundação CECIERJ, a implementação do PEDTIC 2023 envolveu a coordenação de múltiplas frentes: modernização de infraestrutura, adoção de ferramentas de monitoramento (Zabbix), gestão de chamados (GLPI) e conformidade com a LGPD. O resultado foi uma redução significativa em incidentes e maior alinhamento entre TI e negócios.`,
    date: "2026-06-20",
    category: "Governança de TI",
    readTime: "10 min",
    tags: ["PEDTIC", "Governança", "TI", "Transformação Digital", "Planejamento"],
  },
  {
    slug: "glpi-itsm-suporte-tecnico",
    title: "ITSM na Prática: Implementando GLPI para Gestão de Suporte Técnico",
    excerpt: "Um guia prático sobre como implementar o GLPI para profissionalizar o suporte técnico, melhorar SLAs e criar cultura de serviço orientado ao usuário.",
    content: `O ITSM (IT Service Management) é o conjunto de práticas que busca alinhar os serviços de TI às necessidades do negócio. No setor público, onde recursos são limitados e a demanda é alta, o GLPI surge como uma solução open-source poderosa.

## Por que GLPI?

O GLPI oferece gestão completa de chamados, inventário de ativos, base de conhecimento, SLA e relatórios. Sua natureza open-source elimina custos de licenciamento, um fator decisivo para organizações públicas.

## Modelo de Negócio do Suporte

Desenvolver um modelo de negócio para o suporte técnico envolve definir: níveis de atendimento (N1, N2, N3), SLAs por tipo de demanda, critérios de priorização, e indicadores de satisfação do usuário. O GLPI permite configurar todos esses elementos.

## Implementação Gradual

A implementação deve ser gradual: começar com o básico (abertura e acompanhamento de chamados), depois evoluir para SLA automatizado, inventário integrado, e finalmente base de conhecimento e automações.

## Resultados Esperados

Com o GLPI bem configurado, é possível reduzir tempo médio de resolução em até 40%, aumentar a transparência para usuários, e gerar dados para tomada de decisão estratégica.`,
    date: "2026-05-10",
    category: "ITSM",
    readTime: "7 min",
    tags: ["GLPI", "ITSM", "ITIL", "Suporte Técnico", "Open Source"],
  },
  {
    slug: "zabbix-monitoramento-infraestrutura",
    title: "Monitoramento de Infraestrutura com Zabbix: Visibilidade Completa da TI",
    excerpt: "Como o Zabbix pode revolucionar a gestão de infraestrutura de TI, desde servidores e redes até serviços cloud e aplicações.",
    content: `O monitoramento proativo de infraestrutura é essencial para garantir a disponibilidade e performance dos serviços de TI. O Zabbix, como solução open-source, oferece capacidade enterprise sem custos de licenciamento.

## O que Monitorar

Um bom programa de monitoramento cobre: servidores (CPU, memória, disco), redes (latência, throughput, perda de pacotes), serviços (HTTP, DNS, bancos de dados), e aplicações (tempo de resposta, erros).

## Configuração Estratégica

A configuração do Zabbix deve seguir a estratégia de negócio: definir thresholds adequados, criar triggers inteligentes que minimizem falsos positivos, e estabelecer dashboards executivos para gestão.

## Integração com Governança

O monitoramento alimenta a governança de TI ao fornecer dados para relatórios de SLA, identificação de tendências, e planejamento de capacidade. O Zabbix integrado ao GLPI permite automação completa do fluxo de incidentes.`,
    date: "2026-04-05",
    category: "Infraestrutura",
    readTime: "6 min",
    tags: ["Zabbix", "Monitoramento", "Infraestrutura", "DevOps", "Open Source"],
  },
];
