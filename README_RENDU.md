Membres du groupe :
GARDENAT Cyril,
ANGELINI Anaël,
PETRONIN Florian,
DEFOURNE Pénélope

Nous avons conçu l'application "Mon suivi Migraine" qui permet aux utilisateurs de renseigner des informations sur leurs migraines et d'obtenir des données. Cette application fait office de journal de bord : l'utilisateur a la possibilité de visualiser les informations concernant ses migraines sur un calendrier et d'avoir une vue "globale" de ces informations par le biais d'analyses statistiques.

## 1. Recherche et benchmark

Notre objectif étant de réaliser une application innovante, nous avons préalablement réalisé des recherches sur les migraines et sur les applications existantes.
Ces recherches ont notamment permis de déterminer les différents facteurs qui peuvent déclencher ou amplifier une migraine. Ensuite, une veille technologique a permis de regarder les différentes applications de suivi de migraine existantes pour constater ce qui est intéressant et ce qui peut être amélioré. Nous nous sommes notamment inspiré de l'application "Apo Migraine" qui a la particularité de permettre aux utilisateurs d'enregistrer une migraine rapidement en posant uniquement les questions les plus pertinentes. Concernant la localisation de la douleur, nous avons réalisé des images avec les différentes localisations cérébrales comme sur l'application "Migraine Buddy", pour permettre à l'utilisateur d'indiquer plus facilement cette localisation. L'aspect sombre des couleurs de cette application nous a également semblé intéressant pour ce type d'application, étant donné que la luminosité peut amplifier la douleur ressentie lors d'une migraine. Ainsi, nous avons choisi un fond gris foncé, avec des couleurs peu agressives visuellement. Les couleurs ont été choisi grâce à dribble (Thème : https://dribbble.com/shots/18020068-Talk-App). Enfin, l'application "HeadApp" nous a aidé pour donner des "types" de douleurs suffisamment compréhensibles car dans Migraine Buddy, les types de douleurs n'étaient pas toujours très clairs (par exemples, "céphalée de tension", "céphalée en grappes"). Nous avons préfére utilisé des termes plus simples car plus compréhensibles pour les utilisateurs qui peuvent alors renseigner plus facilement des informations sur leur migraine.

## 2. Description des maquettes et des fonctionnalités


Dans les parties ci-dessous, vous retrouverez les maquettes de l'application que nous avons mis en place.

**1) Page d'accueil** : 


![page_accueil](maquettes\page_accueil.png)

En ouvrant l'application, l'utilisateur accède à une page d'accueil qui lui propose de s'identifier ou de s'inscrire. S'il souhaite s'inscrire, il clique sur le bouton correspondant et arrive sur la page "Créer un compte". Il devra simplement renseigner son adresse mail, un pseudonyme et un mot de passe, avec la possibilité de s'inscrire avec google ou facebook. Pour se connecter, il clique sur "S'identifier", ce qui l'amène à la page "Se connecter" dans laquelle il devra renseigner son adresse mail et son mot de passe, ou se connecter rapidement par le biais de google ou facebook.

**2) Page de connexion** :


![se_connecter](maquettes\se_connecter.png)

**3) Page d'inscription** :


![inscription](maquettes\inscription.png)

_Remarque_ : Les boutons de connexion et d'inscription avec Facebook ou Google ne sont pas fonctionnels


**4) Onglet Menu** (i.e. page principale) :

Une fois identifié, l'utilisateur est sur la "Page principale" composée de 4 onglets : Menu, Ma journée, Profil et Appareil. L'utilisateur est par défaut sur l'onglet menu. Il s'agit de l'onglet principale où les utilisateurs retrouvent un certain nombre d'informations sur leurs migraines. Cela lui donne accès à un calendrier dans lequel il peut visualiser les différentes dates avec présence de migraine ou non. Il peut cliquer sur une date pour accéder aux données renseigner sur ce jour.
Il accède également à un résumé des 30 derniers jours, qui lui renseigne le nombre de crises sur cette période, la durée moyenne et l'intensité moyenne de ces crises. Ceci permet à l'utilisateur d'avoir une vue d'ensemble sur ses crises. Il peut aussi voir son rythme cardiaque et son sommeil. En effet, une fréquence cardiaque trop élevée peut renvoyer à du stress (ou à un effort physique) et peut potentiellement être à l'origine d'une migraine. De même, une nuit de sommeil trop courte (par rapport aux habitudes de l'utilisateur) est favorable au déclenchement d'une migraine. Enfin, il peut visualiser les principaux déclencheurs de ses migraines avec le pourcentage d'apparition par rapport à l'ensemble des migraines. L'intérêt de cette page est que l'utilisateur sache les principaux éléments qui déclenchent ses migraines pour qu'il puisse agir dessus et ainsi diminuer l'apparition de nouvelles crises (e.g. essayer de dormir plus, diminuer sa consommation de café, etc.).


![page_principale_sommeil](maquettes\page_principale_sommeil.png)
![page_principale_freqcard](maquettes\page_principale_freqcard.png)


Sur cet onglet, plusieurs informations s'y trouvent : 

-   Un calendrier sur lequel les jours où l'utilisateur a inscrit une migraine sont représentés par la couleur verte avec un icône blanc. Si l'utilisateur appuie sur un des jours colorés, il aura des informations sur la migraine du jour. L'accès à certaines informations (comme la localisation de la migraine) peut même être utile si l'utilisateur souhaite discuter de ses crises avec un médecin (peut-être que la douleur n'est pas une migraine mais est le symptôme d'une maladie) : 

![donnees_migraines_jour](maquettes\donnees_migraines_jour.png)

-   Un second widget synthétisant les informations du dernier mois sur la migraine

-   Les principaux déclencheurs de migraine, calculés à partir des déclencheurs que l'utilisateur indiquent lorsqu'il enregistre une migraine

-   La fréquence cardiaque moyenne de la journée OU un graphique représentant le temps de sommeil et la durée des différents rythmes.



**5) Enregistrer une migraine** : 
*   Étape 1 : L'utilisateur informe la durée de la migraine 


