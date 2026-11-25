# Bookar Med

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1813b0c7-e954-4ea1-8404-12b66324b748).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

### Avaliações de Matemática

Define `BOOKAR_SESSION_SECRET` no ambiente **do servidor** antes de usar as avaliações. Usa uma chave aleatória com pelo menos 32 caracteres, a mesma entre instâncias. Para gerar uma localmente, usa `openssl rand -hex 32`. Mantém o valor fora do Git e das variáveis públicas `VITE_*`.

Cada avaliação de conclusão usa 5 questões, com 4 acertos para aprovação. O teste de acesso directo usa o mínimo de 5 perguntas e cobre todos os tópicos anteriores, com pelo menos duas por tópico quando há mais de um pré-requisito. A nota mínima é 80% global e o relatório mostra o resultado por tópico. O servidor sorteia as variantes, evita repetir as variantes da tentativa imediatamente anterior e corrige as respostas numéricas.

Nesta fase, o nível desbloqueado fica numa sessão cifrada do navegador, com validade de 90 dias. A persistência entre dispositivos e o histórico de tentativas exigem login e base de dados.

Na preparação, todas as aulas ficam abertas. Se houver sessão configurada, as avaliações podem ser testadas sem alterar a progressão. Após validar login e progresso para lançamento, o servidor pode activar as regras de progressão com `BOOKAR_ENFORCE_PROGRESSION=true`. Define também `BOOKAR_REVIEW_CODE` como um segundo valor aleatório (32 caracteres no mínimo) para activar o acesso da equipa em Matemática. O código abre as aulas para revisão por oito horas neste navegador. O perfil de revisão conserva o progresso de aluno e pode voltar à vista com bloqueio. A chave de sessão e o código são valores distintos.
