# 📚 Send To Kindle  
**🇧🇷 Português | 🇬🇧 English**

---

## 🇧🇷 Descrição (Português)

**Send To Kindle** é um aplicativo móvel desenvolvido em **React Native** que permite **converter arquivos para EPUB** e **enviar documentos diretamente ao Kindle via e-mail SMTP**.  
O projeto adota o padrão **MVP (Model–View–Presenter)** e integra módulos nativos em **C++** para o processamento e conversão de arquivos, garantindo desempenho, modularidade e clareza arquitetural.  

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey)

---

## 🧭 Visão geral

O objetivo do **Send To Kindle** é oferecer uma forma simples e eficiente de **enviar e-books ao Kindle**, eliminando etapas manuais e otimizando o fluxo de conversão.  
Atualmente, o aplicativo suporta os seguintes formatos de entrada:

- **TXT → EPUB**  
- **MOBI → EPUB**  
- **WORD (.docx) → EPUB**

Após a conversão, o arquivo pode ser enviado automaticamente para o **endereço de e-mail Kindle configurado pelo usuário**.

O projeto também serve como **portfólio técnico**, destacando boas práticas de arquitetura, integração nativa e documentação profissional.

---

## ⚙️ Arquitetura

O projeto segue o padrão **MVP (Model–View–Presenter)**:

- **View (React Native)** – Interface e navegação, incluindo uma *Bottom Navigation Bar* com as abas “Converter” e “Enviar para o Kindle”.  
- **Presenter (TypeScript)** – Gerencia a lógica de interação entre a interface e o domínio da aplicação.  
- **Model (C++)** – Responsável pela conversão de arquivos para EPUB, com módulos independentes para cada formato de origem.

Essa separação garante **testabilidade, escalabilidade e manutenção facilitada**.

---

## 📱 Funcionalidades

| Funcionalidade | Status | Descrição |
|----------------|---------|------------|
| Estrutura inicial do app | ✅ Concluído | Projeto configurado com React Native e C++. |
| Navegação e telas principais | ✅ Concluído | Telas “Converter” e “Enviar” acessíveis via Bottom Navigation. |
| Organização MVP | ✅ Concluído | Separação clara entre Model, View e Presenter. |
| File Picker nativo | ✅ Concluído | Implementado seletor de arquivos do sistema. |
| Conversão para EPUB (C++) | 🔄 Em andamento | Módulos criados para TXT, MOBI e DOCX. |
| Envio ao Kindle (SMTP) | 🔍 Em análise | Implementação em TypeScript em desenvolvimento. |
| Responsividade da interface | ⚙️ Em ajuste | Refinamentos visuais em progresso. |
| Suporte a múltiplos idiomas | 🧩 Planejado | Inicialmente disponível em português. |

---

## 🚀 Roadmap

- [x] Estrutura inicial do projeto  
- [x] Criação das telas e navegação principal  
- [x] Organização das pastas conforme MVP  
- [x] Implementação do file picker  
- [x] Refatoração de estilos para pasta externa  
- [x] Criação da pasta `converters/`  
- [ ] Implementar módulo C++ de conversão (TXT, MOBI, DOCX → EPUB)  
- [ ] Implementar envio de arquivos via SMTP  
- [ ] Ajustar responsividade da interface  
- [ ] Adicionar novos formatos de conversão  
- [ ] Adicionar testes automatizados  

---

## 🧱 Principais commits

| Data | Tipo | Descrição |
|------|------|------------|
| 09/10/2025 | 🏗️ build | Estrutura inicial do projeto criada. |
| 09/10/2025 | ✨ feat | Commit inicial de configuração. |
| 10/10/2025 | ✨ feat | Adicionadas as telas Convert, Send e Home; navegação implementada. |
| 10/10/2025 | 🧱 feat | Criadas as pastas MVP. |
| 11/10/2025 | ✨ feat | Adicionado file picker e limpeza de imports. |
| 12/10/2025 | 🧩 feat | Pasta `converters/` adicionada para módulos C++. |
| 12/10/2025 | 🔧 refactor | Linhas não utilizadas removidas. |
| 12/10/2025 | 🎨 refactor(styles) | Estilos movidos para pasta externa. |

---

## 🧠 Tecnologias

- **React Native (TypeScript)** – Interface e lógica de apresentação.  
- **C++ (Native Modules)** – Conversão de arquivos.  
- **React Navigation** – Navegação entre telas.  
- **SMTP (Email Service)** – Envio direto ao Kindle.  
- **Android / iOS** – Suporte multiplataforma.  

---

## ⚙️ Execução do projeto

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
