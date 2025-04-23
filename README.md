# QA DevOps Automation Reports 🚀

Este proyecto representa una evolución profesional del ciclo de pruebas automatizadas, donde no solo se automatizan pruebas, sino también la forma en que se ejecutan, reportan y visualizan los resultados con herramientas modernas de DevOps.

Incluye:

1. 🧪 Pruebas de API con Postman + Newman  
2. 🖥️ Pruebas de UI con Cypress  
3. 📊 Reportes visuales generados con Mochawesome  
4. ⚙️ CI automatizado con GitHub Actions (ejecución + reportes)  

---

## 📁 Estructura del Proyecto

```
qa-devops-automation-reports/
│
├── api-tests/
│   ├── crud-api-tests.json        # Colección Postman
│   └── report/                    # Reporte HTML de Newman
│
├── ui-tests/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   └── login.cy.js        # Prueba UI Cypress
│   │   ├── reports/
│   │   │   └── index.html         # Reporte visual Mochawesome
│   │   ├── screenshots/           # Capturas de Cypress
│   │   └── cypress.config.js      # Configuración Cypress
│
├── .github/
│   └── workflows/
│       └── ci.yml                 # Pipeline de CI/CD
│
└── README.md                      # Este documento
```

---

## 🚀 ¿Cómo ejecutar las pruebas?

### ✅ 1. API Test (Postman + Newman)

```bash
npm run api-test
```

Genera un reporte en:

```
api-tests/report/report.html
```

---

### ✅ 2. UI Test (Cypress + Mochawesome)

```bash
npm run ui-test
```

Esto ejecuta las pruebas Cypress.

Luego, para generar el reporte visual:

```bash
npm run report-ui
```

El reporte se crea en:

```
ui-tests/cypress/reports/index.html
```

---

## ⚙️ CI con GitHub Actions

Cada vez que haces push al repositorio `main`, se ejecuta:

- `npm run api-test`
- `npm run ui-test`
- Generación automática del reporte HTML
- Carga del reporte como artefacto descargable

Puedes verlo en la pestaña [Actions](https://github.com/tu-usuario/qa-devops-automation-reports/actions)

---

## ❗Nota sobre Cypress

Durante las pruebas UI, **una prueba de logout puede fallar aleatoriamente** por una excepción interna de la app de demo (OrangeHRM).  
Esto no representa un fallo del test como tal, sino un error del entorno.

---

## 👤 Autor

**Cristian Camilo Delgado**  
👨‍💻 Técnico en Programación de Software - SENA  
🚀 En búsqueda activa de su primer rol en QA Automation  
💡 Apasionado por la disciplina, el aprendizaje continuo y la automatización de calidad.

📬 Contacto: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Hyokenhi](https://github.com/Hyokenhi)

---

# QA DevOps Automation Reports 🚀

This project represents a professional evolution of automated QA pipelines, where not only the tests are automated, but also the way they are executed, reported, and visualized using DevOps tools.

Includes:

1. 🧪 API Testing with Postman + Newman  
2. 🖥️ UI Testing with Cypress  
3. 📊 Visual Reports generated with Mochawesome  
4. ⚙️ CI automation with GitHub Actions (execution + reporting)  

---

## 📁 Project Structure

```
qa-devops-automation-reports/
│
├── api-tests/
│   ├── crud-api-tests.json        # Postman Collection
│   └── report/                    # Newman HTML Report
│
├── ui-tests/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   └── login.cy.js        # UI Cypress Test
│   │   ├── reports/
│   │   │   └── index.html         # Mochawesome Report
│   │   ├── screenshots/           # Cypress screenshots
│   │   └── cypress.config.js      # Cypress config
│
├── .github/
│   └── workflows/
│       └── ci.yml                 # CI Workflow
│
└── README.md                      # This file
```

---

## 🚀 How to Run the Tests

### ✅ 1. API Test (Postman + Newman)

```bash
npm run api-test
```

This generates a report at:

```
api-tests/report/report.html
```

---

### ✅ 2. UI Test (Cypress + Mochawesome)

```bash
npm run ui-test
```

Then generate the visual report:

```bash
npm run report-ui
```

The report is created at:

```
ui-tests/cypress/reports/index.html
```

---

## ⚙️ CI with GitHub Actions

Every time you push to `main`, GitHub Actions automatically:

- Runs API and UI tests
- Generates a visual HTML report
- Uploads the report as a downloadable artifact

See it under the [Actions](https://github.com/Crisweisk/qa-devops-automation-reports/actions) tab.

---

## ❗ Note on Cypress

During UI testing, **the logout test may fail randomly** due to internal errors in the OrangeHRM demo app.  
This is not a problem with the test itself, but with the unstable demo environment.

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Actively seeking his first role in QA Automation  
💡 Passionate about discipline, continuous learning, and quality automation.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Crisweisk](https://github.com/Hyokenhi)
