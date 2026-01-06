# 📊 Cronograma de Implementação Interativa - Mercado Livre

Plano estratégico de 12 semanas para implementação e início de vendas de produtos de barbearia no Mercado Livre.

## 🎯 Sobre o Projeto

Este cronograma foi desenvolvido para auxiliar na estruturação completa de uma operação de vendas no Mercado Livre, desde a criação da conta até a consolidação do negócio.
O projeto apresenta um gráfico de Gantt interativo com 7 fases principais, cada uma contendo tarefas específicas e marcos importantes.
Para cada tarefa á executar, tem uma caixa para flegar , marcando como feita a tarefa e o sistema coloca a data de tickagem.
## 🚀 Demonstração

Acesse o cronograma online: [https://cronograma-ml-gilnei.centersul.net.br](https://cronograma-ml-gilnei.centersul.net.br)

*(Ou pelo GitHub Pages: https://msgrs.github.io/cronograma-ml-gilnei/)*

## 📁 Estrutura do Projeto
```
cronograma-ml-gilnei/
├── index.html      # Estrutura HTML da página
└── README.md       # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e layout responsivo
- **JavaScript (Vanilla)** - Interatividade sem dependências

## 📋 Fases do Cronograma

### Fase 1: Preparação Inicial (Semana 1)
- Criação de conta vendedor
- Configuração de recebimentos
- Análise de concorrência
- Estratégia de precificação

### Fase 2: Estruturação de Cadastros (Semanas 2-3)
- Fotografia de produtos
- Criação de descrições otimizadas
- Definição de SKUs
- Templates de descrição

### Fase 3: Cadastro de Produtos (Semanas 3-4)
- Cadastro inicial de produtos
- Configuração de variações
- Definição de estoque
- Configuração de frete

### Fase 4: Logística e Operação (Semana 4)
- Organização de área de trabalho
- Materiais de embalagem
- Processos padronizados
- Testes de envio

### Fase 5: Lançamento e Otimização (Semanas 5-6)
- Ativação de anúncios
- Anúncios patrocinados
- Monitoramento de vendas
- Ajustes de preços

### Fase 6: Expansão do Catálogo (Semanas 6-8)
- Produtos complementares
- Kits e combos
- Expansão de variações
- Novos nichos

### Fase 7: Consolidação e Crescimento (Semanas 8-12)
- Construção de reputação
- Melhorias contínuas
- Mercado Livre Full
- Relacionamento com clientes

## 🎯 Marcos Importantes

| Semana | Marco |
|--------|-------|
| 4 | Primeira venda realizada |
| 6 | 20+ produtos cadastrados |
| 8 | Reputação estabelecida |
| 12 | Operação consolidada |

## 💡 Funcionalidades

- ✅ Visualização tipo Gráfico de Gantt
- ✅ Fases interativas (clique para expandir tarefas)
- ✅ Timeline de 12 semanas
- ✅ Marcos importantes destacados
- ✅ Dicas práticas de implementação
- ✅ Layout responsivo para mobile

## 🖥️ Como Usar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/cronograma-ml-gilnei.git
```

2. Entre na pasta do projeto:
```bash
cd cronograma-ml-gilnei
```

3. Abra o arquivo `index.html` no navegador:
```bash
# Linux/Mac
open index.html

# Windows
start index.html

# Ou simplesmente dê duplo clique no arquivo
```

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões recentes)
- ✅ Dispositivos móveis (iOS e Android)
- ✅ Tablets
- ✅ Impressão (layout otimizado)

## 🔧 Personalização

### Modificar Fases

Edite o arquivo `script.js` na seção `var phases`:
```javascript
{
    id: 8,
    name: "NOVA FASE",
    duration: "Semana X",
    start: 0,
    length: 1,
    color: "color-blue",
    tasks: [
        "Tarefa 1",
        "Tarefa 2"
    ]
}
```

### Cores Disponíveis

- `color-blue` - Azul
- `color-green` - Verde
- `color-purple` - Roxo
- `color-orange` - Laranja
- `color-red` - Vermelho
- `color-indigo` - Índigo
- `color-teal` - Azul-petróleo

### Ajustar Estilos

Edite o arquivo `style.css` para modificar:
- Cores
- Tamanhos de fonte
- Espaçamentos
- Layout responsivo

## 📊 Métricas de Sucesso

- **Taxa de conversão**: Visitas → Vendas
- **Ticket médio**: Valor médio por venda
- **Reputação**: Verde/Laranja até semana 8
- **Catálogo**: 20+ produtos até semana 6
- **Tempo de resposta**: < 2 horas

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Gilnei**
- Empresa: Center Sul
- Website: [centersul.net.br](https://centersul.net.br)

## 📞 Suporte

Para dúvidas ou sugestões:
- Abra uma [Issue](https://github.com/SEU_USUARIO/cronograma-ml-gilnei/issues)
- Entre em contato através do website

## 🙏 Agradecimentos

- Mercado Livre pela plataforma
- Comunidade de vendedores pelo conhecimento compartilhado

---

**Desenvolvido com ❤️ para vendedores de produtos de barbearia**

*Última atualização: Janeiro 2026*
```

---

## **Arquivo EXTRA: .gitignore (recomendado)**
```
# Sistema operacional
.DS_Store
Thumbs.db

# Editores
.vscode/
.idea/
*.swp
*.swo
*~

# Temporários
*.log
*.tmp
```

---

## **Estrutura completa final:**
```
cronograma-ml-gilnei/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
