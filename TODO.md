# 🚀 TODO: Monorepo con Northflank + Docker + CI/CD

## 📋 **Estado del Proyecto**
- ✅ Repositorio limpio con carpetas `/frontend` y `/backend` vacías
- ✅ Northflank configurado y listo
- 🔄 **En progreso**: Configuración de servicios y CI/CD

---

## 🎯 **FASE 1: Configuración de Servicios en Northflank**

### **1.1 Frontend Service (React Vite)**
- [x] Crear servicio "frontend" en Northflank
- [x] Configurar source: Git (monorepoTest)
- [x] Configurar path: `/frontend`
- [x] Configurar build: Docker
- [x] Configurar puerto: 80
- [x] **URL**: https://p01--frontend--5k9g86lnqs8x.code.run/

### **1.2 Backend Service (Nest.js)**
- [ ] Crear servicio "backend" en Northflank
- [ ] Configurar source: Git (monorepoTest)
- [ ] Configurar path: `/backend`
- [ ] Configurar build: Docker
- [ ] Configurar puerto: 3001 (o el que use Nest.js)

### **1.3 Secrets para Neon DB**
- [ ] Crear secret "neon-db-connection"
- [ ] Crear secret "neon-db-url"
- [ ] Configurar variables de entorno en servicios

---

## 🐳 **FASE 2: Creación de Proyectos Locales**

### **2.1 Frontend (React Vite)**
- [x] Crear proyecto React Vite en `/frontend`
- [x] Crear `Dockerfile` para frontend
- [x] Configurar `package.json` con scripts de build
- [x] Crear `.dockerignore`
- [x] Configurar variables de entorno

### **2.2 Backend (Nest.js)**
- [x] Crear proyecto Nest.js en `/backend`
- [x] Crear `Dockerfile` para backend
- [x] Configurar `package.json` con scripts
- [x] Crear `.dockerignore`
- [ ] Configurar Prisma para Neon DB
- [x] Crear endpoint básico de prueba

---

## 🔄 **FASE 3: CI/CD con GitHub Actions**

### **3.1 GitHub Actions Workflow**
- [ ] Crear `.github/workflows/deploy.yml`
- [ ] Configurar detección de cambios en `/frontend`
- [ ] Configurar detección de cambios en `/backend`
- [ ] Integrar con Northflank API
- [ ] Configurar deploys condicionales

### **3.2 Northflank API Integration**
- [ ] Obtener API key de Northflank
- [ ] Configurar secrets en GitHub
- [ ] Crear scripts de deploy automático
- [ ] Probar deploys manuales

---

## 🧪 **FASE 4: Testing y Validación**

### **4.1 Testing Local**
- [ ] Probar builds de Docker localmente
- [ ] Verificar conectividad con Neon DB
- [ ] Probar endpoints del backend
- [ ] Verificar frontend en local

### **4.2 Testing CI/CD**
- [ ] Push cambio solo en frontend → Verificar deploy
- [ ] Push cambio solo en backend → Verificar deploy
- [ ] Push cambio en ambos → Verificar ambos deploys
- [ ] Verificar que no se hagan deploys innecesarios

---

## 📚 **FASE 5: Documentación y Optimización**

### **5.1 Documentación**
- [ ] Actualizar README.md con instrucciones
- [ ] Documentar variables de entorno
- [ ] Crear guía de desarrollo local
- [ ] Documentar proceso de deploy

### **5.2 Optimización**
- [ ] Optimizar Dockerfiles (multi-stage builds)
- [ ] Configurar cache de dependencias
- [ ] Optimizar tiempos de build
- [ ] Configurar health checks

---

## 🔧 **Tecnologías Utilizadas**

### **Frontend**
- React 18+ con Vite
- Docker para containerización
- Netlify para hosting (opcional)

### **Backend**
- Nest.js con TypeScript
- Prisma ORM
- Neon DB (PostgreSQL)
- Docker para containerización

### **CI/CD**
- GitHub Actions
- Northflank API
- Docker containers
- Deploys condicionales

### **Base de Datos**
- Neon DB (PostgreSQL serverless)
- Prisma como ORM
- Migraciones automáticas

---

## 📝 **Notas Importantes**

- **Límites de Northflank Free**: 2 servicios, 1 addon, secrets ilimitados
- **Deploys condicionales**: Solo deployar cuando hay cambios en la carpeta correspondiente
- **Variables de entorno**: Usar secrets de Northflank para datos sensibles
- **Docker**: Optimizar para builds rápidos y tamaños pequeños

---

## 🎯 **Próximo Paso**
**Crear Frontend Service en Northflank** → Configurar React Vite → Dockerfile → Test local

---

*Última actualización: $(date)*
