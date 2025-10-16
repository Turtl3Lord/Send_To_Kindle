# 📚 Send To Kindle

Aplicativo móvel desenvolvido em **React Native** que permite **converter arquivos para EPUB** e **enviar documentos diretamente para o Kindle**.  
O projeto adota o padrão **MVP (Model–View–Presenter)** e integra módulos **C++** para o processamento e conversão de arquivos, com foco em modularidade, desempenho e clareza arquitetural.  

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey)

---

## 🧭 Visão geral

**Send To Kindle** tem como objetivo oferecer uma forma simples e eficiente de enviar e-books ao Kindle.  
O aplicativo permite **converter arquivos de diferentes formatos para EPUB** e, opcionalmente, **enviá-los automaticamente para o e-mail Kindle do usuário**.  

O projeto também serve como **portfólio técnico**, destacando boas práticas de arquitetura, versionamento e documentação profissional.

---

## ⚙️ Arquitetura

O projeto segue o padrão **MVP (Model–View–Presenter)**:

- **View (React Native)** – Interface e navegação, incluindo a *Bottom Navigation Bar* com as abas “Converter” e “Enviar para o Kindle”.  
- **Presenter (TypeScript)** – Camada intermediária que gerencia a comunicação entre a interface e o domínio da aplicação.  
- **Model (C++)** – Responsável pela lógica de conversão de arquivos para EPUB, com módulos separados para cada tipo de formato suportado.  

Essa separação garante **facilidade de manutenção, testabilidade e escalabilidade**.

---

## 📱 Funcionalidades

| Funcionalidade | Status | Descrição |
|----------------|---------|------------|
| Estrutura inicial do app | ✅ Concluído | Projeto configurado com React Native e C++. |
| Navegação e telas principais | ✅ Concluído | Telas “Converter” e “Enviar” acessíveis via Bottom Navigation. |
| Organização MVP | ✅ Concluído | Pastas criadas para separar camadas do padrão MVP. |
| File Picker | ✅ Concluído | Implementado seletor de arquivos nativo. |
| Conversão para EPUB (C++) | 🔄 Em andamento | Módulos criados, implementação pendente. |
| Envio ao Kindle (TypeScript) | 🔍 Em análise | Decisão pendente entre lib pronta e implementação própria. |
| Responsividade da interface | ⚙️ Em ajuste | Melhorias visuais em progresso. |
| Suporte a múltiplos idiomas | 🧩 Planejado | Inicialmente disponível em português. |

---

## 🚀 Roadmap

- [x] Estrutura inicial do projeto  
- [x] Criação das telas e navegação principal  
- [x] Organização das pastas conforme MVP  
- [x] Implementação do file picker  
- [x] Refatoração de estilos para pasta externa  
- [x] Criação da pasta `converters/`  
- [ ] Implementar módulo C++ de conversão para EPUB  
- [ ] Implementar envio de arquivos para Kindle  
- [ ] Ajustar responsividade da interface  
- [ ] Adicionar suporte a novos formatos de conversão  
- [ ] Adicionar testes automatizados  

---

## 🧩 Principais commits

| Data | Tipo | Descrição |
|------|------|------------|
| 09/10/2025 | 🏗️ build | Estrutura inicial do projeto criada. |
| 09/10/2025 | ✨ feat | Primeiro commit de inicialização. |
| 10/10/2025 | ✨ feat | Adicionadas as telas Convert, Send e Home; navegação implementada. |
| 10/10/2025 | 🧱 feat | Criadas as pastas MVP. |
| 11/10/2025 | ✨ feat | Adicionado file picker e limpeza de imports. |
| 12/10/2025 | 🧩 feat | Pasta `converters/` adicionada para futuros módulos C++. |
| 12/10/2025 | 🔧 refactor | Linhas não utilizadas removidas. |
| 12/10/2025 | 🎨 refactor(styles) | Estilos movidos para pasta externa. |

---

## 🧠 Tecnologias

- **React Native (TypeScript)** – Interface e navegação.  
- **C++ (Native Modules)** – Processamento e conversão de arquivos.  
- **React Navigation** – Navegação entre telas com Bottom Tabs.  
- **Android / iOS** – Suporte multiplataforma.  

---

## 🧪 Status do desenvolvimento

O aplicativo encontra-se na **fase de construção funcional**, com a estrutura de telas e navegação finalizadas e a base C++ preparada para receber a lógica de conversão.  
O envio ao Kindle e a implementação dos módulos de conversão ainda estão em desenvolvimento.

---

## ⚙️ Como executar o projeto

```bash
# Clone este repositório
git clone https://github.com/Turtl3Lord/Send_To_Kindle.git

# Acesse a pasta
cd Send_To_Kindle

# Instale as dependências
npm install

# Execute no Android
npm run android

# Execute no iOS
npm run ios
