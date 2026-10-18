# Wiki da Toca da Coruja — revamp 2.0

Docusaurus 3.10, português e inglês. Os endereços anteriores foram preservados e Tokito ganhou uma ficha própria.

## Prévia local

```sh
npm ci
npm run build
npm run serve -- --host 127.0.0.1 --port 3019 --no-open
```

## Conteúdo

A fonte revisada é a candidata 2.0.0 da campanha, em `../source`. A campanha principal tem 26 encontros de nível 15 a 85; Tokito é um encontro opcional separado de nível 100.

`../tools/update_wiki.py` gera as fichas em ambos os idiomas, as tabelas de progressão, o catálogo, os retratos das skins e um manifesto SHA-256 em `../reports/wiki-source-manifest.json`. Requer Python com Pillow. O manifesto registra os arquivos locais usados, sem afirmar validação em jogo.

Para regenerar, executar o script a partir da pasta pai, depois compilar a wiki. Os componentes de interface ficam em `src/components`, a busca global em `src/theme/Root.jsx` e o tema em `src/css/custom.css`.

Busca local por nome de treinador, espécie do time e título dos guias; filtros por categoria no catálogo. Não depende de serviço externo. Ctrl/Cmd+K abre a busca, Esc fecha.

A interface usa renders transparentes de 120 espécies, extraídos dos modelos e texturas reais do Cobblemon 1.8.2 e complementos instalados (Mega Showdown e ATM x MSD), em WebP. Os modelos foram renderizados com Three.js, respeitando hierarquia, cubos, UVs e poses de idle disponíveis. Créditos e proveniência: `static/model-credits/`. Nenhum JAR é distribuído com a wiki. Retratos extraídos das próprias skins da campanha. Fontes DM Sans e Space Grotesk acompanham a identidade do site principal, com fallback de sistema.

## Limites

A documentação separa implementação no pacote de comportamento em jogo. Batalhas, reinício dos scripts e exibição dos diálogos da candidata ainda dependem de teste no Minecraft. Esta cópia não confirma publicação da 2.0 no Modrinth. Não apresenta item de assinatura como recompensa.

Publicação no projeto Vercel `owls-nest-wiki`, associado ao domínio `wiki.mottameister.xyz`.
