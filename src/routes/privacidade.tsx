import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Nail Designer Pro 4.0" },
      {
        name: "description",
        content:
          "Saiba como o Nail Designer Pro 4.0 usa cookies e o Pixel do Meta, e como aceitar ou recusar o rastreamento.",
      },
      { property: "og:title", content: "Política de Privacidade — Nail Designer Pro 4.0" },
      {
        property: "og:description",
        content: "Como usamos cookies e o Pixel do Meta, e como você pode mudar sua escolha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidade,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl font-semibold sm:text-5xl">Política de Privacidade</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Última atualização: outubro de 2026 · Nail Designer Pro 4.0
      </p>

      <Section title="Cookies e rastreamento">
        <p>
          Utilizamos cookies e tecnologias semelhantes para medir o desempenho da nossa página e
          dos nossos anúncios. Ao navegar, você pode aceitar ou recusar o uso dessas tecnologias
          por meio do aviso de cookies exibido na página — e pode alterar sua escolha a qualquer
          momento pelo link “Preferências de cookies” no rodapé.
        </p>
        <p>
          Enquanto você não escolhe, o rastreamento permanece desativado. Ao recusar, os cookies
          de publicidade não são carregados.
        </p>
      </Section>

      <Section title="Pixel do Meta (Facebook/Instagram)">
        <p>
          Com o seu aceite, carregamos o Pixel do Meta (Meta Platforms, Inc.), que registra
          visitas à página e interações com o nosso conteúdo. Usamos essas informações para
          medir e otimizar nossas campanhas de anúncios (publicidade e remarketing).
        </p>
        <p>
          Dados envolvidos: páginas visitadas, eventos de interação e identificadores de
          dispositivo. Destinatário: Meta Platforms, Inc. Você pode gerenciar a publicidade
          personalizada nas configurações da sua conta Meta.
        </p>
      </Section>

      <Section title="Como revogar o consentimento">
        <p>
          Basta clicar em “Preferências de cookies” no rodapé e selecionar “Recusar”. A escolha
          fica salva no seu navegador e o rastreamento de publicidade deixa de ser carregado.
        </p>
      </Section>

      <Section title="Contato">
        <p>
          ND PRO TREINAMENTOS E DESENVOLVIMENTO PROFISSIONAL LTDA<br />
          CNPJ: 48.921.734/0001-85<br />
          E-mail de Suporte: <a href="mailto:suporte@naildesignerpro.com.br" className="underline text-primary">suporte@naildesignerpro.com.br</a>
        </p>
      </Section>

      <div className="mt-14">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink-foreground transition hover:bg-primary"
        >
          Voltar para a página
        </Link>
      </div>
    </main>
  );
}
