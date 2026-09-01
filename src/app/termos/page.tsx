import type { Metadata } from "next";
import { LegalShell, Secao, P, Lista, Destaque } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso — VINKE",
  description: "Condições de uso da plataforma VINKE de preparação para o ENEM.",
};

export default function TermosPage() {
  return (
    <LegalShell titulo="Termos de Uso" atualizado="1º de setembro de 2026">
      <Secao titulo="1. Quem somos e o que é este documento">
        <P>
          O VINKE é uma plataforma de preparação para o ENEM baseada em prática: questões
          oficiais, simulados, resoluções comentadas, flashcards e um plano de estudo orientado
          pelo seu desempenho. Estes Termos regulam o uso do site e do aplicativo web do VINKE
          (&ldquo;plataforma&rdquo;). Ao criar uma conta, você concorda com eles.
        </P>
        <P>
          A plataforma é operada por VINKE Educação, com registro de CNPJ em andamento. Assim
          que o registro for concluído, a razão social e o CNPJ serão atualizados nesta página.
          Para qualquer assunto, fale com a gente em suporte@vinke.app.br.
        </P>
      </Secao>

      <Secao titulo="2. Relação com o ENEM e o INEP">
        <P>
          O VINKE utiliza questões de provas anteriores do ENEM, que são documentos públicos
          aplicados pelo INEP. O VINKE é um serviço independente:{" "}
          <strong>não temos vínculo, afiliação ou endosso do INEP, do MEC ou de qualquer órgão
          governamental</strong>. As resoluções comentadas, a organização por assuntos e as
          demais funcionalidades são produção própria do VINKE.
        </P>
      </Secao>

      <Secao titulo="3. Sua conta">
        <Lista
          itens={[
            "Você é responsável por manter sua senha em sigilo e por tudo que acontecer na sua conta.",
            "Os dados informados no cadastro devem ser verdadeiros e atualizados.",
            "A conta é pessoal e intransferível — compartilhar acesso viola estes Termos.",
            "Se você tem menos de 18 anos, deve usar a plataforma com ciência dos seus responsáveis; a contratação de planos pagos deve ser feita ou autorizada por eles.",
          ]}
        />
      </Secao>

      <Secao titulo="4. Planos, pagamentos e renovação">
        <P>
          O VINKE oferece um plano gratuito, com limites de uso, e planos pagos (mensal e anual)
          que liberam todos os recursos. Os preços vigentes são os exibidos na página de planos
          no momento da contratação.
        </P>
        <Lista
          itens={[
            "O plano gratuito não pede cartão de crédito.",
            "Os planos pagos são cobrados de forma antecipada e renovados automaticamente ao fim de cada período, até que você cancele.",
            "Pagamentos são processados por parceiros especializados; o VINKE não armazena os dados completos do seu cartão.",
            "Mudanças de preço serão comunicadas com antecedência e valem apenas para renovações futuras — nunca para o período já pago.",
          ]}
        />
      </Secao>

      <Secao titulo="5. Garantia de 7 dias e cancelamento">
        <Destaque>
          Assinou e não gostou? Em até 7 dias corridos após a primeira contratação, devolvemos
          100% do valor pago, sem perguntas — conforme o direito de arrependimento do Código de
          Defesa do Consumidor (art. 49).
        </Destaque>
        <P>
          Você pode cancelar a renovação a qualquer momento, direto na plataforma. Ao cancelar,
          seu acesso aos recursos pagos continua até o fim do período já pago, e nenhuma cobrança
          nova é feita.
        </P>
      </Secao>

      <Secao titulo="6. Uso aceitável">
        <P>Para proteger a plataforma e os demais alunos, não é permitido:</P>
        <Lista
          itens={[
            "Copiar, raspar, redistribuir ou revender o conteúdo da plataforma (incluindo resoluções comentadas e organização do banco de questões);",
            "Usar robôs, scripts ou automações para acessar o serviço;",
            "Tentar burlar limites do plano gratuito ou mecanismos de segurança;",
            "Usar a plataforma para qualquer finalidade ilegal.",
          ]}
        />
        <P>
          Contas que violarem estas regras podem ser suspensas ou encerradas. Em caso de
          encerramento por violação, valores de períodos já utilizados não são reembolsados.
        </P>
      </Secao>

      <Secao titulo="7. Conteúdo e propriedade intelectual">
        <P>
          As questões do ENEM são de titularidade pública. Todo o restante — marca VINKE,
          software, design, resoluções comentadas, classificação por assuntos, flashcards e
          textos — pertence ao VINKE ou a seus licenciantes. Sua assinatura dá direito a uma
          licença de uso pessoal e não exclusiva, para fins de estudo. Nenhum direito de
          propriedade é transferido a você.
        </P>
      </Secao>

      <Secao titulo="8. Exatidão do conteúdo e limites do serviço">
        <P>
          Trabalhamos para manter enunciados, gabaritos e resoluções fiéis às provas oficiais —
          inclusive corrigindo erros presentes em bases públicas. As resoluções comentadas podem
          ser elaboradas com apoio de tecnologia, incluindo inteligência artificial, e passam por
          verificação; ainda assim, podem conter erros. Encontrou algo estranho? Use o botão de
          reportar erro na própria questão ou escreva para suporte@vinke.app.br — corrigimos
          rápido.
        </P>
        <P>
          O VINKE é uma ferramenta de estudo. <strong>Não prometemos nota, aprovação ou
          desempenho específico</strong> — o resultado depende do estudo de cada aluno.
        </P>
      </Secao>

      <Secao titulo="9. Disponibilidade e mudanças na plataforma">
        <P>
          Nos esforçamos para manter o serviço disponível e estável, mas podem ocorrer
          manutenções e indisponibilidades pontuais. Recursos podem ser adicionados, ajustados ou
          descontinuados; se uma mudança reduzir de forma relevante o que você contratou, você
          poderá cancelar e receber o reembolso proporcional do período não utilizado.
        </P>
      </Secao>

      <Secao titulo="10. Privacidade">
        <P>
          O tratamento dos seus dados pessoais é descrito na nossa{" "}
          <a href="/privacidade" className="font-bold text-vinke underline underline-offset-2">
            Política de Privacidade
          </a>
          , que faz parte destes Termos.
        </P>
      </Secao>

      <Secao titulo="11. Alterações destes Termos">
        <P>
          Podemos atualizar estes Termos para refletir mudanças no serviço ou na legislação.
          Alterações relevantes serão avisadas na plataforma ou por e-mail com antecedência
          razoável. A data no topo desta página indica a versão vigente.
        </P>
      </Secao>

      <Secao titulo="12. Lei aplicável e foro">
        <P>
          Estes Termos são regidos pelas leis brasileiras, incluindo o Código de Defesa do
          Consumidor e a LGPD. Fica eleito o foro do seu domicílio para resolver qualquer
          controvérsia.
        </P>
      </Secao>

      <Secao titulo="13. Contato">
        <P>
          Dúvidas sobre estes Termos? Escreva para{" "}
          <a href="mailto:suporte@vinke.app.br" className="font-bold text-vinke underline underline-offset-2">
            suporte@vinke.app.br
          </a>{" "}
          ou visite a página de{" "}
          <a href="/suporte" className="font-bold text-vinke underline underline-offset-2">
            suporte
          </a>
          .
        </P>
      </Secao>
    </LegalShell>
  );
}
