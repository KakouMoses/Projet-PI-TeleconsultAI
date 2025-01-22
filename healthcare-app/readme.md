# Backend pour l'application de téléconsultation

## Vue d'ensemble

Ce backend est conçu pour prendre en charge une application de téléconsultation qui intègre un Large Language Model (LLM) pour faciliter la communication entre le front-end et le backend.

## Fonctionnalités

- Authentification des utilisateurs
- Gestion des patients et des médecins
- Planification des rendez-vous
- Intégration de chat avec LLM
- Gestion des dossiers médicaux

## Technologies

- Node.js
- Express.js
- MongoDB
- API OpenAI (pour LLM)
- JWT (pour l'authentification)

## Installation

1. Cloner le dépôt :

    ```bash
    git clone https://github.com/yourusername/teleconsult-backend.git
    cd teleconsult-backend
    ```

2. Installer les dépendances :

    ```bash
    npm install
    ```

3. Configurer les variables d'environnement :
    Créez un fichier `.env` dans le répertoire racine et ajoutez les éléments suivants :

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    OPENAI_API_KEY=your_openai_api_key
    ```

4. Démarrer le serveur :

    ```bash
    npm start
    ```

## Points de terminaison de l'API

### Authentification

- **POST /api/auth/register**: Enregistrer un nouvel utilisateur
- **POST /api/auth/login**: Connecter un utilisateur

### Utilisateurs

- **GET /api/users**: Obtenir tous les utilisateurs
- **GET /api/users/:id**: Obtenir un utilisateur par ID
- **PUT /api/users/:id**: Mettre à jour un utilisateur par ID
- **DELETE /api/users/:id**: Supprimer un utilisateur par ID

### Rendez-vous

- **POST /api/appointments**: Créer un nouveau rendez-vous
- **GET /api/appointments**: Obtenir tous les rendez-vous
- **GET /api/appointments/:id**: Obtenir un rendez-vous par ID
- **PUT /api/appointments/:id**: Mettre à jour un rendez-vous par ID
- **DELETE /api/appointments/:id**: Supprimer un rendez-vous par ID

### Chat

- **POST /api/chat**: Envoyer un message au LLM et obtenir une réponse

## Exemple d'utilisation du point de terminaison de chat

Pour envoyer un message au LLM et recevoir une réponse, faites une requête POST à `/api/chat` avec le corps JSON suivant :

```json
{
  "message": "Bonjour, j'ai besoin d'aide avec mes symptômes."
}
```

La réponse contiendra la réponse du LLM :

```json
{
  "response": "Bien sûr, pouvez-vous décrire vos symptômes en détail ?"
}
```

## Contribuer

Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails sur notre code de conduite et le processus de soumission des pull requests.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Gestion des consultations

Chaque consultation est associée à un utilisateur (patient) et comprend une synthèse de la conversation enregistrée avec le LLM, ainsi que les examens complémentaires et leurs résultats. Ces informations sont stockées dans la base de données pour un accès et une gestion faciles.

### Points de terminaison des consultations

- **POST /api/consultations**: Créer une nouvelle consultation pour un utilisateur
- **GET /api/consultations**: Obtenir toutes les consultations
- **GET /api/consultations/:id**: Obtenir une consultation par ID
- **PUT /api/consultations/:id**: Mettre à jour une consultation par ID
- **DELETE /api/consultations/:id**: Supprimer une consultation par ID

### Exemple d'utilisation du point de terminaison de consultation

Pour créer une nouvelle consultation pour un utilisateur, faites une requête POST à `/api/consultations` avec le corps JSON suivant :

```json
{
    "userId": "id_utilisateur",
    "summary": "Résumé de la consultation",
    "conversation": "Conversation enregistrée avec le LLM",
    "exams": [
        {
            "type": "Type d'examen",
            "result": "Résultat de l'examen"
        }
    ]
}
```

La réponse contiendra les détails de la consultation créée :

```json
{
    "id": "id_consultation",
    "userId": "id_utilisateur",
    "summary": "Résumé de la consultation",
    "conversation": "Conversation enregistrée avec le LLM",
    "exams": [
        {
            "type": "Type d'examen",
            "result": "Résultat de l'examen"
        }
    ],
    "createdAt": "date_de_creation",
    "updatedAt": "date_de_mise_a_jour"
}
```
