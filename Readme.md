**Exercice 1 (10min) : Questions**

1. **Les variables existent en Javascript mais n’existent ni en HTML ni en CSS. Vrai ou Faux ?**
    - **Vrai**. Les variables sont une caractéristique des langages de programmation comme JavaScript. En HTML, il n'y a pas de concept de variables car HTML est un langage de balisage, pas un langage de programmation. En CSS, les variables existent mais elles sont appelées "custom properties" et commencent par "--".
2. **Quelle est la différence entre ces différentes méthodes de stockage :**
    - **a. Cookie :** Les cookies sont des petits morceaux de données stockés par le navigateur et envoyés au serveur avec chaque requête HTTP. Ils ont une date d'expiration et peuvent être utilisés pour le suivi des sessions.
    - **b. SessionStorage :** SessionStorage stocke des données pour une session de navigateur. Les données sont perdues lorsque l'onglet ou la fenêtre du navigateur est fermé.
    - **c. LocalStorage :** LocalStorage stocke des données sans date d'expiration. Les données sont disponibles même après la fermeture et la réouverture du navigateur.
3. **Quelles sont les règles CSS qui doivent être ajoutées pour appliquer un ellipsis sur un texte ?**
    - 
        
        ```css
        .texte-ellipsis {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        ```

4. **Vous êtes face à une liste de 1000 éléments (<li></li>) pour lesquels chacun de ces éléments déclenche au clic une alerte avec le texte du contenu. Comment et pourquoi optimisez-vous l’écoute d'événement dans ce cas ?**
    - Pour optimiser l'écoute d'événement, j'utiliserais la délégation d'événement. Plutôt que d'attacher un écouteur à chaque élément `<li>`, j'attacherais un seul écouteur à un parent commun (comme `<ul>`). Cela améliore les performances car il y a moins de gestionnaires d'événements :
        
        ```js
        document.querySelector('ul').addEventListener('click', function(event) {
          if (event.target.tagName === 'LI') {
            alert(event.target.textContent);
          }
        });
        
        ```
        
5. **Quelles sont les différences entre les types de variable suivants : var, let et const ?**
    - **var :** Déclaré avec `var`, a une portée de fonction ou globale, peut être redéclaré et réassigné.
    - **let :** Déclaré avec `let`, a une portée de bloc, ne peut pas être redéclaré dans la même portée mais peut être réassigné.
    - **const :** Déclaré avec `const`, a une portée de bloc, ne peut pas être redéclaré ni réassigné. Cependant, pour les objets, les propriétés peuvent être modifiées.
6. **Quels sont les différents avantages à l’utilisation des outils de développement “Performances” et “Mémoire” dans les navigateurs Firefox et Chromium ?**
    - Les outils de développement “Performances” aident à analyser et à améliorer les temps de chargement des pages, à identifier les goulots d'étranglement, et à optimiser les animations.
    - Les outils de “Mémoire” aident à détecter les fuites de mémoire, à surveiller l'utilisation de la mémoire par les différentes parties de l'application, et à optimiser la gestion de la mémoire.
7. **Quelle a été votre tâche la plus ardue face à laquelle vous vous êtes confronté au cours de votre expérience professionnelle ?**
    - Une des tâches les plus difficiles a été d'optimiser les performances web des différents sites web de l'entreprise Uni Médias car les sites sont extrêmement ralentis par tous les scripts publicitaires présents. C'était une compétence que j'ai dû acquérir sur le tas car je n'avais jamais fait cela auparavant.
8. **Quelle est la dernière chose que vous avez apprise récemment ?**
    - Récemment, j'ai appris à utiliser Node JS, Vue JS, Mongo DB et Sequelize pour mon projet du second semestre qui est un site e-commerce utilisant une base de données PostgreSQL et une base de données Mongo DB.
9. **Cette année, quelle techno aimeriez-vous apprendre et utiliser ?**
    - Cette année, j'aimerais apprendre et utiliser React essentiellement pour avoir une vraie expertise dessus. Mais aussi Node JS que j'apprends en autodidacte avec son framework Express, pour être sur une stack full JS.