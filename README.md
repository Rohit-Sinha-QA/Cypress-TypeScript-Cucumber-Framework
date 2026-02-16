## 📌 Cypress + TypeScript + Cucumber (BDD) Framework
This is a complete **Cypress + TypeScript + Cucumber (BDD)** automation framework with:

✅ Feature files (`.feature`)
✅ Step Definitions
✅ Page Object Model (POM)
✅ UI + API testing
✅ Tagging (`@test`)
✅ Mochawesome HTML Reports generation
✅ CLI execution support

---

## ✅ STEP 1: Clone the Repository

```bash
git clone <your-repo-url>
```

## ✅ STEP 2: Go Inside the Project Folder

```bash
cd cypress-typescript-cucumber-framework
```

## ✅ STEP 3: Install Dependencies (Recommended)

```bash
npm install
```

---

# 📦 If You Want to Install Everything Manually (Optional)

> ⚠️ You do **NOT** need this section if you already ran `npm install`.

### Install Cypress + TypeScript

```bash
npm install --save-dev cypress typescript
npm install --save-dev @types/cypress @types/node
```

### Install Cucumber + ESBuild Preprocessor

```bash
npm install --save-dev @badeball/cypress-cucumber-preprocessor@latest
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor esbuild
```

### Install Mochawesome Reporter

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
npm install --save-dev cypress-mochawesome-reporter
```

# 🧪 TEST EXECUTION COMMANDS

## ✅ STEP 4: Run in Chrome Headless Mode

```bash
npx cypress run
```

## ✅ STEP 5: Run in Chrome Headed Mode

```bash
npx cypress run --browser chrome --headed --env TAGS="@test"
```

## ✅ STEP 6: Run in Chrome Headed Mode for a specific tag

```bash
npx cypress run --browser chrome --headed --env TAGS="@tag_name"
```


# 📊 REPORT GENERATION

## ✅ STEP 7: Generate Cucumber HTML Report

Report will generate automatically in reports folder


# ✅ Framework is Ready 🎉

Now you can start writing new `.feature` files, step definitions, and page objects.