![enregistrer_crise](maquettes\enregistrer_crise.png)

    - Heure de début : 
![heure_debut](maquettes\heure_debut.png)

    - Heure de fin : 
![heure_fin](maquettes\heure_fin.png)


*   Étape 2 : Des informations sur les caractéristiques de la migraine sont demandées. Pour ce qui est du type de migraine, nous avons préféré nous baser sur les ressentis de l'utilisateur en termes de douleurs (est-ce que la douleur leur donne la sensation d'une brûlure ou d'un "choc électrique" ?) que des termes médicaux qui ne sont pas nécessairement évocateurs pour les utilisateurs : 


![enregistrer_crise2](maquettes\enregistrer_crise2.png)

*   Étape 3 : Des informations sur ce que l'utilisateur a identifié comme éléments déclencheurs et/ou facteurs apaisants peuvent être ajoutées


![enregistrer_crise3](maquettes\enregistrer_crise3.png)

Lorsque l'utilisateur ajoutent des **déclencheurs** : 


![déclencheur](maquettes\déclencheurs.png)

Lorsque l'utilisateur ajoutent des éléments pour **apaiser** : 


![apaisements](maquettes\apaisements.png)

**6) Onglet Profil** : 


![profil](maquettes\profil.png)


Sur cet onglet, il est possible de gérer la gestion des données dont l'application aurait besoin pour afficher le sommeil ou la fréquence cardiaque. Le **refus de toutes les autorisations** amènent à un changement au niveau de l'onglet menu pour inciter l'utilisateur a accepté cette autorisation (car il est nécessaire d'avoir accès aux données liées au sommeil et à celles liées à la fréquence cardiaque pour l'un des widgets de l'onglet menu) :

![tous_refus](maquettes\tous_refus.png)

Si seule l'autorisation du sommeil est refusée, alors le graphique du widget correspondant ne s'affiche pas : 

![sommeil_refus](maquettes\sommeil_refus.png)

Si seule l'autorisation d'accès à la fréquence cardiaque est refusée, alors le widget affiché est le suivant : 

![refus_cardiaque](maquettes\refus_cardiaque.png)

**7) Onglet Appareils** :
Cette onglet permet (en théorie) d'ajouter des apapreils connectés (comme une montre connectée)

![appareils](maquettes\appareils.png)

Il est possible de dissocier un appareil de l'application en appuyant sur le bouton à droite de l'appareil (trois points) :

![dissocier_appareil](maquettes\dissocier_appareil.png)

**8) Onglet Ma journée** :

![ma_journee](maquettes\ma_journee.png)

Sur cet onglet, l'utilisateur peut ajouter des informations sur ses habitudes (dont la plupart renvoient aux déclencheurs d'une migraine). Cet onglet vise à ce que les utilisateurs ajoutent des informations **lorsqu'ils n'ont pas de migraines**. En effet, les informations sur les migraines sont entrées lorsque l'utilisateur appuie sur le bouton _Enregistrer une crise_. Par exemple, un utilisateur peut indiquer que le café a été un élément déclencheur d'une migraine lors d'une crise (avec le bouton _Enregistrer une crise_). Dans ma journée, il peut indiquer qu'il a consommé X cafés alors qu'il n'a pas eu de migraines. L'intérêt est alors de comparer les jours où l'utilisateur a consommé du café ET a eu une migraine avec les jours où il en a consommé mais n'en a pas eu.



## 3. Développement sur React

