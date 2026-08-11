# Student API — CRUD Étudiants

## 1. Base de données
- Crée la base : `CREATE DATABASE student_db;`
- Exécute `sql/schema.sql` dedans (crée la table `etudiants`).

## 2. Configuration
```
cp .env.example .env
```
Remplis `.env` avec tes identifiants PostgreSQL.

## 3. Installation
```
npm install
```

## 4. Lancement
```
npm run dev    # avec nodemon (redémarre auto)
# ou
npm start
```

Le serveur démarre sur http://localhost:3000

## 5. Endpoints
| Action | Méthode | URL |
|---|---|---|
| Lister | GET | /etudiants |
| Lire un | GET | /etudiants/:id |
| Créer | POST | /etudiants |
| Modifier | PUT | /etudiants/:id |
| Supprimer | DELETE | /etudiants/:id |

Exemple body POST/PUT (JSON) :
```json
{
  "first_name": "Rina",
  "last_name": "Rakoto",
  "email": "rina@example.com",
  "age": 21
}
```
