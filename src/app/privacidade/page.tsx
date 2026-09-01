import type { Metadata } from "next";
import { LegalShell, Secao, P, Lista, Destaque } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade — VINKE",
  description: "Como o VINKE coleta, usa e protege seus dados pessoais, conforme a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <LegalShell titulo="Política de Privacidade" atualizado="1º de setembro de 2026">
      <Destaque>
        Em resumo: coletamos o mínimo necessário para o VINKE funcionar — seus dados de conta e
        seu desempenho nos estudos. Usamos essas informações para montar seu plano e mostrar sua
        evolução. Não vendemos seus dados. Você pode pedir acesso, correção ou exclusão a
        qualquer momento.
      </Destaque>

      <Secao titulo="1. Quem é o responsável pelos dados">
        <P>
          O controlador dos dados tratados na plataforma é VINKE Educação, com registro de CNPJ
          em andamento (a identificação completa será atualizada nesta página após a conclusão do
          registro). O canal do encarregado de proteção de dados (DPO) é{" "}
          <a href="mailto:suporte@vinke.app.br" className="font-bold text-vinke underline underline-offset-2">
            suporte@vinke.app.br
          </a>
          .
        </P>
      </Secao>

      <Secao titulo="2. Quais dados coletamos">
        <Lista
          itens={[
            <>
              <strong>Dados de conta:</strong> nome, e-mail e senha (armazenada de forma
              criptografada — nunca temos acesso à senha em texto).
            </>,
            <>
              <strong>Dados de estudo:</strong> respostas às questões, resultados de simulados,
              taxa de acerto por área e assunto, sequência de dias, tempo de resolução, erros
              registrados no caderno de erros e progresso nos flashcards.
            </>,
            <>
              <strong>Preferências:</strong> meta de prova (ex.: ENEM 2027) e configurações do
              plano de estudo.
            </>,
            <>
              <strong>Dados técnicos:</strong> registros básicos de acesso (data, dispositivo,
              navegador) usados para segurança e diagnóstico.
            </>,
            <>
              <strong>Pagamento:</strong> processado por parceiros especializados. O VINKE não
              armazena os dados completos do seu cartão — recebemos apenas a confirmação da
              transação e o status da assinatura.
            </>,
          ]}
        />
      </Secao>

      <Secao titulo="3. Para que usamos os dados">
        <Lista
          itens={[
            "Prestar o serviço: autenticar sua conta, salvar seu progresso e exibir seu histórico;",
            "Personalizar seu estudo: o plano diário e as prioridades de treino são calculados a partir do seu desempenho — esse é o coração do produto;",
            "Comunicar: avisos sobre a conta, a assinatura e mudanças relevantes no serviço;",
            "Melhorar a plataforma: entender, de forma agregada, como os recursos são usados;",
            "Segurança e obrigações legais: prevenir fraude e abuso, e cumprir a lei.",
          ]}
        />
        <P>
          Bases legais (LGPD, art. 7º): execução do contrato com você, cumprimento de obrigação
          legal, legítimo interesse (segurança e melhoria do serviço) e, quando aplicável, seu
          consentimento.
        </P>
      </Secao>

      <Secao titulo="4. Com quem compartilhamos">
        <P>Não vendemos nem alugamos seus dados. Compartilhamos apenas com:</P>
        <Lista
          itens={[
            <>
              <strong>Provedores de infraestrutura:</strong> a plataforma roda no Google Firebase
              (Google Cloud), com banco de dados hospedado na região de São Paulo
              (southamerica-east1). O Google atua como operador, sob os próprios compromissos de
              segurança e privacidade;
            </>,
            <>
              <strong>Processadores de pagamento:</strong> apenas os dados necessários para
              cobrar a assinatura;
            </>,
            <>
              <strong>Autoridades:</strong> quando houver obrigação legal ou ordem judicial.
            </>,
          ]}
        />
      </Secao>

      <Secao titulo="5. Cookies e armazenamento local">
        <P>
          Usamos cookies e armazenamento local do navegador para manter sua sessão ativa e
          guardar caches de desempenho que deixam a plataforma mais rápida. Não usamos cookies de
          publicidade de terceiros. Você pode limpar esses dados no navegador; a consequência é
          apenas precisar entrar de novo.
        </P>
      </Secao>

      <Secao titulo="6. Por quanto tempo guardamos">
        <P>
          Mantemos seus dados enquanto sua conta existir, porque o histórico de desempenho é a
          matéria-prima do seu plano de estudo. Se você excluir a conta, os dados pessoais são
          removidos ou anonimizados em prazo razoável, exceto o que precisarmos manter por
          obrigação legal (por exemplo, registros fiscais de pagamento).
        </P>
      </Secao>

      <Secao titulo="7. Seus direitos (LGPD, art. 18)">
        <P>Você pode, a qualquer momento, pedir:</P>
        <Lista
          itens={[
            "Confirmação de que tratamos seus dados e acesso a eles;",
            "Correção de dados incompletos ou desatualizados;",
            "Exclusão da conta e dos dados pessoais;",
            "Portabilidade, em formato legível;",
            "Revogação de consentimentos e informação sobre compartilhamentos.",
          ]}
        />
        <P>
          Basta escrever para suporte@vinke.app.br com o e-mail da conta. Respondemos dentro dos
          prazos da LGPD. Você também pode apresentar reclamação à ANPD (Autoridade Nacional de
          Proteção de Dados).
        </P>
      </Secao>

      <Secao titulo="8. Menores de idade">
        <P>
          Boa parte de quem se prepara para o ENEM tem menos de 18 anos. O tratamento de dados de
          adolescentes é feito no melhor interesse do aluno, limitado ao necessário para o
          serviço de estudo. Menores de 18 anos devem usar a plataforma com ciência dos
          responsáveis, e a contratação de planos pagos deve ser feita ou autorizada por eles.
          Responsáveis podem exercer os direitos da seção 7 em nome do aluno.
        </P>
      </Secao>

      <Secao titulo="9. Segurança">
        <P>
          Usamos criptografia em trânsito (HTTPS), senha protegida por hashing, regras de acesso
          por conta no banco de dados e infraestrutura gerenciada do Google Cloud. Nenhum sistema
          é 100% imune; se ocorrer um incidente com risco relevante aos seus dados, avisaremos
          você e a ANPD conforme a lei.
        </P>
      </Secao>

      <Secao titulo="10. Alterações desta política">
        <P>
          Se esta política mudar de forma relevante, avisaremos na plataforma ou por e-mail. A
          data no topo indica a versão vigente.
        </P>
      </Secao>

      <Secao titulo="11. Contato">
        <P>
          Dúvidas sobre privacidade? Fale com o encarregado em{" "}
          <a href="mailto:suporte@vinke.app.br" className="font-bold text-vinke underline underline-offset-2">
            suporte@vinke.app.br
          </a>
          .
        </P>
      </Secao>
    </LegalShell>
  );
}