- Mise en place d’un système de route avec react-router-dom 
- Mise en place d’un store Redux avec plusieurs reduceurs pour que les informations puissent transiter entre tous les composants (informations sur l’utilisateur, la journée, les migraines…). La plupart des reducers sont chargés et remplis après le login. Tous ces réducers sont dans le dossier "reducer"
- Tout les composants (à part App sont dans le dossiers "component")
- N'ayant pas compris le système d'authentification (avec les tokens) de Directus notre "sécurité" est loin d'être optimale. --> L'application vérifie bien les adresses mails et mots de passe des utilisateurs avant la connexion (elle vérifie si ils font bien partie de la base de donnée) et en fonction de la réponse de la requête ils sont redirigés vers la page d'accueil avec les données relatives à leur profil. De plus, nous n'avons pas compris le fonctionnement du "token" et du "refresh token"
- Utilisation de différents packages pour mettre en place certaines feature :
    - Pour le calendrier, le graph et les « circles » nous avons utilisé des librairies et les avons personnalisés
- Ne sachant pas utiliser et modéliser une base de données de façon traditionnelle (et n'ayant pas eu le temps d'apprendre à le faire) nous avons utilisé une BDD nous avons tout stocké tous les jours de chaque utilisateur dans un tableau d’objet Json . Chaque objet correspond à un Template de jour « typique » (voir image suivante) qui est le suivant :

""""""""""""""""""""""""""""""""""""""""""""""""""""""""
{
        "id": 0,  // Id de la journée qui est enfaite la date complète (car unique)
        "weather": "",
        "alcohol": 0,
        "cofee": 0,
        "sport_duration": 0,
        "sleep": 0,
        "cardiac_freq": 0,
        "migraines": {
            "type": "",
            "intensity": 0,
            "localisation": {
                "frontal": "",
                "lateral": ""
            }
        },
        "declencheurs": [],
        "soulagements": [],
        "duration": 0
    }
]
"""""""""""""""""""""""""""""""""""""""""""""""""""""""


Les fonctionnalités suivantes sont opérationnelles :
    - Création de compte --> Une fois le compte crée, l’utilisateur est redirigé vers login
    - Connexion --> Une fois connecté il est dirigé vers la page d’acceuil
    - Le calendrier :
        - Affiche en rouge les jours qui présentent une migraine
        - Affiche en violet le jour actuel
        - Affiche en bleu les jours sélectionnés (sélectionne un jour)
        - Lorsqu’on clique sur un jour « migraine » (en rouge), une modale s’ouvre et affiche les informations relatives à la migraine de ce jour. Il suffit de faire glisser le modal vers le bas pour le fermer
    - Un graphique concernant le sommeil :
        - Les données sont affichées dynamiquement en faisant la moyenne du sommeil de tous les jours de la personne. 
        - Néanmoins, il était compliqué de styliser le graphique, par conséquent nous ne l’avons pas intégré directement à la page d’accueil
    - Ajouter une migraine pour la journée : une fois les informations sur la migraine enregistrées --> requête PATCH pour mettre à jour la journée. Le programme met à jour le dernier « jour » de la liste (donc le jour actuel).



## 4. Axes à améliorer

Cette application comprend plusieurs axes qui pourraient être améliorés:

- Il serait intéressant de donner à l'utilisateur des conseils personnalisés en fonction des principaux déclencheurs et des moyens mis en oeuvre pour apaiser des migraines. Par exemple, si la relaxation semble efficace pour diminuer la douleur, l'application pourrait proposer des exercices de relaxation lorsqu'un utilisateur enregistre une migraine.

- Dans une mise à jour future de l'application, il serait important d'ajouter une page où il est indiqué pour chaque élément "déclencheur" (caféine, activité physique, etc.) le nombre de fois où cet élément a été responsable d'une migraine et des fois où il n'en a pas été responsable. Pour cela, nous analyserions les données entrées dans l'onglet _Ma journée_ et celles entrées dans _Enregistrer une migraine_, puis l'application ferait une moyenne de ces deux types de données afin d'avoir des données plus précises sur ces déclencheurs.

- Une option "crise en cours" lorsque l'utilisateur renseigne une migraine, et un bouton sur l'application qui permet d'indiquer la fin de cette crise sans avoir à retourner sur "enregistrer une crise". Éventuellement, une notification pourrait être envoyé lorsque l'utilisateur oublie d'indiquer si sa crise est finie ou non.

- Prendre en compte les menstruations pour les utilisatrices, notamment parce qu'il s'agit d'un facteur qui peut déclencher ou amplifier une crise. L'application pourrait demander aux utilisatrices de renseigner les jours de menstruation pour identifier l'influence éventuelle de ce facteur.

- Prendre en compte l'alimentation en donnant la possibilité aux utilisateurs de renseigner les aliments consommés dans l'onglet "ma journée", et vérifier si certains aliments favorisent l'apparition de migraine.

