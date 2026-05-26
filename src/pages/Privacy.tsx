import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-ink">
      <h1 className="font-display text-4xl leading-tight md:text-5xl">Política de Privacidade</h1>
      <p className="mt-4 text-sm text-ink/60">Última atualização: maio de 2026</p>

      <div className="mt-12 space-y-10 text-base leading-relaxed text-ink/80">
        <div>
          <h2 className="font-display text-2xl text-ink">1. Introdução</h2>
          <p className="mt-3">
            A FIG The Agency ("nós", "nosso" ou "a Agência") valoriza a privacidade dos seus dados. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nossos serviços, site e plataformas digitais.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">2. Dados que Coletamos</h2>
          <p className="mt-3">
            Podemos coletar os seguintes tipos de dados:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Dados de identificação:</strong> nome, e-mail, telefone, nome da empresa e cargo.</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e cookies.</li>
            <li><strong>Dados de campanhas:</strong> métricas de desempenho, público-alvo, criativos e materiais fornecidos pelo cliente para gestão de mídia.</li>
            <li><strong>Dados de redes sociais:</strong> informações públicas de perfis conectados para gestão de conteúdo e relatórios.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">3. Como Usamos seus Dados</h2>
          <p className="mt-3">
            Utilizamos suas informações para:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Prestar nossos serviços de marketing digital e gestão de redes sociais.</li>
            <li>Comunicar-nos sobre propostas, contratos e atualizações de projetos.</li>
            <li>Analisar o desempenho de campanhas e otimizar resultados.</li>
            <li>Enviar newsletters, conteúdos e materiais educativos (com seu consentimento).</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">4. Compartilhamento de Dados</h2>
          <p className="mt-3">
            Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Prestadores de serviço essenciais (hospedagem, análise de dados, plataformas de anúncios).</li>
            <li>Parceiros operacionais, quando necessário para a execução de campanhas.</li>
            <li>Autoridades legais, quando exigido por lei ou ordem judicial.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">5. Cookies e Tecnologias de Rastreamento</h2>
          <p className="mt-3">
            Nosso site utiliza cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo. Você pode gerenciar suas preferências de cookies diretamente no navegador.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">6. Segurança dos Dados</h2>
          <p className="mt-3">
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, firewalls e controles de acesso restrito.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">7. Seus Direitos</h2>
          <p className="mt-3">
            De acordo com a legislação aplicável (incluindo a LGPD no Brasil e o GDPR na Europa), você tem o direito de:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Acessar seus dados pessoais.</li>
            <li>Corrigir dados incompletos ou desatualizados.</li>
            <li>Solicitar a exclusão dos seus dados.</li>
            <li>Revogar seu consentimento a qualquer momento.</li>
            <li>Solicitar a portabilidade dos dados.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">8. Retenção dos Dados</h2>
          <p className="mt-3">
            Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por obrigações legais, contratuais e fiscais.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">9. Alterações nesta Política</h2>
          <p className="mt-3">
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de aviso em nosso site.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-[#0e1020]">10. Contato</h2>
          <p className="mt-3">
            Se tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco:
          </p>
          <p className="mt-3">
            <strong>E-mail:</strong>{" "}
            <a href="mailto:hello@figtheagency.com" className="underline transition hover:text-[#6f64ff]">
              hello@figtheagency.com
            </a>
          </p>
          <p className="mt-1">
            <strong>Instagram:</strong>{" "}
            <a href="https://www.instagram.com/figtheagency" className="underline transition hover:text-[#6f64ff]">
              @figtheagency
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
