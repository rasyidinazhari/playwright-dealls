# Dealls SFL Navigation & Registration Automation  
This repository contains the automation project for navigating and testing features on the **SejutaCita Future Leaders (SFL)** page of Dealls:  
➡️ https://dealls.com/sfl

The project is written using **Playwright + Cucumber (BDD)** and covers:
- Navigation menu automation  
- Registration flow automation  
- File upload automation  
- Custom UI checkbox interaction  
- Cross-page handling (popup/new tab)  

---

## 📁 Project Structure

The root test directory is structured as follows:
- ├── src
- │ └── test
- │ ├── assets
- │ │ ├── 1760643117095.png
- │ │ └── lai.jpeg
- │ ├── components
- │ │ └── navigationComponent.ts
- │ ├── features
- │ │ └── navigationRegistration.feature
- │ ├── hooks
- │ │ └── hooks.ts
- │ └── steps
- │ └── navigationRegistration.Steps.ts


### 📌 Description by folder:

| Folder | Description |
|--------|-------------|
| `assets/` | Contains sample files for upload testing (images, documents). |
| `components/` | Page-object like components (e.g., navigation helpers). |
| `features/` | Gherkin BDD scenarios written in `.feature` format. |
| `hooks/` | Cucumber hooks (before/after scenario, browser/session handlers). |
| `steps/` | Step definitions linked to Gherkin steps. |

---

## 📝 Gherkin Feature File  
All Gherkin feature files are located in:  
- src/test/features/**/*.feature


The main feature file in this project is:
- src/test/features/navigationRegistration.feature


It describes:
- Navigation menu test flow  
- Registration popup & file upload  
- Checkbox agreement handling  
- Final submission verification  

---

## 🚀 Running the Tests

Make sure dependencies are installed:
```bash
npm install
```
Run all tests:
```bash
npm test
```
Or run with cucumber tag (example):
```bash
npx cucumber-js --tags "@registration"
```

### 🔧 Tech Stack Used
- Playwright – browser automation
- Cucumber.js – BDD testing framework
- TypeScript – strongly-typed development
- Page Object Pattern (Components folder)
- Custom element handling (checkbox, popup, shadow DOM when needed)

### 🙏 Acknowledgment
Thank you for reviewing my test project.
I hope this submission demonstrates strong fundamentals in:
- ✅ UI automation
- ✅ Handling dynamic elements
- ✅ Playwright best practices
- ✅ Cucumber BDD structure
- ✅ Popup/tab handling
- ✅ File upload automation
- ✅ Locator accuracy

Hope I can pass the test. Have a great day! ✨

### 🔗 Connect with me

LinkedIn: https://linkedin.com/in/rasyidinazhari | 
GitHub: https://github.com/rasyidinazhari
